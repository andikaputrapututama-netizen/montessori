import React from 'react';
import { useApp } from '../context/AppContext';
import { modulesData } from '../data/modulesData';
import { videosData } from '../data/videosData';
import { BookOpen, CheckCircle, Clock, ArrowRight, Video, Play, ArrowUpRight } from 'lucide-react';

export const ModulesPageView: React.FC = () => {
  const { navigateToLesson, setSelectedModuleId, setSelectedLessonId, setCurrentPage, progress } = useApp();

  const handleOpenModuleVideo = (moduleId: string) => {
    const mod = modulesData.find(m => m.id === moduleId);
    if (mod && mod.lessons[0]) {
      setSelectedModuleId(moduleId);
      setSelectedLessonId(mod.lessons[0].id);
      setCurrentPage('module-detail');
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8">
      {/* Header */}
      <div className="max-w-3xl space-y-3 text-left">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F3EEFF] text-[#6342E8] text-xs font-bold">
          <BookOpen className="w-3.5 h-3.5" />
          <span>8 MODUL LENGKAP DENGAN VIDEO PANDUAN PRAKTIK</span>
        </div>
        <h1 className="font-heading font-extrabold text-2xl sm:text-4xl text-[#1E1B4B] tracking-tight">
          Modul Pembelajaran <span className="text-[#6342E8] font-script italic text-3xl sm:text-5xl">Montessori Bahasa</span>
        </h1>
        <p className="text-xs sm:text-sm text-[#5C5882] leading-relaxed font-sans">
          Setiap modul kini dilengkapi materi intisari pedagogis, contoh kasus riil di kelas, dan <strong>Video Panduan Praktik Eksklusif</strong> beserta kuis analisis observasi guru.
        </p>
      </div>

      {/* Grid of 8 Modules */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {modulesData.map((module) => {
          const completedCount = module.lessons.filter(l => progress.completedLessons.includes(l.id)).length;
          const isAllCompleted = completedCount === module.lessons.length && module.lessons.length > 0;
          const video = videosData.find(v => v.relatedModuleId === module.id);
          const isVideoDone = video ? progress.completedVideoAnalyses.includes(video.id) : false;

          return (
            <div
              key={module.id}
              className={`bg-white rounded-[28px] border ${
                isAllCompleted ? 'border-green-300 ring-2 ring-green-100' : 'border-purple-100/80'
              } flex flex-col justify-between shadow-xs hover:shadow-xl hover:shadow-purple-100/50 transition-all card-playful`}
            >
              <div className="p-6 sm:p-8 space-y-5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#F3EEFF] text-[#6342E8]">
                    Modul {module.number}
                  </span>
                  <div className="flex items-center gap-2 text-xs font-medium text-[#797099]">
                    <span className="flex items-center gap-1 text-[11px] bg-[#FAF8FF] px-2.5 py-1 rounded-full border border-purple-100">
                      <Clock className="w-3 h-3 text-[#6342E8]" />
                      {module.totalDurationMinutes || 45} Menit
                    </span>
                    {isAllCompleted && (
                      <span className="flex items-center gap-1 text-green-700 bg-green-50 px-2.5 py-1 rounded-full font-bold text-[11px] border border-green-200">
                        <CheckCircle className="w-3 h-3" />
                        Selesai
                      </span>
                    )}
                  </div>
                </div>

                <div>
                  <h2 className="font-heading font-extrabold text-lg sm:text-xl text-[#1E1B4B] leading-snug">
                    {module.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-[#5C5882] mt-2 leading-relaxed font-sans">
                    {module.description}
                  </p>
                </div>

                {/* Video Guide Banner on Card */}
                {video && (
                  <div 
                    onClick={() => handleOpenModuleVideo(module.id)}
                    className="p-3.5 rounded-2xl bg-gradient-to-r from-[#FFEBA5]/50 to-[#FAF8FF] border border-[#FFDC73] hover:border-[#6342E8] cursor-pointer transition-all flex items-center justify-between gap-3 group"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-8 h-8 rounded-full bg-[#FFBE2E] group-hover:bg-[#6342E8] group-hover:text-white text-[#1E1B4B] flex items-center justify-center shrink-0 transition-colors shadow-xs">
                        <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-[10px] font-bold text-[#8C5800] uppercase tracking-wider flex items-center gap-1.5">
                          <span>Video Panduan Praktik</span>
                          <span className="text-[#6342E8]">({video.duration})</span>
                        </div>
                        <div className="text-xs font-semibold text-[#1E1B4B] truncate">
                          {video.title.replace(`Video Panduan Modul ${module.number}: `, '')}
                        </div>
                      </div>
                    </div>
                    {isVideoDone ? (
                      <span className="text-[10px] bg-green-100 text-green-800 font-bold px-2 py-0.5 rounded-full shrink-0">
                        ✓ Ditonton
                      </span>
                    ) : (
                      <span className="text-xs font-bold text-[#6342E8] shrink-0 group-hover:translate-x-0.5 transition-transform">
                        Tonton →
                      </span>
                    )}
                  </div>
                )}

                {/* Outcome box */}
                <div className="p-4 bg-[#FAF8FF] rounded-2xl border border-purple-100/80 space-y-1">
                  <div className="text-[10px] font-bold text-[#6342E8] uppercase tracking-wider">
                    Target Kompetensi Guru:
                  </div>
                  <p className="text-xs text-[#1E1B4B] leading-relaxed font-sans">
                    {module.competencyOutcome}
                  </p>
                </div>

                {/* Lessons summary list */}
                <div className="space-y-1.5 pt-1">
                  <div className="text-[10px] font-bold text-[#797099] uppercase tracking-wider">
                    Materi ({module.lessons.length} Topik):
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                    {module.lessons.map((lesson, idx) => {
                      const isDone = progress.completedLessons.includes(lesson.id);
                      return (
                        <div
                          key={lesson.id}
                          onClick={() => navigateToLesson(module.id, lesson.id)}
                          className={`px-3 py-2 rounded-xl text-xs flex items-center justify-between cursor-pointer transition-colors ${
                            isDone 
                              ? 'bg-green-50 text-green-800 font-semibold' 
                              : 'bg-purple-50/50 hover:bg-[#F3EEFF] text-[#1E1B4B]'
                          }`}
                        >
                          <span className="truncate pr-2">{idx + 1}. {lesson.title}</span>
                          {isDone ? (
                            <CheckCircle className="w-3.5 h-3.5 text-green-600 shrink-0" />
                          ) : (
                            <ArrowRight className="w-3 h-3 text-[#6342E8] shrink-0" />
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <button
                  onClick={() => {
                    if (module.lessons[0]) {
                      navigateToLesson(module.id, module.lessons[0].id);
                    }
                  }}
                  className="w-full py-3 bg-[#6342E8] hover:bg-[#5233D8] text-white font-bold text-xs rounded-full shadow-md shadow-purple-200 transition-all flex items-center justify-center gap-2"
                >
                  <span>Buka Modul {module.number} & Video Panduan</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
