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
    <section id="home" className="relative bg-[#F5F1EA] text-[#292524] min-h-[580px] lg:min-h-[640px] flex items-center overflow-hidden border-b border-[#DFD7C7]">
      
      {/* Background Image Carousel Layer */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/hero_campus.jpg"
          alt="Mahishadal Gayeswari Girls' High School Campus"
          className="w-full h-full object-cover opacity-20 scale-105 transition-transform duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#F5F1EA] via-[#F5F1EA]/90 to-[#F5F1EA]/60"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#F5F1EA] via-transparent to-[#F5F1EA]/40"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-12 w-full grid lg:grid-cols-12 gap-8 items-center">
        
        {/* Left Hero Headlines & Institutional Pitch */}
        <div className="lg:col-span-7 space-y-6">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C58B24]/15 border border-[#C58B24]/40 text-[#701A1E] font-extrabold text-xs uppercase tracking-wider shadow-xs">
            <Sparkles className="w-4 h-4 text-[#C58B24]" />
            <span>Pioneer in Female Education Since 1945</span>
          </div>

          <h2 className="font-serif font-extrabold text-3xl sm:text-4xl md:text-5xl text-[#292524] leading-tight">
            Empowering Young Girls, <br />
            <span className="bg-gradient-to-r from-[#701A1E] via-[#C58B24] to-[#1B4332] bg-clip-text text-transparent">
              Inspiring Excellence Since 1945
            </span>
          </h2>

          <p className="text-slate-700 text-sm md:text-base leading-relaxed max-w-2xl font-medium">
            Mahishadal Gayeswari Girls' High School (H.S.) is a premier government-sponsored girls' high school in Mahishadal, Purba Medinipur. Affiliated to WBBSE and WBCHSE, we foster holistic academic brilliance, scientific temper, and leadership skills from Class V to Class XII.
          </p>

          {/* Key Stat Pills */}
          <div className="flex flex-wrap gap-4 pt-2">
            <div className="bg-white border border-[#DFD7C7] px-4 py-2.5 rounded-2xl shadow-xs">
              <p className="text-[#C58B24] font-extrabold text-lg">100% Pass</p>
              <p className="text-[11px] text-slate-600 uppercase font-bold">Madhyamik & H.S. Exam</p>
            </div>
            <div className="bg-white border border-[#DFD7C7] px-4 py-2.5 rounded-2xl shadow-xs">
              <p className="text-[#701A1E] font-extrabold text-lg">1,850+ Girls</p>
              <p className="text-[11px] text-slate-600 uppercase font-bold">Enrolled Students</p>
            </div>
            <div className="bg-white border border-[#DFD7C7] px-4 py-2.5 rounded-2xl shadow-xs">
              <p className="text-[#1B4332] font-extrabold text-lg">30+ PCs</p>
              <p className="text-[11px] text-slate-600 uppercase font-bold">ICT Computer Lab</p>
            </div>
          </div>

          {/* Action Call To Actions */}
          <div className="flex flex-wrap gap-3 pt-4">
            <button
              onClick={onOpenAdmissionModal}
              className="bg-[#701A1E] hover:bg-[#501215] text-white font-extrabold px-6 py-3 rounded-full text-xs shadow-md transition-all flex items-center gap-2"
            >
              <span>Online Admission Inquiry 2026</span>
              <ChevronRight className="w-4 h-4" />
            </button>

            <a
              href="#gallery"
              className="bg-white hover:bg-slate-50 text-[#292524] border border-[#DFD7C7] font-bold px-5 py-3 rounded-full text-xs transition-colors flex items-center gap-2 shadow-xs"
            >
              <Camera className="w-4 h-4 text-[#C58B24]" />
              <span>Campus Photo Tour</span>
            </a>
          </div>

        </div>

        {/* Right Floating Notice Board Hub Widget (Authentic Off-White Paper Card) */}
        <div className="lg:col-span-5">
          <div className="bg-[#FAF7F0] border border-[#DFD7C7] rounded-3xl p-6 shadow-md space-y-5">
            
            {/* Notice Board Header */}
            <div className="flex items-center justify-between border-b border-[#DFD7C7] pb-3">
              <div className="flex items-center gap-2">
                <Bell className="w-5 h-5 text-[#701A1E] animate-bounce" />
                <h3 className="font-serif font-extrabold text-lg text-[#292524]">
                  Notice Board Hub
                </h3>
              </div>
              <span className="text-[10px] font-extrabold text-[#1B4332] bg-emerald-100 px-2.5 py-0.5 rounded-full border border-emerald-300">
                OFFICIAL WBBSE & WBCHSE
              </span>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-1 bg-[#F5F1EA] p-1 rounded-xl border border-[#DFD7C7] text-[11px] font-bold">
              {[
                { id: 'all', label: 'SCHOOL NOTICES' },
                { id: 'wbbse', label: 'WBBSE' },
                { id: 'wbchse', label: 'WBCHSE' },
                { id: 'schemes', label: 'SCHEMES' },
                { id: 'tender', label: 'TENDER' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as NoticeCategory)}
                  className={`px-2.5 py-1 rounded-lg transition-all ${
                    activeTab === tab.id
                      ? 'bg-[#701A1E] text-white shadow-xs'
                      : 'bg-white text-[#334155] hover:text-[#292524] border border-[#DFD7C7]'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Notice Entries List (Light Paper Tiles) */}
            <div className="space-y-3 max-h-[280px] overflow-y-auto pr-1">
              {filteredNotices.slice(0, 4).map((notice) => (
                <div
                  key={notice.id}
                  onClick={() => onOpenPdfModal(notice)}
                  className="bg-white hover:bg-[#F5F1EA] p-3.5 rounded-2xl border border-[#DFD7C7] hover:border-[#C58B24]/60 transition-all cursor-pointer group flex items-start gap-3 shadow-2xs"
                >
                  {/* Calendar Date Badge (Maroon Square Block with White Text) */}
                  <div className="w-11 h-11 bg-[#701A1E] border border-[#501215] rounded-xl flex flex-col items-center justify-center shrink-0 text-center text-white shadow-xs">
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
                        <span className="bg-[#701A1E] text-white text-[9px] font-extrabold px-1.5 py-0.2 rounded uppercase animate-pulse">
                          NEW
                        </span>
                      )}
                      <span className="text-[10px] font-bold text-[#C58B24] uppercase">
                        {notice.category.toUpperCase()}
                      </span>
                    </div>
                    <h4 className="text-xs font-bold text-[#292524] group-hover:text-[#701A1E] transition-colors line-clamp-2 leading-snug">
                      {notice.title}
                    </h4>
                  </div>

                  <div className="shrink-0 pt-1 text-slate-400 group-hover:text-[#701A1E] transition-colors">
                    <Download className="w-4 h-4" />
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Archive Link */}
            <div className="pt-2 border-t border-[#DFD7C7] flex justify-between items-center text-xs">
              <a href="#notices" className="text-[#C58B24] hover:underline font-bold flex items-center gap-1">
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
