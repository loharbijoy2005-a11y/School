import React, { useState } from 'react';
import { Target, Compass, Sparkles, BookOpen, ShieldCheck, Heart } from 'lucide-react';

export const VisionMissionTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'vision' | 'mission' | 'values'>('vision');

  return (
    <section className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Tab Buttons */}
        <div className="flex justify-center gap-3 mb-10">
          <button
            onClick={() => setActiveTab('vision')}
            className={`px-6 py-3 rounded-full font-bold text-xs uppercase tracking-wider transition-all ${
              activeTab === 'vision'
                ? 'bg-rose-600 text-white shadow-lg'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            Our Vision
          </button>

          <button
            onClick={() => setActiveTab('mission')}
            className={`px-6 py-3 rounded-full font-bold text-xs uppercase tracking-wider transition-all ${
              activeTab === 'mission'
                ? 'bg-rose-600 text-white shadow-lg'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            Our Mission
          </button>

          <button
            onClick={() => setActiveTab('values')}
            className={`px-6 py-3 rounded-full font-bold text-xs uppercase tracking-wider transition-all ${
              activeTab === 'values'
                ? 'bg-rose-600 text-white shadow-lg'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            Core Institutional Values
          </button>
        </div>

        {/* Content Box */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 max-w-4xl mx-auto text-center shadow-sm">
          {activeTab === 'vision' && (
            <div className="space-y-4">
              <div className="w-12 h-12 bg-rose-100 text-rose-600 rounded-full flex items-center justify-center mx-auto mb-2">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="font-serif font-extrabold text-2xl text-slate-900">Empowering Every Girl for Tomorrow</h3>
              <p className="text-slate-600 text-base leading-relaxed">
                To be a premier institution of female education in West Bengal that nurtures intellectual curiosity, ethical character, scientific thinking, and self-reliance in every female student.
              </p>
            </div>
          )}

          {activeTab === 'mission' && (
            <div className="space-y-4">
              <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center mx-auto mb-2">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="font-serif font-extrabold text-2xl text-slate-900">Holistic Quality & Inclusive Education</h3>
              <p className="text-slate-600 text-base leading-relaxed">
                Providing top-quality WBBSE & WBCHSE curriculum education supported by state welfare schemes, modern STEM computer labs, smart classrooms, and sports training without social or economic barriers.
              </p>
            </div>
          )}

          {activeTab === 'values' && (
            <div className="grid md:grid-cols-3 gap-6 text-left pt-2">
              <div className="bg-white p-4 rounded-xl border border-slate-200">
                <BookOpen className="w-5 h-5 text-rose-600 mb-2" />
                <h4 className="font-bold text-slate-900 text-sm mb-1">Academic Rigor</h4>
                <p className="text-slate-500 text-xs">Continuous evaluation and 100% Madhyamik/HS result excellence.</p>
              </div>

              <div className="bg-white p-4 rounded-xl border border-slate-200">
                <ShieldCheck className="w-5 h-5 text-emerald-600 mb-2" />
                <h4 className="font-bold text-slate-900 text-sm mb-1">Safe & Disciplined</h4>
                <p className="text-slate-500 text-xs">100% ragging-free campus with CCTV surveillance & moral values.</p>
              </div>

              <div className="bg-white p-4 rounded-xl border border-slate-200">
                <Heart className="w-5 h-5 text-amber-600 mb-2" />
                <h4 className="font-bold text-slate-900 text-sm mb-1">Women Empowerment</h4>
                <p className="text-slate-500 text-xs">Self-defense training, Kanyashree Prakalpa, and leadership activities.</p>
              </div>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};
