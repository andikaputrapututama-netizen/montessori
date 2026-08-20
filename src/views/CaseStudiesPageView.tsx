import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { caseStudiesData } from '../data/caseStudiesData';
import { CaseStudyItem } from '../types';
import { 
  HelpCircle, 
  CheckCircle2, 
  XCircle, 
  Sparkles, 
  Lightbulb, 
  ShieldCheck, 
  BookOpen, 
  ArrowRight,
  RefreshCw
} from 'lucide-react';

export const CaseStudiesPageView: React.FC = () => {
  const { markCaseStudyComplete, progress } = useApp();
  const [selectedCaseId, setSelectedCaseId] = useState<string>(caseStudiesData[0].id);

  const currentCase = caseStudiesData.find(c => c.id === selectedCaseId) || caseStudiesData[0];

  // Choice state per case
  const [userDecisions, setUserDecisions] = useState<Record<string, string>>({});

  const selectedKey = userDecisions[currentCase.id];
  const selectedOption = currentCase.options.find(o => o.key === selectedKey);

  const handleSelectOption = (key: string) => {
    setUserDecisions(prev => ({ ...prev, [currentCase.id]: key }));
    markCaseStudyComplete(currentCase.id);
  };

  const handleResetDecision = () => {
    setUserDecisions(prev => {
      const copy = { ...prev };
      delete copy[currentCase.id];
      return copy;
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8">
      {/* Header */}
      <div className="max-w-3xl space-y-2 text-left border-b border-black/10 pb-6">
        <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-black text-white text-[10px] font-mono font-bold uppercase tracking-widest">
          <HelpCircle className="w-3 h-3" />
          <span>SIMULASI DILEMA PEDAGOGIS KELAS</span>
        </div>
        <h1 className="font-heading font-bold text-2xl sm:text-4xl text-black tracking-tight uppercase">
          Studi Kasus & Pemecahan Masalah
        </h1>
        <p className="text-xs sm:text-sm text-black/70 leading-relaxed font-sans">
          Hadapi situasi nyata sehari-hari di ruang kelas PAUD: anak yang menolak huruf raba, dominasi suara guru, keragaman laju perkembangan, hingga keterbatasan material lokal.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Sidebar: Case Studies Menu */}
        <div className="lg:col-span-4 bg-white p-5 border border-black/15 space-y-3">
          <h3 className="font-heading font-bold text-base text-black uppercase">
            Daftar 6 Skenario Kasus
          </h3>
          <p className="text-xs font-mono text-black/50">
            // Pilih skenario untuk menguji pertimbangan pedagogis Anda:
          </p>

          <div className="space-y-2 pt-2 border-t border-black/10">
            {caseStudiesData.map((cs, idx) => {
              const isSelected = cs.id === currentCase.id;
              const hasDecided = userDecisions[cs.id] !== undefined;

              return (
                <div
                  key={cs.id}
                  onClick={() => setSelectedCaseId(cs.id)}
                  className={`p-3 cursor-pointer transition-all border text-left ${
                    isSelected
                      ? 'bg-black text-white border-black'
                      : 'bg-[#F6F6F6] hover:bg-neutral-200 text-black border-black/10'
                  }`}
                >
                  <div className="flex items-start gap-2.5">
                    <span className={`w-5 h-5 flex items-center justify-center text-[10px] font-mono font-bold shrink-0 mt-0.5 ${
                      isSelected
                        ? 'bg-white text-black'
                        : hasDecided
                        ? 'bg-black text-white'
                        : 'bg-neutral-300 text-black'
                    }`}>
                      {hasDecided ? '✓' : idx + 1}
                    </span>
                    <div className="flex-1 min-w-0">
                      <span className={`text-[9px] font-mono font-bold uppercase tracking-wider block ${
                        isSelected ? 'text-white/70' : 'text-black/60'
                      }`}>
                        {cs.category}
                      </span>
                      <h4 className={`text-xs font-heading font-bold uppercase mt-0.5 line-clamp-2 ${
                        isSelected ? 'text-white' : 'text-black'
                      }`}>
                        {cs.title}
                      </h4>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Main Case Solver */}
        <div className="lg:col-span-8 space-y-6">
          <div className="bg-white p-6 sm:p-8 border border-black/15 space-y-6">
            {/* Scenario Header */}
            <div className="space-y-2 border-b border-black/10 pb-4">
              <div className="flex items-center gap-2 text-xs">
                <span className="px-2 py-0.2 bg-black text-white text-[9px] font-mono font-bold uppercase">
                  {currentCase.category}
                </span>
                <span className="text-black/60 font-mono text-[10px] uppercase">
                  Sasaran: {currentCase.ageGroup}
                </span>
              </div>
              <h2 className="font-heading font-bold text-xl sm:text-2xl text-black uppercase">
                {currentCase.title}
              </h2>
            </div>

            {/* Scenario Narrative */}
            <div className="p-5 bg-[#F6F6F6] border border-black/10 space-y-2">
              <h4 className="font-mono font-bold text-[10px] uppercase tracking-wider text-black">
                // Konteks Skenario Nyata di Kelas:
              </h4>
              <p className="text-xs sm:text-sm text-black/80 leading-relaxed font-sans">
                "{currentCase.scenario}"
              </p>
            </div>

            {/* Teacher Dilemma Box */}
            <div className="p-5 bg-white border border-black/20 space-y-2">
              <h4 className="font-mono font-bold text-xs uppercase tracking-wider text-black flex items-center gap-1.5">
                <Lightbulb className="w-3.5 h-3.5 text-black" />
                // Dilema & Pertanyaan Kunci Guru:
              </h4>
              <p className="text-xs sm:text-sm text-black/80 leading-relaxed font-sans">
                {currentCase.teacherDilemma}
              </p>
            </div>

            {/* Options to Choose */}
            <div className="space-y-3 pt-2">
              <h4 className="font-mono font-bold text-[10px] uppercase tracking-wider text-black">
                // Pilihan Tindakan Pedagogis Anda:
              </h4>

              <div className="space-y-2.5">
                {currentCase.options.map((opt) => {
                  const isSelected = selectedKey === opt.key;
                  let cardStyle = 'bg-white hover:bg-neutral-100 border-black/20 text-black';

                  if (selectedKey) {
                    if (opt.isRecommended) {
                      cardStyle = 'bg-black text-white border-black font-bold';
                    } else if (isSelected && !opt.isRecommended) {
                      cardStyle = 'bg-neutral-200 line-through text-black/60 border-black/40';
                    } else {
                      cardStyle = 'bg-[#F6F6F6] border-black/10 opacity-40 text-black/50';
                    }
                  }

                  return (
                    <div
                      key={opt.key}
                      onClick={() => handleSelectOption(opt.key)}
                      className={`p-3.5 border text-xs sm:text-sm cursor-pointer transition-all flex items-start gap-3 font-sans ${cardStyle}`}
                    >
                      <span className={`w-5 h-5 flex items-center justify-center font-mono font-bold text-xs shrink-0 mt-0.5 ${
                        isSelected
                          ? opt.isRecommended
                            ? 'bg-white text-black'
                            : 'bg-black text-white'
                          : 'bg-neutral-200 text-black'
                      }`}>
                        {opt.key}
                      </span>
                      <div className="flex-1 leading-relaxed">
                        <span>{opt.text}</span>
                      </div>
                      {selectedKey && opt.isRecommended && (
                        <CheckCircle2 className="w-4 h-4 text-white shrink-0 ml-1" />
                      )}
                      {selectedKey && isSelected && !opt.isRecommended && (
                        <XCircle className="w-4 h-4 text-black shrink-0 ml-1" />
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* In-depth Pedagogical Rationale (Revealed upon selection) */}
            {selectedOption && (
              <div className="p-6 bg-[#FAFAFA] border border-black/20 space-y-4 animate-in fade-in duration-300">
                <div className="flex items-center justify-between border-b border-black/10 pb-3">
                  <div className="flex items-center gap-2">
                    {selectedOption.isRecommended ? (
                      <span className="text-[10px] font-mono font-bold px-2 py-0.5 bg-black text-white uppercase flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3" />
                        Pilihan Sangat Direkomendasikan
                      </span>
                    ) : (
                      <span className="text-[10px] font-mono font-bold px-2 py-0.5 bg-neutral-300 text-black uppercase flex items-center gap-1">
                        <XCircle className="w-3 h-3" />
                        Pilihan Perlu Dievaluasi
                      </span>
                    )}
                  </div>
                  <button
                    onClick={handleResetDecision}
                    className="flex items-center gap-1 text-xs font-mono font-bold uppercase text-black/60 hover:text-black hover:underline"
                  >
                    <RefreshCw className="w-3 h-3" />
                    Coba Lain
                  </button>
                </div>

                <div className="space-y-2 text-xs sm:text-sm text-black font-sans">
                  <strong className="block font-mono uppercase text-[10px] text-black">// Rasionalitas Pedagogis:</strong>
                  <p className="leading-relaxed text-black/80">
                    {selectedOption.rationale}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs">
                  <div className="p-3 bg-white border border-black/15">
                    <span className="font-mono font-bold text-[10px] uppercase text-black block">// Prinsip Montessori:</span>
                    <p className="text-black/80 mt-0.5 font-sans">{selectedOption.montessoriPrinciple}</p>
                  </div>
                  <div className="p-3 bg-white border border-black/15">
                    <span className="font-mono font-bold text-[10px] uppercase text-black block">// Pedoman Kurikulum PAUD:</span>
                    <p className="text-black/80 mt-0.5 font-sans">{selectedOption.paudGuidance}</p>
                  </div>
                </div>

                {/* Closing Reflection Note */}
                <div className="p-4 bg-white border border-black text-xs text-black/80 italic font-sans">
                  <strong className="not-italic font-mono uppercase text-[10px] block mb-0.5 text-black">// Pesan Reflektif:</strong> "{currentCase.closingReflection}"
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
