'use client';

import React, { useState, useEffect } from 'react';
import { Bell, Download, ChevronRight, Camera, Sparkles, Laptop, GraduationCap, Users } from 'lucide-react';
import { Notice, NoticeCategory } from '../types';

interface HeroProps {
  onOpenAdmissionModal: () => void;
  onDownloadRoutine?: () => void;
  onOpenPdfModal?: (notice: Notice) => void;
  notices?: Notice[];
}

export const Hero: React.FC<HeroProps> = ({
  onOpenAdmissionModal,
  onDownloadRoutine = () => alert('Downloading Exam Schedule...'),
  onOpenPdfModal = (notice) => alert(`Opening ${notice.title}`),
  notices: propNotices,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeTab, setActiveTab] = useState<NoticeCategory>('all');

  const campusPhotos = [
    {
      url: '/assets/hero_campus.jpg',
      title: 'School Heritage Gate & Historic Main Building (Estd. 1945)',
    },
    {
      url: '/assets/school_hero.jpg',
      title: 'Morning School Assembly & Uniformed Female Students',
    },
    {
      url: '/assets/science_lab.jpg',
      title: 'Physics & Chemistry Practical Demonstration Labs',
    },
    {
      url: '/assets/library_smartclass.jpg',
      title: 'Digital Smart Classrooms & Central Library Archives',
    },
  ];

  // Auto-play carousel cycling every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % campusPhotos.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [campusPhotos.length]);

  const defaultNotices: Notice[] = [
    {
      id: '1',
      title: 'Madhyamik & HS 2nd Unit Test Examination Schedule (Session 2026-27)',
      category: 'wbbse',
      publishDate: '26 AUG',
      pdfUrl: '/notices/unit-test-routine-2026.pdf',
      isNew: true,
      fileSize: '240 KB',
      description: 'Official timetables for WBBSE Class V-X and WBCHSE Class XI-XII 2nd Summative tests.',
    },
    {
      id: '2',
      title: 'Class XII Higher Secondary Practical Examination Laboratory Routine',
      category: 'wbchse',
      publishDate: '22 AUG',
      pdfUrl: '/notices/hs-practical-2026.pdf',
      isNew: true,
      fileSize: '310 KB',
      description: 'Physics, Chemistry, Biology, and Geography laboratory examination schedule for Class XII Science and Arts stream.',
    },
    {
      id: '3',
      title: 'Kanyashree K1 & K2 Grant Disbursement Verification Helpdesk Active',
      category: 'schemes',
      publishDate: '18 AUG',
      pdfUrl: '/notices/kanyashree-grant-2026.pdf',
      isNew: true,
      fileSize: '190 KB',
      description: 'Eligible girl students (13-19 years) must submit Bank A/C passbook copy and Aadhaar verification at office.',
    },
    {
      id: '4',
      title: 'School Managing Committee (SMC) Civil Construction Tender Notice',
      category: 'tender',
      publishDate: '12 AUG',
      pdfUrl: '/notices/smc-tender-2026.pdf',
      isNew: false,
      fileSize: '420 KB',
      description: 'Sealed tenders invited for rooftop solar maintenance and science lab renovation under WB School Education Dept.',
    },
  ];

  const noticesList = propNotices && propNotices.length > 0 ? propNotices : defaultNotices;

  const filteredNotices = activeTab === 'all'
    ? noticesList
    : noticesList.filter((n) => n.category === activeTab);

  return (
    <section id="home" className="relative bg-[#FAF7F2] text-[#292524] min-h-[600px] lg:min-h-[650px] flex items-center overflow-hidden border-b border-[#E8DFD0]">
      
      {/* Dynamic Full-Width Campus Photo Slider */}
      <div className="absolute inset-0 z-0">
        {campusPhotos.map((photo, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100 scale-105' : 'opacity-0 scale-100'
            }`}
            style={{ transitionProperty: 'opacity, transform' }}
          >
            <img
              src={photo.url}
              alt={photo.title}
              className="w-full h-full object-cover opacity-35"
            />
          </div>
        ))}

        {/* Soft Warm Vignette Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#FAF7F2] via-[#FAF7F2]/90 to-[#FAF7F2]/50 lg:via-[#FAF7F2]/85"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#FAF7F2] via-transparent to-[#FAF7F2]/50"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-12 w-full grid lg:grid-cols-12 gap-8 items-center">
        
        {/* Left Column: Headlines, Institutional Pitch & Stats */}
        <div className="lg:col-span-7 space-y-6">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#881337]/10 border border-[#881337]/30 text-[#881337] font-extrabold text-xs uppercase tracking-wider shadow-xs">
            <Sparkles className="w-4 h-4 text-[#D97706]" />
            <span>PIONEER IN FEMALE EDUCATION SINCE 1945</span>
          </div>

          <h1 className="font-serif font-extrabold text-3xl sm:text-4xl md:text-5xl text-[#1C1917] leading-tight">
            Empowering Young Girls, <br />
            <span className="bg-gradient-to-r from-[#881337] via-[#D97706] to-[#1B4332] bg-clip-text text-transparent">
              Inspiring Excellence Since 1945
            </span>
          </h1>

          <p className="text-[#334155] text-sm md:text-base leading-relaxed max-w-2xl font-medium">
            Mahishadal Gayeswari Girls' High School (H.S.) is a premier government-sponsored girls' institution in Purba Medinipur. Affiliated to WBBSE & WBCHSE, we foster academic distinction, scientific practical temper, and leadership skills from Class V to Class XII.
          </p>

          {/* Stats Row: 3 Glassmorphic Counter Tiles */}
          <div className="flex flex-wrap gap-4 pt-2">
            <div className="bg-white/90 backdrop-blur-sm border border-[#E8DFD0] px-4 py-3 rounded-2xl shadow-xs">
              <p className="text-[#D97706] font-extrabold text-lg flex items-center gap-1">
                <GraduationCap className="w-5 h-5 text-[#D97706]" />
                100% Pass
              </p>
              <p className="text-[11px] text-[#334155] uppercase font-bold mt-0.5">Madhyamik & H.S.</p>
            </div>
            
            <div className="bg-white/90 backdrop-blur-sm border border-[#E8DFD0] px-4 py-3 rounded-2xl shadow-xs">
              <p className="text-[#881337] font-extrabold text-lg flex items-center gap-1">
                <Users className="w-5 h-5 text-[#881337]" />
                2,200+ Girls
              </p>
              <p className="text-[11px] text-[#334155] uppercase font-bold mt-0.5">Enrolled Students</p>
            </div>
            
            <div className="bg-white/90 backdrop-blur-sm border border-[#E8DFD0] px-4 py-3 rounded-2xl shadow-xs">
              <p className="text-[#1B4332] font-extrabold text-lg flex items-center gap-1">
                <Laptop className="w-5 h-5 text-[#1B4332]" />
                30+ Systems
              </p>
              <p className="text-[11px] text-[#334155] uppercase font-bold mt-0.5">ICT Computer Lab</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-3 pt-4">
            <button
              onClick={onOpenAdmissionModal}
              className="bg-[#881337] hover:bg-[#6b0f2b] text-white font-extrabold px-6 py-3.5 rounded-full text-xs shadow-md transition-all flex items-center gap-2 transform hover:-translate-y-0.5 cursor-pointer"
            >
              <span>Online Admission 2026</span>
              <ChevronRight className="w-4 h-4" />
            </button>

            <a
              href="#gallery"
              className="bg-white hover:bg-amber-50/50 text-[#1C1917] border border-[#E8DFD0] hover:border-[#D97706] font-bold px-6 py-3.5 rounded-full text-xs transition-colors flex items-center gap-2 shadow-xs cursor-pointer"
            >
              <Camera className="w-4 h-4 text-[#D97706]" />
              <span>Explore Campus Tour</span>
            </a>
          </div>

          {/* Carousel Slide Indicators */}
          <div className="flex items-center gap-2 pt-2">
            <span className="text-[11px] text-[#334155] font-semibold mr-1">Campus View:</span>
            {campusPhotos.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`h-2 rounded-full transition-all cursor-pointer ${
                  idx === currentSlide ? 'w-6 bg-[#881337]' : 'w-2 bg-slate-300 hover:bg-slate-400'
                }`}
                aria-label={`Slide ${idx + 1}`}
              />
            ))}
          </div>

        </div>

        {/* Right Floating Notice Board Hub */}
        <div className="lg:col-span-5">
          <div className="bg-white border border-[#DFD7C7] rounded-3xl p-6 shadow-lg space-y-5">
            
            {/* Notice Board Header */}
            <div className="flex items-center justify-between border-b border-[#E8DFD0] pb-3">
              <div className="flex items-center gap-2">
                <Bell className="w-5 h-5 text-[#881337] animate-bounce" />
                <h3 className="font-serif font-extrabold text-lg text-[#1C1917]">
                  Notice Board Hub
                </h3>
              </div>
              <span className="text-[10px] font-extrabold text-[#1B4332] bg-emerald-100 px-2.5 py-0.5 rounded-full border border-emerald-300">
                OFFICIAL WBBSE & WBCHSE
              </span>
            </div>

            {/* Switchable Notice Tabs */}
            <div className="flex flex-wrap gap-1 bg-[#FAF7F2] p-1.5 rounded-2xl border border-[#E8DFD0] text-[11px] font-bold">
              {[
                { id: 'all', label: 'School Notices' },
                { id: 'wbbse', label: 'WBBSE (V-X)' },
                { id: 'wbchse', label: 'WBCHSE (XI-XII)' },
                { id: 'schemes', label: 'Schemes' },
                { id: 'tender', label: 'Tenders/SMC' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as NoticeCategory)}
                  className={`px-2.5 py-1.5 rounded-xl transition-all cursor-pointer ${
                    activeTab === tab.id
                      ? 'bg-[#881337] text-white shadow-xs'
                      : 'bg-white text-[#334155] hover:text-[#1C1917] border border-[#E8DFD0]'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Notice Items Display */}
            <div className="space-y-3 max-h-[280px] overflow-y-auto pr-1">
              {filteredNotices.slice(0, 4).map((notice) => (
                <div
                  key={notice.id}
                  onClick={() => onOpenPdfModal(notice)}
                  className="bg-[#FFFDF9] hover:bg-[#FAF7F2] p-3.5 rounded-2xl border border-[#E2D7C3] hover:border-[#D97706]/60 transition-all cursor-pointer group flex items-start gap-3 shadow-2xs"
                >
                  {/* Calendar Date Badge (Maroon Square with White Text) */}
                  <div className="w-11 h-11 bg-[#881337] border border-[#6b0f2b] rounded-xl flex flex-col items-center justify-center shrink-0 text-center text-white shadow-xs">
                    <span className="text-[10px] font-extrabold uppercase leading-none text-amber-200">
                      {notice.publishDate.split(' ')[1] || 'AUG'}
                    </span>
                    <span className="text-sm font-extrabold leading-none mt-0.5">
                      {notice.publishDate.split(' ')[0] || '26'}
                    </span>
                  </div>

                  <div className="space-y-1 flex-1 min-w-0">
                    <div className="flex items-center gap-1.5">
                      {notice.isNew && (
                        <span className="bg-[#881337] text-white text-[9px] font-extrabold px-1.5 py-0.2 rounded uppercase animate-pulse">
                          NEW
                        </span>
                      )}
                      <span className="text-[10px] font-bold text-[#D97706] uppercase">
                        {notice.category.toUpperCase()}
                      </span>
                    </div>
                    <h4 className="text-xs font-bold text-[#1C1917] group-hover:text-[#881337] transition-colors line-clamp-2 leading-snug">
                      {notice.title}
                    </h4>
                  </div>

                  <div className="shrink-0 pt-1 text-slate-400 group-hover:text-[#881337] transition-colors">
                    <Download className="w-4 h-4" />
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Archive Link */}
            <div className="pt-2 border-t border-[#E8DFD0] flex justify-between items-center text-xs">
              <a href="#notices" className="text-[#D97706] hover:underline font-bold flex items-center gap-1">
                <span>VIEW FULL NOTICE ARCHIVE &rarr;</span>
              </a>
              <span className="text-slate-500 text-[11px] font-mono">Updated Today</span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
