import React from 'react';
import { Award, Trophy, Star, Sparkles, Quote, GraduationCap } from 'lucide-react';
import { StudentTopper } from '../types';

export const StudentSuccess: React.FC = () => {
  const toppers: StudentTopper[] = [
    {
      id: '1',
      name: 'Ananya Bhowmik',
      exam: 'Madhyamik',
      percentage: '97.4%',
      rank: 'District 2nd Rank (Purba Medinipur)',
      stream: 'WBBSE Secondary Topper',
      imageUrl: '/assets/school_hero.jpg',
      testimonial: '"The guidance from our science and math teachers at Mahishadal Gayeswari Girls\' High School gave me complete confidence to achieve 682/700 in Madhyamik."',
    },
    {
      id: '2',
      name: 'Sritama Samanta',
      exam: 'Higher Secondary',
      percentage: '96.8%',
      rank: 'Purba Medinipur Science Stream 1st',
      stream: 'WBCHSE Science (Physics, Chem, Bio)',
      imageUrl: '/assets/science_lab.jpg',
      testimonial: '"Hands-on laboratory practicals and regular mock exams helped me score top marks in Higher Secondary Science and crack WBJEE."',
    },
    {
      id: '3',
      name: 'Priyanka Das',
      exam: 'Higher Secondary',
      percentage: '95.6%',
      rank: 'Purba Medinipur Arts Stream 1st',
      stream: 'WBCHSE Humanities & Sanskrit',
      imageUrl: '/assets/library_smartclass.jpg',
      testimonial: '"The 12,000+ books in our Central Library and encouragement from my teachers allowed me to secure letter marks in all subjects."',
    },
  ];

  return (
    <section className="py-20 bg-slate-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 space-y-12">
        
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold text-amber-400 uppercase tracking-widest bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/30">
            Academic & Sports Champions
          </span>
          <h2 className="font-serif font-extrabold text-3xl md:text-4xl text-white">
            Student Achievers & Board Toppers Spotlight
          </h2>
          <p className="text-xs text-slate-400">
            Celebrating our Madhyamik (WBBSE) and Higher Secondary (WBCHSE) district rank holders and awardees.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {toppers.map((topper) => (
            <div
              key={topper.id}
              className="bg-slate-950 p-6 md:p-8 rounded-3xl border border-slate-800 hover:border-amber-500/50 shadow-xl space-y-5 transition-all group flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="bg-amber-500/20 text-amber-300 font-extrabold text-xs px-3 py-1 rounded-full border border-amber-500/40">
                    🏆 {topper.exam} Topper
                  </span>
                  <span className="font-extrabold text-2xl text-rose-400">{topper.percentage}</span>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-amber-400 shrink-0 bg-slate-800">
                    <img src={topper.imageUrl} alt={topper.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h3 className="font-serif font-extrabold text-lg text-white group-hover:text-amber-400 transition-colors">
                      {topper.name}
                    </h3>
                    <p className="text-xs font-bold text-amber-400 mt-0.5">{topper.rank}</p>
                    <p className="text-[11px] text-slate-400 mt-0.5">{topper.stream}</p>
                  </div>
                </div>

                <div className="bg-slate-900 p-4 rounded-2xl border border-slate-800/80 relative">
                  <Quote className="w-6 h-6 text-rose-500/20 absolute right-3 top-3" />
                  <p className="text-xs text-slate-300 italic leading-relaxed">
                    {topper.testimonial}
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-800 text-[11px] text-slate-500 flex items-center justify-between">
                <span>Verified School Alumna</span>
                <span className="text-emerald-400 font-bold">100% Academic Honor</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
