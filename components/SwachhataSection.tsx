import React from 'react';
import { Sun, Droplets, Recycle, Sparkles, ShieldCheck } from 'lucide-react';
import { SwachhataItem } from '../types';

export const SwachhataSection: React.FC = () => {
  const greenItems: SwachhataItem[] = [
    {
      id: '1',
      title: 'Rooftop Solar Energy Grid',
      description: 'Clean renewable solar power installation generating 15 kW electricity for lighting, computer labs, and office fans.',
      imageUrl: '/assets/hero_campus.jpg',
      icon: 'Sun',
    },
    {
      id: '2',
      title: 'Rainwater Harvesting Reservoir',
      description: 'Underground groundwater recharge system capturing monsoon rainwater for campus gardening and sanitation.',
      imageUrl: '/assets/science_lab.jpg',
      icon: 'Droplets',
    },
    {
      id: '3',
      title: 'RO Drinking Water Purification',
      description: 'Multi-stage reverse osmosis filtration units ensuring 100% bacteria-free safe drinking water for all students.',
      imageUrl: '/assets/library_smartclass.jpg',
      icon: 'Sparkles',
    },
    {
      id: '4',
      title: 'Waste Segregation & Recycling',
      description: 'Dedicated organic composting pit for food waste and plastic-free green campus campaign managed by Eco-Club.',
      imageUrl: '/assets/sports_day.jpg',
      icon: 'Recycle',
    },
  ];

  return (
    <section className="py-20 bg-slate-950 text-white relative border-t border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 space-y-12">
        
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/30">
            Swachh Bharat & Green Campus
          </span>
          <h2 className="font-serif font-extrabold text-3xl md:text-4xl text-white">
            Swachhata & Green Campus Showcase
          </h2>
          <p className="text-xs text-slate-400">
            Promoting environmental sustainability, solar energy, plastic-free eco-habits, and clean drinking water.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {greenItems.map((item) => (
            <div
              key={item.id}
              className="bg-slate-900 p-6 rounded-3xl border border-slate-800 hover:border-emerald-500/50 shadow-xl space-y-4 transition-all group flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="h-36 rounded-2xl overflow-hidden relative">
                  <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
                  <span className="absolute top-3 left-3 bg-emerald-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                    Green Initiative
                  </span>
                </div>

                <h3 className="font-serif font-extrabold text-lg text-white group-hover:text-emerald-400 transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-2 border-t border-slate-800 text-[11px] text-emerald-400 font-bold flex items-center justify-between">
                <span>Eco-Club Certified</span>
                <span>Swachh School</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
