import React from 'react';
import { MapPin, Phone, Mail, ExternalLink, ShieldCheck, Lock, Award, Heart } from 'lucide-react';

interface FooterProps {
  onOpenAdminLoginModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenAdminLoginModal }) => {
  return (
    <footer className="bg-slate-950 text-slate-400 py-16 border-t border-slate-800 font-sans">
      <div className="max-w-7xl mx-auto px-4 space-y-12">
        
        {/* Main Footer Links Matrix */}
        <div className="grid md:grid-cols-4 gap-10">
          
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img src="/assets/school_logo.jpg" alt="MGGHS Logo" className="w-10 h-10 rounded-full border border-amber-400 p-0.5 bg-white" />
              <h3 className="font-serif font-extrabold text-white text-base leading-tight">
                Mahishadal Gayeswari Girls' High School (H.S.)
              </h3>
            </div>
            <p className="text-xs leading-relaxed text-slate-400">
              Pioneer government-sponsored girls' high school in Purba Medinipur, West Bengal since 1945. Affiliated to WBBSE & WBCHSE.
            </p>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="font-bold text-white text-xs uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#home" className="hover:text-amber-400 transition-colors">Home Page</a></li>
              <li><a href="#desk" className="hover:text-amber-400 transition-colors">Administration & HM Desk</a></li>
              <li><a href="#academics" className="hover:text-amber-400 transition-colors">WBBSE & WBCHSE Streams</a></li>
              <li><a href="#notices" className="hover:text-amber-400 transition-colors">Notice Board Hub</a></li>
              <li><a href="#welfare" className="hover:text-amber-400 transition-colors">Govt Welfare Schemes</a></li>
            </ul>
          </div>

          {/* State Govt & Board Portals */}
          <div>
            <h4 className="font-bold text-white text-xs uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
              State Board Portals
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="https://banglarshiksha.gov.in" target="_blank" rel="noreferrer" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <span>Banglar Shiksha Portal</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a href="https://wbbse.wb.gov.in" target="_blank" rel="noreferrer" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <span>WBBSE Official (Madhyamik)</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a href="https://wbchse.wb.gov.in" target="_blank" rel="noreferrer" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <span>WBCHSE Official (H.S.)</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a href="https://wbkanyashree.gov.in" target="_blank" rel="noreferrer" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <span>Kanyashree Prakalpa Portal</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-white text-xs uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
              School Campus Address
            </h4>
            <ul className="space-y-3 text-xs">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>Garkamalpur / Rajbari Road, Mahishadal,<br />Purba Medinipur, West Bengal - 721628</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <span>+91 3228 240211</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <span>mgghschool1945@gmail.com</span>
              </li>
            </ul>
          </div>

        </div>

        {/* SECTION 14 PROMINENT DUAL FOOTER LOGIN BUTTONS */}
        <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 flex flex-wrap justify-between items-center gap-4">
          <div>
            <h4 className="text-slate-200 font-bold text-sm flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-rose-500" />
              Authenticated Institutional Control Console
            </h4>
            <p className="text-xs text-slate-400">Headmistress, SMC Governing Body, & Clerical Office Staff Login.</p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onOpenAdminLoginModal}
              className="bg-gradient-to-r from-rose-600 to-rose-700 hover:from-rose-500 hover:to-rose-600 text-white font-extrabold px-5 py-2.5 rounded-xl text-xs flex items-center gap-2 shadow-lg transition-all"
            >
              <ShieldCheck className="w-4 h-4" />
              <span>ADMIN LOG IN</span>
            </button>

            <button
              onClick={onOpenAdminLoginModal}
              className="bg-slate-800 hover:bg-slate-700 text-amber-300 border border-amber-500/40 font-extrabold px-5 py-2.5 rounded-xl text-xs flex items-center gap-2 transition-all shadow-lg"
            >
              <Lock className="w-4 h-4 text-amber-400" />
              <span>OFFICE LOG IN</span>
            </button>
          </div>
        </div>

        <div className="pt-6 border-t border-slate-800 flex flex-wrap justify-between items-center text-xs text-slate-500 gap-4">
          <p>&copy; 2026 Mahishadal Gayeswari Girls' High School (H.S.). All Rights Reserved.</p>
          <p>Banglar Shiksha ID: WB-1945-MGGHS | UDISE: 19190806002 | WBBSE: E1-042 | WBCHSE: 105084</p>
        </div>

      </div>
    </footer>
  );
};
