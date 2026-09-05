import React from 'react';
import { Target, Compass, Award, Sparkles, Heart, ShieldCheck, BookOpen, Users } from 'lucide-react';

export const VisionMissionTabs: React.FC = () => {
  return (
    <section className="py-16 bg-slate-950 text-white relative">
      <div className="max-w-7xl mx-auto px-4 space-y-10">
        
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <span className="text-xs font-bold text-amber-400 uppercase tracking-widest bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/30">
            Institutional Pillars
          </span>
          <h2 className="font-serif font-extrabold text-3xl md:text-4xl text-white">
            Vision, Mission & Core Philosophy
          </h2>
          <p className="text-xs text-slate-400">
            Guiding female students towards academic excellence, moral integrity, and social leadership since 1945.
          </p>
        </div>

        {/* 3-Column Glass Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          
          {/* Card 1: Vision - Academic Excellence */}
          <div className="glass-card-luxury p-8 rounded-3xl border border-slate-800 space-y-4 shadow-xl hover:-translate-y-1 transition-transform group">
            <div className="w-14 h-14 rounded-2xl bg-amber-500/20 text-amber-400 flex items-center justify-center border border-amber-500/30 group-hover:scale-110 transition-transform">
              <Target className="w-7 h-7" />
            </div>
            <h3 className="font-serif font-extrabold text-2xl text-white group-hover:text-amber-400 transition-colors">
              Our Vision: Academic Brilliance
            </h3>
            <p className="text-slate-300 text-xs leading-relaxed">
              To remain West Bengal's leading government-sponsored girls' institution, fostering scientific curiosity, critical thinking, and 100% board examination distinction across Secondary (WBBSE) and Higher Secondary (WBCHSE) streams.
            </p>
            <div className="pt-2 border-t border-slate-800/80 text-[11px] text-amber-300 font-bold flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>STEM Labs & Smart Classrooms</span>
            </div>
          </div>

          {/* Card 2: Mission - Girl Child Empowerment */}
          <div className="glass-card-luxury p-8 rounded-3xl border border-slate-800 space-y-4 shadow-xl hover:-translate-y-1 transition-transform group">
            <div className="w-14 h-14 rounded-2xl bg-rose-500/20 text-rose-400 flex items-center justify-center border border-rose-500/30 group-hover:scale-110 transition-transform">
              <Compass className="w-7 h-7" />
            </div>
            <h3 className="font-serif font-extrabold text-2xl text-white group-hover:text-rose-400 transition-colors">
              Our Mission: Girl Empowerment
            </h3>
            <p className="text-slate-300 text-xs leading-relaxed">
              Equipping female students with Kanyashree Prakalpa benefits, Karate self-defense training, ICT computer literacy, and leadership opportunities to eradicate socio-economic barriers and build self-reliant citizens.
            </p>
            <div className="pt-2 border-t border-slate-800/80 text-[11px] text-rose-300 font-bold flex items-center gap-1.5">
              <Heart className="w-3.5 h-3.5" />
              <span>Kanyashree K1/K2 & Self-Defense</span>
            </div>
          </div>

          {/* Card 3: Aims - Social Upliftment */}
          <div className="glass-card-luxury p-8 rounded-3xl border border-slate-800 space-y-4 shadow-xl hover:-translate-y-1 transition-transform group">
            <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/30 group-hover:scale-110 transition-transform">
              <Award className="w-7 h-7" />
            </div>
            <h3 className="font-serif font-extrabold text-2xl text-white group-hover:text-emerald-400 transition-colors">
              Our Aims: Social Integrity
            </h3>
            <p className="text-slate-300 text-xs leading-relaxed">
              Inculcating moral ethics, environmental awareness through eco-clubs, cultural heritage celebration, and civic responsibility so our alumni shine as doctors, engineers, teachers, and administrators.
            </p>
            <div className="pt-2 border-t border-slate-800/80 text-[11px] text-emerald-300 font-bold flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Safe, Disciplined & Eco Campus</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
