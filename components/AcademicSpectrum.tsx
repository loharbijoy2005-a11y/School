import React, { useState } from 'react';
import { BookOpen, Award, CheckCircle2 } from 'lucide-react';

export const AcademicSpectrum: React.FC = () => {
  const [activeStream, setActiveStream] = useState<'secondary' | 'arts' | 'science' | 'vocational'>('secondary');

  return (
    <section id="academics" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-100 border border-rose-300 text-rose-700 font-bold text-xs uppercase mb-3">
            <BookOpen className="w-4 h-4 text-rose-600" />
            <span>Academic Spectrum</span>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-extrabold text-slate-900 mb-3">
            Streams & Subject Combination Explorer
          </h2>
          <p className="text-slate-600">
            Affiliated to WBBSE (Classes V-X) and WBCHSE (Higher Secondary Science, Arts & Vocational).
          </p>
        </div>

        {/* Stream Filter Buttons */}
        <div className="flex justify-center gap-2 flex-wrap mb-10">
          <button
            onClick={() => setActiveStream('secondary')}
            className={`px-5 py-2.5 rounded-full font-bold text-xs uppercase tracking-wider transition-all ${
              activeStream === 'secondary' ? 'bg-slate-900 text-white shadow-md' : 'bg-white text-slate-600 border border-slate-200'
            }`}
          >
            Secondary Wing (Classes V - X)
          </button>

          <button
            onClick={() => setActiveStream('arts')}
            className={`px-5 py-2.5 rounded-full font-bold text-xs uppercase tracking-wider transition-all ${
              activeStream === 'arts' ? 'bg-amber-600 text-white shadow-md' : 'bg-white text-slate-600 border border-slate-200'
            }`}
          >
            H.S. Arts Stream (WBCHSE)
          </button>

          <button
            onClick={() => setActiveStream('science')}
            className={`px-5 py-2.5 rounded-full font-bold text-xs uppercase tracking-wider transition-all ${
              activeStream === 'science' ? 'bg-emerald-600 text-white shadow-md' : 'bg-white text-slate-600 border border-slate-200'
            }`}
          >
            H.S. Science Stream (WBCHSE)
          </button>

          <button
            onClick={() => setActiveStream('vocational')}
            className={`px-5 py-2.5 rounded-full font-bold text-xs uppercase tracking-wider transition-all ${
              activeStream === 'vocational' ? 'bg-rose-600 text-white shadow-md' : 'bg-white text-slate-600 border border-slate-200'
            }`}
          >
            Job-Oriented & Vocational
          </button>
        </div>

        {/* Display Card */}
        <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-md max-w-4xl mx-auto">
          {activeStream === 'secondary' && (
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-slate-200 pb-4">
                <h3 className="font-serif font-extrabold text-2xl text-slate-900">Secondary Education (Classes V to X)</h3>
                <span className="bg-slate-100 text-slate-700 text-xs font-bold px-3 py-1 rounded-full">Affiliation: WBBSE</span>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">
                Foundational holistic curriculum following West Bengal Board of Secondary Education.
              </p>
              <div className="grid md:grid-cols-2 gap-4 pt-2">
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                  <h4 className="font-bold text-slate-900 text-xs uppercase mb-2 text-rose-600">Core Subjects</h4>
                  <ul className="text-xs text-slate-600 space-y-1">
                    <li>• First Language (Bengali) & Second Language (English)</li>
                    <li>• Mathematics & Physical Science</li>
                    <li>• Life Science & Environment</li>
                    <li>• History & Geography</li>
                  </ul>
                </div>
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                  <h4 className="font-bold text-slate-900 text-xs uppercase mb-2 text-emerald-600">Key Information</h4>
                  <ul className="text-xs text-slate-600 space-y-1">
                    <li>• Free Textbooks & Mid-Day Meal provided</li>
                    <li>• 100% Madhyamik Board Exam Pass Rate</li>
                    <li>• Smart Classroom Multimedia Support</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {activeStream === 'arts' && (
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-slate-200 pb-4">
                <h3 className="font-serif font-extrabold text-2xl text-slate-900">Higher Secondary Arts (Classes XI & XII)</h3>
                <span className="bg-amber-100 text-amber-800 text-xs font-bold px-3 py-1 rounded-full">Affiliation: WBCHSE</span>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">
                Humanities stream with flexible subject combinations preparing female students for competitive exams, teaching, civil services, and law.
              </p>
              <div className="grid md:grid-cols-2 gap-4 pt-2">
                <div className="bg-amber-50 p-4 rounded-xl border border-amber-200">
                  <h4 className="font-bold text-slate-900 text-xs uppercase mb-2 text-amber-700">Elective Combinations</h4>
                  <ul className="text-xs text-slate-700 space-y-1">
                    <li>• Political Science & History</li>
                    <li>• Education & Philosophy</li>
                    <li>• Sanskrit & Geography</li>
                    <li>• Nutrition & Computer Application</li>
                  </ul>
                </div>
                <div className="bg-amber-50 p-4 rounded-xl border border-amber-200">
                  <h4 className="font-bold text-slate-900 text-xs uppercase mb-2 text-amber-700">Seats & Faculty</h4>
                  <ul className="text-xs text-slate-700 space-y-1">
                    <li>• Total Seat Capacity: 250 Seats</li>
                    <li>• Experienced PG & M.Phil Teachers</li>
                    <li>• Regular Unit Tests & Mock Exams</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {activeStream === 'science' && (
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-slate-200 pb-4">
                <h3 className="font-serif font-extrabold text-2xl text-slate-900">Higher Secondary Science (Classes XI & XII)</h3>
                <span className="bg-emerald-100 text-emerald-800 text-xs font-bold px-3 py-1 rounded-full">Affiliation: WBCHSE</span>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">
                Rigorous STEM curriculum preparing students for NEET, WBJEE, JEE Main, and university research.
              </p>
              <div className="grid md:grid-cols-2 gap-4 pt-2">
                <div className="bg-emerald-50 p-4 rounded-xl border border-emerald-200">
                  <h4 className="font-bold text-slate-900 text-xs uppercase mb-2 text-emerald-700">Subject Combination</h4>
                  <ul className="text-xs text-slate-700 space-y-1">
                    <li>• Physics & Chemistry</li>
                    <li>• Biological Science & Mathematics</li>
                    <li>• Computer Application / Science</li>
                  </ul>
                </div>
                <div className="bg-emerald-50 p-4 rounded-xl border border-emerald-200">
                  <h4 className="font-bold text-slate-900 text-xs uppercase mb-2 text-emerald-700">Practical Facilities</h4>
                  <ul className="text-xs text-slate-700 space-y-1">
                    <li>• Equipped Physics, Chemistry & Bio Labs</li>
                    <li>• NEET/WBJEE Guidance Workshops</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {activeStream === 'vocational' && (
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-slate-200 pb-4">
                <h3 className="font-serif font-extrabold text-2xl text-slate-900">Job-Oriented Skill & Vocational Courses</h3>
                <span className="bg-rose-100 text-rose-800 text-xs font-bold px-3 py-1 rounded-full">WBSCT&VE&SD</span>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">
                Skill development courses under the West Bengal State Council of Technical & Vocational Education to foster self-employment and immediate career opportunities.
              </p>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};
