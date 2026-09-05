import React, { useState } from 'react';
import { Globe, Bell, ShieldCheck, Award, FileText, Image as ImageIcon, Users, BookOpen } from 'lucide-react';

interface NavbarProps {
  currentLang: 'en' | 'bn';
  onToggleLang: () => void;
  onOpenAdmissionModal: () => void;
  onOpenAdminLoginModal: () => void;
  marqueeText?: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentLang,
  onToggleLang,
  onOpenAdmissionModal,
  onOpenAdminLoginModal,
  marqueeText,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const defaultTickerText = marqueeText || 
    "🚨 ONLINE ADMISSION OPEN FOR CLASS V TO XI (SESSION 2026-27) | WBBSE & WBCHSE 2ND UNIT TEST ROUTINE PUBLISHED | KANYASHREE K1 & K2 GRANT DESK ACTIVE";

  return (
    <>
      {/* 1. Top Utility Header Badges & Quick Action Pills Strip */}
      <div className="bg-[#FAF7F2] text-slate-700 py-2 border-b border-[#E8DFD0] text-xs">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-between items-center gap-3">
          
          {/* Institutional Badges */}
          <div className="flex flex-wrap items-center gap-2 text-[11px]">
            <span className="bg-[#9D174D]/10 text-[#9D174D] border border-[#9D174D]/30 px-2.5 py-0.5 rounded-full font-bold">
              UDISE: 19190806002
            </span>
            <span className="bg-[#B45309]/10 text-[#B45309] border border-[#B45309]/30 px-2.5 py-0.5 rounded-full font-bold">
              {currentLang === 'bn' ? 'বাংলার শিক্ষা ID: WB-1945-MGGHS' : 'Banglar Shiksha ID: WB-1945-MGGHS'}
            </span>
            <span className="hidden sm:inline bg-[#047857]/10 text-[#047857] border border-[#047857]/30 px-2.5 py-0.5 rounded-full font-bold">
              WBBSE: E1-042 | WBCHSE: 105084
            </span>
            <span className="hidden lg:inline text-slate-600 font-semibold">
              📞 +91 3228 240211
            </span>
          </div>

          {/* Quick Action Top Pills */}
          <div className="flex items-center gap-2">
            <a
              href="#welfare"
              className="bg-white hover:bg-amber-50 text-[#B45309] border border-[#E8DFD0] text-[11px] font-bold px-2.5 py-1 rounded-lg transition-colors flex items-center gap-1 shadow-xs"
            >
              <Award className="w-3 h-3 text-[#B45309]" />
              <span>FEES & SCHOLARSHIPS</span>
            </a>

            <a
              href="#notices"
              className="bg-white hover:bg-rose-50 text-[#9D174D] border border-[#E8DFD0] text-[11px] font-bold px-2.5 py-1 rounded-lg transition-colors flex items-center gap-1 shadow-xs"
            >
              <FileText className="w-3 h-3 text-[#9D174D]" />
              <span>PROSPECTUS</span>
            </a>

            <a
              href="#gallery"
              className="bg-white hover:bg-blue-50 text-blue-700 border border-[#E8DFD0] text-[11px] font-bold px-2.5 py-1 rounded-lg transition-colors flex items-center gap-1 shadow-xs"
            >
              <ImageIcon className="w-3 h-3 text-blue-600" />
              <span>PICTURE GALLERY</span>
            </a>

            {/* Language Toggle Button */}
            <button
              onClick={onToggleLang}
              className="bg-[#B45309] hover:bg-[#92400E] text-white font-extrabold px-2.5 py-1 rounded-lg text-[11px] transition-colors flex items-center gap-1 ml-1 shadow-xs"
              title="Toggle Bengali / English Language"
            >
              <Globe className="w-3 h-3" />
              <span>{currentLang === 'en' ? 'বাংলা' : 'English'}</span>
            </button>
          </div>

        </div>
      </div>

      {/* 2. Running Alert Marquee Ticker Ribbon (Crimson / Burgundy) */}
      <div className="ticker-container py-1.5 px-4 text-xs flex items-center overflow-hidden">
        <div className="bg-amber-400 text-[#1E293B] font-extrabold px-3 py-0.5 rounded-full text-[11px] uppercase tracking-wider shrink-0 flex items-center gap-1.5 mr-3 shadow-sm">
          <span className="radar-dot-pulse"></span>
          <span>LIVE UPDATES</span>
        </div>
        <div className="overflow-hidden whitespace-nowrap w-full">
          <div className="inline-block animate-marquee font-bold text-amber-200 tracking-wide text-xs">
            <span>{defaultTickerText} &nbsp;&nbsp;&nbsp; • &nbsp;&nbsp;&nbsp; {defaultTickerText}</span>
          </div>
        </div>
      </div>

      {/* 3. Main Glass Navigation Header (Pure White / Light Ivory) */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#E8DFD0] text-slate-800 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          
          {/* Logo & School Branding */}
          <a href="#" className="flex items-center gap-3.5 group">
            <div className="w-14 h-14 rounded-full p-0.5 bg-gradient-to-r from-amber-500 to-[#9D174D] shrink-0 shadow-md group-hover:scale-105 transition-transform">
              <img
                src="/assets/school_logo.jpg"
                alt="MGGHS Logo Crest"
                className="w-full h-full object-contain rounded-full bg-white p-0.5"
              />
            </div>
            <div>
              <h1 className="font-serif font-extrabold text-lg md:text-xl text-[#1E293B] group-hover:text-[#9D174D] transition-colors leading-tight">
                {currentLang === 'bn'
                  ? 'মহিষাদল গায়েশ্বরী বালিকা উচ্চ বিদ্যালয় (উঃ মাঃ)'
                  : "Mahishadal Gayeswari Girls' High School (H.S.)"}
              </h1>
              <p className="text-[11px] text-[#B45309] font-bold">
                {currentLang === 'bn'
                  ? '১৯৪৫ সাল থেকে নারী শিক্ষা, বিজ্ঞান চর্চা ও শৃঙ্খলা | WBBSE & WBCHSE'
                  : "Govt. Sponsored Girls' Institution | Estd. 1945 | WBBSE & WBCHSE"}
              </p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 text-xs font-bold uppercase tracking-wider text-slate-700">
            <a href="#home" className="hover:text-[#9D174D] transition-colors">
              {currentLang === 'bn' ? 'মূল পাতা' : 'Home'}
            </a>
            <a href="#desk" className="hover:text-[#9D174D] transition-colors">
              {currentLang === 'bn' ? 'প্রশাসন ও শিক্ষকমণ্ডলী' : 'Administration'}
            </a>
            <a href="#academics" className="hover:text-[#9D174D] transition-colors">
              {currentLang === 'bn' ? 'পাঠ্যক্রম' : 'Academics'}
            </a>
            <a href="#notices" className="hover:text-[#9D174D] transition-colors">
              {currentLang === 'bn' ? 'নোটিশ বোর্ড' : 'Notices'}
            </a>
            <a href="#welfare" className="hover:text-[#9D174D] transition-colors">
              {currentLang === 'bn' ? 'সরকারি প্রকল্প' : 'Schemes'}
            </a>
            <a href="#facilities" className="hover:text-[#9D174D] transition-colors">
              {currentLang === 'bn' ? 'সুযোগ-সুবিধা' : 'Facilities'}
            </a>
            <a href="#gallery" className="hover:text-[#9D174D] transition-colors">
              {currentLang === 'bn' ? 'গ্যালারি' : 'Gallery'}
            </a>

            <button
              onClick={onOpenAdmissionModal}
              className="bg-gradient-to-r from-[#9D174D] to-[#B45309] hover:from-[#881337] hover:to-[#92400E] text-white font-extrabold px-4 py-2 rounded-full text-xs shadow-md transition-all transform hover:-translate-y-0.5"
            >
              {currentLang === 'bn' ? 'অনলাইন ভর্তি ২০২৬' : 'Admission Inquiry'}
            </button>
          </nav>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-700 hover:text-[#9D174D]"
            aria-label="Toggle Mobile Menu"
          >
            <i className={`fa-solid ${mobileMenuOpen ? 'fa-xmark text-xl' : 'fa-bars text-xl'}`}></i>
          </button>

        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-[#E8DFD0] px-4 py-4 space-y-3 text-sm font-bold text-slate-800 shadow-lg">
            <a href="#home" onClick={() => setMobileMenuOpen(false)} className="block py-1 hover:text-[#9D174D]">Home</a>
            <a href="#desk" onClick={() => setMobileMenuOpen(false)} className="block py-1 hover:text-[#9D174D]">Administration & Faculty</a>
            <a href="#academics" onClick={() => setMobileMenuOpen(false)} className="block py-1 hover:text-[#9D174D]">Academic Streams</a>
            <a href="#notices" onClick={() => setMobileMenuOpen(false)} className="block py-1 hover:text-[#9D174D]">Notice Board Hub</a>
            <a href="#welfare" onClick={() => setMobileMenuOpen(false)} className="block py-1 hover:text-[#9D174D]">Kanyashree & Govt Schemes</a>
            <a href="#facilities" onClick={() => setMobileMenuOpen(false)} className="block py-1 hover:text-[#9D174D]">Campus Facilities</a>
            <a href="#gallery" onClick={() => setMobileMenuOpen(false)} className="block py-1 hover:text-[#9D174D]">Photo Gallery</a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAdmissionModal();
              }}
              className="w-full bg-[#9D174D] text-white font-bold py-2.5 rounded-xl text-xs"
            >
              Online Admission Inquiry 2026
            </button>
          </div>
        )}
      </header>
    </>
  );
};
