import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { modulesData } from '../data/modulesData';
import { videosData } from '../data/videosData';
import { 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle2, 
  Clock, 
  HelpCircle, 
  Sparkles, 
  Lightbulb, 
  MessageSquare, 
  CheckCircle,
  XCircle,
  Video,
  Play,
  Pause,
  RotateCcw,
  Volume2,
  VolumeX,
  Maximize2,
  BookOpen,
  Eye,
  Award,
  Share2,
  ArrowUpRight
} from 'lucide-react';

export const ModuleDetailView: React.FC = () => {
  const { 
    selectedModuleId, 
    selectedLessonId, 
    navigateToLesson, 
    setCurrentPage, 
    markLessonComplete, 
    markVideoAnalysisComplete,
    saveQuizScore, 
    progress 
  } = useApp();

  const currentModule = modulesData.find(m => m.id === selectedModuleId) || modulesData[0];
  const currentLesson = currentModule.lessons.find(l => l.id === selectedLessonId) || currentModule.lessons[0];
  const moduleVideo = videosData.find(v => v.relatedModuleId === currentModule.id) || videosData[0];

  // Active Tab: 'lesson' or 'video'
  const [activeTab, setActiveTab] = useState<'lesson' | 'video'>('lesson');

  // Video player state
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [currentTimeSec, setCurrentTimeSec] = useState<number>(45);
  const [playbackSpeed, setPlaybackSpeed] = useState<number>(1);
  const [selectedTimestampIndex, setSelectedTimestampIndex] = useState<number>(0);

  // Lesson Quiz state
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string>>({});
  const [submittedQuiz, setSubmittedQuiz] = useState<boolean>(false);

  // Video Quiz state
  const [videoQuizAnswers, setVideoQuizAnswers] = useState<Record<string, number>>({});
  const [submittedVideoQuiz, setSubmittedVideoQuiz] = useState<boolean>(false);

  const quizList = currentLesson.quiz || currentLesson.quizQuestions || [];

  const handleSelectOption = (questionId: string, optionKey: string) => {
    if (submittedQuiz) return;
    setSelectedAnswers(prev => ({ ...prev, [questionId]: optionKey }));
  };

  const handleQuizSubmit = () => {
    setSubmittedQuiz(true);
    if (quizList.length === 0) return;

    let correctCount = 0;
    quizList.forEach(q => {
      const correctKey = q.correctAnswer || (typeof q.correctIndex === 'number' ? ['A','B','C','D'][q.correctIndex] : 'A');
      if (selectedAnswers[q.id] === correctKey) {
        correctCount++;
      }
    });
    const finalScore = Math.round((correctCount / quizList.length) * 100);
    saveQuizScore(currentLesson.id, finalScore);
  };

  const handleSelectVideoOption = (qId: string, optIdx: number) => {
    if (submittedVideoQuiz) return;
    setVideoQuizAnswers(prev => ({ ...prev, [qId]: optIdx }));
  };

  const handleVideoQuizSubmit = () => {
    setSubmittedVideoQuiz(true);
    markVideoAnalysisComplete(moduleVideo.id);
  };

  const isLessonFinished = progress.completedLessons.includes(currentLesson.id);
  const isVideoFinished = progress.completedVideoAnalyses.includes(moduleVideo.id);

  // Parse time MM:SS to seconds
  const parseTimeToSeconds = (timeStr: string) => {
    const parts = timeStr.split(':');
    if (parts.length === 2) {
      return parseInt(parts[0], 10) * 60 + parseInt(parts[1], 10);
    }
    return 0;
  };

  const handleJumpToMoment = (timeStr: string, index: number) => {
    const sec = parseTimeToSeconds(timeStr);
    setCurrentTimeSec(sec);
    setSelectedTimestampIndex(index);
    setIsPlaying(true);
  };

  // Find next lesson
  const currentLessonIndex = currentModule.lessons.findIndex(l => l.id === currentLesson.id);
  const nextLesson = currentModule.lessons[currentLessonIndex + 1];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-6">
      {/* Top Breadcrumbs & Back Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 bg-white p-4 sm:p-5 rounded-[24px] border border-purple-100 shadow-xs">
        <button
          onClick={() => setCurrentPage('learn')}
          className="flex items-center gap-2 text-xs font-bold text-[#6342E8] hover:text-[#5233D8] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Kembali ke 8 Modul</span>
        </button>

        <div className="flex items-center gap-2 text-xs text-[#797099]">
          <span className="font-bold text-[#1E1B4B] bg-[#F3EEFF] px-2.5 py-1 rounded-full text-[11px]">
            Modul {currentModule.number}
          </span>
          <span>/</span>
          <span className="truncate max-w-[200px] sm:max-w-none text-[#1E1B4B] font-semibold">
            {currentModule.title}
          </span>
        </div>

        {/* Quick Tab Switcher */}
        <div className="flex items-center gap-1.5 bg-[#FAF8FF] p-1 rounded-full border border-purple-100">
          <button
            onClick={() => setActiveTab('lesson')}
            className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
              activeTab === 'lesson'
                ? 'bg-[#6342E8] text-white shadow-xs'
                : 'text-[#5C5882] hover:text-[#1E1B4B]'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Materi Pelajaran ({currentModule.lessons.length})</span>
          </button>
          <button
            onClick={() => setActiveTab('video')}
            className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold transition-all relative ${
              activeTab === 'video'
                ? 'bg-[#FFBE2E] text-[#6342E8] shadow-xs'
                : 'text-[#5C5882] hover:text-[#1E1B4B]'
            }`}
          >
            <Video className="w-3.5 h-3.5" />
            <span>Video Panduan</span>
            {isVideoFinished && (
              <span className="w-2 h-2 rounded-full bg-green-500"></span>
            )}
          </button>
        </div>
      </div>

      {/* Main Layout Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Sidebar: Lessons Index & Video Quick Access */}
        <div className="lg:col-span-4 space-y-5">
          {/* Module Overview Card */}
          <div className="bg-white rounded-[28px] border border-purple-100/80 p-5 sm:p-6 space-y-4 shadow-xs">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 bg-[#F3EEFF] text-[#6342E8] rounded-full">
                MODUL {currentModule.number}
              </span>
              <span className="text-xs font-medium text-[#797099] flex items-center gap-1">
                <Clock className="w-3 h-3 text-[#6342E8]" />
                {currentModule.totalDurationMinutes || 45} Menit
              </span>
            </div>

            <div>
              <h3 className="font-heading font-extrabold text-base text-[#1E1B4B] leading-snug">
                {currentModule.title}
              </h3>
              <p className="text-xs text-[#5C5882] mt-1.5 leading-relaxed font-sans">
                {currentModule.subtitle || currentModule.description}
              </p>
            </div>

            {/* Video Guide Banner in Sidebar */}
            <div 
              onClick={() => setActiveTab('video')}
              className={`p-3.5 rounded-2xl border transition-all cursor-pointer flex items-center justify-between gap-3 ${
                activeTab === 'video'
                  ? 'bg-[#6342E8] text-white border-[#6342E8] shadow-md shadow-purple-200'
                  : 'bg-[#FFEBA5]/50 hover:bg-[#FFEBA5] border-[#FFDC73] text-[#8C5800]'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 ${
                  activeTab === 'video' ? 'bg-white text-[#6342E8]' : 'bg-[#FFBE2E] text-white'
                }`}>
                  <Play className="w-4 h-4 fill-current ml-0.5" />
                </div>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-wider">
                    VIDEO PANDUAN MODUL {currentModule.number}
                  </div>
                  <div className="text-xs font-heading font-bold truncate max-w-[170px] sm:max-w-[200px]">
                    {moduleVideo.duration} • Praktik Kelas
                  </div>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 shrink-0" />
            </div>

            {/* Lessons Navigation List */}
            <div className="space-y-1.5 pt-3 border-t border-purple-50">
              <div className="text-[10px] font-bold text-[#797099] uppercase tracking-wider mb-2">
                Daftar Topik Pelajaran:
              </div>
              {currentModule.lessons.map((les, idx) => {
                const isSelected = activeTab === 'lesson' && les.id === currentLesson.id;
                const isDone = progress.completedLessons.includes(les.id);
                const durationText = les.duration || `${les.durationMinutes || 8} Menit`;

                return (
                  <div
                    key={les.id}
                    onClick={() => {
                      setActiveTab('lesson');
                      setSelectedAnswers({});
                      setSubmittedQuiz(false);
                      navigateToLesson(currentModule.id, les.id);
                    }}
                    className={`p-3 rounded-2xl cursor-pointer transition-all border text-left ${
                      isSelected
                        ? 'bg-[#F3EEFF] text-[#6342E8] border-[#6342E8] font-bold shadow-xs'
                        : 'bg-[#FAF8FF] hover:bg-purple-50 text-[#1E1B4B] border-purple-100/60'
                    }`}
                  >
                    <div className="flex items-start gap-2.5">
                      <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5 ${
                        isSelected
                          ? 'bg-[#6342E8] text-white'
                          : isDone
                          ? 'bg-green-600 text-white'
                          : 'bg-purple-200/80 text-[#6342E8]'
                      }`}>
                        {isDone ? '✓' : idx + 1}
                      </span>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-xs font-semibold truncate leading-snug">
                          {les.title}
                        </h4>
                        <span className="text-[10px] text-[#797099]">
                          {durationText}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Target Outcome Card */}
            <div className="p-4 bg-[#FAF8FF] rounded-2xl border border-purple-100 space-y-1 text-xs">
              <span className="text-[10px] font-bold text-[#6342E8] uppercase tracking-wider block">
                Target Capaian Guru:
              </span>
              <p className="text-[#5C5882] leading-relaxed font-sans">
                {currentModule.competencyOutcome || currentModule.description}
              </p>
            </div>
          </div>
        </div>

        {/* Right Main Content Panel */}
        <div className="lg:col-span-8 space-y-6">
          {/* TAB 1: VIDEO PANDUAN VIEW */}
          {activeTab === 'video' ? (
            <div className="space-y-6 animate-in fade-in duration-200">
              {/* Video Player Box */}
              <div className="bg-white rounded-[32px] border border-purple-100/80 shadow-md overflow-hidden space-y-0">
                {/* Simulated / Interactive Player Canvas */}
                <div className="relative aspect-video bg-[#1E1B4B] overflow-hidden group">
                  <img
                    src={moduleVideo.thumbnailUrl}
                    alt={moduleVideo.title}
                    className={`w-full h-full object-cover transition-all duration-300 ${
                      isPlaying ? 'opacity-85 scale-105 filter brightness-105' : 'opacity-70 group-hover:opacity-80'
                    }`}
                  />

                  {/* Top Video Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-white text-xs pointer-events-none">
                    <span className="px-3 py-1 bg-black/60 backdrop-blur-xs rounded-full font-bold text-[11px] border border-white/20">
                      📹 Video Panduan Modul {currentModule.number}
                    </span>
                    <span className="px-3 py-1 bg-[#6342E8]/90 backdrop-blur-xs rounded-full font-bold text-[11px]">
                      {moduleVideo.category}
                    </span>
                  </div>

                  {/* Center Play/Pause Large Action */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#FFBE2E] hover:bg-[#FFAE00] text-[#1E1B4B] flex items-center justify-center shadow-xl shadow-black/40 transition-transform hover:scale-110 active:scale-95"
                    >
                      {isPlaying ? (
                        <Pause className="w-8 h-8 fill-current" />
                      ) : (
                        <Play className="w-8 h-8 fill-current ml-1" />
                      )}
                    </button>
                  </div>

                  {/* Bottom Video Controls Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 via-black/50 to-transparent space-y-2 text-white text-xs">
                    {/* Progress Slider */}
                    <div className="flex items-center gap-3">
                      <span className="text-[11px] font-mono opacity-80">
                        {Math.floor(currentTimeSec / 60)}:{(currentTimeSec % 60).toString().padStart(2, '0')}
                      </span>
                      <div className="flex-1 relative flex items-center">
                        <input
                          type="range"
                          min="0"
                          max="480"
                          value={currentTimeSec}
                          onChange={(e) => setCurrentTimeSec(Number(e.target.value))}
                          className="w-full h-1.5 bg-white/30 rounded-lg appearance-none cursor-pointer accent-[#FFBE2E]"
                        />
                      </div>
                      <span className="text-[11px] font-mono opacity-80">
                        {moduleVideo.duration}
                      </span>
                    </div>

                    {/* Controls Bar */}
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
                          {moduleVideo.trainerName || 'Instruktur Montessori PAUD'}
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        {/* Speed dropdown */}
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

                {/* Video Info Content */}
                <div className="p-6 sm:p-8 space-y-6">
                  <div className="flex flex-wrap items-center justify-between gap-3 border-b border-purple-100 pb-4">
                    <div>
                      <span className="text-[10px] font-bold px-3 py-1 bg-[#F3EEFF] text-[#6342E8] rounded-full">
                        {moduleVideo.category}
                      </span>
                      <h2 className="font-heading font-extrabold text-xl sm:text-2xl text-[#1E1B4B] mt-2 leading-snug">
                        {moduleVideo.title}
                      </h2>
                    </div>

                    {isVideoFinished && (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-green-50 text-green-700 font-bold text-xs rounded-full border border-green-200">
                        <CheckCircle className="w-3.5 h-3.5 text-green-600" />
                        Analisis Video Selesai
                      </span>
                    )}
                  </div>

                  <p className="text-xs sm:text-sm text-[#5C5882] leading-relaxed font-sans">
                    {moduleVideo.description}
                  </p>

                  {/* Focus Points Checklist */}
                  {moduleVideo.focusPoints && moduleVideo.focusPoints.length > 0 && (
                    <div className="p-5 bg-[#FAF8FF] rounded-2xl border border-purple-100 space-y-3">
                      <h4 className="font-heading font-bold text-xs sm:text-sm text-[#6342E8] flex items-center gap-2 uppercase tracking-wide">
                        <Eye className="w-4 h-4 text-[#6342E8]" />
                        Fokus Observasi Guru pada Video Ini:
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {moduleVideo.focusPoints.map((pt, pIdx) => (
                          <div key={pIdx} className="flex items-start gap-2 text-xs text-[#1E1B4B]">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#6342E8] shrink-0 mt-0.5" />
                            <span>{pt}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Interactive Timestamp Jumpers */}
                  <div className="space-y-3">
                    <h4 className="font-heading font-bold text-sm text-[#1E1B4B] flex items-center gap-2">
                      <Clock className="w-4 h-4 text-[#6342E8]" />
                      Momen Kunci Observasi (Klik Menit untuk Loncat ke Bagian Penting):
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {moduleVideo.keyObservationMoments.map((moment, mIdx) => {
                        const isCurrentActive = selectedTimestampIndex === mIdx;
                        return (
                          <div
                            key={mIdx}
                            onClick={() => handleJumpToMoment(moment.time, mIdx)}
                            className={`p-3.5 rounded-2xl border cursor-pointer transition-all ${
                              isCurrentActive
                                ? 'bg-[#F3EEFF] border-[#6342E8] shadow-xs'
                                : 'bg-[#FAF8FF] hover:bg-purple-50 border-purple-100'
                            }`}
                          >
                            <div className="flex items-center justify-between mb-1">
                              <span className="px-2.5 py-0.5 rounded-full bg-[#6342E8] text-white text-[10px] font-mono font-bold">
                                ⏱ {moment.time}
                              </span>
                              {moment.title && (
                                <span className="text-[11px] font-bold text-[#1E1B4B]">
                                  {moment.title}
                                </span>
                              )}
                            </div>
                            <p className="text-xs text-[#5C5882] mt-1 leading-relaxed">
                              {moment.description}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Transcript Summary */}
                  {moduleVideo.transcriptSummary && moduleVideo.transcriptSummary.length > 0 && (
                    <div className="p-5 bg-amber-50/60 rounded-2xl border border-amber-100 space-y-3">
                      <h4 className="font-heading font-bold text-xs sm:text-sm text-amber-900 flex items-center gap-2 uppercase tracking-wide">
                        <MessageSquare className="w-4 h-4 text-amber-700" />
                        Petikan Dialog & Bahasa Guru di Dalam Video:
                      </h4>
                      <div className="space-y-2">
                        {moduleVideo.transcriptSummary.map((tr, tIdx) => (
                          <div key={tIdx} className="p-3 bg-white rounded-xl border border-amber-100 text-xs flex items-start gap-2">
                            <span className="font-bold text-[#6342E8] shrink-0 font-mono text-[10px] bg-purple-50 px-1.5 py-0.5 rounded-sm">
                              {tr.time}
                            </span>
                            <div>
                              <strong className="text-amber-900 block font-heading">{tr.speaker}:</strong>
                              <span className="text-[#1E1B4B] italic">{tr.text}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Video Pedagogical Quiz */}
                  {moduleVideo.analysisQuestions && moduleVideo.analysisQuestions.length > 0 && (
                    <div className="pt-4 border-t border-purple-100 space-y-5">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-full bg-[#6342E8] text-white flex items-center justify-center">
                          <HelpCircle className="w-4 h-4" />
                        </div>
                        <div>
                          <h3 className="font-heading font-extrabold text-base text-[#1E1B4B]">
                            Kuis Analisis Observasi Video Modul {currentModule.number}
                          </h3>
                          <p className="text-xs text-[#797099]">
                            Uji ketajaman analisis Anda terhadap peragaan video di atas:
                          </p>
                        </div>
                      </div>

                      <div className="space-y-5">
                        {moduleVideo.analysisQuestions.map((vq, vqIdx) => {
                          const userSelected = videoQuizAnswers[vq.id];
                          const isCorrect = userSelected === vq.correctIndex;

                          return (
                            <div key={vq.id} className="p-5 bg-[#FAF8FF] rounded-2xl border border-purple-100 space-y-3">
                              <div className="flex items-start gap-2.5">
                                <span className="w-5 h-5 rounded-full bg-[#6342E8] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                                  {vqIdx + 1}
                                </span>
                                <h4 className="font-heading font-bold text-xs sm:text-sm text-[#1E1B4B] leading-snug">
                                  {vq.question}
                                </h4>
                              </div>

                              {/* Options */}
                              <div className="space-y-2 pt-1 pl-7">
                                {vq.options.map((opt, optIdx) => {
                                  const isSelected = userSelected === optIdx;
                                  let optionStyle = 'bg-white hover:bg-purple-50 border-purple-100 text-[#1E1B4B]';

                                  if (submittedVideoQuiz) {
                                    if (optIdx === vq.correctIndex) {
                                      optionStyle = 'bg-green-100 text-green-900 border-green-300 font-semibold';
                                    } else if (isSelected && !isCorrect) {
                                      optionStyle = 'bg-red-50 text-red-700 border-red-200 line-through';
                                    }
                                  } else if (isSelected) {
                                    optionStyle = 'bg-[#6342E8] text-white border-[#6342E8] font-bold shadow-xs';
                                  }

                                  return (
                                    <div
                                      key={optIdx}
                                      onClick={() => handleSelectVideoOption(vq.id, optIdx)}
                                      className={`p-3 rounded-xl border text-xs cursor-pointer transition-all flex items-center justify-between font-sans ${optionStyle}`}
                                    >
                                      <span>
                                        <strong className="mr-1">{String.fromCharCode(65 + optIdx)}.</strong> {opt}
                                      </span>
                                      {submittedVideoQuiz && optIdx === vq.correctIndex && (
                                        <CheckCircle className="w-4 h-4 text-green-600 shrink-0 ml-2" />
                                      )}
                                      {submittedVideoQuiz && isSelected && !isCorrect && (
                                        <XCircle className="w-4 h-4 text-red-500 shrink-0 ml-2" />
                                      )}
                                    </div>
                                  );
                                })}
                              </div>

                              {/* Feedback rationale */}
                              {submittedVideoQuiz && (
                                <div className="mt-3 p-3.5 bg-white rounded-xl border border-purple-200 text-xs space-y-1">
                                  <strong className="text-[#6342E8] block">💡 Ulasan Pedagogis:</strong>
                                  <p className="text-[#1E1B4B] leading-relaxed">{vq.pedagogicalFeedback}</p>
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>

                      {/* Video Quiz Submit Button */}
                      <div className="pt-2 flex justify-between items-center">
                        {!submittedVideoQuiz ? (
                          <button
                            onClick={handleVideoQuizSubmit}
                            disabled={Object.keys(videoQuizAnswers).length < moduleVideo.analysisQuestions.length}
                            className="px-6 py-3 bg-[#6342E8] hover:bg-[#5233D8] text-white font-bold text-xs rounded-full shadow-md shadow-purple-200 transition-all disabled:opacity-40"
                          >
                            Kirim Jawaban Analisis Video
                          </button>
                        ) : (
                          <span className="text-xs font-bold text-green-700 bg-green-50 px-4 py-2 rounded-full border border-green-200 flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-green-600" />
                            Analisis Video Berhasil Diverifikasi!
                          </span>
                        )}

                        <button
                          onClick={() => setActiveTab('lesson')}
                          className="px-5 py-2.5 bg-[#F3EEFF] text-[#6342E8] hover:bg-purple-100 font-bold text-xs rounded-full transition-colors flex items-center gap-1.5"
                        >
                          <span>Kembali ke Teks Pelajaran</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ) : (
            /* TAB 2: LESSON TEXT READER */
            <div className="space-y-6 animate-in fade-in duration-200">
              {/* Video Quick Callout Box on top of Lesson */}
              <div className="p-4 sm:p-5 bg-gradient-to-r from-[#F3EEFF] to-[#FAF8FF] rounded-[24px] border border-purple-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-xs">
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-2xl bg-[#FFBE2E] text-[#1E1B4B] flex items-center justify-center shrink-0 shadow-sm">
                    <Video className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold text-[#6342E8] uppercase tracking-wider">
                      TERSEDIA VIDEO PANDUAN MODUL {currentModule.number}
                    </div>
                    <h4 className="font-heading font-extrabold text-xs sm:text-sm text-[#1E1B4B]">
                      {moduleVideo.title}
                    </h4>
                  </div>
                </div>

                <button
                  onClick={() => setActiveTab('video')}
                  className="px-4 py-2 bg-[#6342E8] hover:bg-[#5233D8] text-white font-bold text-xs rounded-full shadow-xs transition-all flex items-center gap-1.5 shrink-0 self-end sm:self-center"
                >
                  <Play className="w-3 h-3 fill-current" />
                  <span>Tonton Video ({moduleVideo.duration})</span>
                </button>
              </div>

              {/* Lesson Main Card */}
              <div className="bg-white rounded-[32px] p-6 sm:p-8 border border-purple-100/80 shadow-xs space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-purple-100 pb-4">
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 bg-[#F3EEFF] text-[#6342E8] text-xs font-bold rounded-full">
                      Pelajaran {currentLessonIndex + 1} / {currentModule.lessons.length}
                    </span>
                    <span className="text-xs text-[#797099] flex items-center gap-1 bg-[#FAF8FF] px-2.5 py-1 rounded-full border border-purple-100">
                      <Clock className="w-3.5 h-3.5 text-[#6342E8]" />
                      {currentLesson.duration || `${currentLesson.durationMinutes || 8} Menit`}
                    </span>
                  </div>
                  {isLessonFinished && (
                    <span className="inline-flex items-center gap-1.5 text-green-700 bg-green-50 px-3 py-1 rounded-full text-xs font-bold border border-green-200">
                      <CheckCircle2 className="w-3.5 h-3.5 text-green-600" />
                      Selesai Dipelajari
                    </span>
                  )}
                </div>

                <h1 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#1E1B4B] leading-snug">
                  {currentLesson.title}
                </h1>

                {/* Learning Objectives Checklist */}
                <div className="p-5 bg-[#FAF8FF] rounded-2xl border border-purple-100 space-y-2.5">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#6342E8] flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#6342E8]" />
                    Tujuan Pembelajaran Khusus:
                  </h4>
                  <ul className="space-y-1.5 text-xs sm:text-sm text-[#1E1B4B] font-sans">
                    {currentLesson.learningObjectives.map((obj, oIdx) => (
                      <li key={oIdx} className="flex items-start gap-2">
                        <span className="text-[#6342E8] font-bold">•</span>
                        <span>{obj}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Main Content Markdown / Text Body */}
                <div className="space-y-4 text-xs sm:text-sm text-[#5C5882] leading-relaxed font-sans">
                  <div className="whitespace-pre-line space-y-3">
                    {currentLesson.contentMarkdown || currentLesson.content || ''}
                  </div>
                </div>

                {/* Practical Example Box */}
                <div className="p-5 bg-[#F3EEFF] rounded-2xl border border-purple-200 space-y-2">
                  <div className="flex items-center gap-2 text-[#6342E8] font-heading font-bold text-xs sm:text-sm">
                    <Sparkles className="w-4 h-4 text-[#6342E8]" />
                    <span>Contoh Praktik di Ruang Kelas:</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#1E1B4B] leading-relaxed font-sans">
                    {currentLesson.practicalExample}
                  </p>
                </div>

                {/* Tryout in Classroom */}
                {(currentLesson.tryInClassroom || currentLesson.classroomTryout) && (
                  <div className="p-5 bg-amber-50/60 rounded-2xl border border-amber-100 space-y-2">
                    <div className="flex items-center gap-2 text-amber-900 font-heading font-bold text-xs sm:text-sm">
                      <Lightbulb className="w-4 h-4 text-amber-700" />
                      <span>Coba Terapkan di Kelas Besok:</span>
                    </div>
                    <p className="text-xs sm:text-sm text-amber-950 leading-relaxed font-sans">
                      {currentLesson.tryInClassroom || currentLesson.classroomTryout}
                    </p>
                  </div>
                )}

                {/* Reflection Prompt */}
                <div className="p-5 bg-[#FAF8FF] rounded-2xl border border-purple-100 space-y-2">
                  <div className="flex items-center gap-2 text-[#6342E8] font-heading font-bold text-xs sm:text-sm">
                    <MessageSquare className="w-4 h-4 text-[#6342E8]" />
                    <span>Pertanyaan Refleksi Pendidik:</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#1E1B4B] italic leading-relaxed font-sans">
                    "{currentLesson.reflectionPrompt}"
                  </p>
                </div>
              </div>

              {/* INTERACTIVE LESSON QUIZ */}
              {quizList.length > 0 && (
                <div className="bg-white rounded-[32px] p-6 sm:p-8 border border-purple-100/80 shadow-xs space-y-6">
                  <div className="flex items-center justify-between border-b border-purple-100 pb-4">
                    <div className="flex items-center gap-2.5">
                      <div className="w-9 h-9 rounded-full bg-[#6342E8] text-white flex items-center justify-center">
                        <HelpCircle className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-heading font-extrabold text-lg text-[#1E1B4B]">
                          Kuis Pemahaman & Refleksi Pedagogis
                        </h3>
                        <p className="text-xs text-[#797099]">
                          Verifikasi pemahaman prinsip dan konteks PAUD Indonesia:
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Questions */}
                  <div className="space-y-6">
                    {quizList.map((q, qIdx) => {
                      const correctKey = q.correctAnswer || (typeof q.correctIndex === 'number' ? ['A','B','C','D'][q.correctIndex] : 'A');
                      const selectedOptKey = selectedAnswers[q.id];
                      const isCorrect = selectedOptKey === correctKey;

                      return (
                        <div key={q.id} className="p-5 bg-[#FAF8FF] rounded-2xl border border-purple-100 space-y-3.5">
                          <div className="flex items-start gap-2.5">
                            <span className="w-5 h-5 rounded-full bg-[#6342E8] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                              {qIdx + 1}
                            </span>
                            <h4 className="font-heading font-bold text-xs sm:text-sm text-[#1E1B4B] leading-snug">
                              {q.question}
                            </h4>
                          </div>

                          {/* Options */}
                          <div className="space-y-2 pt-1 pl-7">
                            {q.options.map((opt, optIdx) => {
                              const optKey = typeof opt === 'string' ? ['A','B','C','D'][optIdx] : opt.key;
                              const optText = typeof opt === 'string' ? opt : opt.text;
                              const isThisSelected = selectedOptKey === optKey;

                              let optionStyle = 'bg-white hover:bg-purple-50 border-purple-100 text-[#1E1B4B]';

                              if (submittedQuiz) {
                                if (optKey === correctKey) {
                                  optionStyle = 'bg-green-100 text-green-900 border-green-300 font-semibold';
                                } else if (isThisSelected && !isCorrect) {
                                  optionStyle = 'bg-red-50 text-red-700 border-red-200 line-through';
                                }
                              } else if (isThisSelected) {
                                optionStyle = 'bg-[#6342E8] text-white border-[#6342E8] font-bold shadow-xs';
                              }

                              return (
                                <div
                                  key={optKey}
                                  onClick={() => handleSelectOption(q.id, optKey)}
                                  className={`p-3 rounded-xl border text-xs cursor-pointer transition-all flex items-center justify-between font-sans ${optionStyle}`}
                                >
                                  <span><strong className="mr-1">{optKey}.</strong> {optText}</span>
                                  {submittedQuiz && optKey === correctKey && (
                                    <CheckCircle className="w-4 h-4 text-green-600 shrink-0 ml-2" />
                                  )}
                                  {submittedQuiz && isThisSelected && !isCorrect && (
                                    <XCircle className="w-4 h-4 text-red-500 shrink-0 ml-2" />
                                  )}
                                </div>
                              );
                            })}
                          </div>

                          {/* Rationale feedback */}
                          {submittedQuiz && (
                            <div className="mt-3 p-4 bg-white rounded-xl border border-purple-200 space-y-2 text-xs animate-in fade-in duration-200">
                              <div className="flex items-start gap-2">
                                <span className="font-bold text-[#6342E8] shrink-0">Penjelasan:</span>
                                <p className="text-[#1E1B4B] font-sans">{q.explanation || q.rationale}</p>
                              </div>
                              {q.montessoriPrinciple && (
                                <div className="flex items-center gap-2 text-[11px] text-[#6342E8] font-bold">
                                  <span>Prinsip Montessori:</span>
                                  <span className="bg-[#F3EEFF] px-2 py-0.5 rounded-full">
                                    {q.montessoriPrinciple}
                                  </span>
                                </div>
                              )}
                              {q.paudContext && (
                                <div className="text-[11px] text-[#5C5882]">
                                  <strong>Konteks PAUD Indonesia:</strong> {q.paudContext}
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>

                  {/* Quiz Submit & Navigation Action Buttons */}
                  <div className="pt-4 border-t border-purple-100 flex flex-wrap items-center justify-between gap-4">
                    {!submittedQuiz ? (
                      <button
                        onClick={handleQuizSubmit}
                        disabled={Object.keys(selectedAnswers).length < quizList.length}
                        className="px-6 py-3 bg-[#6342E8] hover:bg-[#5233D8] text-white font-bold text-xs rounded-full shadow-md shadow-purple-200 transition-all disabled:opacity-40"
                      >
                        Periksa Jawaban Kuis
                      </button>
                    ) : (
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-bold text-green-700 bg-green-50 px-3.5 py-1.5 rounded-full border border-green-200 flex items-center gap-1.5">
                          <CheckCircle2 className="w-4 h-4 text-green-600" />
                          Kuis Terverifikasi
                        </span>
                      </div>
                    )}

                    {/* Next lesson button */}
                    {nextLesson ? (
                      <button
                        onClick={() => {
                          markLessonComplete(currentLesson.id);
                          setSelectedAnswers({});
                          setSubmittedQuiz(false);
                          navigateToLesson(currentModule.id, nextLesson.id);
                        }}
                        className="px-6 py-3 bg-[#6342E8] hover:bg-[#5233D8] text-white font-bold text-xs rounded-full shadow-md shadow-purple-200 transition-all flex items-center gap-2"
                      >
                        <span>Lanjut: {nextLesson.title}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    ) : (
                      <button
                        onClick={() => {
                          markLessonComplete(currentLesson.id);
                          setCurrentPage('learn');
                        }}
                        className="px-6 py-3 bg-[#FFBE2E] hover:bg-[#FFAE00] text-[#1E1B4B] font-bold text-xs rounded-full shadow-md transition-all flex items-center gap-2"
                      >
                        <CheckCircle className="w-4 h-4 text-[#1E1B4B]" />
                        <span>Selesaikan Seluruh Modul Ini</span>
                      </button>
                    )}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
