export type AgeGroup = 
  | '2–3 Tahun' 
  | '2–4 Tahun' 
  | '3–4 Tahun' 
  | '3–5 Tahun' 
  | '3,5–5 Tahun' 
  | '4–5 Tahun' 
  | '4–6 Tahun' 
  | '4,5–6 Tahun' 
  | '5–6 Tahun' 
  | 'Semua Usia PAUD';

export type DurationCategory = '< 5 menit' | '5–10 menit' | '10–20 menit' | '> 20 menit';
export type DifficultyLevel = 'Pemula' | 'Menengah' | 'Lanjutan';
export type ModuleCategory = 'Fondasi' | 'Bahasa' | 'Lingkungan' | 'Material' | 'Presentasi' | 'Aktivitas' | 'Observasi' | 'Refleksi';

export interface Question {
  id: string;
  question: string;
  options: (string | { key: string; text: string })[];
  correctIndex?: number;
  correctAnswer?: string;
  explanation?: string;
  rationale?: string;
  montessoriPrinciple?: string;
  paudContext?: string;
}

export interface Lesson {
  id: string;
  moduleId: string;
  title: string;
  slug: string;
  durationMinutes?: number;
  duration?: string;
  difficulty?: DifficultyLevel;
  order?: number;
  learningObjectives: string[];
  summary?: string;
  content?: string;
  contentMarkdown?: string;
  practicalExample: string;
  tryInClassroom?: string;
  classroomTryout?: string;
  reflectionPrompt: string;
  quiz?: Question[];
  quizQuestions?: Question[];
}

export interface Module {
  id: string;
  number: number | string;
  title: string;
  slug: string;
  subtitle?: string;
  description: string;
  iconName?: string;
  category?: ModuleCategory;
  competencyOutcome?: string;
  competencyFocus?: string[];
  lessons: Lesson[];
  level?: DifficultyLevel;
  totalDurationMinutes?: number;
  durationMinutes?: number;
}

export interface MaterialItem {
  id: string;
  name: string;
  originalName: string;
  slug: string;
  category: string;
  ageRange: string;
  imageUrl: string;
  shortDescription: string;
  directObjective: string[];
  indirectObjective: string[];
  requiredMaterials?: string[];
  diyAlternative: string;
  preparationSteps?: string[];
  presentationSteps: string[];
  teacherLanguage: string[];
  controlOfError: string;
  extensionActivities: string[];
  commonMistakes?: string[];
  observationGuide: string[];
  reflectionQuestions?: string[];
  references?: string[];
}

export interface ActivityItem {
  id: string;
  title: string;
  slug: string;
  category: 'Pra-Membaca' | 'Kesadaran Fonologis' | 'Kosakata & Percakapan' | 'Pengenalan Huruf' | 'Menyusun Kata' | 'Pra-Menulis' | 'Membaca Lanjutan' | string;
  ageGroup: AgeGroup | string;
  duration: DurationCategory | string;
  durationMinutes?: number;
  difficulty: DifficultyLevel | string;
  materialsNeeded: string[];
  diyAlternative: string;
  learningObjectives: string[];
  preparation?: string[];
  steps: string[];
  teacherLanguageExamples: string[];
  variations?: string[];
  differentiation: {
    support: string;
    challenge: string;
  };
  observationPoints?: string[];
  reflectionPrompt?: string;
  paudIntegrationNotes: string;
}

export interface VideoObservationMoment {
  time: string;
  title?: string;
  description: string;
}

export interface VideoTranscriptItem {
  time: string;
  speaker: string;
  text: string;
}

export interface VideoAnalysisQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  pedagogicalFeedback: string;
}

export interface VideoItem {
  id: string;
  title: string;
  category: string;
  duration: string;
  thumbnailUrl: string;
  youtubeId?: string;
  videoUrl?: string;
  description: string;
  relatedModuleId: string;
  moduleNumber?: number | string;
  trainerName?: string;
  focusPoints?: string[];
  keyObservationMoments: VideoObservationMoment[];
  transcriptSummary?: VideoTranscriptItem[];
  analysisQuestions: VideoAnalysisQuestion[];
}

export interface CaseStudyOption {
  key: string;
  text: string;
  isRecommended: boolean;
  rationale: string;
  montessoriPrinciple: string;
  paudGuidance: string;
}

export interface CaseStudyItem {
  id: string;
  title: string;
  category: string;
  ageGroup: string;
  scenario: string;
  teacherDilemma: string;
  options: CaseStudyOption[];
  closingReflection: string;
  tags?: string[];
}

export interface ResourceItem {
  id: string;
  title: string;
  description: string;
  category: 'Checklist' | 'Template Observasi' | 'Kartu Aktivitas' | 'Panduan Guru' | 'Worksheet' | 'Format Refleksi' | string;
  format: 'PDF' | 'DOCX' | 'Printable Sheet' | string;
  fileSize: string;
  source: string;
  year: number;
  previewUrl?: string;
  isVerified: boolean;
  sampleContentHtml?: string;
}

export interface RegulationItem {
  id: string;
  title: string;
  regulationNumber: string;
  year: number;
  institution: string;
  officialUrl: string;
  publicationDate: string;
  lastVerified: string;
  status: 'Active' | 'Updated' | 'Replaced' | 'Needs Review' | string;
  summary: string;
  relevanceToMontessori: string;
}

export interface ChildObservation {
  id: string;
  childIdentifier: string; // Inisial anak untuk privasi
  ageGroup: AgeGroup | string;
  date: string;
  activityName: string;
  materialUsed: string;
  childAction: string;
  childSpeech: string;
  teacherSupportGiven: string;
  childResponseAndInterest: string;
  teacherNotes: string;
  followUpPlan: string;
  timestamp: number;
}

export interface TeacherReflection {
  id: string;
  date: string;
  activityOrTopic: string;
  whatWentWell: string;
  whatWasChallenging: string;
  childReaction: string;
  whatToChange: string;
  nextStepToTry: string;
  timestamp: number;
}

export interface UserProgress {
  completedLessons: string[];
  completedQuizzes: Record<string, number>; // lessonId -> score
  completedCaseStudies: string[];
  completedVideoAnalyses: string[];
  savedObservations: ChildObservation[];
  savedReflections: TeacherReflection[];
  earnedBadges: {
    id: string;
    title: string;
    icon: string;
    description: string;
    unlockedAt: string;
  }[];
}
