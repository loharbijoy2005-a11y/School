import React from 'react';
import { LayoutGrid } from 'lucide-react';
import { FacilityItem } from '../types';

export const BentoGrid: React.FC = () => {
  const facilities: FacilityItem[] = [
    {
      id: '1',
      title: 'Science Laboratories',
      description: 'Fully equipped Physics, Chemistry, and Life Science practical laboratories for Class IX to XII practical classes.',
      imageUrl: 'assets/science_lab.jpg',
      isLarge: true,
    },
    {
      id: '2',
      title: 'School Library',
      description: 'Rich collection of text reference books, storybooks, and competitive exam guides.',
      imageUrl: 'assets/library.jpg',
      isLarge: false,
    },
    {
      id: '3',
      title: 'Sports & Physical Fitness',
      description: 'Annual sports, gymnastics, volleyball court, and physical education classes.',
      imageUrl: 'assets/ncc_defense.jpg',
      isLarge: false,
    },
    {
      id: '4',
      title: 'ICT Computer Lab & Smart Classrooms',
      description: 'Banglar Shiksha ICT computer center equipping female students with essential computer literacy.',
      imageUrl: 'assets/school_hero.jpg',
      isLarge: true,
    },
  ];

  return (
    <section id="facilities" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-100 border border-rose-300 text-rose-700 font-bold text-xs uppercase mb-3">
            <LayoutGrid className="w-4 h-4 text-rose-600" />
            <span>Modern Infrastructure</span>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-extrabold text-slate-900 mb-3">
            Campus Facilities Bento-Grid
          </h2>
          <p className="text-slate-600">
            Explore our state-of-the-art facilities designed for safe, engaging, and comprehensive learning.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {facilities.map((f) => (
            <div
              key={f.id}
              className={`relative rounded-2xl overflow-hidden group border border-slate-200 hover:border-rose-500 shadow-md hover:shadow-xl transition-all duration-300 min-h-[260px] ${
                f.isLarge ? 'md:col-span-2' : ''
              }`}
            >
              <img
                src={f.imageUrl}
                alt={f.title}
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent p-6 flex flex-col justify-end text-white">
                <h3 className="font-extrabold text-xl mb-1.5 group-hover:text-rose-400 transition-colors">
                  {f.title}
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {f.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
