import React, { useState } from 'react';
import { BookOpen, Award, Sparkles, X, School, Users, ShieldCheck, GraduationCap, FileText } from 'lucide-react';

export const FloatingEdgeFlaps: React.FC = () => {
  const [showPatrikaModal, setShowPatrikaModal] = useState(false);
  const [showGlanceModal, setShowGlanceModal] = useState(false);

  return (
    <>
      {/* 1. Left Edge Sticky Vertical Flaps */}
      <div className="floating-edge-left hidden md:flex">
        <a 
          href="#academics" 
          className="edge-flap-btn flex items-center gap-1.5" 
          style={{ background: '#9D174D', color: '#FFFFFF', borderColor: 'rgba(255, 255, 255, 0.4)' }}
          title="Explore Academic Streams"
        >
          <BookOpen className="w-3.5 h-3.5 text-amber-300 rotate-90" />
          <span>ACADEMIC STREAMS</span>
        </a>

        <button
          onClick={() => setShowPatrikaModal(true)}
          className="edge-flap-btn flex items-center gap-1.5"
          style={{ background: '#047857', color: '#FFFFFF', borderColor: 'rgba(255, 255, 255, 0.4)' }}
          title="School Annual Patrika (Gayeswari Arghya 2026)"
        >
          <FileText className="w-3.5 h-3.5 text-emerald-200 rotate-90" />
          <span>SCHOOL PATRIKA</span>
        </button>
      </div>

      {/* 2. Right Bottom Edge Anchor Badge */}
      <div className="floating-edge-bottom-right">
        <button
          onClick={() => setShowGlanceModal(true)}
          className="bg-[#D97706] hover:bg-[#B45309] text-white border border-amber-300/40 px-4 py-2.5 rounded-full shadow-xl flex items-center gap-2 hover:scale-105 transition-all text-xs font-bold uppercase tracking-wider cursor-pointer group"
        >
          <div className="w-2.5 h-2.5 rounded-full bg-white animate-pulse"></div>
          <School className="w-4 h-4 text-white group-hover:rotate-12 transition-transform" />
          <span>SCHOOL AT A GLANCE</span>
        </button>
      </div>

      {/* School Patrika Magazine Light Modal */}
      {showPatrikaModal && (
        <div className="modal-backdrop-luxury">
          <div className="bg-white text-slate-900 rounded-3xl max-w-xl w-full p-6 md:p-8 border border-[#E8DFD0] shadow-2xl relative space-y-6 animate-in fade-in zoom-in duration-200">
            <button
              onClick={() => setShowPatrikaModal(false)}
              className="absolute right-5 top-5 w-9 h-9 rounded-full bg-slate-100 hover:bg-rose-100 text-slate-600 hover:text-[#9D174D] flex items-center justify-center transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-rose-100 text-[#9D174D] border border-rose-200 flex items-center justify-center">
                <FileText className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] font-bold text-[#B45309] uppercase tracking-widest">
                  Annual Literary Publication
                </span>
                <h3 className="font-serif font-extrabold text-2xl text-[#1E293B]">
                  "Gayeswari Arghya 2026"
                </h3>
              </div>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed bg-[#FAF7F2] p-4 rounded-2xl border border-[#E8DFD0]">
              The annual school magazine featuring poems, short stories, scientific essays, artwork, and historical research papers authored by female students and faculty of Mahishadal Gayeswari Girls' High School (H.S.).
            </p>

            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="bg-amber-50 p-3 rounded-xl border border-amber-200 text-center">
                <p className="text-[#B45309] font-extrabold text-lg">84th Edition</p>
                <p className="text-[11px] text-slate-600">Estd 1945 Legacy</p>
              </div>
              <div className="bg-emerald-50 p-3 rounded-xl border border-emerald-200 text-center">
                <p className="text-[#047857] font-extrabold text-lg">150+ Submissions</p>
                <p className="text-[11px] text-slate-600">Student Literature</p>
              </div>
            </div>

            <div className="flex justify-end gap-3 pt-2">
              <button
                onClick={() => {
                  alert('Downloading "Gayeswari Arghya 2026 (Digital PDF Edition)"...');
                  setShowPatrikaModal(false);
                }}
                className="w-full bg-[#9D174D] hover:bg-[#881337] text-white font-bold py-3 rounded-xl text-xs flex items-center justify-center gap-2 shadow-md transition-all"
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
          <div className="bg-white text-slate-900 rounded-3xl max-w-2xl w-full p-6 md:p-8 border border-[#E8DFD0] shadow-2xl relative space-y-6 animate-in fade-in zoom-in duration-200">
            <button
              onClick={() => setShowGlanceModal(false)}
              className="absolute right-5 top-5 w-9 h-9 rounded-full bg-slate-100 hover:bg-rose-100 text-slate-600 hover:text-[#9D174D] flex items-center justify-center transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-amber-100 text-[#B45309] flex items-center justify-center border border-amber-200">
                <School className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] font-bold text-[#9D174D] uppercase tracking-widest">
                  Key Institutional Metrics
                </span>
                <h3 className="font-serif font-extrabold text-2xl text-[#1E293B]">
                  Mahishadal Gayeswari Girls' High School (H.S.)
                </h3>
              </div>
            </div>

            <div className="grid sm:grid-cols-3 gap-4">
              <div className="bg-[#FAF7F2] p-4 rounded-2xl border border-[#E8DFD0] text-center space-y-1">
                <Users className="w-6 h-6 text-[#B45309] mx-auto" />
                <p className="font-extrabold text-2xl text-[#1E293B]">1,850+</p>
                <p className="text-[11px] text-slate-600 font-bold uppercase">Enrolled Girls</p>
              </div>

              <div className="bg-[#FAF7F2] p-4 rounded-2xl border border-[#E8DFD0] text-center space-y-1">
                <GraduationCap className="w-6 h-6 text-[#9D174D] mx-auto" />
                <p className="font-extrabold text-2xl text-[#1E293B]">99.4%</p>
                <p className="text-[11px] text-slate-600 font-bold uppercase">Madhyamik Pass Rate</p>
              </div>

              <div className="bg-[#FAF7F2] p-4 rounded-2xl border border-[#E8DFD0] text-center space-y-1">
                <ShieldCheck className="w-6 h-6 text-[#047857] mx-auto" />
                <p className="font-extrabold text-2xl text-[#1E293B]">Estd 1945</p>
                <p className="text-[11px] text-slate-600 font-bold uppercase">Heritage Legacy</p>
              </div>
            </div>

            <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-200/80 space-y-2 text-xs">
              <h4 className="font-bold text-[#B45309] uppercase">Government Accreditation & Codes:</h4>
              <div className="grid grid-cols-2 gap-2 text-slate-700">
                <p>• UDISE Code: <span className="text-slate-900 font-bold">19190806002</span></p>
                <p>• Banglar Shiksha ID: <span className="text-slate-900 font-bold">WB-1945-MGGHS</span></p>
                <p>• WBBSE Secondary Index: <span className="text-slate-900 font-bold">E1-042</span></p>
                <p>• WBCHSE Higher Secondary: <span className="text-slate-900 font-bold">105084</span></p>
              </div>
            </div>

            <button
              onClick={() => setShowGlanceModal(false)}
              className="w-full bg-[#1E293B] hover:bg-[#0F172A] text-white font-bold py-2.5 rounded-xl text-xs transition-colors"
            >
              Close Quick Summary
            </button>
          </div>
        </div>
      )}
    </>
  );
};
