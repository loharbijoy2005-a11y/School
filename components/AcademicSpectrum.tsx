import React, { useState } from 'react';
import { BookOpen, GraduationCap, Microscope, Atom, FileText, CheckCircle2, ChevronRight, Award, Laptop } from 'lucide-react';
import { AcademicStream } from '../types';

export const AcademicSpectrum: React.FC = () => {
  const [activeWing, setActiveWing] = useState<'Secondary' | 'HS Arts' | 'HS Science' | 'Vocational'>('Secondary');

  const streams: AcademicStream[] = [
    {
      id: 'sec-1',
      title: 'Secondary Education Wing (Class V to X)',
      wing: 'Secondary',
      duration: '5 Years (Class V to X)',
      description: 'Comprehensive general foundation curriculum prescribed by West Bengal Board of Secondary Education (WBBSE) leading to Madhyamik Pariksha.',
      subjects: ['First Language (Bengali)', 'Second Language (English)', 'Mathematics', 'Physical Science', 'Life Science', 'History', 'Geography', 'Physical Education & Work Education'],
      outcomes: '100% Pass record in Madhyamik Pariksha with high first-division rate.',
    },
    {
      id: 'arts-1',
      title: 'Higher Secondary Humanities / Arts Stream',
      wing: 'HS Arts',
      duration: '2 Years (Class XI & XII)',
      description: 'Rich liberal arts stream under WBCHSE offering diverse humanities subject combinations with practical map-pointing and nutrition lab work.',
      subjects: ['Bengali (A)', 'English (B)', 'History', 'Geography', 'Philosophy', 'Political Science', 'Nutrition', 'Sanskrit'],
      outcomes: 'Preparation for BA Honors, Civil Services, Law, Journalism, and Education degrees.',
    },
    {
      id: 'sci-1',
      title: 'Higher Secondary Pure & Bio-Science Stream',
      wing: 'HS Science',
      duration: '2 Years (Class XI & XII)',
      description: 'Rigorous science stream under WBCHSE with hands-on laboratory practicals in Physics, Chemistry, Biology, and Mathematics.',
      subjects: ['Bengali (A)', 'English (B)', 'Physics', 'Chemistry', 'Mathematics', 'Biological Sciences', 'Computer Application'],
      outcomes: 'Direct path to WBJEE, NEET, B.Sc. Research, Engineering, and Medical careers.',
    },
    {
      id: 'voc-1',
      title: 'Vocational & ICT Skill Certification Courses',
      wing: 'Vocational',
      duration: '1 Year Certification',
      description: 'State government sponsored skill development and computer literacy programs for empowering female students with job-ready technical skills.',
      subjects: ['Information Technology & Computer Application', 'Apparel & Tailoring Design', 'Karate & Self-Defense Certification', 'Health Care & Nursing Basics'],
      outcomes: 'Govt. Skill Certification and self-employment empowerment.',
    },
  ];

  const filteredStreams = streams.filter(s => s.wing === activeWing);

  return (
    <section id="academics" className="py-20 bg-slate-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 space-y-12">
        
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold text-rose-400 uppercase tracking-widest bg-rose-500/10 px-3 py-1 rounded-full border border-rose-500/30">
            WBBSE & WBCHSE Curriculum
          </span>
          <h2 className="font-serif font-extrabold text-3xl md:text-4xl text-white">
            Academic Programmes & Stream Matrix
          </h2>
          <p className="text-xs text-slate-400">
            Explore secondary and higher secondary stream combinations, lab practicals, and syllabus structure.
          </p>
        </div>

        {/* Filterable Stream Tabs */}
        <div className="flex flex-wrap justify-center gap-2 bg-slate-950 p-2 rounded-2xl border border-slate-800 max-w-3xl mx-auto">
          {[
            { id: 'Secondary', label: 'Secondary Wing (Class V-X - WBBSE)' },
            { id: 'HS Arts', label: 'HS Arts Stream (WBCHSE)' },
            { id: 'HS Science', label: 'HS Science Stream (WBCHSE)' },
            { id: 'Vocational', label: 'Vocational & ICT Skills' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveWing(tab.id as any)}
              className={`px-4 py-2.5 rounded-xl text-xs font-extrabold transition-all ${
                activeWing === tab.id
                  ? 'bg-gradient-to-r from-rose-600 to-amber-600 text-white shadow-lg'
                  : 'text-slate-400 hover:text-white hover:bg-slate-900'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Stream Details Cards */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          {filteredStreams.map((stream) => (
            <React.Fragment key={stream.id}>
              
              {/* Left Column: Stream Overview */}
              <div className="lg:col-span-6 bg-slate-950 p-8 rounded-3xl border border-slate-800 space-y-6 flex flex-col justify-between shadow-2xl">
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-300 font-bold text-xs">
                    <GraduationCap className="w-4 h-4" />
                    <span>{stream.duration}</span>
                  </div>
                  
                  <h3 className="font-serif font-extrabold text-2xl text-white">
                    {stream.title}
                  </h3>

                  <p className="text-slate-300 text-xs leading-relaxed">
                    {stream.description}
                  </p>
                </div>

                <div className="bg-slate-900 p-4 rounded-2xl border border-slate-800 space-y-2">
                  <span className="text-[10px] font-extrabold text-emerald-400 uppercase tracking-wider">
                    Expected Learning Outcome:
                  </span>
                  <p className="text-xs text-slate-200 font-medium leading-relaxed">
                    {stream.outcomes}
                  </p>
                </div>
              </div>

              {/* Right Column: Subject Combination List */}
              <div className="lg:col-span-6 bg-slate-950 p-8 rounded-3xl border border-slate-800 space-y-6 shadow-2xl">
                <div className="border-b border-slate-800 pb-3 flex items-center justify-between">
                  <h4 className="font-extrabold text-sm text-white uppercase tracking-wider flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-rose-500" />
                    Subject Combination & Lab Practicals
                  </h4>
                  <span className="text-[10px] font-bold text-amber-400">Official Syllabus</span>
                </div>

                <div className="grid sm:grid-cols-2 gap-3 text-xs">
                  {stream.subjects.map((sub, idx) => (
                    <div key={idx} className="bg-slate-900 p-3 rounded-xl border border-slate-800 flex items-center gap-2 text-slate-200">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span>{sub}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-2 flex flex-wrap gap-3">
                  <button
                    onClick={() => alert(`Downloading Official WBBSE/WBCHSE Syllabus for ${stream.title}...`)}
                    className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-extrabold px-5 py-2.5 rounded-full text-xs transition-colors flex items-center gap-2 shadow-md"
                  >
                    <FileText className="w-4 h-4" />
                    <span>Download Full Syllabus PDF</span>
                  </button>
                </div>
              </div>

            </React.Fragment>
          ))}
        </div>

      </div>
    </section>
  );
};
