import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { ChildObservation } from '../types';
import { 
  ClipboardCheck, 
  Plus, 
  Trash2, 
  Printer, 
  Calendar, 
  User, 
  Sparkles, 
  FileText, 
  CheckCircle,
  HelpCircle,
  Eye
} from 'lucide-react';

export const ObservationJournalView: React.FC = () => {
  const { progress, addObservation, deleteObservation } = useApp();

  const [isFormOpen, setIsFormOpen] = useState(false);
  const [childIdentifier, setChildIdentifier] = useState('');
  const [ageGroup, setAgeGroup] = useState('4–5 Tahun');
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [activityName, setActivityName] = useState('');
  const [materialUsed, setMaterialUsed] = useState('');
  const [childAction, setChildAction] = useState('');
  const [childSpeech, setChildSpeech] = useState('');
  const [teacherSupportGiven, setTeacherSupportGiven] = useState('');
  const [childResponseAndInterest, setChildResponseAndInterest] = useState('');
  const [teacherNotes, setTeacherNotes] = useState('');
  const [followUpPlan, setFollowUpPlan] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!childIdentifier.trim() || !activityName.trim() || !childAction.trim()) {
      alert('Mohon lengkapi inisial anak, nama aktivitas, dan tindakan yang teramati.');
      return;
    }

    addObservation({
      childIdentifier,
      ageGroup,
      date,
      activityName,
      materialUsed,
      childAction,
      childSpeech,
      teacherSupportGiven,
      childResponseAndInterest,
      teacherNotes,
      followUpPlan
    });

    // Reset form
    setChildIdentifier('');
    setActivityName('');
    setMaterialUsed('');
    setChildAction('');
    setChildSpeech('');
    setTeacherSupportGiven('');
    setChildResponseAndInterest('');
    setTeacherNotes('');
    setFollowUpPlan('');
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
            <ClipboardCheck className="w-3 h-3" />
            <span>INSTRUMEN ASESMEN AUTENTIK PAUD</span>
          </div>
          <h1 className="font-heading font-bold text-2xl sm:text-4xl text-black tracking-tight uppercase">
            Jurnal Observasi Bahasa
          </h1>
          <p className="text-xs sm:text-sm text-black/70 leading-relaxed font-sans">
            Catat fakta objektif yang dilakukan dan diucapkan anak saat berinteraksi dengan material bahasa. Hindari asumsi subjektif atau pelabelan terburu-buru.
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
            <span>{isFormOpen ? 'Tutup Formulir' : '+ Observasi Baru'}</span>
          </button>
        </div>
      </div>

      {/* NEW OBSERVATION FORM */}
      {isFormOpen && (
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 sm:p-8 border border-black space-y-6 animate-in fade-in duration-200"
        >
          <div className="flex items-center justify-between border-b border-black/10 pb-3">
            <h3 className="font-heading font-bold text-base text-black uppercase flex items-center gap-2">
              <Eye className="w-4 h-4 text-black" />
              Formulir Dokumentasi Observasi Objektif
            </h3>
            <span className="text-[10px] font-mono text-black/50 uppercase">// Privasi data anak</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono">
            <div>
              <label className="block font-bold text-black uppercase text-[10px] mb-1">
                // Inisial / Nama Anak *
              </label>
              <input
                type="text"
                required
                placeholder="Misal: Ananda K."
                value={childIdentifier}
                onChange={e => setChildIdentifier(e.target.value)}
                className="w-full p-2 bg-[#F6F6F6] border border-black/20 text-black text-xs font-sans focus:outline-none focus:border-black"
              />
            </div>

            <div>
              <label className="block font-bold text-black uppercase text-[10px] mb-1">
                // Kelompok Usia
              </label>
              <select
                value={ageGroup}
                onChange={e => setAgeGroup(e.target.value)}
                className="w-full p-2 bg-[#F6F6F6] border border-black/20 text-black text-xs font-mono uppercase"
              >
                <option value="2–3 Tahun">2–3 Tahun (KB Awal)</option>
                <option value="3–4 Tahun">3–4 Tahun (KB)</option>
                <option value="4–5 Tahun">4–5 Tahun (TK A)</option>
                <option value="5–6 Tahun">5–6 Tahun (TK B)</option>
              </select>
            </div>

            <div>
              <label className="block font-bold text-black uppercase text-[10px] mb-1">
                // Tanggal Observasi
              </label>
              <input
                type="date"
                value={date}
                onChange={e => setDate(e.target.value)}
                className="w-full p-2 bg-[#F6F6F6] border border-black/20 text-black text-xs font-mono"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="block font-bold text-black uppercase text-[10px] mb-1">
                // Nama Aktivitas *
              </label>
              <input
                type="text"
                required
                placeholder="Misal: Menelusuri Huruf Raba /b/ & /m/"
                value={activityName}
                onChange={e => setActivityName(e.target.value)}
                className="w-full p-2 bg-[#F6F6F6] border border-black/20 text-black text-xs font-sans focus:outline-none focus:border-black"
              />
            </div>

            <div>
              <label className="block font-bold text-black uppercase text-[10px] mb-1">
                // Material / Media
              </label>
              <input
                type="text"
                placeholder="Misal: Sandpaper Letters, Baki Pasir"
                value={materialUsed}
                onChange={e => setMaterialUsed(e.target.value)}
                className="w-full p-2 bg-[#F6F6F6] border border-black/20 text-black text-xs font-sans focus:outline-none focus:border-black"
              />
            </div>

            {/* Qualitative Notes */}
            <div className="sm:col-span-3">
              <label className="block font-bold text-black uppercase text-[10px] mb-1">
                // 1. Fakta Tindakan Nyata Anak (Gerakan tangan, fokus) *
              </label>
              <textarea
                required
                rows={2}
                placeholder="Deskripsikan fakta objektif apa yang dilakukan tangan dan mata anak..."
                value={childAction}
                onChange={e => setChildAction(e.target.value)}
                className="w-full p-2 bg-[#F6F6F6] border border-black/20 text-black text-xs font-sans focus:outline-none focus:border-black"
              />
            </div>

            <div className="sm:col-span-3">
              <label className="block font-bold text-black uppercase text-[10px] mb-1">
                // 2. Kutipan Lisan Anak (Verbatim Speech)
              </label>
              <textarea
                rows={2}
                placeholder="Tuliskan persis kata-kata atau tiruan bunyi fonik..."
                value={childSpeech}
                onChange={e => setChildSpeech(e.target.value)}
                className="w-full p-2 bg-[#F6F6F6] border border-black/20 text-black text-xs font-sans focus:outline-none focus:border-black"
              />
            </div>

            <div className="sm:col-span-3">
              <label className="block font-bold text-black uppercase text-[10px] mb-1">
                // 3. Respon Dukungan Guru (Scaffolding)
              </label>
              <input
                type="text"
                placeholder="Misal: Memberi teladan cara meraba 2 jari perlahan"
                value={teacherSupportGiven}
                onChange={e => setTeacherSupportGiven(e.target.value)}
                className="w-full p-2 bg-[#F6F6F6] border border-black/20 text-black text-xs font-sans focus:outline-none focus:border-black"
              />
            </div>

            <div className="sm:col-span-3">
              <label className="block font-bold text-black uppercase text-[10px] mb-1">
                // 4. Rencana Tindak Lanjut Individual Guru
              </label>
              <input
                type="text"
                placeholder="Misal: Ajak bermain baki pasir besok pagi"
                value={followUpPlan}
                onChange={e => setFollowUpPlan(e.target.value)}
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
              Simpan Observasi
            </button>
          </div>
        </form>
      )}

      {/* SAVED OBSERVATIONS LIST */}
      <div className="space-y-4">
        <div className="flex items-center justify-between text-xs font-mono text-black/60 uppercase">
          <span>// Total {progress.savedObservations.length} Catatan Tersimpan</span>
          <span>Tersimpan di Browser Guru (Aman & Privat)</span>
        </div>

        {progress.savedObservations.length === 0 ? (
          <div className="bg-white p-12 border border-black/15 text-center text-black/60 space-y-3">
            <ClipboardCheck className="w-10 h-10 mx-auto text-black/30 stroke-1" />
            <p className="text-xs font-mono font-bold uppercase text-black">Belum ada catatan observasi</p>
            <p className="text-xs text-black/60 max-w-sm mx-auto font-sans">
              Klik tombol "Catat Observasi Baru" di atas untuk mulai mendokumentasikan perkembangan bahasa anak.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {progress.savedObservations.map((obs) => (
              <div
                key={obs.id}
                className="bg-white border border-black/15 p-6 space-y-4 relative flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-start justify-between gap-2 border-b border-black/10 pb-3">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-heading font-bold text-base text-black uppercase">
                          {obs.childIdentifier}
                        </span>
                        <span className="text-[9px] font-mono font-bold px-2 py-0.2 bg-black text-white uppercase">
                          {obs.ageGroup}
                        </span>
                      </div>
                      <span className="text-[10px] font-mono text-black/50 flex items-center gap-1 mt-0.5">
                        <Calendar className="w-3 h-3" />
                        {obs.date}
                      </span>
                    </div>
                    <button
                      onClick={() => deleteObservation(obs.id)}
                      className="p-1.5 text-black/40 hover:text-black hover:bg-neutral-100 transition-colors"
                      title="Hapus Catatan"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>

                  <div>
                    <h4 className="font-mono font-bold text-xs text-black uppercase">
                      Aktivitas: {obs.activityName}
                    </h4>
                    {obs.materialUsed && (
                      <span className="text-[11px] font-mono text-black/60">
                        Material: {obs.materialUsed}
                      </span>
                    )}
                  </div>

                  <div className="p-3 bg-[#F6F6F6] border border-black/10 text-xs space-y-2 font-sans">
                    <div>
                      <strong className="text-black font-mono text-[10px] uppercase block">// Fakta Tindakan Anak:</strong>
                      <p className="text-black/80 mt-0.5 leading-relaxed">{obs.childAction}</p>
                    </div>
                    {obs.childSpeech && (
                      <div>
                        <strong className="text-black font-mono text-[10px] uppercase block">// Ucapan Lisan Anak:</strong>
                        <p className="text-black/80 italic mt-0.5">"{obs.childSpeech.replace(/"/g, '')}"</p>
                      </div>
                    )}
                  </div>

                  {obs.followUpPlan && (
                    <div className="p-3 bg-white border border-black text-xs text-black font-sans">
                      <strong className="font-mono text-[10px] uppercase block mb-0.5">// Rencana Tindak Lanjut:</strong> {obs.followUpPlan}
                    </div>
                  )}
                </div>

                <div className="pt-2 text-[9px] font-mono text-black/40 border-t border-black/5 uppercase">
                  Dokumentasi Pembelajaran Berpusat pada Anak
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
