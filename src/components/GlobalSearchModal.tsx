import React, { useState, useMemo } from 'react';
import { useApp } from '../context/AppContext';
import { modulesData } from '../data/modulesData';
import { materialsData } from '../data/materialsData';
import { activitiesData } from '../data/activitiesData';
import { videosData } from '../data/videosData';
import { caseStudiesData } from '../data/caseStudiesData';
import { resourcesData } from '../data/resourcesData';
import { Search, X, BookOpen, Layers, Sparkles, Video, HelpCircle, FileText, ArrowRight } from 'lucide-react';

export const GlobalSearchModal: React.FC = () => {
  const { 
    isSearchOpen, 
    setIsSearchOpen, 
    navigateToLesson, 
    navigateToMaterial, 
    navigateToActivity, 
    navigateToVideo, 
    setCurrentPage 
  } = useApp();

  const [query, setQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  // Search indexing
  const results = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();

    const matched: Array<{
      type: 'module' | 'material' | 'activity' | 'video' | 'case' | 'resource';
      title: string;
      subtitle: string;
      description: string;
      badge: string;
      onClick: () => void;
    }> = [];

    // Search Lessons in Modules
    if (selectedFilter === 'all' || selectedFilter === 'module') {
      modulesData.forEach(module => {
        module.lessons.forEach(lesson => {
          const lessonDesc = lesson.summary || lesson.learningObjectives?.[0] || '';
          const lessonContent = lesson.contentMarkdown || lesson.content || '';
          if (
            lesson.title.toLowerCase().includes(q) ||
            lessonDesc.toLowerCase().includes(q) ||
            lesson.practicalExample.toLowerCase().includes(q) ||
            lessonContent.toLowerCase().includes(q) ||
            module.title.toLowerCase().includes(q)
          ) {
            matched.push({
              type: 'module',
              title: lesson.title,
              subtitle: `Modul ${module.number}: ${module.title}`,
              description: lessonDesc,
              badge: 'Modul Belajar',
              onClick: () => {
                navigateToLesson(module.id, lesson.id);
                setIsSearchOpen(false);
              }
            });
          }
        });
      });
    }

    // Search Materials
    if (selectedFilter === 'all' || selectedFilter === 'material') {
      materialsData.forEach(mat => {
        if (
          mat.name.toLowerCase().includes(q) ||
          mat.originalName.toLowerCase().includes(q) ||
          mat.shortDescription.toLowerCase().includes(q) ||
          mat.diyAlternative.toLowerCase().includes(q)
        ) {
          matched.push({
            type: 'material',
            title: mat.name,
            subtitle: mat.category + ' • ' + mat.ageRange,
            description: mat.shortDescription,
            badge: 'Material Montessori',
            onClick: () => {
              navigateToMaterial(mat.id);
              setIsSearchOpen(false);
            }
          });
        }
      });
    }

    // Search Activities
    if (selectedFilter === 'all' || selectedFilter === 'activity') {
      activitiesData.forEach(act => {
        if (
          act.title.toLowerCase().includes(q) ||
          act.category.toLowerCase().includes(q) ||
          act.diyAlternative.toLowerCase().includes(q) ||
          act.learningObjectives.some(obj => obj.toLowerCase().includes(q))
        ) {
          matched.push({
            type: 'activity',
            title: act.title,
            subtitle: `${act.category} • Usia ${act.ageGroup} • ${act.duration}`,
            description: act.learningObjectives[0] || '',
            badge: 'Praktik Kelas',
            onClick: () => {
              navigateToActivity(act.id);
              setIsSearchOpen(false);
            }
          });
        }
      });
    }

    // Search Videos
    if (selectedFilter === 'all' || selectedFilter === 'video') {
      videosData.forEach(vid => {
        if (
          vid.title.toLowerCase().includes(q) ||
          vid.description.toLowerCase().includes(q) ||
          vid.category.toLowerCase().includes(q)
        ) {
          matched.push({
            type: 'video',
            title: vid.title,
            subtitle: `Durasi: ${vid.duration} • ${vid.category}`,
            description: vid.description,
            badge: 'Video Praktik',
            onClick: () => {
              navigateToVideo(vid.id);
              setIsSearchOpen(false);
            }
          });
        }
      });
    }

    // Search Case Studies
    if (selectedFilter === 'all' || selectedFilter === 'case') {
      caseStudiesData.forEach(cs => {
        if (
          cs.title.toLowerCase().includes(q) ||
          cs.scenario.toLowerCase().includes(q) ||
          (cs.tags && cs.tags.some(t => t.toLowerCase().includes(q)))
        ) {
          matched.push({
            type: 'case',
            title: cs.title,
            subtitle: `${cs.category} • ${cs.ageGroup}`,
            description: cs.scenario.substring(0, 120) + '...',
            badge: 'Studi Kasus',
            onClick: () => {
              setCurrentPage('case-studies');
              setIsSearchOpen(false);
            }
          });
        }
      });
    }

    // Search Resources
    if (selectedFilter === 'all' || selectedFilter === 'resource') {
      resourcesData.forEach(res => {
        if (
          res.title.toLowerCase().includes(q) ||
          res.description.toLowerCase().includes(q) ||
          res.category.toLowerCase().includes(q)
        ) {
          matched.push({
            type: 'resource',
            title: res.title,
            subtitle: `${res.category} • Format: ${res.format}`,
            description: res.description,
            badge: 'Sumber Belajar',
            onClick: () => {
              setCurrentPage('resources');
              setIsSearchOpen(false);
            }
          });
        }
      });
    }

    return matched;
  }, [query, selectedFilter]);

  if (!isSearchOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-xs flex items-start justify-center p-4 sm:p-6 md:pt-16 animate-in fade-in duration-150">
      <div className="w-full max-w-3xl bg-white border border-black shadow-2xl overflow-hidden flex flex-col max-h-[85vh]">
        {/* Search Header */}
        <div className="p-4 sm:p-5 border-b border-black/10 bg-white">
          <div className="relative flex items-center">
            <Search className="w-4 h-4 text-black absolute left-4" />
            <input
              type="text"
              autoFocus
              placeholder="Cari materi (misal: fonik, huruf raba, LMA, three-period, baki pasir, observasi)..."
              value={query}
              onChange={e => setQuery(e.target.value)}
              className="w-full pl-11 pr-12 py-3 bg-[#F6F6F6] border border-black/20 text-xs sm:text-sm text-black focus:outline-none focus:border-black font-sans"
            />
            {query && (
              <button
                onClick={() => setQuery('')}
                className="absolute right-12 p-1 font-mono text-[10px] text-black/50 hover:text-black uppercase"
              >
                Hapus
              </button>
            )}
            <button
              onClick={() => setIsSearchOpen(false)}
              className="absolute right-3 p-1.5 hover:bg-neutral-100 text-black"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-1 mt-3 overflow-x-auto pb-1 text-xs">
            {[
              { id: 'all', label: 'SEMUA KATEGORI' },
              { id: 'module', label: 'MODUL PELAJARAN' },
              { id: 'material', label: 'MATERIAL' },
              { id: 'activity', label: 'PRAKTIK KELAS' },
              { id: 'video', label: 'VIDEO' },
              { id: 'case', label: 'STUDI KASUS' },
              { id: 'resource', label: 'SUMBER BELAJAR' },
            ].map(f => (
              <button
                key={f.id}
                onClick={() => setSelectedFilter(f.id)}
                className={`px-3 py-1 text-[10px] font-mono uppercase tracking-wider border whitespace-nowrap transition-colors font-bold ${
                  selectedFilter === f.id
                    ? 'bg-black text-white border-black'
                    : 'bg-[#F6F6F6] text-black/70 border-black/10 hover:border-black/30'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Results Container */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1 space-y-2 bg-[#FAFAFA]">
          {!query.trim() ? (
            <div className="py-12 text-center text-black/60 space-y-3">
              <Search className="w-8 h-8 mx-auto text-black/30 stroke-1" />
              <p className="text-xs uppercase font-mono tracking-wider font-bold text-black">Ketik kata kunci untuk mencari di seluruh platform</p>
              <div className="flex flex-wrap items-center justify-center gap-2 max-w-md mx-auto pt-2">
                <span className="text-[10px] font-mono text-black/40 uppercase">Saran:</span>
                {['Sandpaper Letters', 'Three-Period Lesson', 'LMA', 'I-Spy Game', 'Baki Pasir', 'Observasi', 'Metal Insets'].map(tag => (
                  <button
                    key={tag}
                    onClick={() => setQuery(tag)}
                    className="text-[10px] font-mono uppercase px-2.5 py-1 bg-white border border-black/15 hover:border-black text-black"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          ) : results.length === 0 ? (
            <div className="py-12 text-center text-black/60 space-y-2">
              <p className="text-xs font-mono font-bold uppercase text-black">Tidak ditemukan hasil untuk "{query}"</p>
              <p className="text-xs text-black/60 max-w-sm mx-auto">
                Coba gunakan kata kunci yang lebih umum seperti "fonik", "huruf", "kata", "observasi", atau "tiga babak".
              </p>
            </div>
          ) : (
            <div className="space-y-2">
              <div className="text-[10px] font-mono uppercase font-bold text-black/50 px-1">
                // {results.length} HASIL PENCARIAN
              </div>
              {results.map((item, index) => {
                const getIcon = () => {
                  switch (item.type) {
                    case 'module': return BookOpen;
                    case 'material': return Layers;
                    case 'activity': return Sparkles;
                    case 'video': return Video;
                    case 'case': return HelpCircle;
                    default: return FileText;
                  }
                };
                const IconComponent = getIcon();

                return (
                  <div
                    key={index}
                    onClick={item.onClick}
                    className="p-4 bg-white border border-black/10 hover:border-black cursor-pointer transition-all group flex items-start justify-between gap-4"
                  >
                    <div className="flex items-start gap-3.5">
                      <div className="w-8 h-8 bg-black text-white flex items-center justify-center shrink-0 mt-0.5">
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="text-[9px] font-mono font-bold uppercase tracking-widest px-1.5 py-0.2 bg-black text-white">
                            {item.badge}
                          </span>
                          <span className="text-[11px] font-mono text-black/50">{item.subtitle}</span>
                        </div>
                        <h4 className="font-bold text-black text-sm group-hover:underline">
                          {item.title}
                        </h4>
                        <p className="text-xs text-black/70 line-clamp-2 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-black/30 group-hover:text-black group-hover:translate-x-1 transition-all shrink-0 mt-2" />
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-3 bg-[#F6F6F6] border-t border-black/10 flex items-center justify-between text-[10px] font-mono text-black/60 uppercase">
          <span>Montessori Index Engine</span>
          <button 
            onClick={() => setIsSearchOpen(false)} 
            className="hover:text-black underline font-bold"
          >
            Tutup (Esc)
          </button>
        </div>
      </div>
    </div>
  );
};
