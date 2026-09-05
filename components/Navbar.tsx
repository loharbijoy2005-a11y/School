import React, { useState } from 'react';
import { Globe, Award, FileText, Image as ImageIcon, CreditCard, User, MapPin, Sparkles, Phone, Facebook, Youtube, ChevronDown, Lock } from 'lucide-react';

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
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const defaultTickerText = marqueeText || 
    "Admission Open for Classes V to XI (Session 2026-27) | WBBSE & WBCHSE 2nd Unit Test Schedule Published | Kanyashree K1 & K2 Verification Desk Active";

  return (
    <>
      {/* 1. Top Utility Ribbon (Dark Forest Green Strip #0F2E23) */}
      <div className="bg-[#0F2E23] text-white py-1.5 px-4 text-[11px] border-b border-emerald-900/60 font-sans">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          
          <div className="flex items-center gap-2 overflow-hidden text-slate-200">
            <span className="bg-rose-700 text-white font-extrabold px-2 py-0.5 rounded text-[10px] uppercase tracking-wider shrink-0 animate-pulse">
              UPDATES
            </span>
            <span className="truncate font-semibold">
              Welcome to Mahishadal Gayeswari Girls' High School (H.S.) • Estd 1945 • WBBSE & WBCHSE Recognized • UDISE: 19190806002
            </span>
          </div>

          <div className="flex items-center gap-3 shrink-0 text-slate-300 font-medium">
            <span className="hidden md:inline italic text-amber-300 font-serif">
              Excellence in Female Education & Empowerment
            </span>
            <div className="flex items-center gap-2 border-l border-emerald-800 pl-3">
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-amber-400 transition-colors" title="Facebook Page">
                <Facebook className="w-3.5 h-3.5" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" className="hover:text-amber-400 transition-colors" title="YouTube Channel">
                <Youtube className="w-3.5 h-3.5" />
              </a>
              <span className="h-3 w-[1px] bg-emerald-800"></span>
              <button 
                onClick={onOpenAdminLoginModal} 
                className="hover:text-amber-300 transition-colors font-bold text-[10px] uppercase border border-amber-500/40 px-2 py-0.5 rounded bg-emerald-950/80 flex items-center gap-1 text-amber-200 cursor-pointer shadow-xs"
                title="Admin Console Login"
              >
                <Lock className="w-3 h-3 text-amber-400" />
                <span>Admin Login</span>
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* 2. Gold Gradient Marquee Ribbon matching mgcwb.ac.in */}
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
                <span>WBBSE Madhyamik & WBCHSE HS Exam Routine 2026</span>
                <span className="bg-rose-700 text-white text-[9px] font-bold px-1.5 py-0.2 rounded uppercase">NEW</span>
                <span>&nbsp;&nbsp;&nbsp; • &nbsp;&nbsp;&nbsp;</span>
                <span>Kanyashree K1 & K2 Verification Desk Active</span>
                <span className="bg-rose-700 text-white text-[9px] font-bold px-1.5 py-0.2 rounded uppercase">NEW</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Header Branding Box (Warm Cream #FDFBF7 matching mgcwb.ac.in) */}
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
                <span className="flex items-center gap-1 text-amber-700">★ Recognized by WBBSE & WBCHSE</span>
                <span>• Banglar Shiksha ID: WB-1945-MGGHS</span>
              </div>
              <p className="text-[11px] text-slate-600 font-semibold flex items-center justify-center sm:justify-start gap-1">
                <MapPin className="w-3.5 h-3.5 text-rose-700 shrink-0" />
                <span>GARKAMALPUR • MAHISHADAL • PURBA MEDINIPUR - 721628</span>
              </p>
            </div>
          </div>

          {/* Center Quality Emblem (Matching Quality Learning Stamp from mgcwb.ac.in) */}
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

          {/* Right Action Pills (Matching Fees & Profile Management Pills from mgcwb.ac.in) */}
          <div className="flex flex-col sm:flex-row lg:flex-col gap-2.5 shrink-0 w-full sm:w-auto">
            
            <a
              href="#welfare"
              className="bg-gradient-to-r from-rose-800 via-rose-900 to-amber-900 hover:from-rose-900 hover:to-amber-950 text-white px-5 py-2.5 rounded-full text-xs font-extrabold flex items-center justify-center gap-2.5 shadow-md transition-all uppercase tracking-wider border border-rose-950 cursor-pointer"
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

      {/* 4. Main Navigation Bar with Dropdown Menus (Dark Forest Green #0F2E23) */}
      <header className="sticky top-0 z-40 bg-[#0F2E23] text-white border-b-2 border-amber-500 shadow-md">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          
          {/* Main Desktop Links & Multi-Level Dropdowns */}
          <nav className="hidden lg:flex items-center gap-1 text-xs font-extrabold uppercase tracking-wider">
            
            {/* Home */}
            <a href="#home" className="px-3.5 py-3 bg-emerald-950 border-b-2 border-amber-400 text-amber-300 font-black">
              HOME
            </a>

            {/* About Us Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setActiveDropdown('about')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <a href="#desk" className="px-3.5 py-3 flex items-center gap-1 hover:bg-emerald-900/80 hover:text-amber-300 transition-colors">
                <span>ABOUT US</span>
                <ChevronDown className="w-3 h-3 text-amber-400" />
              </a>
              <div className="absolute top-full left-0 w-64 bg-[#0A2018] border border-emerald-800 shadow-2xl rounded-b-xl hidden group-hover:block overflow-hidden z-50 text-xs font-bold capitalize tracking-normal">
                <a href="#desk" className="block px-4 py-2.5 hover:bg-emerald-900 text-slate-200 hover:text-amber-300 border-b border-emerald-900/60">History of the School (Estd 1945)</a>
                <a href="#desk" className="block px-4 py-2.5 hover:bg-emerald-900 text-slate-200 hover:text-amber-300 border-b border-emerald-900/60">Institutional Core Values</a>
                <a href="#desk" className="block px-4 py-2.5 hover:bg-emerald-900 text-slate-200 hover:text-amber-300 border-b border-emerald-900/60">WBBSE & WBCHSE Recognition</a>
                <a href="#desk" className="block px-4 py-2.5 hover:bg-emerald-900 text-slate-200 hover:text-amber-300 border-b border-emerald-900/60">School Achievements & Board Results</a>
                <a href="#alumni" className="block px-4 py-2.5 hover:bg-emerald-900 text-slate-200 hover:text-amber-300">Alumni Association (Praktani Sabha)</a>
              </div>
            </div>

            {/* Administration Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setActiveDropdown('admin')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <a href="#desk" className="px-3.5 py-3 flex items-center gap-1 hover:bg-emerald-900/80 hover:text-amber-300 transition-colors">
                <span>ADMINISTRATION</span>
                <ChevronDown className="w-3 h-3 text-amber-400" />
              </a>
              <div className="absolute top-full left-0 w-64 bg-[#0A2018] border border-emerald-800 shadow-2xl rounded-b-xl hidden group-hover:block overflow-hidden z-50 text-xs font-bold capitalize tracking-normal">
                <a href="#desk" className="block px-4 py-2.5 hover:bg-emerald-900 text-slate-200 hover:text-amber-300 border-b border-emerald-900/60">School Managing Committee (SMC)</a>
                <a href="#desk" className="block px-4 py-2.5 hover:bg-emerald-900 text-slate-200 hover:text-amber-300 border-b border-emerald-900/60">Headmistress's Desk (Smt. Kalyani Maity)</a>
                <a href="#desk" className="block px-4 py-2.5 hover:bg-emerald-900 text-slate-200 hover:text-amber-300 border-b border-emerald-900/60">Office & Accounts Administration</a>
                <a href="#desk" className="block px-4 py-2.5 hover:bg-emerald-900 text-slate-200 hover:text-amber-300 border-b border-emerald-900/60">Central Library Administration</a>
                <a href="#desk" className="block px-4 py-2.5 hover:bg-emerald-900 text-slate-200 hover:text-amber-300">Non-Teaching & Support Staff</a>
              </div>
            </div>

            {/* Academics Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setActiveDropdown('academics')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <a href="#academics" className="px-3.5 py-3 flex items-center gap-1 hover:bg-emerald-900/80 hover:text-amber-300 transition-colors">
                <span>ACADEMICS</span>
                <ChevronDown className="w-3 h-3 text-amber-400" />
              </a>
              <div className="absolute top-full left-0 w-64 bg-[#0A2018] border border-emerald-800 shadow-2xl rounded-b-xl hidden group-hover:block overflow-hidden z-50 text-xs font-bold capitalize tracking-normal">
                <a href="#academics" className="block px-4 py-2.5 hover:bg-emerald-900 text-slate-200 hover:text-amber-300 border-b border-emerald-900/60">Class V to X Secondary (WBBSE)</a>
                <a href="#academics" className="block px-4 py-2.5 hover:bg-emerald-900 text-slate-200 hover:text-amber-300 border-b border-emerald-900/60">Class XI & XII Higher Secondary (WBCHSE)</a>
                <a href="#academics" className="block px-4 py-2.5 hover:bg-emerald-900 text-slate-200 hover:text-amber-300 border-b border-emerald-900/60">Science & Arts Streams Matrix</a>
                <a href="#desk" className="block px-4 py-2.5 hover:bg-emerald-900 text-slate-200 hover:text-amber-300 border-b border-emerald-900/60">Faculty Directory (Teaching Staff)</a>
                <a href="#academics" className="block px-4 py-2.5 hover:bg-emerald-900 text-slate-200 hover:text-amber-300">Rules & School Uniform Code</a>
              </div>
            </div>

            {/* Facilities Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setActiveDropdown('facilities')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <a href="#facilities" className="px-3.5 py-3 flex items-center gap-1 hover:bg-emerald-900/80 hover:text-amber-300 transition-colors">
                <span>FACILITIES</span>
                <ChevronDown className="w-3 h-3 text-amber-400" />
              </a>
              <div className="absolute top-full left-0 w-64 bg-[#0A2018] border border-emerald-800 shadow-2xl rounded-b-xl hidden group-hover:block overflow-hidden z-50 text-xs font-bold capitalize tracking-normal">
                <a href="#facilities" className="block px-4 py-2.5 hover:bg-emerald-900 text-slate-200 hover:text-amber-300 border-b border-emerald-900/60">ICT Smart Computer Classrooms</a>
                <a href="#facilities" className="block px-4 py-2.5 hover:bg-emerald-900 text-slate-200 hover:text-amber-300 border-b border-emerald-900/60">Physics, Chemistry & Biology Labs</a>
                <a href="#facilities" className="block px-4 py-2.5 hover:bg-emerald-900 text-slate-200 hover:text-amber-300 border-b border-emerald-900/60">Central Library & Reading Room</a>
                <a href="#facilities" className="block px-4 py-2.5 hover:bg-emerald-900 text-slate-200 hover:text-amber-300 border-b border-emerald-900/60">Karate & Self-Defense Training Hall</a>
                <a href="#facilities" className="block px-4 py-2.5 hover:bg-emerald-900 text-slate-200 hover:text-amber-300">Clean Drinking Water & Sanitation</a>
              </div>
            </div>

            {/* Activities Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setActiveDropdown('activities')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <a href="#seminars" className="px-3.5 py-3 flex items-center gap-1 hover:bg-emerald-900/80 hover:text-amber-300 transition-colors">
                <span>ACTIVITIES</span>
                <ChevronDown className="w-3 h-3 text-amber-400" />
              </a>
              <div className="absolute top-full left-0 w-64 bg-[#0A2018] border border-emerald-800 shadow-2xl rounded-b-xl hidden group-hover:block overflow-hidden z-50 text-xs font-bold capitalize tracking-normal">
                <a href="#seminars" className="block px-4 py-2.5 hover:bg-emerald-900 text-slate-200 hover:text-amber-300 border-b border-emerald-900/60">Kanyashree Club & Eco Club</a>
                <a href="#seminars" className="block px-4 py-2.5 hover:bg-emerald-900 text-slate-200 hover:text-amber-300 border-b border-emerald-900/60">NCC Girls Wing Battalion</a>
                <a href="#seminars" className="block px-4 py-2.5 hover:bg-emerald-900 text-slate-200 hover:text-amber-300 border-b border-emerald-900/60">Annual Patrika ("Gayeswari Arghya")</a>
                <a href="#seminars" className="block px-4 py-2.5 hover:bg-emerald-900 text-slate-200 hover:text-amber-300">Saraswati Puja & Cultural Competitions</a>
              </div>
            </div>

            {/* Schemes / Welfare */}
            <a href="#welfare" className="px-3.5 py-3 hover:bg-emerald-900/80 hover:text-amber-300 transition-colors">
              SCHEMES
            </a>

            {/* Contact */}
            <a href="#contact" className="px-3.5 py-3 hover:bg-emerald-900/80 hover:text-amber-300 transition-colors">
              CONTACT
            </a>

          </nav>

          {/* Right Header Action Buttons (Prospectus, Gallery, Lang Toggle) */}
          <div className="hidden lg:flex items-center gap-2 py-1.5">
            <a
              href="#notices"
              className="bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-slate-950 font-black px-3.5 py-1.5 rounded-lg text-xs flex items-center gap-1.5 transition-all shadow-xs uppercase tracking-wider"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>PROSPECTUS</span>
            </a>

            <a
              href="#gallery"
              className="hover:text-amber-300 font-extrabold text-xs px-3 py-1.5 transition-colors uppercase tracking-wider"
            >
              PICTURE GALLERY
            </a>

            <button
              onClick={onToggleLang}
              className="bg-emerald-800 hover:bg-emerald-700 text-amber-200 font-bold px-2.5 py-1 rounded-lg text-xs transition-colors flex items-center gap-1 border border-emerald-600 ml-1 cursor-pointer"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>{currentLang === 'en' ? 'বাংলা' : 'ENG'}</span>
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="lg:hidden py-3 flex items-center justify-between w-full">
            <span className="font-extrabold text-xs tracking-wider text-amber-300 uppercase">
              MGGHS SCHOOL PORTAL
            </span>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1 text-amber-300 hover:text-white cursor-pointer"
              aria-label="Toggle Mobile Menu"
            >
              <i className={`fa-solid ${mobileMenuOpen ? 'fa-xmark text-2xl' : 'fa-bars text-2xl'}`}></i>
            </button>
          </div>

        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#0A2018] border-t border-emerald-800 px-4 py-4 space-y-2 text-xs font-bold text-slate-200">
            <a href="#home" onClick={() => setMobileMenuOpen(false)} className="block py-2 border-b border-emerald-900/60 hover:text-amber-300">HOME</a>
            <a href="#desk" onClick={() => setMobileMenuOpen(false)} className="block py-2 border-b border-emerald-900/60 hover:text-amber-300">ABOUT US & HISTORY (ESTD 1945)</a>
            <a href="#desk" onClick={() => setMobileMenuOpen(false)} className="block py-2 border-b border-emerald-900/60 hover:text-amber-300">ADMINISTRATION & FACULTY</a>
            <a href="#academics" onClick={() => setMobileMenuOpen(false)} className="block py-2 border-b border-emerald-900/60 hover:text-amber-300">ACADEMICS (WBBSE & WBCHSE)</a>
            <a href="#notices" onClick={() => setMobileMenuOpen(false)} className="block py-2 border-b border-emerald-900/60 hover:text-amber-300">NOTICE BOARD HUB</a>
            <a href="#welfare" onClick={() => setMobileMenuOpen(false)} className="block py-2 border-b border-emerald-900/60 hover:text-amber-300">KANYASHREE & GOVT SCHEMES</a>
            <a href="#facilities" onClick={() => setMobileMenuOpen(false)} className="block py-2 border-b border-emerald-900/60 hover:text-amber-300">CAMPUS FACILITIES</a>
            <a href="#gallery" onClick={() => setMobileMenuOpen(false)} className="block py-2 border-b border-emerald-900/60 hover:text-amber-300">PHOTO GALLERY</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="block py-2 hover:text-amber-300">CONTACT US</a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAdmissionModal();
              }}
              className="w-full bg-rose-700 hover:bg-rose-800 text-white font-bold py-2.5 rounded-lg text-xs mt-2 transition-colors cursor-pointer"
            >
              ONLINE ADMISSION INQUIRY 2026
            </button>
          </div>
        )}
      </header>
    </>
  );
};

