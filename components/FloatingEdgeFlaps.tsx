import React, { useState } from 'react';
import { BookOpen, Award, Sparkles, X, School, Users, ShieldCheck, GraduationCap, FileText } from 'lucide-react';

export const FloatingEdgeFlaps: React.FC = () => {
  const [showPatrikaModal, setShowPatrikaModal] = useState(false);
  const [showGlanceModal, setShowGlanceModal] = useState(false);

  return (
    <>
      {/* 1. Left Edge Sticky Vertical Flaps */}
      <div className="floating-edge-left hidden md:flex">
        <a href="#academics" className="edge-flap-btn flex items-center gap-1.5" title="Explore Academic Streams">
          <BookOpen className="w-3.5 h-3.5 text-amber-400 rotate-90" />
          <span>ACADEMIC STREAMS</span>
        </a>

        <button
          onClick={() => setShowPatrikaModal(true)}
          className="edge-flap-btn flex items-center gap-1.5"
          style={{ background: '#881337', borderColor: 'rgba(244, 63, 94, 0.4)' }}
          title="School Annual Patrika (Gayeswari Arghya 2026)"
        >
          <FileText className="w-3.5 h-3.5 text-rose-300 rotate-90" />
          <span>SCHOOL PATRIKA</span>
        </button>
      </div>

      {/* 2. Right Bottom Edge Anchor Badge */}
      <div className="floating-edge-bottom-right">
        <button
          onClick={() => setShowGlanceModal(true)}
          className="bg-gradient-to-r from-slate-900 via-navy-deep to-rose-950 text-white border border-amber-500/40 px-4 py-2.5 rounded-full shadow-2xl flex items-center gap-2 hover:scale-105 transition-all text-xs font-bold uppercase tracking-wider cursor-pointer group"
        >
          <div className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse"></div>
          <School className="w-4 h-4 text-amber-400 group-hover:rotate-12 transition-transform" />
          <span>SCHOOL AT A GLANCE</span>
        </button>
      </div>

      {/* School Patrika Magazine Modal */}
      {showPatrikaModal && (
        <div className="modal-backdrop-luxury">
          <div className="bg-slate-900 text-white rounded-3xl max-w-xl w-full p-6 md:p-8 border border-slate-700 shadow-2xl relative space-y-6 animate-in fade-in zoom-in duration-200">
            <button
              onClick={() => setShowPatrikaModal(false)}
              className="absolute right-5 top-5 w-9 h-9 rounded-full bg-slate-800 hover:bg-rose-600 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-rose-900/60 border border-rose-500/40 text-rose-300 flex items-center justify-center">
                <FileText className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] font-bold text-amber-400 uppercase tracking-widest">
                  Annual Literary Publication
                </span>
                <h3 className="font-serif font-extrabold text-2xl text-white">
                  "Gayeswari Arghya 2026"
                </h3>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed bg-slate-950 p-4 rounded-2xl border border-slate-800">
              The annual school magazine featuring poems, short stories, scientific essays, artwork, and historical research papers authored by female students and faculty of Mahishadal Gayeswari Girls' High School (H.S.).
            </p>

            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 text-center">
                <p className="text-amber-400 font-extrabold text-lg">84th Edition</p>
                <p className="text-[11px] text-slate-400">Estd 1945 Legacy</p>
              </div>
              <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 text-center">
                <p className="text-emerald-400 font-extrabold text-lg">150+ Submissions</p>
                <p className="text-[11px] text-slate-400">Student Literature</p>
              </div>
            </div>

            <div className="flex justify-end gap-3 pt-2">
              <button
                onClick={() => {
                  alert('Downloading "Gayeswari Arghya 2026 (Digital PDF Edition)"...');
                  setShowPatrikaModal(false);
                }}
                className="w-full bg-gradient-to-r from-amber-600 to-rose-600 hover:from-amber-500 hover:to-rose-500 text-white font-bold py-3 rounded-xl text-xs flex items-center justify-center gap-2 shadow-lg transition-all"
              >
                <FileText className="w-4 h-4" />
                <span>Download E-Patrika (PDF)</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* School At A Glance Modal */}
      {showGlanceModal && (
        <div className="modal-backdrop-luxury">
          <div className="bg-slate-900 text-white rounded-3xl max-w-2xl w-full p-6 md:p-8 border border-slate-700 shadow-2xl relative space-y-6 animate-in fade-in zoom-in duration-200">
            <button
              onClick={() => setShowGlanceModal(false)}
              className="absolute right-5 top-5 w-9 h-9 rounded-full bg-slate-800 hover:bg-rose-600 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/20 text-amber-400 flex items-center justify-center border border-amber-500/40">
                <School className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] font-bold text-rose-400 uppercase tracking-widest">
                  Key Institutional Metrics
                </span>
                <h3 className="font-serif font-extrabold text-2xl text-white">
                  Mahishadal Gayeswari Girls' High School (H.S.)
                </h3>
              </div>
            </div>

            <div className="grid sm:grid-cols-3 gap-4">
              <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 text-center space-y-1">
                <Users className="w-6 h-6 text-amber-400 mx-auto" />
                <p className="font-extrabold text-2xl text-white">1,850+</p>
                <p className="text-[11px] text-slate-400 font-bold uppercase">Enrolled Girls</p>
              </div>

              <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 text-center space-y-1">
                <GraduationCap className="w-6 h-6 text-rose-400 mx-auto" />
                <p className="font-extrabold text-2xl text-white">99.4%</p>
                <p className="text-[11px] text-slate-400 font-bold uppercase">Madhyamik Pass Rate</p>
              </div>

              <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 text-center space-y-1">
                <ShieldCheck className="w-6 h-6 text-emerald-400 mx-auto" />
                <p className="font-extrabold text-2xl text-white">Estd 1945</p>
                <p className="text-[11px] text-slate-400 font-bold uppercase">Heritage Legacy</p>
              </div>
            </div>

            <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-2 text-xs">
              <h4 className="font-bold text-amber-400 uppercase">Government Accreditation & Codes:</h4>
              <div className="grid grid-cols-2 gap-2 text-slate-300">
                <p>• UDISE Code: <span className="text-white font-bold">19190806002</span></p>
                <p>• Banglar Shiksha ID: <span className="text-white font-bold">WB-1945-MGGHS</span></p>
                <p>• WBBSE Secondary Index: <span className="text-white font-bold">E1-042</span></p>
                <p>• WBCHSE Higher Secondary: <span className="text-white font-bold">105084</span></p>
              </div>
            </div>

            <button
              onClick={() => setShowGlanceModal(false)}
              className="w-full bg-slate-800 hover:bg-slate-700 text-white font-bold py-2.5 rounded-xl text-xs transition-colors"
            >
              Close Quick Summary
            </button>
          </div>
        </div>
      )}
    </>
  );
};
