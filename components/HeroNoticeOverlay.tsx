import React, { useState } from 'react';
import { Bell, Download, ExternalLink, Calendar, ChevronRight, Award, FileText, Camera, ShieldCheck, Sparkles } from 'lucide-react';
import { Notice, NoticeCategory } from '../types';

interface HeroNoticeOverlayProps {
  onOpenAdmissionModal: () => void;
  onDownloadRoutine: () => void;
  onOpenPdfModal: (notice: Notice) => void;
  notices?: Notice[];
}

export const HeroNoticeOverlay: React.FC<HeroNoticeOverlayProps> = ({
  onOpenAdmissionModal,
  onDownloadRoutine,
  onOpenPdfModal,
  notices: propNotices,
}) => {
  const [activeTab, setActiveTab] = useState<NoticeCategory>('all');

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
    <section id="home" className="relative bg-slate-950 text-white min-h-[580px] lg:min-h-[640px] flex items-center overflow-hidden">
      
      {/* Background Image Carousel Layer */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/hero_campus.jpg"
          alt="Mahishadal Gayeswari Girls' High School Campus"
          className="w-full h-full object-cover opacity-35 scale-105 transition-transform duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/60"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-12 w-full grid lg:grid-cols-12 gap-8 items-center">
        
        {/* Left Hero Headlines & Institutional Pitch */}
        <div className="lg:col-span-7 space-y-6">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-300 font-bold text-xs uppercase tracking-wider shadow-lg">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>Pioneer in Female Education Since 1945</span>
          </div>

          <h2 className="font-serif font-extrabold text-3xl sm:text-4xl md:text-5xl text-white leading-tight">
            Empowering Young Girls, <br />
            <span className="bg-gradient-to-r from-amber-400 via-rose-400 to-amber-300 bg-clip-text text-transparent">
              Inspiring Excellence Since 1945
            </span>
          </h2>

          <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-2xl">
            Mahishadal Gayeswari Girls' High School (H.S.) is a premier government-sponsored girls' high school in Mahishadal, Purba Medinipur. Affiliated to WBBSE and WBCHSE, we foster holistic academic brilliance, scientific temper, and leadership skills from Class V to Class XII.
          </p>

          {/* Key Stat Pills */}
          <div className="flex flex-wrap gap-4 pt-2">
            <div className="bg-slate-900/80 border border-slate-800 px-4 py-2 rounded-2xl">
              <p className="text-amber-400 font-extrabold text-lg">100% Pass</p>
              <p className="text-[11px] text-slate-400 uppercase font-bold">Madhyamik & H.S. Exam</p>
            </div>
            <div className="bg-slate-900/80 border border-slate-800 px-4 py-2 rounded-2xl">
              <p className="text-rose-400 font-extrabold text-lg">1,850+ Girls</p>
              <p className="text-[11px] text-slate-400 uppercase font-bold">Enrolled Students</p>
            </div>
            <div className="bg-slate-900/80 border border-slate-800 px-4 py-2 rounded-2xl">
              <p className="text-emerald-400 font-extrabold text-lg">30+ PCs</p>
              <p className="text-[11px] text-slate-400 uppercase font-bold">ICT Computer Lab</p>
            </div>
          </div>

          {/* Action Call To Actions */}
          <div className="flex flex-wrap gap-3 pt-4">
            <button
              onClick={onOpenAdmissionModal}
              className="bg-gradient-to-r from-rose-600 to-amber-600 hover:from-rose-500 hover:to-amber-500 text-white font-extrabold px-6 py-3 rounded-full text-xs shadow-xl transition-all flex items-center gap-2"
            >
              <span>Online Admission Inquiry 2026</span>
              <ChevronRight className="w-4 h-4" />
            </button>

            <a
              href="#gallery"
              className="bg-slate-900/90 hover:bg-slate-800 text-slate-200 border border-slate-700 font-bold px-5 py-3 rounded-full text-xs transition-colors flex items-center gap-2"
            >
              <Camera className="w-4 h-4 text-amber-400" />
              <span>Campus Photo Tour</span>
            </a>
          </div>

        </div>

        {/* Right Floating Tabbed Notice Board HUD Widget */}
        <div className="lg:col-span-5">
          <div className="bg-slate-900/90 backdrop-blur-xl border border-slate-700 rounded-3xl p-6 shadow-2xl space-y-5">
            
            {/* Notice Board Header */}
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <Bell className="w-5 h-5 text-rose-500 animate-bounce" />
                <h3 className="font-serif font-extrabold text-lg text-white">
                  Notice Board Hub
                </h3>
              </div>
              <span className="text-[10px] font-extrabold text-emerald-400 bg-emerald-950 px-2.5 py-0.5 rounded-full border border-emerald-800">
                OFFICIAL WBBSE & WBCHSE
              </span>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-1 bg-slate-950 p-1 rounded-xl border border-slate-800 text-[11px] font-bold">
              {[
                { id: 'all', label: 'All Notices' },
                { id: 'wbbse', label: 'WBBSE' },
                { id: 'wbchse', label: 'WBCHSE' },
                { id: 'schemes', label: 'Schemes' },
                { id: 'tender', label: 'Tender' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as NoticeCategory)}
                  className={`px-2.5 py-1 rounded-lg transition-all ${
                    activeTab === tab.id
                      ? 'bg-rose-600 text-white shadow-md'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Notice Entries List */}
            <div className="space-y-3 max-h-[280px] overflow-y-auto pr-1">
              {filteredNotices.slice(0, 4).map((notice) => (
                <div
                  key={notice.id}
                  onClick={() => onOpenPdfModal(notice)}
                  className="bg-slate-950 hover:bg-slate-800/80 p-3.5 rounded-2xl border border-slate-800 hover:border-amber-500/50 transition-all cursor-pointer group flex items-start gap-3"
                >
                  {/* Calendar Date Badge */}
                  <div className="w-11 h-11 bg-rose-950/80 border border-rose-800/60 rounded-xl flex flex-col items-center justify-center shrink-0 text-center">
                    <span className="text-[10px] font-extrabold text-rose-300 uppercase leading-none">
                      {notice.publishDate.split(' ')[1] || 'AUG'}
                    </span>
                    <span className="text-sm font-extrabold text-white leading-none mt-0.5">
                      {notice.publishDate.split(' ')[0] || '26'}
                    </span>
                  </div>

                  <div className="space-y-1 flex-1 min-w-0">
                    <div className="flex items-center gap-1.5">
                      {notice.isNew && (
                        <span className="bg-rose-600 text-white text-[9px] font-extrabold px-1.5 py-0.2 rounded uppercase animate-pulse">
                          NEW
                        </span>
                      )}
                      <span className="text-[10px] font-bold text-amber-400 uppercase">
                        {notice.category.toUpperCase()}
                      </span>
                    </div>
                    <h4 className="text-xs font-bold text-slate-200 group-hover:text-amber-400 transition-colors line-clamp-2 leading-snug">
                      {notice.title}
                    </h4>
                  </div>

                  <div className="shrink-0 pt-1 text-slate-400 group-hover:text-amber-400 transition-colors">
                    <Download className="w-4 h-4" />
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Archive Link */}
            <div className="pt-2 border-t border-slate-800 flex justify-between items-center text-xs">
              <a href="#notices" className="text-amber-400 hover:underline font-bold flex items-center gap-1">
                <span>View Full Notice Archive &rarr;</span>
              </a>
              <span className="text-slate-500 text-[11px] font-mono">Updated Today</span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
