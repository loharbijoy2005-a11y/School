import React from 'react';
import { Award, Trophy, Star } from 'lucide-react';
import { StudentTopper } from '../types';

export const StudentSuccess: React.FC = () => {
  const toppers: StudentTopper[] = [
    {
      id: '1',
      name: 'Supriya Das',
      exam: 'Madhyamik',
      percentage: '98.4%',
      rank: 'District 1st Rank',
      stream: 'WBBSE Secondary',
      imageUrl: 'assets/prize_distribution.jpg',
      testimonial: 'The dedicated guidance of our teachers and regular mock unit tests at MGGHS helped me achieve top marks in WBBSE Madhyamik.',
    },
    {
      id: '2',
      name: 'Sritama Roy',
      exam: 'Higher Secondary',
      percentage: '97.8%',
      rank: 'State Top 10',
      stream: 'WBCHSE Science',
      imageUrl: 'assets/headmistress.jpg',
      testimonial: 'The well-equipped science laboratories and smart classroom lectures laid the foundation for my success in WBCHSE HS & NEET.',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-amber-500/10 via-rose-500/5 to-slate-900 text-slate-900 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4">
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 border border-amber-300 text-amber-800 font-bold text-xs uppercase mb-3">
            <Trophy className="w-4 h-4 text-amber-600" />
            <span>Academic Pride</span>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-extrabold text-slate-900 mb-3">
            Celebrating Our Students' Success
          </h2>
          <p className="text-slate-600">
            Honoring WBBSE Madhyamik & WBCHSE Higher Secondary top rankers and gold medalists.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {toppers.map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xl flex flex-col justify-between relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 bg-amber-500 text-white font-extrabold text-xs px-4 py-1 rounded-bl-xl shadow">
                {t.rank}
              </div>

              <div className="flex items-center gap-4 mb-4">
                <img
                  src={t.imageUrl}
                  alt={t.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-amber-500 shadow-md"
                />
                <div>
                  <h3 className="font-serif font-extrabold text-xl text-slate-900">{t.name}</h3>
                  <p className="text-xs font-bold text-rose-600 uppercase">{t.exam} ({t.stream})</p>
                  <span className="inline-block mt-1 font-black text-2xl text-amber-600">{t.percentage}</span>
                </div>
              </div>

              <p className="text-slate-600 text-sm italic leading-relaxed bg-slate-50 p-4 rounded-xl border border-slate-100">
                "{t.testimonial}"
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
