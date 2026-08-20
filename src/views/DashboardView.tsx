import React from 'react';
import { useApp } from '../context/AppContext';
import { modulesData } from '../data/modulesData';
import { 
  User, 
  Award, 
  BookOpen, 
  ClipboardCheck, 
  FileText, 
  CheckCircle2, 
  Sparkles, 
  RefreshCw, 
  ArrowRight, 
  Download,
  Calendar,
  Layers
} from 'lucide-react';

export const DashboardView: React.FC = () => {
  const { 
    progress, 
    competencyLevel, 
    setCurrentPage, 
    navigateToLesson, 
    resetProgress 
  } = useApp();

  const totalLessons = modulesData.reduce((acc, m) => acc + m.lessons.length, 0);
  const completedLessonsCount = progress.completedLessons.length;

  const competencyLevelsInfo = [
    { lvl: 1, title: 'Level 1: Mengenal', desc: 'Memahami konsep dasar, filosofi, dan istilah utama Montessori Bahasa.' },
    { lvl: 2, title: 'Level 2: Memahami', desc: 'Mampu menjelaskan tahapan perkembangan bahasa dan fungsi aneka material.' },
    { lvl: 3, title: 'Level 3: Menerapkan', desc: 'Mampu memfasilitasi aktivitas terstruktur di kelas dan mendampingi anak.' },
    { lvl: 4, title: 'Level 4: Menganalisis', desc: 'Mampu menganalisis respon anak dan merefleksikan praktik pengajaran.' },
    { lvl: 5, title: 'Level 5: Mengembangkan', desc: 'Mampu merancang, mengevaluasi, dan mengadaptasi praktik mandiri.' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-black/10 pb-6">
        <div className="max-w-3xl space-y-2 text-left">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-black text-white text-[10px] font-mono font-bold uppercase tracking-widest">
            <User className="w-3 h-3" />
            <span>PORTOFOLIO & CAPAIAN BELAJAR PENDIDIK</span>
          </div>
          <h1 className="font-heading font-bold text-2xl sm:text-4xl text-black tracking-tight uppercase">
            Dashboard Kompetensi Guru
          </h1>
          <p className="text-xs sm:text-sm text-black/70 leading-relaxed font-sans">
            Pantau kemajuan penyelesaian modul, lencana penghargaan (*badges*), riwayat jurnal observasi anak, dan catatan refleksi harian Anda.
          </p>
        </div>

        <button
          onClick={resetProgress}
          className="text-xs font-mono text-black/50 hover:text-black flex items-center gap-1.5 underline self-start sm:self-auto uppercase"
        >
          <RefreshCw className="w-3 h-3" />
          <span>Atur Ulang Data Belajar</span>
        </button>
      </div>

      {/* Main Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white p-5 border border-black/15 space-y-2">
          <div className="flex items-center justify-between text-[11px] font-mono text-black/60 uppercase">
            <span className="font-bold">Kemajuan Modul</span>
            <BookOpen className="w-3.5 h-3.5 text-black" />
          </div>
          <div className="text-2xl font-mono font-bold text-black">
            {completedLessonsCount} <span className="text-xs font-normal text-black/40">/ {totalLessons}</span>
          </div>
          <div className="w-full bg-[#F6F6F6] h-1.5 border border-black/10 overflow-hidden">
            <div 
              className="bg-black h-full" 
              style={{ width: `${(completedLessonsCount / totalLessons) * 100}%` }}
            />
          </div>
        </div>

        <div className="bg-white p-5 border border-black/15 space-y-2">
          <div className="flex items-center justify-between text-[11px] font-mono text-black/60 uppercase">
            <span className="font-bold">Kompetensi</span>
            <Award className="w-3.5 h-3.5 text-black" />
          </div>
          <div className="text-xl font-mono font-bold text-black truncate">
            Level {competencyLevel.levelNumber}
          </div>
          <p className="text-[10px] font-mono text-black/50 truncate uppercase">
            {competencyLevel.title.split(':')[1] || competencyLevel.title}
          </p>
        </div>

        <div className="bg-white p-5 border border-black/15 space-y-2">
          <div className="flex items-center justify-between text-[11px] font-mono text-black/60 uppercase">
            <span className="font-bold">Observasi</span>
            <ClipboardCheck className="w-3.5 h-3.5 text-black" />
          </div>
          <div className="text-2xl font-mono font-bold text-black">
            {progress.savedObservations.length}
          </div>
          <p className="text-[10px] font-mono text-black/50 uppercase">Catatan Tersimpan</p>
        </div>

        <div className="bg-white p-5 border border-black/15 space-y-2">
          <div className="flex items-center justify-between text-[11px] font-mono text-black/60 uppercase">
            <span className="font-bold">Refleksi</span>
            <FileText className="w-3.5 h-3.5 text-black" />
          </div>
          <div className="text-2xl font-mono font-bold text-black">
            {progress.savedReflections.length}
          </div>
          <p className="text-[10px] font-mono text-black/50 uppercase">Refleksi Harian</p>
        </div>
      </div>

      {/* COMPETENCY LEVEL CONTINUUM CARD */}
      <div className="bg-white p-6 sm:p-8 border border-black/15 space-y-6">
        <div className="flex items-center justify-between border-b border-black/10 pb-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-black text-white">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-black/50">
                Peringkat Kompetensi Pendidik
              </span>
              <h3 className="font-heading font-bold text-lg text-black uppercase">
                {competencyLevel.title}
              </h3>
            </div>
          </div>
          <span className="text-xs font-mono font-bold text-white bg-black px-3 py-1 uppercase">
            {competencyLevel.percentage}% Tercapai
          </span>
        </div>

        {/* 5 Levels Visual Stepper */}
        <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 pt-2 font-mono">
          {competencyLevelsInfo.map((info) => {
            const isReached = competencyLevel.levelNumber >= info.lvl;
            const isCurrent = competencyLevel.levelNumber === info.lvl;

            return (
              <div
                key={info.lvl}
                className={`p-3.5 border text-xs space-y-2 transition-all ${
                  isCurrent
                    ? 'bg-black text-white border-black'
                    : isReached
                    ? 'bg-white border-black text-black'
                    : 'bg-[#F6F6F6] border-black/15 text-black/40'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className={`font-bold text-[11px] uppercase ${isCurrent ? 'text-white' : isReached ? 'text-black' : 'text-black/40'}`}>
                    Level {info.lvl}
                  </span>
                  {isReached && (
                    <CheckCircle2 className={`w-3.5 h-3.5 ${isCurrent ? 'text-white' : 'text-black'}`} />
                  )}
                </div>
                <h4 className="font-bold text-xs uppercase leading-snug">
                  {info.title.split(':')[1]}
                </h4>
                <p className={`text-[10px] font-sans leading-relaxed ${isCurrent ? 'text-white/80' : isReached ? 'text-black/70' : 'text-black/40'}`}>
                  {info.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* UNLOCKED BADGES */}
      <div className="bg-white p-6 sm:p-8 border border-black/15 space-y-5">
        <h3 className="font-heading font-bold text-base text-black uppercase flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-black" />
          Lencana Capaian Profesional Anda
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {progress.earnedBadges.map((badge) => (
            <div
              key={badge.id}
              className="p-4 bg-[#F6F6F6] border border-black/15 flex items-start gap-3.5"
            >
              <span className="text-2xl p-2 bg-white border border-black/10 shrink-0">
                {badge.icon}
              </span>
              <div>
                <h4 className="font-mono font-bold text-xs text-black uppercase">
                  {badge.title}
                </h4>
                <p className="text-xs text-black/70 font-sans mt-0.5">
                  {badge.description}
                </p>
                <span className="text-[9px] font-mono text-black/40 mt-1 block uppercase">
                  // Dibuka: {badge.unlockedAt}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Action Navigation */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono">
        <div className="p-5 bg-white border border-black/15 flex items-center justify-between">
          <div className="space-y-1">
            <h4 className="font-bold text-xs text-black uppercase">
              Lanjutkan Membaca Modul
            </h4>
            <p className="text-[11px] text-black/60 font-sans">
              Buka kurikulum dan selesaikan kuis pemahaman berikutnya.
            </p>
          </div>
          <button
            onClick={() => setCurrentPage('learn')}
            className="px-3.5 py-2 bg-black hover:bg-neutral-800 text-white text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 transition-colors shrink-0 border border-black"
          >
            <span>Buka Modul</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="p-5 bg-white border border-black/15 flex items-center justify-between">
          <div className="space-y-1">
            <h4 className="font-bold text-xs text-black uppercase">
              Isi Jurnal Observasi Baru
            </h4>
            <p className="text-[11px] text-black/60 font-sans">
              Dokumentasikan interaksi bahasa anak di kelas hari ini.
            </p>
          </div>
          <button
            onClick={() => setCurrentPage('observation-journal')}
            className="px-3.5 py-2 bg-black hover:bg-neutral-800 text-white text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 transition-colors shrink-0 border border-black"
          >
            <span>Buka Jurnal</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
