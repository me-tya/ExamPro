EXAMPRO — PMP SIMS INTEGRATION UPDATE

Upload seluruh isi ZIP ke root repository ExamPro dengan struktur berikut:

index.html
data/exam-bank-core.js
data/exam-bank-qbank.js
data/exam-bank-pmbok8.js
data/exam-bank-eco2026.js
data/question-quality-gate.js

Perubahan utama:
1. PMP Sims tampil sebagai kartu horizontal penuh di PMP Overview.
2. PMP Sims masuk Overall Statistics, Accuracy by Set, Readiness, Coverage, dan Sets Passed (9 set).
3. PMP Sims tampil pada Review sebagai panel horizontal dan masuk statistik PMP Cluster.
4. Kelola Progres kini memuat PMP 1–8, PMP Sims, CAPM 1–4, PMP Exam, dan CAPM Exam.
5. Backup/restore mencakup seluruh practice set dan kedua exam session.
6. Firestore cloud sync tetap memakai key pmp_ch16_full_length_180.
7. Cross-set Retry sengaja mengecualikan PMP Sims karena memuat case study, matching, dan tipe soal khusus; jawaban salahnya tetap dihitung dan dapat ditinjau di tab PMP Sims/Review.
8. File data PMP Sims sudah memakai perbaikan case study: narasi tampil pada kelompok yang tepat tanpa overlap ke pertanyaan berikutnya.

Setelah upload:
- tunggu GitHub Pages deployment selesai;
- buka situs lalu tekan Ctrl+F5 di laptop;
- di HP hapus cache situs atau lakukan refresh penuh;
- pastikan kedua perangkat login dengan akun Google yang sama.
