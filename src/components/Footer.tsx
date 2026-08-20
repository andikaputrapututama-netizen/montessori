import React from 'react';
import { useApp } from '../context/AppContext';
import { ShieldCheck, BookOpen, ExternalLink, Heart, Sparkles, ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  const { setCurrentPage } = useApp();

  return (
    <footer className="bg-white border-t border-purple-100 pt-16 pb-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10 pb-12 border-b border-purple-100">
          {/* Brand & Purpose */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              {/* Playful 4-dot flower logo */}
              <div className="relative w-9 h-9 flex items-center justify-center">
                <span className="absolute w-3.5 h-3.5 rounded-full bg-[#6342E8] top-0 left-0"></span>
                <span className="absolute w-3.5 h-3.5 rounded-full bg-[#FFBE2E] top-0 right-0"></span>
                <span className="absolute w-3.5 h-3.5 rounded-full bg-[#FF6B6B] bottom-0 left-0"></span>
                <span className="absolute w-3.5 h-3.5 rounded-full bg-[#6342E8] bottom-0 right-0"></span>
                <span className="absolute w-2 h-2 rounded-full bg-white"></span>
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-extrabold text-xl text-[#1E1B4B] tracking-tight">
                  Wonder<span className="text-[#6342E8]">Kids</span>
                </span>
                <p className="text-[10px] font-semibold text-[#797099]">Montessori Bahasa PAUD Indonesia</p>
              </div>
            </div>

            <p className="text-xs text-[#5C5882] leading-relaxed max-w-md font-sans">
              Belajar prinsip Montessori Bahasa, stimulasi fonik alami tanpa paksaan calistung mekanik, dan rancang aktivitas bermain yang menyenangkan untuk anak usia dini.
            </p>

            <div className="p-4 bg-[#FAF8FF] rounded-2xl border border-purple-100 text-[11px] text-[#5C5882] leading-relaxed">
              <div className="flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-[#6342E8] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#1E1B4B] font-bold text-xs block mb-0.5">Pernyataan Platform:</strong>
                  <p className="text-[#797099]">
                    Platform belajar mandiri pengembangan kompetensi guru PAUD dan bukan pengganti sertifikasi resmi lembaga akreditasi.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigasi Belajar */}
          <div>
            <h4 className="text-xs font-bold text-[#1E1B4B] mb-4 uppercase tracking-wider">
              Modul & Belajar
            </h4>
            <ul className="space-y-2.5 text-xs text-[#5C5882] font-medium">
              <li>
                <button onClick={() => setCurrentPage('learn')} className="hover:text-[#6342E8] transition-colors text-left">
                  8 Modul Kurikulum Utama
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentPage('materials')} className="hover:text-[#6342E8] transition-colors text-left">
                  Material & Media DIY
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentPage('activities')} className="hover:text-[#6342E8] transition-colors text-left">
                  20+ Panduan Aktivitas
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentPage('case-studies')} className="hover:text-[#6342E8] transition-colors text-left">
                  Studi Kasus Kelas
                </button>
              </li>
            </ul>
          </div>

          {/* Fitur Praktik Guru */}
          <div>
            <h4 className="text-xs font-bold text-[#1E1B4B] mb-4 uppercase tracking-wider">
              Instrumen Guru
            </h4>
            <ul className="space-y-2.5 text-xs text-[#5C5882] font-medium">
              <li>
                <button onClick={() => setCurrentPage('observation-journal')} className="hover:text-[#6342E8] transition-colors text-left">
                  Jurnal Observasi Anak
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentPage('teacher-reflection')} className="hover:text-[#6342E8] transition-colors text-left">
                  Refleksi Harian Guru
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentPage('resources')} className="hover:text-[#6342E8] transition-colors text-left">
                  Format Lembar Kerja & Flashcard
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentPage('dashboard')} className="hover:text-[#6342E8] transition-colors text-left">
                  Dashboard Kompetensi
                </button>
              </li>
            </ul>
          </div>

          {/* Sumber Resmi PAUD Indonesia */}
          <div>
            <h4 className="text-xs font-bold text-[#1E1B4B] mb-4 uppercase tracking-wider">
              Regulasi & Informasi
            </h4>
            <ul className="space-y-2.5 text-xs text-[#5C5882] font-medium">
              <li>
                <a 
                  href="https://kurikulum.kemdikbud.go.id" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-[#6342E8] transition-colors"
                >
                  <span>Kurikulum BSKAP RI</span>
                  <ExternalLink className="w-3 h-3 text-[#797099]" />
                </a>
              </li>
              <li>
                <a 
                  href="https://paudpedia.kemdikbud.go.id" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-[#6342E8] transition-colors"
                >
                  <span>Portal PAUDPEDIA</span>
                  <ExternalLink className="w-3 h-3 text-[#797099]" />
                </a>
              </li>
              <li>
                <button onClick={() => setCurrentPage('about')} className="hover:text-[#6342E8] transition-colors text-left flex items-center gap-1">
                  <BookOpen className="w-3 h-3 text-[#6342E8]" />
                  <span>Tentang WonderKids</span>
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#797099]">
          <p>© 2026 WonderKids • Montessori Bahasa PAUD Indonesia</p>
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 bg-[#F3EEFF] text-[#6342E8] font-bold rounded-full text-[11px]">
              #ceria & #menyenangkan
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

