/* AskME v3 - encrypted document search, local AI, and visual page analysis */
(() => {
  'use strict';

  const BASE = 'data/askme/';
  const HISTORY_KEY = 'pmp_askme_history_v3';
  const MODE_KEY = 'pmp_askme_mode_v3';
  const SESSION_KEY = 'pmp_askme_session_key_v3';
  const AAD = new TextEncoder().encode('askme-v3');
  const WEBLLM_URLS = [
    'https://cdn.jsdelivr.net/npm/@mlc-ai/web-llm@0.2.84/+esm',
    'https://esm.run/@mlc-ai/web-llm@0.2.84'
  ];
  const LOCAL_AI_MODEL = 'Qwen2.5-0.5B-Instruct-q4f16_1-MLC';
  const LOCAL_AI_LABEL = 'Qwen2.5 0.5B';
  const AI_MAX_RETRIES = 3;
  const AI_MIN_FREE_BYTES = 850 * 1024 * 1024;
  const STOP = new Set(('yang dan atau dengan dari untuk pada di ke dalam adalah itu ini apa apakah bagaimana mengapa kenapa siapa kapan dimana mana berapa sebuah suatu antara hasil keluaran output masukan input the a an and or of to in on for is are was were be been being what which how why when where does do did project proyek management manajemen tentang jelaskan tolong materi').split(/\s+/));
  const ACRONYM = {
    wpd:'work performance data',wpi:'work performance information',wpr:'work performance report',
    pmp:'project management plan',eef:'enterprise environmental factors',opa:'organizational process assets',
    ev:'earned value',pv:'planned value',ac:'actual cost',bac:'budget at completion',
    cpi:'cost performance index',spi:'schedule performance index',cv:'cost variance',sv:'schedule variance',
    eac:'estimate at completion',etc:'estimate to complete',vac:'variance at completion',tcpi:'to complete performance index',
    raci:'responsible accountable consulted informed',dod:'definition of done',wbs:'work breakdown structure',
    po:'product owner',sm:'scrum master',mvp:'minimum viable product',ccb:'change control board',
    pert:'program evaluation and review technique'
  };
  const SYN = {
    'rencana manajemen proyek':'project management plan pmp','data kinerja pekerjaan':'work performance data wpd',
    'informasi kinerja pekerjaan':'work performance information wpi','laporan kinerja pekerjaan':'work performance report wpr',
    'pemangku kepentingan':'stakeholder stakeholders','ruang lingkup':'scope','jadwal':'schedule',
    'biaya':'cost','anggaran':'budget','risiko':'risk','masalah':'issue problem','perubahan':'change',
    'permintaan perubahan':'change request','kualitas':'quality','mutu':'quality','pengadaan':'procurement',
    'sumber daya':'resource','komunikasi':'communication','tim':'team','konflik':'conflict',
    'penerimaan formal':'formal acceptance accepted deliverable','hasil kerja':'deliverable',
    'perbandingan':'compare comparing comparison','dibandingkan':'compare comparing','bandingkan':'compare comparing',
    'keluaran':'output outputs','hasil':'output result','masukan':'input inputs','rumus':'formula equation',
    'selisih':'variance','nilai hasil':'earned value','nilai rencana':'planned value','biaya aktual':'actual cost',
    'pelajaran yang dipetik':'lessons learned','daftar risiko':'risk register','daftar masalah':'issue log',
    'jalur kritis':'critical path','float total':'total float','penyeimbangan sumber daya':'resource leveling',
    'penghalusan sumber daya':'resource smoothing','percepatan jadwal':'schedule compression',
    'validasi ruang lingkup':'validate scope','pengendalian kualitas':'control quality',
    'kontrol perubahan terintegrasi':'integrated change control','definisi selesai':'definition of done',
    'asumsi':'assumption assumptions assumption log basis of estimates constraint constraints',
    'anggapan':'assumption assumptions assumption log','batasan':'constraint constraints assumption log'
  };
  const TERM_ID = {
    'work performance data':'data kinerja pekerjaan','work performance information':'informasi kinerja pekerjaan',
    'work performance report':'laporan kinerja pekerjaan','project management plan':'rencana manajemen proyek',
    'project manager':'manajer proyek','project team':'tim proyek','stakeholders':'pemangku kepentingan',
    'stakeholder':'pemangku kepentingan','change request':'permintaan perubahan','change requests':'permintaan perubahan',
    'risk register':'daftar risiko','issue log':'daftar masalah','lessons learned register':'register lessons learned',
    'enterprise environmental factors':'faktor lingkungan perusahaan','organizational process assets':'aset proses organisasi',
    'actual work':'pekerjaan aktual','planned work':'pekerjaan yang direncanakan','actual cost':'biaya aktual',
    'planned value':'nilai rencana','earned value':'nilai hasil','critical path':'jalur kritis',
    'resource leveling':'resource leveling','resource smoothing':'resource smoothing','formal acceptance':'penerimaan formal',
    'verified deliverable':'deliverable terverifikasi','accepted deliverable':'deliverable yang diterima',
    'definition of done':'Definition of Done','product backlog':'product backlog','sprint backlog':'sprint backlog',
    'assumption log':'assumption log','basis of estimates':'basis of estimates','constraints':'constraints'
  };

  const state = {
    manifest:null,key:null,docs:[],docByPage:new Map(),inverted:new Map(),avgLen:1,ready:false,
    mode:localStorage.getItem(MODE_KEY)==='ai'?'ai':'smart',lastUserQuery:'',plainHistory:[],
    imageCache:new Map(),aiEngine:null,aiLoading:null,webllm:null,visionWorker:null,visionReady:false,visionLoading:false,
    els:{},authUnsub:null
  };

  function norm(s){return String(s||'').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[^a-z0-9%+./-]+/g,' ').replace(/\s+/g,' ').trim();}
  function escapeHtml(s){return String(s??'').replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));}
  function expandQuery(q){
    let n=norm(q);
    Object.entries(SYN).sort((a,b)=>b[0].length-a[0].length).forEach(([id,en])=>{const k=norm(id);if(n.includes(k))n+=' '+en;});
    const toks=n.split(' ');const hasWpd=toks.includes('wpd')||n.includes('work performance data');
    const planContext=hasWpd||n.includes('project management plan')||n.includes('rencana manajemen proyek')||n.includes('compare')||n.includes('output');
    toks.forEach(t=>{if(ACRONYM[t]&&(t!=='pmp'||planContext))n+=' '+ACRONYM[t];});
    return norm(n);
  }
  function tokens(q){return [...new Set(expandQuery(q).split(' ').filter(t=>t.length>1&&!STOP.has(t)))];}
  function has(n,...terms){return terms.some(t=>n.includes(norm(t)));}
  function effectiveQuery(q){
    const n=norm(q);const follow=n.length<38||/\b(itu|tersebut|bedanya|kalau begitu|terus|lalu|yang tadi|kenapa begitu)\b/.test(n);
    return follow&&state.lastUserQuery?state.lastUserQuery+' '+q:q;
  }
  function b64ToBytes(b64){const clean=String(b64||'').trim().replace(/\s+/g,'');const bin=atob(clean);const out=new Uint8Array(bin.length);for(let i=0;i<bin.length;i++)out[i]=bin.charCodeAt(i);return out;}
  async function importKey(b64){return crypto.subtle.importKey('raw',b64ToBytes(b64),{name:'AES-GCM'},false,['decrypt']);}
  async function decryptBuffer(buffer){
    const bytes=new Uint8Array(buffer);if(bytes.length<29)throw new Error('Data terenkripsi tidak valid.');
    const iv=bytes.slice(0,12),cipher=bytes.slice(12);
    return crypto.subtle.decrypt({name:'AES-GCM',iv,additionalData:AAD},state.key,cipher);
  }
  async function fetchDecrypt(path,asJson=false){
    const res=await fetch(BASE+path,{cache:'force-cache'});if(!res.ok)throw new Error('Gagal memuat '+path+' ('+res.status+')');
    const plain=await decryptBuffer(await res.arrayBuffer());
    if(asJson)return JSON.parse(new TextDecoder().decode(plain));
    return plain;
  }
  function bucketFor(page){const s=Math.floor((page-1)/100)*100+1;const e=Math.min(s+99,state.manifest?.pages||1086);return String(s).padStart(4,'0')+'-'+String(e).padStart(4,'0');}
  function imagePath(page){return `pages/${bucketFor(page)}/page-${String(page).padStart(4,'0')}.webp.bin`;}

  function setStatus(text,type='ok',detail=''){
    const box=state.els.status,txt=state.els.statusText;if(txt)txt.textContent=text;
    if(box){
      box.classList.remove('loading','error');
      if(type==='loading')box.classList.add('loading');if(type==='error')box.classList.add('error');
      box.title=detail||String(text||'');
    }
  }
  function setProgress(pct){
    if(!state.els.progress)return;const n=Math.max(0,Math.min(100,Number(pct)||0));
    state.els.progress.classList.toggle('show',n>0&&n<100);state.els.progressBar.style.width=n+'%';
    if(n>=100)setTimeout(()=>state.els.progress.classList.remove('show'),350);
  }
  function showLock(title,text,error=''){
    state.els.lock?.classList.add('show');['chat','compose','tools','modebar'].forEach(k=>state.els[k]?.classList.add('locked'));
    if(state.els.lockTitle)state.els.lockTitle.textContent=title;if(state.els.lockText)state.els.lockText.innerHTML=text;if(state.els.unlockError)state.els.unlockError.textContent=error;
  }
  function hideLock(){state.els.lock?.classList.remove('show');['chat','compose','tools','modebar'].forEach(k=>state.els[k]?.classList.remove('locked'));}

  async function unlockWithKey(b64,source='manual'){
    const keyText=String(b64||'').trim();if(!keyText)return;
    try{
      setStatus('Membuka materi…','loading');if(state.els.unlockError)state.els.unlockError.textContent='';
      state.key=await importKey(keyText);
      const manifestRes=await fetch(BASE+'manifest.json',{cache:'no-cache'});if(!manifestRes.ok)throw new Error('manifest.json tidak ditemukan.');
      state.manifest=await manifestRes.json();
      const chunks=await Promise.all(state.manifest.chunkFiles.map(p=>fetchDecrypt(p,true)));
      state.docs=chunks.flat().map(d=>({...d,full:[d.t,d.x,d.ocr].filter(Boolean).join('\n')}));
      state.docByPage=new Map(state.docs.map(d=>[d.p,d]));buildIndex();state.ready=true;
      sessionStorage.setItem(SESSION_KEY,keyText);hideLock();setStatus(`${state.docs.length} halaman siap`);
      if(source==='manual')addMessage('bot','<div class="askme-answer-title">Materi berhasil dibuka</div><div class="askme-answer-main">AskME sudah dapat mencari teks dan menampilkan gambar halaman sumber. Kunci hanya disimpan selama tab browser ini terbuka.</div>',true);
    }catch(err){
      state.key=null;state.ready=false;setStatus('Materi terkunci','error');showLock('Kunci tidak cocok','Masukkan kunci AskME yang tersimpan di Firestore atau file privat.','Gagal membuka data: '+String(err?.message||err));
    }
  }

  function buildIndex(){
    state.inverted=new Map();let totalLen=0;
    state.docs.forEach((d,i)=>{
      const ts=norm(d.full).split(' ').filter(t=>t.length>1);d._len=ts.length||1;totalLen+=d._len;const counts=new Map();ts.forEach(t=>counts.set(t,(counts.get(t)||0)+1));d._counts=counts;
      counts.forEach((tf,t)=>{if(!state.inverted.has(t))state.inverted.set(t,[]);state.inverted.get(t).push([i,tf]);});
    });
    state.avgLen=totalLen/Math.max(1,state.docs.length);
  }
  function search(query,limit=6){
    if(!state.ready)return[];const expanded=expandQuery(query),qt=tokens(query),scores=new Map(),N=state.docs.length,k1=1.45,b=0.72;
    qt.forEach(t=>{
      const postings=state.inverted.get(t)||[];const df=postings.length;const idf=Math.log(1+(N-df+0.5)/(df+0.5));
      postings.forEach(([i,tf])=>{const d=state.docs[i];const val=idf*(tf*(k1+1))/(tf+k1*(1-b+b*d._len/state.avgLen));scores.set(i,(scores.get(i)||0)+val);});
    });
    const phrases=[];Object.values(ACRONYM).forEach(v=>{if(expanded.includes(v))phrases.push(v);});
    Object.entries(SYN).forEach(([id,en])=>{if(norm(query).includes(norm(id)))phrases.push(...en.split(/\s{2,}|,/).map(x=>x.trim()).filter(x=>x.includes(' ')));});
    state.docs.forEach((d,i)=>{
      let s=scores.get(i)||0;const dn=norm(d.full),tn=norm(d.t);
      phrases.forEach(p=>{if(dn.includes(norm(p)))s+=4.5;if(tn.includes(norm(p)))s+=5.5;});
      if(qt.some(t=>tn.includes(t)))s+=2.2;
      if(s>0)scores.set(i,s);
    });
    return [...scores.entries()].sort((a,b)=>b[1]-a[1]).slice(0,limit).map(([i,score])=>({...state.docs[i],score}));
  }

  function factAnswer(query){
    const n=expandQuery(query);const mentions=(...x)=>x.every(v=>n.includes(norm(v)));
    if(has(n,'assumption','asumsi','assumption log')){
      return {title:'Assumption dan Assumption Log',answer:'<p>Dalam konteks materi ANT, <b>assumption</b> adalah anggapan atau kondisi yang dipakai sebagai dasar perencanaan atau penyusunan estimasi, meskipun masih perlu divalidasi.</p><p>Assumption dikelola melalui <b>Project Assumption and Constraint Log</b>. Template pada materi mencatat kategori, definisi assumption/constraint, penanggung jawab, due date, tindakan untuk memvalidasi assumption atau menangani constraint, status, dan komentar. Bila assumption digunakan dalam cost estimating, assumption dan constraint tersebut juga perlu dicatat dalam <b>Basis of Estimates</b>.</p><p>Materi memberi contoh bahwa assumption estimasi yang ternyata salah dapat membuat biaya aktivitas jauh lebih tinggi dari rencana. Jika dasar estimasinya tidak didokumentasikan, project manager juga kesulitan menelusuri assumption dan metode yang digunakan saat merevisi estimasi.</p>',keys:['assumption','assumption log','basis of estimates','constraint','cost estimates']};
    }
    if(has(n,'wpd','work performance data')&&has(n,'pmp','project management plan')&&has(n,'compare','comparison','perbandingan','output','hasil'))return{title:'Jawaban cepat',answer:'Hasilnya adalah <b>Work Performance Information (WPI)</b>. WPD merupakan data aktual mentah; ketika WPD dibandingkan dengan <b>Project Management Plan</b>, hasil analisisnya menjadi WPI. Selanjutnya, kumpulan WPI dikompilasi menjadi <b>Work Performance Report (WPR)</b>.',keys:['work performance data','project management plan','work performance information']};
    if(has(n,'wpd','wpi','wpr')&&(has(n,'beda','difference','perbedaan','vs')||mentions('work performance data','work performance information')))return{title:'Perbedaan WPD, WPI, dan WPR',answer:'<b>WPD</b> = data aktual mentah dari pelaksanaan pekerjaan. <b>WPI</b> = WPD yang sudah dianalisis atau dibandingkan dengan rencana/baseline. <b>WPR</b> = kumpulan WPI yang disusun menjadi laporan status untuk pemangku kepentingan. Ringkasnya: <b>data → informasi → laporan</b>.',keys:['work performance data','work performance information','work performance report']};
    if(has(n,'work performance data','wpd')&&!has(n,'wpi','wpr'))return{title:'Work Performance Data (WPD)',answer:'<b>WPD</b> adalah data aktual mentah yang dikumpulkan saat pekerjaan proyek dilaksanakan, misalnya jam kerja, tanggal, biaya aktual, jumlah cacat, dan pekerjaan yang selesai. WPD belum dibandingkan dengan rencana.',keys:['work performance data']};
    if(has(n,'work performance information','wpi')&&!has(n,'wpr'))return{title:'Work Performance Information (WPI)',answer:'<b>WPI</b> adalah informasi hasil analisis WPD terhadap Project Management Plan atau baseline. WPI menunjukkan status dan selisih antara kinerja aktual dengan yang direncanakan.',keys:['work performance information']};
    if(has(n,'work performance report','wpr'))return{title:'Work Performance Report (WPR)',answer:'<b>WPR</b> adalah laporan status proyek yang disusun dari kumpulan WPI, misalnya status jadwal, biaya, risiko, dan kesehatan proyek. Laporan ini digunakan untuk memperbarui pemangku kepentingan.',keys:['work performance report']};
    if(has(n,'cpi','spi')&&has(n,'formula','rumus','cara membaca','interpret'))return{title:'Rumus CPI dan SPI',answer:'<b>CPI = EV ÷ AC</b>. CPI &gt; 1 berarti efisien/di bawah anggaran; CPI &lt; 1 berarti tidak efisien/di atas anggaran.<br><b>SPI = EV ÷ PV</b>. SPI &gt; 1 berarti lebih cepat dari jadwal; SPI &lt; 1 berarti terlambat.',keys:['cost performance index','schedule performance index','earned value']};
    if(has(n,'cv','cost variance'))return{title:'Cost Variance (CV)',answer:'<b>CV = EV − AC</b>. Nilai positif berarti di bawah anggaran; nilai negatif berarti melebihi anggaran; nol berarti sesuai anggaran.',keys:['cost variance','earned value','actual cost']};
    if(has(n,'sv','schedule variance'))return{title:'Schedule Variance (SV)',answer:'<b>SV = EV − PV</b>. Nilai positif berarti lebih cepat dari jadwal; nilai negatif berarti terlambat; nol berarti sesuai jadwal.',keys:['schedule variance','earned value','planned value']};
    if(has(n,'risk','issue')&&has(n,'beda','difference','perbedaan','vs'))return{title:'Risk vs Issue',answer:'<b>Risk</b> adalah kejadian tidak pasti yang mungkin terjadi di masa depan dan dicatat dalam <b>risk register</b>. <b>Issue</b> adalah masalah yang sudah terjadi sekarang dan dicatat dalam <b>issue log</b>.',keys:['risk register','issue log']};
    if(has(n,'verified deliverable','accepted deliverable','terverifikasi','diterima')&&has(n,'beda','difference','perbedaan','vs'))return{title:'Verified vs Accepted Deliverable',answer:'<b>Verified deliverable</b> telah diperiksa dan memenuhi persyaratan kualitas melalui Control Quality. <b>Accepted deliverable</b> telah memperoleh penerimaan formal dari pelanggan/sponsor melalui Validate Scope.',keys:['verified deliverable','accepted deliverable','validate scope']};
    if(has(n,'resource leveling','resource smoothing')&&has(n,'beda','difference','perbedaan','vs'))return{title:'Resource Leveling vs Smoothing',answer:'<b>Resource leveling</b> menyesuaikan jadwal berdasarkan keterbatasan sumber daya dan dapat mengubah critical path atau memperpanjang durasi proyek. <b>Resource smoothing</b> menggeser aktivitas hanya dalam float yang tersedia sehingga tanggal selesai proyek tidak berubah.',keys:['resource leveling','resource smoothing']};
    if(has(n,'crashing','fast tracking')&&has(n,'beda','difference','perbedaan','vs'))return{title:'Crashing vs Fast-Tracking',answer:'<b>Crashing</b> menambah sumber daya/biaya pada aktivitas critical path untuk memperpendek durasi. <b>Fast-tracking</b> menjalankan aktivitas yang semula berurutan secara tumpang tindih, sehingga meningkatkan risiko rework.',keys:['crashing','fast tracking','schedule compression']};
    if(has(n,'definition of done','dod','definisi selesai'))return{title:'Definition of Done',answer:'<b>Definition of Done</b> adalah kriteria kualitas bersama yang harus dipenuhi agar increment benar-benar dianggap selesai dan siap digunakan/dirilis.',keys:['definition of done','increment']};
    if(has(n,'tuckman','forming','storming','norming','performing'))return{title:'Tahapan Tuckman',answer:'Urutannya adalah <b>Forming → Storming → Norming → Performing</b>, dan dapat diakhiri dengan <b>Adjourning</b>.',keys:['forming','storming','norming','performing']};
    if(has(n,'communication channels','saluran komunikasi','n(n-1)','jumlah komunikasi'))return{title:'Communication Channels',answer:'Jumlah saluran komunikasi dihitung dengan rumus <b>n(n−1) ÷ 2</b>, dengan n = jumlah orang yang berkomunikasi.',keys:['communication channels']};
    if(has(n,'pert','three point','tiga titik')&&has(n,'formula','rumus'))return{title:'Rumus PERT',answer:'Estimasi PERT berbobot: <b>(O + 4M + P) ÷ 6</b>, dengan O = optimistic, M = most likely, dan P = pessimistic.',keys:['pert','optimistic','most likely','pessimistic']};
    if(has(n,'raci'))return{title:'RACI',answer:'<b>R</b>esponsible = pelaksana; <b>A</b>ccountable = pemilik akuntabilitas akhir; <b>C</b>onsulted = dimintai masukan dua arah; <b>I</b>nformed = diberi informasi satu arah.',keys:['raci','responsible','accountable','consulted','informed']};
    if(has(n,'eef','opa')&&has(n,'beda','difference','perbedaan','vs'))return{title:'EEF vs OPA',answer:'<b>EEF</b> adalah kondisi lingkungan internal/eksternal yang memengaruhi proyek dan biasanya tidak dikendalikan tim. <b>OPA</b> adalah aset organisasi seperti kebijakan, prosedur, template, basis pengetahuan, dan lessons learned.',keys:['enterprise environmental factors','organizational process assets']};
    return null;
  }

  function sentenceCandidates(text,qt){
    const clean=String(text||'').replace(/\n+/g,' ').replace(/\s+/g,' ').trim();
    return clean.split(/(?<=[.!?])\s+|\s+[▪•❖❑]\s*/).map(s=>s.trim()).filter(s=>s.length>35&&s.length<460).map(s=>({s,hit:qt.filter(t=>norm(s).includes(t)).length})).sort((a,b)=>b.hit-a.hit||a.s.length-b.s.length);
  }
  function translateLite(s){
    let out=s;Object.entries(TERM_ID).sort((a,b)=>b[0].length-a[0].length).forEach(([en,id])=>{out=out.replace(new RegExp(en.replace(/[.*+?^${}()|[\]\\]/g,'\\$&'),'gi'),id);});
    [[/\bis the process of\b/gi,'adalah proses untuk'],[/\bis used to\b/gi,'digunakan untuk'],[/\bare used to\b/gi,'digunakan untuk'],[/\bis made by\b/gi,'dihasilkan dengan'],[/\bwill show\b/gi,'menunjukkan'],[/\bshows the difference between\b/gi,'menunjukkan perbedaan antara'],[/\bcompared against\b/gi,'dibandingkan dengan'],[/\bcompared to\b/gi,'dibandingkan dengan'],[/\bthe purpose of\b/gi,'tujuan'],[/\bthe key benefit\b/gi,'manfaat utama'],[/\bshould\b/gi,'sebaiknya'],[/\bmust\b/gi,'harus'],[/\bactual\b/gi,'aktual'],[/\bplanned\b/gi,'direncanakan'],[/\bperformance\b/gi,'kinerja'],[/\bprogress\b/gi,'kemajuan'],[/\bproject\b/gi,'proyek'],[/\bprocess\b/gi,'proses'],[/\bwork\b/gi,'pekerjaan'],[/\bstatus\b/gi,'status']].forEach(([a,b])=>out=out.replace(a,b));
    return out.replace(/^[-▪•❖❑\s]+/,'').trim();
  }
  function genericAnswer(query,results){
    if(!results.length)return{title:'Belum ditemukan',answer:'Saya belum menemukan kecocokan yang cukup kuat dalam materi ANT 2026. Gunakan istilah proses, singkatan, atau kata kunci PMP yang lebih spesifik.',keys:[]};
    const qt=tokens(query),seen=new Set(),parts=[];
    for(const r of results.slice(0,4)){
      for(const c of sentenceCandidates(r.full,qt)){const k=norm(c.s).slice(0,150);if(seen.has(k))continue;seen.add(k);parts.push(translateLite(c.s));if(parts.length>=3)break;}
      if(parts.length>=3)break;
    }
    const body=parts.length?'<ul>'+parts.map(p=>'<li>'+escapeHtml(p)+'</li>').join('')+'</ul>':'Materi paling relevan ditemukan pada topik <b>'+escapeHtml(results[0].t)+'</b>. Buka gambar halaman sumber untuk konteks visual.';
    return{title:'Jawaban berdasarkan materi',answer:'<p>Topik paling relevan: <b>'+escapeHtml(results[0].t)+'</b>.</p>'+body,keys:qt};
  }
  function excerpt(d,keys){const text=String(d.full||'').replace(/\n+/g,' ').replace(/\s+/g,' ').trim();const terms=(keys||[]).map(norm).filter(Boolean);let pos=-1;for(const t of terms){pos=norm(text).indexOf(t);if(pos>=0)break;}const start=Math.max(0,(pos<0?0:pos)-90),end=Math.min(text.length,start+330);return(start?'…':'')+text.slice(start,end)+(end<text.length?'…':'');}
  function highlight(text,keys){let safe=escapeHtml(text);[...new Set((keys||[]).map(String).filter(x=>x.length>2))].sort((a,b)=>b.length-a.length).slice(0,8).forEach(t=>{try{safe=safe.replace(new RegExp('('+t.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')+')','ig'),'<mark>$1</mark>');}catch(_){}});return safe;}

  function sourceHtml(results,keys){
    if(!results.length)return'';
    return '<div class="askme-source-wrap"><div class="askme-source-label">Sumber materi ANT 2026 · klik gambar untuk memperbesar</div>'+results.slice(0,3).map(r=>`<div class="askme-source-card" data-source-page="${r.p}"><div class="askme-source-thumb" data-page-thumb="${r.p}" title="Buka halaman ${r.p}"><span>Memuat gambar…</span></div><div class="askme-source-body"><div class="askme-source-top"><div class="askme-source-title">${escapeHtml(r.t)}</div><div class="askme-source-page">Hal. ${r.p}</div></div><div class="askme-source-text">${highlight(excerpt(r,keys),keys)}</div><div class="askme-source-actions"><button class="askme-source-btn" type="button" data-open-page="${r.p}">Lihat halaman</button><button class="askme-source-btn visual" type="button" data-visual-page="${r.p}">Analisis visual lokal</button></div></div></div>`).join('')+'</div>';
  }

  function addMessage(role,content,save=true){
    if(!state.els.chat)return null;const wrap=document.createElement('div');wrap.className='askme-message '+role;const av=document.createElement('div');av.className='askme-avatar';av.textContent=role==='user'?'👤':'💡';const bubble=document.createElement('div');bubble.className='askme-bubble';bubble.innerHTML=content;wrap.append(av,bubble);state.els.chat.appendChild(wrap);state.els.chat.scrollTop=state.els.chat.scrollHeight;if(save)saveHistory();return wrap;
  }
  function addGreeting(){addMessage('bot','<div class="askme-answer-title">Halo, saya AskME</div><div class="askme-answer-main"><p>Saya mencari jawaban dari materi ANT PMP 2026 dan dapat menampilkan <b>gambar halaman sumber</b>.</p><p>Mode <b>Smart</b> ringan dan langsung siap. Mode <b>AI Lokal</b> memakai model multilingual yang disimpan di IndexedDB, dengan percobaan ulang otomatis bila koneksi terputus.</p></div><div class="askme-answer-note">Contoh: “Apa itu assumption dan bagaimana mengelolanya?”</div>',false);}
  function saveHistory(){try{const items=[...state.els.chat.querySelectorAll('.askme-message')].slice(-24).map(m=>({role:m.classList.contains('user')?'user':'bot',html:m.querySelector('.askme-bubble').innerHTML}));localStorage.setItem(HISTORY_KEY,JSON.stringify(items));}catch(_){}}
  function loadHistory(){try{const arr=JSON.parse(localStorage.getItem(HISTORY_KEY)||'[]');if(Array.isArray(arr)&&arr.length){arr.forEach(x=>addMessage(x.role==='user'?'user':'bot',x.html,false));return;}}catch(_){}addGreeting();}
  function clear(){state.els.chat.innerHTML='';state.plainHistory=[];state.lastUserQuery='';try{localStorage.removeItem(HISTORY_KEY);}catch(_){}addGreeting();}
  function resizeInput(){if(!state.els.input)return;state.els.input.style.height='auto';state.els.input.style.height=Math.min(120,state.els.input.scrollHeight)+'px';}
  function renderSimpleMarkdown(text){let s=escapeHtml(text||'').replace(/\*\*(.+?)\*\*/g,'<b>$1</b>');const lines=s.split(/\n/);let html='',inList=false;for(const line of lines){if(/^\s*[-•]\s+/.test(line)){if(!inList){html+='<ul>';inList=true;}html+='<li>'+line.replace(/^\s*[-•]\s+/,'')+'</li>';}else{if(inList){html+='</ul>';inList=false;}if(line.trim())html+='<p>'+line+'</p>';}}if(inList)html+='</ul>';return html||'<p>Tidak ada jawaban.</p>';}

  async function getPageBlob(page){
    if(state.imageCache.has(page))return state.imageCache.get(page).blob;
    const plain=await fetchDecrypt(imagePath(page),false);const blob=new Blob([plain],{type:'image/webp'});const url=URL.createObjectURL(blob);state.imageCache.set(page,{blob,url});
    if(state.imageCache.size>18){const first=state.imageCache.keys().next().value;const old=state.imageCache.get(first);URL.revokeObjectURL(old.url);state.imageCache.delete(first);}
    return blob;
  }
  async function getPageUrl(page){if(state.imageCache.has(page))return state.imageCache.get(page).url;await getPageBlob(page);return state.imageCache.get(page).url;}
  async function getPageDataUrl(page){const blob=await getPageBlob(page);return new Promise((resolve,reject)=>{const r=new FileReader();r.onload=()=>resolve(r.result);r.onerror=reject;r.readAsDataURL(blob);});}
  async function hydrateSources(root){
    const scope=root||state.els.chat;for(const el of scope.querySelectorAll('[data-page-thumb]:not([data-loaded])')){el.dataset.loaded='1';const p=Number(el.dataset.pageThumb);el.addEventListener('click',()=>openPage(p));try{const img=document.createElement('img');img.loading='lazy';img.alt='Halaman '+p;img.src=await getPageUrl(p);el.innerHTML='';el.appendChild(img);}catch(_){el.textContent='Gambar gagal dimuat';}}
    scope.querySelectorAll('[data-open-page]:not([data-bound])').forEach(b=>{b.dataset.bound='1';b.addEventListener('click',()=>openPage(Number(b.dataset.openPage)));});
    scope.querySelectorAll('[data-visual-page]:not([data-bound])').forEach(b=>{b.dataset.bound='1';b.addEventListener('click',()=>visualAnalyze(Number(b.dataset.visualPage),b));});
  }
  async function openPage(page){
    try{state.els.pageTitle.textContent='ANT PMP 2026 · Halaman '+page;state.els.pageImage.removeAttribute('src');state.els.pageModal.classList.add('show');state.els.pageImage.src=await getPageUrl(page);}catch(err){alert('Gagal membuka gambar halaman: '+String(err?.message||err));}
  }
  function closePage(){state.els.pageModal.classList.remove('show');}

  function sleep(ms){return new Promise(resolve=>setTimeout(resolve,ms));}
  function formatBytes(bytes){
    const n=Number(bytes)||0;if(n>=1024**3)return(n/1024**3).toFixed(1)+' GB';if(n>=1024**2)return Math.round(n/1024**2)+' MB';return Math.round(n/1024)+' KB';
  }
  function progressSummary(report,attempt){
    const full=String(report?.text||'').trim();const pct=Math.max(0,Math.min(100,Math.round((Number(report?.progress)||0)*100)));
    const fetched=full.match(/([0-9.]+\s*(?:KB|MB|GB))\s+fetched/i)?.[1];
    const part=full.match(/cache\s*\[(\d+\/\d+)\]/i)?.[1];
    return {pct,full,short:`AI Lokal ${pct}%${fetched?' · '+fetched:''}${part?' · '+part:''}${attempt>1?' · coba '+attempt+'/'+AI_MAX_RETRIES:''}`};
  }
  function isRetryableAIError(err){
    const m=String(err?.message||err||'').toLowerCase();
    return /network|fetch|cache\.add|failed to execute 'add'|load failed|connection|timeout|temporar|abort|http|body stream/.test(m);
  }
  async function prepareAIStorage(){
    try{if(navigator.storage?.persist)await navigator.storage.persist();}catch(_){}
    try{
      if(navigator.storage?.estimate){
        const e=await navigator.storage.estimate();const free=Math.max(0,(e.quota||0)-(e.usage||0));
        if(e.quota&&free<AI_MIN_FREE_BYTES)throw new Error(`Ruang penyimpanan browser tersisa sekitar ${formatBytes(free)}. Sediakan minimal sekitar 850 MB untuk AI Lokal.`);
      }
    }catch(err){if(/Sediakan minimal/.test(String(err?.message||err)))throw err;}
  }
  async function loadWebLLM(){
    if(state.webllm)return state.webllm;let lastErr;
    for(const url of WEBLLM_URLS){
      try{state.webllm=await import(url);return state.webllm;}catch(err){lastErr=err;}
    }
    throw new Error('Library AI lokal gagal dimuat dari CDN. '+String(lastErr?.message||lastErr||''));
  }
  async function createAIEngine(webllm,attempt){
    const appConfig={...webllm.prebuiltAppConfig,cacheBackend:'indexeddb'};
    return webllm.CreateMLCEngine(LOCAL_AI_MODEL,{
      appConfig,
      initProgressCallback:(p)=>{
        const info=progressSummary(p,attempt);setProgress(info.pct);setStatus(info.short,'loading',info.full||info.short);
      }
    });
  }
  async function ensureAI(){
    if(state.aiEngine)return state.aiEngine;if(state.aiLoading)return state.aiLoading;if(!navigator.gpu)throw new Error('WebGPU tidak tersedia pada browser/perangkat ini.');
    state.aiLoading=(async()=>{
      await prepareAIStorage();setStatus('Menyiapkan AI Lokal…','loading');setProgress(1);
      const webllm=await loadWebLLM();let lastErr;
      for(let attempt=1;attempt<=AI_MAX_RETRIES;attempt++){
        try{
          if(attempt>1){setStatus(`Koneksi terputus · melanjutkan coba ${attempt}/${AI_MAX_RETRIES}`,'loading');await sleep(1200*attempt);}
          state.aiEngine=await createAIEngine(webllm,attempt);setProgress(100);setStatus(`AI Lokal siap · ${LOCAL_AI_LABEL}`);return state.aiEngine;
        }catch(err){
          lastErr=err;state.aiEngine=null;
          if(attempt>=AI_MAX_RETRIES||!isRetryableAIError(err))throw err;
        }
      }
      throw lastErr||new Error('AI Lokal gagal dimuat.');
    })().catch(err=>{
      state.aiLoading=null;state.aiEngine=null;setProgress(0);setStatus('AI Lokal gagal · Smart tetap siap','error',String(err?.message||err));
      if(isRetryableAIError(err))throw new Error('Unduhan model terputus setelah 3 percobaan. Klik AI Lokal lagi saat koneksi lebih stabil; bagian yang telah tersimpan di IndexedDB biasanya tidak perlu diunduh ulang.');
      throw err;
    });
    return state.aiLoading;
  }
  async function setMode(mode){
    if(mode==='ai'){
      if(!navigator.gpu){alert('AI Lokal memerlukan browser dengan WebGPU. Mode Smart tetap dapat digunakan.');return;}
      if(!state.aiEngine){
        const ok=confirm(`AI Lokal (${LOCAL_AI_LABEL}) akan mengunduh model ke IndexedDB browser. Unduhan dapat dilanjutkan otomatis hingga ${AI_MAX_RETRIES} kali jika koneksi terputus. Semua proses berjalan di perangkat. Lanjutkan?`);
        if(!ok)return;
        state.els.modeAI.disabled=true;state.els.modeAI.textContent='⏳ Menyiapkan…';
        try{await ensureAI();}catch(err){alert('Gagal memuat AI lokal: '+String(err?.message||err));return;}finally{state.els.modeAI.disabled=false;state.els.modeAI.textContent='🧠 AI Lokal';}
      }
    }
    state.mode=mode;localStorage.setItem(MODE_KEY,mode);updateModeUI();
  }
  function updateModeUI(){state.els.modeSmart?.classList.toggle('active',state.mode==='smart');state.els.modeAI?.classList.toggle('active',state.mode==='ai');if(state.els.modeInfo)state.els.modeInfo.textContent=state.mode==='ai'?`AI lokal ${LOCAL_AI_LABEL} menyusun jawaban dari halaman yang ditemukan.`:'Pencarian pintar ringan tanpa unduhan model.';}
  function buildContext(results){return results.slice(0,5).map(r=>`[HALAMAN ${r.p} — ${r.t}]\n${String(r.full||'').slice(0,2600)}`).join('\n\n').slice(0,10500);}
  async function aiAnswer(question,results){
    const engine=await ensureAI();const context=buildContext(results);const prior=state.plainHistory.slice(-4).map(x=>({role:x.role,content:x.content}));
    const messages=[{role:'system',content:'Anda adalah tutor PMP berbahasa Indonesia. Jawab hanya berdasarkan KONTEKS MATERI ANT yang diberikan. Berikan jawaban langsung, lalu penjelasan ringkas. Jangan mengarang. Jika konteks tidak cukup, katakan bahwa materi yang ditemukan belum cukup. Sebut nomor halaman yang mendukung, tetapi jangan membuat nomor halaman baru.'},...prior,{role:'user',content:`PERTANYAAN:\n${question}\n\nKONTEKS MATERI ANT:\n${context}`}];
    const out=await engine.chat.completions.create({messages,temperature:0.15,max_tokens:520});return out?.choices?.[0]?.message?.content||'';
  }

  function ensureVisionWorker(){
    if(state.visionWorker)return state.visionWorker;if(!navigator.gpu)throw new Error('WebGPU tidak tersedia.');
    const w=new Worker(BASE+'vision-worker.js',{type:'module'});state.visionWorker=w;return w;
  }
  async function visualAnalyze(page,button){
    if(!navigator.gpu){alert('Analisis visual lokal memerlukan WebGPU. Gambar halaman tetap dapat dibuka melalui tombol Lihat halaman.');return;}
    const doc=state.docByPage.get(page);const question=state.lastUserQuery||'Jelaskan isi utama halaman ini.';button.disabled=true;button.textContent='Menyiapkan visual AI…';
    try{
      const worker=ensureVisionWorker();const image=await getPageDataUrl(page);const prompt=`Analisis halaman materi PMP ini untuk membantu menjawab pertanyaan: "${question}". Jawab dalam Bahasa Indonesia. Gunakan informasi yang benar-benar terlihat pada gambar dan konteks teks berikut. Jika teks kecil tidak terbaca, katakan keterbatasannya.\n\nKonteks teks halaman: ${String(doc?.full||'').slice(0,2200)}`;
      const result=await new Promise((resolve,reject)=>{
        const handler=(e)=>{const d=e.data||{};if(d.status==='loading'){setStatus(d.message||'Memuat model visual…','loading');}else if(d.status==='progress'){const p=d.data?.progress;if(typeof p==='number')setProgress(p);}else if(d.status==='ready'){state.visionReady=true;setStatus('Model visual siap');}else if(d.status==='complete'){worker.removeEventListener('message',handler);resolve(d.output||'');}else if(d.status==='error'){worker.removeEventListener('message',handler);reject(new Error(d.message||'Visual AI error'));}};
        worker.addEventListener('message',handler);worker.postMessage({type:'analyze',data:{image,prompt}});
      });
      const card=document.createElement('div');card.className='askme-source-card visual-result';card.innerHTML='<div class="askme-source-top"><div class="askme-source-title">Analisis visual · Halaman '+page+'</div></div><div class="askme-visual-text">'+renderSimpleMarkdown(result)+'</div>';button.closest('.askme-source-card')?.after(card);setStatus(`${state.docs.length} halaman siap`);saveHistory();
    }catch(err){alert('Analisis visual gagal: '+String(err?.message||err));setStatus('Materi siap');}finally{button.disabled=false;button.textContent='Analisis visual lokal';}
  }

  async function askText(q){
    q=String(q||'').trim();if(!q||!state.ready)return;const retrievalQuery=effectiveQuery(q);state.lastUserQuery=retrievalQuery;
    addMessage('user',escapeHtml(q));state.plainHistory.push({role:'user',content:q});state.els.input.value='';resizeInput();state.els.send.disabled=true;
    const typing=addMessage('bot','<div class="askme-typing" aria-label="Mencari jawaban"><span></span><span></span><span></span></div>',false);
    try{
      const results=search(retrievalQuery,6);let title,body,keys=tokens(retrievalQuery),answerPlain='';
      if(state.mode==='ai'){
        answerPlain=await aiAnswer(q,results);title='Jawaban AI Lokal';body=renderSimpleMarkdown(answerPlain);
      }else{
        const fact=factAnswer(retrievalQuery),ans=fact||genericAnswer(retrievalQuery,results);title=ans.title;body=ans.answer;keys=ans.keys?.length?ans.keys:keys;answerPlain=body.replace(/<[^>]+>/g,' ');
      }
      const html='<div class="askme-answer-title">'+escapeHtml(title)+'</div><div class="askme-answer-main">'+body+'</div><div class="askme-answer-note">Jawaban dibatasi pada materi ANT yang ditemukan. Buka gambar sumber untuk memeriksa diagram/tabel aslinya.</div>'+sourceHtml(results,keys);
      typing.querySelector('.askme-bubble').innerHTML=html;state.plainHistory.push({role:'assistant',content:answerPlain.slice(0,1800)});await hydrateSources(typing);saveHistory();
    }catch(err){typing.querySelector('.askme-bubble').innerHTML='<div class="askme-answer-title">Terjadi kendala</div><div class="askme-answer-main">'+escapeHtml(String(err?.message||err))+'</div><div class="askme-answer-note">Mode Smart dapat dipakai tanpa model AI.</div>';}
    finally{state.els.send.disabled=false;state.els.chat.scrollTop=state.els.chat.scrollHeight;}
  }

  async function tryFirestoreKey(user){
    if(!user)return false;try{setStatus('Mengambil kunci dari Firestore…','loading');const db=firebase.firestore();const snap=await db.collection('appConfig').doc('askme').get();const b64=snap.exists?snap.data()?.knowledgeKeyB64:null;if(!b64)return false;await unlockWithKey(b64,'firestore');return state.ready;}catch(err){console.warn('AskME key fetch failed',err);return false;}
  }
  function startAuth(){
    const saved=sessionStorage.getItem(SESSION_KEY);if(saved){unlockWithKey(saved,'session');return;}
    if(!window.firebase?.auth){showLock('Login diperlukan','Login dengan Google terlebih dahulu. Jika kunci Firestore belum dipasang, masukkan kunci privat secara manual.');return;}
    state.authUnsub=firebase.auth().onAuthStateChanged(async user=>{
      if(!user){state.ready=false;state.key=null;setStatus('Menunggu login','error');showLock('Login diperlukan','AskME menggunakan data terenkripsi. Login Google diperlukan untuk mengambil kunci dari Firestore.');return;}
      const ok=await tryFirestoreKey(user);if(!ok){setStatus('Kunci belum tersedia','error');showLock('Kunci AskME belum ditemukan','Akun sudah login, tetapi document <b>appConfig/askme</b> belum berisi field <b>knowledgeKeyB64</b> atau aturan Firestore menolak akses. Masukkan kunci privat untuk pengujian.');}
    });
  }

  function bindUI(){
    state.els={
      status:document.getElementById('askme-status'),statusText:document.getElementById('askme-status-text'),progress:document.getElementById('askme-progress'),progressBar:document.getElementById('askme-progress-bar'),
      lock:document.getElementById('askme-lock'),lockTitle:document.getElementById('askme-lock-title'),lockText:document.getElementById('askme-lock-text'),unlockInput:document.getElementById('askme-key-input'),unlockBtn:document.getElementById('askme-unlock-btn'),unlockError:document.getElementById('askme-unlock-error'),
      chat:document.getElementById('askme-chat'),compose:document.getElementById('askme-compose'),tools:document.getElementById('askme-tools'),modebar:document.getElementById('askme-modebar'),input:document.getElementById('askme-input'),send:document.getElementById('askme-send'),clear:document.getElementById('askme-clear'),modeSmart:document.getElementById('askme-mode-smart'),modeAI:document.getElementById('askme-mode-ai'),modeInfo:document.getElementById('askme-mode-info'),
      pageModal:document.getElementById('askme-page-modal'),pageImage:document.getElementById('askme-page-image'),pageTitle:document.getElementById('askme-page-title'),pageClose:document.getElementById('askme-page-close')
    };
    if(!state.els.chat)return false;loadHistory();updateModeUI();if(!navigator.gpu){state.els.modeAI.disabled=true;state.els.modeAI.title='WebGPU tidak tersedia';}
    state.els.send.addEventListener('click',()=>askText(state.els.input.value));state.els.input.addEventListener('input',resizeInput);state.els.input.addEventListener('keydown',e=>{if(e.key==='Enter'&&!e.shiftKey){e.preventDefault();askText(state.els.input.value);}});state.els.clear.addEventListener('click',clear);
    state.els.unlockBtn.addEventListener('click',()=>unlockWithKey(state.els.unlockInput.value,'manual'));state.els.unlockInput.addEventListener('keydown',e=>{if(e.key==='Enter')unlockWithKey(state.els.unlockInput.value,'manual');});
    state.els.modeSmart.addEventListener('click',()=>setMode('smart'));state.els.modeAI.addEventListener('click',()=>setMode('ai'));state.els.pageClose.addEventListener('click',closePage);state.els.pageModal.addEventListener('click',e=>{if(e.target===state.els.pageModal)closePage();});document.addEventListener('keydown',e=>{if(e.key==='Escape')closePage();});
    document.querySelectorAll('[data-askme-question]').forEach(btn=>btn.addEventListener('click',()=>askText(btn.getAttribute('data-askme-question'))));
    return true;
  }
  function init(){if(!bindUI())return;showLock('Menyiapkan AskME','Memeriksa login dan kunci materi…');startAuth();}

  async function resetLocalAI(){
    state.aiEngine=null;state.aiLoading=null;state.webllm=null;localStorage.setItem(MODE_KEY,'smart');state.mode='smart';updateModeUI();setProgress(0);setStatus(state.ready?`${state.docs.length} halaman siap`:'Materi siap');
  }
  window.AskME={init,search,askText,clear,openPage,unlock:unlockWithKey,setMode,resetLocalAI};
  document.addEventListener('DOMContentLoaded',init);
})();
