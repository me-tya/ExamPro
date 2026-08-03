const ECO2026_TASKS={P1:'Develop a common vision',P2:'Manage conflicts',P3:'Lead the project team',P4:'Engage stakeholders',P5:'Align stakeholder expectations',P6:'Manage stakeholder expectations',P7:'Help ensure knowledge transfer',P8:'Plan and manage communication',PR1:'Develop an integrated project management plan and plan delivery',PR2:'Develop and manage project scope',PR3:'Help ensure value-based delivery',PR4:'Plan and manage resources',PR5:'Plan and manage procurement',PR6:'Plan and manage finance',PR7:'Plan and optimize quality of products/deliverables',PR8:'Plan and manage schedule',PR9:'Evaluate project status',PR10:'Manage project closure',BE1:'Define and establish project governance',BE2:'Plan and manage project compliance',BE3:'Manage and control changes',BE4:'Remove impediments and manage issues',BE5:'Plan and manage risk',BE6:'Continuous improvement',BE7:'Support organizational change',BE8:'Evaluate external business environment changes'};
function ecoText(q){return [q.q,q.q2,q.scenario,q.caseTitle,q.chapter,q.exp,Object.values(q.opts||{}).join(' ')].filter(Boolean).join(' ').toLowerCase();}
function ecoHash(s){let h=2166136261;for(let i=0;i<String(s).length;i++){h^=String(s).charCodeAt(i);h=Math.imul(h,16777619);}return h>>>0;}
function canonicalDomain(q){const d=String(q.domain||'Process').toLowerCase();return d.includes('people')?'People':d.includes('business')?'Business Environment':'Process';}
function ecoApproach(q){const t=ecoText(q);if(/\bhybrid\b|predictive\s+(?:and|&)\s+(?:agile|adaptive)|(?:agile|adaptive)\s+(?:and|&)\s+predictive/.test(t))return 'Hybrid';if(/\bagile\b|\bscrum\b|sprint|product owner|product backlog|backlog refinement|user stor|iteration|velocity|retrospective|daily stand.?up|kanban|servant leader|adaptive|definition of done|timebox/.test(t))return 'Agile';if(/critical path|work breakdown structure|\bwbs\b|scope baseline|schedule baseline|cost baseline|integrated change control|change control board|\bccb\b|earned value|\bcpi\b|\bspi\b|waterfall|fixed scope|project management plan|network diagram|float|crashing|fast.?tracking/.test(t))return 'Predictive';const a=String(q.approach||'').toLowerCase();if(a.includes('hybrid'))return 'Hybrid';if(a.includes('agile')||a.includes('adaptive'))return 'Agile';return 'Predictive';}
function inferEcoTask(q){const t=ecoText(q),d=canonicalDomain(q);
 if(d==='People'){
  if(/shared vision|common vision|project vision|vision alignment|purpose|project objective/.test(t))return 'P1';
  if(/conflict|disagree|ground rule|tension|confront|compromise|withdraw|smooth|argument/.test(t))return 'P2';
  if(/knowledge transfer|cross.?train|mentor|knowledge sharing|knowledge repository|succession|handover/.test(t))return 'P7';
  if(/communication|reporting|feedback loop|meeting|virtual team|time zone|active listening|information distribution/.test(t))return 'P8';
  if(/align.*expectation|conflicting expectation|shared expectation|reconcile.*expectation|expectation.*alignment/.test(t))return 'P5';
  if(/customer satisfaction|stakeholder satisfaction|manage.*expectation|monitor.*expectation|customer expectation|acceptance.*customer/.test(t))return 'P6';
  if(/identify stakeholder|stakeholder analysis|power.interest|salience|categorize stakeholder|map stakeholder|engage stakeholder|influence stakeholder|stakeholder engagement/.test(t))return 'P4';
  if(/stakeholder|customer/.test(t)){const r=ecoHash(q.bankId||q.id||q.q)%3;return r===0?'P4':r===1?'P5':'P6';}
  return 'P3';
 }
 if(d==='Process'){
  if(/close project|project closure|closeout|formal acceptance|handover|hand.off|transition to operations|final report|release resources/.test(t))return 'PR10';
  if(/procurement|vendor|seller|supplier|contract|bidder|proposal|make.or.buy|source selection|negotiat/.test(t))return 'PR5';
  if(/resource requirement|resource allocation|resource availability|acquire resource|estimate resource|staffing|resource calendar|resource plan/.test(t))return 'PR4';
  if(/earned value|\bevm\b|\bcpi\b|\bspi\b|budget|cost estimate|cost baseline|financial|finance|funding|reserve analysis|\bbac\b|\beac\b|\betc\b|\bvac\b|\btcpi\b/.test(t))return 'PR6';
  if(/quality|defect|testing|test plan|inspection|control chart|pareto|acceptance criteria|definition of done|quality assurance|quality control|cost of quality|sampling/.test(t))return 'PR7';
  if(/schedule|critical path|duration|milestone|dependency|network diagram|float|lead|lag|crashing|fast.?tracking|resource smoothing|resource leveling/.test(t))return 'PR8';
  if(/scope|requirement|\bwbs\b|work breakdown|requirements traceability|product scope|project scope|validate scope/.test(t))return 'PR2';
  if(/business value|value delivery|benefit|minimum viable|\bmvp\b|minimum marketable|incremental value|return on investment|\broi\b|customer value|release value|prioriti[sz].*value/.test(t))return 'PR3';
  if(/project status|status report|work performance|dashboard|metric|variance analysis|trend analysis|forecast|artifact|information radiator|progress report/.test(t))return 'PR9';
  return 'PR1';
 }
 // Business Environment
 if(/organizational change|change management|adoption|resistan|organizational culture|culture change|behavior change|business transformation|transition readiness/.test(t))return 'BE7';
 if(/external business|geopolit|market shift|competitor|economic|technology trend|end.of.support|regulatory change|new regulation|artificial intelligence|\bai\b/.test(t))return 'BE8';
 if(/compliance|regulat|legal|security|safety|privacy|ethical|ethics|audit requirement|environmental standard|sustainability/.test(t))return 'BE2';
 if(/change request|change control|scope creep|approved change|change log|baseline change|configuration management/.test(t))return 'BE3';
 if(/\brisk\b|risk register|risk response|threat|opportunity|contingency reserve|risk appetite|risk threshold|monte carlo/.test(t))return 'BE5';
 if(/impediment|blocker|issue log|\bissue\b|obstacle|roadblock|problem/.test(t))return 'BE4';
 if(/continuous improvement|lessons learned|retrospective|process improvement|organizational process asset|\bopa\b|kaizen/.test(t))return 'BE6';
 return 'BE1';
}
function taskDomain(task){return task.startsWith('P')&&!task.startsWith('PR')?'People':task.startsWith('PR')?'Process':'Business Environment';}

const ECO2026_CASE_TEXT_FALLBACKS={"Case Study 2: Agile Adoption":"A mid-sized logistics company with a long history of predictive project management has launched a pilot program to modernize its software delivery practices. A new customer-facing software product has been selected as the pilot project and assigned to an experienced project manager with an extensive background in predictive methodologies.\n\nThe software product's requirements have not been fully defined, as customer needs are expected to evolve throughout development. A Product Owner has been assigned to manage the product backlog, and the team operates in two-week sprints. Early in the project, the team struggled to self-organize during sprint planning. The project manager responded by assigning specific tasks to team members at the start of each sprint.\n\nMidway through the project, the project manager reprioritized several backlog items, moving lower-priority items to the end of the backlog to reduce near-term scope and meet a delivery deadline.\n\nAs the project continues, team members have begun waiting for direction at the start of each sprint rather than coordinating among themselves, and several team members have expressed discomfort with the lack of visibility into work beyond the current sprint.","Case Study 3: Office Building Construction":"A project manager is overseeing the construction of a new five-story office building for a commercial real estate developer. Early in the planning phase, the project manager identified several risks, including soil instability, equipment failure, and supply chain disruptions, logging each in the risk register with probability ratings and potential impact assessments.\n\nThe project manager ran thousands of iterative calculations using probability distributions for each risk variable to forecast a range of possible project outcomes and their likelihood. The project manager then examined which individual risk variables had the greatest potential effect on the project by varying each factor independently while holding others constant. Based on this analysis, the project manager developed risk response plans for each identified risk and established mandatory weekly safety meetings as a site-wide risk mitigation measure.\n\nAttendance at the safety meetings was inconsistent, with several team members missing sessions due to competing work demands.\n\nAs construction progressed, an updated geotechnical assessment revealed changes in soil composition in the northwestern section of the site. Upon reviewing the findings, a site supervisor mentioned to the project manager that the soil readings seemed unusual and expressed some concern about whether conditions were safe for the crew working in that area. The project manager logged the updated findings in the risk register and arranged for more frequent visual inspections of the northwestern section by the site safety officer.\n\nSeveral weeks later, a scheduling conflict resulted in multiple crews and heavy equipment operating simultaneously in the northwestern section. The ground gave way beneath the added weight, opening a sinkhole that injured a worker and damaged a partially completed section of the foundation. The incident prompted a regulatory investigation, and the developer is now facing potential litigation."};
function ecoPublishedCaseText(raw){
  const direct=String((raw&&raw.caseText)||'').trim();
  if(direct)return direct;
  return String(ECO2026_CASE_TEXT_FALLBACKS[(raw&&raw.caseTitle)||'']||'').trim();
}
function ecoResolveCaseScenario(q){
  const direct=String((q&&q.scenario)||(q&&q.caseText)||'').trim();
  if(direct)return direct;
  const gid=q&&q.caseGroupId;
  if(typeof EXAM_CASE_GROUPS!=='undefined'&&gid){const g=EXAM_CASE_GROUPS.find(x=>x.id===gid);if(g&&String(g.scenario||'').trim())return String(g.scenario).trim();}
  return String(ECO2026_CASE_TEXT_FALLBACKS[(q&&q.caseTitle)||'']||'').trim();
}


// Enrich the normalized 550-question bank with July 2026 ECO metadata.
const _ECO_MOCK_RAW_BY_N=new Map((PMP_MOCK_RAW||[]).map(q=>[String(q.n),q]));
EXAM_FULL_BANK.forEach((q,i)=>{
  const raw=(q.bankId&&q.bankId.indexOf('book-mock-')===0)?_ECO_MOCK_RAW_BY_N.get(String(q.n)):null;
  if(raw&&raw.caseTitle){q.caseGroupId='published-'+raw.caseTitle.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');q.caseTitle=raw.caseTitle;q.caseText=ecoPublishedCaseText(raw);q.isCaseLinked=true;}
  q.domain=canonicalDomain(q);
  q.approach=ecoApproach(q);
  q.approachGroup=q.approach==='Predictive'?'Predictive':'Adaptive';
  q.ecoTask=inferEcoTask(q);
  q.ecoTaskName=ECO2026_TASKS[q.ecoTask];
  const tx=ecoText(q);
  q.ecoTopics={
    ai:/artificial intelligence|\bai\b|machine learning|generative ai|genai/.test(tx),
    sustainability:/sustainab|environmental|esg|green initiative/.test(tx),
    value:/business value|value delivery|benefit|return on investment|\broi\b|customer value/.test(tx)
  };
});

const EXAM_CASE_GROUPS=[];
EXAM_FULL_BANK.filter(q=>q.type==='casestudy').forEach(parent=>{
  const gid='core-case-'+parent.bankId;
  const items=(parent.questions||[]).map((sq,si)=>{
    const temp={domain:parent.domain,approach:parent.approach,q:sq.q,exp:(sq.exp||parent.exp||''),scenario:parent.scenario,source:parent.source,bankId:parent.bankId+'::'+(si+1)};
    const task=inferEcoTask(temp),app=ecoApproach(temp);
    return {bankId:temp.bankId,source:parent.source,n:parent.n,type:'caseitem',caseGroupId:gid,caseTitle:'Case Study',scenario:parent.scenario,casePosition:si+1,caseTotal:(parent.questions||[]).length,q:sq.q,opts:sq.opts||{},ans:sq.ans,exp:sq.exp||parent.exp||'',domain:canonicalDomain(parent),approach:app,approachGroup:app==='Predictive'?'Predictive':'Adaptive',ecoTask:task,ecoTaskName:ECO2026_TASKS[task],ecoTopics:{ai:false,sustainability:false,value:false}};
  });
  {const scenario=String(parent.scenario||'').trim();items.forEach(x=>x.scenario=scenario);EXAM_CASE_GROUPS.push({id:gid,title:'Case Study',scenario,source:parent.source,items});}
});
const _publishedGroups={};
(PMP_MOCK_RAW||[]).forEach(raw=>{
  if(!raw.caseTitle)return;
  const gid='published-'+raw.caseTitle.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
  if(!_publishedGroups[gid])_publishedGroups[gid]={id:gid,title:raw.caseTitle,scenario:ecoPublishedCaseText(raw),source:'PMP Exam Prep Simplified (2026) - Full Length Mock',items:[]};
  const norm=EXAM_FULL_BANK.find(q=>q.bankId==='book-mock-'+raw.n);
  if(!norm)return;
  _publishedGroups[gid].items.push(Object.assign({},norm,{type:'caseitem',caseGroupId:gid,caseTitle:raw.caseTitle,scenario:ecoPublishedCaseText(raw),casePosition:_publishedGroups[gid].items.length+1,caseTotal:6,q:raw.q,opts:raw.opts||{},ans:raw.ans,exp:raw.exp||''}));
});
Object.values(_publishedGroups).forEach(g=>{g.scenario=String(g.scenario||'').trim();g.items.forEach(x=>x.scenario=g.scenario);if(g.scenario.length>=80&&g.items.length>=5)EXAM_CASE_GROUPS.push(g);});
const EXAM_INDEPENDENT_BANK=EXAM_FULL_BANK.filter(q=>q.type!=='casestudy'&&!q.isCaseLinked);

const ECO2026_BLUEPRINT={
 total:180,scored:170,pretest:10,
 sections:[20,80,80],
 types:{caseitem:20,single:129,multi:15,matching:6,sequence:4,artifact:6},
 domains:{People:59,Process:74,'Business Environment':47},
 approachGroups:{Predictive:72,Adaptive:108},
 cells:{People:{Predictive:14,Adaptive:45},Process:{Predictive:18,Adaptive:56},'Business Environment':{Predictive:40,Adaptive:7}},
 pretestCells:{People:{Predictive:1,Adaptive:2},Process:{Predictive:1,Adaptive:3},'Business Environment':{Predictive:2,Adaptive:1}}
};
function ecoShuffle(arr,rng){const x=[...arr];for(let i=x.length-1;i>0;i--){const j=Math.floor(rng()*(i+1));[x[i],x[j]]=[x[j],x[i]];}return x;}
function ecoFreshOrder(arr,recentSet,rng){const fresh=[],old=[];ecoShuffle(arr,rng).forEach(q=>(recentSet.has(q.bankId)?old:fresh).push(q));return fresh.concat(old);}
function ecoCellKey(q){return q.domain+'|'+q.approachGroup;}
function ecoCloneCells(){return {People:{Predictive:14,Adaptive:45},Process:{Predictive:18,Adaptive:56},'Business Environment':{Predictive:40,Adaptive:7}};}
function ecoCanTake(q,remain){return remain[q.domain]&&remain[q.domain][q.approachGroup]>0;}
function ecoTake(q,remain,chosen,ids){if(!ecoCanTake(q,remain)||ids.has(q.bankId))return false;remain[q.domain][q.approachGroup]--;chosen.push(Object.assign({},q));ids.add(q.bankId);return true;}
function ecoStats(set){const out={total:set.length,types:{},domains:{},approachGroups:{},approaches:{},tasks:{},pretest:0,scored:0,sections:{},caseGroups:new Set(),duplicateIds:0};const ids=new Set();for(const q of set){out.types[q.type||'single']=(out.types[q.type||'single']||0)+1;out.domains[q.domain]=(out.domains[q.domain]||0)+1;out.approachGroups[q.approachGroup]=(out.approachGroups[q.approachGroup]||0)+1;out.approaches[q.approach]=(out.approaches[q.approach]||0)+1;out.tasks[q.ecoTask]=(out.tasks[q.ecoTask]||0)+1;if(q.pretest)out.pretest++;else out.scored++;out.sections[q.section]=(out.sections[q.section]||0)+1;if(q.caseGroupId)out.caseGroups.add(q.caseGroupId);if(ids.has(q.bankId))out.duplicateIds++;ids.add(q.bankId);}out.caseGroups=out.caseGroups.size;return out;}
function validateEco2026ExamSet(set){const s=ecoStats(set),errors=[];if(s.total!==180)errors.push('total');for(const [k,v] of Object.entries(ECO2026_BLUEPRINT.types))if((s.types[k]||0)!==v)errors.push('type:'+k);for(const [k,v] of Object.entries(ECO2026_BLUEPRINT.domains))if((s.domains[k]||0)!==v)errors.push('domain:'+k);for(const [k,v] of Object.entries(ECO2026_BLUEPRINT.approachGroups))if((s.approachGroups[k]||0)!==v)errors.push('approach:'+k);if(s.pretest!==10||s.scored!==170)errors.push('pretest');if((s.sections[1]||0)!==20||(s.sections[2]||0)!==80||(s.sections[3]||0)!==80)errors.push('sections');if(set.slice(0,20).some(q=>q.type!=='caseitem')||set.slice(20).some(q=>q.type==='caseitem'))errors.push('case-section');if(set.slice(0,20).some(q=>ecoResolveCaseScenario(q).length<80))errors.push('case-scenario');if(s.caseGroups!==4)errors.push('case-groups');if(s.duplicateIds)errors.push('duplicate');for(const task of Object.keys(ECO2026_TASKS))if(!s.tasks[task])errors.push('task:'+task);return {ok:errors.length===0,errors,stats:s};}
function createEco2026ExamSet(options={}){
  const rng=options.rng||Math.random,recentSet=new Set(options.recentIds||[]),specialTarget={multi:15,matching:6,sequence:4,artifact:6};
  for(let attempt=0;attempt<600;attempt++){
    const remain=ecoCloneCells(),ids=new Set(),caseItems=[],special=[],singles=[];
    const groups=ecoFreshOrder(EXAM_CASE_GROUPS,recentSet,rng);
    const selectedGroups=[];
    for(const g of groups){
      if(selectedGroups.length===4)break;
      const groupScenario=String(g.scenario||'').trim();
      if(groupScenario.length<80||!Array.isArray(g.items)||g.items.length<5)continue;
      const itemChoices=ecoFreshOrder(g.items.map(q=>Object.assign({},q,{scenario:groupScenario})),recentSet,rng);
      // For six-question published groups, use a different five-question subset across sets.
      const candidates=itemChoices.slice(0,5);
      const tmp=JSON.parse(JSON.stringify(remain));let valid=true;
      for(const q of candidates){if(!ecoCanTake(q,tmp)){valid=false;break;}tmp[q.domain][q.approachGroup]--;}
      if(!valid)continue;
      selectedGroups.push(g);for(const q of candidates)ecoTake(Object.assign({},q,{caseTotal:5}),remain,caseItems,ids);
    }
    if(selectedGroups.length!==4||caseItems.length!==20)continue;
    let failed=false;
    for(const [type,count] of Object.entries(specialTarget)){
      let n=0;const pool=ecoFreshOrder(EXAM_INDEPENDENT_BANK.filter(q=>(q.type||'single')===type),recentSet,rng);
      for(const q of pool){if(n===count)break;if(ecoTake(q,remain,special,ids))n++;}
      if(n!==count){failed=true;break;}
    }
    if(failed)continue;
    const covered=new Set(caseItems.concat(special).map(q=>q.ecoTask));
    const missing=ecoShuffle(Object.keys(ECO2026_TASKS).filter(t=>!covered.has(t)),rng);
    for(const task of missing){
      const pool=ecoFreshOrder(EXAM_INDEPENDENT_BANK.filter(q=>(q.type||'single')==='single'&&q.ecoTask===task&&!ids.has(q.bankId)&&ecoCanTake(q,remain)),recentSet,rng);
      if(!pool.length){failed=true;break;}ecoTake(pool[0],remain,singles,ids);covered.add(task);
    }
    if(failed)continue;
    for(const d of Object.keys(remain))for(const a of Object.keys(remain[d])){
      const need=remain[d][a];const pool=ecoFreshOrder(EXAM_INDEPENDENT_BANK.filter(q=>(q.type||'single')==='single'&&q.domain===d&&q.approachGroup===a&&!ids.has(q.bankId)),recentSet,rng);
      if(pool.length<need){failed=true;break;}for(let i=0;i<need;i++)ecoTake(pool[i],remain,singles,ids);
    }
    if(failed||singles.length!==129)continue;
    // Keep the four case groups contiguous in Section 1.
    const caseByGroup=[];selectedGroups.forEach((g,gi)=>{const items=caseItems.filter(q=>q.caseGroupId===g.id);items.sort((a,b)=>a.casePosition-b.casePosition);items.forEach((q,i)=>{q.casePosition=i+1;q.caseTotal=5;q.caseGroupOrder=gi+1;});caseByGroup.push(...items);});
    const indep=ecoShuffle(special.concat(singles),rng);
    let set=caseByGroup.concat(indep.slice(0,80),indep.slice(80));
    set=set.map((q,i)=>Object.assign({},q,{section:i<20?1:i<100?2:3,pretest:false}));
    // 10 unscored pretest items, stratified so the remaining 170 preserve the ECO domain/approach proportions closely.
    const taskCounts={};set.forEach(q=>taskCounts[q.ecoTask]=(taskCounts[q.ecoTask]||0)+1);
    const chosenPre=new Set();
    for(const d of Object.keys(ECO2026_BLUEPRINT.pretestCells))for(const a of Object.keys(ECO2026_BLUEPRINT.pretestCells[d])){
      const need=ECO2026_BLUEPRINT.pretestCells[d][a];let pool=ecoShuffle(set.map((q,i)=>({q,i})).filter(x=>x.q.domain===d&&x.q.approachGroup===a&&!chosenPre.has(x.i)&&taskCounts[x.q.ecoTask]>1),rng);
      if(pool.length<need)pool=ecoShuffle(set.map((q,i)=>({q,i})).filter(x=>x.q.domain===d&&x.q.approachGroup===a&&!chosenPre.has(x.i)),rng);
      if(pool.length<need){failed=true;break;}for(let i=0;i<need;i++){chosenPre.add(pool[i].i);taskCounts[pool[i].q.ecoTask]--;}
    }
    if(failed||chosenPre.size!==10)continue;
    set=set.map((q,i)=>Object.assign({},q,{pretest:chosenPre.has(i)}));
    const check=validateEco2026ExamSet(set);if(check.ok)return set;
  }
  throw new Error('Unable to generate a valid ECO 2026 exam set after multiple attempts.');
}
const EXAM_ECO_BANK_STATS={total:EXAM_FULL_BANK.length,independent:EXAM_INDEPENDENT_BANK.length,caseGroups:EXAM_CASE_GROUPS.length,tasks:Object.keys(ECO2026_TASKS).length};
