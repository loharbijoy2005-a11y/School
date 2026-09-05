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
    <section id="academics" className="py-20 bg-[#FAF7F2] text-slate-800 relative border-b border-[#E8DFD0]">
      <div className="max-w-7xl mx-auto px-4 space-y-12">
        
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold text-[#9D174D] uppercase tracking-widest bg-rose-100/60 px-3 py-1 rounded-full border border-rose-300/60">
            WBBSE & WBCHSE Curriculum
          </span>
          <h2 className="font-serif font-extrabold text-3xl md:text-4xl text-[#1E293B]">
            Academic Programmes & Stream Matrix
          </h2>
          <p className="text-xs text-slate-600">
            Explore secondary and higher secondary stream combinations, lab practicals, and syllabus structure.
          </p>
        </div>

        {/* Filterable Stream Tabs */}
        <div className="flex flex-wrap justify-center gap-2 bg-white p-2 rounded-2xl border border-[#E8DFD0] max-w-3xl mx-auto shadow-xs">
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
                  ? 'bg-[#9D174D] text-white shadow-xs'
                  : 'text-slate-700 hover:bg-[#FAF7F2]'
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
              <div className="lg:col-span-6 bg-white p-8 rounded-3xl border border-[#E8DFD0] space-y-6 flex flex-col justify-between shadow-sm">
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 border border-amber-300 text-[#B45309] font-bold text-xs">
                    <GraduationCap className="w-4 h-4" />
                    <span>{stream.duration}</span>
                  </div>
                  
                  <h3 className="font-serif font-extrabold text-2xl text-[#1E293B]">
                    {stream.title}
                  </h3>

                  <p className="text-slate-600 text-xs leading-relaxed">
                    {stream.description}
                  </p>
                </div>

                <div className="bg-[#FAF7F2] p-4 rounded-2xl border border-[#E8DFD0] space-y-2">
                  <span className="text-[10px] font-extrabold text-[#047857] uppercase tracking-wider">
                    Expected Learning Outcome:
                  </span>
                  <p className="text-xs text-slate-800 font-medium leading-relaxed">
                    {stream.outcomes}
                  </p>
                </div>
              </div>

              {/* Right Column: Subject Combination List */}
              <div className="lg:col-span-6 bg-white p-8 rounded-3xl border border-[#E8DFD0] space-y-6 shadow-sm">
                <div className="border-b border-[#E8DFD0] pb-3 flex items-center justify-between">
                  <h4 className="font-extrabold text-sm text-[#1E293B] uppercase tracking-wider flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-[#9D174D]" />
                    Subject Combination & Lab Practicals
                  </h4>
                  <span className="text-[10px] font-bold text-[#B45309]">Official Syllabus</span>
                </div>

                <div className="grid sm:grid-cols-2 gap-3 text-xs">
                  {stream.subjects.map((sub, idx) => (
                    <div key={idx} className="bg-[#FAF7F2] p-3 rounded-xl border border-[#E8DFD0] flex items-center gap-2 text-slate-800">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#B45309] shrink-0" />
                      <span>{sub}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-2 flex flex-wrap gap-3">
                  <button
                    onClick={() => alert(`Downloading Official WBBSE/WBCHSE Syllabus for ${stream.title}...`)}
                    className="bg-[#B45309] hover:bg-[#92400E] text-white font-extrabold px-5 py-2.5 rounded-full text-xs transition-colors flex items-center gap-2 shadow-xs"
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
