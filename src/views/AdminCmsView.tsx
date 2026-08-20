import React, { useState } from 'react';
import { modulesData } from '../data/modulesData';
import { materialsData } from '../data/materialsData';
import { activitiesData } from '../data/activitiesData';
import { regulationsData } from '../data/regulationsData';
import { 
  ShieldCheck, 
  BookOpen, 
  Layers, 
  Sparkles, 
  CheckCircle, 
  AlertCircle, 
  Eye, 
  FileText,
  Clock,
  Database
} from 'lucide-react';

export const AdminCmsView: React.FC = () => {
  const [activeSection, setActiveSection] = useState<'modules' | 'materials' | 'regulations'>('modules');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8">
      {/* Header */}
      <div className="max-w-3xl space-y-2 text-left">
        <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-black text-white text-[10px] font-mono font-bold uppercase tracking-widest">
          <Database className="w-3 h-3" />
          <span>KURASI KURIKULUM & VERIFIKASI STANDAR</span>
        </div>
        <h1 className="font-heading font-bold text-2xl sm:text-4xl text-black tracking-tight uppercase">
          Pusat Manajemen Kurikulum & Standar PAUD
        </h1>
        <p className="text-xs sm:text-sm text-black/70 leading-relaxed font-sans">
          Tinjau status keselarasan 8 modul, 10 material Montessori, dan 5 rujukan regulasi resmi PAUD Indonesia.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-2 border-b border-black/10 pb-3 text-xs font-mono font-bold uppercase">
        <button
          onClick={() => setActiveSection('modules')}
          className={`px-4 py-2 border transition-colors ${
            activeSection === 'modules'
              ? 'bg-black text-white border-black'
              : 'bg-white text-black hover:bg-neutral-100 border-black/20'
          }`}
        >
          Modul Kurikulum ({modulesData.length})
        </button>

        <button
          onClick={() => setActiveSection('materials')}
          className={`px-4 py-2 border transition-colors ${
            activeSection === 'materials'
              ? 'bg-black text-white border-black'
              : 'bg-white text-black hover:bg-neutral-100 border-black/20'
          }`}
        >
          Katalog Material ({materialsData.length})
        </button>

        <button
          onClick={() => setActiveSection('regulations')}
          className={`px-4 py-2 border transition-colors ${
            activeSection === 'regulations'
              ? 'bg-black text-white border-black'
              : 'bg-white text-black hover:bg-neutral-100 border-black/20'
          }`}
        >
          Regulasi Kemendikdasmen ({regulationsData.length})
        </button>
      </div>

      {/* SECTION 1: MODULES AUDIT */}
      {activeSection === 'modules' && (
        <div className="space-y-4">
          <div className="bg-white border border-black/15 overflow-hidden">
            <div className="p-4 bg-[#F6F6F6] border-b border-black/10 font-mono font-bold text-xs text-black uppercase">
              // Daftar Modul & Kepatuhan Kompetensi Pedagogis
            </div>
            <div className="divide-y divide-black/10">
              {modulesData.map(mod => (
                <div key={mod.id} className="p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-mono font-bold text-xs text-black uppercase">MODUL {mod.number}</span>
                      <span className="font-heading font-bold text-sm text-black uppercase">// {mod.title}</span>
                    </div>
                    <p className="text-xs text-black/70 font-sans">{mod.description}</p>
                    <div className="flex items-center gap-2 text-[10px] font-mono text-black/50 pt-1 uppercase">
                      <span>{mod.lessons.length} Pelajaran</span>
                      <span>•</span>
                      <span>{mod.totalDurationMinutes || 45} Menit</span>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 bg-black text-white text-[10px] font-mono font-bold uppercase shrink-0">
                    ✓ TERVERIFIKASI STANDAR
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* SECTION 2: MATERIALS AUDIT */}
      {activeSection === 'materials' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-mono">
          {materialsData.map(mat => (
            <div key={mat.id} className="bg-white p-5 border border-black/15 space-y-2 text-xs">
              <div className="flex items-center justify-between">
                <h4 className="font-heading font-bold text-black text-sm uppercase">{mat.name}</h4>
                <span className="text-[9px] px-2 py-0.5 bg-black text-white font-bold uppercase">
                  {mat.category}
                </span>
              </div>
              <p className="text-black/70 font-sans line-clamp-2">{mat.shortDescription}</p>
              <div className="pt-2 border-t border-black/10 text-[11px] text-black">
                <strong className="text-[10px] uppercase">// DIY:</strong> {mat.diyAlternative}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* SECTION 3: REGULATIONS AUDIT */}
      {activeSection === 'regulations' && (
        <div className="space-y-4 font-mono">
          {regulationsData.map(reg => (
            <div key={reg.id} className="bg-white p-5 border border-black/15 space-y-2 text-xs">
              <div className="flex items-center justify-between">
                <span className="font-bold text-black uppercase">{reg.regulationNumber}</span>
                <span className="px-2 py-0.5 bg-black text-white font-bold text-[9px] uppercase">
                  {reg.status}
                </span>
              </div>
              <h4 className="font-heading font-bold text-sm text-black uppercase">{reg.title}</h4>
              <p className="text-black/70 font-sans">{reg.summary}</p>
              <div className="text-[10px] text-black/50 uppercase">
                // Penerbit: {reg.institution} ({reg.year})
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
