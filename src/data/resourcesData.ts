import { ResourceItem } from '../types';

export const resourcesData: ResourceItem[] = [
  {
    id: 'res-1',
    title: 'Lembar Format Observasi Perkembangan Bahasa Anak (Montessori x PAUD)',
    description: 'Template catatan observasi objektif harian guru yang memuat kolom interaksi lisan, ketertarikan material, respon anak, dan rencana tindak lanjut individual.',
    category: 'Template Observasi',
    format: 'Printable Sheet',
    fileSize: '180 KB',
    source: 'Tim Pengembang Kurikulum Montessori Bahasa PAUD',
    year: 2026,
    isVerified: true,
    sampleContentHtml: `
      <div class="p-6 bg-white border border-stone-200 rounded-xl font-sans text-sm text-stone-800">
        <div class="text-center border-b pb-4 mb-4">
          <h3 class="text-lg font-bold text-emerald-900">LEMBAR OBSERVASI HARIAN BAHASA ANAK USIA DINI</h3>
          <p class="text-xs text-stone-500">Platform Montessori Bahasa — Instrumen Asesmen Autentik PAUD</p>
        </div>
        <div class="grid grid-cols-2 gap-4 mb-4 text-xs">
          <div><strong>Inisial / Nama Anak:</strong> _______________________</div>
          <div><strong>Tanggal Observasi:</strong> _______________________</div>
          <div><strong>Kelompok Usia:</strong> [ ] 2-3 th [ ] 3-4 th [ ] 4-5 th [ ] 5-6 th</div>
          <div><strong>Nama Guru Pengamat:</strong> _______________________</div>
        </div>
        <table class="w-full border-collapse border border-stone-300 text-xs mb-4">
          <thead>
            <tr class="bg-stone-100 text-stone-700">
              <th class="border border-stone-300 p-2 text-left w-1/4">Aspek Observasi</th>
              <th class="border border-stone-300 p-2 text-left">Fakta yang Teramati (Tindakan & Ucapan Anak)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="border border-stone-300 p-2 font-semibold">1. Pemilihan Material</td>
              <td class="border border-stone-300 p-2">Material yang diambil: _____________________________________<br>Diambil secara: [ ] Mandiri [ ] Diajak Teman [ ] Diundang Guru</td>
            </tr>
            <tr>
              <td class="border border-stone-300 p-2 font-semibold">2. Eksplorasi Sensori & Gerakan</td>
              <td class="border border-stone-300 p-2">Bagaimana anak menggunakan material (rabaan/susunan/penelusuran):<br>____________________________________________________________</td>
            </tr>
            <tr>
              <td class="border border-stone-300 p-2 font-semibold">3. Bahasa Lisan & Fonik</td>
              <td class="border border-stone-300 p-2">Ucapan / kata baru / artikulasi bunyi yang dilafalkan anak:<br>____________________________________________________________</td>
            </tr>
            <tr>
              <td class="border border-stone-300 p-2 font-semibold">4. Tingkat Fokus & Emosi</td>
              <td class="border border-stone-300 p-2">Durasi fokus: _____ menit. Ekspresi: [ ] Gembira [ ] Khusyuk [ ] Ragu</td>
            </tr>
          </tbody>
        </table>
        <div class="text-xs border-t pt-3">
          <strong>Rencana Tindak Lanjut Guru (*Next Pedagogical Step*):</strong><br>
          <p class="mt-1 text-stone-600">__________________________________________________________________________________</p>
        </div>
      </div>
    `
  },
  {
    id: 'res-2',
    title: 'Checklist Evaluasi Prepared Environment Area Bahasa di Kelas PAUD',
    description: 'Daftar periksa 15 butir untuk mengaudit keterjangkauan rak, kelengkapan baki material, urutan kiri-ke-kanan, dan sudut baca yang ramah anak.',
    category: 'Checklist',
    format: 'PDF',
    fileSize: '240 KB',
    source: 'Pusat Standar Lingkungan Belajar PAUD & Asosiasi Montessori',
    year: 2026,
    isVerified: true
  },
  {
    id: 'res-3',
    title: 'Panduan Pembuatan Material Montessori Bahasa Sederhana (DIY Guide)',
    description: 'Buku saku praktis langkah demi langkah membuat Huruf Raba (Sandpaper Letters), Movable Alphabet tutup botol, dan baki pasir dengan bahan lokal ramah anggaran.',
    category: 'Panduan Guru',
    format: 'PDF',
    fileSize: '1.2 MB',
    source: 'Inisiatif Guru Kreatif PAUD Indonesia',
    year: 2026,
    isVerified: true
  },
  {
    id: 'res-4',
    title: 'Set Kartu Klasifikasi 3 Bagian (Nomenclature Cards) — Tema: Buah Nusantara',
    description: 'Templat kartu siap cetak beresolusi tinggi memuat 10 buah lokal Indonesia (mangga, pisang, pepaya, manggis, salak, belimbing, dll.) lengkap dengan kartu kontrol dan label kata.',
    category: 'Kartu Aktivitas',
    format: 'Printable Sheet',
    fileSize: '3.4 MB',
    source: 'Laboratorium Sumber Belajar Literasi PAUD',
    year: 2026,
    isVerified: true
  },
  {
    id: 'res-5',
    title: 'Format Siklus 5 Pertanyaan Jurnal Refleksi Harian Guru PAUD',
    description: 'Lembar kerja refleksi mandiri pendidik untuk mengevaluasi komunikasi lisan guru, keheningan presentasi, dan respons anak setelah jam pembelajaran.',
    category: 'Format Refleksi',
    format: 'Printable Sheet',
    fileSize: '150 KB',
    source: 'Komunitas Praktisi Guru Reflektif PAUD',
    year: 2026,
    isVerified: true
  },
  {
    id: 'res-6',
    title: 'Kartu Kata Fonik CVC & Gambar Pasangan (Phonetic Word Slips)',
    description: 'Set 24 kartu kata tiga huruf fonik murni (tas, bus, rel, pot, jam, lem) dan foto pasangannya untuk pengenalan membaca mandiri tahap awal.',
    category: 'Kartu Aktivitas',
    format: 'Printable Sheet',
    fileSize: '2.1 MB',
    source: 'Divisi Fonik & Literasi Dini',
    year: 2026,
    isVerified: true
  },
  {
    id: 'res-7',
    title: 'Matriks Perkembangan Kesadaran Fonologis Anak Usia 2–6 Tahun',
    description: 'Bagan rujukan tahapan pemerolehan bunyi lisan mulai dari rima, suku kata, bunyi awal (*initial sounds*), hingga segmentasi bunyi fonik.',
    category: 'Panduan Guru',
    format: 'PDF',
    fileSize: '310 KB',
    source: 'Kajian Perkembangan Anak & PAUDPEDIA',
    year: 2025,
    isVerified: true
  },
  {
    id: 'res-8',
    title: 'Kartu Aksi Perintah Sunyi (Silent Action Command Cards)',
    description: 'Set 16 kartu gulung kata kerja sederhana (lompat, senyum, duduk, cium, tiup, lambaikan tangan) untuk aktivitas literasi kinestetik.',
    category: 'Kartu Aktivitas',
    format: 'Printable Sheet',
    fileSize: '450 KB',
    source: 'Pusat Kreativitas Literasi PAUD',
    year: 2026,
    isVerified: true
  },
  {
    id: 'res-9',
    title: 'Lembar Catatan Anekdot Kejadian Bermakna di Ruang Kelas',
    description: 'Format pencatatan insidental untuk mendokumentasikan momen lompatan bahasa (*linguistic milestone*) spontan yang ditunjukkan anak.',
    category: 'Template Observasi',
    format: 'Printable Sheet',
    fileSize: '190 KB',
    source: 'Model Asesmen Autentik Pendidik PAUD',
    year: 2026,
    isVerified: true
  },
  {
    id: 'res-10',
    title: 'Buku Saku Contoh Kalimat Ramah Anak untuk Guru (*Teacher Phrasing Guide*)',
    description: 'Daftar komparasi kalimat guru: menghindari kalimat menggurui/menghakimi dan beralih ke kalimat pemantik rasa ingin tahu dan validasi emosi anak.',
    category: 'Panduan Guru',
    format: 'PDF',
    fileSize: '520 KB',
    source: 'Pedoman Komunikasi Positif PAUD',
    year: 2026,
    isVerified: true
  }
];
