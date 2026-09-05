import React, { useState } from 'react';
import { BookOpen, Award, Sparkles, X, School, Users, ShieldCheck, GraduationCap, FileText } from 'lucide-react';

export const FloatingEdgeFlaps: React.FC = () => {
  const [showPatrikaModal, setShowPatrikaModal] = useState(false);
  const [showGlanceModal, setShowGlanceModal] = useState(false);

  return (
    <>
      {/* 1. Left Edge Sticky Vertical Flaps */}
      <div className="floating-edge-left hidden md:flex">
        <button
          onClick={() => setShowPatrikaModal(true)}
          className="edge-flap-btn edge-flap-left-btn flex items-center gap-1.5 shadow-md"
          style={{ background: '#701A1E', color: '#FFFFFF' }}
          title="School Annual Patrika (Gayeswari Arghya 2026)"
        >
          <FileText className="w-3.5 h-3.5 text-amber-300 rotate-90" />
          <span>PUBLICATIONS / PATRIKA</span>
        </button>

        <a 
          href="#academics" 
          className="edge-flap-btn edge-flap-left-btn flex items-center gap-1.5 shadow-md" 
          style={{ background: '#1B4332', color: '#FFFFFF' }}
          title="Explore Academic Streams"
        >
          <BookOpen className="w-3.5 h-3.5 text-emerald-200 rotate-90" />
          <span>ACADEMIC STREAMS</span>
        </a>
      </div>

      {/* 2. Right Edge Sticky Vertical Flap (Antique Ochre Gold) */}
      <div className="floating-edge-right hidden md:flex">
        <button
          onClick={() => setShowGlanceModal(true)}
          className="edge-flap-btn edge-flap-right-btn flex items-center gap-1.5 shadow-md"
          style={{ background: '#C58B24', color: '#FFFFFF' }}
          title="School At A Glance Metrics"
        >
          <School className="w-3.5 h-3.5 text-white" />
          <span>SCHOOL AT A GLANCE</span>
        </button>
      </div>

      {/* School Patrika Magazine Light Modal */}
      {showPatrikaModal && (
        <div className="modal-backdrop-luxury">
          <div className="bg-[#FAF7F0] text-[#292524] rounded-3xl max-w-xl w-full p-6 md:p-8 border border-[#DFD7C7] shadow-2xl relative space-y-6 animate-in fade-in zoom-in duration-200">
            <button
              onClick={() => setShowPatrikaModal(false)}
              className="absolute right-5 top-5 w-9 h-9 rounded-full bg-[#F5F1EA] hover:bg-rose-100 text-slate-700 hover:text-[#701A1E] flex items-center justify-center transition-colors border border-[#DFD7C7]"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-[#701A1E]/10 text-[#701A1E] border border-[#701A1E]/30 flex items-center justify-center">
                <FileText className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] font-bold text-[#C58B24] uppercase tracking-widest">
                  Annual Literary Publication
                </span>
                <h3 className="font-serif font-extrabold text-2xl text-[#292524]">
                  "Gayeswari Arghya 2026"
                </h3>
              </div>
            </div>

            <p className="text-xs text-slate-700 leading-relaxed bg-white p-4 rounded-2xl border border-[#DFD7C7]">
              The annual school magazine featuring poems, short stories, scientific essays, artwork, and historical research papers authored by female students and faculty of Mahishadal Gayeswari Girls' High School (H.S.).
            </p>

            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="bg-amber-50 p-3 rounded-xl border border-amber-200 text-center">
                <p className="text-[#C58B24] font-extrabold text-lg">84th Edition</p>
                <p className="text-[11px] text-slate-600">Estd 1945 Legacy</p>
              </div>
              <div className="bg-emerald-50 p-3 rounded-xl border border-emerald-200 text-center">
                <p className="text-[#1B4332] font-extrabold text-lg">150+ Submissions</p>
                <p className="text-[11px] text-slate-600">Student Literature</p>
              </div>
            </div>

            <div className="flex justify-end gap-3 pt-2">
              <button
                onClick={() => {
                  alert('Downloading "Gayeswari Arghya 2026 (Digital PDF Edition)"...');
                  setShowPatrikaModal(false);
                }}
                className="w-full bg-[#701A1E] hover:bg-[#501215] text-white font-bold py-3 rounded-xl text-xs flex items-center justify-center gap-2 shadow-md transition-all"
              >
                <FileText className="w-4 h-4" />
                <span>Download E-Patrika (PDF)</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* School At A Glance Light Modal */}
      {showGlanceModal && (
        <div className="modal-backdrop-luxury">
          <div className="bg-[#FAF7F0] text-[#292524] rounded-3xl max-w-2xl w-full p-6 md:p-8 border border-[#DFD7C7] shadow-2xl relative space-y-6 animate-in fade-in zoom-in duration-200">
            <button
              onClick={() => setShowGlanceModal(false)}
              className="absolute right-5 top-5 w-9 h-9 rounded-full bg-[#F5F1EA] hover:bg-rose-100 text-slate-700 hover:text-[#701A1E] flex items-center justify-center transition-colors border border-[#DFD7C7]"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-[#C58B24]/15 text-[#C58B24] flex items-center justify-center border border-[#C58B24]/40">
                <School className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] font-bold text-[#701A1E] uppercase tracking-widest">
                  Key Institutional Metrics
                </span>
                <h3 className="font-serif font-extrabold text-2xl text-[#292524]">
                  Mahishadal Gayeswari Girls' High School (H.S.)
                </h3>
              </div>
            </div>

            <div className="grid sm:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-2xl border border-[#DFD7C7] text-center space-y-1">
                <Users className="w-6 h-6 text-[#C58B24] mx-auto" />
                <p className="font-extrabold text-2xl text-[#292524]">1,850+</p>
                <p className="text-[11px] text-slate-600 font-bold uppercase">Enrolled Girls</p>
              </div>

              <div className="bg-white p-4 rounded-2xl border border-[#DFD7C7] text-center space-y-1">
                <GraduationCap className="w-6 h-6 text-[#701A1E] mx-auto" />
                <p className="font-extrabold text-2xl text-[#292524]">99.4%</p>
                <p className="text-[11px] text-slate-600 font-bold uppercase">Madhyamik Pass Rate</p>
              </div>

              <div className="bg-white p-4 rounded-2xl border border-[#DFD7C7] text-center space-y-1">
                <ShieldCheck className="w-6 h-6 text-[#1B4332] mx-auto" />
                <p className="font-extrabold text-2xl text-[#292524]">Estd 1945</p>
                <p className="text-[11px] text-slate-600 font-bold uppercase">Heritage Legacy</p>
              </div>
            </div>

            <div className="bg-[#F5F1EA] p-4 rounded-2xl border border-[#DFD7C7] space-y-2 text-xs">
              <h4 className="font-bold text-[#C58B24] uppercase">Government Accreditation & Codes:</h4>
              <div className="grid grid-cols-2 gap-2 text-slate-700">
                <p>• UDISE Code: <span className="text-[#292524] font-bold">19190806002</span></p>
                <p>• Banglar Shiksha ID: <span className="text-[#292524] font-bold">WB-1945-MGGHS</span></p>
                <p>• WBBSE Secondary Index: <span className="text-[#292524] font-bold">E1-042</span></p>
                <p>• WBCHSE Higher Secondary: <span className="text-[#292524] font-bold">105084</span></p>
              </div>
            </div>

            <button
              onClick={() => setShowGlanceModal(false)}
              className="w-full bg-[#292524] hover:bg-[#1C1917] text-white font-bold py-2.5 rounded-xl text-xs transition-colors"
            >
              Close Quick Summary
            </button>
          </div>
        </div>
      )}
    </>
  );
};
