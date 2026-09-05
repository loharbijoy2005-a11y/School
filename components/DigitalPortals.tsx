import React from 'react';
import { Laptop, UserCheck, AlertTriangle, MessageSquare, Users, Star, BookOpen, Compass } from 'lucide-react';
import ScrollRevealCard from './ScrollRevealCard';

export const DigitalPortals: React.FC = () => {
  const portals = [
    {
      id: '1',
      title: 'Learning Management',
      subtitle: 'Courses, notes & assignments online',
      icon: <Laptop className="w-6 h-6 text-white" />,
      ringBg: 'bg-[#0F2E23]',
      ringGlow: 'bg-emerald-100 border border-emerald-300',
      bottomBar: 'bg-[#0F2E23]',
      cardBg: 'from-emerald-50/80 via-[#FDFBF7] to-white',
      targetUrl: 'https://banglarshiksha.gov.in',
    },
    {
      id: '2',
      title: 'Student Profile',
      subtitle: 'View & manage your student profile',
      icon: <UserCheck className="w-6 h-6 text-white" />,
      ringBg: 'bg-[#1B4332]',
      ringGlow: 'bg-teal-100 border border-teal-300',
      bottomBar: 'bg-[#1B4332]',
      cardBg: 'from-teal-50/80 via-[#FDFBF7] to-white',
      targetUrl: '#',
    },
    {
      id: '3',
      title: 'Grievance Redressal',
      subtitle: 'Report & resolve concerns confidentially',
      icon: <AlertTriangle className="w-6 h-6 text-white" />,
      ringBg: 'bg-[#881337]',
      ringGlow: 'bg-rose-100 border border-rose-300',
      bottomBar: 'bg-[#881337]',
      cardBg: 'from-rose-50/80 via-[#FDFBF7] to-white',
      targetUrl: '#',
    },
    {
      id: '4',
      title: 'Online Feedback',
      subtitle: 'Share your valuable feedback with us',
      icon: <MessageSquare className="w-6 h-6 text-white" />,
      ringBg: 'bg-indigo-900',
      ringGlow: 'bg-purple-100 border border-purple-300',
      bottomBar: 'bg-indigo-900',
      cardBg: 'from-purple-50/80 via-[#FDFBF7] to-white',
      targetUrl: '#',
    },
    {
      id: '5',
      title: 'Alumni Portal',
      subtitle: 'Reconnect through Praktani Sabha',
      icon: <Users className="w-6 h-6 text-white" />,
      ringBg: 'bg-amber-800',
      ringGlow: 'bg-amber-100 border border-amber-300',
      bottomBar: 'bg-amber-800',
      cardBg: 'from-amber-50/80 via-[#FDFBF7] to-white',
      targetUrl: '#',
    },
    {
      id: '6',
      title: '360° Teacher Appraisal',
      subtitle: 'Faculty performance assessment',
      icon: <Star className="w-6 h-6 text-white" />,
      ringBg: 'bg-[#0F172A]',
      ringGlow: 'bg-blue-100 border border-blue-300',
      bottomBar: 'bg-[#0F172A]',
      cardBg: 'from-blue-50/80 via-[#FDFBF7] to-white',
      targetUrl: '#',
    },
    {
      id: '7',
      title: 'WBBSE & WBCHSE Desk',
      subtitle: 'Program & course outcome mapping',
      icon: <BookOpen className="w-6 h-6 text-white" />,
      ringBg: 'bg-[#C58B24]',
      ringGlow: 'bg-yellow-100 border border-yellow-300',
      bottomBar: 'bg-[#C58B24]',
      cardBg: 'from-yellow-50/80 via-[#FDFBF7] to-white',
      targetUrl: '#',
    },
    {
      id: '8',
      title: 'Virtual Campus Tour',
      subtitle: 'Explore our beautiful campus online',
      icon: <Compass className="w-6 h-6 text-white" />,
      ringBg: 'bg-slate-900',
      ringGlow: 'bg-slate-100 border border-slate-300',
      bottomBar: 'bg-slate-900',
      cardBg: 'from-slate-100/80 via-[#FDFBF7] to-white',
      targetUrl: '#',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-[#FDFBF7] via-[#FAF7F2] to-[#FAF7F0] text-slate-900 relative border-b border-[#DFD7C7]">
      <div className="max-w-7xl mx-auto px-4 space-y-12">
        
        {/* Section Header Matching Screenshot 1:1 */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="flex items-center justify-center gap-2">
            <span className="h-[1px] w-8 bg-amber-500"></span>
            <span className="text-xs font-black text-amber-700 uppercase tracking-widest">
              QUICK ACCESS
            </span>
            <span className="h-[1px] w-8 bg-amber-500"></span>
          </div>

          <h2 className="font-serif font-black text-3xl md:text-4xl lg:text-5xl text-[#0F2E23] tracking-tight">
            Digital Campus Portals
          </h2>

          <p className="text-xs md:text-sm text-slate-600 font-medium leading-relaxed max-w-2xl mx-auto">
            One-tap access to the systems students, staff and faculty use most — from classroom tools to grievance & feedback channels.
          </p>
        </div>

        {/* 8-Card Grid Matching 1:1 Screenshot Design */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {portals.map((portal, idx) => (
            <ScrollRevealCard key={portal.id} delay={(idx % 4) * 90}>
              <a
                href={portal.targetUrl}
                target={portal.targetUrl.startsWith('http') ? '_blank' : '_self'}
                rel="noreferrer"
                className={`bg-gradient-to-b ${portal.cardBg} border border-[#DFD7C7] hover:border-amber-500 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col items-center text-center justify-between min-h-[260px] relative overflow-hidden cursor-pointer hover:-translate-y-1`}
              >
                {/* Central Dual-Ring Glow Circle Icon Badge */}
                <div className="space-y-4 flex flex-col items-center w-full">
                  <div className={`w-16 h-16 rounded-full ${portal.ringGlow} flex items-center justify-center p-1 shadow-inner group-hover:scale-110 transition-transform duration-300`}>
                    <div className={`w-full h-full rounded-full ${portal.ringBg} flex items-center justify-center shadow-md`}>
                      {portal.icon}
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <div className="space-y-1.5">
                    <h3 className="font-serif font-black text-lg md:text-xl text-slate-900 group-hover:text-[#881337] transition-colors leading-snug">
                      {portal.title}
                    </h3>
                    <p className="text-xs text-slate-500 font-medium leading-relaxed">
                      {portal.subtitle}
                    </p>
                  </div>
                </div>

                {/* Bottom Color Accent Bar */}
                <div className={`absolute bottom-0 inset-x-0 h-1.5 ${portal.bottomBar} rounded-b-3xl opacity-80 group-hover:opacity-100 transition-opacity`}></div>
              </a>
            </ScrollRevealCard>
          ))}
        </div>

      </div>
    </section>
  );
};
