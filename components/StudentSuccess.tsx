import React from 'react';
import { Award, Trophy, Star, Sparkles, Quote, GraduationCap } from 'lucide-react';
import { StudentTopper } from '../types';
import ScrollRevealCard from './ScrollRevealCard';

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
    <section className="py-20 bg-[#FAF7F2] text-slate-800 relative border-b border-[#E8DFD0]">
      <div className="max-w-7xl mx-auto px-4 space-y-12">
        
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold text-[#B45309] uppercase tracking-widest bg-amber-100/60 px-3 py-1 rounded-full border border-amber-300/60">
            Academic & Sports Champions
          </span>
          <h2 className="font-serif font-extrabold text-3xl md:text-4xl text-[#1E293B]">
            Student Achievers & Board Toppers Spotlight
          </h2>
          <p className="text-xs text-slate-600">
            Celebrating our Madhyamik (WBBSE) and Higher Secondary (WBCHSE) district rank holders and awardees.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {toppers.map((topper, idx) => (
            <ScrollRevealCard key={topper.id} delay={idx * 120}>
              <div className="bg-white p-6 md:p-8 rounded-3xl border border-[#E8DFD0] hover:border-[#B45309]/50 shadow-sm hover:shadow-md space-y-5 transition-all group flex flex-col justify-between h-full">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="bg-amber-100 text-[#B45309] font-extrabold text-xs px-3 py-1 rounded-full border border-amber-200">
                      🏆 {topper.exam} Topper
                    </span>
                    <span className="font-extrabold text-2xl text-[#9D174D]">{topper.percentage}</span>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#B45309] shrink-0 bg-slate-100 shadow-xs">
                      <img src={topper.imageUrl} alt={topper.name} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h3 className="font-serif font-extrabold text-lg text-[#1E293B] group-hover:text-[#9D174D] transition-colors">
                        {topper.name}
                      </h3>
                      <p className="text-xs font-bold text-[#B45309] mt-0.5">{topper.rank}</p>
                      <p className="text-[11px] text-slate-500 mt-0.5">{topper.stream}</p>
                    </div>
                  </div>

                  <div className="bg-[#FAF7F2] p-4 rounded-2xl border border-[#E8DFD0] relative">
                    <Quote className="w-6 h-6 text-[#9D174D]/20 absolute right-3 top-3" />
                    <p className="text-xs text-slate-700 italic leading-relaxed font-medium">
                      {topper.testimonial}
                    </p>
                  </div>
                </div>

                <div className="pt-3 border-t border-[#E8DFD0] text-[11px] text-slate-500 flex items-center justify-between">
                  <span>Verified School Alumna</span>
                  <span className="text-[#047857] font-bold">100% Academic Honor</span>
                </div>
              </div>
            </ScrollRevealCard>
          ))}
        </div>

      </div>
    </section>
  );
};
