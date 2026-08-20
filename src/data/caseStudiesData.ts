import { CaseStudyItem } from '../types';

export const caseStudiesData: CaseStudyItem[] = [
  {
    id: 'case-1',
    title: 'Kasus 01: Anak Tidak Tertarik Mengikuti Aktivitas Sandpaper Letters',
    category: 'Minat & Kesiapan Anak',
    ageGroup: '4 Tahun (Kelompok A)',
    scenario: 'Ibu Ratna telah mempersiapkan 3 papan Sandpaper Letters (/a/, /m/, /s/) di atas meja. Ketika Rian (4 tahun) diundang untuk meraba huruf, Rian menolak, memalingkan muka, dan berulang kali berlari ke area balok bangunan untuk menyusun menara balok kayu.',
    teacherDilemma: 'Ibu Ratna khawatir jika Rian dibiarkan, ia akan tertinggal dalam pengenalan huruf raba dibandingkan teman sebayanya. Apa langkah pertama yang paling tepat dan berpihak pada anak?',
    options: [
      {
        key: 'A',
        text: 'Memaksa Rian duduk diam dan melarangnya bermain balok sebelum menyelesaikan penelusuran 3 huruf.',
        isRecommended: false,
        rationale: 'Pemaksaan akan menciptakan asosiasi negatif, trauma sensori, dan penolakan emosional terhadap simbol huruf.',
        montessoriPrinciple: 'Respect for the Child & Non-Coercion',
        paudGuidance: 'Prinsip Kurikulum PAUD: Pembelajaran harus menyenangkan dan tidak menimbulkan tekanan psikologis pada anak.'
      },
      {
        key: 'B',
        text: 'Menghukum Rian dengan menyuruhnya duduk di pojok kelas (*time-out*) sampai ia mau menurut.',
        isRecommended: false,
        rationale: 'Hukuman merusak ikatan rasa percaya antara guru dan anak serta tidak menyelesaikan akar masalah ketidaktertarikan anak.',
        montessoriPrinciple: 'Positive Discipline & Internal Motivation',
        paudGuidance: 'Pedoman Iklim Keamanan Satuan PAUD Kemendikdasmen melarang keras hukuman yang mempermalukan anak.'
      },
      {
        key: 'C',
        text: 'Mengamati minat alami Rian pada balok, tidak memaksakan saat itu, dan mengintegrasikan bunyi fonik ke dalam aktivitas baloknya (misal: "Wah menaramu kokoh sekali, menara berbunyi /m/!").',
        isRecommended: true,
        rationale: 'Pendekatan "Follow the Child" berarti menemui anak di titik minatnya saat ini. Guru memanfaatkan ketertarikan Rian pada balok untuk merangsang kepekaan bunyi lisan terlebih dahulu sebelum masuk ke simbol abstrak.',
        montessoriPrinciple: 'Follow the Child & Sensitive Periods',
        paudGuidance: 'Pembelajaran berdiferensiasi dan berbasis minat anak dalam Kurikulum PAUD Indonesia.'
      },
      {
        key: 'D',
        text: 'Mengabaikan Rian sepenuhnya dan menganggap Rian tidak berbakat dalam pelajaran bahasa.',
        isRecommended: false,
        rationale: 'Mengabaikan anak adalah bentuk *fixed mindset* yang melabeli anak secara tidak adil.',
        montessoriPrinciple: 'Every Child is Capable of Development',
        paudGuidance: 'Guru PAUD bertugas memberikan stimulasi yang kaya dan adaptif bagi seluruh anak tanpa terkecuali.'
      }
    ],
    closingReflection: 'Kesiapan belajar membaca bukan perlombaan kecepatan. Ketika anak belum tertarik pada simbol Sandpaper Letters, sering kali kesadaran fonologis lisan atau kebutuhan motorik kasarnya yang sedang berada dalam periode peka. Dengarkan dan amati sinyal dari anak.',
    tags: ['Sandpaper Letters', 'Minat Anak', 'Follow the Child', 'Diferensiasi']
  },
  {
    id: 'case-2',
    title: 'Kasus 02: Anak Sering Mengambil Material Tetapi Tidak Menyelesaikan Aktivitas',
    category: 'Konsentrasi & Regulasi Diri',
    ageGroup: '3,5 Tahun (Kelompok Bermain / KB)',
    scenario: 'Dimas sering kali mengambil baki kartu klasifikasi dari rak, membukanya selama 30 detik di atas karpet, lalu meninggalkannya begitu saja dalam keadaan berantakan untuk mengambil keranjang miniatur lainnya.',
    teacherDilemma: 'Bagaimana membantu Dimas membangun siklus kerja (*work cycle*) yang tuntas tanpa membuatnya merasa dihakimi atau dimarahi?',
    options: [
      {
        key: 'A',
        text: 'Mengunci rak material bahasa agar Dimas tidak bisa mengambil barang sembarangan.',
        isRecommended: false,
        rationale: 'Mengunci rak menghancurkan *Prepared Environment* dan merampas kesempatan anak untuk belajar memilih secara mandiri.',
        montessoriPrinciple: 'Prepared Environment & Accessibility',
        paudGuidance: 'Lingkungan kelas PAUD harus memberikan akses bebas dan aman terhadap sumber belajar.'
      },
      {
        key: 'B',
        text: 'Mendekati Dimas dengan hangat, duduk sejajar dengannya, dan mengajaknya menyelesaikan siklus kerja: "Dimas, mari kita antarkan kartu ini kembali ke rumahnya di rak bersama-sama."',
        isRecommended: true,
        rationale: 'Anak usia 3,5 tahun masih dalam tahap membangun regulasi diri dan keteraturan internal (*sense of order*). Pendampingan guru yang tenang dan konsisten membantu menanamkan kebiasaan merapikan secara alami.',
        montessoriPrinciple: 'Order, Ground Rules & Grace and Courtesy',
        paudGuidance: 'Membiasakan perilaku mandiri dan tanggung jawab sosial pada anak usia dini.'
      },
      {
        key: 'C',
        text: 'Memarahi Dimas di depan teman-temannya agar ia malu dan tidak mengulangi kebiasaannya.',
        isRecommended: false,
        rationale: 'Mempermalukan anak akan memicu kecemasan dan menurunkan konsep diri anak.',
        montessoriPrinciple: 'Dignity of the Child',
        paudGuidance: 'Disiplin positif berbasis empati.'
      },
      {
        key: 'D',
        text: 'Memberikan lembar kerja kertas agar Dimas duduk diam di kursi seharian.',
        isRecommended: false,
        rationale: 'Lembar kerja pasif tidak melatih keterampilan eksekutif (*executive function*) maupun regulasi diri motorik anak.',
        montessoriPrinciple: 'Active Movement in Learning',
        paudGuidance: 'PAUD berprinsip bermain bermakna, bukan drilling lembar kerja mekanis.'
      }
    ],
    closingReflection: 'Siklus kerja tuntas (mengambil -> menggunakan -> merapikan) adalah keterampilan hidup yang dibangun secara bertahap. Teladan lembut dari guru jauh lebih efektif daripada omelan.',
    tags: ['Siklus Kerja', 'Keteraturan', 'Disiplin Positif', 'Kemandirian']
  },
  {
    id: 'case-3',
    title: 'Kasus 03: Guru Terlalu Mendominasi Suara Saat Presentasi Material',
    category: 'Teknik Presentasi Guru',
    ageGroup: '4,5 Tahun',
    scenario: 'Pak Doni sangat bersemangat saat memperkenalkan kartu kata fonik kepada Siti. Namun, selama 10 menit presentasi, Pak Doni terus-menerus berbicara, menjelaskan sejarah kata, mengoreksi tiap detik gerakan tangan Siti, dan memberikan ceramah panjang lebar.',
    teacherDilemma: 'Siti tampak lelah, pandangannya melayang ke jendela, dan kehilangan rasa antusiasmenya. Apa yang perlu diperbaiki dari teknik presentasi Pak Doni?',
    options: [
      {
        key: 'A',
        text: 'Pak Doni harus berbicara lebih keras lagi dengan mikrofon agar Siti mendengarkan.',
        isRecommended: false,
        rationale: 'Masalahnya bukan pada volume suara, melainkan pada beban kognitif berlebih akibat ceramah yang terlalu dominan.',
        montessoriPrinciple: 'Economy of Language (Hemat Kata)',
        paudGuidance: 'Komunikasi guru PAUD harus ringkas, jelas, dan memberikan ruang jeda bagi anak.'
      },
      {
        key: 'B',
        text: 'Menerapkan prinsip "Economy of Language": menggunakan gerakan tangan yang tenang, berbicara hanya kata kunci esensial, dan memberikan ruang bagi Siti untuk mengeksplorasi material sendiri.',
        isRecommended: true,
        rationale: 'Dalam presentasi Montessori, guru membiarkan material yang "berbicara" kepada indra anak. Kata-kata yang terlalu banyak justru mengaburkan fokus sensori dan memecah konsentrasi anak.',
        montessoriPrinciple: 'Silence, Precision & Economy of Language',
        paudGuidance: 'Fasilitasi pembelajaran berpusat pada anak (*student-centered facilitation*).'
      },
      {
        key: 'C',
        text: 'Menyalahkan Siti karena dianggap kurang memiliki daya konsentrasi.',
        isRecommended: false,
        rationale: 'Ketidakfokusan anak sering kali merupakan cerminan dari presentasi orang dewasa yang kurang sesuai dengan tahapan rentang atensi anak.',
        montessoriPrinciple: 'Teacher Self-Reflection',
        paudGuidance: 'Refleksi pedagogis pendidik PAUD.'
      },
      {
        key: 'D',
        text: 'Menghentikan seluruh pengenalan membaca selamanya.',
        isRecommended: false,
        rationale: 'Solusi yang terlalu ekstrem dan tidak konstruktif.',
        montessoriPrinciple: 'Gradual Presentation Steps',
        paudGuidance: 'Menyesuaikan strategi mengajar secara fleksibel.'
      }
    ],
    closingReflection: '"Semakin sedikit kata yang kita gunakan, semakin sempurna presentasi kita." Biarkan gerakan tangan kita yang jernih dan keheningan yang tenang menjadi panggung utama belajar anak.',
    tags: ['Presentasi Guru', 'Economy of Language', 'Konsentrasi', 'Refleksi Diri']
  },
  {
    id: 'case-4',
    title: 'Kasus 04: Anak Hafal Nama Abjad (A-B-C) Namun Belum Memahami Bunyi Fonik',
    category: 'Kesadaran Fonologis vs Menghafal',
    ageGroup: '5 Tahun (Kelompok B)',
    scenario: 'Alya (5 tahun) sangat lancar menyanyikan lagu abjad A-B-C dari video gawai di rumahnya. Namun ketika dihadapkan pada tulisan kata "b-a-t-u", Alya mengeja nama hurufnya "be-a-te-u" dan bingung saat ditanya bagaimana membacanya, lalu menebak sembarangan "meja?".',
    teacherDilemma: 'Orang tua Alya bangga anaknya sudah hafal nama 26 abjad, namun Alya mengalami disonansi saat belajar membaca kata. Bagaimana guru mendampingi Alya dan mengomunikasikan hal ini dengan orang tua?',
    options: [
      {
        key: 'A',
        text: 'Menyalahkan orang tua Alya di grup WhatsApp kelas karena telah salah mengajarkan anak.',
        isRecommended: false,
        rationale: 'Menyerang orang tua merusak kemitraan tripusat pendidikan (*parent-teacher partnership*).',
        montessoriPrinciple: 'Respectful Collaboration with Families',
        paudGuidance: 'Kemitraan guru dan orang tua harus dibangun dengan dialog apresiatif.'
      },
      {
        key: 'B',
        text: 'Mengajak Alya bermain permainan bunyi lisan (I-Spy Sound Game) dan menelusuri Sandpaper Letters untuk mengaitkan simbol huruf dengan bunyi murni (/b/, /a/, /t/, /u/) secara menyenangkan tanpa mendiskreditkan hafalan abjadnya.',
        isRecommended: true,
        rationale: 'Guru menghargai pengetahuan awal Alya mengenai nama huruf, sambil secara bertahap memperkuat kesadaran fonik bunyi (/b/-/a/-/t/-/u/) agar Alya dapat melakukan sintesis membaca alami.',
        montessoriPrinciple: 'Phonetic Awareness as Reading Foundation',
        paudGuidance: 'Penguatan fondasi keaksaraan bermakna tanpa membebani daya ingat anak.'
      },
      {
        key: 'C',
        text: 'Meminta Alya melupakan semua nama abjad yang pernah ia pelajari dan melarangnya menyanyi lagu abjad.',
        isRecommended: false,
        rationale: 'Melarang secara kaku akan membingungkan anak dan memicu konflik loyalitas antara ajaran rumah dan sekolah.',
        montessoriPrinciple: 'Gentle Transition & Cognitive Bridges',
        paudGuidance: 'Menghubungkan pengalaman belajar di rumah dengan di satuan PAUD.'
      },
      {
        key: 'D',
        text: 'Membiarkan Alya mengeja "be-a-te-u" dan memaksanya menghafal 100 kata per hari.',
        isRecommended: false,
        rationale: 'Mengeja nama abjad membebani memori kerja anak dan membuat membaca menjadi aktivitas mekanis tanpa pemahaman arti.',
        montessoriPrinciple: 'Meaningful Synthesis vs Rote Memorization',
        paudGuidance: 'Menolak metode drilling membaca calistung mekanik pada anak usia dini.'
      }
    ],
    closingReflection: 'Nama huruf adalah label abstrak, sedangkan bunyi huruf adalah realitas akustik bahasa. Berikan jembatan bunyi fonik yang kokoh melalui permainan auditori yang gembira.',
    tags: ['Bunyi Fonik vs Nama Huruf', 'Literasi Awal', 'Kemitraan Orang Tua', 'Sintesis Membaca']
  },
  {
    id: 'case-5',
    title: 'Kasus 05: Keterbatasan Anggaran Sekolah & Material Pabrikan Tidak Lengkap',
    category: 'Adaptasi Kontekstual PAUD Indonesia',
    ageGroup: 'Semua Usia PAUD',
    scenario: 'Di sebuah SPS/KB di daerah, guru-guru ingin menerapkan stimulasi Montessori Bahasa, namun sekolah tidak memiliki anggaran untuk membeli rak kayu impor, Sandpaper Letters kayu resmi, atau kotak LMA seharga jutaan rupiah.',
    teacherDilemma: 'Sebagian guru merasa berkecil hati dan menganggap "Montessori hanya untuk sekolah mahal di kota besar". Apa yang sebaiknya dilakukan tim guru?',
    options: [
      {
        key: 'A',
        text: 'Membatalkan seluruh rencana pembelajaran bahasa karena menganggap tanpa material pabrikan resmi, Montessori tidak bisa dijalankan.',
        isRecommended: false,
        rationale: 'Montessori adalah filosofi dan pendekatan ilmiah yang berpusat pada anak, bukan sekadar merek dagang material kayu mahal.',
        montessoriPrinciple: 'The Spirit of Montessori vs Material Fetishism',
        paudGuidance: 'Pemanfaatan sumber daya lokal dan bahan alam (*loose parts*) dalam PAUD Indonesia.'
      },
      {
        key: 'B',
        text: 'Berinisiatif membuat material alternatif sederhana (DIY) menggunakan kardus bekas, kertas amplas/kain perca, tutup botol air mineral, pasir halus baki, dan benda nyata di sekitar lingkungan sekolah bersama orang tua murid.',
        isRecommended: true,
        rationale: 'Esensi material Montessori adalah isolasi kualitas sensori, keteraturan, dan kontrol kesalahan. Kardus dan amplas lokal memiliki fungsi stimulasi taktil yang sama persis dengan papan kayu pabrikan, sekaligus membangun semangat gotong royong komunitas sekolah.',
        montessoriPrinciple: 'Prepared Environment with Local Resources',
        paudGuidance: 'Prinsip efisiensi sumber daya dan keterlibatan masyarakat dalam penyelenggaraan PAUD berkualitas.'
      },
      {
        key: 'C',
        text: 'Membebani iuran tinggi yang memberatkan kepada orang tua murid yang kurang mampu.',
        isRecommended: false,
        rationale: 'Pendidikan anak usia dini harus inklusif dan tidak boleh menjadi beban ekonomi yang meminggirkan anak.',
        montessoriPrinciple: 'Inclusivity & Social Mission of Education',
        paudGuidance: 'Akses PAUD yang berkeadilan dan terjangkau.'
      },
      {
        key: 'D',
        text: 'Hanya menonton video pembelajaran di YouTube tanpa pernah mempraktikkan stimulasi taktil apapun dengan anak.',
        isRecommended: false,
        rationale: 'Anak usia dini membutuhkan eksplorasi ragawi dan interaksi sensori nyata dengan tangan mereka (*hands-on learning*).',
        montessoriPrinciple: 'The Hand is the Instrument of the Mind',
        paudGuidance: 'Metode pembelajaran aktif dan kontekstual.'
      }
    ],
    closingReflection: 'Maria Montessori pertama kali mendirikan Casa dei Bambini di kawasan buruh San Lorenzo dengan sumber daya yang sangat sederhana. Jiwa sejati Montessori ada pada rasa hormat kepada anak dan kejelian guru memanfaatkan benda di sekitarnya.',
    tags: ['Material DIY', 'Kearifan Lokal', 'Loose Parts', 'Inklusivitas PAUD']
  },
  {
    id: 'case-6',
    title: 'Kasus 06: Keragaman Laju Perkembangan Bahasa dalam Satu Ruang Kelas',
    category: 'Diferensiasi & Inklusi',
    ageGroup: '4–6 Tahun (Kelas Campuran / Heterogen)',
    scenario: 'Di kelas Bu Laksmi, terdapat Bayu (6 tahun) yang sudah mulai menyusun kata dengan LMA, sementara di pojok yang sama ada Kirana (4 tahun) yang masih dalam tahap awal memperkaya kosakata benda dan belum mengenal bunyi konsonan awal.',
    teacherDilemma: 'Bagaimana Bu Laksmi mengatur waktu, ruang, dan material agar kebutuhan belajar Bayu dan Kirana terfasilitasi tanpa membanding-bandingkan keduanya?',
    options: [
      {
        key: 'A',
        text: 'Menyamaratakan pelajaran: mewajibkan Kirana ikut menyusun kata LMA yang sulit, atau memaksa Bayu mengulang pelajaran nama benda sederhana.',
        isRecommended: false,
        rationale: 'Penyeragaman materi merugikan kedua anak: Kirana akan merasa frustrasi dan Bayu akan merasa bosan.',
        montessoriPrinciple: 'Individualized Learning & Multi-Age Classroom',
        paudGuidance: 'Diferensiasi proses dan konten pembelajaran dalam PAUD.'
      },
      {
        key: 'B',
        text: 'Memanfaatkan penataan area bahasa di mana Bayu bekerja mandiri dengan LMA di karpetnya, sementara guru memberikan presentasi personal kartu klasifikasi kosakata kepada Kirana, serta mendorong interaksi positif di mana anak yang lebih besar bisa menjadi model teladan yang suportif.',
        isRecommended: true,
        rationale: 'Ciri khas kelas Montessori adalah *multi-age grouping* (kelompok usia majemuk) dan pembelajaran mandiri. Setiap anak bekerja dengan material yang sesuai tingkat perkembangannya tanpa kompetisi.',
        montessoriPrinciple: 'Multi-Age Community & Individual Work Plan',
        paudGuidance: 'Pengelolaan kelas heterogen berbasis pembelajaran berdiferensiasi.'
      },
      {
        key: 'C',
        text: 'Memuji Bayu setinggi langit di depan Kirana agar Kirana merasa iri dan termotivasi.',
        isRecommended: false,
        rationale: 'Menciptakan rivalitas dan kecemburuan merusak iklim psikologis kelas dan memicu rasa rendah diri (*inferiority complex*) pada anak yang perkembangannya berbeda.',
        montessoriPrinciple: 'Cooperation over Competition',
        paudGuidance: 'Membangun karakter profil pelajar yang gotong royong dan saling menyayangi.'
      },
      {
        key: 'D',
        text: 'Memisahkan Kirana ke ruangan lain sendirian.',
        isRecommended: false,
        rationale: 'Isolasi anak bertentangan dengan prinsip pendidikan inklusif dan kebersamaan komunitas kelas.',
        montessoriPrinciple: 'Social Cohesion in the Prepared Environment',
        paudGuidance: 'Prinsip pendidikan inklusif PAUD.'
      }
    ],
    closingReflection: 'Tiap anak memiliki bunga mekar di musimnya masing-masing. Ruang kelas yang kaya material memungkinkan setiap anak berkembang dengan kecepatan alaminya dalam suasana damai dan saling mendukung.',
    tags: ['Multi-Age', 'Diferensiasi', 'Inklusi', 'Komunitas Kelas']
  }
];
