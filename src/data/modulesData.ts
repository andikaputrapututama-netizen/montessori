import { Module } from '../types';

export const modulesData: Module[] = [
  {
    id: 'modul-1',
    number: 1,
    title: 'Fondasi Montessori Bahasa',
    slug: 'fondasi-montessori-bahasa',
    subtitle: 'Prinsip Dasar, Pola Pikir Pendidik, dan Filosofi Bahasa Montessori',
    description: 'Pahami filosofi dasar Maria Montessori mengenai perkembangan bahasa anak usia dini, peran pendidik sebagai fasilitator (bukan penceramah), serta cara menghubungkannya secara hati-hati dengan konteks PAUD di Indonesia.',
    iconName: 'Sprout',
    category: 'Fondasi',
    competencyOutcome: 'Guru mampu menjelaskan prinsip dasar pendekatan Montessori dalam stimulasi bahasa dan mengidentifikasi peran guru sebagai pengamat yang menghargai keunikan anak.',
    level: 'Pemula',
    totalDurationMinutes: 45,
    lessons: [
      {
        id: 'les-1-1',
        moduleId: 'modul-1',
        title: 'Apa itu Montessori & Filosofi Bahasa Anak Usia Dini?',
        slug: 'apa-itu-montessori-filosofi-bahasa',
        durationMinutes: 8,
        difficulty: 'Pemula',
        order: 1,
        learningObjectives: [
          'Memahami sejarah singkat dan esensi pendekatan pembelajaran Montessori.',
          'Mengenali bagaimana Maria Montessori memandang potensi bahasa alami pada anak.',
          'Menghubungkan stimulasi bahasa dengan penghormatan terhadap martabat anak.'
        ],
        contentMarkdown: `### Pendahuluan
Pendekatan Montessori dikembangkan oleh dr. Maria Montessori pada awal abad ke-20 berlandaskan observasi ilmiah mendalam terhadap anak-anak di *Casa dei Bambini* (Rumah Anak-anak). 

Dalam pendekatan ini, perkembangan bahasa tidak dipandang sebagai sesuatu yang perlu "diajarkan dengan dijejalkan" lewat hafalan mekanis atau lembar kerja berulang, melainkan sebagai **proses penyerapan alami dan eksplorasi sensori** yang didukung oleh lingkungan yang dipersiapkan (*Prepared Environment*).

### Konsep Inti Montessori dalam Stimulasi Bahasa
1. **The Absorbent Mind (Pikiran yang Menyerap):** Anak usia 0–6 tahun memiliki kemampuan menyerap informasi linguistik dari lingkungannya secara mudah tanpa paksaan, seperti spons menyerap air.
2. **Sensitive Periods for Language (Periode Peka Bahasa):** Ada jendela waktu emas ketika anak sangat tertarik pada bunyi, kata baru, artikulasi, dan bentuk simbol huruf.
3. **Follow the Child (Mengikuti Minat & Kesiapan Anak):** Guru tidak memaksakan anak membaca sebelum kesadaran fonik dan bahasa lisannya matang.
4. **Child-Centered Environment:** Material diletakkan di rak setinggi anak agar anak dapat memilih, menggunakan, dan merapikan sendiri secara mandiri.

> **Catatan Penting untuk Guru PAUD Indonesia:**
> Pendekatan Montessori dapat digunakan sebagai salah satu pendekatan pembelajaran yang memperkaya kelas. Pendekatan ini perlu dikontekstualisasikan dengan Kurikulum PAUD, karakteristik budaya setempat, serta regulasi pendidikan yang berlaku di Indonesia.`,
        practicalExample: 'Di kelas, alih-alih meminta seluruh anak duduk diam menghafal huruf di papan tulis secara serentak, guru meletakkan keranjang benda konkrit di rak. Anak yang sedang tertarik pada bunyi kata dapat mengambil keranjang tersebut dan bereksplorasi secara mandiri atau dalam kelompok kecil.',
        tryInClassroom: 'Amati 3 anak di kelas Anda minggu ini. Catat kapan mereka paling antusias menggunakan kata baru: apakah saat bermain peran, saat melihat buku gambar, atau saat berbincang santai?',
        reflectionPrompt: 'Apakah selama ini saya lebih sering mendikte kata kepada anak, atau memberikan ruang bagi anak untuk mengekspresikan bahasanya sendiri?',
        quiz: [
          {
            id: 'q-1-1',
            question: 'Bagaimana pendekatan Montessori memandang proses pemerolehan bahasa pada anak usia dini?',
            options: [
              { key: 'A', text: 'Anak harus diwajibkan menghafal seluruh abjad sebelum usia 4 tahun dengan lembar kerja.' },
              { key: 'B', text: 'Bahasa diperoleh melalui penyerapan alami dari lingkungan kaya bahasa dan eksplorasi sensori.' },
              { key: 'C', text: 'Bahasa hanya bisa berkembang jika guru terus-menerus berceramah di depan kelas.' },
              { key: 'D', text: 'Perkembangan bahasa anak sama persis pada semua anak tanpa perbedaan individual.' }
            ],
            correctAnswer: 'B',
            explanation: 'Montessori menekankan The Absorbent Mind dan eksplorasi sensori, di mana anak menyerap bahasa secara alami dari lingkungan interaktif dan bermakna.',
            montessoriPrinciple: 'The Absorbent Mind & Sensitive Periods',
            paudContext: 'Sesuai prinsip PAUD bahwa pembelajaran anak usia dini berpusat pada anak dan berbasis pengalaman bermakna.'
          }
        ]
      },
      {
        id: 'les-1-2',
        moduleId: 'modul-1',
        title: 'Prinsip "Follow the Child" & Peran Pendidik sebagai Pengamat',
        slug: 'prinsip-follow-the-child-peran-guru',
        durationMinutes: 9,
        difficulty: 'Pemula',
        order: 2,
        learningObjectives: [
          'Memahami arti sejati dari prinsip "Follow the Child" tanpa kehilangan batasan positif.',
          'Mengenali peran guru Montessori sebagai pengamat (*observer*) yang sabar dan fasilitator lingkungan.',
          'Mengetahui kapan saat yang tepat untuk hadir membantu dan kapan harus mundur memberikan ruang.'
        ],
        contentMarkdown: `### Makna "Follow the Child"
"Follow the Child" bukan berarti membiarkan anak melakukan apa saja tanpa arah (*permissive*), melainkan **mengamati kesiapan perkembangan, minat alami, dan ritme belajar anak**.

Guru mengamati:
- Apakah anak sedang tertarik pada bunyi vokal dan konsonan?
- Apakah anak sedang membutuhkan stimulasi kosakata benda nyata?
- Apakah anak sedang berada dalam fase ingin menelusuri garis pola?

### Peran Baru Guru PAUD: Dari Pengajar Menjadi Pemandu
- **Kurangi Dominasi Suara:** Guru Montessori menggunakan kalimat yang ringkas, artikulatif, dan tenang saat presentasi material.
- **Isolasi Kesulitan:** Kenalkan satu konsep dalam satu waktu (misal: bunyi huruf awal, bukan langsung mengeja kalimat panjang).
- **Hargai Konsentrasi:** Jangan menginterupsi anak yang sedang asyik menelusuri material hanya untuk memuji secara berlebihan. Biarkan anak merasakan kepuasan intrinsik.`,
        practicalExample: 'Ketika seorang anak sedang fokus mencocokkan kartu gambar hewan dengan miniaturnya, guru tidak memotong dengan ucapan "Hebat sekali kamu pinter!", melainkan mengamati dengan senyum dari jarak tenang.',
        tryInClassroom: 'Cobalah melakukan presentasi satu material bahasa dengan berbicara sesedikit mungkin (hanya kata kunci esensial). Perhatikan bagaimana anak memperhatikan gerakan tangan dan artikulasi mulut Anda.',
        reflectionPrompt: 'Seberapa sering saya merasa "tidak mengajar" jika tidak terus-menerus berbicara di depan anak?',
        quiz: [
          {
            id: 'q-1-2',
            question: 'Apa tindakan paling tepat yang mencerminkan prinsip "Follow the Child" saat anak sedang asyik bereksplorasi kartu gambar?',
            options: [
              { key: 'A', text: 'Langsung menghentikan anak dan menyuruhnya mengerjakan tugas yang belum selesai.' },
              { key: 'B', text: 'Mengamati dari dekat tanpa menginterupsi konsentrasi dan alur eksplorasi anak.' },
              { key: 'C', text: 'Mengambil kartu dari tangan anak dan menunjukkan cara tercepat menyelesaikannya.' },
              { key: 'D', text: 'Memberikan tes lisan mendadak untuk menguji hafalan anak.' }
            ],
            correctAnswer: 'B',
            explanation: 'Menghormati konsentrasi anak dan mengamati proses belajarnya adalah esensi dari peran guru sebagai fasilitator dan observer.',
            montessoriPrinciple: 'Freedom within Limits & Non-Interference',
            paudContext: 'Memberikan ruang bagi regulasi diri dan fokus anak usia dini.'
          }
        ]
      }
    ]
  },
  {
    id: 'modul-2',
    number: 2,
    title: 'Perkembangan Bahasa Anak Usia Dini',
    slug: 'perkembangan-bahasa-anak-usia-dini',
    subtitle: 'Bahasa Reseptif, Ekspresif, Kesadaran Fonologis & Literasi Awal',
    description: 'Pelajari tahapan perkembangan bahasa anak usia 2–6 tahun, mulai dari menyimak, berbicara, kesadaran bunyi fonik, hingga kesiapan pra-membaca dan pra-menulis secara ilmiah dan non-judgmental.',
    iconName: 'MessageSquare',
    category: 'Bahasa',
    competencyOutcome: 'Guru mampu mengidentifikasi tahap kesadaran fonologis anak dan merancang stimulasi bahasa reseptif serta ekspresif yang ramah perkembangan.',
    level: 'Pemula',
    totalDurationMinutes: 50,
    lessons: [
      {
        id: 'les-2-1',
        moduleId: 'modul-2',
        title: 'Bahasa Reseptif vs Bahasa Ekspresif dalam Keseharian PAUD',
        slug: 'bahasa-reseptif-vs-ekspresif',
        durationMinutes: 10,
        difficulty: 'Pemula',
        order: 1,
        learningObjectives: [
          'Membedakan kemampuan memahami bahasa (reseptif) dan kemampuan memproduksi bahasa (ekspresif).',
          'Mengetahui cara menstimulasi kosakata reseptif sebelum menuntut anak berbicara panjang lebar.',
          'Membangun lingkungan kelas yang kaya percakapan berkualitas.'
        ],
        contentMarkdown: `### Memahami Dua Sisi Bahasa Anak
- **Bahasa Reseptif:** Kemampuan anak mendengarkan, mencerna instruksi, memahami makna kata, dan mengidentifikasi benda yang disebutkan.
- **Bahasa Ekspresif:** Kemampuan anak mengungkapkan ide, menyusun kalimat, menyebutkan nama benda, dan menceritakan pengalamannya.

Dalam perkembangan anak, **bahasa reseptif selalu mendahului bahasa ekspresif**. Anak sering kali sudah mengerti arti suatu benda jauh sebelum otot artikulasinya mampu melafalkannya dengan lancar.

### Menghindari Pelabelan & Diagnosis Dini
Jika seorang anak belum banyak bicara di kelas:
1. Lakukan observasi bahasa reseptifnya (apakah anak merespons saat dipanggil? apakah anak dapat menunjuk benda saat diminta?).
2. Jangan langsung memberi label "terlambat bicara" atau diagnosis medis tanpa konsultasi profesional.
3. Berikan stimulasi kosakata konkrit melalui lagu berima, kartu klasifikasi, dan percakapan ramah.`,
        practicalExample: 'Guru mengajak anak bermain "Tolong berikan keranjang merah kepada Bu Guru". Anak belum lancar bicara, tetapi mampu mengambil benda yang tepat dengan gembira, menunjukkan bahasa reseptif yang baik.',
        tryInClassroom: 'Gunakan pertanyaan terbuka dalam lingkaran pagi: "Apa yang kamu rasakan saat menyentuh daun basah tadi pagi?" daripada pertanyaan tertutup "Ini daun apa?".',
        reflectionPrompt: 'Apakah saya sering memotong kalimat anak ketika mereka sedang berusaha menyusun kata-kata?',
        quiz: [
          {
            id: 'q-2-1',
            question: 'Mengapa guru perlu menstimulasi bahasa reseptif anak sebelum menuntut penguasaan ekspresif yang tinggi?',
            options: [
              { key: 'A', text: 'Karena pemahaman makna kosakata adalah fondasi sebelum anak mampu memproduksi kata secara lisan.' },
              { key: 'B', text: 'Karena anak tidak perlu diajari berbicara sama sekali.' },
              { key: 'C', text: 'Karena bahasa ekspresif hanya penting saat anak masuk sekolah dasar.' },
              { key: 'D', text: 'Karena tes masuk SD hanya menguji bahasa reseptif.' }
            ],
            correctAnswer: 'A',
            explanation: 'Anak perlu memahami dan menginternalisasi konsep kata (reseptif) terlebih dahulu sebelum dapat menggunakannya secara mandiri dalam berkomunikasi (ekspresif).',
            montessoriPrinciple: 'Natural Order of Language Acquisition',
            paudContext: 'Menguatkan pondasi literasi awal dan pemahaman konsep secara bermakna.'
          }
        ]
      },
      {
        id: 'les-2-2',
        moduleId: 'modul-2',
        title: 'Kesadaran Fonologis: Mendengar Bunyi Sebelum Mengenal Huruf',
        slug: 'kesadaran-fonologis-bunyi-awal',
        durationMinutes: 10,
        difficulty: 'Menengah',
        order: 2,
        learningObjectives: [
          'Memahami konsep kesadaran fonologis (*phonological awareness*) dan bunyi fonemik.',
          'Mengenali perbedaan antara bunyi huruf (/b/, /m/, /s/) dengan nama huruf (be, em, es).',
          'Mempraktikkan permainan "I Spy Sound Game" di kelas.'
        ],
        contentMarkdown: `### Bunyi Fonem vs Nama Huruf
Salah satu ciri khas pendekatan Montessori Bahasa adalah **memperkenalkan bunyi huruf terlebih dahulu daripada nama huruf**.

- Mengapa? Ketika anak melihat huruf "b-a-t-u", membaca bunyi **/b/ - /a/ - /t/ - /u/** jauh lebih mudah dirangkai menjadi "batu", daripada membaca nama abjad **"be - a - te - u"** yang membingungkan anak.

### Tingkatan Kesadaran Fonologis:
1. **Mendengar rima & irama:** Lagu anak, puisi berima pendek.
2. **Membedakan suku kata:** Tepuk tangan sesuai ketukan kata (*ku-da*, *ke-la-pa*).
3. **Mengenali bunyi awal (*Initial Sound*):** *"Saya melihat sesuatu yang berbunyi /b/... batu!"*
4. **Mengenali bunyi akhir & tengah:** *"Apa bunyi terakhir dari kata 'ayam'? /m/!"*`,
        practicalExample: 'Guru memegang miniatur apel dan bertanya: "Aku melihat benda lezat yang bunyi awalnya /a/... apa ya?". Anak-anak mendengarkan dengan seksama dan menjawab: "Apel!".',
        tryInClassroom: 'Lakukan permainan tebak bunyi awal selama 3 menit sebelum makan siang bersama anak-anak menggunakan benda yang ada di meja.',
        reflectionPrompt: 'Apakah saya masih terbiasa mengajarkan abjad dengan nama huruf (A, B, C) atau sudah mulai melatih kepekaan telinga anak terhadap bunyi fonik?',
        quiz: [
          {
            id: 'q-2-2',
            question: 'Mengapa dalam Montessori Bahasa pengenalan bunyi huruf (/m/, /s/, /a/) didahulukan daripada nama huruf (em, es, a)?',
            options: [
              { key: 'A', text: 'Karena nama huruf tidak boleh dipelajari selamanya.' },
              { key: 'B', text: 'Karena merangkai bunyi fonik mempermudah proses sintesis membaca alami pada anak.' },
              { key: 'C', text: 'Karena bunyi huruf lebih pendek dari nama huruf.' },
              { key: 'D', text: 'Hanya agar terlihat berbeda dari metode konvensional.' }
            ],
            correctAnswer: 'B',
            explanation: 'Membaca adalah merangkai bunyi bahasa. Mengetahui bunyi fonem membuat anak langsung dapat membunyikan rangkaian simbol menjadi kata utuh.',
            montessoriPrinciple: 'Phonetic Foundation & Acoustic Isolation',
            paudContext: 'Mendukung penguatan literasi awal tanpa membebani daya ingat anak.'
          }
        ]
      }
    ]
  },
  {
    id: 'modul-3',
    number: 3,
    title: 'Prepared Environment untuk Bahasa',
    slug: 'prepared-environment-bahasa',
    subtitle: 'Menata Area Bahasa, Rak Material, Sudut Membaca & Storytelling',
    description: 'Ketahui cara merancang area bahasa di ruang kelas PAUD agar rapi, mudah diakses anak, mengundang eksplorasi, serta membandingkan penataan yang kurang efektif dengan yang terstruktur.',
    iconName: 'LayoutGrid',
    category: 'Lingkungan',
    competencyOutcome: 'Guru mampu menata rak material bahasa dengan prinsip urutan dari konkrit ke abstrak serta mudah dijangkau anak.',
    level: 'Menengah',
    totalDurationMinutes: 40,
    lessons: [
      {
        id: 'les-3-1',
        moduleId: 'modul-3',
        title: 'Penataan Rak Area Bahasa: Dari Kiri ke Kanan, Konkrit ke Abstrak',
        slug: 'penataan-rak-area-bahasa',
        durationMinutes: 8,
        difficulty: 'Menengah',
        order: 1,
        learningObjectives: [
          'Memahami filosofi peletakan material dari kiri ke kanan (arah membaca & menulis).',
          'Menata urutan material dari benda 3 dimensi (konkrit), gambar 2 dimensi, hingga simbol huruf (abstrak).',
          'Menerapkan prinsip estetika, kebersihan, dan rotasi material berkala.'
        ],
        contentMarkdown: `### Prinsip Penataan Rak Bahasa Montessori
1. **Urutan Kiri ke Kanan:** Di negara dengan sistem tulisan Latin (seperti Indonesia), membaca dan menulis dilakukan dari kiri ke kanan. Penataan material di rak dari yang paling mudah (kiri) ke yang lebih menantang (kanan) secara tidak langsung melatih orientasi mata anak.
2. **Dari Atas ke Bawah:** Rak atas biasanya memuat material pengayaan kosakata lisan (benda & kartu), rak bawah memuat material fonik, Sandpaper Letters, dan Movable Alphabet.
3. **Keteraturan & Satu Set Lengkap:** Setiap wadah (baki/nampan) hanya memuat satu set aktivitas lengkap agar anak tidak perlu mencari alat di tempat lain.

### Perbandingan Kelas:
- **Kurang Terstruktur:** Benda bertumpuk dalam satu kotak besar, buku berantakan, anak bingung mencari pasangan kartu.
- **Terstruktur & Mengundang:** Kartu diletakkan di wadah kartu kecil bertingkat, miniatur bersih di keranjang anyaman, jumlah material dibatasi agar anak tidak *overstimulated*.`,
        practicalExample: 'Guru menempatkan 1 baki berisi 4 miniatur hewan dan 4 kartu gambar hewan di rak kiri atas. Anak dapat membawa 1 baki tersebut ke atas alas kerja (*work mat*) dan mengembalikannya ke tempat semula.',
        tryInClassroom: 'Evaluasi rak bahasa Anda besok. Apakah tingginya sudah sejajar dengan dada anak? Apakah anak bisa mengambil baki tanpa bantuan orang dewasa?',
        reflectionPrompt: 'Apakah ruang kelas saya terlalu ramai dengan dekorasi visual yang mengalihkan fokus anak dari material belajar?',
        quiz: [
          {
            id: 'q-3-1',
            question: 'Apa alasan utama material di rak Montessori ditata dengan urutan dari kiri ke kanan?',
            options: [
              { key: 'A', text: 'Hanya agar terlihat rapi saat difoto.' },
              { key: 'B', text: 'Melatih orientasi visual mata anak secara tidak langsung untuk persiapan membaca dan menulis.' },
              { key: 'C', text: 'Karena aturan baku yang tidak boleh diubah.' },
              { key: 'D', text: 'Agar guru mudah menghitung jumlah barang.' }
            ],
            correctAnswer: 'B',
            explanation: 'Orientasi kiri ke kanan dan atas ke bawah di rak secara tidak langsung membentuk kebiasaan pemindaian visual (*visual tracking*) untuk literasi.',
            montessoriPrinciple: 'Indirect Preparation for Reading and Writing',
            paudContext: 'Mengembangkan koordinasi mata dan keteraturan spasial anak.'
          }
        ]
      }
    ]
  },
  {
    id: 'modul-4',
    number: 4,
    title: 'Material Montessori Bahasa',
    slug: 'material-montessori-bahasa',
    subtitle: 'Eksplorasi Sandpaper Letters, Movable Alphabet, Kartu Klasifikasi & Alternatif DIY',
    description: 'Pelajari secara mendalam fungsi, tujuan langsung, tujuan tidak langsung, cara pembuatan alternatif sederhana dengan bahan ramah lingkungan di sekolah, serta kontrol kesalahan masing-masing material.',
    iconName: 'PackageCheck',
    category: 'Material',
    competencyOutcome: 'Guru mampu menjelaskan fungsi 10 material utama Montessori Bahasa dan membuat alternatif material sederhana di kelas PAUD.',
    level: 'Menengah',
    totalDurationMinutes: 60,
    lessons: [
      {
        id: 'les-4-1',
        moduleId: 'modul-4',
        title: 'Huruf Raba (Sandpaper Letters): Jembatan Sensori Menuju Huruf',
        slug: 'huruf-raba-sandpaper-letters',
        durationMinutes: 12,
        difficulty: 'Menengah',
        order: 1,
        learningObjectives: [
          'Memahami fungsi multisensori (visual, taktil, auditori, kinestetik) pada Sandpaper Letters.',
          'Mempraktikkan cara menelusuri huruf raba menggunakan dua jari (telunjuk dan jari tengah).',
          'Membuat versi DIY Sandpaper Letters dari kardus dan pasir/glitter ramah anak.'
        ],
        contentMarkdown: `### Kekuatan Multisensori Sandpaper Letters
Sandpaper Letters (Huruf Raba) adalah papan kayu tipis di mana simbol huruf dilapisi kertas amplas bertekstur kasar. Huruf vokal biasanya berlatar biru, dan huruf konsonan berlatar merah jambu/merah (atau sebaliknya, yang terpenting konsisten).

Ketika anak menggunakan material ini, 4 sensori aktif bersamaan:
1. **Taktil (Rabaan):** Jari telunjuk & tengah merasakan bentuk kasar huruf.
2. **Visual (Penglihatan):** Mata melihat bentuk kontras huruf pada papan.
3. **Auditori (Pendengaran):** Telinga mendengar bunyi huruf yang dilafalkan guru: *"Ini /m/"*.
4. **Kinestetik (Gerakan Otot):** Tangan merekam jejak motorik halus untuk persiapan menulis di kertas nantinya.

### Alternatif Sederhana (DIY untuk PAUD Indonesia):
Jika sekolah belum memiliki papan kayu resmi, guru dapat membuat dari:
- Kardus bekas tebal dipotong 12x15 cm.
- Guntingan huruf dari kertas amplas halus (nomor grit 120-180) atau kain flanel/kain goni bertekstur.
- Lem kayu kuat.`,
        practicalExample: 'Guru membersihkan jari anak dengan tisu basah/kering lembut agar ujung jari sensitif, lalu mendampingi anak menelusuri huruf /s/ melengkung sambil membunyikan "/s/... ular /s/...".',
        tryInClassroom: 'Buatlah 3 huruf raba sederhana (misal huruf vokal a, i, u) bersama rekan guru dan ujicobakan respon rabaan anak di kelas.',
        reflectionPrompt: 'Mengapa membiarkan anak meraba huruf jauh lebih membekas dibanding hanya melihat huruf di layar ponsel atau kartu licin?',
        quiz: [
          {
            id: 'q-4-1',
            question: 'Mengapa Sandpaper Letters menggunakan dua jari (jari telunjuk dan jari tengah) saat menelusuri huruf?',
            options: [
              { key: 'A', text: 'Karena satu jari dilarang oleh kurikulum.' },
              { key: 'B', text: 'Kedua jari tersebut merupakan tumpuan utama memegang alat tulis (*pincer grip*) di kemudian hari.' },
              { key: 'C', text: 'Agar papan tidak cepat rusak.' },
              { key: 'D', text: 'Hanya kebiasaan tanpa alasan khusus.' }
            ],
            correctAnswer: 'B',
            explanation: 'Dua jari pertama tangan dominan anak menghubungkan stimulasi taktil langsung dengan memori otot untuk memegang pensil (*pincer grip*).',
            montessoriPrinciple: 'Muscular Memory & Isolation of Sensory Quality',
            paudContext: 'Mempersiapkan motorik halus anak pra-menulis tanpa paksaan pensil dini.'
          }
        ]
      }
    ]
  },
  {
    id: 'modul-5',
    number: 5,
    title: 'Teknik Presentasi Montessori',
    slug: 'teknik-presentasi-montessori',
    subtitle: 'Three-Period Lesson, Isolasi Kesulitan, Gerakan Tenang & Evaluasi Video Guru',
    description: 'Kuasai teknik presentasi standar Montessori, terutama Three-Period Lesson (Pelajaran Tiga Babak), kontrol kesalahan, cara berbicara hemat kata, serta kapan guru harus membantu dan kapan harus mundur.',
    iconName: 'Presentation',
    category: 'Presentasi',
    competencyOutcome: 'Guru mampu mempraktikkan Three-Period Lesson dengan bahasa yang jernih, tenang, dan tidak menghakimi kesalahan anak.',
    level: 'Menengah',
    totalDurationMinutes: 45,
    lessons: [
      {
        id: 'les-5-1',
        moduleId: 'modul-5',
        title: 'Three-Period Lesson (Pelajaran Tiga Babak) untuk Pengenalan Kosakata & Huruf',
        slug: 'three-period-lesson-montessori',
        durationMinutes: 10,
        difficulty: 'Menengah',
        order: 1,
        learningObjectives: [
          'Memahami langkah Babak 1 (Penamaan / Naming: "Ini...").',
          'Memahami langkah Babak 2 (Pengenalan / Recognition: "Tunjukkan pada Ibu/Bapak...").',
          'Memahami langkah Babak 3 (Pemberian Nama Kembali / Recall: "Apa ini?").',
          'Menghindari rasa frustrasi pada anak ketika anak belum siap di Babak 3.'
        ],
        contentMarkdown: `### Struktur Three-Period Lesson (Édouard Séguin / Montessori)

Pelajaran Tiga Babak adalah teknik terstruktur paling ampuh untuk memperkenalkan nama benda, konsep sifat (besar-kecil, kasar-halus), ataupun bunyi huruf.

#### Babak 1: Pengenalan / Penamaan (This is...)
- Hubungkan objek dengan namanya secara jelas.
- *"Ini /m/."* (Sambil meraba huruf).
- *"Ini cangkir."* (Sambil memegang benda).

#### Babak 2: Pengenalan & Asosiasi (Show me...)
- **Babak ini harus paling lama dan paling menyenangkan.** Berikan banyak variasi permainan gerak:
- *"Tolong berikan /m/ ke pangkuanmu."*
- *"Dapatkah kamu meletakkan cangkir di samping mangkuk?"*
- *"Tutup matamu... pegang benda yang berbunyi /b/!"*

#### Babak 3: Penyebutan Mandiri (What is this?)
- Hanya dilakukan jika anak sudah sangat percaya diri di Babak 2.
- Guru menunjuk material dan bertanya ramah: *"Apa ini?"* atau *"Bagaimana bunyinya?"*.

> **Kiat Emas Guru:** Jika di Babak 3 anak keliru menyebutkan, **jangan katakan "Salah!"**. Cukup tersenyum, simpan material dengan tenang, dan ulangi Babak 1 & 2 di hari berikutnya.`,
        practicalExample: 'Guru memperkenalkan 2 bunyi konsonan /b/ dan /t/. Di babak kedua, guru mengajak anak: "Bisakah kamu menaruh /b/ di atas kepalamu dengan hati-hati?". Anak tertawa gembira sambil mengingat bunyi /b/.',
        tryInClassroom: 'Praktikkan Three-Period Lesson dengan 2 benda buah nyata (misal: pisang dan apel) pada anak usia 3 tahun. Amati seberapa antusias anak pada Babak 2.',
        reflectionPrompt: 'Apakah saya sering terburu-buru meloncat ke Babak 3 ("Apa ini?") sebelum anak benar-benar akrab dengan konsep di Babak 2?',
        quiz: [
          {
            id: 'q-5-1',
            question: 'Apa yang sebaiknya dilakukan guru jika anak ragu-ragu atau salah menjawab saat berada di Babak 3 (Pertanyaan: "Apa ini?")?',
            options: [
              { key: 'A', text: 'Menegur anak dan menyuruhnya belajar lagi di rumah.' },
              { key: 'B', text: 'Tetap tenang, tidak menyalahkan, simpan material dan kembali perkuat Babak 1 dan Babak 2 di kesempatan lain.' },
              { key: 'C', text: 'Memberikan nilai merah pada buku laporan.' },
              { key: 'D', text: 'Meminta anak lain untuk menertawakannya.' }
            ],
            correctAnswer: 'B',
            explanation: 'Dalam Montessori, kesalahan adalah indikator bahwa anak masih membutuhkan waktu di tahap asosiasi (Babak 2). Guru tidak menghakimi agar rasa percaya diri anak tetap terjaga.',
            montessoriPrinciple: 'No Criticism, Error as Learning Indicator',
            paudContext: 'Menjaga kesehatan mental dan *growth mindset* anak usia dini.'
          }
        ]
      }
    ]
  },
  {
    id: 'modul-6',
    number: 6,
    title: 'Aktivitas Montessori Bahasa di Kelas',
    slug: 'aktivitas-montessori-bahasa-di-kelas',
    subtitle: '20+ Aktivitas Nyata, Runtutan Pembelajaran, Contoh Kalimat Guru & Variasi',
    description: 'Panduan lengkap merancang dan memfasilitasi 20+ aktivitas bahasa mulai dari Vocabulary Basket, I-Spy Sound, Movable Alphabet word building, hingga Silent Reading Actions yang kontekstual.',
    iconName: 'Sparkles',
    category: 'Aktivitas',
    competencyOutcome: 'Guru mampu memfasilitasi minimal 5 variasi aktivitas bahasa terstruktur di kelas PAUD sesuai tingkat kesiapan anak.',
    level: 'Lanjutan',
    totalDurationMinutes: 55,
    lessons: [
      {
        id: 'les-6-1',
        moduleId: 'modul-6',
        title: 'Menulis Sebelum Membaca: Logika Sintesis Kata dengan Movable Alphabet',
        slug: 'menulis-sebelum-membaca-movable-alphabet',
        durationMinutes: 11,
        difficulty: 'Lanjutan',
        order: 1,
        learningObjectives: [
          'Memahami mengapa dalam Montessori anak "menulis" (menyusun simbol bunyi) sebelum membaca teks orang lain.',
          'Mempraktikkan cara mengajak anak menyusun kata 3 huruf fonik (CVC: Konsonan-Vokal-Konsonan).',
          'Mengintegrasikan kartu gambar kontekstual Indonesia (ikan, sapu, bola, roti).'
        ],
        contentMarkdown: `### Paradoks Montessori: "Writing Precedes Reading"
Banyak orang dewasa mengira membaca datang sebelum menulis. Namun Maria Montessori menemukan bahwa:
- **Menulis (Mengekspresikan pikiran sendiri):** Anak menganalisis bunyi dari kata yang sudah ada di kepalanya (/b/ - /u/ - /k/ - /u/), lalu mengambil simbol huruf yang sesuai. Ini adalah proses penciptaan.
- **Membaca (Menguraikan pikiran orang lain):** Anak melihat simbol asing di kertas, membunyikannya, lalu menyatukan maknanya. Ini membutuhkan proses kognitif yang lebih abstrak.

Dengan **Large Movable Alphabet (LMA)**, anak yang belum kuat memegang pensil sekalipun sudah bisa "menulis" kata dan kalimat dengan menyusun huruf kayu di atas karpet kerja!

### Alur Aktivitas LMA:
1. Sediakan miniatur benda fonik 3–4 huruf (misal: *b-u-k-u*, *k-u-d-a*, *b-o-l-a*).
2. Ajak anak menyebutkan nama benda: *"Ini bola. Bunyi pertamanya apa ya? /b/."*
3. Anak mencari huruf /b/ di kotak alfabet dan meletakkannya di samping miniatur.
4. Lanjutkan bunyi berikutnya: */o/*... */l/*... */a/*.`,
        practicalExample: 'Seorang anak berusia 4,5 tahun meletakkan miniatur sapi di alas kerja, lalu dengan bangga menyusun huruf s - a - p - i dari kotak LMA kayu.',
        tryInClassroom: 'Gunakan tutup botol yang ditulisi huruf konsonan dan vokal sebagai alternatif Movable Alphabet ramah lingkungan.',
        reflectionPrompt: 'Apakah saya sering membatasi kreativitas bahasa anak hanya karena otot jari mereka belum sempurna memegang pensil?',
        quiz: [
          {
            id: 'q-6-1',
            question: 'Mengapa Large Movable Alphabet (LMA) sangat memerdekakan anak dalam berekspresi bahasa?',
            options: [
              { key: 'A', text: 'Karena anak dapat menyusun kata dan pikiran tanpa terhambat oleh keterbatasan kekuatan motorik halus memegang pensil.' },
              { key: 'B', text: 'Karena huruf kayu tidak bisa hilang.' },
              { key: 'C', text: 'Karena harganya mahal.' },
              { key: 'D', text: 'Karena menggantikan peran guru sepenuhnya.' }
            ],
            correctAnswer: 'A',
            explanation: 'LMA memisahkan hambatan fisik motorik menulis dari proses intelektual penyusunan kata, sehingga anak dapat mengekspresikan bahasanya secara bebas.',
            montessoriPrinciple: 'Separation of Physical and Intellectual Obstacles',
            paudContext: 'Sesuai prinsip diferensiasi pembelajaran anak usia dini.'
          }
        ]
      }
    ]
  },
  {
    id: 'modul-7',
    number: 7,
    title: 'Observasi dan Asesmen Perkembangan Bahasa',
    slug: 'observasi-dan-asesmen-perkembangan',
    subtitle: 'Catatan Anekdot, Lembar Observasi Autentik & Menghindari Pelabelan',
    description: 'Pelajari cara mendokumentasikan proses belajar bahasa anak melalui teknik observasi ilmiah, pencatatan anekdot yang objektif, serta asesmen formatif yang mendukung perkembangan.',
    iconName: 'ClipboardList',
    category: 'Observasi',
    competencyOutcome: 'Guru mampu membuat catatan anekdot objektif tanpa interpretasi subjektif yang menghakimi perkembangan bahasa anak.',
    level: 'Lanjutan',
    totalDurationMinutes: 40,
    lessons: [
      {
        id: 'les-7-1',
        moduleId: 'modul-7',
        title: 'Teknik Catatan Anekdot Objektif: Memisahkan Fakta dari Asumsi',
        slug: 'catatan-anekdot-objektif',
        durationMinutes: 9,
        difficulty: 'Lanjutan',
        order: 1,
        learningObjectives: [
          'Membedakan kalimat observasi fakta murni dengan kalimat asumsi/interpretasi.',
          'Menggunakan format observasi Montessori yang terhubung dengan asesmen autentik PAUD.',
          'Merumuskan tindak lanjut pembelajaran (*follow-up*) berdasarkan data observasi.'
        ],
        contentMarkdown: `### Seni Mengamati Tanpa Menghakimi
Dalam Montessori dan Kurikulum PAUD Indonesia, asesmen dilakukan secara **autentik melalui observasi harian saat anak beraktivitas**, bukan melalui ujian kertas/pensil.

### Contoh Perbedaan Kalimat Observasi:
- **Kalimat Asumsi (Hindari):** *"Rian malas dan tidak mau belajar Sandpaper Letters hari ini, dia sengaja melempar kartu."*
- **Kalimat Fakta Objektif (Gunakan):** *"Rian menelusuri huruf /s/ sebanyak 1 kali, lalu meletakkan kartu di lantai dan beralih ke area balok. Belum menirukan bunyi /s/ ketika diundang guru."*

### Format Sederhana Catatan Observasi Guru:
1. **Nama/Inisial Anak & Tanggal:**
2. **Aktivitas & Material yang Digunakan:**
3. **Fakta Apa yang Dilakukan & Dikatakan Anak:**
4. **Respon & Daya Tarik Anak:**
5. **Rencana Tindak Lanjut Guru:** (Misal: perkenalkan benda konkrit yang lebih menarik bagi minat Rian).`,
        practicalExample: 'Guru duduk di kursi kecil dengan buku catatan saku, mencatat 2 menit interaksi anak dengan kartu klasifikasi tanpa mengganggu konsentrasi anak.',
        tryInClassroom: 'Pilihlah 1 anak besok. Tulis 3 kalimat fakta observasi murni saat anak bermain di area bahasa tanpa menggunakan kata sifat subjektif (seperti pintar, malas, nakal, lambat).',
        reflectionPrompt: 'Seberapa sering catatan observasi saya dipengaruhi oleh suasana hati atau ekspektasi pribadi saya terhadap anak?',
        quiz: [
          {
            id: 'q-7-1',
            question: 'Manakah di antara pernyataan berikut yang merupakan contoh catatan observasi objektif yang tepat?',
            options: [
              { key: 'A', text: 'Anak sangat cerdas dan jauh lebih unggul dari teman-temannya.' },
              { key: 'B', text: 'Anak menyusun 4 kartu gambar secara berurutan dari kiri ke kanan dan menyebutkan nama tiap benda dengan artikulasi vokal jelas.' },
              { key: 'C', text: 'Anak tampak bosan dan tidak menyukai pelajaran bahasa guru.' },
              { key: 'D', text: 'Anak tidak ada bakat membaca.' }
            ],
            correctAnswer: 'B',
            explanation: 'Pernyataan B mendeskripsikan fakta terukur dan tindakan spesifik anak tanpa bumbu asumsi atau pelabelan subjektif.',
            montessoriPrinciple: 'Scientific & Objective Observation',
            paudContext: 'Prinsip asesmen autentik dalam Kurikulum PAUD Indonesia.'
          }
        ]
      }
    ]
  },
  {
    id: 'modul-8',
    number: 8,
    title: 'Refleksi & Pengembangan Profesional Guru',
    slug: 'refleksi-dan-pengembangan-profesional',
    subtitle: 'Siklus Refleksi Praktik, Evaluasi Diri & Komunitas Belajar Pendidik PAUD',
    description: 'Kembangkan kompetensi diri secara berkelanjutan melalui siklus 5 pertanyaan refleksi harian, evaluasi lingkungan belajar, dan kolaborasi dalam komunitas pendidik PAUD.',
    iconName: 'Award',
    category: 'Refleksi',
    competencyOutcome: 'Guru terbiasa melakukan refleksi kritis terhadap praktik mengajarnya dan merancang perbaikan berkesinambungan.',
    level: 'Lanjutan',
    totalDurationMinutes: 35,
    lessons: [
      {
        id: 'les-8-1',
        moduleId: 'modul-8',
        title: 'Siklus 5 Pertanyaan Refleksi Guru Pascakegiatan',
        slug: 'siklus-5-pertanyaan-refleksi-guru',
        durationMinutes: 8,
        difficulty: 'Lanjutan',
        order: 1,
        learningObjectives: [
          'Memahami 5 siklus pertanyaan refleksi guru PAUD.',
          'Mengevaluasi apakah nada bicara, kecepatan gerakan, dan penataan lingkungan sudah mendukung kemandirian anak.',
          'Membangun kebiasaan mencatat refleksi harian.'
        ],
        contentMarkdown: `### Mengapa Refleksi Guru Sangat Krusial?
Maria Montessori berkata: *"Guru harus mempersiapkan dirinya secara batiniah, membersihkan prasangka, dan terus belajar dari anak."*

### 5 Pertanyaan Refleksi Harian Guru:
1. **Apa yang berjalan baik hari ini?** (Momen anak fokus, keberhasilan presentasi).
2. **Apa yang menjadi tantangan atau kendala?** (Apakah material terlalu sulit? Apakah instruksi saya terlalu berbelit?).
3. **Bagaimana respons emosional dan keterlibatan anak?** (Apakah anak gembira atau merasa tertekan?).
4. **Apa yang perlu saya ubah dari cara saya memfasilitasi?** (Kecepatan bicara, penataan rak, atau pilihan kata).
5. **Apa eksperimen kecil yang akan saya coba besok?** (Membawa benda konkrit baru, mengubah posisi karpet kerja).`,
        practicalExample: 'Setiap selesai jam sekolah, guru meluangkan waktu 5 menit untuk mengisi jurnal refleksi singkat di aplikasi sebelum pulang.',
        tryInClassroom: 'Gunakan fitur Jurnal Refleksi di platform ini untuk mencatat pengalaman mengajar Anda hari ini.',
        reflectionPrompt: 'Apakah saya memandang kesalahan dalam mengajar sebagai kegagalan atau sebagai data berharga untuk berkembang?',
        quiz: [
          {
            id: 'q-8-1',
            question: 'Apa tujuan utama dari melakukan refleksi berkala bagi guru PAUD yang menerapkan Montessori Bahasa?',
            options: [
              { key: 'A', text: 'Untuk mencari-cari kesalahan diri sendiri dan merasa bersalah.' },
              { key: 'B', text: 'Meninjau secara sadar efektivitas lingkungan dan komunikasi guru agar terus berpihak pada kebutuhan anak.' },
              { key: 'C', text: 'Hanya sebagai formalitas administratif kepala sekolah.' },
              { key: 'D', text: 'Untuk membandingkan siapa guru terbaik di sekolah.' }
            ],
            correctAnswer: 'B',
            explanation: 'Refleksi mendalam membantu guru memahami interaksi dirinya dengan anak dan lingkungan, membuka ruang perbaikan berkelanjutan yang berpusat pada anak.',
            montessoriPrinciple: 'Spiritual and Pedagogical Preparation of the Teacher',
            paudContext: 'Pengembangan keprofesian berkelanjutan (PKB) guru PAUD.'
          }
        ]
      }
    ]
  }
];
