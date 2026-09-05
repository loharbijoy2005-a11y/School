import React, { useState } from 'react';
import { Globe, Bell, Menu, X, Phone, Mail, ShieldCheck, Lock, UserCheck, BookOpen, CreditCard } from 'lucide-react';

interface NavbarProps {
  currentLang: 'en' | 'bn';
  onToggleLang: () => void;
  onOpenAdmissionModal: () => void;
  onOpenAdminLoginModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentLang,
  onToggleLang,
  onOpenAdmissionModal,
  onOpenAdminLoginModal,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const tickerItems = [
    'Class XI Admission Open 2026-27 | Madhyamik & HS Practical Schedules Published',
    'Kanyashree K1 & K2 Annual Grant Verification Desk Active at Office',
    'Taruner Swapna Class XII ₹10,000 Tab Scheme Account Validation Open',
    'Admission Open for Class V to IX (Session 2026-27)',
  ];

  return (
    <>
      {/* Top Utility Bar */}
      <div className="bg-slate-950 text-slate-300 text-xs py-2 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="bg-rose-500/20 text-rose-300 border border-rose-500/40 px-2 py-0.5 rounded font-bold text-[11px]">
              UDISE: 19190806002
            </span>
            <span className="bg-amber-500/20 text-amber-300 border border-amber-500/40 px-2 py-0.5 rounded font-bold text-[11px]">
              Banglar Shiksha ID: WB-1945-MGGHS
            </span>
            <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 px-2 py-0.5 rounded font-bold text-[11px]">
              WBBSE: E1-042 | WBCHSE: 105084
            </span>
            <span className="hidden xl:flex items-center gap-1 text-[11px]">
              <Phone className="w-3 h-3 text-amber-400" />
              +91 3228 240211
            </span>
          </div>

          <div className="flex items-center gap-1.5 flex-wrap">
            {/* Quick Action Pills */}
            <a href="#academics" className="bg-slate-800 hover:bg-slate-700 text-slate-200 px-2 py-0.5 rounded text-[10px] font-bold flex items-center gap-1 transition-colors">
              <BookOpen className="w-3 h-3 text-rose-400" /> CURRICULUM (V-XII)
            </a>
            <a href="#facilities" className="bg-slate-800 hover:bg-slate-700 text-slate-200 px-2 py-0.5 rounded text-[10px] font-bold flex items-center gap-1 transition-colors">
              <BookOpen className="w-3 h-3 text-amber-400" /> MID-DAY MEAL
            </a>
            <a href="#welfare" className="bg-slate-800 hover:bg-slate-700 text-slate-200 px-2 py-0.5 rounded text-[10px] font-bold flex items-center gap-1 transition-colors">
              <CreditCard className="w-3 h-3 text-emerald-400" /> GOVT SCHEMES
            </a>
            <a href="#welfare" className="bg-slate-800 hover:bg-slate-700 text-slate-200 px-2 py-0.5 rounded text-[10px] font-bold flex items-center gap-1 transition-colors">
              <UserCheck className="w-3 h-3 text-cyan-400" /> KANYASHREE STATUS
            </a>
            <button onClick={onOpenAdminLoginModal} className="bg-amber-500/20 hover:bg-amber-500 text-amber-300 hover:text-slate-950 border border-amber-500/40 px-2 py-0.5 rounded text-[10px] font-bold flex items-center gap-1 transition-all">
              <ShieldCheck className="w-3 h-3" /> ADMIN PORTAL
            </button>
            <button onClick={onToggleLang} className="bg-white/10 hover:bg-rose-600 text-white px-2 py-0.5 rounded-full text-xs font-bold transition-all flex items-center gap-1">
              <Globe className="w-3 h-3" />
              <span>{currentLang === 'en' ? 'বাংলা' : 'English'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Infinite Horizontal Marquee Ticker */}
      <div className="bg-gradient-to-r from-indigo-950 via-slate-950 to-indigo-950 text-white py-1.5 overflow-hidden border-b border-rose-500/30 flex items-center relative z-40">
        <div className="bg-rose-600 text-white font-extrabold text-xs px-3 py-1 rounded-r-md flex items-center gap-1.5 z-10 shadow-lg shrink-0">
          <span className="w-2 h-2 rounded-full bg-white animate-ping" />
          <span>LIVE UPDATES</span>
        </div>

        <div className="overflow-hidden whitespace-nowrap w-full">
          <div className="inline-block animate-marquee whitespace-nowrap text-xs font-medium text-slate-200">
            {tickerItems.map((item, idx) => (
              <span key={idx} className="inline-flex items-center gap-2 mx-6">
                <Bell className="w-3.5 h-3.5 text-amber-400 inline" />
                {item}
              </span>
            ))}
            {tickerItems.map((item, idx) => (
              <span key={`dup-${idx}`} className="inline-flex items-center gap-2 mx-6">
                <Bell className="w-3.5 h-3.5 text-amber-400 inline" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Main Glass Navigation Header */}
      <header className="sticky top-0 z-50 bg-white/94 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3">
            <img
              src="assets/school_logo.jpg"
              alt="MGGHS Emblem Logo"
              className="w-14 h-14 object-contain rounded-full shadow-md hover:rotate-6 transition-transform"
            />
            <div>
              <h1 className="font-serif font-bold text-lg text-slate-900 leading-tight">
                Mahishadal Gayeswari Girls' High School (H.S.)
              </h1>
              <p className="text-xs font-bold text-rose-600">
                Govt. Sponsored Girls' Institution | Estd. 1945 | WBBSE & WBCHSE
              </p>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-5 font-bold text-xs uppercase tracking-wider text-slate-800">
            <a href="#home" className="hover:text-rose-600 transition-colors">Home</a>
            <a href="#desk" className="hover:text-rose-600 transition-colors">HM Message</a>
            <a href="#academics" className="hover:text-rose-600 transition-colors">Academics</a>
            <a href="#notices" className="hover:text-rose-600 transition-colors">Notice Board</a>
            <a href="#welfare" className="hover:text-rose-600 transition-colors">Govt Schemes</a>
            <a href="#facilities" className="hover:text-rose-600 transition-colors">Facilities</a>
            <a href="#gallery" className="hover:text-rose-600 transition-colors">Gallery</a>

            <button
              onClick={onOpenAdmissionModal}
              className="bg-gradient-to-r from-rose-600 to-rose-700 hover:from-rose-700 hover:to-rose-800 text-white px-4 py-2 rounded-full shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 text-xs font-bold"
            >
              Admission Inquiry
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-slate-900 p-2"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-6 py-4 flex flex-col gap-4 font-bold text-slate-800">
            <a href="#home" onClick={() => setMobileMenuOpen(false)}>Home</a>
            <a href="#desk" onClick={() => setMobileMenuOpen(false)}>HM Message</a>
            <a href="#academics" onClick={() => setMobileMenuOpen(false)}>Academics</a>
            <a href="#notices" onClick={() => setMobileMenuOpen(false)}>Notice Board</a>
            <a href="#welfare" onClick={() => setMobileMenuOpen(false)}>Govt Schemes</a>
            <a href="#facilities" onClick={() => setMobileMenuOpen(false)}>Facilities</a>
            <a href="#gallery" onClick={() => setMobileMenuOpen(false)}>Gallery</a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAdminLoginModal();
              }}
              className="bg-slate-900 text-amber-400 px-4 py-2 rounded-full text-center text-xs"
            >
              Admin Portal Login
            </button>
          </div>
        )}
      </header>
    </>
  );
};
