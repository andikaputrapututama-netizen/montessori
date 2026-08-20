import { VideoItem } from '../types';

export const videosData: VideoItem[] = [
  {
    id: 'vid-modul-1',
    title: 'Video Panduan Modul 1: Filosofi Bahasa Alami & Sikap Pendidik yang Menghargai Anak',
    category: 'Fondasi & Filosofi',
    duration: '6:30',
    thumbnailUrl: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=80',
    youtubeId: 'bA45NqX9o50',
    description: 'Amati bagaimana guru Montessori membangun komunikasi bermartabat dengan anak usia dini. Saksikan bagaimana bahasa dihadirkan bukan melalui ceramah atau hafalan mekanis, melainkan melalui percakapan tenang yang mengundang rasa ingin tahu alami anak.',
    relatedModuleId: 'modul-1',
    moduleNumber: 1,
    trainerName: 'Dra. Ratna Wulandari, M.Pd (Fasilitator Montessori PAUD)',
    focusPoints: [
      'Sikap tubuh guru setara dengan pandangan mata anak (*eye level contact*)',
      'Penggunaan nada bicara lembut dan artikulatif tanpa berteriak (*gentle whisper tone*)',
      'Prinsip "Economy of Language": memberikan jeda hening agar anak mencerna informasi',
      'Menghindari interupsi saat anak sedang fokus mengeksplorasi buku atau kartu gambar'
    ],
    keyObservationMoments: [
      { 
        time: '00:45', 
        title: 'Kontak Mata & Sapaan Hangat',
        description: 'Guru berlutut untuk menyamakan tinggi pandangan dan menyapa anak dengan nama lengkapnya secara ramah.' 
      },
      { 
        time: '02:15', 
        title: 'Mendengarkan Aktif Tanpa Memotong',
        description: 'Anak menceritakan pengalaman paginya; guru mendengarkan penuh perhatian dengan anggukan dan senyuman tulus.' 
      },
      { 
        time: '04:10', 
        title: 'Memperkenalkan Kosakata Baru Secara Alami',
        description: 'Guru memperkenalkan kata "mengamati" dan "mengepakkan" saat melihat burung di halaman tanpa menguji anak secara kaku.' 
      },
      { 
        time: '05:30', 
        title: 'Mempersilakan Anak Memilih Aktivitas',
        description: 'Guru mengajak anak melihat rak area bahasa dan memberi kebebasan memilih baki kerja yang diminati.' 
      }
    ],
    transcriptSummary: [
      { time: '00:50', speaker: 'Guru', text: '"Selamat pagi, Sarah. Ibu melihat matamu berbinar hari ini. Ada cerita apa yang ingin Sarah bagikan?"' },
      { time: '02:20', speaker: 'Anak', text: '"Tadi di jalan aku lihat ada burung warnanya biru terbang tinggi sekali!"' },
      { time: '02:35', speaker: 'Guru', text: '"Oh, burung biru yang sedang mengepakkan sayapnya ke angkasa ya? Indah sekali."' }
    ],
    analysisQuestions: [
      {
        id: 'vq-1-1',
        question: 'Mengapa guru dalam video berlutut hingga sejajar dengan mata anak saat berbicara?',
        options: [
          'Agar guru tidak merasa lelah berdiri di dalam kelas.',
          'Menciptakan kesetaraan posisi (*eye-level*), rasa aman emosional, dan fokus komunikasi yang intim.',
          'Sebagai syarat mutlak akreditasi sekolah.',
          'Agar anak tidak bisa bergerak ke mana-mana.'
        ],
        correctIndex: 1,
        pedagogicalFeedback: 'Kontak mata setara (*eye level*) mereduksi intimidasi otoritas guru dan memperkuat rasa dihargai pada diri anak.'
      },
      {
        id: 'vq-1-2',
        question: 'Bagaimana pendekatan guru saat memperkenalkan kata baru "mengepakkan"?',
        options: [
          'Menyuruh anak mengeja huruf M-E-N-G-E-P-A-K-K-A-N di buku tulis.',
          'Mengulang kata tersebut secara teriak berkali-kali.',
          'Menyelipkan kata tersebut secara kaya dan bermakna dalam konteks cerita yang sedang dibicarakan anak.',
          'Memberi nilai angka pada pelafalan anak.'
        ],
        correctIndex: 2,
        pedagogicalFeedback: 'Kosakata diserap paling efektif (*The Absorbent Mind*) ketika terikat dengan pengalaman emosional dan konteks visual yang nyata.'
      }
    ]
  },
  {
    id: 'vid-modul-2',
    title: 'Video Panduan Modul 2: Eksplorasi Kesadaran Fonologis & Detektif Bunyi (I-Spy Sound Game)',
    category: 'Kesadaran Fonologis',
    duration: '5:45',
    thumbnailUrl: 'https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&w=1200&q=80',
    youtubeId: 'pUqD_63cR0A',
    description: 'Saksikan interaksi interaktif guru bersama 3 anak usia 4 tahun saat bermain tebak bunyi awal benda konkrit. Perhatikan bagaimana guru mengisolasi letupan bunyi konsonan murni tanpa vokal tambahan.',
    relatedModuleId: 'modul-2',
    moduleNumber: 2,
    trainerName: 'Nurul Hidayati, S.Pd (Praktisi Fonik Montessori)',
    focusPoints: [
      'Pelafalan bunyi konsonan murni (/b/, /s/, /m/, bukan "be", "es", "em")',
      'Penggunaan benda 3D nyata atau miniatur dengan bentuk dan warna kontras',
      'Pengelolaan giliran anak secara suportif tanpa menciptakan suasana kompetisi yang tegang',
      'Teknik memberikan petunjuk tambahan (*scaffolding*) saat anak bingung'
    ],
    keyObservationMoments: [
      { 
        time: '00:50', 
        title: 'Penataan Objek di Atas Alas Polos',
        description: 'Guru mengeluarkan 3 benda nyata (batu, sisir, cangkir) dan meletakkannya di atas kain alas polos agar visual tidak terdistraksi.' 
      },
      { 
        time: '02:15', 
        title: 'Petunjuk Detektif Bunyi Awal',
        description: 'Guru memancing kepekaan auditori: "Detektif melihat benda yang diawali bunyi /b/... /b/...".' 
      },
      { 
        time: '03:45', 
        title: 'Eksplorasi Artikulasi Bibir',
        description: 'Anak menyentuh bibirnya sendiri untuk merasakan letupan udara saat membunyikan /b/.' 
      },
      { 
        time: '04:50', 
        title: 'Transisi ke Bunyi Akhir Kata',
        description: 'Guru memperkenalkan variasi lanjutan: mencari benda yang berakhiran bunyi /r/ (sisir).' 
      }
    ],
    transcriptSummary: [
      { time: '01:05', speaker: 'Guru', text: '"Mari kita sebutkan benda kita hari ini: batu... sisir... cangkir."' },
      { time: '02:20', speaker: 'Guru', text: '"Aku mata-mata melihat benda yang berbunyi /s/... /s/..."' },
      { time: '02:40', speaker: 'Anak', text: '"Sisir! /s/... sisir!"' },
      { time: '02:45', speaker: 'Guru', text: '"Tepat sekali, Sarah mendengar bunyi /s/ pada sisir."' }
    ],
    analysisQuestions: [
      {
        id: 'vq-2-1',
        question: 'Mengapa guru melafalkan bunyi konsonan sebagai /b/ (letupan bibir) dan bukan nama huruf "Be"?',
        options: [
          'Agar anak tidak cepat lelah berbicara.',
          'Karena membaca adalah proses merangkai bunyi fonem (*phonemes*), bukan mengeja nama huruf alfabet.',
          'Hanya kebiasaan di sekolah Montessori luar negeri.',
          'Agar anak belajar bahasa asing lebih cepat.'
        ],
        correctIndex: 1,
        pedagogicalFeedback: 'Kesadaran fonemik berfokus pada bunyi auditori yang sesungguhnya diucapkan dalam kata, mempermudah sintesis membaca nantinya.'
      },
      {
        id: 'vq-2-2',
        question: 'Apa respon guru saat anak kedua keliru menunjuk "cangkir" untuk bunyi /b/?',
        options: [
          'Guru langsung memarahi anak di depan teman-temannya.',
          'Guru mengulang nama benda secara lembut: "Cangkir... diawali /c/. Ayo kita dengarkan: /b/... batu atau /b/... cangkir?".',
          'Guru mengambil cangkir dan menyuruh anak berdiri di pojok.',
          'Guru mengabaikan anak dan beralih ke anak lain.'
        ],
        correctIndex: 1,
        pedagogicalFeedback: 'Koreksi yang ramah dan berbasis isolasi bunyi membantu telinga anak membedakan frekuensi auditori tanpa rasa malu.'
      }
    ]
  },
  {
    id: 'vid-modul-3',
    title: 'Video Panduan Modul 3: Penataan Rak Area Bahasa & Lingkungan yang Dipersiapkan (Prepared Environment)',
    category: 'Lingkungan Belajar',
    duration: '7:15',
    thumbnailUrl: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=1200&q=80',
    youtubeId: 'kP8k7fW1wXE',
    description: 'Tur visual penataan rak area bahasa di ruang kelas PAUD: melihat ketinggian rak setinggi dada anak, urutan baki material dari kiri ke kanan (arah membaca & menulis), sudut bercerita yang hangat, dan tempat penyimpanan karya anak.',
    relatedModuleId: 'modul-3',
    moduleNumber: 3,
    trainerName: 'Budi Santoso, M.Pd (Konsultan Tata Ruang PAUD Ramah Anak)',
    focusPoints: [
      'Ketinggian rak 50–70 cm agar semua material terjangkau mandiri oleh anak',
      'Pengelompokan material dari konkret (miniatur benda) ke abstrak (kartu simbol)',
      'Sudut baca (*reading nook*) yang tenang dengan pencahayaan alami dan alas duduk empuk',
      'Labeling visual rak untuk melatih kemandirian merapikan kembali (*sense of order*)'
    ],
    keyObservationMoments: [
      { 
        time: '01:00', 
        title: 'Pengukuran Ergonomi Rak Anak',
        description: 'Pemeriksaan ketinggian rak terbuka 2 tingkat yang memungkinkan anak usia 3-6 tahun mengambil baki tanpa bantuan dewasa.' 
      },
      { 
        time: '02:45', 
        title: 'Alur Kiri ke Kanan',
        description: 'Demonstrasi penataan baki kartu klasifikasi (kiri), nampan pasir & huruf raba (tengah), dan kotak LMA (kanan).' 
      },
      { 
        time: '04:30', 
        title: 'Sudut Membaca Front-Facing',
        description: 'Buku-buku bergambar ditata menghadap depan (*front-facing*) agar sampul bergambar memikat minat anak.' 
      },
      { 
        time: '06:10', 
        title: 'Tempat Karpet Kerja & Meja Mandiri',
        description: 'Penyediaan gulungan karpet kerja kecil di keranjang anyaman bambu dekat rak.' 
      }
    ],
    transcriptSummary: [
      { time: '01:15', speaker: 'Instruktur', text: '"Lingkungan yang dipersiapkan adalah guru ketiga bagi anak. Jika rak terlalu tinggi, kita merebut kemandirian mereka."' },
      { time: '03:00', speaker: 'Instruktur', text: '"Perhatikan alur kiri ke kanan. Ini adalah persiapan tidak langsung bagi mata anak untuk membaca teks bahasa Indonesia dari kiri ke kanan."' }
    ],
    analysisQuestions: [
      {
        id: 'vq-3-1',
        question: 'Mengapa baki material bahasa diletakkan dengan urutan tingkat kesulitan dari kiri ke kanan pada rak?',
        options: [
          'Sebagai persiapan tidak langsung (*indirect preparation*) bagi orientasi mata anak saat membaca dan menulis teks dari kiri ke kanan.',
          'Hanya aturan estetika dekorasi ruangan.',
          'Agar rak terlihat penuh di sisi kanan.',
          'Supaya anak kidal tidak bisa mengambil barang.'
        ],
        correctIndex: 0,
        pedagogicalFeedback: 'Montessori menyematkan persiapan tidak langsung pada setiap aspek lingkungan, termasuk arah tatakelola rak.'
      }
    ]
  },
  {
    id: 'vid-modul-4',
    title: 'Video Panduan Modul 4: Peragaan Three-Period Lesson Kosakata & Kartu Klasifikasi 3-Bagian',
    category: 'Metode Presentasi',
    duration: '8:00',
    thumbnailUrl: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80',
    youtubeId: '1zM_l4BvPBo',
    description: 'Panduan lengkap cara mempresentasikan kosakata baru melalui 3 babak terstruktur Maria Montessori (Penamaan, Pengenalan Asosiasi Gerak, dan Penarikan Ingatan) menggunakan kartu gambar nomenklatur tiga bagian bertema tanaman nusantara.',
    relatedModuleId: 'modul-4',
    moduleNumber: 4,
    trainerName: 'Dra. Ratna Wulandari, M.Pd & Tim Pengembang Kurikulum PAUD',
    focusPoints: [
      'Alokasi waktu terlama di Babak 2 dengan aneka ragam permainan gerak aktif',
      'Membatasi jumlah objek baru maksimal 2–3 kata per sesi presentasi',
      'Isolasi visual: meletakkan kartu di atas karpet kerja dengan jarak rapi',
      'Teknik kontrol kesalahan (*control of error*) kartu kontrol berpita'
    ],
    keyObservationMoments: [
      { 
        time: '01:10', 
        title: 'Babak 1 (Penamaan)',
        description: 'Guru menunjuk kartu bergambar "daun" dan "akar", lalu mengucapkan: "Ini adalah daun... Ini adalah akar."' 
      },
      { 
        time: '03:00', 
        title: 'Babak 2 (Asosiasi & Gerak Ragawi)',
        description: 'Guru mengajak anak bermain: "Tolong letakkan kartu akar di dekat jendela", "Tutup kartu daun dengan kedua telapak tanganmu".' 
      },
      { 
        time: '05:45', 
        title: 'Babak 3 (Verifikasi Ingatan)',
        description: 'Guru menunjuk salah satu kartu dan bertanya dengan lembut: "Apakah ini?" Anak menjawab dengan penuh percaya diri.' 
      },
      { 
        time: '07:00', 
        title: 'Merapikan Kartu ke Dalam Kantong',
        description: 'Guru dan anak bersama-sama merapikan kartu ke dalam dompet kain dan mengembalikannya ke rak.' 
      }
    ],
    transcriptSummary: [
      { time: '01:20', speaker: 'Guru', text: '"Ini adalah daun... Rasakan tekstur gambarnya... daun."' },
      { time: '03:15', speaker: 'Guru', text: '"Dapatkah kamu memberikan kartu akar kepada Ibu guru?"' },
      { time: '05:50', speaker: 'Guru', text: '"Apakah nama kartu ini?"' },
      { time: '05:55', speaker: 'Anak', text: '"Itu daun!"' }
    ],
    analysisQuestions: [
      {
        id: 'vq-4-1',
        question: 'Bila anak ragu atau keliru saat guru bertanya di Babak 3 ("Apakah ini?"), apa tindakan guru yang paling tepat?',
        options: [
          'Mengatakan "Bukan, kamu lupa ya?" dan memberi nilai silang.',
          'Kembali dengan tenang ke Babak 2 (memberi pengalaman asosiasi dan gerak lebih banyak) tanpa mempermalukan anak.',
          'Memaksa anak mengulang ucapan guru sepuluh kali.',
          'Menyuruh anak pulang lebih awal.'
        ],
        correctIndex: 1,
        pedagogicalFeedback: 'Di Montessori, kesalahan di Babak 3 menandakan Babak 2 belum cukup diinternalisasi. Guru cukup kembali ke Babak 2 dengan senyuman.'
      }
    ]
  },
  {
    id: 'vid-modul-5',
    title: 'Video Panduan Modul 5: Demonstrasi Huruf Raba (Sandpaper Letters) & Nampan Pasir Sensori',
    category: 'Aparatus Sensori',
    duration: '6:50',
    thumbnailUrl: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=80',
    youtubeId: 'L8E_W92c10s',
    description: 'Amati demonstrasi taktil penelusuran huruf raba /m/ dan /s/ dengan 2 jari dominan (telunjuk & tengah) dilanjutkan latihan memindahkan memori otot ke nampan pasir halus secara mandiri.',
    relatedModuleId: 'modul-5',
    moduleNumber: 5,
    trainerName: 'Nurul Hidayati, S.Pd (Fasilitator Sandpaper Letters)',
    focusPoints: [
      'Membasahi/membersihkan ujung 2 jari sebelum meraba agar reseptor taktil tajam',
      'Tangan non-dominan memegang tepi papan kayu/karton dengan stabil',
      'Arah penelusuran persis searah dengan tarikan garis menulis yang benar',
      'Artikulasi bunyi fonik diucapkan tepat saat jari mencapai ujung huruf'
    ],
    keyObservationMoments: [
      { 
        time: '01:15', 
        title: 'Sensitisasi Ujung Jari',
        description: 'Guru mengajak anak mengusap jari pada kain lembut hangat untuk meningkatkan kepekaan rabaan kulit.' 
      },
      { 
        time: '02:40', 
        title: 'Penelusuran Huruf Raba /m/',
        description: 'Dua jari guru menelusuri lekuk kasar huruf /m/ dengan tenang, lalu mengucapkan bunyi "/m/" di akhir tarikan garis.' 
      },
      { 
        time: '04:20', 
        title: 'Anak Mencoba Menelusuri Mandiri',
        description: 'Anak menelusuri huruf raba berulang kali sambil tersenyum merasakan sensasi tekstur amplas.' 
      },
      { 
        time: '05:35', 
        title: 'Eksplorasi di Atas Nampan Pasir',
        description: 'Anak membuat guratan huruf /m/ pada lapisan pasir halus dengan jari, lalu meratakan pasir kembali dengan menggoyangkan nampan secara perlahan.' 
      }
    ],
    transcriptSummary: [
      { time: '01:30', speaker: 'Guru', text: '"Mari kita siapkan dua jari telunjuk dan tengah kita. Rasakan ujung jarimu."' },
      { time: '02:50', speaker: 'Guru', text: '"/m/... /m/..."' },
      { time: '04:30', speaker: 'Anak', text: '"Kasar ya bu guru, rasanya geli di jari!"' }
    ],
    analysisQuestions: [
      {
        id: 'vq-5-1',
        question: 'Mengapa penelusuran huruf raba menggunakan dua jari (telunjuk dan tengah) secara bersamaan?',
        options: [
          'Agar papan huruf raba tidak mudah rusak.',
          'Dua jari memberikan bidang kontak taktil yang optimal dan melatih otot motorik halus yang sama yang nantinya memegang pensil (*pincer grip*).',
          'Hanya kebetulan belaka tanpa alasan ilmiah.',
          'Supaya tangan anak terlihat lebih besar.'
        ],
        correctIndex: 1,
        pedagogicalFeedback: 'Memori otot (*muscle memory*) terbentuk kuat melalui kontak dua jari telunjuk dan jari tengah di atas permukaan kasar.'
      }
    ]
  },
  {
    id: 'vid-modul-6',
    title: 'Video Panduan Modul 6: Eksplorasi Large Movable Alphabet (LMA) & Pembentukan Kata Pertama',
    category: 'Eksplorasi Kata',
    duration: '8:30',
    thumbnailUrl: 'https://images.unsplash.com/photo-1596495578065-6e0763fa1178?auto=format&fit=crop&w=1200&q=80',
    youtubeId: '7Q3Z8mN92yQ',
    description: 'Dokumentasi otentik seorang anak usia 5 tahun yang menganalisis bunyi dari miniatur benda konkrit (b-u-s dan t-a-s), lalu mencari keping huruf kayu LMA berwarna merah (vokal) dan biru (konsonan) untuk merangkai kata.',
    relatedModuleId: 'modul-6',
    moduleNumber: 6,
    trainerName: 'Dra. Ratna Wulandari, M.Pd & Pendidik Sentra Bahasa',
    focusPoints: [
      'Pembedaan warna keping LMA (konsonan biru / vokal merah) membantu diskriminasi visual',
      'Guru tidak mengoreksi ejaan fonik anak selama anak menyusun bunyi yang didengarnya',
      'Membuka gerbang "Menulis Sebelum Membaca" (*Writing before Reading*)',
      'Membangun rasa kepemilikan dan kebanggaan atas kata pertama yang berhasil diciptakan anak'
    ],
    keyObservationMoments: [
      { 
        time: '01:20', 
        title: 'Membentangkan Karpet Kerja',
        description: 'Anak menggelar karpet kerja di lantai dan meletakkan kotak LMA di posisi atas secara mandiri.' 
      },
      { 
        time: '03:10', 
        title: 'Analisis Segmentasi Bunyi Miniatur',
        description: 'Anak memegang miniatur bus, membunyikan secara berbisik: "/b/... /u/... /s/".' 
      },
      { 
        time: '05:00', 
        title: 'Mencari Keping Huruf di Kompartemen',
        description: 'Anak mengambil huruf /b/ biru, /u/ merah, dan /s/ biru, lalu menjajarkannya rapi dari kiri ke kanan di samping miniatur.' 
      },
      { 
        time: '07:15', 
        title: 'Kepuasan Spontan Anak (*Spontaneous Joy*)',
        description: 'Anak menatap kata yang tercipta dengan senyuman bangga dan memanggil temannya untuk melihat.' 
      }
    ],
    transcriptSummary: [
      { time: '03:15', speaker: 'Anak', text: '"Bus... /b/... /u/... /s/... Bunyi pertamanya /b/."' },
      { time: '05:30', speaker: 'Guru', text: '"Kamu berhasil merangkai bunyi-bunyi dari kata bus dengan huruf bergerakmu."' }
    ],
    analysisQuestions: [
      {
        id: 'vq-6-1',
        question: 'Mengapa Maria Montessori menyebut bahwa anak "menulis sebelum membaca" melalui media Large Movable Alphabet?',
        options: [
          'Karena mengekspresikan pikiran sendiri ke dalam simbol bunyi (enkoding) secara kognitif lebih alami bagi anak dibanding menguraikan simbol orang lain (dekoding).',
          'Karena anak dilarang membaca buku sebelum usia 7 tahun.',
          'Hanya trik pemasaran sekolah swasta.',
          'Karena huruf bergerak lebih murah daripada buku bacaan.'
        ],
        correctIndex: 0,
        pedagogicalFeedback: 'Menyusun kata dengan LMA adalah bentuk menulis tanpa beban fisik memegang pensil, memungkinkan anak mengekspresikan ide linguistiknya secara bebas.'
      }
    ]
  },
  {
    id: 'vid-modul-7',
    title: 'Video Panduan Modul 7: Praktik Observasi Otentik di Kelas & Pencatatan Jurnal Refleksi',
    category: 'Observasi & Refleksi',
    duration: '6:15',
    thumbnailUrl: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=1200&q=80',
    youtubeId: 'OqK4M8x7vJw',
    description: 'Pelajari teknik observasi objektif di kelas PAUD: posisi duduk guru sebagai periset (*teacher as observer*), cara mencatat fakta deskriptif tanpa label asumtif, dan menyusun rencana tindak lanjut individual yang berpusat pada anak.',
    relatedModuleId: 'modul-7',
    moduleNumber: 7,
    trainerName: 'Dr. Hendra Gunawan, M.Psi (Pakar Evaluasi Perkembangan Anak)',
    focusPoints: [
      'Memilih posisi duduk di sudut kelas yang tenang tanpa mengintimidasi eksplorasi anak',
      'Format catatan anekdot: Memisahkan FAKTA teramati dari INTERPRETASI subjektif',
      'Mengukur durasi rentang konsentrasi mendalam (*normalization & deep focus*)',
      'Menjadikan data observasi sebagai dasar merancang rotasi material minggu berikutnya'
    ],
    keyObservationMoments: [
      { 
        time: '00:50', 
        title: 'Posisi Pengamat Non-Intrusif',
        description: 'Guru duduk di kursi kecil di sudut ruangan dengan buku catatan kecil di pangkuan.' 
      },
      { 
        time: '02:30', 
        title: 'Pencatatan Fakta Perilaku Tepat Waktu',
        description: 'Guru mencatat: "Pukul 08.45 Ananda R mengambil baki LMA, bekerja selama 12 menit tanpa menoleh ke meja sebelah".' 
      },
      { 
        time: '04:15', 
        title: 'Menghindari Label Evaluatif',
        description: 'Guru tidak menulis "anak malas" atau "anak pintar", melainkan mendeskripsikan tindakan konkrit yang dilakukan anak.' 
      },
      { 
        time: '05:30', 
        title: 'Refleksi Harian Guru Paska Kelas',
        description: 'Guru duduk selama 5 menit setelah anak pulang untuk menuliskan refleksi perbaikan diri.' 
      }
    ],
    transcriptSummary: [
      { time: '01:10', speaker: 'Narasumber', text: '"Seorang pendidik Montessori adalah ilmuwan di dalam laboratorium kelasnya. Mata kita mengamati keajaiban pertumbuhan jiwa anak."' },
      { time: '03:00', speaker: 'Narasumber', text: '"Tuliskan apa yang anak katakan dan lakukan, bukan apa yang kita asumsikan."' }
    ],
    analysisQuestions: [
      {
        id: 'vq-7-1',
        question: 'Manakah contoh catatan observasi yang paling objektif dan sesuai kaidah Montessori?',
        options: [
          '"Andi sangat nakal dan tidak mau mendengarkan perintah guru hari ini."',
          '"Andi menelusuri huruf raba /k/ sebanyak 4 kali, lalu meletakkan baki di rak kedua pukul 09.15."',
          '"Andi adalah anak paling jenius di kelas karena cepat menyelesaikan tugas."',
          '"Andi malas sekali membuka buku cerita."'
        ],
        correctIndex: 1,
        pedagogicalFeedback: 'Catatan objektif mencatat fakta terukur (tindakan, frekuensi, waktu) tanpa menyematkan label moralitas atau penilaian emosional subjektif.'
      }
    ]
  },
  {
    id: 'vid-modul-8',
    title: 'Video Panduan Modul 8: Adaptasi Kurikulum Merdeka & Pembuatan Material DIY Bahasa Ramah Biaya',
    category: 'Kurikulum PAUD & DIY',
    duration: '7:50',
    thumbnailUrl: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=1200&q=80',
    youtubeId: '9bZkp7q19f0',
    description: 'Panduan kreatif dan solutif membuat aparatus bahasa Montessori secara mandiri (DIY) dari kardus bekas, amplas kayu tukang, tutup botol daur ulang, dan kain perca, diselaraskan dengan Capaian Pembelajaran Literasi PAUD Indonesia.',
    relatedModuleId: 'modul-8',
    moduleNumber: 8,
    trainerName: 'Siti Aminah, S.Pd (Inovator Alat Peraga Edukatif Lokal)',
    focusPoints: [
      'Teknik memotong amplas nomor 100-120 dan menempelkannya pada alas karton tebal daur ulang',
      'Pembuatan huruf alfabet bergerak dari tutup botol bekas dengan kode warna spidol tahan air',
      'Penggunaan biji saga, beras warna alami, dan tepung beras untuk nampan sensori',
      'Penyelarasan dokumentasi portofolio dengan format asesmen Kurikulum Merdeka PAUD'
    ],
    keyObservationMoments: [
      { 
        time: '01:00', 
        title: 'Pemilihan Bahan Daur Ulang Aman Anak',
        description: 'Menyiapkan kardus tebal bekas kemasan susu dan amplas kayu halus non-toksik.' 
      },
      { 
        time: '02:45', 
        title: 'Memotong Huruf Raba Fonik DIY',
        description: 'Membuat pola huruf fonik huruf kecil (a, m, s, t) dan merekatkannya rapi di atas kartu tebal.' 
      },
      { 
        time: '04:30', 
        title: 'Movable Alphabet dari Tutup Botol Galon/Mineral',
        description: 'Menuliskan huruf vokal merah dan konsonan biru pada stiker tutup botol daur ulang.' 
      },
      { 
        time: '06:20', 
        title: 'Uji Coba Langsung Bersama Anak PAUD',
        description: 'Anak-anak sangat senang menggunakan aparatus buatan tangan guru yang penuh kehangatan cinta.' 
      }
    ],
    transcriptSummary: [
      { time: '01:15', speaker: 'Ibu Siti', text: '"Montessori bukan tentang mahalnya kayu impor, melainkan tentang prinsip sensori dan kemandirian yang hidup di dalam alat tersebut."' },
      { time: '04:45', speaker: 'Ibu Siti', text: '"Tutup botol bekas ini memiliki lingkar yang pas untuk digenggam jemari mungil anak usia 4 tahun."' }
    ],
    analysisQuestions: [
      {
        id: 'vq-8-1',
        question: 'Apa esensi utama pembuatan material bahasa alternatif (DIY) di sekolah PAUD?',
        options: [
          'Menghemat biaya tanpa mengorbankan prinsip pedagogis sensori, keteraturan, dan kontrol kesalahan (*control of error*).',
          'Sekadar membuat pajangan agar ruang kelas terlihat ramai.',
          'Menghindari pembelian buku pelajaran resmi.',
          'Mengganti peran guru sepenuhnya dengan barang bekas.'
        ],
        correctIndex: 0,
        pedagogicalFeedback: 'Material DIY yang dirancang dengan teliti memenuhi tujuan sensori yang sama efektifnya dengan aparatus pabrikan impor.'
      }
    ]
  }
];
