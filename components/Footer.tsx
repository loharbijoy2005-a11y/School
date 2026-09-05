import React from 'react';
import { MapPin, Phone, Mail, ExternalLink, ShieldCheck, Lock, Award, Heart } from 'lucide-react';

interface FooterProps {
  onOpenAdminLoginModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenAdminLoginModal }) => {
  return (
    <footer className="bg-[#FAF7F2] text-slate-700 py-16 border-t border-[#E8DFD0] font-sans">
      <div className="max-w-7xl mx-auto px-4 space-y-12">
        
        {/* Main Footer Links Matrix */}
        <div className="grid md:grid-cols-4 gap-10">
          
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img src="/assets/school_logo.jpg" alt="MGGHS Logo" className="w-10 h-10 rounded-full border border-[#B45309] p-0.5 bg-white shadow-xs" />
              <h3 className="font-serif font-extrabold text-[#1E293B] text-base leading-tight">
                Mahishadal Gayeswari Girls' High School (H.S.)
              </h3>
            </div>
            <p className="text-xs leading-relaxed text-slate-600">
              Pioneer government-sponsored girls' high school in Purba Medinipur, West Bengal since 1945. Affiliated to WBBSE & WBCHSE.
            </p>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="font-bold text-[#1E293B] text-xs uppercase tracking-wider mb-4 border-b border-[#E8DFD0] pb-2">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs font-medium">
              <li><a href="#home" className="hover:text-[#9D174D] transition-colors">Home Page</a></li>
              <li><a href="#desk" className="hover:text-[#9D174D] transition-colors">Administration & HM Desk</a></li>
              <li><a href="#academics" className="hover:text-[#9D174D] transition-colors">WBBSE & WBCHSE Streams</a></li>
              <li><a href="#notices" className="hover:text-[#9D174D] transition-colors">Notice Board Hub</a></li>
              <li><a href="#welfare" className="hover:text-[#9D174D] transition-colors">Govt Welfare Schemes</a></li>
            </ul>
          </div>

          {/* State Govt & Board Portals */}
          <div>
            <h4 className="font-bold text-[#1E293B] text-xs uppercase tracking-wider mb-4 border-b border-[#E8DFD0] pb-2">
              State Board Portals
            </h4>
            <ul className="space-y-2 text-xs font-medium">
              <li>
                <a href="https://banglarshiksha.gov.in" target="_blank" rel="noreferrer" className="hover:text-[#9D174D] transition-colors flex items-center gap-1.5">
                  <span>Banglar Shiksha Portal</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
              </li>
              <li>
                <a href="https://wbbse.wb.gov.in" target="_blank" rel="noreferrer" className="hover:text-[#9D174D] transition-colors flex items-center gap-1.5">
                  <span>WBBSE Official (Madhyamik)</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
              </li>
              <li>
                <a href="https://wbchse.wb.gov.in" target="_blank" rel="noreferrer" className="hover:text-[#9D174D] transition-colors flex items-center gap-1.5">
                  <span>WBCHSE Official (H.S.)</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
              </li>
              <li>
                <a href="https://wbkanyashree.gov.in" target="_blank" rel="noreferrer" className="hover:text-[#9D174D] transition-colors flex items-center gap-1.5">
                  <span>Kanyashree Prakalpa Portal</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-[#1E293B] text-xs uppercase tracking-wider mb-4 border-b border-[#E8DFD0] pb-2">
              School Campus Address
            </h4>
            <ul className="space-y-3 text-xs">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#B45309] shrink-0 mt-0.5" />
                <span>Garkamalpur / Rajbari Road, Mahishadal,<br />Purba Medinipur, West Bengal - 721628</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#B45309] shrink-0" />
                <span>+91 3228 240211</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#B45309] shrink-0" />
                <span>mgghschool1945@gmail.com</span>
              </li>
            </ul>
          </div>

        </div>

        {/* SECTION 14 PROMINENT DUAL FOOTER LOGIN BUTTONS (LIGHT THEME) */}
        <div className="bg-white p-6 rounded-2xl border border-[#E8DFD0] flex flex-wrap justify-between items-center gap-4 shadow-xs">
          <div>
            <h4 className="text-[#1E293B] font-bold text-sm flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#9D174D]" />
              Authenticated Institutional Control Console
            </h4>
            <p className="text-xs text-slate-600">Headmistress, SMC Governing Body, & Clerical Office Staff Login.</p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onOpenAdminLoginModal}
              className="bg-[#9D174D] hover:bg-[#881337] text-white font-extrabold px-5 py-2.5 rounded-xl text-xs flex items-center gap-2 shadow-md transition-all"
            >
              <ShieldCheck className="w-4 h-4" />
              <span>ADMIN LOG IN</span>
            </button>

            <button
              onClick={onOpenAdminLoginModal}
              className="bg-[#B45309] hover:bg-[#92400E] text-white font-extrabold px-5 py-2.5 rounded-xl text-xs flex items-center gap-2 transition-all shadow-md"
            >
              <Lock className="w-4 h-4" />
              <span>OFFICE LOG IN</span>
            </button>
          </div>
        </div>

        <div className="pt-6 border-t border-[#E8DFD0] flex flex-wrap justify-between items-center text-xs text-slate-500 gap-4">
          <p>&copy; 2026 Mahishadal Gayeswari Girls' High School (H.S.). All Rights Reserved.</p>
          <p>Banglar Shiksha ID: WB-1945-MGGHS | UDISE: 19190806002 | WBBSE: E1-042 | WBCHSE: 105084</p>
        </div>

      </div>
    </footer>
  );
};
