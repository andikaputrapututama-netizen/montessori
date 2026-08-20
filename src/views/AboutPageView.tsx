import React from 'react';
import { useApp } from '../context/AppContext';
import { 
  HeartHandshake, 
  BookOpen, 
  ShieldCheck, 
  Sparkles, 
  GraduationCap, 
  ExternalLink,
  Award,
  ArrowRight,
  Smile,
  ArrowUpRight
} from 'lucide-react';

export const AboutPageView: React.FC = () => {
  const { setCurrentPage } = useApp();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8">
      {/* Header */}
      <div className="max-w-3xl space-y-3 text-left">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F3EEFF] text-[#6342E8] text-xs font-bold">
          <HeartHandshake className="w-3.5 h-3.5" />
          <span>TENTANG KAMI • WONDERKIDS PAUD</span>
        </div>
        <h1 className="font-heading font-extrabold text-2xl sm:text-4xl text-[#1E1B4B] tracking-tight">
          Menghadirkan Kegembiraan <span className="text-[#6342E8] font-script italic text-3xl sm:text-5xl">Belajar Bahasa</span>
        </h1>
        <p className="text-xs sm:text-sm text-[#5C5882] leading-relaxed font-sans">
          Ruang belajar mandiri berbasis sains perkembangan anak yang dirancang khusus untuk memuliakan tugas pendidik PAUD di seluruh pelosok Indonesia.
        </p>
      </div>

      {/* Philosophy Statement Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 sm:p-8 rounded-[28px] border border-purple-100/80 shadow-xs hover:shadow-xl hover:shadow-purple-100/50 space-y-4 card-playful">
          <div className="w-12 h-12 rounded-full bg-[#FFEBA5] flex items-center justify-center text-[#8C5800]">
            <Sparkles className="w-6 h-6" />
          </div>
          <h3 className="font-heading font-extrabold text-lg text-[#1E1B4B]">
            Literasi Tanpa Tekanan
          </h3>
          <p className="text-xs sm:text-sm text-[#5C5882] leading-relaxed font-sans">
            Menolak metode calistung drill mekanik yang membebani anak. Bahasa diperkenalkan secara alami melalui sensori rabaan, bunyi fonik yang menyenangkan, dan kegembiraan bercerita.
          </p>
        </div>

        <div className="bg-white p-6 sm:p-8 rounded-[28px] border border-purple-100/80 shadow-xs hover:shadow-xl hover:shadow-purple-100/50 space-y-4 card-playful">
          <div className="w-12 h-12 rounded-full bg-[#EDE4FF] flex items-center justify-center text-[#6342E8]">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <h3 className="font-heading font-extrabold text-lg text-[#1E1B4B]">
            Pemberdayaan Guru PAUD
          </h3>
          <p className="text-xs sm:text-sm text-[#5C5882] leading-relaxed font-sans">
            Guru diposisikan sebagai fasilitator dan periset di kelasnya (*teacher as researcher*), dilengkapi instrumen observasi objektif dan siklus refleksi harian.
          </p>
        </div>

        <div className="bg-white p-6 sm:p-8 rounded-[28px] border border-purple-100/80 shadow-xs hover:shadow-xl hover:shadow-purple-100/50 space-y-4 card-playful">
          <div className="w-12 h-12 rounded-full bg-[#C5F6FA] flex items-center justify-center text-[#0B7285]">
            <Award className="w-6 h-6" />
          </div>
          <h3 className="font-heading font-extrabold text-lg text-[#1E1B4B]">
            Kearifan Lokal Ramah Biaya
          </h3>
          <p className="text-xs sm:text-sm text-[#5C5882] leading-relaxed font-sans">
            Prinsip Montessori yang universal diadaptasi secara praktis dengan material buatan sendiri (DIY) dari bahan alami dan daur ulang di lingkungan sekolah.
          </p>
        </div>
      </div>

      {/* CTA Box */}
      <div className="p-8 sm:p-10 bg-[#6342E8] text-white rounded-[32px] text-center space-y-4 shadow-xl shadow-purple-300/40">
        <h3 className="font-heading font-extrabold text-xl sm:text-2xl">
          Siap Memulai Perjalanan Belajar Montessori Bahasa?
        </h3>
        <p className="text-xs sm:text-sm text-purple-100 max-w-xl mx-auto">
          Mulai dari Modul 1 dan tingkatkan skor portofolio kompetensi mengajar Anda hari ini.
        </p>
        <button
          onClick={() => setCurrentPage('learn')}
          className="px-8 py-3.5 bg-white text-[#6342E8] hover:bg-purple-50 font-bold text-xs rounded-full shadow-md transition-all hover:scale-105 inline-flex items-center gap-2"
        >
          <span>Buka Modul Pembelajaran</span>
          <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
