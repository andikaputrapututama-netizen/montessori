import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig, Plugin } from 'vite';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';

dotenv.config();

function geminiApiPlugin(): Plugin {
  return {
    name: 'gemini-api-plugin',
    configureServer(server) {
      server.middlewares.use('/api/gemini/assistant', async (req, res) => {
        if (req.method !== 'POST') {
          res.statusCode = 405;
          res.end(JSON.stringify({ error: 'Method not allowed' }));
          return;
        }

        let body = '';
        req.on('data', chunk => {
          body += chunk;
        });

        req.on('end', async () => {
          try {
            const data = JSON.parse(body || '{}');
            const apiKey = process.env.GEMINI_API_KEY;

            if (!apiKey) {
              res.setHeader('Content-Type', 'application/json');
              res.statusCode = 200;
              res.end(JSON.stringify({
                isFallback: true,
                content: `### Rekomendasi Aktivitas: Eksplorasi Bunyi & Benda Sekitar (Pra-Membaca)

**Tujuan Pembelajaran:**
Mengembangkan kesadaran fonologis awal (initial sound / bunyi awal kata) melalui benda konkrit yang ada di sekitar kelas.

**Rentang Usia / Kesiapan:**
${data.ageGroup || '4–5 Tahun'} (Kesiapan: Anak sudah mampu membedakan nama benda secara lisan).

**Material yang Digunakan:**
${data.availableMaterials || 'Keranjang kecil, 3–4 benda nyata (batu, buku, bola, botol), alas kerja kecil (mat).'}

**Langkah-langkah Presentasi:**
1. **Undangan:** Ajak anak ke area bahasa: *"Ibu/Bapak guru punya sesuatu di dalam keranjang, mau kita lihat bersama?"*
2. **Pemberian Nama (Period 1):** Ambil satu benda, misalnya *batu*. Ucapkan dengan artikulasi jelas: *"Ini b-b-batu. Bunyi awalnya /b/."*
3. **Eksplorasi Bunyi:** Ajak anak merasakan getaran bunyi awal tanpa membebani: *"Dapatkah kamu menemukan benda lain yang berbunyi /b/?"*
4. **Isolasi Kesulitan:** Fokus hanya pada 1 bunyi awal terlebih dahulu sebelum mencampur dengan bunyi lain.

**Contoh Bahasa Guru (Empatik & Positif):**
- *"Mari kita dengarkan bunyinya bersama: /b/... batu."*
- *"Kamu boleh meletakkannya kembali di rak jika sudah selesai bereksplorasi."*

**Poin Observasi Guru:**
- Apakah anak tertarik menyentuh dan mendengarkan bunyi awal?
- Apakah anak mencoba menirukan artikulasi bunyi atau lebih fokus pada fungsi benda?

**Catatan Kontekstual & Refleksi:**
Aktivitas ini dapat disesuaikan dengan tema Kurikulum PAUD (misal: Mengenal Lingkungan Sekitar) dan tidak memerlukan material khusus pabrikan.`
              }));
              return;
            }

            const ai = new GoogleGenAI({
              apiKey,
              httpOptions: {
                headers: {
                  'User-Agent': 'aistudio-build',
                },
              },
            });

            const prompt = `Anda adalah Asisten Pembelajaran Guru PAUD untuk Montessori Bahasa Indonesia.
Berikan rekomendasi rencana aktivitas Montessori Bahasa yang ramah, praktis, berbasis observasi perkembangan anak, dan dapat dikontekstualisasikan dengan kelas PAUD di Indonesia.

Berikut parameter masukan guru:
- Kelompok Usia / Kesiapan Anak: ${data.ageGroup || '4-5 tahun'}
- Tujuan Stimulasi Bahasa: ${data.learningGoal || 'Mengenal bunyi awal dan memperkaya kosakata'}
- Material yang Tersedia di Kelas: ${data.availableMaterials || 'Material sederhana di sekitar'}
- Alokasi Waktu: ${data.duration || '10-15 menit'}
- Kondisi / Karakteristik Kelas: ${data.classroomContext || 'Anak aktif dan menyukai aktivitas gerak'}

Struktur rekomendasi yang harus Anda berikan:
1. **Judul Aktivitas**
2. **Tujuan Pembelajaran (Child-Centered)**
3. **Material & Alternatif Bahan Sederhana**
4. **Persiapan Lingkungan (Prepared Environment)**
5. **Langkah-Langkah Presentasi (Prinsip Three-Period Lesson / Gerakan Hening / Isolasi Kesulitan)**
6. **Contoh Bahasa Guru (Kalimat yang tenang, positif, tidak menggurui)**
7. **Variasi & Diferensiasi (Untuk anak yang butuh tantangan lebih atau anak yang baru mengenal)**
8. **Panduan Observasi Guru (Hal yang perlu diamati tanpa menghakimi/mendiagnosis)**
9. **Pertanyaan Refleksi Guru Pascakegiatan**

Gunakan bahasa Indonesia yang hangat, profesional, berbasis prinsip Montessori yang berpihak pada anak. Berikan catatan bahwa rekomendasi ini adalah ide yang perlu disesuaikan dengan karakteristik masing-masing anak.`;

            const response = await ai.models.generateContent({
              model: 'gemini-3.7-flash',
              contents: prompt,
            });

            res.setHeader('Content-Type', 'application/json');
            res.statusCode = 200;
            res.end(JSON.stringify({ content: response.text }));
          } catch (err: any) {
            console.error('Gemini API Error:', err);
            res.setHeader('Content-Type', 'application/json');
            res.statusCode = 500;
            res.end(JSON.stringify({ error: err.message || 'Internal server error' }));
          }
        });
      });
    },
  };
}

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss(), geminiApiPlugin()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      hmr: process.env.DISABLE_HMR !== 'true',
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
