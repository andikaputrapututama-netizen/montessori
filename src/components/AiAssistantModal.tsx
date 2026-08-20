import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Bot, Sparkles, X, Loader2, CheckCircle2, AlertCircle, RefreshCw, Copy, Check } from 'lucide-react';

export const AiAssistantModal: React.FC = () => {
  const { isAiAssistantOpen, setIsAiAssistantOpen } = useApp();

  const [ageGroup, setAgeGroup] = useState('4–5 Tahun');
  const [learningObjective, setLearningObjective] = useState('Kesadaran Fonologis (Mengenal Bunyi Awal Kata)');
  const [availableMaterials, setAvailableMaterials] = useState('Benda nyata di kelas, baki pasir, kardus bekas');
  const [timeAvailable, setTimeAvailable] = useState('10 Menit');
  const [classroomCondition, setClassroomCondition] = useState('Anak sangat aktif dan lebih suka bergerak (kinestetik)');

  const [loading, setLoading] = useState(false);
  const [recommendation, setRecommendation] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const handleGenerate = async () => {
    setLoading(true);
    setError(null);
    setRecommendation(null);

    try {
      const res = await fetch('/api/gemini/assistant', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ageGroup,
          learningObjective,
          availableMaterials,
          timeAvailable,
          classroomCondition
        })
      });

      const data = await res.json();
      if (res.ok && data.recommendation) {
        setRecommendation(data.recommendation);
      } else {
        setError(data.error || 'Gagal memuat rekomendasi. Silakan coba lagi.');
      }
    } catch (err: any) {
      console.error('Error contacting AI assistant:', err);
      setError('Koneksi ke asisten sedang bermasalah. Pastikan jaringan internet aktif.');
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = () => {
    if (recommendation) {
      navigator.clipboard.writeText(recommendation);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  if (!isAiAssistantOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div className="w-full max-w-3xl bg-white border border-black shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="p-5 sm:p-6 bg-black text-white flex items-center justify-between border-b border-black">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-white text-black flex items-center justify-center font-bold">
              <Bot className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-heading font-bold text-base sm:text-lg tracking-tight uppercase">
                  Asisten AI Guru Montessori Bahasa
                </h3>
                <span className="bg-white text-black text-[9px] font-mono font-bold px-1.5 py-0.2 uppercase">
                  Gemini Flash
                </span>
              </div>
              <p className="text-[11px] font-mono text-white/60">
                Rekomendasi terstruktur aktivitas, bahasa guru, dan adaptasi material kontekstual
              </p>
            </div>
          </div>
          <button
            onClick={() => setIsAiAssistantOpen(false)}
            className="p-2 text-white/70 hover:text-white hover:bg-neutral-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Area */}
        <div className="p-5 sm:p-7 overflow-y-auto flex-1 space-y-6 bg-[#FAFAFA]">
          {/* Prompt Setup Form */}
          <div className="bg-white p-5 sm:p-6 border border-black/15 space-y-4">
            <div className="flex items-center justify-between border-b border-black/10 pb-2">
              <h4 className="font-mono font-bold text-black text-xs uppercase tracking-wider flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5" />
                // PARAMETER KELAS & KEBUTUHAN ANAK
              </h4>
              <span className="text-[10px] font-mono text-black/50 uppercase">Form 01</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              {/* Age Group */}
              <div>
                <label className="block font-mono text-[10px] uppercase font-bold text-black/70 mb-1">
                  1. Kelompok Usia Anak
                </label>
                <select
                  value={ageGroup}
                  onChange={e => setAgeGroup(e.target.value)}
                  className="w-full p-2.5 bg-[#F6F6F6] border border-black/20 focus:border-black text-black font-sans text-xs"
                >
                  <option value="2–3 Tahun (KB Awal)">2–3 Tahun (Kelompok Bermain Awal)</option>
                  <option value="3–4 Tahun (KB)">3–4 Tahun (Kelompok Bermain)</option>
                  <option value="4–5 Tahun (TK A)">4–5 Tahun (TK Kelompok A)</option>
                  <option value="5–6 Tahun (TK B)">5–6 Tahun (TK Kelompok B / Transisi SD)</option>
                </select>
              </div>

              {/* Learning Goal */}
              <div>
                <label className="block font-mono text-[10px] uppercase font-bold text-black/70 mb-1">
                  2. Tujuan Pembelajaran Utama
                </label>
                <select
                  value={learningObjective}
                  onChange={e => setLearningObjective(e.target.value)}
                  className="w-full p-2.5 bg-[#F6F6F6] border border-black/20 focus:border-black text-black font-sans text-xs"
                >
                  <option value="Kesadaran Fonologis (Mengenal Bunyi Awal Kata)">Kesadaran Fonologis (Bunyi Awal / I-Spy)</option>
                  <option value="Pengenalan Simbol Huruf (Sandpaper Letters / Raba)">Pengenalan Simbol Huruf (Huruf Raba)</option>
                  <option value="Perluasan Kosakata & Klasifikasi (Kartu 3 Bagian)">Perluasan Kosakata & Klasifikasi Benda</option>
                  <option value="Menyusun Kata Pertama (Movable Alphabet)">Menyusun Kata Pertama (Movable Alphabet)</option>
                  <option value="Pra-Menulis & Kontrol Pensil (Metal Insets / Baki Pasir)">Pra-Menulis & Kontrol Pensil / Baki Pasir</option>
                  <option value="Membaca Mandiri & Kalimat Perintah Aksi">Membaca Mandiri & Kalimat Perintah Aksi</option>
                </select>
              </div>

              {/* Materials Available */}
              <div className="sm:col-span-2">
                <label className="block font-mono text-[10px] uppercase font-bold text-black/70 mb-1">
                  3. Material yang Tersedia di Kelas / Lingkungan
                </label>
                <input
                  type="text"
                  value={availableMaterials}
                  onChange={e => setAvailableMaterials(e.target.value)}
                  placeholder="Misal: Kardus bekas, tutup botol, pasir beras, kertas HVS, benda nyata sekitar..."
                  className="w-full p-2.5 bg-[#F6F6F6] border border-black/20 focus:border-black text-black font-sans text-xs"
                />
              </div>

              {/* Time Available */}
              <div>
                <label className="block font-mono text-[10px] uppercase font-bold text-black/70 mb-1">
                  4. Estimasi Alokasi Waktu
                </label>
                <select
                  value={timeAvailable}
                  onChange={e => setTimeAvailable(e.target.value)}
                  className="w-full p-2.5 bg-[#F6F6F6] border border-black/20 focus:border-black text-black font-sans text-xs"
                >
                  <option value="5–10 Menit (Sesi Pendek / Perorangan)">5–10 Menit (Sesi Singkat Mandiri / One-on-One)</option>
                  <option value="15–20 Menit (Kelompok Kecil)">15–20 Menit (Kelompok Kecil 3-4 Anak)</option>
                  <option value="30 Menit (Siklus Jam Kerja Bebas)">30 Menit (Siklus Jam Kerja Bebas / Sudut Bahasa)</option>
                </select>
              </div>

              {/* Classroom Condition */}
              <div>
                <label className="block font-mono text-[10px] uppercase font-bold text-black/70 mb-1">
                  5. Karakteristik / Tantangan Khusus
                </label>
                <input
                  type="text"
                  value={classroomCondition}
                  onChange={e => setClassroomCondition(e.target.value)}
                  placeholder="Misal: Anak aktif kinestetik, anak pemalu, anak bilingual..."
                  className="w-full p-2.5 bg-[#F6F6F6] border border-black/20 focus:border-black text-black font-sans text-xs"
                />
              </div>
            </div>

            <button
              onClick={handleGenerate}
              disabled={loading}
              id="btn-generate-ai-recommendation"
              className="w-full mt-2 py-3 px-4 bg-black hover:bg-neutral-800 text-white font-mono uppercase tracking-wider text-xs font-bold transition-all flex items-center justify-center gap-2 border border-black disabled:opacity-50"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin text-white" />
                  <span>Merumuskan Panduan Pedagogis...</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4 text-white" />
                  <span>Rekomendasikan Aktivitas Montessori</span>
                </>
              )}
            </button>
          </div>

          {/* Error Message */}
          {error && (
            <div className="p-4 bg-red-50 border border-red-400 text-xs text-red-900 flex items-start gap-3">
              <AlertCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
              <div>
                <strong className="font-mono uppercase font-bold text-[10px]">Terjadi Kendala:</strong>
                <p className="mt-0.5">{error}</p>
              </div>
            </div>
          )}

          {/* AI Result Card */}
          {recommendation && (
            <div className="bg-white p-5 sm:p-7 border border-black space-y-4 animate-in fade-in duration-200">
              <div className="flex items-center justify-between border-b border-black/10 pb-3">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-black" />
                  <span className="font-mono font-bold text-xs uppercase tracking-wider text-black">
                    // RENCANA AKTIVITAS & PANDUAN GURU
                  </span>
                </div>
                <button
                  onClick={handleCopy}
                  className="flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-wider text-black bg-[#F6F6F6] hover:bg-black hover:text-white px-3 py-1.5 border border-black/20 transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-black" />
                      <span className="font-bold">Tersalin!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Salin Teks</span>
                    </>
                  )}
                </button>
              </div>

              {/* Rendered Recommendation */}
              <div className="text-xs sm:text-sm text-black leading-relaxed space-y-3 whitespace-pre-line bg-[#F9F9F9] p-5 border border-black/10 font-sans">
                {recommendation}
              </div>

              <div className="pt-2 text-[10px] font-mono text-black/50 flex items-center justify-between border-t border-black/10 uppercase">
                <span>Standar Pedagogi Montessori Bahasa PAUD</span>
                <button
                  onClick={handleGenerate}
                  className="flex items-center gap-1 text-black hover:underline font-bold"
                >
                  <RefreshCw className="w-3 h-3" />
                  Generate Ulang
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Footer Note */}
        <div className="p-3.5 bg-[#F6F6F6] border-t border-black/10 text-center text-[10px] font-mono text-black/60 uppercase">
          Asisten AI dirancang untuk memantik ide pedagogis guru • Selalu utamakan observasi langsung kesiapan anak
        </div>
      </div>
    </div>
  );
};
