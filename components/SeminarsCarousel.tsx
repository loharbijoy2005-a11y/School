import React, { useState } from 'react';
import { Calendar, MapPin, Sparkles, ChevronLeft, ChevronRight, Award } from 'lucide-react';
import { CulturalEvent } from '../types';

export const SeminarsCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const events: CulturalEvent[] = [
    {
      id: '1',
      title: 'Annual STEM Science & Innovation Exhibition 2026',
      date: '18 FEB 2026',
      venue: 'School Auditorium & Science Labs',
      description: 'Female students demonstrated working models on solar energy, robotics, rainwater harvesting, and chemistry reaction practicals before district education officials.',
      imageUrl: '/assets/science_exhibition.jpg',
      badge: 'District Level STEM Showcase',
    },
    {
      id: '2',
      title: 'Rabindra-Nazrul Jayanti Cultural Performance & Recitation',
      date: '09 MAY 2026',
      venue: 'Heritage Open Air Stage',
      description: 'Annual cultural tribute featuring Rabindra Sangeet, Nazrul Geeti, Bengali dance drama, and poetry recitations by students across Class V to XII.',
      imageUrl: '/assets/saraswati_puja.jpg',
      badge: 'Cultural Heritage Celebration',
    },
    {
      id: '3',
      title: 'Kanyashree Karate Self-Defense & Yoga Boot-Camp',
      date: '15 JUL 2026',
      venue: 'School Sports Ground',
      description: 'Intensive self-defense martial arts training and daily yoga routines conducted under West Bengal State Kanyashree Prakalpa wing for female student safety.',
      imageUrl: '/assets/sports_day.jpg',
      badge: 'Women Empowerment Wing',
    },
    {
      id: '4',
      title: 'District Inter-School Athletic Meet & Prize Distribution',
      date: '10 JAN 2026',
      venue: 'Mahishadal Rajbari Athletics Stadium',
      description: 'Our female athletes secured 1st position in 100m sprint, relay race, and high jump competitions across Purba Medinipur district.',
      imageUrl: '/assets/prize_distribution.jpg',
      badge: 'Sports Championship Award',
    },
  ];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % events.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + events.length) % events.length);
  };

  const activeEvent = events[currentIndex];

  return (
    <section className="py-20 bg-[#FAF7F2] text-slate-800 relative border-b border-[#E8DFD0]">
      <div className="max-w-7xl mx-auto px-4 space-y-12">
        
        <div className="flex flex-wrap justify-between items-end gap-4 border-b border-[#E8DFD0] pb-6">
          <div>
            <span className="text-xs font-bold text-[#B45309] uppercase tracking-widest bg-amber-100/60 px-3 py-1 rounded-full border border-amber-300/60 mb-2 inline-block">
              Co-Curricular Excellence
            </span>
            <h2 className="font-serif font-extrabold text-3xl md:text-4xl text-[#1E293B]">
              Cultural Wings, Seminars & Workshops
            </h2>
            <p className="text-xs text-slate-600 mt-1">
              Building holistic personality, scientific curiosity, artistic expression, and self-defense skills.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrev}
              className="w-10 h-10 rounded-full bg-white hover:bg-slate-100 text-slate-700 border border-[#E8DFD0] flex items-center justify-center transition-colors shadow-xs"
              aria-label="Previous Event"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="w-10 h-10 rounded-full bg-white hover:bg-slate-100 text-slate-700 border border-[#E8DFD0] flex items-center justify-center transition-colors shadow-xs"
              aria-label="Next Event"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Active Event Slide Card */}
        <div className="bg-white rounded-3xl border border-[#E8DFD0] overflow-hidden shadow-md grid lg:grid-cols-12 items-center">
          
          <div className="lg:col-span-6 h-72 lg:h-96 relative bg-slate-100">
            <img
              src={activeEvent.imageUrl}
              alt={activeEvent.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4">
              <span className="bg-[#9D174D] text-white text-[11px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
                {activeEvent.badge}
              </span>
            </div>
          </div>

          <div className="lg:col-span-6 p-8 lg:p-10 space-y-6">
            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-600 font-bold">
              <span className="flex items-center gap-1.5 text-[#B45309]">
                <Calendar className="w-4 h-4" />
                <span>{activeEvent.date}</span>
              </span>
              <span className="flex items-center gap-1.5 text-slate-700">
                <MapPin className="w-4 h-4 text-[#9D174D]" />
                <span>{activeEvent.venue}</span>
              </span>
            </div>

            <h3 className="font-serif font-extrabold text-2xl lg:text-3xl text-[#1E293B] leading-snug">
              {activeEvent.title}
            </h3>

            <p className="text-slate-600 text-sm leading-relaxed font-medium">
              {activeEvent.description}
            </p>

            <div className="pt-2 flex items-center justify-between">
              <span className="text-xs text-slate-500 font-mono">
                Event {currentIndex + 1} of {events.length}
              </span>

              <div className="flex gap-1.5">
                {events.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      currentIndex === idx ? 'bg-[#B45309] w-6' : 'bg-slate-200'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
