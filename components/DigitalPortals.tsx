import React from 'react';
import { BookOpen, UserCheck, HeartHandshake, ShieldAlert, GraduationCap, Camera, ArrowUpRight } from 'lucide-react';
import { DigitalPortalItem } from '../types';

export const DigitalPortals: React.FC = () => {
  const portals: DigitalPortalItem[] = [
    {
      id: 'lms',
      title: 'LMS Notes Portal',
      category: 'E-Learning',
      description: 'Download chapter notes, model test papers, and class worksheets online.',
      icon: 'BookOpen',
      targetUrl: '#notices',
      badgeText: 'FREE ACCESS',
    },
    {
      id: 'student_profile',
      title: 'Student Profile System',
      category: 'Banglar Shiksha',
      description: 'Access student academic record, attendance, and fee status.',
      icon: 'UserCheck',
      targetUrl: 'https://banglarshiksha.gov.in',
      badgeText: 'GOVT PORTAL',
    },
    {
      id: 'kanyashree_tracker',
      title: 'Kanyashree & Schemes Tracker',
      category: 'Welfare',
      description: 'Check K1, K2 stipend disbursement status & Sabooj Sathi bicycle ID.',
      icon: 'HeartHandshake',
      targetUrl: '#welfare',
      badgeText: 'STATUS CHECK',
    },
    {
      id: 'grievance',
      title: 'Grievance Redressal Cell',
      category: 'Safety & Security',
      description: 'Confidential online helpdesk for student complaints, safety & anti-ragging.',
      icon: 'ShieldAlert',
      targetUrl: '#admission',
      badgeText: '100% SECURE',
    },
    {
      id: 'alumni',
      title: 'Alumni Network',
      category: 'Community',
      description: 'Connect with former MGGHS female students, doctors, teachers & leaders.',
      icon: 'GraduationCap',
      targetUrl: '#desk',
      badgeText: 'JOIN NETWORK',
    },
    {
      id: 'virtual_tour',
      title: 'Virtual Campus Tour & Gallery',
      category: 'Campus Life',
      description: 'Explore high-res photo gallery of classrooms, labs, auditorium & grounds.',
      icon: 'Camera',
      targetUrl: '#gallery',
      badgeText: 'EXPLORE',
    },
  ];

  return (
    <section className="py-20 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4">
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-500/20 border border-rose-500/40 text-rose-300 font-bold text-xs uppercase mb-3">
            <BookOpen className="w-4 h-4 text-rose-400" />
            <span>Digital Access Grid</span>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-extrabold text-white mb-3">
            Digital Campus Portals & Services
          </h2>
          <p className="text-slate-400">
            One-tap action portals for notes, welfare tracking, profile records, and alumni.
          </p>
        </div>

        {/* 6-Card Action Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portals.map((p) => (
            <a
              key={p.id}
              href={p.targetUrl}
              className="bg-slate-950 p-6 rounded-2xl border border-slate-800 hover:border-rose-500 shadow-xl transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-rose-500/20 text-rose-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {p.icon === 'BookOpen' && <BookOpen className="w-6 h-6" />}
                    {p.icon === 'UserCheck' && <UserCheck className="w-6 h-6" />}
                    {p.icon === 'HeartHandshake' && <HeartHandshake className="w-6 h-6" />}
                    {p.icon === 'ShieldAlert' && <ShieldAlert className="w-6 h-6" />}
                    {p.icon === 'GraduationCap' && <GraduationCap className="w-6 h-6" />}
                    {p.icon === 'Camera' && <Camera className="w-6 h-6" />}
                  </div>
                  <span className="bg-amber-500/20 text-amber-300 border border-amber-500/30 text-[10px] font-extrabold px-2.5 py-0.5 rounded-full uppercase">
                    {p.badgeText}
                  </span>
                </div>

                <h3 className="font-bold text-lg text-white mb-1.5 group-hover:text-rose-400 transition-colors">
                  {p.title}
                </h3>
                <p className="text-slate-400 text-xs leading-relaxed mb-4">{p.description}</p>
              </div>

              <div className="flex items-center justify-between text-xs font-bold text-slate-400 pt-3 border-t border-slate-900 group-hover:text-white">
                <span>Access Portal</span>
                <ArrowUpRight className="w-4 h-4 text-rose-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};
