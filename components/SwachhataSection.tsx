import React from 'react';
import { Sun, Droplets, Recycle, Sparkles, ShieldCheck } from 'lucide-react';
import { SwachhataItem } from '../types';
import ScrollRevealCard from './ScrollRevealCard';

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
    <section className="py-20 bg-[#FAF7F2] text-slate-800 relative border-b border-[#E8DFD0]">
      <div className="max-w-7xl mx-auto px-4 space-y-12">
        
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold text-[#047857] uppercase tracking-widest bg-emerald-100/60 px-3 py-1 rounded-full border border-emerald-300/60">
            Swachh Bharat & Green Campus
          </span>
          <h2 className="font-serif font-extrabold text-3xl md:text-4xl text-[#1E293B]">
            Swachhata & Green Campus Showcase
          </h2>
          <p className="text-xs text-slate-600">
            Promoting environmental sustainability, solar energy, plastic-free eco-habits, and clean drinking water.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {greenItems.map((item, idx) => (
            <ScrollRevealCard key={item.id} delay={idx * 90}>
              <div className="bg-white p-6 rounded-3xl border border-[#E8DFD0] hover:border-[#047857]/50 shadow-xs hover:shadow-md space-y-4 transition-all group flex flex-col justify-between h-full">
                <div className="space-y-3">
                  <div className="h-36 rounded-2xl overflow-hidden relative bg-slate-100">
                    <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1E293B]/60 to-transparent"></div>
                    <span className="absolute top-3 left-3 bg-[#047857] text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-xs">
                      Green Initiative
                    </span>
                  </div>

                  <h3 className="font-serif font-extrabold text-lg text-[#1E293B] group-hover:text-[#047857] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed font-medium">
                    {item.description}
                  </p>
                </div>

                <div className="pt-2 border-t border-[#E8DFD0] text-[11px] text-[#047857] font-bold flex items-center justify-between">
                  <span>Eco-Club Certified</span>
                  <span>Swachh School</span>
                </div>
              </div>
            </ScrollRevealCard>
          ))}
        </div>

      </div>
    </section>
  );
};
