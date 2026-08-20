import React, { useState } from 'react';
import { resourcesData } from '../data/resourcesData';
import { regulationsData } from '../data/regulationsData';
import { ResourceItem, RegulationItem } from '../types';
import { 
  GraduationCap, 
  Download, 
  FileText, 
  ExternalLink, 
  ShieldCheck, 
  CheckCircle, 
  Search, 
  Printer, 
  Layers, 
  BookOpen,
  Filter
} from 'lucide-react';

export const ResourceCenterView: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'materials' | 'regulations'>('materials');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Semua');

  const categories = ['Semua', 'Template Observasi', 'Checklist', 'Panduan Guru', 'Kartu Aktivitas', 'Format Refleksi'];

  const filteredResources = resourcesData.filter(res => {
    const matchesSearch = 
      res.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      res.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      res.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCat = selectedCategory === 'Semua' || res.category === selectedCategory;
    return matchesSearch && matchesCat;
  });

  const [previewResource, setPreviewResource] = useState<ResourceItem | null>(null);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8">
      {/* Header */}
      <div className="max-w-3xl space-y-3 text-left">
        <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-black text-white text-[10px] font-mono font-bold uppercase tracking-widest">
          <GraduationCap className="w-3.5 h-3.5" />
          <span>PUSAT SUMBER BELAJAR & REGULASI PAUD</span>
        </div>
        <h1 className="font-heading font-bold text-2xl sm:text-4xl text-black tracking-tight uppercase">
          Sumber Daya Guru & Regulasi PAUD
        </h1>
        <p className="text-xs sm:text-sm text-black/70 leading-relaxed font-sans">
          Unduh templat observasi, checklist audit lingkungan, kartu klasifikasi siap cetak, dan pelajari basis regulasi resmi Kemendikdasmen RI yang mendasari literasi ramah anak.
        </p>
      </div>

      {/* Main Tab Switcher */}
      <div className="flex items-center gap-2 border-b border-black/10 pb-3 text-xs font-mono font-bold uppercase">
        <button
          onClick={() => setActiveTab('materials')}
          className={`px-4 py-2.5 transition-all flex items-center gap-2 border ${
            activeTab === 'materials'
              ? 'bg-black text-white border-black'
              : 'bg-white text-black hover:bg-neutral-100 border-black/20'
          }`}
        >
          <FileText className="w-4 h-4 text-white" />
          <span>Templat & Lembar Kerja Printable ({resourcesData.length})</span>
        </button>

        <button
          onClick={() => setActiveTab('regulations')}
          className={`px-4 py-2.5 transition-all flex items-center gap-2 border ${
            activeTab === 'regulations'
              ? 'bg-black text-white border-black'
              : 'bg-white text-black hover:bg-neutral-100 border-black/20'
          }`}
        >
          <ShieldCheck className="w-4 h-4 text-white" />
          <span>Basis Regulasi Resmi PAUD Indonesia ({regulationsData.length})</span>
        </button>
      </div>

      {/* TAB 1: DOWNLOADABLE RESOURCES & PRINTABLES */}
      {activeTab === 'materials' && (
        <div className="space-y-6">
          {/* Filter Bar */}
          <div className="bg-white p-4 sm:p-5 border border-black/15 space-y-3">
            <div className="relative">
              <Search className="w-4 h-4 text-black/40 absolute left-3.5 top-3" />
              <input
                type="text"
                placeholder="Cari templat (misal: observasi, kartu klasifikasi, checklist rak)..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-[#F6F6F6] border border-black/20 text-xs text-black focus:outline-none focus:border-black font-sans"
              />
            </div>

            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs font-mono">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 whitespace-nowrap transition-colors text-[10px] font-bold uppercase border ${
                    selectedCategory === cat
                      ? 'bg-black text-white border-black'
                      : 'bg-white text-black/70 hover:text-black hover:bg-neutral-100 border-black/15'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Resources Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredResources.map(res => (
              <div
                key={res.id}
                className="bg-white border border-black/15 p-6 space-y-4 flex flex-col justify-between hover:border-black transition-all"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="font-bold text-white bg-black px-2 py-0.5 text-[9px] uppercase">
                      {res.category}
                    </span>
                    <span className="text-black/50 text-[10px]">
                      {res.format} • {res.fileSize}
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-base text-black uppercase leading-snug">
                    {res.title}
                  </h3>

                  <p className="text-xs text-black/70 leading-relaxed font-sans">
                    {res.description}
                  </p>

                  <div className="text-[10px] font-mono text-black/50 uppercase">
                    // Sumber: {res.source} ({res.year})
                  </div>
                </div>

                <div className="pt-3 border-t border-black/10 flex items-center justify-between gap-3 font-mono">
                  {res.sampleContentHtml ? (
                    <button
                      onClick={() => setPreviewResource(res)}
                      className="text-xs font-bold text-black hover:underline uppercase"
                    >
                      Lihat Pratinjau
                    </button>
                  ) : (
                    <span className="text-[10px] text-black/40 uppercase">Siap Cetak PDF</span>
                  )}

                  <button
                    onClick={() => {
                      if (res.sampleContentHtml) {
                        setPreviewResource(res);
                      } else {
                        alert(`Memulai unduhan berkas: ${res.title}`);
                      }
                    }}
                    className="px-3.5 py-1.5 bg-black hover:bg-neutral-800 text-white text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 transition-colors border border-black"
                  >
                    <Download className="w-3.5 h-3.5 text-white" />
                    <span>Unduh Lembar</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 2: OFFICIAL PAUD REGULATIONS DATABASE */}
      {activeTab === 'regulations' && (
        <div className="space-y-6">
          <div className="p-5 bg-[#F6F6F6] border border-black/15 text-xs text-black space-y-1.5 leading-relaxed font-sans">
            <h3 className="font-mono font-bold flex items-center gap-2 text-sm text-black uppercase">
              <ShieldCheck className="w-4 h-4 text-black" />
              Transparansi Regulasi & Kepatuhan Kebijakan PAUD RI
            </h3>
            <p className="text-black/80">
              Seluruh konsep Montessori Bahasa dalam platform ini diselaraskan dengan payung regulasi resmi Kementerian Pendidikan Dasar dan Menengah (Kemendikdasmen), Badan Standar, Kurikulum, dan Asesmen Pendidikan (BSKAP), serta Gerakan Transisi PAUD ke SD yang Menyenangkan.
            </p>
          </div>

          <div className="space-y-4">
            {regulationsData.map(reg => (
              <div
                key={reg.id}
                className="bg-white border border-black/15 p-6 sm:p-7 space-y-4"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-black/10 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 bg-black text-white text-[9px] font-mono font-bold uppercase">
                      {reg.status}
                    </span>
                    <span className="font-mono text-xs text-black/70 font-bold">
                      {reg.regulationNumber}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-black/50 uppercase">
                    Terverifikasi: {reg.lastVerified}
                  </span>
                </div>

                <div>
                  <h3 className="font-heading font-bold text-base sm:text-lg text-black uppercase">
                    {reg.title}
                  </h3>
                  <p className="text-[11px] font-mono text-black/60 mt-0.5 uppercase">
                    Diterbitkan oleh: {reg.institution} ({reg.year})
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-black/80 leading-relaxed font-sans">
                  {reg.summary}
                </p>

                <div className="p-4 bg-[#F6F6F6] border border-black/10 text-xs text-black space-y-1 font-sans">
                  <strong className="font-mono text-[10px] uppercase block">// Keterkaitan Konseptual dengan Montessori Bahasa:</strong>
                  <p className="text-black/80 leading-relaxed">
                    {reg.relevanceToMontessori}
                  </p>
                </div>

                <div className="pt-2 flex justify-end">
                  <a
                    href={reg.officialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-black hover:text-black/60 uppercase transition-colors"
                  >
                    <span>Kunjungi Portal Resmi Regulasi</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* SAMPLE PREVIEW MODAL */}
      {previewResource && previewResource.sampleContentHtml && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
          <div className="w-full max-w-3xl bg-white border border-black overflow-hidden flex flex-col max-h-[92vh]">
            <div className="p-4 bg-black text-white flex items-center justify-between font-mono">
              <h3 className="font-bold text-xs sm:text-sm uppercase tracking-wider">
                {previewResource.title}
              </h3>
              <button
                onClick={() => setPreviewResource(null)}
                className="p-1 text-white/70 hover:text-white"
              >
                ✕
              </button>
            </div>

            <div className="p-6 overflow-y-auto flex-1 font-sans text-xs">
              <div 
                dangerouslySetInnerHTML={{ __html: previewResource.sampleContentHtml }} 
              />
            </div>

            <div className="p-4 bg-[#F6F6F6] border-t border-black/15 flex items-center justify-between font-mono">
              <span className="text-[10px] text-black/50 uppercase">// Format Siap Cetak PAUD</span>
              <div className="flex gap-2">
                <button
                  onClick={() => window.print()}
                  className="px-3.5 py-1.5 bg-white text-black border border-black/20 text-xs font-bold uppercase flex items-center gap-1 hover:bg-neutral-100"
                >
                  <Printer className="w-3.5 h-3.5" />
                  Cetak Lembar
                </button>
                <button
                  onClick={() => setPreviewResource(null)}
                  className="px-4 py-1.5 bg-black text-white text-xs font-bold uppercase tracking-wider border border-black hover:bg-neutral-800"
                >
                  Tutup
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
