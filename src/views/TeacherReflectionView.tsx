import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { TeacherReflection } from '../types';
import { 
  FileText, 
  Plus, 
  Trash2, 
  Printer, 
  Calendar, 
  Sparkles, 
  Lightbulb, 
  MessageSquare, 
  CheckCircle,
  HelpCircle,
  Clock
} from 'lucide-react';

export const TeacherReflectionView: React.FC = () => {
  const { progress, addReflection, deleteReflection } = useApp();

  const [isFormOpen, setIsFormOpen] = useState(false);
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [activityOrTopic, setActivityOrTopic] = useState('');
  const [whatWentWell, setWhatWentWell] = useState('');
  const [whatWasChallenging, setWhatWasChallenging] = useState('');
  const [childReaction, setChildReaction] = useState('');
  const [whatToChange, setWhatToChange] = useState('');
  const [nextStepToTry, setNextStepToTry] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!activityOrTopic.trim() || !whatWentWell.trim() || !whatWasChallenging.trim()) {
      alert('Mohon lengkapi topik, hal yang berjalan baik, dan tantangan yang dihadapi.');
      return;
    }

    addReflection({
      date,
      activityOrTopic,
      whatWentWell,
      whatWasChallenging,
      childReaction,
      whatToChange,
      nextStepToTry
    });

    // Reset form
    setActivityOrTopic('');
    setWhatWentWell('');
    setWhatWasChallenging('');
    setChildReaction('');
    setWhatToChange('');
    setNextStepToTry('');
    setIsFormOpen(false);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-black/10 pb-6">
        <div className="max-w-3xl space-y-2 text-left">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-black text-white text-[10px] font-mono font-bold uppercase tracking-widest">
            <FileText className="w-3 h-3" />
            <span>SIKLUS 5 PERTANYAAN REFLEKSI GURU</span>
          </div>
          <h1 className="font-heading font-bold text-2xl sm:text-4xl text-black tracking-tight uppercase">
            Jurnal Refleksi Praktik Pendidik PAUD
          </h1>
          <p className="text-xs sm:text-sm text-black/70 leading-relaxed font-sans">
            Refleksi adalah jantung dari transformasi guru Montessori. Evaluasi kebiasaan komunikasi, keheningan presentasi, dan respons anak setiap usai sesi belajar.
          </p>
        </div>

        <div className="flex items-center gap-2.5 shrink-0">
          <button
            onClick={handlePrint}
            className="px-4 py-2 bg-white hover:bg-neutral-100 text-black border border-black/20 text-xs font-mono font-bold uppercase flex items-center gap-2 transition-colors"
          >
            <Printer className="w-3.5 h-3.5 text-black" />
            <span>Cetak Jurnal</span>
          </button>

          <button
            onClick={() => setIsFormOpen(!isFormOpen)}
            className="px-4 py-2 bg-black hover:bg-neutral-800 text-white text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-2 transition-colors border border-black"
          >
            <Plus className="w-3.5 h-3.5 text-white" />
            <span>{isFormOpen ? 'Tutup Formulir' : '+ Refleksi Baru'}</span>
          </button>
        </div>
      </div>

      {/* NEW REFLECTION FORM */}
      {isFormOpen && (
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 sm:p-8 border border-black space-y-6 animate-in fade-in duration-200"
        >
          <div className="flex items-center justify-between border-b border-black/10 pb-3">
            <h3 className="font-heading font-bold text-base text-black uppercase flex items-center gap-2">
              <Lightbulb className="w-4 h-4 text-black" />
              Formulir Siklus 5 Pertanyaan Refleksi Mandiri
            </h3>
            <span className="text-[10px] font-mono text-black/50 uppercase">// Refleksi harian guru</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
            <div>
              <label className="block font-bold text-black uppercase text-[10px] mb-1">
                // Topik / Aktivitas yang Direfleksikan *
              </label>
              <input
                type="text"
                required
                placeholder="Misal: Presentasi Huruf Raba / Permainan I-Spy"
                value={activityOrTopic}
                onChange={e => setActivityOrTopic(e.target.value)}
                className="w-full p-2 bg-[#F6F6F6] border border-black/20 text-black text-xs font-sans focus:outline-none focus:border-black"
              />
            </div>

            <div>
              <label className="block font-bold text-black uppercase text-[10px] mb-1">
                // Tanggal Refleksi
              </label>
              <input
                type="date"
                value={date}
                onChange={e => setDate(e.target.value)}
                className="w-full p-2 bg-[#F6F6F6] border border-black/20 text-black text-xs font-mono"
              />
            </div>

            {/* 5 Core Questions */}
            <div className="sm:col-span-2">
              <label className="block font-bold text-black uppercase text-[10px] mb-1">
                // 1. Apa yang berjalan dengan sangat baik bagi anak hari ini? *
              </label>
              <textarea
                required
                rows={2}
                placeholder="Ceritakan momen keberhasilan dan kegembiraan anak saat berinteraksi..."
                value={whatWentWell}
                onChange={e => setWhatWentWell(e.target.value)}
                className="w-full p-2 bg-[#F6F6F6] border border-black/20 text-black text-xs font-sans focus:outline-none focus:border-black"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="block font-bold text-black uppercase text-[10px] mb-1">
                // 2. Apa tantangan atau hambatan yang dihadapi? *
              </label>
              <textarea
                required
                rows={2}
                placeholder="Apakah anak tampak bosan, saya terlalu banyak bicara, atau material kurang pas..."
                value={whatWasChallenging}
                onChange={e => setWhatWasChallenging(e.target.value)}
                className="w-full p-2 bg-[#F6F6F6] border border-black/20 text-black text-xs font-sans focus:outline-none focus:border-black"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="block font-bold text-black uppercase text-[10px] mb-1">
                // 3. Reaksi emosional dan bahasa spontan yang ditunjukkan anak?
              </label>
              <textarea
                rows={2}
                placeholder="Catat ekspresi wajah, antusiasme, atau kata-kata spontan anak..."
                value={childReaction}
                onChange={e => setChildReaction(e.target.value)}
                className="w-full p-2 bg-[#F6F6F6] border border-black/20 text-black text-xs font-sans focus:outline-none focus:border-black"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="block font-bold text-black uppercase text-[10px] mb-1">
                // 4. Apa yang perlu diubah dari cara memfasilitasi? (misal: lebih hening/hemat kata)
              </label>
              <textarea
                rows={2}
                placeholder="Evaluasi diri tentang tempo gerak, volume suara, atau pemberian jeda hening..."
                value={whatToChange}
                onChange={e => setWhatToChange(e.target.value)}
                className="w-full p-2 bg-[#F6F6F6] border border-black/20 text-black text-xs font-sans focus:outline-none focus:border-black"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="block font-bold text-black uppercase text-[10px] mb-1">
                // 5. Langkah kecil apa yang ingin dicoba besok pagi di kelas?
              </label>
              <input
                type="text"
                placeholder="Misal: Siapkan baki pasir warna biru / putar kartu klasifikasi tema hewan"
                value={nextStepToTry}
                onChange={e => setNextStepToTry(e.target.value)}
                className="w-full p-2 bg-[#F6F6F6] border border-black/20 text-black text-xs font-sans focus:outline-none focus:border-black"
              />
            </div>
          </div>

          <div className="flex items-center justify-end gap-3 pt-3 border-t border-black/10 font-mono">
            <button
              type="button"
              onClick={() => setIsFormOpen(false)}
              className="px-4 py-2 bg-neutral-100 hover:bg-neutral-200 text-black text-xs font-bold uppercase"
            >
              Batal
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-black hover:bg-neutral-800 text-white text-xs font-bold uppercase tracking-wider border border-black"
            >
              Simpan Refleksi
            </button>
          </div>
        </form>
      )}

      {/* SAVED REFLECTIONS LIST */}
      <div className="space-y-4">
        <div className="flex items-center justify-between text-xs font-mono text-black/60 uppercase">
          <span>// Total {progress.savedReflections.length} Catatan Refleksi Tersimpan</span>
          <span>Dokumen Pengembangan Profesionalisme Guru</span>
        </div>

        {progress.savedReflections.length === 0 ? (
          <div className="bg-white p-12 border border-black/15 text-center text-black/60 space-y-3">
            <FileText className="w-10 h-10 mx-auto text-black/30 stroke-1" />
            <p className="text-xs font-mono font-bold uppercase text-black">Belum ada catatan refleksi harian</p>
            <p className="text-xs text-black/60 max-w-sm mx-auto font-sans">
              Klik tombol "Tulis Refleksi Baru" di atas untuk mulai mencatat pertumbuhan pedagogis Anda.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {progress.savedReflections.map((ref) => (
              <div
                key={ref.id}
                className="bg-white border border-black/15 p-6 space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-start justify-between gap-2 border-b border-black/10 pb-3">
                    <div>
                      <h4 className="font-heading font-bold text-base text-black uppercase">
                        {ref.activityOrTopic}
                      </h4>
                      <span className="text-[10px] font-mono text-black/50 flex items-center gap-1 mt-0.5">
                        <Calendar className="w-3 h-3" />
                        {ref.date}
                      </span>
                    </div>
                    <button
                      onClick={() => deleteReflection(ref.id)}
                      className="p-1.5 text-black/40 hover:text-black hover:bg-neutral-100 transition-colors"
                      title="Hapus Refleksi"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Reflection Q&A snippets */}
                  <div className="space-y-2 text-xs font-sans">
                    <div className="p-3 bg-[#F6F6F6] border border-black/10">
                      <strong className="text-black font-mono text-[10px] uppercase block">// Yang Berjalan Baik:</strong>
                      <p className="text-black/80 mt-0.5 leading-relaxed">{ref.whatWentWell}</p>
                    </div>

                    <div className="p-3 bg-white border border-black/20">
                      <strong className="text-black font-mono text-[10px] uppercase block">// Tantangan & Hambatan:</strong>
                      <p className="text-black/80 mt-0.5 leading-relaxed">{ref.whatWasChallenging}</p>
                    </div>

                    {ref.whatToChange && (
                      <div className="p-3 bg-[#F6F6F6] border border-black/10">
                        <strong className="text-black font-mono text-[10px] uppercase block">// Perubahan yang Ingin Dilakukan:</strong>
                        <p className="text-black/80 mt-0.5">{ref.whatToChange}</p>
                      </div>
                    )}

                    {ref.nextStepToTry && (
                      <div className="p-3 bg-white border border-black text-black">
                        <strong className="font-mono text-[10px] uppercase block mb-0.5">// Rencana Tindakan Besok:</strong> {ref.nextStepToTry}
                      </div>
                    )}
                  </div>
                </div>

                <div className="pt-2 text-[9px] font-mono text-black/40 border-t border-black/5 uppercase">
                  Refleksi Pembelajaran Berkesadaran (*Mindful Teaching*)
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
