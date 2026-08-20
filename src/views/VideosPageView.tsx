import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { videosData } from '../data/videosData';
import { VideoItem } from '../types';
import { 
  Video, 
  Play, 
  Pause,
  Clock, 
  HelpCircle, 
  CheckCircle2, 
  XCircle, 
  Sparkles, 
  Eye, 
  ArrowRight,
  ShieldCheck,
  CheckCircle,
  Volume2,
  VolumeX,
  BookOpen
} from 'lucide-react';

export const VideosPageView: React.FC = () => {
  const { markVideoAnalysisComplete, setSelectedModuleId, setSelectedLessonId, setCurrentPage, progress } = useApp();
  const [activeVideoId, setActiveVideoId] = useState<string>(videosData[0].id);
  const [selectedFilterModule, setSelectedFilterModule] = useState<string>('all');

  const currentVideo = videosData.find(v => v.id === activeVideoId) || videosData[0];

  // Player state
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [currentTimeSec, setCurrentTimeSec] = useState<number>(30);
  const [playbackSpeed, setPlaybackSpeed] = useState<number>(1);
  const [selectedTimestampIndex, setSelectedTimestampIndex] = useState<number>(0);

  // Video Quiz state
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, number>>({});
  const [submittedQuiz, setSubmittedQuiz] = useState<boolean>(false);

  const handleSelectOption = (qId: string, optIdx: number) => {
    if (submittedQuiz) return;
    setSelectedAnswers(prev => ({ ...prev, [qId]: optIdx }));
  };

  const handleSubmitAnalysis = () => {
    setSubmittedQuiz(true);
    markVideoAnalysisComplete(currentVideo.id);
  };

  const isVideoCompleted = progress.completedVideoAnalyses.includes(currentVideo.id);

  const filteredVideos = selectedFilterModule === 'all'
    ? videosData
    : videosData.filter(v => v.relatedModuleId === selectedFilterModule);

  const parseTimeToSeconds = (timeStr: string) => {
    const parts = timeStr.split(':');
    if (parts.length === 2) {
      return parseInt(parts[0], 10) * 60 + parseInt(parts[1], 10);
    }
    return 0;
  };

  const handleJumpToMoment = (timeStr: string, idx: number) => {
    const sec = parseTimeToSeconds(timeStr);
    setCurrentTimeSec(sec);
    setSelectedTimestampIndex(idx);
    setIsPlaying(true);
  };

  const handleGoToModule = (moduleId: string) => {
    setSelectedModuleId(moduleId);
    setCurrentPage('module-detail');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8">
      {/* Header */}
      <div className="max-w-3xl space-y-3 text-left">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F3EEFF] text-[#6342E8] text-xs font-bold">
          <Video className="w-3.5 h-3.5" />
          <span>8 VIDEO PANDUAN PRAKTIK • OBSERVASI GURU</span>
        </div>
        <h1 className="font-heading font-extrabold text-2xl sm:text-4xl text-[#1E1B4B] tracking-tight">
          Pusat Video Panduan <span className="text-[#6342E8] font-script italic text-3xl sm:text-5xl">Praktik Kelas</span>
        </h1>
        <p className="text-xs sm:text-sm text-[#5C5882] leading-relaxed font-sans">
          Amati rekaman peragaan Three-Period Lesson, permainan detektif bunyi lisan, dan penataan sudut bahasa. Uji ketajaman observasi Anda melalui kuis analisis video interaktif di setiap modul.
        </p>
      </div>

      {/* Module Filter Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        <button
          onClick={() => setSelectedFilterModule('all')}
          className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
            selectedFilterModule === 'all'
              ? 'bg-[#6342E8] text-white shadow-xs'
              : 'bg-white text-[#5C5882] hover:bg-purple-50 border border-purple-100'
          }`}
        >
          Semua Modul (8 Video)
        </button>
        {videosData.map((v, i) => (
          <button
            key={v.id}
            onClick={() => {
              setSelectedFilterModule(v.relatedModuleId);
              setActiveVideoId(v.id);
              setSelectedAnswers({});
              setSubmittedQuiz(false);
            }}
            className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
              selectedFilterModule === v.relatedModuleId
                ? 'bg-[#6342E8] text-white shadow-xs'
                : 'bg-white text-[#5C5882] hover:bg-purple-50 border border-purple-100'
            }`}
          >
            Modul {i + 1}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Video Player & Observation Analysis */}
        <div className="lg:col-span-8 space-y-6">
          <div className="bg-white rounded-[32px] border border-purple-100/80 shadow-md overflow-hidden">
            {/* Interactive Video Screen */}
            <div className="relative aspect-video bg-[#1E1B4B] overflow-hidden group">
              <img
                src={currentVideo.thumbnailUrl}
                alt={currentVideo.title}
                className={`w-full h-full object-cover transition-all duration-300 ${
                  isPlaying ? 'opacity-85 scale-105' : 'opacity-70 group-hover:opacity-80'
                }`}
              />

              <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-white text-xs pointer-events-none">
                <span className="px-3 py-1 bg-black/60 backdrop-blur-xs rounded-full font-bold text-[11px] border border-white/20">
                  Modul {currentVideo.moduleNumber || 1} • {currentVideo.category}
                </span>
                <span className="px-3 py-1 bg-[#6342E8]/90 backdrop-blur-xs rounded-full font-bold text-[11px]">
                  {currentVideo.duration}
                </span>
              </div>

              {/* Center Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#FFBE2E] hover:bg-[#FFAE00] text-[#1E1B4B] flex items-center justify-center shadow-xl transition-transform hover:scale-110 active:scale-95"
                >
                  {isPlaying ? (
                    <Pause className="w-8 h-8 fill-current" />
                  ) : (
                    <Play className="w-8 h-8 fill-current ml-1" />
                  )}
                </button>
              </div>

              {/* Bottom Player Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 via-black/50 to-transparent space-y-2 text-white text-xs">
                <div className="flex items-center gap-3">
                  <span className="text-[11px] font-mono opacity-80">
                    {Math.floor(currentTimeSec / 60)}:{(currentTimeSec % 60).toString().padStart(2, '0')}
                  </span>
                  <input
                    type="range"
                    min="0"
                    max="480"
                    value={currentTimeSec}
                    onChange={(e) => setCurrentTimeSec(Number(e.target.value))}
                    className="w-full h-1.5 bg-white/30 rounded-lg appearance-none cursor-pointer accent-[#FFBE2E]"
                  />
                  <span className="text-[11px] font-mono opacity-80">
                    {currentVideo.duration}
                  </span>
                </div>

                <div className="flex items-center justify-between pt-1">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="p-1 hover:text-[#FFBE2E] transition-colors"
                    >
                      {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-current" />}
                    </button>
                    <button
                      onClick={() => setIsMuted(!isMuted)}
                      className="p-1 hover:text-[#FFBE2E] transition-colors"
                    >
                      {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                    </button>
                    <span className="text-[11px] opacity-75 hidden sm:inline">
                      {currentVideo.trainerName || 'Instruktur Montessori PAUD'}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1 bg-white/20 px-2 py-0.5 rounded-full text-[10px] font-bold">
                      <button
                        onClick={() => setPlaybackSpeed(playbackSpeed === 1 ? 1.25 : playbackSpeed === 1.25 ? 1.5 : 1)}
                        className="hover:text-[#FFBE2E]"
                      >
                        {playbackSpeed}x
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Video Meta & Description */}
            <div className="p-6 sm:p-8 space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-purple-100 pb-4">
                <div>
                  <span className="text-[10px] font-bold px-3 py-1 bg-[#F3EEFF] text-[#6342E8] rounded-full">
                    {currentVideo.category}
                  </span>
                  <h2 className="font-heading font-extrabold text-xl sm:text-2xl text-[#1E1B4B] mt-2 leading-snug">
                    {currentVideo.title}
                  </h2>
                </div>

                <div className="flex items-center gap-2">
                  {isVideoCompleted && (
                    <span className="text-xs font-bold text-green-700 bg-green-50 px-3 py-1 rounded-full border border-green-200 flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-green-600" />
                      Analisis Selesai
                    </span>
                  )}
                  <button
                    onClick={() => handleGoToModule(currentVideo.relatedModuleId)}
                    className="px-4 py-1.5 bg-[#F3EEFF] hover:bg-purple-100 text-[#6342E8] font-bold text-xs rounded-full transition-colors flex items-center gap-1"
                  >
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>Buka Teks Modul</span>
                  </button>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#5C5882] leading-relaxed font-sans">
                {currentVideo.description}
              </p>

              {/* Observation Moments */}
              <div className="space-y-3">
                <h4 className="font-heading font-bold text-xs sm:text-sm text-[#6342E8] uppercase tracking-wider flex items-center gap-2">
                  <Eye className="w-4 h-4 text-[#6342E8]" />
                  Momen Kunci Pengamatan (Klik untuk Loncat ke Menit Tersebut):
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {currentVideo.keyObservationMoments.map((moment, idx) => (
                    <div
                      key={idx}
                      onClick={() => handleJumpToMoment(moment.time, idx)}
                      className={`p-3.5 rounded-2xl border cursor-pointer transition-all ${
                        selectedTimestampIndex === idx
                          ? 'bg-[#F3EEFF] border-[#6342E8] shadow-xs'
                          : 'bg-[#FAF8FF] hover:bg-purple-50 border-purple-100'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-mono font-bold text-white bg-[#6342E8] px-2.5 py-0.5 text-[10px] rounded-full">
                          ⏱ {moment.time}
                        </span>
                        {moment.title && (
                          <span className="text-[11px] font-bold text-[#1E1B4B]">
                            {moment.title}
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-[#5C5882] leading-relaxed">
                        {moment.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* INTERACTIVE VIDEO ANALYSIS QUESTIONS */}
          <div className="bg-white rounded-[32px] p-6 sm:p-8 border border-purple-100/80 shadow-xs space-y-6">
            <div className="flex items-center gap-2.5 border-b border-purple-100 pb-4">
              <div className="w-9 h-9 rounded-full bg-[#6342E8] text-white flex items-center justify-center">
                <HelpCircle className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-heading font-extrabold text-base sm:text-lg text-[#1E1B4B]">
                  Kuis Analisis Praktik & Observasi Guru
                </h3>
                <p className="text-xs text-[#797099]">
                  Uji ketajaman observasi Anda terhadap prinsip yang dicontohkan dalam video:
                </p>
              </div>
            </div>

            <div className="space-y-5">
              {currentVideo.analysisQuestions.map((q, qIdx) => {
                const selectedOpt = selectedAnswers[q.id];
                const isCorrect = selectedOpt === q.correctIndex;

                return (
                  <div key={q.id} className="p-5 bg-[#FAF8FF] rounded-2xl border border-purple-100 space-y-3">
                    <div className="flex items-start gap-2.5">
                      <span className="w-5 h-5 rounded-full bg-[#6342E8] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                        {qIdx + 1}
                      </span>
                      <h4 className="font-heading font-bold text-xs sm:text-sm text-[#1E1B4B] leading-snug">
                        {q.question}
                      </h4>
                    </div>

                    <div className="space-y-2 pt-1 pl-7">
                      {q.options.map((opt, optIdx) => {
                        const isThisSelected = selectedOpt === optIdx;
                        let style = 'bg-white hover:bg-purple-50 border-purple-100 text-[#1E1B4B]';

                        if (submittedQuiz) {
                          if (optIdx === q.correctIndex) {
                            style = 'bg-green-100 text-green-900 border-green-300 font-semibold';
                          } else if (isThisSelected && !isCorrect) {
                            style = 'bg-red-50 text-red-700 border-red-200 line-through';
                          }
                        } else if (isThisSelected) {
                          style = 'bg-[#6342E8] text-white border-[#6342E8] font-bold shadow-xs';
                        }

                        return (
                          <div
                            key={optIdx}
                            onClick={() => handleSelectOption(q.id, optIdx)}
                            className={`p-3 rounded-xl border text-xs cursor-pointer transition-all flex items-center justify-between font-sans ${style}`}
                          >
                            <span><strong className="mr-1">{String.fromCharCode(65 + optIdx)}.</strong> {opt}</span>
                            {submittedQuiz && optIdx === q.correctIndex && (
                              <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0 ml-2" />
                            )}
                            {submittedQuiz && isThisSelected && !isCorrect && (
                              <XCircle className="w-4 h-4 text-red-500 shrink-0 ml-2" />
                            )}
                          </div>
                        );
                      })}
                    </div>

                    {submittedQuiz && (
                      <div className="mt-3 p-4 bg-white rounded-xl border border-purple-200 text-xs text-[#1E1B4B] space-y-1">
                        <strong className="text-[#6342E8] block">💡 Ulasan Pedagogis:</strong>
                        <p className="leading-relaxed font-sans">{q.pedagogicalFeedback}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="pt-2 border-t border-purple-100 flex items-center justify-between">
              {!submittedQuiz ? (
                <button
                  onClick={handleSubmitAnalysis}
                  disabled={Object.keys(selectedAnswers).length < currentVideo.analysisQuestions.length}
                  className="px-6 py-3 bg-[#6342E8] hover:bg-[#5233D8] text-white font-bold text-xs rounded-full shadow-md shadow-purple-200 transition-colors disabled:opacity-40"
                >
                  Kirim & Simpan Analisis Video
                </button>
              ) : (
                <span className="text-xs font-bold text-green-700 bg-green-50 px-4 py-2 rounded-full border border-green-200 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600" />
                  Analisis Video Tersimpan di Profil Belajar Anda
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Right: Playlist of All 8 Module Videos */}
        <div className="lg:col-span-4 space-y-5">
          <div className="bg-white rounded-[28px] p-5 sm:p-6 border border-purple-100/80 shadow-xs space-y-4">
            <div>
              <span className="text-[10px] font-bold text-[#6342E8] uppercase tracking-wider block">
                Daftar Video Praktik
              </span>
              <h3 className="font-heading font-extrabold text-base text-[#1E1B4B] mt-1">
                Koleksi 8 Modul Lengkap
              </h3>
            </div>

            <div className="space-y-2 pt-1 border-t border-purple-50">
              {filteredVideos.map((vid, idx) => {
                const isSelected = vid.id === currentVideo.id;
                const isDone = progress.completedVideoAnalyses.includes(vid.id);

                return (
                  <div
                    key={vid.id}
                    onClick={() => {
                      setSelectedAnswers({});
                      setSubmittedQuiz(false);
                      setActiveVideoId(vid.id);
                    }}
                    className={`p-3 rounded-2xl cursor-pointer transition-all border flex items-center gap-3 ${
                      isSelected
                        ? 'bg-[#F3EEFF] text-[#6342E8] border-[#6342E8] font-bold shadow-xs'
                        : 'bg-[#FAF8FF] hover:bg-purple-50 text-[#1E1B4B] border-purple-100/80'
                    }`}
                  >
                    <div className="relative w-16 h-12 rounded-xl overflow-hidden bg-purple-100 shrink-0">
                      <img src={vid.thumbnailUrl} alt={vid.title} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                        <Play className="w-3.5 h-3.5 text-white fill-current" />
                      </div>
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="text-[10px] text-[#797099] font-bold">
                        MODUL {vid.moduleNumber || idx + 1}
                      </div>
                      <h4 className="text-xs font-semibold truncate leading-snug text-[#1E1B4B]">
                        {vid.title.replace(`Video Panduan Modul ${vid.moduleNumber || idx + 1}: `, '')}
                      </h4>
                      <div className="flex items-center gap-2 text-[10px] text-[#797099] mt-0.5">
                        <span>{vid.duration}</span>
                        {isDone && (
                          <span className="font-bold text-green-600 flex items-center gap-0.5">
                            ✓ Selesai
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="p-5 bg-gradient-to-br from-[#FAF8FF] to-[#F3EEFF] rounded-[24px] border border-purple-100 text-xs text-[#5C5882] space-y-2">
            <div className="flex items-center gap-2 font-heading font-bold text-xs text-[#6342E8]">
              <ShieldCheck className="w-4 h-4 text-[#6342E8]" />
              <span>Etika Observasi Kelas PAUD:</span>
            </div>
            <p className="text-xs leading-relaxed font-sans text-[#1E1B4B]">
              Seluruh video peragaan ditujukan untuk studi kasus pedagogis guru. Fokuskan perhatian pada intonasi suara guru, kesederhanaan gerak (*economy of movement*), dan respons alami anak.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
