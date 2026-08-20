import React from 'react';
import { useApp } from '../context/AppContext';
import { modulesData } from '../data/modulesData';
import { materialsData } from '../data/materialsData';
import { caseStudiesData } from '../data/caseStudiesData';
import { videosData } from '../data/videosData';
import { 
  BookOpen, 
  Layers, 
  Sparkles, 
  HelpCircle, 
  ClipboardCheck, 
  FileText, 
  ArrowRight, 
  CheckCircle2, 
  Clock, 
  HeartHandshake, 
  Compass, 
  Bot,
  Award,
  ArrowUpRight,
  Lightbulb,
  Gamepad2,
  Smile,
  Star,
  Flame,
  Check,
  Video,
  Play
} from 'lucide-react';

export const HomePage: React.FC = () => {
  const { 
    setCurrentPage, 
    navigateToLesson, 
    navigateToMaterial, 
    setIsAiAssistantOpen,
    competencyLevel,
    progress 
  } = useApp();

  const featuredModules = modulesData.slice(0, 4);
  const featuredMaterials = materialsData.slice(0, 4);
  const featuredCaseStudy = caseStudiesData[0];

  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      {/* 1. HERO SECTION (WONDERKIDS STYLE) */}
      <section className="relative overflow-hidden pt-8 pb-12 sm:pt-16 sm:pb-20">
        {/* Floating Decorative Elements */}
        {/* Top-Right Stamp Badge */}
        <div className="hidden lg:flex absolute top-6 right-16 z-10">
          <div className="relative w-24 h-24 rounded-full border-2 border-dashed border-[#6342E8]/40 flex items-center justify-center animate-spin-slow bg-white/60 backdrop-blur-xs">
            <span className="absolute text-[8px] font-bold uppercase tracking-widest text-[#6342E8] rotate-0">WonderKids</span>
            <span className="absolute text-[8px] font-bold uppercase tracking-widest text-[#6342E8] rotate-90">Learning</span>
            <span className="absolute text-[8px] font-bold uppercase tracking-widest text-[#6342E8] rotate-180">Montessori</span>
            <span className="absolute text-[8px] font-bold uppercase tracking-widest text-[#6342E8] rotate-270">Kids PAUD</span>
            <div className="w-8 h-8 rounded-full bg-[#FFBE2E] flex items-center justify-center text-white shadow-xs">
              <Star className="w-4 h-4 fill-white text-white" />
            </div>
          </div>
        </div>

        {/* Floating Kid/Teacher Sticker Avatars */}
        <div className="hidden lg:block absolute left-8 top-12">
          <div className="relative group cursor-pointer">
            <div className="w-16 h-16 rounded-full bg-[#EDE4FF] p-1 border-2 border-white shadow-md overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1544717305-2782549b5136?w=200&auto=format&fit=crop&q=80" 
                alt="Kid learning"
                className="w-full h-full object-cover rounded-full" 
              />
            </div>
            {/* Doodle Arrow */}
            <svg className="w-10 h-10 text-[#6342E8] -rotate-12 mt-1 ml-4 opacity-70" viewBox="0 0 50 50" fill="none">
              <path d="M10 10 Q 30 35 45 40 M 35 42 L 45 40 L 42 30" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>

        <div className="hidden lg:block absolute right-24 top-28">
          <div className="relative group cursor-pointer">
            <div className="w-14 h-14 rounded-full bg-[#FFEBA5] p-1 border-2 border-white shadow-md overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1596495578065-6e0763fa1178?w=200&auto=format&fit=crop&q=80" 
                alt="Happy kid"
                className="w-full h-full object-cover rounded-full" 
              />
            </div>
            <span className="absolute -bottom-2 -right-1 bg-[#FF6B6B] text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-xs">
              ★ Seru!
            </span>
          </div>
        </div>

        {/* Concentric Circle Doodle on Left */}
        <div className="hidden md:block absolute left-12 bottom-12 opacity-60">
          <div className="w-20 h-20 rounded-full border-4 border-[#C7B6FC] flex items-center justify-center">
            <div className="w-14 h-14 rounded-full border-4 border-[#C7B6FC] flex items-center justify-center">
              <div className="w-8 h-8 rounded-full border-4 border-[#C7B6FC]"></div>
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          {/* Top Pill Tag */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-purple-200/80 shadow-xs text-xs font-semibold text-[#6342E8]">
            <Sparkles className="w-4 h-4 text-[#FFBE2E] fill-[#FFBE2E]" />
            <span>Platform Pembelajaran Montessori Bahasa PAUD Indonesia</span>
          </div>

          {/* Main Headline (WonderKids Display typography) */}
          <h1 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl text-[#1E1B4B] tracking-tight leading-[1.18] max-w-4xl mx-auto">
            The best place to <br />
            <span className="text-[#6342E8] font-script italic text-4xl sm:text-6xl lg:text-7xl underline decoration-wavy decoration-[#FFBE2E] underline-offset-8 inline-block px-1">
              belajar
            </span>{' '}
            and{' '}
            <span className="text-[#FFBE2E] font-script italic text-4xl sm:text-6xl lg:text-7xl relative inline-block px-1">
              bermain
            </span>{' '}
            for kids
          </h1>

          {/* Sub-headline */}
          <p className="text-sm sm:text-base text-[#5C5882] leading-relaxed max-w-2xl mx-auto font-sans">
            Temukan ribuan panduan aktivitas interaktif, 8 modul kurikulum Montessori Bahasa, serta cara stimulasi fonik alami yang menyenangkan untuk mendukung tumbuh kembang anak usia dini.
          </p>

          {/* CTA Button (Large Purple Pill) */}
          <div className="flex flex-wrap items-center justify-center gap-3.5 pt-4">
            <button
              onClick={() => setCurrentPage('learn')}
              id="hero-btn-get-started"
              className="flex items-center gap-3 px-8 py-4 bg-[#6342E8] hover:bg-[#5233D8] text-white text-sm font-bold rounded-full shadow-lg shadow-purple-300/60 transition-all hover:scale-105 active:scale-95 group"
            >
              <span>Mulai Belajar Sekarang</span>
              <span className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                <ArrowUpRight className="w-4 h-4" />
              </span>
            </button>

            <button
              onClick={() => setCurrentPage('materials')}
              id="hero-btn-materials"
              className="flex items-center gap-2 px-6 py-4 bg-white hover:bg-purple-50 text-[#1E1B4B] text-sm font-bold rounded-full border border-purple-200 shadow-xs transition-all"
            >
              <Layers className="w-4 h-4 text-[#6342E8]" />
              <span>Eksplorasi Material</span>
            </button>

            <button
              onClick={() => setIsAiAssistantOpen(true)}
              id="hero-btn-ai"
              className="flex items-center gap-2 px-5 py-4 bg-[#F3EEFF] hover:bg-[#EAE3FF] text-[#6342E8] text-sm font-semibold rounded-full border border-purple-200 shadow-xs transition-all"
            >
              <Bot className="w-4 h-4 text-[#6342E8]" />
              <span>Tanya AI Guru</span>
            </button>
          </div>

          {/* Floating Pill Tags under Hero */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 pt-4 text-xs font-semibold">
            <span className="px-3.5 py-1 rounded-full bg-[#EAE3FF] text-[#6342E8] -rotate-2">
              #ceria
            </span>
            <span className="px-3.5 py-1 rounded-full bg-[#FFEBA5] text-[#8C5800] rotate-2">
              #bebas_tekanan
            </span>
            <span className="px-3.5 py-1 rounded-full bg-[#6342E8] text-white -rotate-1">
              #fonik_alami
            </span>
            <span className="px-3.5 py-1 rounded-full bg-[#FFD6D6] text-[#C92A2A] rotate-1">
              #ramah_anak
            </span>
          </div>
        </div>
      </section>

      {/* 2. OUR INTERACTIVE FEATURES SECTION (3 ICONIC WONDERKIDS CARDS) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 bg-[#F3EEFF] text-[#6342E8] text-xs font-bold rounded-full">
                Fitur Unggulan
              </span>
            </div>
            <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-[#1E1B4B] tracking-tight">
              Our <span className="text-[#6342E8] font-script italic text-3xl sm:text-5xl">interactive</span> features
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-[#EAE3FF] text-[#6342E8] text-xs font-bold -rotate-3">
              #funny
            </span>
            <span className="px-3 py-1 rounded-full bg-[#FFEBA5] text-[#8C5800] text-xs font-bold rotate-2">
              #enjoy
            </span>
            <span className="px-3 py-1 rounded-full bg-[#6342E8] text-white text-xs font-bold -rotate-1">
              #happy
            </span>
          </div>
        </div>

        {/* The 3 Iconic Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Lavender Card (Fun Quiz) */}
          <div 
            onClick={() => setCurrentPage('learn')}
            className="bg-[#EDE4FF] p-8 rounded-[32px] border border-[#D5C2FF] flex flex-col justify-between space-y-8 card-playful cursor-pointer group shadow-sm hover:shadow-xl hover:shadow-purple-200/50"
          >
            <div className="flex items-start justify-between">
              {/* Concentric Rings Doodle */}
              <div className="w-12 h-12 rounded-full border-4 border-[#9E80FA] flex items-center justify-center">
                <div className="w-7 h-7 rounded-full border-4 border-[#9E80FA] flex items-center justify-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#6342E8]"></div>
                </div>
              </div>
              <div className="w-10 h-10 rounded-full bg-white/70 flex items-center justify-center text-[#6342E8] group-hover:bg-[#6342E8] group-hover:text-white transition-colors">
                <ArrowUpRight className="w-5 h-5" />
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="font-heading font-extrabold text-2xl text-[#1E1B4B]">
                Fun <br />
                <span className="font-script italic text-3xl text-[#6342E8]">Quiz</span>
              </h3>
              <p className="text-xs sm:text-sm text-[#5C5882] leading-relaxed font-sans">
                Uji pemahaman konsep Montessori dan evaluasi tahapan bahasa anak dengan kuis interaktif yang singkat namun bermakna.
              </p>
            </div>
          </div>

          {/* Card 2: Vibrant Deep Purple Card (Creative Activities) */}
          <div 
            onClick={() => setCurrentPage('activities')}
            className="bg-[#6342E8] text-white p-8 rounded-[32px] flex flex-col justify-between space-y-8 card-playful cursor-pointer group shadow-lg shadow-purple-300/50 hover:shadow-2xl hover:shadow-purple-400/60"
          >
            <div className="flex items-start justify-between">
              {/* Lightbulb in circle + wavy doodle shape */}
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-white">
                <Lightbulb className="w-6 h-6 text-[#FFBE2E]" />
              </div>
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white group-hover:bg-white group-hover:text-[#6342E8] transition-colors">
                <ArrowUpRight className="w-5 h-5" />
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="font-heading font-extrabold text-2xl text-white">
                Creative <br />
                <span className="font-script italic text-3xl text-[#FFBE2E]">Activities</span>
              </h3>
              <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-sans">
                Temukan 20+ panduan aktivitas eksplorasi raba, bunyi fonik, menyusun kata, hingga storytelling tanpa paksaan mekanik.
              </p>
            </div>
          </div>

          {/* Card 3: Sunny Golden Yellow Card (Learn with Games) */}
          <div 
            onClick={() => setCurrentPage('materials')}
            className="bg-[#FFBE2E] text-[#2C1F00] p-8 rounded-[32px] border border-[#F0AC0E] flex flex-col justify-between space-y-8 card-playful cursor-pointer group shadow-sm hover:shadow-xl hover:shadow-amber-200/60"
          >
            <div className="flex items-start justify-between">
              {/* Gamepad / Sparkle Icon */}
              <div className="w-12 h-12 rounded-full bg-white/40 flex items-center justify-center text-[#2C1F00]">
                <Gamepad2 className="w-6 h-6" />
              </div>
              <div className="w-10 h-10 rounded-full bg-white/40 flex items-center justify-center text-[#2C1F00] group-hover:bg-[#2C1F00] group-hover:text-white transition-colors">
                <ArrowUpRight className="w-5 h-5" />
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="font-heading font-extrabold text-2xl text-[#2C1F00]">
                Learn with <br />
                <span className="font-script italic text-3xl text-[#6342E8]">Games</span>
              </h3>
              <p className="text-xs sm:text-sm text-[#4A3800] leading-relaxed font-sans">
                Pelajari 10 material sensorik Montessori dan alternatif DIY lokal terjangkau untuk menghidupkan sudut bahasa kelas Anda.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. ENJOYABLE LEARNING MATERIALS BANNER (TOP-LEFT OF IMAGE) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-[36px] p-8 sm:p-12 border border-purple-100/80 shadow-sm relative overflow-hidden">
          {/* Pastel Blob Accents */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#EDE4FF]/50 rounded-full blur-3xl -z-10"></div>
          <div className="absolute bottom-0 left-0 w-60 h-60 bg-[#FFEBA5]/40 rounded-full blur-3xl -z-10"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFEBA5] text-[#8C5800] text-xs font-bold">
                <Sparkles className="w-3.5 h-3.5 fill-current" />
                <span>Sensori & Bahasa Alami</span>
              </div>

              <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-[#1E1B4B] tracking-tight leading-tight">
                The learning materials provided are{' '}
                <span className="doodle-circle text-[#6342E8] font-script italic text-3xl sm:text-5xl inline-block px-2">
                  enjoyable
                </span>{' '}
                for children
              </h2>

              <p className="text-sm text-[#5C5882] leading-relaxed font-sans max-w-xl">
                Jangan khawatir! Anak-anak akan menikmati proses belajar bahasa dengan penuh rasa ingin tahu melalui material yang ramah rabaan, bertahap, dan mudah dipahami.
              </p>

              <div className="flex items-center gap-4 pt-2">
                <button
                  onClick={() => setCurrentPage('materials')}
                  className="flex items-center gap-2 px-6 py-3 bg-[#6342E8] hover:bg-[#5233D8] text-white text-xs font-bold rounded-full shadow-md shadow-purple-200 transition-all hover:scale-105"
                >
                  <span>Pelajari Selengkapnya</span>
                  <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
                    <ArrowUpRight className="w-3 h-3" />
                  </span>
                </button>

                <button
                  onClick={() => setCurrentPage('observation-journal')}
                  className="px-5 py-3 bg-[#FAF8FF] hover:bg-purple-50 text-[#6342E8] text-xs font-bold rounded-full border border-purple-200 transition-colors"
                >
                  Isi Jurnal Observasi
                </button>
              </div>
            </div>

            {/* Right Graphic: Playful Collage with Kid Avatars */}
            <div className="lg:col-span-5 flex items-center justify-center">
              <div className="relative w-full max-w-sm">
                {/* Main Kid Photo with Lavender Backing */}
                <div className="relative z-10 rounded-[28px] overflow-hidden border-4 border-white shadow-xl bg-white">
                  <img 
                    src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&auto=format&fit=crop&q=80" 
                    alt="Girl holding teddy bear"
                    className="w-full h-64 object-cover" 
                  />
                  <div className="p-4 bg-white flex items-center justify-between">
                    <div>
                      <h4 className="font-heading font-bold text-sm text-[#1E1B4B]">Bahasa Tanpa Tekanan</h4>
                      <p className="text-[11px] text-[#797099]">Stimulasi raba & bunyi fonik</p>
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-[#EAE3FF] text-[#6342E8] text-xs font-bold">
                      100% Alami
                    </span>
                  </div>
                </div>

                {/* Sunburst badge behind */}
                <div className="absolute -top-6 -right-6 w-20 h-20 rounded-full bg-[#FFBE2E] -z-0 flex items-center justify-center text-white font-bold text-xl shadow-md">
                  ☀️
                </div>
                {/* Lilac wavy blob behind */}
                <div className="absolute -bottom-6 -left-6 w-28 h-20 rounded-[20px] bg-[#EDE4FF] -z-0"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. TEACHER / EXPERT CREATIVE LEARNING BANNER (DEEP PURPLE HERO CARD FROM IMAGE) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#6342E8] text-white rounded-[36px] p-8 sm:p-12 shadow-xl shadow-purple-300/40 relative overflow-hidden">
          {/* Decorative Sunburst Badge on Left */}
          <div className="absolute top-8 left-8 w-14 h-14 rounded-full bg-[#FFBE2E] flex items-center justify-center text-2xl shadow-md hidden sm:flex">
            🌟
          </div>

          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-white tracking-tight leading-snug">
              We aim to help children{' '}
              <span className="text-[#FFBE2E] font-script italic text-3xl sm:text-5xl block sm:inline">
                discover the joy of creative learning
              </span>{' '}
              and grow into well-rounded individuals.
            </h2>
            <p className="text-xs sm:text-sm text-purple-100 leading-relaxed font-sans max-w-xl mx-auto">
              Didukung oleh prinsip Montessori otentik dan diselaraskan dengan Capaian Pembelajaran PAUD Kurikulum Merdeka Indonesia.
            </p>
          </div>

          {/* 4 Teacher Avatars Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-10 max-w-4xl mx-auto text-center">
            {/* Teacher 1 */}
            <div className="space-y-3 flex flex-col items-center">
              <div className="w-20 h-20 rounded-full bg-[#FFEBA5] p-1 border-2 border-white shadow-md overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&auto=format&fit=crop&q=80" 
                  alt="Teacher Kristin"
                  className="w-full h-full object-cover rounded-full" 
                />
              </div>
              <div>
                <h4 className="font-heading font-bold text-sm text-white">Kristin Watson</h4>
                <p className="text-[11px] text-purple-200">Fasilitator Montessori</p>
              </div>
            </div>

            {/* Teacher 2 */}
            <div className="space-y-3 flex flex-col items-center">
              <div className="w-20 h-20 rounded-full bg-[#C5F6FA] p-1 border-2 border-white shadow-md overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1580894732415-460d3d5a49c9?w=200&auto=format&fit=crop&q=80" 
                  alt="Teacher Jenny"
                  className="w-full h-full object-cover rounded-full" 
                />
              </div>
              <div>
                <h4 className="font-heading font-bold text-sm text-white">Jenny Wilson</h4>
                <p className="text-[11px] text-purple-200">Guru Praktisi PAUD</p>
              </div>
            </div>

            {/* Teacher 3 */}
            <div className="space-y-3 flex flex-col items-center">
              <div className="w-20 h-20 rounded-full bg-[#FFD8A8] p-1 border-2 border-white shadow-md overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80" 
                  alt="Teacher Jacob"
                  className="w-full h-full object-cover rounded-full" 
                />
              </div>
              <div>
                <h4 className="font-heading font-bold text-sm text-white">Jacob Jones</h4>
                <p className="text-[11px] text-purple-200">Pemerhati Bahasa Anak</p>
              </div>
            </div>

            {/* Teacher 4 */}
            <div className="space-y-3 flex flex-col items-center">
              <div className="w-20 h-20 rounded-full bg-[#EDE4FF] p-1 border-2 border-white shadow-md overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?w=200&auto=format&fit=crop&q=80" 
                  alt="Teacher Savannah"
                  className="w-full h-full object-cover rounded-full" 
                />
              </div>
              <div>
                <h4 className="font-heading font-bold text-sm text-white">Savannah Nguyen</h4>
                <p className="text-[11px] text-purple-200">Konsultan Literasi Dini</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. 8-STEP PEDAGOGICAL ROADMAP (PETA JALAN BAHASA) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
          <div>
            <span className="text-xs font-bold text-[#6342E8] uppercase tracking-wider">
              Tahapan Alami
            </span>
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#1E1B4B]">
              Alur Perkembangan Bahasa Anak Usia Dini
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#5C5882] max-w-md">
            8 langkah bertahap dari pematangan sensori lisan hingga membaca dan mengekspresikan ide secara mandiri.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 text-left">
          {[
            { step: '01', title: 'Fondasi Filosofi', desc: 'Absorbent Mind', id: 'modul-1', color: 'bg-[#EDE4FF] text-[#6342E8]' },
            { step: '02', title: 'Kesadaran Fonik', desc: 'Kepekaan Auditori', id: 'modul-2', color: 'bg-[#FFEBA5] text-[#8C5800]' },
            { step: '03', title: 'Lingkungan Kelas', desc: 'Sudut Bahasa', id: 'modul-3', color: 'bg-[#C5F6FA] text-[#0B7285]' },
            { step: '04', title: 'Kartu Kosakata', desc: 'Klasifikasi Objek', id: 'modul-4', color: 'bg-[#FFD6D6] text-[#C92A2A]' },
            { step: '05', title: 'Huruf Raba', desc: 'Sandpaper Letters', id: 'modul-5', color: 'bg-[#EDE4FF] text-[#6342E8]' },
            { step: '06', title: 'Menyusun Kata', desc: 'Movable Alphabet', id: 'modul-6', color: 'bg-[#FFEBA5] text-[#8C5800]' },
            { step: '07', title: 'Membaca Fonik', desc: 'Reading Cards', id: 'modul-7', color: 'bg-[#C5F6FA] text-[#0B7285]' },
            { step: '08', title: 'Ekspresi Bebas', desc: 'Kemandirian Menulis', id: 'modul-8', color: 'bg-[#FFD6D6] text-[#C92A2A]' },
          ].map((item) => (
            <div
              key={item.step}
              onClick={() => {
                const mod = modulesData.find(m => m.id === item.id);
                if (mod && mod.lessons[0]) {
                  navigateToLesson(mod.id, mod.lessons[0].id);
                }
              }}
              className="p-4 bg-white rounded-2xl border border-purple-100/80 hover:border-[#6342E8] shadow-xs hover:shadow-md cursor-pointer transition-all card-playful flex flex-col justify-between group"
            >
              <div>
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${item.color}`}>
                  Tahap {item.step}
                </span>
                <h4 className="font-heading font-bold text-xs mt-2 text-[#1E1B4B] group-hover:text-[#6342E8] leading-tight">
                  {item.title}
                </h4>
              </div>
              <p className="text-[10px] text-[#797099] mt-2 font-sans">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. MODUL KURIKULUM PILIHAN */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-bold text-[#6342E8] uppercase tracking-wider">
              Kurikulum Mandiri
            </span>
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#1E1B4B]">
              Modul Pembelajaran Guru PAUD
            </h2>
          </div>
          <button
            onClick={() => setCurrentPage('learn')}
            className="flex items-center gap-1.5 text-xs font-bold text-[#6342E8] hover:underline shrink-0"
          >
            <span>Lihat Semua 8 Modul</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredModules.map((mod) => {
            const video = videosData.find(v => v.relatedModuleId === mod.id);
            return (
              <div
                key={mod.id}
                className="bg-white rounded-3xl border border-purple-100/80 shadow-xs hover:shadow-xl hover:shadow-purple-100/50 p-6 flex flex-col justify-between transition-all card-playful group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-[#6342E8] bg-[#F3EEFF] px-2.5 py-1 rounded-full">
                      Modul {mod.number}
                    </span>
                    <span className="text-[#797099] flex items-center gap-1 text-[11px]">
                      <Clock className="w-3 h-3 text-[#6342E8]" />
                      {mod.totalDurationMinutes || 45}m
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-base text-[#1E1B4B] group-hover:text-[#6342E8] leading-snug">
                    {mod.title}
                  </h3>

                  <p className="text-xs text-[#5C5882] line-clamp-2 leading-relaxed font-sans">
                    {mod.description}
                  </p>

                  {video && (
                    <div className="p-2.5 rounded-xl bg-[#FAF8FF] border border-purple-100 flex items-center gap-2 text-[11px] text-[#6342E8] font-bold">
                      <div className="w-5 h-5 rounded-full bg-[#FFBE2E] text-[#1E1B4B] flex items-center justify-center shrink-0">
                        <Play className="w-2.5 h-2.5 fill-current ml-0.5" />
                      </div>
                      <span className="truncate">Video: {video.duration}</span>
                    </div>
                  )}
                </div>

                <div className="pt-4 mt-4 border-t border-purple-50">
                  <button
                    onClick={() => {
                      if (mod.lessons[0]) {
                        navigateToLesson(mod.id, mod.lessons[0].id);
                      }
                    }}
                    className="w-full py-2.5 bg-[#FAF8FF] hover:bg-[#6342E8] hover:text-white text-[#6342E8] font-bold text-xs rounded-full border border-purple-200 transition-all flex items-center justify-center gap-1.5 shadow-xs"
                  >
                    <span>Mulai Belajar</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 7. READ OUR BLOG / INSPIRASI KELAS (BOTTOM-LEFT FROM IMAGE) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-[#1E1B4B] tracking-tight">
              Read our <span className="text-[#6342E8] font-script italic text-3xl sm:text-5xl">blog</span>
            </h2>
            <p className="text-xs sm:text-sm text-[#5C5882] mt-1">
              Inspirasi kegiatan kelas, studi kasus, dan tips praktis bagi pendidik PAUD.
            </p>
          </div>
          <button
            onClick={() => setCurrentPage('resources')}
            className="flex items-center gap-1.5 text-xs font-bold text-[#6342E8] hover:underline shrink-0"
          >
            <span>Semua Artikel</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* 3 Blog Cards as in Image */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Blog 1 */}
          <div 
            onClick={() => setCurrentPage('activities')}
            className="bg-white rounded-[28px] p-4 border border-purple-100/80 shadow-xs hover:shadow-xl hover:shadow-purple-100/50 transition-all card-playful cursor-pointer space-y-4"
          >
            <div className="relative h-48 rounded-[20px] overflow-hidden bg-purple-50">
              <img 
                src="https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=600&auto=format&fit=crop&q=80" 
                alt="Kid learning with games"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" 
              />
              <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-xs text-[#6342E8] text-[10px] font-bold px-2.5 py-1 rounded-full shadow-xs">
                Metode Sensori
              </span>
            </div>
            <div className="p-2 space-y-2">
              <h3 className="font-heading font-bold text-base text-[#1E1B4B] leading-snug">
                Learning with Games? Why not!
              </h3>
              <p className="text-xs text-[#5C5882] leading-relaxed font-sans line-clamp-2">
                Bagaimana aktivitas rabaan huruf dan kartu fonik mengubah pengalaman belajar membaca menjadi hal yang dinanti anak.
              </p>
              <div className="pt-2 flex items-center justify-between text-xs font-bold text-[#6342E8]">
                <span>Read More</span>
                <span className="w-6 h-6 rounded-full bg-[#6342E8] text-white flex items-center justify-center">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          </div>

          {/* Blog 2 */}
          <div 
            onClick={() => setCurrentPage('materials')}
            className="bg-white rounded-[28px] p-4 border border-purple-100/80 shadow-xs hover:shadow-xl hover:shadow-purple-100/50 transition-all card-playful cursor-pointer space-y-4"
          >
            <div className="relative h-48 rounded-[20px] overflow-hidden bg-purple-50">
              <img 
                src="https://images.unsplash.com/photo-1596495578065-6e0763fa1178?w=600&auto=format&fit=crop&q=80" 
                alt="Girl playing with colorful materials"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" 
              />
              <span className="absolute top-3 left-3 bg-[#FFEBA5] text-[#8C5800] text-[10px] font-bold px-2.5 py-1 rounded-full shadow-xs">
                DIY Murah
              </span>
            </div>
            <div className="p-2 space-y-2">
              <h3 className="font-heading font-bold text-base text-[#1E1B4B] leading-snug">
                10 Learning Game Ideas with DIY Materials
              </h3>
              <p className="text-xs text-[#5C5882] leading-relaxed font-sans line-clamp-2">
                Membuat Sandpaper Letters dari amplas bangunan dan kartu nomenklatur bergambar lokal di sekitar sekolah.
              </p>
              <div className="pt-2 flex items-center justify-between text-xs font-bold text-[#6342E8]">
                <span>Read More</span>
                <span className="w-6 h-6 rounded-full bg-[#6342E8] text-white flex items-center justify-center">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          </div>

          {/* Blog 3 */}
          <div 
            onClick={() => setCurrentPage('case-studies')}
            className="bg-white rounded-[28px] p-4 border border-purple-100/80 shadow-xs hover:shadow-xl hover:shadow-purple-100/50 transition-all card-playful cursor-pointer space-y-4"
          >
            <div className="relative h-48 rounded-[20px] overflow-hidden bg-purple-50">
              <img 
                src="https://images.unsplash.com/photo-1544717305-2782549b5136?w=600&auto=format&fit=crop&q=80" 
                alt="Boy excited about learning"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" 
              />
              <span className="absolute top-3 left-3 bg-[#EAE3FF] text-[#6342E8] text-[10px] font-bold px-2.5 py-1 rounded-full shadow-xs">
                Studi Kasus
              </span>
            </div>
            <div className="p-2 space-y-2">
              <h3 className="font-heading font-bold text-base text-[#1E1B4B] leading-snug">
                Fun Activities for Kids: Dilema Transisi PAUD
              </h3>
              <p className="text-xs text-[#5C5882] leading-relaxed font-sans line-clamp-2">
                Menyikapi tuntutan orang tua terhadap calistung tanpa mengorbankan tahapan alami kesiapan belajar anak.
              </p>
              <div className="pt-2 flex items-center justify-between text-xs font-bold text-[#6342E8]">
                <span>Read More</span>
                <span className="w-6 h-6 rounded-full bg-[#6342E8] text-white flex items-center justify-center">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. COMPETENCY & PROGRESS WIDGET BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-[32px] p-6 sm:p-8 border border-purple-100/80 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-[#6342E8]" />
                <span className="font-bold text-xs text-[#6342E8] uppercase tracking-wider">
                  Capaian Portofolio Anda
                </span>
              </div>
              <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-[#1E1B4B]">
                {competencyLevel.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#5C5882] leading-relaxed font-sans">
                {competencyLevel.description}
              </p>

              {/* Progress Bar */}
              <div className="pt-2 space-y-1.5 max-w-lg">
                <div className="w-full bg-[#F3EEFF] h-3 rounded-full overflow-hidden p-0.5">
                  <div 
                    className="bg-[#6342E8] h-full rounded-full transition-all duration-500"
                    style={{ width: `${Math.max(10, competencyLevel.percentage)}%` }}
                  />
                </div>
                <div className="flex justify-between text-[11px] font-semibold text-[#797099]">
                  <span>{progress.completedLessons.length} Modul Selesai</span>
                  <span className="text-[#6342E8] font-bold">{competencyLevel.percentage}% Tercapai</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-2.5">
              <button
                onClick={() => setCurrentPage('dashboard')}
                className="w-full py-3.5 px-6 bg-[#6342E8] hover:bg-[#5233D8] text-white font-bold text-xs rounded-full shadow-md shadow-purple-200 transition-all flex items-center justify-center gap-2"
              >
                <span>Buka Dashboard Guru</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => setCurrentPage('teacher-reflection')}
                className="w-full py-3 px-6 bg-[#FAF8FF] hover:bg-purple-50 text-[#1E1B4B] font-semibold text-xs rounded-full border border-purple-200 transition-all text-center"
              >
                Tulis Refleksi Harian
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
