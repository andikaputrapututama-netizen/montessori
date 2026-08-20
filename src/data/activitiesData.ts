import { ActivityItem } from '../types';

export const activitiesData: ActivityItem[] = [
  {
    id: 'act-1',
    title: 'Mengenal Benda di Sekitar Kita (Naming Objects)',
    slug: 'mengenal-benda-sekitar',
    category: 'Kosakata & Percakapan',
    ageGroup: '2–3 Tahun',
    duration: '5–10 menit',
    durationMinutes: 8,
    difficulty: 'Pemula',
    materialsNeeded: ['Keranjang kecil berisi 3–4 benda nyata di kelas (cangkir, sendok, kain lap, sikat mini).'],
    diyAlternative: 'Gunakan perabot nyata yang bersih dan aman dari area sudut rumah tangga kelas.',
    learningObjectives: [
      'Memperkaya perbendaharaan kosakata benda konkrit sehari-hari.',
      'Melatih fokus visual dan pendengaran saat guru menyebutkan nama benda secara artikulatif.'
    ],
    preparation: ['Pilih 3 benda yang fungsinya sudah sering dilihat anak di kelas.'],
    steps: [
      'Ajak anak duduk di atas karpet kerja kecil.',
      'Keluarkan satu benda, misalnya cangkir: "Ini cangkir. c-a-n-g-k-i-r."',
      'Biarkan anak memegang, meraba, dan merasakan berat benda.',
      'Lanjutkan dengan benda kedua dan ketiga.',
      'Lakukan permainan babak kedua: "Bisa tolong berikan cangkir kepada Ibu?".'
    ],
    teacherLanguageExamples: [
      '"Ini sendok kayu. Halus sekali ya saat kita raba."',
      '"Dapatkah kamu meletakkan cangkir di sebelah kain lap?"',
      '"Sekarang kita masukkan kembali ke keranjang agar rapi."'
    ],
    variations: ['Mengganti isi keranjang dengan tema perlengkapan makan, alat kebersihan, atau daun dari taman.'],
    differentiation: {
      support: 'Gunakan hanya 2 benda yang bentuk dan warnanya sangat kontras.',
      challenge: 'Tambahkan kata sifat: "cangkir merah besar", "sendok kayu halus".'
    },
    observationPoints: [
      'Apakah anak mencoba menirukan pelafalan nama benda?',
      'Apakah anak mampu menunjuk benda yang benar saat diminta di babak kedua?'
    ],
    reflectionPrompt: 'Apakah saya memberikan waktu yang cukup bagi anak untuk mengeksplorasi tekstur benda sebelum beralih ke benda berikutnya?',
    paudIntegrationNotes: 'Sesuai dengan Capaian Pembelajaran Elemen Jati Diri & Dasar Literasi (Mengenal lingkungan sekitar dan berkomunikasi lisan).'
  },
  {
    id: 'act-2',
    title: 'Mencocokkan Benda Nyata dengan Gambar (Object to Picture Matching)',
    slug: 'mencocokkan-benda-dengan-gambar',
    category: 'Pra-Membaca',
    ageGroup: '3–4 Tahun',
    duration: '5–10 menit',
    durationMinutes: 10,
    difficulty: 'Pemula',
    materialsNeeded: ['4 miniatur hewan (kucing, sapi, ayam, bebek) dan 4 kartu foto hewan yang identik.'],
    diyAlternative: 'Cetak foto benda yang ada di kelas (misal gunting anak, botol minum, spidol), lalu sediakan benda aslinya.',
    learningObjectives: [
      'Memahami hubungan representasi antara benda 3 dimensi nyata dengan foto 2 dimensi.',
      'Melatih diskriminasi visual bentuk dan ciri khas objek.'
    ],
    preparation: ['Tata kartu foto berjejer vertikal dari atas ke bawah di sisi kiri karpet.'],
    steps: [
      'Ambil satu miniatur hewan dari keranjang.',
      'Tatap kartu foto dari atas ke bawah secara teratur.',
      'Letakkan miniatur persis di atas foto yang cocok.',
      'Ucapkan namanya: "Kucing... pasangannya adalah foto kucing."'
    ],
    teacherLanguageExamples: [
      '"Mari kita cari di mana rumah foto untuk sapi ini."',
      '"Lihat, bulu ayam di foto ini sama persis dengan yang ada di tanganmu."'
    ],
    variations: ['Mencocokkan miniatur dengan kartu siluet bayangan hitam.'],
    differentiation: {
      support: 'Gunakan 3 pasang kartu dengan bentuk yang sangat berbeda (misal mobil vs pisang vs gajah).',
      challenge: 'Gunakan gambar dengan sudut kemiringan berbeda atau foto dari jarak jauh.'
    },
    observationPoints: ['Apakah anak memindai kartu secara sistematis dari atas ke bawah?'],
    reflectionPrompt: 'Bagaimana reaksi anak saat menyadari gambar di kertas adalah wakil dari benda nyata?',
    paudIntegrationNotes: 'Mengembangkan penalaran logis-simbolik anak usia dini.'
  },
  {
    id: 'act-3',
    title: 'Permainan Detektif Bunyi Awal "Aku Melihat Sesuatu..." (I Spy Initial Sounds)',
    slug: 'permainan-detektif-bunyi-awal-i-spy',
    category: 'Kesadaran Fonologis',
    ageGroup: '3–5 Tahun',
    duration: '5–10 menit',
    durationMinutes: 7,
    difficulty: 'Pemula',
    materialsNeeded: ['3–4 benda berlainan bunyi awal di atas meja (misal: buku /b/, mangkuk /m/, sisir /s/).'],
    diyAlternative: 'Benda apa saja yang sedang ada di sekitar meja kelas.',
    learningObjectives: [
      'Mengasah kepekaan auditori anak untuk memisahkan bunyi awal kata tanpa melihat huruf tulisan.',
      'Membangun fondasi fonik yang menyenangkan melalui permainan tebak-tebakan lisan.'
    ],
    preparation: ['Pastikan nama benda yang dipilih memiliki bunyi konsonan awal yang terdengar tegas.'],
    steps: [
      'Kumpulkan 2–3 anak di sekitar meja.',
      'Ucapkan petunjuk: "Aku melihat sesuatu di meja ini yang bunyi pertamanya /b/..."',
      'Ajak anak mendengarkan desis dan letupan bunyi di bibir guru.',
      'Biarkan anak menyebutkan atau menunjuk benda: "Buku!".',
      'Konfirmasi: "Ya, b-b-buku berbunyi /b/."'
    ],
    teacherLanguageExamples: [
      '"Dengarkan bibir Ibu baik-baik: /m/... /m/... benda apa ya?"',
      '"Hebat sekali telinga detektifmu bisa menangkap bunyi /m/!"'
    ],
    variations: ['Mencari benda di seluruh ruangan kelas yang berbunyi awal /k/.'],
    differentiation: {
      support: 'Beri petunjuk visual dengan menatap lembut ke arah benda yang dimaksud.',
      challenge: 'Tanyakan bunyi akhir: "Aku melihat benda yang berbunyi akhir /s/... bus!"'
    },
    observationPoints: ['Apakah anak antusias menyimak bunyi atau sekadar menebak acak?'],
    reflectionPrompt: 'Apakah saya melafalkan bunyi murni (/b/) atau tidak sengaja menambahkan vokal berlebih (seperti "beh")?',
    paudIntegrationNotes: 'Fondasi literasi fonologis awal tanpa drilling hafalan.'
  },
  {
    id: 'act-4',
    title: 'Menelusuri Huruf Raba (Sandpaper Letters Tracing)',
    slug: 'menelusuri-huruf-raba-sandpaper',
    category: 'Pengenalan Huruf',
    ageGroup: '4–5 Tahun',
    duration: '5–10 menit',
    durationMinutes: 10,
    difficulty: 'Menengah',
    materialsNeeded: ['2 papan Sandpaper Letters (misal /a/ dan /m/) dan alas kerja kecil.'],
    diyAlternative: 'Kardus tebal yang ditempeli huruf dari kain flanel bertekstur atau amplas.',
    learningObjectives: [
      'Menghubungkan memori sensori rabaan jari dengan simbol visual dan bunyi huruf.',
      'Mempersiapkan motorik halus arah menulis dari atas ke bawah.'
    ],
    preparation: ['Bersihkan ujung jari telunjuk dan jari tengah anak.'],
    steps: [
      'Letakkan papan huruf /m/ di depan anak.',
      'Tahan sudut papan dengan tangan kiri.',
      'Telusuri alur huruf dengan 2 jari tangan kanan sambil membunyikan: "/m/...".',
      'Ajak anak menelusuri 3 kali.',
      'Lakukan hal yang sama untuk huruf /a/.',
      'Gunakan Three-Period Lesson.'
    ],
    teacherLanguageExamples: [
      '"Rasakan bagian kasarnya mengikuti lekukan ini: /m/."',
      '"Dapatkah jarimu berjalan di atas jalan kasar /m/?"'
    ],
    variations: ['Menelusuri huruf dengan mata tertutup untuk mempertajam sensasi taktil.'],
    differentiation: {
      support: 'Bimbing tangan anak dengan lembut jika arah menelusurinya terbalik.',
      challenge: 'Ajak anak mencari benda di kelas yang bunyi awalnya cocok dengan huruf raba tersebut.'
    },
    observationPoints: ['Apakah anak konsisten menggunakan 2 jari? Apakah anak menikmati rabaannya?'],
    reflectionPrompt: 'Bagaimana ritme dan ketenangan saya saat memandu anak meraba huruf?',
    paudIntegrationNotes: 'Stimulasi sensori-motorik terintegrasi untuk pengenalan keaksaraan awal.'
  },
  {
    id: 'act-5',
    title: 'Menyusun Kata Pertama dengan Movable Alphabet',
    slug: 'menyusun-kata-pertama-movable-alphabet',
    category: 'Menyusun Kata',
    ageGroup: '4,5–6 Tahun',
    duration: '10–20 menit',
    durationMinutes: 15,
    difficulty: 'Lanjutan',
    materialsNeeded: ['Kotak Large Movable Alphabet (LMA), karpet kerja, 3 miniatur benda fonik (tas, bus, bot).'],
    diyAlternative: 'Tutup botol yang ditulisi huruf vokal (biru) dan konsonan (merah).',
    learningObjectives: [
      'Menganalisis bunyi pembentuk kata secara mandiri.',
      'Menyusun simbol alfabet menjadi kata utuh tanpa hambatan memegang pensil.'
    ],
    preparation: ['Bentangkan karpet kerja dan posisikan kotak LMA di bagian atas.'],
    steps: [
      'Letakkan miniatur *tas* di sisi kiri karpet.',
      'Ajak anak mendengarkan: "Tas... bunyi awalnya apa? /t/."',
      'Minta anak mengambil huruf /t/ dan menaruhnya di samping miniatur.',
      'Lanjutkan bunyi tengah /a/ dan bunyi akhir /s/.',
      'Baca bersama kata yang terbentuk: "t - a - s".'
    ],
    teacherLanguageExamples: [
      '"Bunyi apa yang kamu dengar setelah /t/? /a/... ayo kita cari /a/ di kotak."',
      '"Luar biasa! Kamu baru saja menyusun kata *tas* dengan huruf-huruf ini!"'
    ],
    variations: ['Menyusun nama diri anak sendiri menggunakan huruf LMA.'],
    differentiation: {
      support: 'Sediakan kartu pilihan huruf yang terbatas (hanya 5 huruf) agar anak tidak kewalahan mencari di kotak besar.',
      challenge: 'Ajak anak menyusun kata 4-5 huruf (misal: *katak*, *pintu*).'
    },
    observationPoints: ['Apakah anak mampu membedakan urutan bunyi dari kiri ke kanan?'],
    reflectionPrompt: 'Apakah saya memberikan kebebasan anak mengeksplorasi kata tanpa mencela ejaan yang belum baku?',
    paudIntegrationNotes: 'Pengembangan kemampuan keaksaraan awal dan pemecahan masalah fonetik.'
  },
  {
    id: 'act-6',
    title: 'Eksplorasi Kartu Klasifikasi 3 Bagian (Nomenclature Cards)',
    slug: 'eksplorasi-kartu-klasifikasi-3-bagian',
    category: 'Kosakata & Percakapan',
    ageGroup: '4–6 Tahun',
    duration: '10–20 menit',
    durationMinutes: 12,
    difficulty: 'Menengah',
    materialsNeeded: ['Set kartu 3 bagian tema "Buah Tropis Indonesia" (gambar+label, gambar saja, label saja).'],
    diyAlternative: 'Cetak kartu foto buah dari internet, buat kartu kontrol dan potongan label terpisah.',
    learningObjectives: [
      'Mencocokkan gambar dan label kata secara visual dan membaca.',
      'Memahami nama-nama ilmiah atau kosakata spesifik tema pembelajaran.'
    ],
    preparation: ['Bawa wadah kartu ke atas meja beralas kerja.'],
    steps: [
      'Tata kartu kontrol di sisi kiri secara menurun.',
      'Cocokkan kartu gambar tanpa teks di sampingnya.',
      'Ajak anak membaca label kata dan mencocokkannya di bawah gambar.',
      'Periksa kecocokan bentuk huruf label dengan kartu kontrol.'
    ],
    teacherLanguageExamples: [
      '"Ini buah manggis. Kulitnya ungu pekat."',
      '"Mari kita cocokkan kartu fotonya di samping kartu ini."',
      '"Apakah tulisan pada labelmu sudah sama persis dengan kartu contoh?"'
    ],
    variations: ['Membawa kartu ke kebun sekolah untuk mencocokkan dengan buah/daun nyata.'],
    differentiation: {
      support: 'Gunakan kartu 2 bagian (hanya gambar dan miniatur nyata) untuk anak pemula.',
      challenge: 'Ajak anak menyalin kata di buku catatan kecilnya.'
    },
    observationPoints: ['Apakah anak menggunakan kartu kontrol untuk memeriksa hasil kerjanya secara mandiri?'],
    reflectionPrompt: 'Bagaimana materi kartu klasifikasi ini memantik rasa ingin tahu anak terhadap sains dan alam?',
    paudIntegrationNotes: 'Penguatan literasi tematik dan apresiasi lingkungan hidup.'
  },
  {
    id: 'act-7',
    title: 'Keranjang Kosakata Tematik PAUD (Vocabulary Basket)',
    slug: 'keranjang-kosakata-tematik-paud',
    category: 'Kosakata & Percakapan',
    ageGroup: '2–4 Tahun',
    duration: '5–10 menit',
    durationMinutes: 8,
    difficulty: 'Pemula',
    materialsNeeded: ['Keranjang anyaman berisi benda tema "Alat Transportasi Tradisional" (miniatur delman, becak, perahu, sepeda).'],
    diyAlternative: 'Mainan anak atau benda miniatur lokal yang relevan dengan tema budaya setempat.',
    learningObjectives: [
      'Mengenal kosakata kaya budaya lokal dan fungsinya.',
      'Melatih keberanian berbicara dan menceritakan pengalaman pribadi.'
    ],
    preparation: ['Tata miniatur bersih di dalam keranjang.'],
    steps: [
      'Duduk bersama anak dalam lingkaran kecil.',
      'Keluarkan miniatur *becak*: "Ini becak. Becak punya tiga roda dan dikayuh oleh pengemudi."',
      'Ajak anak menirukan gerakan mengayuh atau membunyikan klakson becak.',
      'Beri kesempatan anak bercerita apakah pernah melihat becak.'
    ],
    teacherLanguageExamples: [
      '"Siapa yang pernah naik becak bersama kakek atau nenek?"',
      '"Becak berjalan di darat, kalau perahu berlayar di mana ya?"'
    ],
    variations: ['Tema perlengkapan memasak tradisional, tema alat musik daerah.'],
    differentiation: {
      support: 'Fokus pada nama benda dan tiruan bunyi kendaraannya.',
      challenge: 'Ajak anak mengelompokkan kendaraan darat, air, dan udara.'
    },
    observationPoints: ['Seberapa banyak anak menggunakan kalimat tanya saat mengeksplorasi benda?'],
    reflectionPrompt: 'Apakah suasana percakapan berlangsung hangat dan mengalir tanpa terkesan seperti interogasi?',
    paudIntegrationNotes: 'Mengenalkan kearifan lokal dalam bingkai komunikasi aktif PAUD.'
  },
  {
    id: 'act-8',
    title: 'Melukis Huruf di Atas Baki Pasir (Phonetic Sand Tray)',
    slug: 'melukis-huruf-di-baki-pasir',
    category: 'Pra-Menulis',
    ageGroup: '3,5–5 Tahun',
    duration: '5–10 menit',
    durationMinutes: 8,
    difficulty: 'Pemula',
    materialsNeeded: ['Baki kayu berdasar biru dengan lapisan tipis pasir kuarsa putih, kartu Sandpaper Letter.'],
    diyAlternative: 'Tutup kotak sepatu yang dicat dasarnya dengan warna kontras, taburi tepung beras tipis.',
    learningObjectives: [
      'Membentuk pola garis huruf secara kinestetik dengan sensasi taktil menyenangkan.',
      'Menghilangkan rasa takut berbuat salah karena baki mudah diratakan kembali.'
    ],
    preparation: ['Ratakan pasir dengan menggoyangkan baki perlahan.'],
    steps: [
      'Raba kartu Sandpaper Letter /b/ dengan dua jari.',
      'Goreskan pola garis lurus dari atas ke bawah, lalu lengkungan di atas pasir.',
      'Amati pola huruf biru yang tampak di dasar baki.',
      'Goyangkan baki perlahan untuk memulai huruf baru.'
    ],
    teacherLanguageExamples: [
      '"Rasakan butiran pasirnya menari di jarimu."',
      '"Lihat, garis lurusmu membelah pasir putih menjadi warna biru indah!"'
    ],
    variations: ['Menggambar garis ombak, spiral, dan zig-zag untuk kelenturan tangan.'],
    differentiation: {
      support: 'Guru menggambar bentuk garis terlebih dahulu di samping baki sebagai model visual.',
      challenge: 'Minta anak menuliskan huruf yang didengarnya tanpa melihat kartu model.'
    },
    observationPoints: ['Apakah anak merasa rileks dan senang mengulang goresan jarinya?'],
    reflectionPrompt: 'Bagaimana baki pasir membantu anak yang sebelumnya kaku saat diminta memegang pensil?',
    paudIntegrationNotes: 'Persiapan pra-menulis berbasis sensori motorik ramah anak.'
  },
  {
    id: 'act-9',
    title: 'Membaca Pesan Perintah Sunyi (Silent Action Cards)',
    slug: 'membaca-pesan-perintah-sunyi-action-cards',
    category: 'Membaca Lanjutan',
    ageGroup: '5–6 Tahun',
    duration: '10–20 menit',
    durationMinutes: 12,
    difficulty: 'Lanjutan',
    materialsNeeded: ['Gulungan kertas kecil berisi kata kerja fonik (misal: *lompat*, *senyum*, *duduk*, *tepuk*).'],
    diyAlternative: 'Potongan kertas warna-warni yang digulung dengan pita kecil.',
    learningObjectives: [
      'Menghubungkan teks tertulis dengan pemahaman makna tindakan nyata.',
      'Melatih konsentrasi membaca dalam hati (*silent reading*).'
    ],
    preparation: ['Gulung 6 kartu kata aksi dan masukkan ke dalam wadah cangkir kayu.'],
    steps: [
      'Berikan satu gulungan rahasia kepada seorang anak.',
      'Minta anak membuka dan membaca kata tersebut di dalam hati tanpa bersuara.',
      'Anak melakukan aksi tersebut di depan teman-temannya (misal: melompat 3 kali).',
      'Teman-teman lain menebak kata apa yang telah dibaca.'
    ],
    teacherLanguageExamples: [
      '"Ini pesan rahasia untukmu. Simpan suaramu di dalam pikiran."',
      '"Wah, gerakan apa yang sedang dilakukan Budi? Siapa yang tahu kata apa di kertasnya?"'
    ],
    variations: ['Kalimat perintah dua langkah: "Ambil buku, letakkan di meja".'],
    differentiation: {
      support: 'Gunakan kata kerja 3-4 huruf yang sangat familiar (misal: *lari*, *diam*).',
      challenge: 'Gunakan kata perintah yang lebih kompleks (misal: *berjinjit*, *berbisik*).'
    },
    observationPoints: ['Apakah anak mampu menahan diri untuk tidak membaca keras-keras sebelum melakukan aksi?'],
    reflectionPrompt: 'Bagaimana aktivitas ini mengubah persepsi membaca dari sekadar membunyikan teks menjadi memahami pesan dinamis?',
    paudIntegrationNotes: 'Pengembangan literasi fungsional dan keterlibatan kinestetik.'
  },
  {
    id: 'act-10',
    title: 'Melabeli Benda di Lingkungan Kelas (Environment Labeling)',
    slug: 'melabeli-benda-lingkungan-kelas',
    category: 'Membaca Lanjutan',
    ageGroup: '5–6 Tahun',
    duration: '10–20 menit',
    durationMinutes: 15,
    difficulty: 'Lanjutan',
    materialsNeeded: ['Strip kertas bertuliskan nama perabot kelas (pintu, meja, kursi, rak, jam, kaca, buku).'],
    diyAlternative: 'Kertas label tempel atau potongan kertas bekas yang diberi isolasi kertas (mudah dilepas).',
    learningObjectives: [
      'Menyadari bahwa lingkungan sekitar dapat diwakili oleh simbol kata tertulis.',
      'Mempraktikkan membaca fungsional sambil bergerak aktif di ruang kelas.'
    ],
    preparation: ['Tulis 6-8 nama perabot kelas dengan huruf cetak jelas.'],
    steps: [
      'Berikan nampan berisi strip label kepada 2 anak.',
      'Anak membaca strip label: "m - e - j - a... meja!".',
      'Anak berjalan mencari meja di kelas dan meletakkan label tersebut di atasnya.',
      'Lakukan bersama hingga seluruh perabot terlabeli.'
    ],
    teacherLanguageExamples: [
      '"Kata apa yang ada di tanganmu? Di mana tempat kata ini berada di kelas kita?"',
      '"Mari kita periksa apakah semua label sudah berada di rumahnya yang tepat."'
    ],
    variations: ['Melabeli bagian tumbuhan di kebun sekolah: daun, akar, batang, bunga.'],
    differentiation: {
      support: 'Dampingi anak mencari huruf awal yang sama pada perabot.',
      challenge: 'Minta anak menulis sendiri label perabot menggunakan kertas dan spidol.'
    },
    observationPoints: ['Apakah anak membaca dengan penuh rasa bangga saat menemukan benda yang tepat?'],
    reflectionPrompt: 'Bagaimana lingkungan kaya literasi ini menumbuhkan rasa kepemilikan anak terhadap kelasnya?',
    paudIntegrationNotes: 'Membangun lingkungan kaya teks (*print-rich environment*) sesuai anjuran PAUD Kemendikdasmen.'
  },
  {
    id: 'act-11',
    title: 'Pengelompokan Benda Berdasarkan Bunyi Awal (Sound Sorting Basket)',
    slug: 'pengelompokan-benda-bunyi-awal',
    category: 'Kesadaran Fonologis',
    ageGroup: '3,5–5 Tahun',
    duration: '5–10 menit',
    durationMinutes: 10,
    difficulty: 'Menengah',
    materialsNeeded: ['2 alas kain kecil berlabel huruf /s/ dan /b/, keranjang berisi 6 miniatur (sisir, sapi, sendok, bola, buku, batu).'],
    diyAlternative: 'Gunakan piring plastik kecil yang ditulisi huruf, dan kumpulkan benda nyata di kelas.',
    learningObjectives: [
      'Membandingkan dan memilah benda berdasarkan perbedaan bunyi awal konsonan.',
      'Melatih kategorisasi auditori dan konsentrasi.'
    ],
    preparation: ['Campur 6 benda di dalam keranjang utama.'],
    steps: [
      'Letakkan alas /s/ di kiri dan alas /b/ di kanan.',
      'Ambil *sisir*: "s-s-sisir. Bunyinya /s/. Masuk ke alas /s/."',
      'Ambil *bola*: "b-b-bola. Bunyinya /b/. Masuk ke alas /b/."',
      'Ajak anak melanjutkan benda berikutnya satu per satu.'
    ],
    teacherLanguageExamples: [
      '"Dengarkan bunyinya: sapi... apakah /s/ atau /b/?"',
      '"Kamu hebat memilah bunyi-bunyi ini ke rumahnya masing-masing."'
    ],
    variations: ['Menambah menjadi 3 kategori bunyi awal.'],
    differentiation: {
      support: 'Pilih bunyi yang sangat kontras (misal vokal /a/ vs konsonan /m/).',
      challenge: 'Gunakan kartu gambar tanpa miniatur konkrit.'
    },
    observationPoints: ['Apakah anak mampu melafalkan bunyi awal secara mandiri sebelum meletakkan benda?'],
    reflectionPrompt: 'Apakah intonasi suara saya cukup jelas dalam mengisolasi bunyi konsonan?',
    paudIntegrationNotes: 'Pengembangan kemampuan diskriminasi auditori fonologis.'
  },
  {
    id: 'act-12',
    title: 'Bercerita dengan Benda Konkrit (Concrete Storytelling)',
    slug: 'bercerita-dengan-benda-konkrit',
    category: 'Kosakata & Percakapan',
    ageGroup: '3–5 Tahun',
    duration: '10–20 menit',
    durationMinutes: 12,
    difficulty: 'Pemula',
    materialsNeeded: ['Panggung karpet kecil, 3 figur mainan (kakek, anak, kucing), dan miniatur pohon serta rumah.'],
    diyAlternative: 'Gunakan wayang kertas buatan guru atau daun dan batu kali yang dihias spidol.',
    learningObjectives: [
      'Membangun pemahaman alur cerita (awal, tengah, akhir) secara visual dan lisan.',
      'Mendorong anak menceritakan kembali cerita dengan bahasanya sendiri.'
    ],
    preparation: ['Siapkan alur cerita sederhana bertema tolong-menolong di desa.'],
    steps: [
      'Guru menggerakkan figur secara perlahan sambil bercerita dengan ekspresi tenang.',
      'Gunakan jeda hening agar anak mengamati interaksi tokoh.',
      'Setelah cerita selesai, tawarkan kepada anak untuk memainkan figur tersebut.',
      'Dengarkan saat anak menciptakan dialog ceritanya sendiri.'
    ],
    teacherLanguageExamples: [
      '"Suatu sore di bawah pohon rindang, kakek memanggil kucingnya yang sedang bersembunyi..."',
      '"Sekarang giliranmu, apa yang ingin dikatakan oleh kucing kecil ini?"'
    ],
    variations: ['Membuat cerita tentang petualangan mencari air bersih di sungai.'],
    differentiation: {
      support: 'Bantu anak dengan pertanyaan pemantik: "Ke mana kucing itu akan berjalan?".',
      challenge: 'Ajak anak menyimpulkan pesan moral cerita secara lisan.'
    },
    observationPoints: ['Bagaimana anak mengekspresikan intonasi emosi tokoh saat bermain peran?'],
    reflectionPrompt: 'Apakah saya memberi keleluasaan anak mengubah alur cerita sesuai imajinasinya?',
    paudIntegrationNotes: 'Mengembangkan kecerdasan naratif dan empati sosial anak.'
  },
  {
    id: 'act-13',
    title: 'Lingkaran Percakapan Bermakna Dua Arah (Conversation Circle)',
    slug: 'lingkaran-percakapan-bermakna',
    category: 'Kosakata & Percakapan',
    ageGroup: '4–6 Tahun',
    duration: '10–20 menit',
    durationMinutes: 15,
    difficulty: 'Pemula',
    materialsNeeded: ['Tongkat bicara kayu (*Talking Stick*) atau bunga kecil dari kebun.'],
    diyAlternative: 'Batu kali halus yang dicat indah sebagai simbol pemegang giliran bicara.',
    learningObjectives: [
      'Melatih keterampilan menyimak dengan penuh rasa hormat saat teman berbicara.',
      'Mengekspresikan gagasan dan perasaan dengan kalimat terstruktur.'
    ],
    preparation: ['Duduk melingkar bersama anak-anak di karpet lantai.'],
    steps: [
      'Jelaskan aturan tongkat bicara: "Siapa yang memegang bunga ini, dialah yang berbicara. Teman yang lain mendengarkan dengan mata dan telinga yang ramah."',
      'Beri topik pemantik terbuka: "Hal apa yang membuat hatimu tersenyum pagi ini?".',
      'Oper bunga secara bergantian searah jarum jam.',
      'Anak berhak berkata "Lewat" jika belum ingin berbicara.'
    ],
    teacherLanguageExamples: [
      '"Terima kasih Rian sudah berbagi ceritamu. Sekarang bunganya kita berikan kepada Siti."',
      '"Kita semua sedang mendengarkan dengan tenang ya."'
    ],
    variations: ['Topik: "Jika kamu bisa menjadi seekor burung, ke mana kamu ingin terbang?".'],
    differentiation: {
      support: 'Guru mendampingi anak yang pemalu dengan memegang bunga bersama-sama.',
      challenge: 'Ajak anak memberikan tanggapan positif atas cerita temannya.'
    },
    observationPoints: ['Apakah anak mampu menahan diri untuk tidak memotong pembicaraan temannya?'],
    reflectionPrompt: 'Apakah saya menghargai pilihan anak yang memilih untuk melewati gilirannya tanpa memaksanya?',
    paudIntegrationNotes: 'Membangun iklim kelas yang aman, inklusif, dan saling menghargai (*socio-emotional literacy*).'
  },
  {
    id: 'act-14',
    title: 'Teka-Teki Deskriptif Bahasa (Descriptive Mystery Game)',
    slug: 'teka-teki-deskriptif-bahasa',
    category: 'Kosakata & Percakapan',
    ageGroup: '4–6 Tahun',
    duration: '5–10 menit',
    durationMinutes: 10,
    difficulty: 'Menengah',
    materialsNeeded: ['Kantong kain misteri (*Mystery Bag*) berisi 1 benda rahasia (misal: nanas mainan).'],
    diyAlternative: 'Sarung bantal kecil atau tas kain polos yang tidak tembus pandang.',
    learningObjectives: [
      'Memahami deskripsi kata sifat (tekstur, bentuk, ukuran, fungsi) sebelum menyebutkan nama benda.',
      'Melatih penalaran deduktif dan kosakata deskriptif.'
    ],
    preparation: ['Masukkan 1 benda ke dalam kantong tanpa dilihat anak-anak.'],
    steps: [
      'Pegang kantong misteri.',
      'Beri petunjuk deskriptif satu per satu: (1) "Benda ini adalah buah", (2) "Kulitnya kasar dan memiliki mahkota daun tajam", (3) "Rasanya manis dan agak asam".',
      'Minta anak memikirkan jawabannya dan mengangkat tangan saat sudah tahu.',
      'Keluarkan benda dari kantong untuk membuktikan tebakan anak.'
    ],
    teacherLanguageExamples: [
      '"Simpan tebakanmu di dalam hati sampai Ibu selesai memberikan 3 petunjuk."',
      '"Kata sifat apa yang paling membantumu menebak buah ini?"'
    ],
    variations: ['Anak yang bergantian meraba benda di dalam kantong dan memberikan deskripsi kepada teman-temannya.'],
    differentiation: {
      support: 'Berikan petunjuk fungsi yang sangat spesifik ("benda untuk menyisir rambut").',
      challenge: 'Gunakan petunjuk konseptual ("benda ini terbuat dari logam dan bisa menghantarkan panas").'
    },
    observationPoints: ['Apakah anak mampu mendengarkan seluruh petunjuk sebelum terburu-buru menjawab?'],
    reflectionPrompt: 'Bagaimana permainan teka-teki ini memperluas pemahaman kata sifat anak?',
    paudIntegrationNotes: 'Melatih kemampuan berpikir kritis dan menyimak kritis anak usia dini.'
  },
  {
    id: 'act-15',
    title: 'Kartu Urutan Cerita Logis (Logical Story Sequencing Cards)',
    slug: 'kartu-urutan-cerita-logis',
    category: 'Pra-Membaca',
    ageGroup: '4–6 Tahun',
    duration: '10–20 menit',
    durationMinutes: 12,
    difficulty: 'Menengah',
    materialsNeeded: ['Set 3–4 kartu bergambar alur kejadian (misal: menanam benih -> tunas tumbuh -> pohon berbunga -> berbuah).'],
    diyAlternative: 'Gambar sendiri 3 kartu urutan sederhana di kertas gambar (misal: bangun tidur -> gosok gigi -> sarapan).',
    learningObjectives: [
      'Memahami konsep urutan kronologis waktu (awal, proses, akhir / sebab-akibat).',
      'Melatih menyusun kalimat naratif berurutan dari kiri ke kanan.'
    ],
    preparation: ['Acak kartu urutan di atas meja.'],
    steps: [
      'Amati semua kartu bersama anak.',
      'Tanyakan: "Peristiwa mana yang terjadi paling pertama?".',
      'Letakkan kartu pertama di sebelah kiri alas kerja.',
      'Cari kartu kedua dan ketiga, letakkan berjejer ke kanan.',
      'Ajak anak menceritakan alur cerita yang terbentuk dari gambar tersebut.'
    ],
    teacherLanguageExamples: [
      '"Apa yang terjadi sebelum bunga mekar indah seperti ini?"',
      '"Ceritakan bagaimana benih kecil ini akhirnya bisa tumbuh menjadi pohon besar."'
    ],
    variations: ['Urutan membuat jus buah, urutan daur hidup kupu-kupu.'],
    differentiation: {
      support: 'Gunakan hanya 3 kartu dengan perubahan visual yang sangat drastis.',
      challenge: 'Gunakan 5–6 kartu urutan peristiwa yang lebih detail.'
    },
    observationPoints: ['Apakah anak memahami hubungan sebab-akibat antar kartu?'],
    reflectionPrompt: 'Bagaimana kegiatan ini melatih kemampuan nalar runtut (*logical thinking*) anak?',
    paudIntegrationNotes: 'Pengembangan kemampuan kognitif dan bahasa naratif dalam Kurikulum PAUD.'
  },
  {
    id: 'act-16',
    title: 'Perburuan Harta Karun Bunyi di Kelas (Classroom Sound Treasure Hunt)',
    slug: 'perburuan-harta-karun-bunyi-kelas',
    category: 'Kesadaran Fonologis',
    ageGroup: '4–6 Tahun',
    duration: '10–20 menit',
    durationMinutes: 15,
    difficulty: 'Menengah',
    materialsNeeded: ['Piring anyaman kecil berlabel huruf raba /k/ dan kaca pembesar mainan.'],
    diyAlternative: 'Keranjang belanja mainan atau tas kain anak.',
    learningObjectives: [
      'Menghubungkan bunyi fonik dengan benda-benda nyata di seluruh ruang kelas.',
      'Mengembangkan inisiatif eksplorasi mandiri dan kerja sama.'
    ],
    preparation: ['Pilih 1 huruf target yang banyak bendanya di kelas (misal /k/ untuk kursi, kancing, kertas, kotak).'],
    steps: [
      'Perlihatkan huruf /k/ pada piring: "Hari ini kita adalah penjelajah bunyi /k/!"',
      'Ajak anak menjelajahi ruangan untuk menemukan benda kecil yang bunyi awalnya /k/.',
      'Kumpulkan benda di atas piring.',
      'Duduk bersama dan verifikasi bunyinya satu per satu.'
    ],
    teacherLanguageExamples: [
      '"Kancing... /k/... ya, kancing adalah harta karun /k/!"',
      '"Bagaimana dengan pensil? Apakah pensil berbunyi /k/ atau /p/?"'
    ],
    variations: ['Mencari benda di halaman sekolah / taman luar kelas.'],
    differentiation: {
      support: 'Beri petunjuk area (misal: "Coba cari di sekitar rak seni").',
      challenge: 'Minta anak mencari 1 benda untuk bunyi awal dan 1 benda untuk bunyi akhir.'
    },
    observationPoints: ['Bagaimana kerja sama dan antusiasme anak saat menjelajahi kelas?'],
    reflectionPrompt: 'Apakah aktivitas gerak ini membantu menyalurkan energi anak secara terarah dan edukatif?',
    paudIntegrationNotes: 'Pembelajaran aktif kinestetik berbasis lingkungan nyata.'
  },
  {
    id: 'act-17',
    title: 'Membangun Frasa Sederhana dengan Kartu Warna (Grammar Phrase Building)',
    slug: 'membangun-frasa-sederhana-kartu-warna',
    category: 'Membaca Lanjutan',
    ageGroup: '5–6 Tahun',
    duration: '10–20 menit',
    durationMinutes: 15,
    difficulty: 'Lanjutan',
    materialsNeeded: ['Strip kartu kata benda berlatar hitam (kucing, mobil, baju) dan kartu kata sifat berlatar biru tua (hitam, cepat, baru).'],
    diyAlternative: 'Kertas origami hitam (kata benda) dan biru (kata sifat) yang ditulisi spidol.',
    learningObjectives: [
      'Mengenal fungsi kata benda dan kata sifat secara visual melalui kode warna Montessori.',
      'Menyusun frasa bermakna: *kucing hitam*, *mobil cepat*, *baju baru*.'
    ],
    preparation: ['Pisahkan tumpukan kartu hitam dan kartu biru.'],
    steps: [
      'Ambil kartu kata benda: *kucing*. "Ini nama benda: kucing."',
      'Ambil kartu kata sifat: *hitam*. "Ini sifat warnanya: hitam."',
      'Satukan kedua kartu: "kucing hitam".',
      'Minta anak menukar kata sifatnya: *kucing besar*, *kucing lucu*.'
    ],
    teacherLanguageExamples: [
      '"Lihat bagaimana kata biru menceritakan lebih banyak tentang kata hitam ini."',
      '"Frasa menarik apa lagi yang bisa kamu ciptakan?"'
    ],
    variations: ['Menambahkan kata kerja berlatar merah: *kucing hitam lari*.'],
    differentiation: {
      support: 'Sediakan gambar ilustrasi di samping kata untuk membantu *decoding*.',
      challenge: 'Ajak anak membuat kalimat utuh 4 kata.'
    },
    observationPoints: ['Apakah anak memahami perubahan makna ketika kata sifat diganti?'],
    reflectionPrompt: 'Bagaimana pendekatan tata bahasa sensori Montessori memudahkan pemahaman struktur kalimat?',
    paudIntegrationNotes: 'Pengenalan tata bahasa awal secara fungsional dan intuitif.'
  },
  {
    id: 'act-18',
    title: 'Buku Bergambar Buatan Anak (Child-Authored Picture Booklet)',
    slug: 'buku-bergambar-buatan-anak',
    category: 'Pra-Menulis',
    ageGroup: '4,5–6 Tahun',
    duration: '10–20 menit',
    durationMinutes: 20,
    difficulty: 'Lanjutan',
    materialsNeeded: ['Buku mini 4 halaman dari kertas HVS dilipat dua, pensil warna, stempel huruf atau spidol.'],
    diyAlternative: 'Kertas kalender bekas yang bagian belakangnya polos dijilid dengan benang wol.',
    learningObjectives: [
      'Mengekspresikan cerita pribadi melalui perpaduan gambar dan simbol tulisan.',
      'Membangun identitas diri sebagai pembuat buku (*author*).'],
    preparation: ['Siapkan buku-buku mini polos di wadah rak bahasa.'],
    steps: [
      'Ajak anak menggambar pengalamannya di halaman buku (misal: kucingku di rumah).',
      'Tanyakan apa cerita di gambar tersebut.',
      'Jika anak sudah mampu menulis, minta anak menulis kata kuncinya (misal: "kucing manis").',
      'Jika anak belum mampu menulis, guru menuliskan kata-kata anak dengan persetujuan anak di bawah gambar (*dictation*).'
    ],
    teacherLanguageExamples: [
      '"Ini buku karyamu. Cerita apa yang ingin kamu bagikan kepada dunia hari ini?"',
      '"Bolehkah Ibu menuliskan kata-katamu di sini persis seperti yang kamu ceritakan?"'
    ],
    variations: ['Membuat buku kamus mini huruf /a/ (halaman 1: apel, halaman 2: ayam, halaman 3: api).'],
    differentiation: {
      support: 'Bantu anak merumuskan 1 kalimat pendek dan biarkan anak fokus menggambar.',
      challenge: 'Minta anak membaca bukunya di depan teman-teman saat jam lingkaran.'
    },
    observationPoints: ['Rasa bangga dan kepemilikan anak terhadap karya buku buatannya.'],
    reflectionPrompt: 'Bagaimana saya menghargai suara dan ekspresi otentik anak dalam proses pembuatan buku ini?',
    paudIntegrationNotes: 'Penguatan literasi awal, kreativitas, dan rasa percaya diri anak.'
  },
  {
    id: 'act-19',
    title: 'Melatih Kontrol Pensil dengan Metal Insets (Pola Garis Artistik)',
    slug: 'melatih-kontrol-pensil-metal-insets',
    category: 'Pra-Menulis',
    ageGroup: '4–6 Tahun',
    duration: '10–20 menit',
    durationMinutes: 15,
    difficulty: 'Menengah',
    materialsNeeded: ['Set Metal Insets bentuk segitiga dan lingkaran, kertas 14x14 cm, 2 pensil warna runcing.'],
    diyAlternative: 'Pola cetakan bentuk geometris dari kardus tebal.',
    learningObjectives: [
      'Melatih kelenturan pergelangan tangan dan kekuatan *pincer grip*.',
      'Mengontrol gerakan pensil dalam batas garis arsiran sejajar yang rapi.'
    ],
    preparation: ['Tata kertas dan pensil warna yang sudah diraut tajam di atas meja.'],
    steps: [
      'Gunakan bingkai untuk menggambar kontur luar segitiga.',
      'Gunakan lempengan padat untuk menggambar garis tepi kedua dengan warna berbeda.',
      'Lakukan arsiran garis-garis sejajar dari kiri ke kanan di bagian dalam segitiga.',
      'Jaga agar garis tidak keluar dari batas tepi.'
    ],
    teacherLanguageExamples: [
      '"Pegang pensilmu dengan santai namun mantap."',
      '"Perhatikan bagaimana garis-garis halus ini berbaris rapi seperti pagar kecil."'
    ],
    variations: ['Membuat pola tumpang tindih antara lingkaran dan persegi untuk menghasilkan warna campuran.'],
    differentiation: {
      support: 'Gunakan bentuk lingkaran yang tidak memiliki sudut tajam.',
      challenge: 'Gunakan bentuk geometris yang lebih kompleks seperti *quatrefoil* atau elips.'
    },
    observationPoints: ['Kestabilan tekanan pensil pada kertas dan ketepatan posisi jari.'],
    reflectionPrompt: 'Apakah latihan ini memberikan ketenangan dan melatih fokus meditasi gerak (*mindful movement*) pada anak?',
    paudIntegrationNotes: 'Persiapan motorik halus pra-menulis tanpa kebosanan lembar kerja fotokopi.'
  },
  {
    id: 'act-20',
    title: 'Membaca Kata Fonik Tiga Huruf (3-Letter Phonetic Word Matching)',
    slug: 'membaca-kata-fonik-tiga-huruf',
    category: 'Membaca Lanjutan',
    ageGroup: '4,5–6 Tahun',
    duration: '5–10 menit',
    durationMinutes: 10,
    difficulty: 'Menengah',
    materialsNeeded: ['6 kartu gambar fonik (tas, rel, bus, pot, per, jas) dan 6 strip label kata.'],
    diyAlternative: 'Kartu buatan tangan dengan tulisan huruf cetak tebal.',
    learningObjectives: [
      'Membaca kata fonik Konsonan-Vokal-Konsonan (CVC) secara mandiri.',
      'Memadukan bunyi huruf menjadi satu kesatuan kata yang memiliki makna.'
    ],
    preparation: ['Susun kartu gambar berjejer vertikal di sisi kiri.'],
    steps: [
      'Ambil satu strip kata: ajak anak membunyikan pelan /t/ ... /a/ ... /s/.',
      'Tanyakan: "Kata apa yang kamu baca? Tas!"',
      'Minta anak mencari gambar tas dan meletakkan label kata di bawahnya.',
      'Lakukan hingga seluruh kartu berpasangan.'
    ],
    teacherLanguageExamples: [
      '"Bunyikan tiap hurufnya perlahan... lalu satukan seperti bisikan angin."',
      '"Kamu berhasil membaca kata ini sendiri!"'
    ],
    variations: ['Permainan mencocokkan kata dengan miniatur benda nyata fonik.'],
    differentiation: {
      support: 'Pilih kata yang vokal tengahnya /a/ terlebih dahulu karena paling mudah dibunyikan.',
      challenge: 'Gunakan kata 4-5 huruf (misal: *katak*, *kapal*).'
    },
    observationPoints: ['Proses sintesis fonemik anak saat menggabungkan bunyi huruf menjadi kata.'],
    reflectionPrompt: 'Bagaimana perasaan anak ketika ia pertama kali menyadari bahwa ia bisa membaca kata tanpa dibantu?',
    paudIntegrationNotes: 'Pencapaian tonggak literasi awal yang menyenangkan dan memerdekakan.'
  }
];
