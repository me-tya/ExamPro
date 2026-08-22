Keuangan Keluarga — GitHub Ready v40

Upload/replace SEMUA file dalam folder ini ke root repo GitHub Pages.
Firebase config sudah tertanam di app.js.

Perubahan v40:
- Nilai dasar Reksadana editable langsung: Unit, Harga Beli/Unit, Nilai Beli, NAB Hari Ini/Unit, Nilai Saat Ini.
- Nilai Beli <-> Harga Beli/Unit dihitung dua arah dari Unit.
- Nilai Saat Ini <-> NAB Hari Ini/Unit dihitung dua arah dari Unit.
- Total Nilai Beli dan Selisih Nilai tetap formula otomatis.
- Tombol edit ringkas pada metrik Reksadana membuka editor nilai dasar seluruh produk.
- Nilai 0 Deposito/Asuransi pada Ringkasan Aset dapat langsung mulai diisi lewat tombol edit.
- Tetap mempertahankan hierarchy Pengeluaran, kolom Sumber, edit sub-sub header, Firestore, CRUD, dan fitur portfolio sebelumnya.

Setelah commit, tunggu GitHub Pages selesai deploy lalu Ctrl+F5.


v41: Kolom Sumber + dropdown sumber dana diterapkan lintas Penerimaan, Pengeluaran, dan Aset; source tersimpan ke Firestore.


v42: Sync Schroder hanya mencoba kanal resmi Bank Mandiri/Livin (tanpa BCA/Bareksa). Jika gagal, modal Update NAB Manual otomatis dibuka.


v43 regression update:
- Collapsible Financial mempertahankan posisi open/closed saat CRUD/render ulang.
- Nomor urut rincian berlanjut untuk semua record, termasuk hasil pemisahan ;.
- Sort rincian: tanggal terbaru (default), terlama, budget, realisasi, A-Z.
- Form Tambah/Edit punya Tanggal + Sumber. Tanggal default hari ini.
- Sisa Saldo Bulan Lalu otomatis = total saldo akhir bulan sebelumnya dari ShopeePay + GoPay + Mandiri + SeaBank + Jenius.
- Edit Budget termasuk menjadi 0 tidak lagi ditimpa baseline.

v44 search UX fix:
- Pencarian Financial memakai debounce 220 ms dan mempertahankan focus/caret setelah hasil dirender ulang.
- Perbaikan yang sama diterapkan ke pencarian Riwayat dan Kategori.
- Escape mengosongkan pencarian dengan cepat.


V47 — Customizable Widget Dashboard
- Dashboard modular 12-column grid.
- Atur Widget: show/hide, ukuran 1/3, 1/2, 2/3, penuh, urutkan dengan drag & drop.
- Preset Default, Ringkas, Keuangan, dan Portofolio Aset.
- Grafik penerimaan vs pengeluaran, komposisi aset, tren aset, saldo per sumber dana, dan pengeluaran terbesar.
- Layout dashboard tersimpan pada meta Firestore user.
- Angka dashboard memakai format ringkas juta rupiah. Piutang tetap terpisah dari Total Aset.
