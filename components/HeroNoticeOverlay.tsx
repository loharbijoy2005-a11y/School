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
    <section id="home" className="relative bg-[#FAF7F2] text-slate-800 min-h-[580px] lg:min-h-[640px] flex items-center overflow-hidden border-b border-[#E8DFD0]">
      
      {/* Background Image Carousel Layer with Light Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/hero_campus.jpg"
          alt="Mahishadal Gayeswari Girls' High School Campus"
          className="w-full h-full object-cover opacity-20 scale-105 transition-transform duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#FAF7F2] via-[#FAF7F2]/90 to-[#FAF7F2]/60"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#FAF7F2] via-transparent to-[#FAF7F2]/40"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-12 w-full grid lg:grid-cols-12 gap-8 items-center">
        
        {/* Left Hero Headlines & Institutional Pitch */}
        <div className="lg:col-span-7 space-y-6">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#B45309]/10 border border-[#B45309]/30 text-[#B45309] font-extrabold text-xs uppercase tracking-wider shadow-xs">
            <Sparkles className="w-4 h-4 text-[#B45309]" />
            <span>Pioneer in Female Education Since 1945</span>
          </div>

          <h2 className="font-serif font-extrabold text-3xl sm:text-4xl md:text-5xl text-[#1E293B] leading-tight">
            Empowering Young Girls, <br />
            <span className="bg-gradient-to-r from-[#9D174D] via-[#B45309] to-[#881337] bg-clip-text text-transparent">
              Inspiring Excellence Since 1945
            </span>
          </h2>

          <p className="text-slate-600 text-sm md:text-base leading-relaxed max-w-2xl font-medium">
            Mahishadal Gayeswari Girls' High School (H.S.) is a premier government-sponsored girls' high school in Mahishadal, Purba Medinipur. Affiliated to WBBSE and WBCHSE, we foster holistic academic brilliance, scientific temper, and leadership skills from Class V to Class XII.
          </p>

          {/* Key Stat Pills */}
          <div className="flex flex-wrap gap-4 pt-2">
            <div className="bg-white border border-[#E8DFD0] px-4 py-2.5 rounded-2xl shadow-xs">
              <p className="text-[#B45309] font-extrabold text-lg">100% Pass</p>
              <p className="text-[11px] text-slate-500 uppercase font-bold">Madhyamik & H.S. Exam</p>
            </div>
            <div className="bg-white border border-[#E8DFD0] px-4 py-2.5 rounded-2xl shadow-xs">
              <p className="text-[#9D174D] font-extrabold text-lg">1,850+ Girls</p>
              <p className="text-[11px] text-slate-500 uppercase font-bold">Enrolled Students</p>
            </div>
            <div className="bg-white border border-[#E8DFD0] px-4 py-2.5 rounded-2xl shadow-xs">
              <p className="text-[#047857] font-extrabold text-lg">30+ PCs</p>
              <p className="text-[11px] text-slate-500 uppercase font-bold">ICT Computer Lab</p>
            </div>
          </div>

          {/* Action Call To Actions */}
          <div className="flex flex-wrap gap-3 pt-4">
            <button
              onClick={onOpenAdmissionModal}
              className="bg-gradient-to-r from-[#9D174D] to-[#B45309] hover:from-[#881337] hover:to-[#92400E] text-white font-extrabold px-6 py-3 rounded-full text-xs shadow-md transition-all flex items-center gap-2"
            >
              <span>Online Admission Inquiry 2026</span>
              <ChevronRight className="w-4 h-4" />
            </button>

            <a
              href="#gallery"
              className="bg-white hover:bg-slate-50 text-slate-800 border border-[#E8DFD0] font-bold px-5 py-3 rounded-full text-xs transition-colors flex items-center gap-2 shadow-xs"
            >
              <Camera className="w-4 h-4 text-[#B45309]" />
              <span>Campus Photo Tour</span>
            </a>
          </div>

        </div>

        {/* Right Floating Notice Board Hub Widget (Pure Crisp White Light Card) */}
        <div className="lg:col-span-5">
          <div className="bg-white border border-[#E2D9CC] rounded-3xl p-6 shadow-md space-y-5">
            
            {/* Notice Board Header */}
            <div className="flex items-center justify-between border-b border-[#E8DFD0] pb-3">
              <div className="flex items-center gap-2">
                <Bell className="w-5 h-5 text-[#9D174D] animate-bounce" />
                <h3 className="font-serif font-extrabold text-lg text-[#1E293B]">
                  Notice Board Hub
                </h3>
              </div>
              <span className="text-[10px] font-extrabold text-[#047857] bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                OFFICIAL WBBSE & WBCHSE
              </span>
            </div>

            {/* Filter Tabs (Crisp Light Cream background for inactive, Vibrant Deep Rose for active) */}
            <div className="flex flex-wrap gap-1 bg-[#F1ECE4] p-1 rounded-xl border border-[#E2D9CC] text-[11px] font-bold">
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
                      ? 'bg-[#9D174D] text-white shadow-xs'
                      : 'bg-[#F1ECE4] text-[#475569] hover:text-[#1E293B]'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Notice Entries List (Light Tiles) */}
            <div className="space-y-3 max-h-[280px] overflow-y-auto pr-1">
              {filteredNotices.slice(0, 4).map((notice) => (
                <div
                  key={notice.id}
                  onClick={() => onOpenPdfModal(notice)}
                  className="bg-[#FAFAF9] hover:bg-[#F5F0EB] p-3.5 rounded-2xl border border-[#EBE5DC] hover:border-[#B45309]/50 transition-all cursor-pointer group flex items-start gap-3 shadow-2xs"
                >
                  {/* Calendar Date Badge */}
                  <div className="w-11 h-11 bg-rose-50 border border-rose-200 rounded-xl flex flex-col items-center justify-center shrink-0 text-center">
                    <span className="text-[10px] font-extrabold text-[#9D174D] uppercase leading-none">
                      {notice.publishDate.split(' ')[1] || 'AUG'}
                    </span>
                    <span className="text-sm font-extrabold text-[#1E293B] leading-none mt-0.5">
                      {notice.publishDate.split(' ')[0] || '26'}
                    </span>
                  </div>

                  <div className="space-y-1 flex-1 min-w-0">
                    <div className="flex items-center gap-1.5">
                      {notice.isNew && (
                        <span className="bg-[#9D174D] text-white text-[9px] font-extrabold px-1.5 py-0.2 rounded uppercase animate-pulse">
                          NEW
                        </span>
                      )}
                      <span className="text-[10px] font-bold text-[#B45309] uppercase">
                        {notice.category.toUpperCase()}
                      </span>
                    </div>
                    <h4 className="text-xs font-bold text-[#1E293B] group-hover:text-[#9D174D] transition-colors line-clamp-2 leading-snug">
                      {notice.title}
                    </h4>
                  </div>

                  <div className="shrink-0 pt-1 text-slate-400 group-hover:text-[#9D174D] transition-colors">
                    <Download className="w-4 h-4" />
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Archive Link */}
            <div className="pt-2 border-t border-[#E8DFD0] flex justify-between items-center text-xs">
              <a href="#notices" className="text-[#B45309] hover:underline font-bold flex items-center gap-1">
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
