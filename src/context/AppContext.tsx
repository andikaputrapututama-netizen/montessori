import React, { createContext, useContext, useState, useEffect } from 'react';
import { ChildObservation, TeacherReflection, UserProgress } from '../types';
import { modulesData } from '../data/modulesData';

interface AppContextType {
  currentPage: string;
  setCurrentPage: (page: string) => void;
  selectedModuleId: string | null;
  setSelectedModuleId: (id: string | null) => void;
  selectedLessonId: string | null;
  setSelectedLessonId: (id: string | null) => void;
  selectedMaterialId: string | null;
  setSelectedMaterialId: (id: string | null) => void;
  selectedActivityId: string | null;
  setSelectedActivityId: (id: string | null) => void;
  selectedVideoId: string | null;
  setSelectedVideoId: (id: string | null) => void;
  isSearchOpen: boolean;
  setIsSearchOpen: (open: boolean) => void;
  isAiAssistantOpen: boolean;
  setIsAiAssistantOpen: (open: boolean) => void;
  progress: UserProgress;
  markLessonComplete: (lessonId: string) => void;
  saveQuizScore: (lessonId: string, score: number) => void;
  markCaseStudyComplete: (caseId: string) => void;
  markVideoAnalysisComplete: (videoId: string) => void;
  addObservation: (obs: Omit<ChildObservation, 'id' | 'timestamp'>) => void;
  deleteObservation: (id: string) => void;
  addReflection: (ref: Omit<TeacherReflection, 'id' | 'timestamp'>) => void;
  deleteReflection: (id: string) => void;
  resetProgress: () => void;
  competencyLevel: {
    levelNumber: number;
    title: string;
    description: string;
    percentage: number;
  };
  navigateToLesson: (moduleId: string, lessonId: string) => void;
  navigateToMaterial: (materialId: string) => void;
  navigateToActivity: (activityId: string) => void;
  navigateToVideo: (videoId: string) => void;
}

const STORAGE_KEY = 'montessori_bahasa_progress_v1';

const defaultProgress: UserProgress = {
  completedLessons: ['les-1-1'], // Seed 1 completed lesson for warm onboarding
  completedQuizzes: { 'les-1-1': 100 },
  completedCaseStudies: [],
  completedVideoAnalyses: [],
  savedObservations: [
    {
      id: 'obs-sample-1',
      childIdentifier: 'Ananda R.',
      ageGroup: '4–5 Tahun',
      date: '2026-08-18',
      activityName: 'Menelusuri Huruf Raba /m/ dan /s/',
      materialUsed: 'Sandpaper Letters',
      childAction: 'Menelusuri huruf /m/ dengan 2 jari sebanyak 3 kali secara perlahan dari atas ke bawah. Tersenyum saat merasakan permukaan kasar.',
      childSpeech: '"Ibu guru, ini /m/ seperti mangga ya?"',
      teacherSupportGiven: 'Memvalidasi ucapan anak dengan senyum dan mengulangi artikulasi /m/ secara tenang.',
      childResponseAndInterest: 'Sangat fokus selama 7 menit tanpa terdistraksi.',
      teacherNotes: 'Rian sudah menunjukkan kesiapan menghubungkan sensasi taktil dengan bunyi fonik.',
      followUpPlan: 'Perkenalkan baki pasir untuk latihan pembentukan garis huruf mandiri besok pagi.',
      timestamp: Date.now() - 86400000 * 2
    }
  ],
  savedReflections: [
    {
      id: 'ref-sample-1',
      date: '2026-08-19',
      activityOrTopic: 'Presentasi Three-Period Lesson Miniatur Benda Fonik',
      whatWentWell: 'Anak-anak sangat menikmati Babak 2 saat bermain gerak meletakkan miniatur di atas pangkuan.',
      whatWasChallenging: 'Saya masih sempat tergoda untuk terlalu banyak bicara (*over-explaining*) di Babak 1.',
      childReaction: 'Anak-anak riang dan tidak merasa sedang "dites" atau dihakimi.',
      whatToChange: 'Perlu lebih banyak jeda hening (*mindful silence*) saat memperagakan benda.',
      nextStepToTry: 'Mempersiapkan keranjang baru dengan tema alat transportasi tradisional nusantara.',
      timestamp: Date.now() - 86400000
    }
  ],
  earnedBadges: [
    {
      id: 'badge-1',
      title: 'Pemula Montessori',
      icon: '🌱',
      description: 'Menyelesaikan modul pertama fondasi filosofi Montessori Bahasa.',
      unlockedAt: '2026-08-18'
    }
  ]
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [selectedModuleId, setSelectedModuleId] = useState<string | null>(null);
  const [selectedLessonId, setSelectedLessonId] = useState<string | null>(null);
  const [selectedMaterialId, setSelectedMaterialId] = useState<string | null>(null);
  const [selectedActivityId, setSelectedActivityId] = useState<string | null>(null);
  const [selectedVideoId, setSelectedVideoId] = useState<string | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [isAiAssistantOpen, setIsAiAssistantOpen] = useState<boolean>(false);

  const [progress, setProgress] = useState<UserProgress>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.warn('Failed to load local progress:', e);
    }
    return defaultProgress;
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    } catch (e) {
      console.warn('Failed to save progress to localStorage:', e);
    }
  }, [progress]);

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage, selectedModuleId, selectedLessonId, selectedMaterialId, selectedActivityId, selectedVideoId]);

  const markLessonComplete = (lessonId: string) => {
    setProgress(prev => {
      if (prev.completedLessons.includes(lessonId)) return prev;
      const updatedLessons = [...prev.completedLessons, lessonId];
      
      // Check badges
      const updatedBadges = [...prev.earnedBadges];
      if (updatedLessons.length >= 3 && !updatedBadges.some(b => b.id === 'badge-2')) {
        updatedBadges.push({
          id: 'badge-2',
          title: 'Pembelajar Bahasa',
          icon: '📖',
          description: 'Menyelesaikan 3 pelajaran intisari perkembangan bahasa anak.',
          unlockedAt: new Date().toISOString().split('T')[0]
        });
      }
      if (updatedLessons.length >= 6 && !updatedBadges.some(b => b.id === 'badge-3')) {
        updatedBadges.push({
          id: 'badge-3',
          title: 'Praktisi Kelas',
          icon: '🧑‍🏫',
          description: 'Menyelesaikan lebih dari setengah kurikulum Montessori Bahasa.',
          unlockedAt: new Date().toISOString().split('T')[0]
        });
      }

      return {
        ...prev,
        completedLessons: updatedLessons,
        earnedBadges: updatedBadges
      };
    });
  };

  const saveQuizScore = (lessonId: string, score: number) => {
    setProgress(prev => ({
      ...prev,
      completedQuizzes: {
        ...prev.completedQuizzes,
        [lessonId]: score
      }
    }));
    markLessonComplete(lessonId);
  };

  const markCaseStudyComplete = (caseId: string) => {
    setProgress(prev => {
      if (prev.completedCaseStudies.includes(caseId)) return prev;
      return {
        ...prev,
        completedCaseStudies: [...prev.completedCaseStudies, caseId]
      };
    });
  };

  const markVideoAnalysisComplete = (videoId: string) => {
    setProgress(prev => {
      if (prev.completedVideoAnalyses.includes(videoId)) return prev;
      return {
        ...prev,
        completedVideoAnalyses: [...prev.completedVideoAnalyses, videoId]
      };
    });
  };

  const addObservation = (obs: Omit<ChildObservation, 'id' | 'timestamp'>) => {
    const newObservation: ChildObservation = {
      ...obs,
      id: 'obs-' + Date.now(),
      timestamp: Date.now()
    };
    setProgress(prev => {
      const updatedBadges = [...prev.earnedBadges];
      if (!updatedBadges.some(b => b.id === 'badge-obs')) {
        updatedBadges.push({
          id: 'badge-obs',
          title: 'Pengamat Anak',
          icon: '🔎',
          description: 'Mencatat dokumentasi observasi objektif perkembangan bahasa anak.',
          unlockedAt: new Date().toISOString().split('T')[0]
        });
      }
      return {
        ...prev,
        savedObservations: [newObservation, ...prev.savedObservations],
        earnedBadges: updatedBadges
      };
    });
  };

  const deleteObservation = (id: string) => {
    setProgress(prev => ({
      ...prev,
      savedObservations: prev.savedObservations.filter(o => o.id !== id)
    }));
  };

  const addReflection = (ref: Omit<TeacherReflection, 'id' | 'timestamp'>) => {
    const newReflection: TeacherReflection = {
      ...ref,
      id: 'ref-' + Date.now(),
      timestamp: Date.now()
    };
    setProgress(prev => {
      const updatedBadges = [...prev.earnedBadges];
      if (!updatedBadges.some(b => b.id === 'badge-ref')) {
        updatedBadges.push({
          id: 'badge-ref',
          title: 'Guru Reflektif',
          icon: '💡',
          description: 'Mengisi jurnal siklus refleksi praktik pembelajaran di kelas.',
          unlockedAt: new Date().toISOString().split('T')[0]
        });
      }
      return {
        ...prev,
        savedReflections: [newReflection, ...prev.savedReflections],
        earnedBadges: updatedBadges
      };
    });
  };

  const deleteReflection = (id: string) => {
    setProgress(prev => ({
      ...prev,
      savedReflections: prev.savedReflections.filter(r => r.id !== id)
    }));
  };

  const resetProgress = () => {
    if (window.confirm('Apakah Anda yakin ingin mengatur ulang data progress belajar?')) {
      setProgress(defaultProgress);
    }
  };

  // Calculate Competency Level & percentage
  const totalLessonsCount = modulesData.reduce((acc, m) => acc + m.lessons.length, 0);
  const completedCount = progress.completedLessons.length;
  const rawPercentage = Math.min(100, Math.round((completedCount / (totalLessonsCount || 8)) * 100));

  let competencyLevel = {
    levelNumber: 1,
    title: 'LEVEL 1: MENGENAL',
    description: 'Memahami konsep dasar, filosofi, dan istilah utama Montessori Bahasa.',
    percentage: Math.max(15, rawPercentage)
  };

  if (rawPercentage >= 85 || (completedCount >= 7 && progress.savedReflections.length >= 2)) {
    competencyLevel = {
      levelNumber: 5,
      title: 'LEVEL 5: MENGEMBANGKAN',
      description: 'Mampu merancang, mengevaluasi, dan mengadaptasi praktik Montessori Bahasa secara mandiri.',
      percentage: rawPercentage
    };
  } else if (rawPercentage >= 65 || (completedCount >= 5 && progress.savedObservations.length >= 1)) {
    competencyLevel = {
      levelNumber: 4,
      title: 'LEVEL 4: MENGANALISIS',
      description: 'Mampu menganalisis respons anak dan merefleksikan praktik pengajaran secara mendalam.',
      percentage: rawPercentage
    };
  } else if (rawPercentage >= 40 || completedCount >= 3) {
    competencyLevel = {
      levelNumber: 3,
      title: 'LEVEL 3: MENERAPKAN',
      description: 'Mampu memfasilitasi aktivitas terstruktur di kelas dan mendampingi eksplorasi anak.',
      percentage: rawPercentage
    };
  } else if (rawPercentage >= 20 || completedCount >= 2) {
    competencyLevel = {
      levelNumber: 2,
      title: 'LEVEL 2: MEMAHAMI',
      description: 'Mampu menjelaskan prinsip perkembangan bahasa dan fungsi aneka material Montessori.',
      percentage: rawPercentage
    };
  }

  const navigateToLesson = (moduleId: string, lessonId: string) => {
    setSelectedModuleId(moduleId);
    setSelectedLessonId(lessonId);
    setCurrentPage('module-detail');
  };

  const navigateToMaterial = (materialId: string) => {
    setSelectedMaterialId(materialId);
    setCurrentPage('material-detail');
  };

  const navigateToActivity = (activityId: string) => {
    setSelectedActivityId(activityId);
    setCurrentPage('activity-detail');
  };

  const navigateToVideo = (videoId: string) => {
    setSelectedVideoId(videoId);
    setCurrentPage('video-detail');
  };

  return (
    <AppContext.Provider
      value={{
        currentPage,
        setCurrentPage,
        selectedModuleId,
        setSelectedModuleId,
        selectedLessonId,
        setSelectedLessonId,
        selectedMaterialId,
        setSelectedMaterialId,
        selectedActivityId,
        setSelectedActivityId,
        selectedVideoId,
        setSelectedVideoId,
        isSearchOpen,
        setIsSearchOpen,
        isAiAssistantOpen,
        setIsAiAssistantOpen,
        progress,
        markLessonComplete,
        saveQuizScore,
        markCaseStudyComplete,
        markVideoAnalysisComplete,
        addObservation,
        deleteObservation,
        addReflection,
        deleteReflection,
        resetProgress,
        competencyLevel,
        navigateToLesson,
        navigateToMaterial,
        navigateToActivity,
        navigateToVideo,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
