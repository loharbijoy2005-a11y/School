import React, { useState } from 'react';
import { Bell, Search, Download, Calendar, FileText } from 'lucide-react';
import { Notice, NoticeCategory } from '../types';

interface NoticeBoardProps {
  onOpenPdfModal: (notice: Notice) => void;
}

export const NoticeBoard: React.FC<NoticeBoardProps> = ({ onOpenPdfModal }) => {
  const [activeTab, setActiveTab] = useState<NoticeCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const sampleNotices: Notice[] = [
    {
      id: '1',
      title: '2nd Summative Evaluation / Unit Test Routine (Classes V to X)',
      category: 'wbbse',
      publishDate: '05 Sep 2026',
      pdfUrl: '/notices/unit-test-routine-2026.pdf',
      isNew: true,
      fileSize: '240 KB',
      description: 'All guardians and students are informed that the 2nd Unit Test examinations will commence from 15th September 2026.',
    },
    {
      id: '2',
      title: 'Class XII H.S. Science Practical Laboratory Exam Schedule',
      category: 'wbchse',
      publishDate: '02 Sep 2026',
      pdfUrl: '/notices/hs-practical-2026.pdf',
      isNew: true,
      fileSize: '310 KB',
      description: 'Physics, Chemistry, Biology, and Geography practical examination timetable for Class XII Science and Arts students.',
    },
    {
      id: '3',
      title: 'Kanyashree K1 & K2 Application Renewal Notice',
      category: 'schemes',
      publishDate: '28 Aug 2026',
      pdfUrl: '/notices/kanyashree-renewal-2026.pdf',
      isNew: false,
      fileSize: '190 KB',
      description: 'Eligible female students born between 01-04-2008 and 31-03-2009 must submit bank passbook & Aadhaar copies to the office desk.',
    },
    {
      id: '4',
      title: 'Puja Vacation & Festival Holiday Declaration 2026',
      category: 'holiday',
      publishDate: '25 Aug 2026',
      pdfUrl: '/notices/puja-holidays-2026.pdf',
      isNew: false,
      fileSize: '150 KB',
      description: 'School will remain closed for Durga Puja and Lakshmi Puja holidays as per West Bengal School Education Department list.',
    },
  ];

  const filteredNotices = sampleNotices.filter((n) => {
    const matchesCat = activeTab === 'all' || n.category === activeTab;
    const matchesSearch =
      !searchQuery ||
      n.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      n.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <section id="notices" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-100 border border-rose-300 text-rose-700 font-bold text-xs uppercase mb-3">
            <Bell className="w-4 h-4 text-rose-600" />
            <span>Live School Board</span>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-extrabold text-slate-900 mb-3">
            Official Notice Board & Circulars
          </h2>
          <p className="text-slate-600">
            Real-time updates regarding school exams, unit test routines, H.S. practicals, and scholarship notifications.
          </p>
        </div>

        {/* Notice Board Container */}
        <div className="bg-white rounded-2xl p-6 md:p-8 border border-slate-200 shadow-md">
          
          {/* Top Bar with Filter Tabs & Search */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-6 border-b border-slate-200">
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setActiveTab('all')}
                className={`px-4 py-2 rounded-full font-bold text-xs transition-all ${
                  activeTab === 'all'
                    ? 'bg-rose-600 text-white shadow-md'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                All Notices
              </button>

              <button
                onClick={() => setActiveTab('wbbse')}
                className={`px-4 py-2 rounded-full font-bold text-xs transition-all ${
                  activeTab === 'wbbse'
                    ? 'bg-rose-600 text-white shadow-md'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                WBBSE (V-X)
              </button>

              <button
                onClick={() => setActiveTab('wbchse')}
                className={`px-4 py-2 rounded-full font-bold text-xs transition-all ${
                  activeTab === 'wbchse'
                    ? 'bg-rose-600 text-white shadow-md'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                WBCHSE (XI-XII)
              </button>

              <button
                onClick={() => setActiveTab('schemes')}
                className={`px-4 py-2 rounded-full font-bold text-xs transition-all ${
                  activeTab === 'schemes'
                    ? 'bg-rose-600 text-white shadow-md'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                Scholarships & Schemes
              </button>
            </div>

            {/* Search Input */}
            <div className="relative min-w-[260px]">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search circulars..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 rounded-full border border-slate-300 text-sm focus:outline-none focus:border-rose-600 focus:ring-2 focus:ring-rose-200"
              />
            </div>
          </div>

          {/* Notice Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredNotices.map((n) => (
              <div
                key={n.id}
                className="bg-white rounded-xl p-5 border border-slate-200 hover:border-rose-300 hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-rose-50 text-rose-600 text-xs font-bold px-2.5 py-1 rounded flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {n.publishDate}
                    </span>
                    {n.isNew && (
                      <span className="bg-rose-600 text-white text-[10px] font-extrabold px-2 py-0.5 rounded-full uppercase animate-pulse">
                        NEW
                      </span>
                    )}
                  </div>

                  <h3 className="font-bold text-slate-900 text-base mb-2 leading-snug">
                    {n.title}
                  </h3>

                  <p className="text-slate-600 text-sm mb-4 line-clamp-3">
                    {n.description}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-dashed border-slate-200">
                  <span className="text-xs font-bold uppercase text-slate-500 flex items-center gap-1">
                    <FileText className="w-3.5 h-3.5 text-indigo-900" />
                    {n.category}
                  </span>

                  <button
                    onClick={() => onOpenPdfModal(n)}
                    className="text-rose-600 hover:text-rose-700 font-bold text-xs flex items-center gap-1 bg-rose-50 hover:bg-rose-100 px-3 py-1.5 rounded-md transition-colors"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>PDF ({n.fileSize})</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
