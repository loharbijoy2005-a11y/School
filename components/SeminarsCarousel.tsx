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
    <section className="py-20 bg-slate-950 text-white relative">
      <div className="max-w-7xl mx-auto px-4 space-y-12">
        
        <div className="flex flex-wrap justify-between items-end gap-4 border-b border-slate-800 pb-6">
          <div>
            <span className="text-xs font-bold text-amber-400 uppercase tracking-widest bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/30 mb-2 inline-block">
              Co-Curricular Excellence
            </span>
            <h2 className="font-serif font-extrabold text-3xl md:text-4xl text-white">
              Cultural Wings, Seminars & Workshops
            </h2>
            <p className="text-xs text-slate-400 mt-1">
              Building holistic personality, scientific curiosity, artistic expression, and self-defense skills.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrev}
              className="w-10 h-10 rounded-full bg-slate-900 hover:bg-slate-800 text-white border border-slate-700 flex items-center justify-center transition-colors"
              aria-label="Previous Event"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="w-10 h-10 rounded-full bg-slate-900 hover:bg-slate-800 text-white border border-slate-700 flex items-center justify-center transition-colors"
              aria-label="Next Event"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Active Event Slide Card */}
        <div className="bg-slate-900 rounded-3xl border border-slate-800 overflow-hidden shadow-2xl grid lg:grid-cols-12 items-center">
          
          <div className="lg:col-span-6 h-72 lg:h-96 relative">
            <img
              src={activeEvent.imageUrl}
              alt={activeEvent.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4">
              <span className="bg-rose-600 text-white text-[11px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider shadow-lg">
                {activeEvent.badge}
              </span>
            </div>
          </div>

          <div className="lg:col-span-6 p-8 lg:p-10 space-y-6">
            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 font-bold">
              <span className="flex items-center gap-1.5 text-amber-400">
                <Calendar className="w-4 h-4" />
                <span>{activeEvent.date}</span>
              </span>
              <span className="flex items-center gap-1.5 text-slate-300">
                <MapPin className="w-4 h-4 text-rose-400" />
                <span>{activeEvent.venue}</span>
              </span>
            </div>

            <h3 className="font-serif font-extrabold text-2xl lg:text-3xl text-white leading-snug">
              {activeEvent.title}
            </h3>

            <p className="text-slate-300 text-sm leading-relaxed">
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
                      currentIndex === idx ? 'bg-amber-400 w-6' : 'bg-slate-800'
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
