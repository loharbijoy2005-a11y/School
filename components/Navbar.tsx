import React, { useState } from 'react';
import { Globe, Award, FileText, Image as ImageIcon, CreditCard, User, MapPin, Sparkles, Phone, Facebook, Youtube } from 'lucide-react';

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
    "Admission Open for Classes V to XI (Session 2026-27) | WBBSE & WBCHSE 2nd Unit Test Schedule Published | Kanyashree K1 & K2 Verification Desk Active";

  return (
    <>
      {/* 1. Top Ribbon 1 (Dark Forest Green Strip #0F2E23) */}
      <div className="bg-[#0F2E23] text-white py-1.5 px-4 text-[11px] border-b border-emerald-900/60 font-sans">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          
          <div className="flex items-center gap-2 overflow-hidden text-slate-200">
            <span className="bg-red-600 text-white font-extrabold px-2 py-0.5 rounded text-[10px] uppercase tracking-wider shrink-0">
              UPDATES
            </span>
            <span className="truncate font-semibold">
              • Established 1945 • Welcome to Mahishadal Gayeswari Girls' High School (H.S.) • Affiliated to WBBSE & WBCHSE • UDISE: 19190806002
            </span>
          </div>

          <div className="flex items-center gap-3 shrink-0 text-slate-300 font-medium">
            <span className="hidden md:inline italic text-amber-300 font-serif">
              Excellence in Female Education
            </span>
            <div className="flex items-center gap-2 border-l border-emerald-800 pl-3">
              <a href="#" className="hover:text-amber-400 transition-colors"><Facebook className="w-3.5 h-3.5" /></a>
              <a href="#" className="hover:text-amber-400 transition-colors"><Youtube className="w-3.5 h-3.5" /></a>
              <button 
                onClick={onOpenAdminLoginModal} 
                className="hover:text-amber-400 transition-colors font-bold text-[10px] uppercase border border-emerald-700 px-2 py-0.5 rounded bg-emerald-950/60"
                title="Admin Console Login"
              >
                🔒 Admin Login
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* 2. Top Ribbon 2 (Gold Gradient Marquee Ribbon matching reference screenshot) */}
      <div className="bg-gradient-to-r from-amber-100 via-amber-200 to-yellow-100 text-slate-900 border-b border-amber-300 py-1.5 px-4 flex items-center overflow-hidden">
        <div className="max-w-7xl mx-auto w-full flex items-center">
          <div className="bg-[#0F2E23] text-amber-300 font-extrabold px-3 py-1 rounded-l-md text-[11px] uppercase tracking-wider shrink-0 flex items-center gap-1.5 shadow-sm border-r-2 border-amber-400">
            <span>🚩 LATEST UPDATES</span>
          </div>
          <div className="overflow-hidden whitespace-nowrap w-full pl-3">
            <div className="inline-block animate-marquee font-extrabold text-slate-800 tracking-wide text-xs">
              <span className="inline-flex items-center gap-2">
                <span>{defaultTickerText}</span>
                <span className="bg-rose-700 text-white text-[9px] font-bold px-1.5 py-0.2 rounded uppercase">NEW</span>
                <span>&nbsp;&nbsp;&nbsp; • &nbsp;&nbsp;&nbsp;</span>
                <span>WBBSE 2nd Unit Test Routine Published</span>
                <span className="bg-rose-700 text-white text-[9px] font-bold px-1.5 py-0.2 rounded uppercase">NEW</span>
                <span>&nbsp;&nbsp;&nbsp; • &nbsp;&nbsp;&nbsp;</span>
                <span>Kanyashree K1 & K2 Verification Desk Active</span>
                <span className="bg-rose-700 text-white text-[9px] font-bold px-1.5 py-0.2 rounded uppercase">NEW</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Header Branding Box (Warm Cream #FDFBF7 matching reference screenshot) */}
      <div className="bg-[#FDFBF7] border-b border-[#E2D7C3] py-4 px-4">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-4">
          
          {/* Logo & School Name */}
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-20 h-20 rounded-full p-1 bg-gradient-to-r from-amber-400 via-rose-700 to-[#0F2E23] shrink-0 shadow-md border border-amber-300">
              <img
                src="/assets/school_logo.jpg"
                alt="MGGHS Crest Logo"
                className="w-full h-full object-contain rounded-full bg-white p-1"
              />
            </div>

            <div className="space-y-1">
              <h1 className="font-serif font-black text-xl sm:text-2xl lg:text-3xl text-slate-900 tracking-tight leading-none uppercase">
                {currentLang === 'bn'
                  ? 'মহিষাদল গায়েশ্বরী বালিকা উচ্চ বিদ্যালয় (উঃ মাঃ)'
                  : "MAHISHADAL GAYESWARI GIRLS' HIGH SCHOOL (H.S.)"}
              </h1>
              <p className="text-xs text-slate-700 italic font-medium">
                (Government Sponsored Girls' Higher Secondary School)
              </p>
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 text-[11px] font-bold text-[#881337] pt-0.5">
                <span className="flex items-center gap-1 text-amber-700">★ Affiliated to WBBSE & WBCHSE</span>
                <span>• Banglar Shiksha ID: WB-1945-MGGHS</span>
              </div>
              <p className="text-[11px] text-slate-600 font-semibold flex items-center justify-center sm:justify-start gap-1">
                <MapPin className="w-3.5 h-3.5 text-rose-700 shrink-0" />
                <span>GARKAMALPUR • MAHISHADAL • PURBA MEDINIPUR - 721628</span>
              </p>
            </div>
          </div>

          {/* Center Stamp Badge (Matching Quality Learning Stamp from Reference Screenshot) */}
          <div className="hidden xl:flex items-center justify-center shrink-0">
            <div className="w-24 h-24 rounded-full border-2 border-dashed border-[#0F2E23] p-1 flex items-center justify-center text-center bg-amber-50/60 shadow-xs">
              <div className="w-full h-full rounded-full bg-[#0F2E23] text-amber-300 p-2 flex flex-col items-center justify-center leading-none">
                <Sparkles className="w-4 h-4 text-amber-400 mb-1" />
                <span className="text-[9px] font-black uppercase tracking-tight">PIONEER IN</span>
                <span className="text-[10px] font-serif font-bold text-white mt-0.5">GIRLS TECH</span>
                <span className="text-[8px] text-amber-300 font-semibold mt-0.5">ESTD 1945</span>
              </div>
            </div>
          </div>

          {/* Right Action Pills (Matching Fees & Profile Pills from Reference Screenshot) */}
          <div className="flex flex-col sm:flex-row lg:flex-col gap-2.5 shrink-0 w-full sm:w-auto">
            
            <a
              href="#welfare"
              className="bg-gradient-to-r from-rose-800 to-amber-800 hover:from-rose-900 hover:to-amber-900 text-white px-5 py-2.5 rounded-full text-xs font-extrabold flex items-center justify-center gap-2.5 shadow-md transition-all uppercase tracking-wider border border-rose-900 cursor-pointer"
            >
              <CreditCard className="w-4 h-4 text-amber-300" />
              <div className="text-left leading-none">
                <span className="block text-[11px]">FEES & SCHOLARSHIPS</span>
                <span className="text-[9px] text-amber-200 font-normal">GOVT WELFARE DESK</span>
              </div>
            </a>

            <button
              onClick={onOpenAdmissionModal}
              className="bg-gradient-to-r from-[#0F2E23] to-emerald-900 hover:from-[#091f17] hover:to-emerald-950 text-white px-5 py-2.5 rounded-full text-xs font-extrabold flex items-center justify-center gap-2.5 shadow-md transition-all uppercase tracking-wider border border-emerald-950 cursor-pointer"
            >
              <User className="w-4 h-4 text-amber-300" />
              <div className="text-left leading-none">
                <span className="block text-[11px]">STUDENT ADMISSION 2026</span>
                <span className="text-[9px] text-emerald-200 font-normal">ONLINE INQUIRY PORTAL →</span>
              </div>
            </button>

          </div>

        </div>
      </div>

      {/* 4. Main Navigation Bar (Full Width Dark Forest Green #0F2E23 matching reference screenshot) */}
      <header className="sticky top-0 z-40 bg-[#0F2E23] text-white border-b-2 border-amber-500 shadow-md">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          
          {/* Main Desktop Links */}
          <nav className="hidden lg:flex items-center gap-1 text-xs font-extrabold uppercase tracking-wider">
            <a href="#home" className="px-4 py-3 bg-emerald-950 border-b-2 border-amber-400 text-amber-300 font-black">
              HOME
            </a>
            <a href="#desk" className="px-4 py-3 hover:bg-emerald-900/60 hover:text-amber-300 transition-colors">
              ADMINISTRATION ▾
            </a>
            <a href="#academics" className="px-4 py-3 hover:bg-emerald-900/60 hover:text-amber-300 transition-colors">
              ACADEMICS ▾
            </a>
            <a href="#notices" className="px-4 py-3 hover:bg-emerald-900/60 hover:text-amber-300 transition-colors">
              NOTICES ▾
            </a>
            <a href="#welfare" className="px-4 py-3 hover:bg-emerald-900/60 hover:text-amber-300 transition-colors">
              SCHEMES ▾
            </a>
            <a href="#facilities" className="px-4 py-3 hover:bg-emerald-900/60 hover:text-amber-300 transition-colors">
              FACILITIES ▾
            </a>
            <a href="#gallery" className="px-4 py-3 hover:bg-emerald-900/60 hover:text-amber-300 transition-colors">
              GALLERY ▾
            </a>
            <a href="#contact" className="px-4 py-3 hover:bg-emerald-900/60 hover:text-amber-300 transition-colors">
              CONTACT
            </a>
          </nav>

          {/* Right Header Buttons inside Dark Green Bar */}
          <div className="hidden lg:flex items-center gap-2 py-1.5">
            <a
              href="#notices"
              className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-black px-3.5 py-1.5 rounded text-xs flex items-center gap-1.5 transition-colors shadow-xs"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>PROSPECTUS</span>
            </a>

            <a
              href="#gallery"
              className="hover:text-amber-300 font-extrabold text-xs px-3 py-1.5 transition-colors"
            >
              PICTURE GALLERY
            </a>

            <button
              onClick={onToggleLang}
              className="bg-emerald-800 hover:bg-emerald-700 text-amber-200 font-bold px-2.5 py-1 rounded text-xs transition-colors flex items-center gap-1 border border-emerald-600 ml-1 cursor-pointer"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>{currentLang === 'en' ? 'বাংলা' : 'ENG'}</span>
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="lg:hidden py-3 flex items-center justify-between w-full">
            <span className="font-extrabold text-xs tracking-wider text-amber-300 uppercase">
              MGGHS PORTAL MENU
            </span>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1 text-amber-300 hover:text-white"
              aria-label="Toggle Mobile Menu"
            >
              <i className={`fa-solid ${mobileMenuOpen ? 'fa-xmark text-2xl' : 'fa-bars text-2xl'}`}></i>
            </button>
          </div>

        </div>

        {/* Mobile Menu Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#0A2018] border-t border-emerald-800 px-4 py-4 space-y-2 text-xs font-bold text-slate-200">
            <a href="#home" onClick={() => setMobileMenuOpen(false)} className="block py-2 border-b border-emerald-900/60 hover:text-amber-300">HOME</a>
            <a href="#desk" onClick={() => setMobileMenuOpen(false)} className="block py-2 border-b border-emerald-900/60 hover:text-amber-300">ADMINISTRATION & FACULTY</a>
            <a href="#academics" onClick={() => setMobileMenuOpen(false)} className="block py-2 border-b border-emerald-900/60 hover:text-amber-300">ACADEMIC STREAMS</a>
            <a href="#notices" onClick={() => setMobileMenuOpen(false)} className="block py-2 border-b border-emerald-900/60 hover:text-amber-300">NOTICE BOARD HUB</a>
            <a href="#welfare" onClick={() => setMobileMenuOpen(false)} className="block py-2 border-b border-emerald-900/60 hover:text-amber-300">KANYASHREE & SCHEMES</a>
            <a href="#facilities" onClick={() => setMobileMenuOpen(false)} className="block py-2 border-b border-emerald-900/60 hover:text-amber-300">CAMPUS FACILITIES</a>
            <a href="#gallery" onClick={() => setMobileMenuOpen(false)} className="block py-2 border-b border-emerald-900/60 hover:text-amber-300">PHOTO GALLERY</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="block py-2 hover:text-amber-300">CONTACT US</a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAdmissionModal();
              }}
              className="w-full bg-rose-700 text-white font-bold py-2.5 rounded-lg text-xs mt-2"
            >
              ONLINE ADMISSION INQUIRY 2026
            </button>
          </div>
        )}
      </header>
    </>
  );
};
