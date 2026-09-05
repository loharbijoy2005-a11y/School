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
      <div className="bg-[#F5F1EA] text-slate-700 py-2 border-b border-[#DFD7C7] text-xs">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-between items-center gap-3">
          
          {/* Institutional Badges */}
          <div className="flex flex-wrap items-center gap-2 text-[11px]">
            <span className="bg-[#701A1E]/10 text-[#701A1E] border border-[#701A1E]/30 px-2.5 py-0.5 rounded-full font-bold">
              UDISE: 19190806002
            </span>
            <span className="bg-[#C58B24]/15 text-[#C58B24] border border-[#C58B24]/40 px-2.5 py-0.5 rounded-full font-bold">
              {currentLang === 'bn' ? 'বাংলার শিক্ষা ID: WB-1945-MGGHS' : 'Banglar Shiksha ID: WB-1945-MGGHS'}
            </span>
            <span className="hidden sm:inline bg-[#1B4332]/10 text-[#1B4332] border border-[#1B4332]/30 px-2.5 py-0.5 rounded-full font-bold">
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
              className="bg-white hover:bg-amber-50 text-[#C58B24] border border-[#DFD7C7] text-[11px] font-bold px-2.5 py-1 rounded-lg transition-colors flex items-center gap-1 shadow-xs"
            >
              <Award className="w-3 h-3 text-[#C58B24]" />
              <span>FEES & SCHOLARSHIPS</span>
            </a>

            <a
              href="#notices"
              className="bg-white hover:bg-rose-50 text-[#701A1E] border border-[#DFD7C7] text-[11px] font-bold px-2.5 py-1 rounded-lg transition-colors flex items-center gap-1 shadow-xs"
            >
              <FileText className="w-3 h-3 text-[#701A1E]" />
              <span>PROSPECTUS</span>
            </a>

            <a
              href="#gallery"
              className="bg-white hover:bg-blue-50 text-blue-800 border border-[#DFD7C7] text-[11px] font-bold px-2.5 py-1 rounded-lg transition-colors flex items-center gap-1 shadow-xs"
            >
              <ImageIcon className="w-3 h-3 text-blue-700" />
              <span>PICTURE GALLERY</span>
            </a>

            {/* Language Toggle Button */}
            <button
              onClick={onToggleLang}
              className="bg-[#C58B24] hover:bg-[#A36F1A] text-white font-extrabold px-2.5 py-1 rounded-lg text-[11px] transition-colors flex items-center gap-1 ml-1 shadow-xs"
              title="Toggle Bengali / English Language"
            >
              <Globe className="w-3 h-3" />
              <span>{currentLang === 'en' ? 'বাংলা' : 'English'}</span>
            </button>
          </div>

        </div>
      </div>

      {/* 2. Running Alert Marquee Ticker Ribbon (Royal Maroon #701A1E) */}
      <div className="ticker-container py-1.5 px-4 text-xs flex items-center overflow-hidden">
        <div className="bg-[#C58B24] text-white font-extrabold px-3 py-0.5 rounded-full text-[11px] uppercase tracking-wider shrink-0 flex items-center gap-1.5 mr-3 shadow-xs">
          <span className="radar-dot-pulse"></span>
          <span>LIVE UPDATES</span>
        </div>
        <div className="overflow-hidden whitespace-nowrap w-full">
          <div className="inline-block animate-marquee font-bold text-amber-200 tracking-wide text-xs">
            <span>{defaultTickerText} &nbsp;&nbsp;&nbsp; • &nbsp;&nbsp;&nbsp; {defaultTickerText}</span>
          </div>
        </div>
      </div>

      {/* 3. Main Glass Navigation Header (Off-White Paper Finish #FBF9F5) */}
      <header className="sticky top-0 z-40 bg-[#FBF9F5]/95 backdrop-blur-md border-b border-[#DFD7C7] text-[#292524] shadow-xs">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          
          {/* Logo & School Branding */}
          <a href="#" className="flex items-center gap-3.5 group">
            <div className="w-14 h-14 rounded-full p-0.5 bg-gradient-to-r from-[#C58B24] to-[#701A1E] shrink-0 shadow-md group-hover:scale-105 transition-transform border border-[#C58B24]">
              <img
                src="/assets/school_logo.jpg"
                alt="MGGHS Logo Crest"
                className="w-full h-full object-contain rounded-full bg-white p-0.5"
              />
            </div>
            <div>
              <h1 className="font-serif font-extrabold text-lg md:text-xl text-[#292524] group-hover:text-[#701A1E] transition-colors leading-tight">
                {currentLang === 'bn'
                  ? 'মহিষাদল গায়েশ্বরী বালিকা উচ্চ বিদ্যালয় (উঃ মাঃ)'
                  : "Mahishadal Gayeswari Girls' High School (H.S.)"}
              </h1>
              <p className="text-[11px] text-[#C58B24] font-bold">
                {currentLang === 'bn'
                  ? '১৯৪৫ সাল থেকে নারী শিক্ষা, বিজ্ঞান চর্চা ও শৃঙ্খলা | WBBSE & WBCHSE'
                  : "Govt. Sponsored Girls' Institution | Estd. 1945 | WBBSE & WBCHSE"}
              </p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 text-xs font-bold uppercase tracking-wider text-slate-700">
            <a href="#home" className="hover:text-[#701A1E] transition-colors">
              {currentLang === 'bn' ? 'মূল পাতা' : 'Home'}
            </a>
            <a href="#desk" className="hover:text-[#701A1E] transition-colors">
              {currentLang === 'bn' ? 'প্রশাসন ও শিক্ষকমণ্ডলী' : 'Administration'}
            </a>
            <a href="#academics" className="hover:text-[#701A1E] transition-colors">
              {currentLang === 'bn' ? 'পাঠ্যক্রম' : 'Academics'}
            </a>
            <a href="#notices" className="hover:text-[#701A1E] transition-colors">
              {currentLang === 'bn' ? 'নোটিশ বোর্ড' : 'Notices'}
            </a>
            <a href="#welfare" className="hover:text-[#701A1E] transition-colors">
              {currentLang === 'bn' ? 'সরকারি প্রকল্প' : 'Schemes'}
            </a>
            <a href="#facilities" className="hover:text-[#701A1E] transition-colors">
              {currentLang === 'bn' ? 'সুযোগ-সুবিধা' : 'Facilities'}
            </a>
            <a href="#gallery" className="hover:text-[#701A1E] transition-colors">
              {currentLang === 'bn' ? 'গ্যালারি' : 'Gallery'}
            </a>

            <button
              onClick={onOpenAdmissionModal}
              className="bg-[#701A1E] hover:bg-[#501215] text-white font-extrabold px-4 py-2 rounded-full text-xs shadow-md transition-all transform hover:-translate-y-0.5"
            >
              {currentLang === 'bn' ? 'অনলাইন ভর্তি ২০২৬' : 'Admission Inquiry'}
            </button>
          </nav>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-700 hover:text-[#701A1E]"
            aria-label="Toggle Mobile Menu"
          >
            <i className={`fa-solid ${mobileMenuOpen ? 'fa-xmark text-xl' : 'fa-bars text-xl'}`}></i>
          </button>

        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#FAF7F0] border-t border-[#DFD7C7] px-4 py-4 space-y-3 text-sm font-bold text-slate-800 shadow-lg">
            <a href="#home" onClick={() => setMobileMenuOpen(false)} className="block py-1 hover:text-[#701A1E]">Home</a>
            <a href="#desk" onClick={() => setMobileMenuOpen(false)} className="block py-1 hover:text-[#701A1E]">Administration & Faculty</a>
            <a href="#academics" onClick={() => setMobileMenuOpen(false)} className="block py-1 hover:text-[#701A1E]">Academic Streams</a>
            <a href="#notices" onClick={() => setMobileMenuOpen(false)} className="block py-1 hover:text-[#701A1E]">Notice Board Hub</a>
            <a href="#welfare" onClick={() => setMobileMenuOpen(false)} className="block py-1 hover:text-[#701A1E]">Kanyashree & Govt Schemes</a>
            <a href="#facilities" onClick={() => setMobileMenuOpen(false)} className="block py-1 hover:text-[#701A1E]">Campus Facilities</a>
            <a href="#gallery" onClick={() => setMobileMenuOpen(false)} className="block py-1 hover:text-[#701A1E]">Photo Gallery</a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAdmissionModal();
              }}
              className="w-full bg-[#701A1E] text-white font-bold py-2.5 rounded-xl text-xs"
            >
              Online Admission Inquiry 2026
            </button>
          </div>
        )}
      </header>
    </>
  );
};
