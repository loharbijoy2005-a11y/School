import React from 'react';
import { BookOpen, Laptop, Microscope, Sun, Utensils, HeartPulse, ShieldCheck, Dumbbell, Trophy, Wifi, Sparkles, Users, Droplets, Camera } from 'lucide-react';
import { FacilityItem } from '../types';

export const BentoGrid: React.FC = () => {
  const facilities: FacilityItem[] = [
    {
      id: '1',
      title: 'Smart Audio-Visual Classrooms',
      description: 'Interactive digital smart boards and high-speed Wi-Fi internet for visual learning in Class V to XII.',
      imageUrl: '/assets/library_smartclass.jpg',
      isLarge: true,
    },
    {
      id: '2',
      title: 'Central Library & Archives',
      description: 'Over 12,000+ text books, reference journals, entrance test guides, and quiet reading room.',
      imageUrl: '/assets/library_smartclass.jpg',
    },
    {
      id: '3',
      title: 'ICT Desktop Computer Laboratory',
      description: 'State-of-the-art computer lab with 30+ desktop PCs, programming tools, and broadband internet.',
      imageUrl: '/assets/science_lab.jpg',
    },
    {
      id: '4',
      title: 'Advanced Science Practical Labs',
      description: 'Dedicated Physics, Chemistry, and Biology laboratories equipped with modern instruments and chemical safety setup.',
      imageUrl: '/assets/science_lab.jpg',
      isLarge: true,
    },
    {
      id: '5',
      title: 'Mid-Day Meal Hygienic Dining Hall',
      description: 'Clean, spacious dining hall serving daily cooked nutritious hot meals under Govt. Mid-Day Meal scheme.',
      imageUrl: '/assets/saraswati_puja.jpg',
    },
    {
      id: '6',
      title: 'Medical Sick Room & First Aid Cell',
      description: 'First-aid beds, emergency medicines, and regular health checkup camps by government medical officers.',
      imageUrl: '/assets/headmistress.jpg',
    },
    {
      id: '7',
      title: 'Girls Common Room & Indoor Games',
      description: 'Relaxation lounge with carrom, chess, and table tennis facilities for female students during breaks.',
      imageUrl: '/assets/sports_day.jpg',
    },
    {
      id: '8',
      title: 'Spacious Sports Ground & Athletics Track',
      description: 'Full-sized athletic track for annual athletic meets, volleyball courts, and karate self-defense training.',
      imageUrl: '/assets/sports_day.jpg',
      isLarge: true,
    },
    {
      id: '9',
      title: 'Eco-Club & Solar Powered Campus',
      description: 'Rooftop solar panels generating clean green energy and rainwater harvesting garden.',
      imageUrl: '/assets/hero_campus.jpg',
    },
    {
      id: '10',
      title: 'Kanyashree Karate Self-Defense Dojang',
      description: 'Specialized martial arts studio training female students in self-defense and physical fitness.',
      imageUrl: '/assets/sports_day.jpg',
    },
    {
      id: '11',
      title: 'RO Water Purification Plant',
      description: 'Commercial multi-stage RO water purifiers providing 100% clean drinking water across all floors.',
      imageUrl: '/assets/hero_campus.jpg',
    },
    {
      id: '12',
      title: '24/7 CCTV Security Surveillance Hub',
      description: 'Comprehensive CCTV security coverage across entry gates, corridors, and campus boundaries.',
      imageUrl: '/assets/school_logo.jpg',
    },
    {
      id: '13',
      title: 'Career Counselling & Competitive Guidance',
      description: 'Seminars conducted by government officials, doctors, and engineers guiding Class X and XII students.',
      imageUrl: '/assets/prize_distribution.jpg',
    },
    {
      id: '14',
      title: 'Heritage School Auditorium',
      description: '500-seater assembly hall for morning prayers, annual cultural functions, and inter-school debates.',
      imageUrl: '/assets/saraswati_puja.jpg',
    },
  ];

  return (
    <section id="facilities" className="py-20 bg-slate-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 space-y-12">
        
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold text-amber-400 uppercase tracking-widest bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/30">
            World-Class Infrastructure
          </span>
          <h2 className="font-serif font-extrabold text-3xl md:text-4xl text-white">
            Campus Facilities Grid (14+ Bento-Cards)
          </h2>
          <p className="text-xs text-slate-400">
            Modern educational facilities engineered to nurture every female student's academic and personal growth.
          </p>
        </div>

        {/* 14+ Bento Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {facilities.map((fac) => (
            <div
              key={fac.id}
              className={`bg-slate-950 p-5 rounded-3xl border border-slate-800 hover:border-amber-500/60 shadow-xl transition-all group flex flex-col justify-between space-y-4 ${
                fac.isLarge ? 'sm:col-span-2' : ''
              }`}
            >
              <div className="space-y-3">
                <div className="h-40 rounded-2xl overflow-hidden relative">
                  <img
                    src={fac.imageUrl}
                    alt={fac.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80"></div>
                  <span className="absolute bottom-3 left-3 bg-rose-600 text-white text-[10px] font-extrabold px-2.5 py-0.5 rounded-full uppercase">
                    Modern Facility
                  </span>
                </div>

                <h3 className="font-serif font-extrabold text-lg text-white group-hover:text-amber-400 transition-colors leading-snug">
                  {fac.title}
                </h3>

                <p className="text-xs text-slate-400 leading-relaxed">
                  {fac.description}
                </p>
              </div>

              <div className="pt-2 border-t border-slate-800 text-[11px] text-emerald-400 font-bold flex items-center justify-between">
                <span>Active Infrastructure</span>
                <span>MGGHS Campus</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
