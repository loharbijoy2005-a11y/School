import React from 'react';
import { Sparkles, Calendar, ArrowRight } from 'lucide-react';

export const SeminarsCarousel: React.FC = () => {
  const items = [
    {
      title: 'Annual Science Exhibition & Robotics Model Fair',
      date: '10 Nov 2026',
      tag: 'STEM Seminar',
      desc: 'District level working model presentation by Class IX to XII science students.',
      img: 'assets/science_exhibition.jpg',
    },
    {
      title: 'Rabindra Jayanti & Cultural Evening',
      date: '09 May 2026',
      tag: 'Cultural Heritage',
      desc: 'Tagore songs, recitations, and Bengali drama performances by school students.',
      img: 'assets/saraswati_puja.jpg',
    },
    {
      title: 'Karate & Self-Defense Training Workshop',
      date: '15 Aug 2026',
      tag: 'Girls Empowerment',
      desc: 'Compulsory self-defense techniques and mental bravery training for female students.',
      img: 'assets/ncc_defense.jpg',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-100 border border-rose-300 text-rose-700 font-bold text-xs uppercase mb-3">
            <Sparkles className="w-4 h-4 text-rose-600" />
            <span>Co-Curricular Spectrum</span>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-extrabold text-slate-900 mb-3">
            Seminars, Cultural Wings & Workshops
          </h2>
          <p className="text-slate-600">
            Fostering holistic growth, artistic expression, and self-defense skills.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="bg-slate-50 rounded-2xl overflow-hidden border border-slate-200 hover:border-rose-400 shadow-md hover:shadow-xl transition-all duration-300 group"
            >
              <div className="h-48 overflow-hidden relative">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                />
                <span className="absolute top-3 right-3 bg-slate-900/80 backdrop-blur-md text-amber-400 text-xs font-bold px-3 py-1 rounded-full">
                  {item.tag}
                </span>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-1 text-slate-400 text-xs font-bold mb-2">
                  <Calendar className="w-3.5 h-3.5 text-rose-600" />
                  <span>{item.date}</span>
                </div>
                <h3 className="font-bold text-slate-900 text-lg mb-2 leading-snug group-hover:text-rose-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
