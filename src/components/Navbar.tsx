import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { 
  BookOpen, 
  Sparkles, 
  Search, 
  Menu, 
  X, 
  Compass, 
  Layers, 
  Video, 
  HelpCircle, 
  ClipboardCheck, 
  FileText, 
  User, 
  Bot, 
  GraduationCap,
  ArrowUpRight
} from 'lucide-react';

export const Navbar: React.FC = () => {
  const { 
    currentPage, 
    setCurrentPage, 
    setIsSearchOpen, 
    setIsAiAssistantOpen,
    competencyLevel 
  } = useApp();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home', icon: Compass },
    { id: 'learn', label: 'Modul', icon: BookOpen },
    { id: 'videos', label: 'Video Panduan', icon: Video },
    { id: 'materials', label: 'Material', icon: Layers },
    { id: 'activities', label: 'Aktivitas', icon: Sparkles },
    { id: 'case-studies', label: 'Studi Kasus', icon: HelpCircle },
    { id: 'observation-journal', label: 'Observasi', icon: ClipboardCheck },
    { id: 'teacher-reflection', label: 'Refleksi', icon: FileText },
    { id: 'resources', label: 'Sumber Belajar', icon: GraduationCap },
  ];

  const handleNavClick = (pageId: string) => {
    setCurrentPage(pageId);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-purple-100 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* WonderKids Logo */}
            <div 
              onClick={() => handleNavClick('home')}
              className="flex items-center gap-3 cursor-pointer group select-none"
              id="brand-logo"
            >
              {/* Playful 4-dot/petal flower logo */}
              <div className="relative w-9 h-9 flex items-center justify-center">
                <span className="absolute w-3.5 h-3.5 rounded-full bg-[#6342E8] top-0 left-0"></span>
                <span className="absolute w-3.5 h-3.5 rounded-full bg-[#FFBE2E] top-0 right-0"></span>
                <span className="absolute w-3.5 h-3.5 rounded-full bg-[#FF6B6B] bottom-0 left-0"></span>
                <span className="absolute w-3.5 h-3.5 rounded-full bg-[#6342E8] bottom-0 right-0"></span>
                <span className="absolute w-2 h-2 rounded-full bg-white"></span>
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-extrabold text-xl text-[#1E1B4B] tracking-tight flex items-center gap-1">
                  Wonder<span className="text-[#6342E8]">Kids</span>
                  <span className="text-[10px] font-sans font-semibold text-[#8B7BB5] ml-1 bg-[#F3EEFF] px-2 py-0.5 rounded-full">
                    PAUD
                  </span>
                </span>
                <span className="text-[10px] font-medium text-[#797099] -mt-1">
                  Montessori Bahasa Indonesia
                </span>
              </div>
            </div>

            {/* Desktop Navigation Links (Pills) */}
            <nav className="hidden lg:flex items-center gap-1 bg-[#FAF8FF] p-1.5 rounded-full border border-purple-100/80">
              <button
                onClick={() => handleNavClick('home')}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  currentPage === 'home'
                    ? 'bg-white text-[#1E1B4B] shadow-xs font-bold'
                    : 'text-[#5C5882] hover:text-[#1E1B4B] hover:bg-white/60'
                }`}
              >
                Home
              </button>

              <button
                onClick={() => handleNavClick('learn')}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  currentPage === 'learn' || currentPage === 'module-detail'
                    ? 'bg-white text-[#1E1B4B] shadow-xs font-bold'
                    : 'text-[#5C5882] hover:text-[#1E1B4B] hover:bg-white/60'
                }`}
              >
                Modul
              </button>

              <button
                onClick={() => handleNavClick('videos')}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  currentPage === 'videos'
                    ? 'bg-white text-[#1E1B4B] shadow-xs font-bold'
                    : 'text-[#5C5882] hover:text-[#1E1B4B] hover:bg-white/60'
                }`}
              >
                Video
              </button>

              <button
                onClick={() => handleNavClick('materials')}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  currentPage === 'materials' || currentPage === 'material-detail'
                    ? 'bg-white text-[#1E1B4B] shadow-xs font-bold'
                    : 'text-[#5C5882] hover:text-[#1E1B4B] hover:bg-white/60'
                }`}
              >
                Material
              </button>

              <button
                onClick={() => handleNavClick('activities')}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  currentPage === 'activities' || currentPage === 'activity-detail'
                    ? 'bg-white text-[#1E1B4B] shadow-xs font-bold'
                    : 'text-[#5C5882] hover:text-[#1E1B4B] hover:bg-white/60'
                }`}
              >
                Aktivitas
              </button>

              <button
                onClick={() => handleNavClick('observation-journal')}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  currentPage === 'observation-journal'
                    ? 'bg-white text-[#1E1B4B] shadow-xs font-bold'
                    : 'text-[#5C5882] hover:text-[#1E1B4B] hover:bg-white/60'
                }`}
              >
                Jurnal Observasi
              </button>

              <button
                onClick={() => handleNavClick('about')}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  currentPage === 'about'
                    ? 'bg-white text-[#1E1B4B] shadow-xs font-bold'
                    : 'text-[#5C5882] hover:text-[#1E1B4B] hover:bg-white/60'
                }`}
              >
                Tentang
              </button>
            </nav>

            {/* Right Actions */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Search Icon Button */}
              <button
                onClick={() => setIsSearchOpen(true)}
                id="btn-search-header"
                className="w-10 h-10 rounded-full bg-[#FAF8FF] hover:bg-[#F3EEFF] text-[#5C5882] hover:text-[#6342E8] transition-colors flex items-center justify-center border border-purple-100"
                aria-label="Cari materi"
                title="Cari materi atau aktivitas"
              >
                <Search className="w-4 h-4" />
              </button>

              {/* AI Assistant Pill */}
              <button
                onClick={() => setIsAiAssistantOpen(true)}
                id="btn-ai-assistant-header"
                className="hidden sm:flex items-center gap-1.5 px-3.5 py-2 bg-[#F3EEFF] hover:bg-[#EAE3FF] text-[#6342E8] text-xs font-semibold rounded-full border border-purple-200 transition-all"
                title="Konsultasi AI Guru"
              >
                <Bot className="w-3.5 h-3.5" />
                <span>AI Guru</span>
              </button>

              {/* Sign In / Dashboard Link */}
              <button
                onClick={() => handleNavClick('dashboard')}
                id="btn-user-dashboard"
                className="text-xs font-bold text-[#1E1B4B] hover:text-[#6342E8] px-3 py-2 transition-colors hidden sm:block"
              >
                Dashboard
              </button>

              {/* WonderKids Purple CTA Pill Button with Arrow in Circle */}
              <button
                onClick={() => handleNavClick('learn')}
                id="btn-contact-or-start"
                className="flex items-center gap-2 px-5 py-2.5 bg-[#6342E8] hover:bg-[#5233D8] text-white text-xs font-bold rounded-full shadow-md shadow-purple-200 transition-all active:scale-95"
              >
                <span>Mulai Belajar</span>
                <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-white">
                  <ArrowUpRight className="w-3 h-3" />
                </span>
              </button>

              {/* Mobile menu trigger */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                id="btn-mobile-menu-toggle"
                className="lg:hidden p-2 text-[#1E1B4B] rounded-xl hover:bg-purple-50"
                aria-label="Buka menu navigasi"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-purple-100 px-4 pt-3 pb-6 space-y-2 animate-in fade-in duration-150">
            <div className="p-3 bg-[#FAF8FF] rounded-2xl border border-purple-100 mb-3 flex items-center justify-between text-xs">
              <span className="font-bold text-[#1E1B4B]">{competencyLevel.title}</span>
              <span className="font-bold text-[#6342E8] bg-white px-2 py-0.5 rounded-full border border-purple-100">
                {competencyLevel.percentage}%
              </span>
            </div>

            <div className="grid grid-cols-1 gap-1">
              {navItems.map(item => {
                const Icon = item.icon;
                const isActive = currentPage === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-left text-xs font-semibold transition-colors ${
                      isActive 
                        ? 'bg-[#6342E8] text-white font-bold' 
                        : 'text-[#4A436D] hover:bg-purple-50'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {item.label}
                  </button>
                );
              })}
            </div>

            <div className="pt-3 border-t border-purple-100 flex gap-2">
              <button
                onClick={() => {
                  setIsAiAssistantOpen(true);
                  setMobileMenuOpen(false);
                }}
                className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-[#6342E8] text-white font-semibold text-xs rounded-full shadow-xs"
              >
                <Bot className="w-4 h-4" />
                Asisten AI Guru
              </button>
              <button
                onClick={() => handleNavClick('dashboard')}
                className="px-4 py-2.5 bg-[#FAF8FF] hover:bg-purple-50 text-[#1E1B4B] font-semibold text-xs rounded-full border border-purple-100"
              >
                Dashboard
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};


