import React from 'react';
import { MapPin, Phone, Mail, ExternalLink } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-10 mb-12">
        
        {/* Brand Column */}
        <div className="space-y-4">
          <h3 className="font-serif font-bold text-white text-lg leading-tight">
            Mahishadal Gayeswari Girls' High School (H.S.)
          </h3>
          <p className="text-sm leading-relaxed">
            Government Sponsored Girls High School. Affiliated to West Bengal Board of Secondary Education (WBBSE) & West Bengal Council of Higher Secondary Education (WBCHSE).
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-bold text-white text-sm uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
            Quick Links
          </h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#home" className="hover:text-amber-400 transition-colors">Home Page</a></li>
            <li><a href="#desk" className="hover:text-amber-400 transition-colors">HM Message</a></li>
            <li><a href="#notices" className="hover:text-amber-400 transition-colors">Notice Board</a></li>
            <li><a href="#welfare" className="hover:text-amber-400 transition-colors">Govt Welfare Schemes</a></li>
            <li><a href="#facilities" className="hover:text-amber-400 transition-colors">Campus Facilities</a></li>
          </ul>
        </div>

        {/* Govt Portals */}
        <div>
          <h4 className="font-bold text-white text-sm uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
            Govt. Portals
          </h4>
          <ul className="space-y-2 text-sm">
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
          <h4 className="font-bold text-white text-sm uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
            School Address
          </h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-1" />
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

      <div className="max-w-7xl mx-auto px-4 pt-8 border-t border-slate-800 flex flex-wrap justify-between items-center text-xs text-slate-500 gap-4">
        <p>&copy; 2026 Mahishadal Gayeswari Girls' High School (H.S.). All Rights Reserved.</p>
        <p>Banglar Shiksha School ID: WB-1945-MGGHS | WBBSE: E1-042 | WBCHSE: 105084</p>
      </div>
    </footer>
  );
};
