import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { materialsData } from '../data/materialsData';
import { MaterialItem } from '../types';
import { 
  Layers, 
  Search, 
  Sparkles, 
  Hammer, 
  Eye, 
  HelpCircle, 
  ArrowRight, 
  X, 
  BookOpen, 
  CheckCircle, 
  MessageSquare,
  AlertCircle,
  ArrowUpRight
} from 'lucide-react';

export const MaterialsPageView: React.FC = () => {
  const { selectedMaterialId, setSelectedMaterialId } = useApp();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Semua');

  const categories = ['Semua', 'Sensori & Fonik', 'Menyusun Kata & Menulis', 'Kosakata & Literasi', 'Pra-Membaca & Fonik', 'Pra-Menulis & Kontrol Pensil', 'Kesadaran Fonologis'];

  const filteredMaterials = materialsData.filter(mat => {
    const matchesQuery = 
      mat.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      mat.originalName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      mat.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
      mat.diyAlternative.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCat = selectedCategory === 'Semua' || mat.category.includes(selectedCategory);
    return matchesQuery && matchesCat;
  });

  const activeMaterial = materialsData.find(m => m.id === selectedMaterialId);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8">
      {/* Header */}
      <div className="max-w-3xl space-y-3 text-left">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FFEBA5] text-[#8C5800] text-xs font-bold">
          <Layers className="w-3.5 h-3.5" />
          <span>PERPUSTAKAAN MATERIAL & DIY</span>
        </div>
        <h1 className="font-heading font-extrabold text-2xl sm:text-4xl text-[#1E1B4B] tracking-tight">
          Material & Aparatus <span className="text-[#6342E8] font-script italic text-3xl sm:text-5xl">Montessori</span>
        </h1>
        <p className="text-xs sm:text-sm text-[#5C5882] leading-relaxed font-sans">
          Ketahui tujuan langsung dan tidak langsung, panduan presentasi, mekanisme kontrol kesalahan (*control of error*), serta panduan membuat versi alternatif bahan lokal (DIY) yang ramah anggaran.
        </p>
      </div>

      {/* Search and Category Filter Bar */}
      <div className="bg-white p-5 rounded-[28px] border border-purple-100 shadow-sm space-y-4">
        <div className="relative">
          <Search className="w-4 h-4 text-[#6342E8] absolute left-4 top-3.5" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Cari material (e.g., Sandpaper Letters, Kartu Nomenklatur, DIY...)"
            className="w-full pl-11 pr-4 py-3 bg-[#FAF8FF] border border-purple-100 rounded-full text-xs sm:text-sm text-[#1E1B4B] placeholder:text-[#8B7BB5] focus:outline-hidden focus:border-[#6342E8] transition-colors"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-4 top-3.5 text-xs text-[#797099] hover:text-[#1E1B4B]"
            >
              Hapus
            </button>
          )}
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap gap-2 pt-1">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
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

      {/* Material Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredMaterials.map((mat) => (
          <div
            key={mat.id}
            onClick={() => setSelectedMaterialId(mat.id)}
            className="bg-white rounded-[28px] border border-purple-100/80 shadow-xs hover:shadow-xl hover:shadow-purple-100/50 flex flex-col justify-between cursor-pointer transition-all card-playful group overflow-hidden"
          >
            <div className="p-6 space-y-4">
              <div className="flex items-start justify-between gap-2">
                <span className="text-[10px] font-bold px-3 py-1 bg-[#F3EEFF] text-[#6342E8] rounded-full">
                  {mat.category}
                </span>
                <span className="text-[11px] font-bold text-[#FFBE2E] bg-amber-50 px-2 py-0.5 rounded-full border border-amber-100">
                  {mat.ageRange}
                </span>
              </div>

              <div>
                <h3 className="font-heading font-extrabold text-lg text-[#1E1B4B] group-hover:text-[#6342E8] transition-colors leading-snug">
                  {mat.name}
                </h3>
                <p className="text-xs text-[#797099] italic mt-0.5 font-sans">
                  {mat.originalName}
                </p>
              </div>

              <p className="text-xs text-[#5C5882] line-clamp-3 leading-relaxed font-sans">
                {mat.shortDescription}
              </p>

              {/* Direct & Indirect aims preview */}
              <div className="space-y-2 pt-2 border-t border-purple-50 text-xs">
                <div className="flex items-start gap-2 text-[#1E1B4B]">
                  <Sparkles className="w-3.5 h-3.5 text-[#6342E8] shrink-0 mt-0.5" />
                  <span className="line-clamp-1"><strong>Tujuan:</strong> {mat.directObjective[0] || 'Stimulasi sensorik'}</span>
                </div>
                <div className="flex items-start gap-2 text-[#797099]">
                  <Hammer className="w-3.5 h-3.5 text-[#FFBE2E] shrink-0 mt-0.5" />
                  <span className="line-clamp-1"><strong>DIY:</strong> {mat.diyAlternative}</span>
                </div>
              </div>
            </div>

            <div className="p-6 pt-0">
              <button
                className="w-full py-2.5 bg-[#FAF8FF] group-hover:bg-[#6342E8] group-hover:text-white text-[#6342E8] font-bold text-xs rounded-full border border-purple-200 transition-all flex items-center justify-center gap-1.5"
              >
                <span>Pelajari Detail & Cara Presentasi</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Detail Material */}
      {activeMaterial && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-[32px] max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 space-y-6 shadow-2xl border border-purple-100 animate-in fade-in zoom-in-95 duration-200">
            {/* Modal Header */}
            <div className="flex items-start justify-between border-b border-purple-100 pb-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-bold px-3 py-1 bg-[#F3EEFF] text-[#6342E8] rounded-full">
                    {activeMaterial.category}
                  </span>
                  <span className="text-[10px] font-bold px-3 py-1 bg-[#FFEBA5] text-[#8C5800] rounded-full">
                    Usia {activeMaterial.ageRange}
                  </span>
                </div>
                <h2 className="font-heading font-extrabold text-2xl text-[#1E1B4B]">
                  {activeMaterial.name}
                </h2>
                <p className="text-xs text-[#797099] italic">{activeMaterial.originalName}</p>
              </div>
              <button
                onClick={() => setSelectedMaterialId(null)}
                className="p-2 text-[#797099] hover:text-[#1E1B4B] rounded-full hover:bg-purple-50 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Content Details */}
            <div className="space-y-6 text-xs sm:text-sm leading-relaxed text-[#5C5882]">
              <div>
                <h4 className="font-heading font-bold text-sm text-[#1E1B4B] mb-1">Deskripsi:</h4>
                <p>{activeMaterial.shortDescription}</p>
              </div>

              {/* Direct and Indirect Objectives */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 bg-[#FAF8FF] rounded-2xl border border-purple-100 space-y-1">
                  <span className="font-bold text-[#6342E8] text-xs block">🎯 Tujuan Langsung (Direct Objective):</span>
                  <ul className="space-y-1 text-[#1E1B4B]">
                    {activeMaterial.directObjective.map((obj, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <CheckCircle className="w-3.5 h-3.5 text-[#6342E8] shrink-0 mt-0.5" />
                        <span>{obj}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-4 bg-[#FAF8FF] rounded-2xl border border-purple-100 space-y-1">
                  <span className="font-bold text-[#6342E8] text-xs block">🌱 Tujuan Tidak Langsung (Indirect Objective):</span>
                  <ul className="space-y-1 text-[#1E1B4B]">
                    {activeMaterial.indirectObjective.map((obj, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="text-[#6342E8] font-bold">•</span>
                        <span>{obj}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Control of error */}
              <div className="p-4 bg-amber-50/60 rounded-2xl border border-amber-100 space-y-1">
                <span className="font-bold text-amber-900 text-xs flex items-center gap-1">
                  <Eye className="w-3.5 h-3.5 text-amber-700" />
                  Kontrol Kesalahan (Control of Error):
                </span>
                <p className="text-amber-950">{activeMaterial.controlOfError}</p>
              </div>

              {/* Presentation Steps */}
              <div className="p-5 bg-white rounded-2xl border border-purple-200 space-y-3">
                <h4 className="font-heading font-bold text-sm text-[#1E1B4B] flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-[#6342E8]" />
                  Langkah-Langkah Presentasi kepada Anak:
                </h4>
                <div className="space-y-2">
                  {activeMaterial.presentationSteps.map((step, idx) => (
                    <div key={idx} className="p-3 bg-[#FAF8FF] rounded-xl border border-purple-100 flex items-start gap-2.5">
                      <span className="w-5 h-5 rounded-full bg-[#6342E8] text-white flex items-center justify-center text-[10px] font-bold shrink-0">
                        {idx + 1}
                      </span>
                      <span className="text-[#1E1B4B]">{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Teacher Language Examples */}
              {activeMaterial.teacherLanguage && activeMaterial.teacherLanguage.length > 0 && (
                <div className="p-4 bg-[#F3EEFF] rounded-2xl border border-purple-200 space-y-2">
                  <span className="font-bold text-[#6342E8] text-xs block">
                    💬 Contoh Bahasa Guru:
                  </span>
                  <ul className="space-y-1 text-[#1E1B4B]">
                    {activeMaterial.teacherLanguage.map((tl, i) => (
                      <li key={i} className="italic bg-white p-2.5 rounded-xl border border-purple-100">
                        "{tl}"
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* DIY Alternative Box */}
              <div className="p-5 bg-[#FFEBA5]/40 rounded-2xl border border-[#FFDC73] space-y-2">
                <h4 className="font-heading font-bold text-sm text-[#8C5800] flex items-center gap-2">
                  <Hammer className="w-4 h-4 text-[#8C5800]" />
                  Alternatif Bahan Lokal Ramah Anggaran (DIY):
                </h4>
                <p className="text-[#5C3D00] leading-relaxed">
                  {activeMaterial.diyAlternative}
                </p>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="flex justify-end pt-4 border-t border-purple-100">
              <button
                onClick={() => setSelectedMaterialId(null)}
                className="px-6 py-2.5 bg-[#6342E8] text-white font-bold text-xs rounded-full hover:bg-[#5233D8] transition-colors"
              >
                Tutup Panduan
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
