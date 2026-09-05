import React from 'react';
import { Camera } from 'lucide-react';
import { GalleryItem } from '../types';

export const EventGallery: React.FC = () => {
  const events: GalleryItem[] = [
    {
      id: '1',
      title: 'Saraswati Puja Celebration',
      category: 'Cultural Festival',
      imageUrl: 'assets/saraswati_puja.jpg',
    },
    {
      id: '2',
      title: 'Annual Athletic Track Meet',
      category: 'Sports & Fitness',
      imageUrl: 'assets/sports_day.jpg',
    },
    {
      id: '3',
      title: 'Annual Science Exhibition',
      category: 'STEM Innovation',
      imageUrl: 'assets/science_exhibition.jpg',
    },
    {
      id: '4',
      title: 'Prize Distribution Ceremony',
      category: 'Academic Excellence',
      imageUrl: 'assets/prize_distribution.jpg',
    },
  ];

  return (
    <section id="gallery" className="py-20 bg-slate-950 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-300 font-bold text-xs uppercase mb-3">
          <Camera className="w-4 h-4 text-amber-400" />
          <span>Life at MGGHS</span>
        </div>
        <h2 className="font-serif text-3xl md:text-4xl font-extrabold text-white mb-3">
          Auto-Scrolling Campus Event Reel
        </h2>
      </div>

      {/* Infinite Horizontal Marquee Reel */}
      <div className="overflow-hidden whitespace-nowrap w-full">
        <div className="inline-flex gap-6 animate-marquee whitespace-nowrap hover:[animation-play-state:paused]">
          {events.concat(events).map((item, idx) => (
            <div
              key={idx}
              className="w-80 h-56 rounded-xl overflow-hidden relative shrink-0 border-2 border-white/20 hover:border-rose-500 shadow-xl transition-all duration-300 group cursor-pointer"
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent p-4 flex flex-col justify-end">
                <h4 className="font-bold text-base text-white">{item.title}</h4>
                <span className="text-xs font-bold text-amber-400">{item.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
