import React from 'react';
import { Star, MessageSquare } from 'lucide-react';
import { GoogleReview } from '../types';

export const GoogleReviews: React.FC = () => {
  const reviews: GoogleReview[] = [
    {
      id: '1',
      authorName: 'Swapan Kumar Das',
      role: 'Parent',
      rating: 5,
      date: '2 months ago',
      comment: 'Best girls high school in Mahishadal region. Excellent discipline, modern science labs, and teachers pay individual attention to students.',
      authorAvatar: 'S',
    },
    {
      id: '2',
      authorName: 'Subrata Roy',
      role: 'Parent',
      rating: 4.5,
      date: '4 months ago',
      comment: 'Very safe campus environment with 100% Kanyashree and Sabooj Sathi bicycle support. My daughter scored 94% in Madhyamik.',
      authorAvatar: 'S',
    },
    {
      id: '3',
      authorName: 'Ananya Mukherjee',
      role: 'Alumni',
      rating: 5,
      date: '6 months ago',
      comment: 'Proud to be an alumnus of MGGHS! The foundation laid here helped me crack WBJEE & get admission in engineering college.',
      authorAvatar: 'A',
    },
  ];

  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4">
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 border border-amber-300 text-amber-800 font-bold text-xs uppercase mb-3">
            <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
            <span>Google Reviews Rating</span>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-extrabold text-slate-900 mb-3 flex items-center justify-center gap-2">
            <span>4.1 Star Rating on Google Reviews</span>
          </h2>
          <p className="text-slate-600">
            Real feedback and testimonials from parents, guardians, and alumni.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <div key={r.id} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-md space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-slate-900 text-white font-extrabold text-sm flex items-center justify-center">
                    {r.authorAvatar}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm leading-none">{r.authorName}</h4>
                    <span className="text-xs text-rose-600 font-bold">{r.role}</span>
                  </div>
                </div>

                <div className="flex items-center text-amber-400">
                  <Star className="w-4 h-4 fill-amber-400" />
                  <span className="text-xs font-bold text-slate-700 ml-1">{r.rating}</span>
                </div>
              </div>

              <p className="text-slate-600 text-xs leading-relaxed italic">
                "{r.comment}"
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
