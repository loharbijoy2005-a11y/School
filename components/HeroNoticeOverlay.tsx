import React from 'react';
import { Award, ArrowRight, Download, Calendar, Bell, Image as ImageIcon } from 'lucide-react';
import { Notice } from '../types';


interface HeroNoticeOverlayProps {
  onOpenAdmissionModal: () => void;
  onDownloadRoutine: () => void;
  onOpenPdfModal: (notice: Notice) => void;
}

export const HeroNoticeOverlay: React.FC<HeroNoticeOverlayProps> = ({
  onOpenAdmissionModal,
  onDownloadRoutine,
  onOpenPdfModal,
}) => {
  const recentNotices: Notice[] = [
    {
      id: '1',
      title: '2nd Summative Evaluation / Unit Test Routine (Classes V to X)',
      category: 'wbbse',
      publishDate: '05 Sep 2026',
      pdfUrl: '/notices/unit-test-routine-2026.pdf',
      isNew: true,
      fileSize: '240 KB',
      description: '2nd Unit Test examinations commence from 15th September 2026.',
    },
    {
      id: '2',
      title: 'Class XII H.S. Science Practical Laboratory Exam Schedule',
      category: 'wbchse',
      publishDate: '02 Sep 2026',
      pdfUrl: '/notices/hs-practical-2026.pdf',
      isNew: true,
      fileSize: '310 KB',
      description: 'Physics, Chemistry, Biology & Geography practical timetable.',
    },
    {
      id: '3',
      title: 'Kanyashree K1 & K2 Application Renewal Desk Notice',
      category: 'schemes',
      publishDate: '28 Aug 2026',
      pdfUrl: '/notices/kanyashree-renewal-2026.pdf',
      isNew: false,
      fileSize: '190 KB',
      description: 'Eligible female students must submit bank passbook & Aadhaar copies.',
    },
    {
      id: '4',
      title: 'Puja Vacation & Festival Holiday Declaration 2026',
      category: 'holiday',
      publishDate: '25 Aug 2026',
      pdfUrl: '/notices/puja-holidays-2026.pdf',
      isNew: false,
      fileSize: '150 KB',
      description: 'Durga Puja & Lakshmi Puja festival holiday list declaration.',
    },
  ];

  return (
    <section id="home" className="relative bg-slate-950 text-white overflow-hidden py-12 md:py-16">
      
      {/* Background Campus Banner with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/school_hero.jpg"
          alt="Mahishadal Gayeswari Campus Banner"
          className="w-full h-full object-cover opacity-25 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/80" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10 grid lg:grid-cols-12 gap-8 items-center">
        
        {/* Left Column Text & CTAs */}
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-500/20 border border-rose-500/40 text-rose-300 font-bold text-xs uppercase">
            <Award className="w-4 h-4 text-rose-400" />
            <span>Government Sponsored H.S. School | Estd. 1945</span>
          </div>

          <h1 className="font-serif text-3xl md:text-5xl font-extrabold text-white leading-tight">
            Empowering Young Minds,{' '}
            <span className="bg-gradient-to-r from-rose-400 via-amber-300 to-emerald-400 bg-clip-text text-transparent">
              Inspiring Excellence
            </span>{' '}
            Since 1945
          </h1>

          <p className="text-slate-300 text-base md:text-lg leading-relaxed">
            Mahishadal Gayeswari Girls' High School (H.S.) is a premier government-sponsored girls' high school in Mahishadal, Purba Medinipur. Affiliated to WBBSE and WBCHSE, we foster holistic academic brilliance, scientific temper, and leadership skills from Class V to Class XII.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <button
              onClick={onOpenAdmissionModal}
              className="bg-gradient-to-r from-rose-600 to-rose-700 hover:from-rose-700 hover:to-rose-800 text-white font-bold px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 text-sm flex items-center gap-2"
            >
              <span>Online Admission 2026</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onDownloadRoutine}
              className="bg-amber-500 hover:bg-amber-600 text-white font-bold px-5 py-3 rounded-full shadow-md transition-all text-sm flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              <span>Exam Routine</span>
            </button>

            <a
              href="#gallery"
              className="bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold px-5 py-3 rounded-full transition-all text-sm flex items-center gap-2"
            >
              <ImageIcon className="w-4 h-4 text-rose-400" />
              <span>PICTURE GALLERY</span>
            </a>
          </div>

          {/* Quick Stats Strip */}
          <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-800">
            <div>
              <span className="text-2xl font-black text-amber-400">1,000+</span>
              <span className="text-xs text-slate-400 block font-bold">Girls Enrolled</span>
            </div>
            <div>
              <span className="text-2xl font-black text-emerald-400">100%</span>
              <span className="text-xs text-slate-400 block font-bold">Madhyamik Pass</span>
            </div>
            <div>
              <span className="text-2xl font-black text-rose-400">80+ Yrs</span>
              <span className="text-xs text-slate-400 block font-bold">Legacy (1945)</span>
            </div>
          </div>
        </div>

        {/* Right Column: Integrated Notice Overlay Widget */}
        <div className="lg:col-span-5 bg-slate-900/90 backdrop-blur-md border border-slate-800 rounded-2xl p-5 shadow-2xl space-y-4">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <h3 className="font-extrabold text-white text-base flex items-center gap-2">
              <Bell className="w-4 h-4 text-rose-500 animate-pulse" />
              Latest School Circulars
            </h3>
            <a
              href="#notices"
              className="text-xs font-bold text-amber-400 hover:text-amber-300 flex items-center gap-1"
            >
              <span>VIEW FULL NOTICE BOARD</span>
              <ArrowRight className="w-3 h-3" />
            </a>
          </div>

          <div className="space-y-3">
            {recentNotices.map((n) => (
              <div
                key={n.id}
                className="bg-slate-950/80 p-3 rounded-xl border border-slate-800/80 hover:border-rose-500/50 transition-all flex items-start gap-3"
              >
                <div className="bg-rose-500/20 text-rose-400 p-2 rounded-lg text-center shrink-0 min-w-[54px]">
                  <span className="text-xs font-bold block leading-none">{n.publishDate.split(' ')[0]}</span>
                  <span className="text-[10px] font-extrabold uppercase block mt-0.5">{n.publishDate.split(' ')[1]}</span>
                </div>

                <div className="grow min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] uppercase font-bold text-amber-400 bg-amber-400/10 px-1.5 py-0.5 rounded">
                      {n.category}
                    </span>
                    {n.isNew && (
                      <span className="text-[9px] font-extrabold bg-rose-600 text-white px-1.5 py-0.2 rounded-full uppercase">
                        NEW
                      </span>
                    )}
                  </div>
                  <h4 className="text-xs font-bold text-white truncate leading-snug">{n.title}</h4>
                </div>

                <button
                  onClick={() => onOpenPdfModal(n)}
                  className="text-slate-400 hover:text-rose-400 p-1 shrink-0"
                  title="Download PDF"
                >
                  <Download className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
