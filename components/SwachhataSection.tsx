import React from 'react';
import { Sun, Droplets, Leaf, GlassWater } from 'lucide-react';
import { SwachhataItem } from '../types';

export const SwachhataSection: React.FC = () => {
  const items: SwachhataItem[] = [
    {
      id: 'solar',
      title: 'Solar Power Grid System',
      description: 'Campus powered with clean renewable solar energy grid panels.',
      imageUrl: '/assets/hero_campus.jpg',
      icon: 'Sun',
    },
    {
      id: 'rainwater',
      title: 'Rainwater Harvesting',
      description: 'Rainwater conservation tank system for school garden & green campus.',
      imageUrl: '/assets/library.jpg',
      icon: 'Droplets',
    },
    {
      id: 'waste',
      title: 'Organic Waste Management',
      description: 'Zero-single-use-plastic campus with organic composting unit.',
      imageUrl: '/assets/science_lab.jpg',
      icon: 'Leaf',
    },
    {
      id: 'water',
      title: 'Safe RO Drinking Water',
      description: 'Multi-stage UV+RO purified safe drinking water stations across building floors.',
      imageUrl: '/assets/school_hero.jpg',
      icon: 'GlassWater',
    },
  ];

  return (
    <section className="py-20 bg-emerald-950 text-white">
      <div className="max-w-7xl mx-auto px-4">
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 font-bold text-xs uppercase mb-3">
            <Leaf className="w-4 h-4 text-emerald-400" />
            <span>Green Campus Initiatives</span>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-extrabold text-white mb-3">
            Swachhata & Eco-Friendly Green Campus
          </h2>
          <p className="text-emerald-200">
            Dedicated to sustainability, solar energy, rainwater harvesting, and clean health.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item) => (
            <div key={item.id} className="bg-slate-900/90 border border-emerald-500/30 rounded-2xl p-5 space-y-3 shadow-lg">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                {item.icon === 'Sun' && <Sun className="w-5 h-5" />}
                {item.icon === 'Droplets' && <Droplets className="w-5 h-5" />}
                {item.icon === 'Leaf' && <Leaf className="w-5 h-5" />}
                {item.icon === 'GlassWater' && <GlassWater className="w-5 h-5" />}
              </div>
              <h3 className="font-bold text-white text-base">{item.title}</h3>
              <p className="text-slate-300 text-xs leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
