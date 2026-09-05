import React, { useState, MouseEvent } from 'react';
import { Award, Users, GraduationCap, ArrowRight, Download } from 'lucide-react';

interface HeroProps {
  onOpenAdmissionModal: () => void;
  onDownloadRoutine: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenAdmissionModal,
  onDownloadRoutine,
}) => {
  const [tiltStyle, setTiltStyle] = useState({ transform: 'rotateX(0deg) rotateY(0deg) scale(1)' });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    const tiltX = (y / rect.height) * 16;
    const tiltY = -(x / rect.width) * 16;
    setTiltStyle({ transform: `rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale(1.02)` });
  };

  const handleMouseLeave = () => {
    setTiltStyle({ transform: 'rotateX(0deg) rotateY(0deg) scale(1)' });
  };

  return (
    <section id="home" className="relative py-20 bg-gradient-to-br from-rose-50 via-pink-50 to-blue-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Text Column */}
        <div className="md:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-100 border border-rose-300 text-rose-700 font-bold text-xs uppercase tracking-wider">
            <Award className="w-4 h-4 text-rose-600" />
            <span>Government Sponsored H.S. School | Estd. 1945</span>
          </div>

          <h1 className="font-serif text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
            Empowering Young Minds,{' '}
            <span className="bg-gradient-to-r from-rose-600 to-indigo-900 bg-clip-text text-transparent">
              Inspiring Excellence
            </span>{' '}
            Since 1945
          </h1>

          <p className="text-slate-600 text-lg leading-relaxed">
            Mahishadal Gayeswari Girls' High School (H.S.) is a premier government-sponsored girls' high school in Mahishadal, Purba Medinipur. Affiliated to WBBSE and WBCHSE, we foster holistic academic brilliance, scientific temper, and leadership skills from Class V to Class XII.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <button
              onClick={onOpenAdmissionModal}
              className="bg-gradient-to-r from-rose-600 to-rose-700 hover:from-rose-700 hover:to-rose-800 text-white font-bold px-7 py-3.5 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 flex items-center gap-2"
            >
              <span>Online Admission 2026</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onDownloadRoutine}
              className="bg-amber-500 hover:bg-amber-600 text-white font-bold px-6 py-3.5 rounded-full shadow-md transition-all transform hover:-translate-y-1 flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              <span>Exam Routine</span>
            </button>

            <a
              href="#facilities"
              className="border-2 border-slate-300 hover:border-rose-600 hover:text-rose-600 text-slate-800 font-bold px-6 py-3.5 rounded-full transition-all flex items-center gap-2"
            >
              <span>Explore Facilities</span>
            </a>
          </div>
        </div>

        {/* Right 3D Tilt Card & Bouncing Stats Column */}
        <div className="md:col-span-5 relative" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
          
          {/* Main 3D Card */}
          <div
            className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white transition-transform duration-150 ease-out"
            style={tiltStyle}
          >
            <img
              src="assets/school_hero.jpg"
              alt="Mahishadal Gayeswari Girls High School Building"
              className="w-full h-[440px] object-cover"
            />
          </div>

          {/* Bouncing Floating Stat Card 1 */}
          <div className="absolute top-6 -left-6 bg-white/95 backdrop-blur-md p-4 rounded-xl shadow-xl border border-rose-200 flex items-center gap-3 animate-bounce-slow">
            <div className="w-12 h-12 rounded-lg bg-rose-100 text-rose-600 flex items-center justify-center">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-extrabold text-slate-900 text-lg leading-none">1,000+ Girls</h4>
              <p className="text-xs font-bold text-slate-500">Classes V to XII Enrolled</p>
            </div>
          </div>

          {/* Bouncing Floating Stat Card 2 */}
          <div className="absolute bottom-6 -right-6 bg-white/95 backdrop-blur-md p-4 rounded-xl shadow-xl border border-emerald-200 flex items-center gap-3 animate-bounce-slow delay-1000">
            <div className="w-12 h-12 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-extrabold text-slate-900 text-lg leading-none">100% Pass Rate</h4>
              <p className="text-xs font-bold text-slate-500">WBBSE & WBCHSE Excellence</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
