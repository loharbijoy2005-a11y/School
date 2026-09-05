import React, { useState } from 'react';
import { History, Quote, BookOpen, GraduationCap, UserCheck, ShieldCheck, Award, User, Mail, Phone, X, Briefcase, CheckCircle2, Sparkles } from 'lucide-react';
import { FacultyMember, StaffCategory } from '../types';

interface AboutDeskProps {
  facultyList: FacultyMember[];
}

export const AboutDesk: React.FC<AboutDeskProps> = ({ facultyList }) => {
  const [showHistoryModal, setShowHistoryModal] = useState(false);
  const [activeCategory, setActiveCategory] = useState<StaffCategory | 'all'>('all');
  const [activeDept, setActiveDept] = useState<string>('all');
  const [selectedStaff, setSelectedStaff] = useState<FacultyMember | null>(null);

  // Filter faculty by category and department
  const filteredFaculty = facultyList.filter((staff) => {
    const matchesCategory = activeCategory === 'all' || staff.category === activeCategory;
    const matchesDept = activeDept === 'all' || staff.department === activeDept;
    return matchesCategory && matchesDept;
  });

  // Find headmistress for featured card
  const headmistress = facultyList.find(f => f.designation.toLowerCase().includes('headmistress')) || facultyList[0];

  return (
    <section id="desk" className="py-20 bg-slate-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 space-y-16">
        
        {/* Top Section: Heritage + Headmistress Message */}
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          
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

          {/* Right Card: HM Welcome Message (Clickable to open HM details) */}
          <div 
            onClick={() => setSelectedStaff(headmistress)}
            className="lg:col-span-7 bg-slate-950 p-8 rounded-2xl border border-slate-800 space-y-4 shadow-xl relative cursor-pointer hover:border-amber-500/60 transition-all group"
          >
            <Quote className="w-12 h-12 text-rose-500/20 absolute right-6 top-6" />
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <div className="w-36 h-36 rounded-full p-1 bg-gradient-to-r from-rose-500 to-amber-500 shrink-0 shadow-lg group-hover:scale-105 transition-transform">
                <img
                  src={headmistress.imageUrl || "/assets/headmistress.jpg"}
                  alt={headmistress.name}
                  className="w-full h-full object-cover rounded-full border-2 border-slate-950"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
              </div>
              <div>
                <div className="inline-flex items-center gap-1 text-[10px] uppercase font-bold text-amber-400 bg-amber-500/10 px-2.5 py-0.5 rounded-full mb-1">
                  <Sparkles className="w-3 h-3" /> Click to view full details
                </div>
                <h3 className="font-serif font-extrabold text-2xl text-white group-hover:text-amber-400 transition-colors">
                  {headmistress.name}
                </h3>
                <p className="text-amber-400 font-bold text-xs uppercase mb-3">
                  {headmistress.designation}, {headmistress.qualification}
                </p>
                <p className="text-slate-300 text-sm leading-relaxed italic">
                  "{headmistress.bio || "Welcome to Mahishadal Gayeswari Girls' High School (H.S.). Since 1945, our school has been dedicated to moulding young girls into confident, moral, and educated citizens."}"
                </p>
                <p className="text-slate-400 text-xs mt-3 leading-relaxed">
                  Through state welfare programs like Kanyashree, Sabooj Sathi, ICT Computer lab, and dedicated faculty, we ensure a safe, supportive, and vibrant learning atmosphere for every girl child.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* BOTTOM SECTION: CATEGORIZED TEACHERS & STAFF DIRECTORY */}
        <div className="bg-slate-950 p-8 md:p-10 rounded-3xl border border-slate-800 shadow-2xl space-y-8">
          
          <div className="flex flex-col gap-6 border-b border-slate-800 pb-6">
            <div className="flex flex-wrap justify-between items-center gap-4">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/20 border border-rose-500/40 text-rose-300 font-bold text-xs uppercase mb-2">
                  <GraduationCap className="w-4 h-4 text-rose-400" />
                  <span>Institutional Personnel & Staff Roster</span>
                </div>
                <h3 className="font-serif font-extrabold text-2xl md:text-3xl text-white">
                  School Teachers & Staff Directory (Sir & Madam Roster)
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Click on any staff or teacher card to view their complete profile, qualification, subject specialization, and welcome message.
                </p>
              </div>

              {/* Main Category Tabs */}
              <div className="flex flex-wrap gap-2 bg-slate-900 p-1.5 rounded-2xl border border-slate-800">
                {[
                  { id: 'all', label: 'All Staff', count: facultyList.length },
                  { id: 'teaching', label: 'Teaching Faculty (Sirs & Madams)', count: facultyList.filter(f => f.category === 'teaching').length },
                  { id: 'non_teaching', label: 'Non-Teaching (Office / Library)', count: facultyList.filter(f => f.category === 'non_teaching').length },
                  { id: 'support_group_d', label: 'Support & Group-D Staff', count: facultyList.filter(f => f.category === 'support_group_d').length },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => {
                      setActiveCategory(tab.id as StaffCategory | 'all');
                      setActiveDept('all');
                    }}
                    className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                      activeCategory === tab.id
                        ? 'bg-gradient-to-r from-rose-600 to-amber-600 text-white shadow-lg'
                        : 'text-slate-400 hover:text-white hover:bg-slate-800'
                    }`}
                  >
                    {tab.label} ({tab.count})
                  </button>
                ))}
              </div>
            </div>

            {/* Sub-Department Filter Pills */}
            <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-900">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mr-2">
                Department Filter:
              </span>
              {['all', 'Languages', 'Science & Math', 'Social Sciences', 'IT & Sports', 'Office & Library', 'Support & Security'].map((dept) => (
                <button
                  key={dept}
                  onClick={() => setActiveDept(dept)}
                  className={`px-3 py-1 rounded-full text-[11px] font-bold transition-all ${
                    activeDept === dept
                      ? 'bg-amber-500 text-slate-950 font-extrabold shadow-sm'
                      : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                  }`}
                >
                  {dept === 'all' ? 'All Departments' : dept}
                </button>
              ))}
            </div>
          </div>

          {/* Grid of Faculty Cards */}
          {filteredFaculty.length === 0 ? (
            <div className="text-center py-12 bg-slate-900/50 rounded-2xl border border-dashed border-slate-800">
              <User className="w-10 h-10 text-slate-600 mx-auto mb-2" />
              <p className="text-sm font-bold text-slate-400">No staff members found in this category.</p>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {filteredFaculty.map((staff) => (
                <div
                  key={staff.id}
                  onClick={() => setSelectedStaff(staff)}
                  className="bg-slate-900 p-5 rounded-2xl border border-slate-800 hover:border-rose-500/60 shadow-md hover:shadow-xl transition-all cursor-pointer group flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className={`text-[10px] font-extrabold px-2.5 py-0.5 rounded-full uppercase ${
                        staff.gender === 'Sir' 
                          ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30' 
                          : 'bg-rose-500/20 text-rose-300 border border-rose-500/30'
                      }`}>
                        {staff.gender}
                      </span>
                      <span className="text-[10px] font-bold text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded">
                        {staff.subject}
                      </span>
                    </div>

                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 rounded-full overflow-hidden bg-slate-800 border border-slate-700 shrink-0 flex items-center justify-center text-amber-400 font-bold text-lg">
                        {staff.imageUrl ? (
                          <img src={staff.imageUrl} alt={staff.name} className="w-full h-full object-cover" />
                        ) : (
                          staff.name.charAt(0)
                        )}
                      </div>
                      <div>
                        <h4 className="font-extrabold text-sm text-white group-hover:text-rose-400 transition-colors leading-tight">
                          {staff.name}
                        </h4>
                        <p className="text-[11px] font-bold text-amber-400 mt-0.5">{staff.designation}</p>
                      </div>
                    </div>

                    <p className="text-[11px] text-slate-400 italic line-clamp-1">{staff.qualification}</p>
                  </div>

                  <div className="pt-3 mt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-500">
                    <span className="flex items-center gap-1 text-emerald-400 font-medium">
                      <UserCheck className="w-3 h-3" />
                      <span>{staff.category === 'teaching' ? 'Faculty' : staff.category === 'non_teaching' ? 'Office' : 'Support'}</span>
                    </span>
                    <span className="font-bold text-slate-400 group-hover:text-amber-400 transition-colors">
                      Click for details &rarr;
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>

      </div>

      {/* STAFF DETAIL MODAL POPUP */}
      {selectedStaff && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-slate-900 text-white rounded-3xl max-w-lg w-full p-6 md:p-8 shadow-2xl border border-slate-700 relative animate-in fade-in zoom-in duration-200 space-y-6">
            
            <button
              onClick={() => setSelectedStaff(null)}
              className="absolute right-5 top-5 w-9 h-9 rounded-full bg-slate-800 hover:bg-rose-600 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5">
              <div className="w-24 h-24 rounded-full p-1 bg-gradient-to-r from-rose-500 to-amber-500 shrink-0 shadow-lg">
                <div className="w-full h-full rounded-full overflow-hidden bg-slate-950 flex items-center justify-center text-amber-400 font-extrabold text-2xl border border-slate-800">
                  {selectedStaff.imageUrl ? (
                    <img src={selectedStaff.imageUrl} alt={selectedStaff.name} className="w-full h-full object-cover" />
                  ) : (
                    selectedStaff.name.charAt(0)
                  )}
                </div>
              </div>

              <div className="text-center sm:text-left space-y-1">
                <div className="flex flex-wrap justify-center sm:justify-start gap-1.5 mb-1">
                  <span className={`text-[10px] font-extrabold px-2.5 py-0.5 rounded-full uppercase ${
                    selectedStaff.gender === 'Sir' 
                      ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30' 
                      : 'bg-rose-500/20 text-rose-300 border border-rose-500/30'
                  }`}>
                    {selectedStaff.gender}
                  </span>
                  <span className="text-[10px] font-extrabold px-2.5 py-0.5 rounded-full uppercase bg-amber-500/20 text-amber-300 border border-amber-500/30">
                    {selectedStaff.department}
                  </span>
                </div>

                <h3 className="font-serif font-extrabold text-xl md:text-2xl text-white">
                  {selectedStaff.name}
                </h3>
                <p className="text-amber-400 font-bold text-xs uppercase">
                  {selectedStaff.designation}
                </p>
                <p className="text-xs text-slate-300 font-medium">
                  Academic Qualification: {selectedStaff.qualification}
                </p>
              </div>
            </div>

            <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-3">
              <div className="flex items-center justify-between text-xs border-b border-slate-800 pb-2">
                <span className="text-slate-400 font-bold uppercase">Subject / Scope of Work:</span>
                <span className="text-rose-400 font-extrabold">{selectedStaff.subject}</span>
              </div>
              <div className="flex items-center justify-between text-xs border-b border-slate-800 pb-2">
                <span className="text-slate-400 font-bold uppercase">Cadre / Category:</span>
                <span className="text-emerald-400 font-bold capitalize">
                  {selectedStaff.category === 'teaching' ? 'Teaching Faculty' : selectedStaff.category === 'non_teaching' ? 'Non-Teaching Office Staff' : 'Support & Group-D Staff'}
                </span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-400 font-bold uppercase">Institutional Status:</span>
                <span className="text-amber-300 font-bold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  Official Appointed Staff
                </span>
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                <Quote className="w-3.5 h-3.5 text-rose-500" />
                Welcome Message & Staff Profile
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed italic bg-slate-950/60 p-4 rounded-xl border border-slate-800">
                "{selectedStaff.bio || `Welcome to Mahishadal Gayeswari Girls' High School (H.S.). As part of ${selectedStaff.department}, I am dedicated to serving our students and institution with excellence, guidance, and commitment since 1945.`}"
              </p>
            </div>

            {(selectedStaff.email || selectedStaff.phone) && (
              <div className="pt-2 flex flex-wrap gap-4 text-xs text-slate-400 border-t border-slate-800">
                {selectedStaff.email && (
                  <span className="flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-amber-400" />
                    <span>{selectedStaff.email}</span>
                  </span>
                )}
                {selectedStaff.phone && (
                  <span className="flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{selectedStaff.phone}</span>
                  </span>
                )}
              </div>
            )}

            <button
              onClick={() => setSelectedStaff(null)}
              className="w-full bg-rose-600 hover:bg-rose-500 text-white font-bold py-2.5 rounded-xl text-xs transition-colors"
            >
              Close Profile Window
            </button>

          </div>
        </div>
      )}

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
