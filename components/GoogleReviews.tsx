import React from 'react';
import { Star, Quote, CheckCircle2 } from 'lucide-react';
import { GoogleReview } from '../types';
import ScrollRevealCard from './ScrollRevealCard';

export const GoogleReviews: React.FC = () => {
  const reviews: GoogleReview[] = [
    {
      id: '1',
      authorName: 'Subrata Bhowmik',
      role: 'Parent',
      rating: 5,
      date: '2 weeks ago',
      comment: 'Best government-sponsored girls high school in Mahishadal region. Disciplined environment, dedicated Sirs & Madams, and excellent Madhyamik exam results.',
      authorAvatar: 'S',
    },
    {
      id: '2',
      authorName: 'Ankita Samanta',
      role: 'Alumni',
      rating: 5,
      date: '1 month ago',
      comment: 'Proud ex-student of MGGHS (2018 Batch). The foundation I received in Physics and Chemistry labs helped me clear NEET and become a doctor today.',
      authorAvatar: 'A',
    },
    {
      id: '3',
      authorName: 'Rabindra Nath Das',
      role: 'Parent',
      rating: 4,
      date: '3 months ago',
      comment: 'Kanyashree Prakalpa grant disbursement and Sabooj Sathi cycle distribution are very well managed by the office staff.',
      authorAvatar: 'R',
    },
  ];

  return (
    <section className="py-20 bg-[#FAF7F2] text-slate-800 relative border-b border-[#E8DFD0]">
      <div className="max-w-7xl mx-auto px-4 space-y-12">
        
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100 border border-amber-300 text-[#B45309] font-bold text-xs">
            <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
            <span>4.2 Star Google Rating (120+ Reviews)</span>
          </div>
          <h2 className="font-serif font-extrabold text-3xl md:text-4xl text-[#1E293B]">
            Verified Parent & Alumni Reviews
          </h2>
          <p className="text-xs text-slate-600">
            Real feedback from guardians, students, and distinguished ex-students of Mahishadal Gayeswari Girls' High School (H.S.).
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((rev, idx) => (
            <ScrollRevealCard key={rev.id} delay={idx * 120}>
              <div className="bg-white p-6 rounded-3xl border border-[#E8DFD0] shadow-xs space-y-4 hover:shadow-md transition-all flex flex-col justify-between h-full">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-amber-500">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <span className="text-[11px] text-slate-500">{rev.date}</span>
                  </div>

                  <p className="text-xs text-slate-700 italic leading-relaxed font-medium">
                    "{rev.comment}"
                  </p>
                </div>

                <div className="pt-3 border-t border-[#E8DFD0] flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-rose-100 text-[#9D174D] font-extrabold flex items-center justify-center border border-rose-200 shrink-0">
                    {rev.authorAvatar}
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-[#1E293B]">{rev.authorName}</h4>
                    <p className="text-[11px] text-[#B45309] font-bold">{rev.role} • Verified Review</p>
                  </div>
                </div>
              </div>
            </ScrollRevealCard>
          ))}
        </div>

      </div>
    </section>
  );
};
