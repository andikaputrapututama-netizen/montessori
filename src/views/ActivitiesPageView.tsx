import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { activitiesData } from '../data/activitiesData';
import { ActivityItem } from '../types';
import { 
  Sparkles, 
  Search, 
  Clock, 
  Filter, 
  MessageSquare, 
  Lightbulb, 
  ArrowRight, 
  X, 
  CheckCircle, 
  Hammer,
  ShieldCheck,
  ArrowUpRight
} from 'lucide-react';

export const ActivitiesPageView: React.FC = () => {
  const { selectedActivityId, setSelectedActivityId } = useApp();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedAge, setSelectedAge] = useState('Semua Usia');
  const [selectedCategory, setSelectedCategory] = useState('Semua Kategori');

  const ageOptions = ['Semua Usia', '2–3 Tahun', '3–4 Tahun', '3–5 Tahun', '4–5 Tahun', '4–6 Tahun', '5–6 Tahun'];
  const categoryOptions = ['Semua Kategori', 'Kosakata & Percakapan', 'Pra-Membaca', 'Kesadaran Fonologis', 'Pengenalan Huruf', 'Menyusun Kata', 'Pra-Menulis', 'Membaca Lanjutan'];

  const filteredActivities = activitiesData.filter(act => {
    const matchesSearch = 
      act.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      act.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      act.learningObjectives.some(o => o.toLowerCase().includes(searchQuery.toLowerCase())) ||
      act.diyAlternative.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesAge = selectedAge === 'Semua Usia' || act.ageGroup.includes(selectedAge.replace('Usia ', ''));
    const matchesCat = selectedCategory === 'Semua Kategori' || act.category === selectedCategory;

    return matchesSearch && matchesAge && matchesCat;
  });

  const activeActivity = activitiesData.find(a => a.id === selectedActivityId);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8">
      {/* Header */}
      <div className="max-w-3xl space-y-3 text-left">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EAE3FF] text-[#6342E8] text-xs font-bold">
          <Sparkles className="w-3.5 h-3.5" />
          <span>20+ PANDUAN PRAKTIK KELAS</span>
        </div>
        <h1 className="font-heading font-extrabold text-2xl sm:text-4xl text-[#1E1B4B] tracking-tight">
          Aktivitas Stimulasi <span className="text-[#6342E8] font-script italic text-3xl sm:text-5xl">Bahasa Bermakna</span>
        </h1>
        <p className="text-xs sm:text-sm text-[#5C5882] leading-relaxed font-sans">
          Panduan langkah demi langkah yang siap diterapkan di ruang kelas PAUD. Lengkap dengan contoh kalimat ramah anak, diferensiasi (bantuan vs tantangan), dan alternatif bahan lokal.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white p-5 rounded-[28px] border border-purple-100 shadow-sm space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
          <div className="md:col-span-6 relative">
            <Search className="w-4 h-4 text-[#6342E8] absolute left-4 top-3.5" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari aktivitas (e.g., Fonik, Kotak Bunyi, Kartu Nama...)"
              className="w-full pl-11 pr-4 py-2.5 bg-[#FAF8FF] border border-purple-100 rounded-full text-xs sm:text-sm text-[#1E1B4B] placeholder:text-[#8B7BB5] focus:outline-hidden focus:border-[#6342E8]"
            />
          </div>

          <div className="md:col-span-3">
            <select
              value={selectedAge}
              onChange={(e) => setSelectedAge(e.target.value)}
              className="w-full px-4 py-2.5 bg-[#FAF8FF] border border-purple-100 rounded-full text-xs sm:text-sm text-[#1E1B4B] focus:outline-hidden focus:border-[#6342E8]"
            >
              {ageOptions.map(age => (
                <option key={age} value={age}>{age}</option>
              ))}
            </select>
          </div>

          <div className="md:col-span-3">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full px-4 py-2.5 bg-[#FAF8FF] border border-purple-100 rounded-full text-xs sm:text-sm text-[#1E1B4B] focus:outline-hidden focus:border-[#6342E8]"
            >
              {categoryOptions.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Quick Filter Tag Pills */}
        <div className="flex flex-wrap gap-2 pt-1">
          {categoryOptions.slice(1, 6).map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(selectedCategory === cat ? 'Semua Kategori' : cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                selectedCategory === cat
                  ? 'bg-[#6342E8] text-white shadow-xs'
                  : 'bg-[#F3EEFF] text-[#5C5882] hover:bg-purple-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Activity Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredActivities.map((act) => (
          <div
            key={act.id}
            onClick={() => setSelectedActivityId(act.id)}
            className="bg-white rounded-[28px] border border-purple-100/80 shadow-xs hover:shadow-xl hover:shadow-purple-100/50 flex flex-col justify-between cursor-pointer transition-all card-playful group overflow-hidden"
          >
            <div className="p-6 space-y-4">
              <div className="flex items-center justify-between gap-2">
                <span className="text-[10px] font-bold px-3 py-1 bg-[#F3EEFF] text-[#6342E8] rounded-full">
                  {act.category}
                </span>
                <span className="text-[11px] font-bold text-[#FFBE2E] bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-100">
                  {act.ageGroup}
                </span>
              </div>

              <div>
                <h3 className="font-heading font-extrabold text-base sm:text-lg text-[#1E1B4B] group-hover:text-[#6342E8] transition-colors leading-snug">
                  {act.title}
                </h3>
                <div className="flex items-center gap-1.5 text-xs text-[#797099] mt-1">
                  <Clock className="w-3 h-3 text-[#6342E8]" />
                  <span>Durasi: {act.duration}</span>
                </div>
              </div>

              {/* Objectives bullet points */}
              <div className="space-y-1 pt-1">
                <div className="text-[10px] font-bold text-[#797099] uppercase">Tujuan Belajar:</div>
                <ul className="text-xs text-[#5C5882] space-y-1">
                  {act.learningObjectives.slice(0, 2).map((obj, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <span className="text-[#6342E8] font-bold">•</span>
                      <span className="line-clamp-1">{obj}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Teacher prompt quote */}
              {act.teacherLanguageExamples && act.teacherLanguageExamples.length > 0 && (
                <div className="p-3 bg-[#FAF8FF] rounded-2xl border border-purple-100/80 text-xs italic text-[#5C5882]">
                  "{act.teacherLanguageExamples[0].slice(0, 80)}..."
                </div>
              )}
            </div>

            <div className="p-6 pt-0">
              <button
                className="w-full py-2.5 bg-[#FAF8FF] group-hover:bg-[#6342E8] group-hover:text-white text-[#6342E8] font-bold text-xs rounded-full border border-purple-200 transition-all flex items-center justify-center gap-1.5"
              >
                <span>Buka Panduan Lengkap</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Activity Detail */}
      {activeActivity && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-[32px] max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 space-y-6 shadow-2xl border border-purple-100 animate-in fade-in zoom-in-95 duration-200">
            {/* Modal Header */}
            <div className="flex items-start justify-between border-b border-purple-100 pb-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-bold px-3 py-1 bg-[#F3EEFF] text-[#6342E8] rounded-full">
                    {activeActivity.category}
                  </span>
                  <span className="text-[10px] font-bold px-3 py-1 bg-[#FFEBA5] text-[#8C5800] rounded-full">
                    {activeActivity.ageGroup}
                  </span>
                  <span className="text-[10px] font-semibold text-[#797099]">
                    ⏱ {activeActivity.duration}
                  </span>
                </div>
                <h2 className="font-heading font-extrabold text-2xl text-[#1E1B4B]">
                  {activeActivity.title}
                </h2>
              </div>
              <button
                onClick={() => setSelectedActivityId(null)}
                className="p-2 text-[#797099] hover:text-[#1E1B4B] rounded-full hover:bg-purple-50 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Content Details */}
            <div className="space-y-6 text-xs sm:text-sm text-[#5C5882] leading-relaxed">
              {/* Objectives & Material */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 bg-[#FAF8FF] rounded-2xl border border-purple-100 space-y-2">
                  <span className="font-bold text-[#6342E8] text-xs block">🎯 Capaian Belajar Anak:</span>
                  <ul className="space-y-1 text-[#1E1B4B]">
                    {activeActivity.learningObjectives.map((o, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <CheckCircle className="w-3.5 h-3.5 text-[#6342E8] shrink-0 mt-0.5" />
                        <span>{o}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-4 bg-[#FAF8FF] rounded-2xl border border-purple-100 space-y-2">
                  <span className="font-bold text-[#6342E8] text-xs block">📦 Material yang Dibutuhkan:</span>
                  <ul className="space-y-1 text-[#1E1B4B]">
                    {activeActivity.materialsNeeded.map((m, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <span className="text-[#6342E8] font-bold">•</span>
                        <span>{m}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Step-by-Step Procedure */}
              <div className="space-y-3">
                <h4 className="font-heading font-bold text-sm text-[#1E1B4B]">
                  Langkah-Langkah Pelaksanaan di Kelas:
                </h4>
                <div className="space-y-2">
                  {activeActivity.steps.map((step, idx) => (
                    <div key={idx} className="p-3.5 bg-[#FAF8FF] rounded-2xl border border-purple-100 flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-[#6342E8] text-white flex items-center justify-center font-bold text-xs shrink-0">
                        {idx + 1}
                      </span>
                      <p className="text-[#1E1B4B]">{step}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Teacher Language Prompts */}
              {activeActivity.teacherLanguageExamples && activeActivity.teacherLanguageExamples.length > 0 && (
                <div className="p-5 bg-[#F3EEFF] rounded-2xl border border-purple-200 space-y-2">
                  <h4 className="font-heading font-bold text-sm text-[#6342E8] flex items-center gap-2">
                    <MessageSquare className="w-4 h-4" />
                    Contoh Kalimat Guru yang Ramah & Menghargai:
                  </h4>
                  <ul className="space-y-1.5 text-xs sm:text-sm text-[#1E1B4B]">
                    {activeActivity.teacherLanguageExamples.map((ex, i) => (
                      <li key={i} className="italic bg-white p-3 rounded-xl border border-purple-100">
                        "{ex}"
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Differentiation */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 bg-amber-50/60 rounded-2xl border border-amber-100 space-y-1">
                  <span className="font-bold text-amber-900 text-xs block">
                    🤝 Dukungan (Bila Anak Ragu / Perlu Bantuan):
                  </span>
                  <p className="text-amber-950">{activeActivity.differentiation.support}</p>
                </div>
                <div className="p-4 bg-purple-50/60 rounded-2xl border border-purple-100 space-y-1">
                  <span className="font-bold text-[#6342E8] text-xs block">
                    🚀 Tantangan Lanjutan (Bila Anak Sangat Mahir):
                  </span>
                  <p className="text-[#1E1B4B]">{activeActivity.differentiation.challenge}</p>
                </div>
              </div>

              {/* DIY Alternative */}
              <div className="p-4 bg-[#FFEBA5]/40 rounded-2xl border border-[#FFDC73] space-y-1">
                <span className="font-bold text-[#8C5800] text-xs flex items-center gap-1">
                  <Hammer className="w-3.5 h-3.5" />
                  Alternatif Bahan DIY Lokal:
                </span>
                <p className="text-[#5C3D00]">{activeActivity.diyAlternative}</p>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="flex justify-end pt-4 border-t border-purple-100">
              <button
                onClick={() => setSelectedActivityId(null)}
                className="px-6 py-2.5 bg-[#6342E8] text-white font-bold text-xs rounded-full hover:bg-[#5233D8] transition-colors"
              >
                Selesai Membaca
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
