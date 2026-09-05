import React from 'react';
import { MapPin, Phone, Mail, ExternalLink, ShieldCheck, Lock, UserCheck } from 'lucide-react';

interface FooterProps {
  onOpenAdminLoginModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenAdminLoginModal }) => {
  return (
    <footer className="bg-slate-950 text-slate-400 py-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-10 mb-12">
        
        {/* Brand Column */}
        <div className="space-y-4">
          <h3 className="font-serif font-bold text-white text-lg leading-tight">
            Mahishadal Gayeswari Girls' High School (H.S.)
          </h3>
          <p className="text-xs leading-relaxed text-slate-400">
            Government Sponsored Girls High School. Affiliated to West Bengal Board of Secondary Education (WBBSE) & West Bengal Council of Higher Secondary Education (WBCHSE).
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-bold text-white text-xs uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
            Quick Navigation
          </h4>
          <ul className="space-y-2 text-xs">
            <li><a href="#home" className="hover:text-amber-400 transition-colors">Home Page</a></li>
            <li><a href="#desk" className="hover:text-amber-400 transition-colors">HM Message</a></li>
            <li><a href="#academics" className="hover:text-amber-400 transition-colors">WBBSE & WBCHSE Streams</a></li>
            <li><a href="#notices" className="hover:text-amber-400 transition-colors">Notice Board</a></li>
            <li><a href="#welfare" className="hover:text-amber-400 transition-colors">Govt Welfare Schemes</a></li>
          </ul>
        </div>

        {/* Govt Portals */}
        <div>
          <h4 className="font-bold text-white text-xs uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
            Govt. Portals
          </h4>
          <ul className="space-y-2 text-xs">
            <li>
              <a href="https://banglarshiksha.gov.in" target="_blank" rel="noreferrer" className="hover:text-amber-400 transition-colors flex items-center gap-1">
                <span>Banglar Shiksha Portal</span>
                <ExternalLink className="w-3 h-3 text-slate-500" />
              </a>
            </li>
            <li>
              <a href="https://wbbse.wb.gov.in" target="_blank" rel="noreferrer" className="hover:text-amber-400 transition-colors flex items-center gap-1">
                <span>WBBSE Official (Madhyamik)</span>
                <ExternalLink className="w-3 h-3 text-slate-500" />
              </a>
            </li>
            <li>
              <a href="https://wbchse.wb.gov.in" target="_blank" rel="noreferrer" className="hover:text-amber-400 transition-colors flex items-center gap-1">
                <span>WBCHSE Official (H.S.)</span>
                <ExternalLink className="w-3 h-3 text-slate-500" />
              </a>
            </li>
            <li>
              <a href="https://wbkanyashree.gov.in" target="_blank" rel="noreferrer" className="hover:text-amber-400 transition-colors flex items-center gap-1">
                <span>Kanyashree Prakalpa Portal</span>
                <ExternalLink className="w-3 h-3 text-slate-500" />
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-bold text-white text-xs uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
            School Address
          </h4>
          <ul className="space-y-3 text-xs">
            <li className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <span>Mahishadal Gayeswari Girls' High School (H.S.)<br />P.O. & P.S.- Mahishadal<br />Purba Medinipur, West Bengal - 721628</span>
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

      {/* CRITICAL BOTTOM ACTIONS: Dual Distinct Admin & Office Buttons */}
      <div className="max-w-7xl mx-auto px-4 py-4 bg-slate-900/60 rounded-xl border border-slate-800/80 flex flex-wrap justify-between items-center gap-3 mb-8">
        <div>
          <h4 className="text-slate-200 font-bold text-xs flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-rose-500" />
            Institutional Staff & Portal Access
          </h4>
          <p className="text-[11px] text-slate-400">Authenticated portal for Headmistress & clerical office staff.</p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={onOpenAdminLoginModal}
            className="bg-rose-600/90 hover:bg-rose-600 text-white font-bold px-3 py-1.5 rounded-lg text-xs flex items-center gap-1.5 transition-all"
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Admin Login</span>
          </button>

          <button
            onClick={onOpenAdminLoginModal}
            className="bg-slate-800 hover:bg-slate-700 text-amber-300 border border-slate-700 font-bold px-3 py-1.5 rounded-lg text-xs flex items-center gap-1.5 transition-all"
          >
            <Lock className="w-3.5 h-3.5" />
            <span>Office Login</span>
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 pt-6 border-t border-slate-800 flex flex-wrap justify-between items-center text-xs text-slate-500 gap-4">
        <p>&copy; 2026 Mahishadal Gayeswari Girls' High School (H.S.). All Rights Reserved.</p>
        <p>Banglar Shiksha School ID: WB-1945-MGGHS | WBBSE: E1-042 | WBCHSE: 105084</p>
      </div>
    </footer>
  );
};
