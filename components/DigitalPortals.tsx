import React from 'react';
import { ShieldCheck, UserCheck, Heart, AlertTriangle, Users, BookOpen, MessageSquare, Compass, ExternalLink } from 'lucide-react';
import { DigitalPortalItem } from '../types';

export const DigitalPortals: React.FC = () => {
  const portals: DigitalPortalItem[] = [
    {
      id: '1',
      title: 'Banglar Shiksha Sync',
      category: 'Govt Portal',
      description: 'Direct integration with West Bengal Govt Banglar Shiksha e-portal for student registration and ID tracking.',
      icon: 'ShieldCheck',
      targetUrl: 'https://banglarshiksha.gov.in',
      badgeText: 'Official Govt Portal',
    },
    {
      id: '2',
      title: 'Student Identity & Marks Portal',
      category: 'Academic Desk',
      description: 'Online access for guardians to check Madhyamik and HS summative exam marks and report cards.',
      icon: 'UserCheck',
      targetUrl: '#',
      badgeText: 'Student Portal',
    },
    {
      id: '3',
      title: 'Kanyashree & Welfare Schemes Hub',
      category: 'Welfare Wings',
      description: 'Track Kanyashree K1/K2 grant status, Sabooj Sathi cycle distribution, and Taruner Swapna tab grants.',
      icon: 'Heart',
      targetUrl: 'https://wbkanyashree.gov.in',
      badgeText: 'State Schemes',
    },
    {
      id: '4',
      title: 'Grievance & Student Safety Desk',
      category: 'Safety & Protection',
      description: '24/7 confidential safety hotline, anti-ragging desk, and student mental health counselling portal.',
      icon: 'AlertTriangle',
      targetUrl: '#',
      badgeText: '24/7 Helpline',
    },
    {
      id: '5',
      title: 'Alumni / Ex-Students Association',
      category: 'Community',
      description: 'Network for past graduates of Mahishadal Gayeswari Girls\' High School working across India and abroad.',
      icon: 'Users',
      targetUrl: '#',
      badgeText: 'Alumni Network',
    },
    {
      id: '6',
      title: 'Teacher Performance & Lesson Plans',
      category: 'Faculty Governance',
      description: 'Digital lesson plan repository, teaching learning material (TLM) archives, and academic calendar.',
      icon: 'BookOpen',
      targetUrl: '#',
      badgeText: 'Faculty Resource',
    },
    {
      id: '7',
      title: 'Online Guardian Feedback',
      category: 'Parent Portal',
      description: 'Direct interactive communication channel for parents to submit suggestions to the Headmistress.',
      icon: 'MessageSquare',
      targetUrl: '#',
      badgeText: 'Parent Connect',
    },
    {
      id: '8',
      title: '360° Virtual Campus Tour',
      category: 'Digital Experience',
      description: 'Explore our heritage school campus, STEM science labs, central library, and sports grounds online.',
      icon: 'Compass',
      targetUrl: '#',
      badgeText: 'Virtual Tour',
    },
  ];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6 text-amber-400" />;
      case 'UserCheck': return <UserCheck className="w-6 h-6 text-rose-400" />;
      case 'Heart': return <Heart className="w-6 h-6 text-rose-500" />;
      case 'AlertTriangle': return <AlertTriangle className="w-6 h-6 text-amber-400" />;
      case 'Users': return <Users className="w-6 h-6 text-blue-400" />;
      case 'BookOpen': return <BookOpen className="w-6 h-6 text-emerald-400" />;
      case 'MessageSquare': return <MessageSquare className="w-6 h-6 text-amber-400" />;
      default: return <Compass className="w-6 h-6 text-rose-400" />;
    }
  };

  return (
    <section className="py-20 bg-slate-950 text-white relative">
      <div className="max-w-7xl mx-auto px-4 space-y-12">
        
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold text-rose-400 uppercase tracking-widest bg-rose-500/10 px-3 py-1 rounded-full border border-rose-500/30">
            Digital Governance & Services
          </span>
          <h2 className="font-serif font-extrabold text-3xl md:text-4xl text-white">
            Digital School Portals (High-Density 8-Card Grid)
          </h2>
          <p className="text-xs text-slate-400">
            Instant 1-click access to government student welfare portals, academic report cards, and safety helplines.
          </p>
        </div>

        {/* 8-Card Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {portals.map((portal) => (
            <a
              key={portal.id}
              href={portal.targetUrl}
              target={portal.targetUrl.startsWith('http') ? '_blank' : '_self'}
              rel="noreferrer"
              className="bg-slate-900 p-6 rounded-3xl border border-slate-800 hover:border-amber-500/60 shadow-xl transition-all cursor-pointer group flex flex-col justify-between space-y-4 hover:-translate-y-1"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {getIcon(portal.icon)}
                  </div>
                  <span className="text-[10px] font-extrabold px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/30 uppercase">
                    {portal.badgeText}
                  </span>
                </div>

                <h3 className="font-serif font-extrabold text-lg text-white group-hover:text-amber-400 transition-colors leading-snug">
                  {portal.title}
                </h3>

                <p className="text-xs text-slate-400 leading-relaxed">
                  {portal.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-bold text-rose-400 group-hover:text-amber-400 transition-colors">
                <span>Access Portal</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};
