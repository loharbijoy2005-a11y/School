import React, { useState } from 'react';
import { History, Award, Quote, BookOpen } from 'lucide-react';

export const AboutDesk: React.FC = () => {
  const [showHistoryModal, setShowHistoryModal] = useState(false);

  return (
    <section id="desk" className="py-20 bg-slate-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-12 gap-10 items-center">
        
        {/* Left Card: School Heritage Since 1945 */}
        <div className="lg:col-span-5 bg-slate-950 p-8 rounded-2xl border border-slate-800 space-y-4 shadow-xl">
          <div className="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center mb-2">
            <History className="w-6 h-6" />
          </div>
          <h3 className="font-serif font-extrabold text-2xl text-white">
            School Heritage Since 1945
          </h3>
          <p className="text-slate-300 text-sm leading-relaxed">
            Established in 1945 in Mahishadal, Purba Medinipur, Mahishadal Gayeswari Girls' High School (H.S.) has been a pioneer in female education and social upliftment across West Bengal for over eight decades.
          </p>
          <div className="pt-2">
            <button
              onClick={() => setShowHistoryModal(true)}
              className="bg-amber-500 hover:bg-amber-600 text-white font-bold px-5 py-2.5 rounded-full text-xs transition-colors flex items-center gap-2"
            >
              <BookOpen className="w-4 h-4" />
              <span>Full School History (1945 - Present)</span>
            </button>
          </div>
        </div>

        {/* Right Card: HM Welcome Message */}
        <div className="lg:col-span-7 bg-slate-950 p-8 rounded-2xl border border-slate-800 space-y-4 shadow-xl relative">
          <Quote className="w-12 h-12 text-rose-500/20 absolute right-6 top-6" />
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <div className="w-36 h-36 rounded-full p-1 bg-gradient-to-r from-rose-500 to-amber-500 shrink-0 shadow-lg">
              <img
                src="assets/headmistress.jpg"
                alt="Headmistress Smt. Kalyani Maity"
                className="w-full h-full object-cover rounded-full border-2 border-slate-950"
              />
            </div>
            <div>
              <h3 className="font-serif font-extrabold text-2xl text-white">Smt. Kalyani Maity</h3>
              <p className="text-amber-400 font-bold text-xs uppercase mb-3">Headmistress, M.A., B.Ed.</p>
              <p className="text-slate-300 text-sm leading-relaxed italic">
                "Welcome to Mahishadal Gayeswari Girls' High School (H.S.). Since 1945, our school has been dedicated to moulding young girls into confident, moral, and educated citizens."
              </p>
              <p className="text-slate-400 text-xs mt-3 leading-relaxed">
                Through state welfare programs like Kanyashree, Sabooj Sathi, ICT Computer lab, and dedicated faculty, we ensure a safe, supportive, and vibrant learning atmosphere for every girl child.
              </p>
            </div>
          </div>
        </div>

      </div>

      {/* History Modal */}
      {showHistoryModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-white text-slate-900 rounded-2xl max-w-2xl w-full p-6 md:p-8 shadow-2xl relative">
            <h3 className="font-serif font-extrabold text-2xl mb-4 text-slate-900">
              Complete Heritage & Foundation (1945 - Present)
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed mb-4">
              Mahishadal Gayeswari Girls' High School (H.S.) was founded in 1945 during the pre-independence era by visionary educationists of Mahishadal Raj estate to promote girl-child education. Over the last 80+ years, the institution has produced thousands of doctors, engineers, teachers, civil servants, and social leaders across India.
            </p>
            <p className="text-sm text-slate-600 leading-relaxed mb-6">
              Affiliated to WBBSE for Secondary education (Madhyamik Index E1-042) and WBCHSE for Higher Secondary streams (HS Code 105084), the school is fully government-sponsored under the West Bengal School Education Department.
            </p>
            <button
              onClick={() => setShowHistoryModal(false)}
              className="bg-slate-900 text-white font-bold px-6 py-2 rounded-full text-xs"
            >
              Close History Window
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
