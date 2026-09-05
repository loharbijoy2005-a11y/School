'use client';

import React, { useState, useEffect } from 'react';
import { Bell, Download, ChevronLeft, ChevronRight, Trophy, Sparkles, Calendar, Award } from 'lucide-react';
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
      id: '1',
      badge: '🏆 SCHOOL ACHIEVEMENTS & SPORTS',
      title: 'STUDENTS BRING HOME THE TROPHY',
      subtitle: "Our girls celebrate with faculty and Headmistress Smt. Kalyani Maity after a hard-fought district championship win.",
      url: '/assets/sports_day.jpg',
    },
    {
      id: '2',
      badge: '🏛️ HERITAGE SCHOOL CAMPUS (ESTD 1945)',
      title: 'HISTORIC MAIN BUILDING & ASSEMBLY GROUND',
      subtitle: "Over 2,200+ female students gather daily for morning prayers and value education in our historic campus.",
      url: '/assets/hero_campus.jpg',
    },
    {
      id: '3',
      badge: '🔬 STEM SCIENCE LABS & PRACTICALS',
      title: 'ADVANCED PHYSICS & CHEMISTRY LABS',
      subtitle: "State-of-the-art laboratory equipment fostering scientific practical temper for WBBSE & WBCHSE toppers.",
      url: '/assets/science_lab.jpg',
    },
    {
      id: '4',
      badge: '💻 ICT COMPUTER EDUCATION HUB',
      title: 'DIGITAL SMART CLASSROOMS & 30+ PCs',
      subtitle: "Empowering female students with computer literacy, IT/ITeS skill courses, and e-learning facilities.",
      url: '/assets/library_smartclass.jpg',
    },
  ];

  // Auto-play carousel cycling every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % campusPhotos.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [campusPhotos.length]);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % campusPhotos.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + campusPhotos.length) % campusPhotos.length);
  };

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

  const activePhoto = campusPhotos[currentSlide];

  return (
    <section id="home" className="py-6 px-4 bg-[#FAF7F2] text-slate-900 border-b border-[#DFD7C7]">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-6 items-stretch">
        
        {/* Left 65% Column: REAL CAMPUS PHOTO SLIDER */}
        <div className="lg:col-span-8 bg-white border border-[#DFD7C7] rounded-3xl overflow-hidden shadow-lg flex flex-col justify-between relative group min-h-[460px] lg:min-h-[520px]">
          
          {/* Background Active Campus Photo */}
          <div className="absolute inset-0 z-0">
            <img
              src={activePhoto.url}
              alt={activePhoto.title}
              className="w-full h-full object-cover transition-all duration-700"
            />
            {/* Dark Gradient Overlay for Text Readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent"></div>
          </div>

          {/* Top Slide Counter Badge */}
          <div className="relative z-10 p-4 flex justify-between items-center">
            <span className="bg-[#0F2E23]/90 text-amber-300 text-xs font-bold px-3 py-1 rounded-full border border-amber-400/40 shadow-sm">
              Mahishadal Gayeswari Girls' High School (H.S.)
            </span>
            <span className="bg-slate-950/80 backdrop-blur-md text-white font-mono text-xs font-extrabold px-3 py-1 rounded-full border border-slate-700">
              0{currentSlide + 1} / 0{campusPhotos.length}
            </span>
          </div>

          {/* Carousel Manual Prev / Next Buttons */}
          <button
            onClick={handlePrev}
            className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-slate-950/60 hover:bg-[#881337] text-white flex items-center justify-center transition-colors shadow-lg border border-slate-700 cursor-pointer"
            aria-label="Previous Slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-slate-950/60 hover:bg-[#881337] text-white flex items-center justify-center transition-colors shadow-lg border border-slate-700 cursor-pointer"
            aria-label="Next Slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Bottom Headline Text Overlay */}
          <div className="relative z-10 p-6 md:p-8 space-y-3 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/90 text-slate-950 font-black text-xs uppercase tracking-wider shadow-md">
              <span>{activePhoto.badge}</span>
            </div>

            <h2 className="font-serif font-black text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight leading-tight uppercase drop-shadow-md">
              {activePhoto.title}
            </h2>

            <p className="text-slate-200 text-xs sm:text-sm font-medium leading-relaxed drop-shadow-sm max-w-2xl">
              {activePhoto.subtitle}
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={onOpenAdmissionModal}
                className="bg-[#881337] hover:bg-rose-900 text-white font-extrabold px-5 py-2.5 rounded-full text-xs shadow-md transition-all uppercase tracking-wider flex items-center gap-1.5 cursor-pointer"
              >
                <span>Online Admission Inquiry 2026</span>
              </button>

              <a
                href="#gallery"
                className="bg-white/90 hover:bg-white text-slate-900 font-extrabold px-5 py-2.5 rounded-full text-xs shadow-md transition-colors uppercase tracking-wider flex items-center gap-1.5 cursor-pointer"
              >
                <span>Explore Photo Gallery</span>
              </a>
            </div>
          </div>

        </div>

        {/* Right 35% Column: NOTICE BOARD HUB */}
        <div className="lg:col-span-4 bg-white border border-[#DFD7C7] rounded-3xl p-6 shadow-lg flex flex-col justify-between space-y-4">
          
          {/* Header */}
          <div className="border-b border-[#DFD7C7] pb-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Bell className="w-5 h-5 text-rose-700 animate-bounce" />
              <h3 className="font-serif font-black text-lg text-slate-900 uppercase">
                NOTICE BOARD
              </h3>
            </div>
            <span className="text-[10px] font-extrabold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded border border-emerald-300">
              WBBSE & WBCHSE
            </span>
          </div>

          {/* Notice Board Filter Tabs */}
          <div className="flex flex-wrap gap-1 bg-[#FAF7F0] p-1.5 rounded-xl border border-[#DFD7C7] text-[11px] font-bold">
            {[
              { id: 'all', label: 'SCHOOL NOTICES' },
              { id: 'wbbse', label: 'WBBSE (V-X)' },
              { id: 'wbchse', label: 'WBCHSE (XI-XII)' },
              { id: 'schemes', label: 'SCHEMES' },
              { id: 'tender', label: 'TENDERS' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as NoticeCategory)}
                className={`px-2.5 py-1 rounded-lg transition-all cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-[#881337] text-white shadow-xs'
                    : 'bg-white text-slate-700 hover:text-slate-900 border border-[#DFD7C7]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Notices Entries List */}
          <div className="space-y-3 max-h-[310px] overflow-y-auto pr-1">
            {filteredNotices.slice(0, 4).map((notice) => (
              <div
                key={notice.id}
                onClick={() => onOpenPdfModal(notice)}
                className="bg-[#FFFDF9] hover:bg-[#FAF7F0] p-3 rounded-2xl border border-[#DFD7C7] hover:border-[#881337]/50 transition-all cursor-pointer group flex items-start gap-3 shadow-2xs"
              >
                <div className="w-11 h-11 bg-[#881337] rounded-xl flex flex-col items-center justify-center shrink-0 text-center text-white shadow-xs">
                  <span className="text-[9px] font-black uppercase leading-none text-amber-200">
                    {notice.publishDate.split(' ')[1] || 'AUG'}
                  </span>
                  <span className="text-sm font-black leading-none mt-0.5">
                    {notice.publishDate.split(' ')[0] || '22'}
                  </span>
                </div>

                <div className="space-y-1 flex-1 min-w-0">
                  <div className="flex items-center gap-1.5">
                    {notice.isNew && (
                      <span className="bg-rose-700 text-white text-[8px] font-black px-1.5 py-0.2 rounded uppercase animate-pulse">
                        NEW
                      </span>
                    )}
                    <span className="text-[10px] font-bold text-[#881337] uppercase">
                      {notice.category.toUpperCase()}
                    </span>
                  </div>
                  <h4 className="text-xs font-bold text-slate-900 group-hover:text-[#881337] transition-colors line-clamp-2 leading-snug">
                    {notice.title}
                  </h4>
                </div>

                <div className="shrink-0 pt-1 text-slate-400 group-hover:text-[#881337] transition-colors">
                  <Download className="w-4 h-4" />
                </div>
              </div>
            ))}
          </div>

          {/* Footer Archive Link */}
          <div className="pt-2 border-t border-[#DFD7C7] flex justify-between items-center text-xs">
            <a href="#notices" className="text-[#881337] hover:underline font-extrabold flex items-center gap-1">
              <span>VIEW FULL NOTICE ARCHIVE &rarr;</span>
            </a>
            <span className="text-slate-500 text-[10px] font-mono font-bold">Session 2026-27</span>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;
