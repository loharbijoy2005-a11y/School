import React, { useState } from 'react';
import { History, Quote, BookOpen, GraduationCap, UserCheck, ShieldCheck, Award, User, Mail, Phone, X, Briefcase, CheckCircle2, Sparkles, Building2, BookMarked, HeartHandshake } from 'lucide-react';
import { FacultyMember, StaffCategory } from '../types';

interface AboutDeskProps {
  facultyList: FacultyMember[];
}

type AdminDeskTab = 'hm' | 'smc' | 'office' | 'library' | 'support';

export const AboutDesk: React.FC<AboutDeskProps> = ({ facultyList }) => {
  const [activeAdminTab, setActiveAdminTab] = useState<AdminDeskTab>('hm');
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

  const headmistress = facultyList.find(f => f.designation.toLowerCase().includes('headmistress')) || facultyList[0];

  return (
    <section id="desk" className="py-20 bg-slate-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 space-y-16">
        
        {/* SECTION 4: SCHOOL ADMINISTRATION SPLIT-VIEW */}
        <div className="space-y-6">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-widest bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/30">
              Institutional Governance
            </span>
            <h2 className="font-serif font-extrabold text-3xl md:text-4xl text-white">
              School Administration & Executive Desk
            </h2>
            <p className="text-xs text-slate-400">
              Meet the leadership team and administrative departments guiding Mahishadal Gayeswari Girls' High School (H.S.).
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Navigation Panel (Split-View Interactive Tabs) */}
            <div className="lg:col-span-4 bg-slate-950 p-4 rounded-3xl border border-slate-800 space-y-2 shadow-xl">
              {[
                { id: 'hm', label: "Headmistress's Desk", icon: ShieldCheck, sub: 'Principal Executive & Academic Head' },
                { id: 'smc', label: 'School Managing Committee (SMC)', icon: Building2, sub: 'Government Nominated Governing Body' },
                { id: 'office', label: 'Office Administration', icon: Briefcase, sub: 'Banglar Shiksha & Accounts Wing' },
                { id: 'library', label: 'School Library Staff', icon: BookMarked, sub: '12,000+ Books & Digital Archives' },
                { id: 'support', label: 'Support & Campus Staff', icon: HeartHandshake, sub: 'Security, Facilities & Maintenance' },
              ].map((tab) => {
                const IconComponent = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveAdminTab(tab.id as AdminDeskTab)}
                    className={`w-full p-4 rounded-2xl text-left transition-all flex items-start gap-3.5 ${
                      activeAdminTab === tab.id
                        ? 'bg-gradient-to-r from-rose-900/90 to-amber-900/90 text-white border border-amber-500/50 shadow-lg'
                        : 'bg-slate-900/60 text-slate-400 hover:bg-slate-900 hover:text-white border border-slate-800'
                    }`}
                  >
                    <IconComponent className={`w-5 h-5 mt-0.5 shrink-0 ${activeAdminTab === tab.id ? 'text-amber-400' : 'text-slate-500'}`} />
                    <div>
                      <h4 className="font-extrabold text-sm text-white leading-snug">{tab.label}</h4>
                      <p className="text-[11px] text-slate-400 mt-0.5">{tab.sub}</p>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Right Active Card Display */}
            <div className="lg:col-span-8 bg-slate-950 p-8 rounded-3xl border border-slate-800 shadow-2xl relative space-y-6">
              
              {activeAdminTab === 'hm' && (
                <div className="space-y-6">
                  <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                    <div className="w-36 h-36 rounded-full p-1 bg-gradient-to-r from-rose-500 to-amber-500 shrink-0 shadow-xl">
                      <img
                        src={headmistress.imageUrl || "/assets/headmistress.jpg"}
                        alt={headmistress.name}
                        className="w-full h-full object-cover rounded-full border-2 border-slate-950"
                      />
                    </div>
                    <div className="space-y-2 text-center sm:text-left">
                      <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-bold text-xs border border-emerald-500/30">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>Verified Headmistress Desk</span>
                      </div>
                      <h3 className="font-serif font-extrabold text-2xl md:text-3xl text-white">{headmistress.name}</h3>
                      <p className="text-amber-400 font-bold text-xs uppercase">{headmistress.designation}, {headmistress.qualification}</p>
                      
                      {/* Core Values Pills */}
                      <div className="flex flex-wrap gap-2 pt-2 justify-center sm:justify-start">
                        {['Discipline', 'Digital Literacy', 'Girl Empowerment', 'Moral Ethics'].map((pill) => (
                          <span key={pill} className="bg-slate-900 text-slate-300 border border-slate-800 text-[10px] font-bold px-2.5 py-1 rounded-full">
                            ✨ {pill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3 bg-slate-900/80 p-5 rounded-2xl border border-slate-800">
                    <Quote className="w-8 h-8 text-rose-500/30 mb-1" />
                    <p className="text-slate-200 text-sm leading-relaxed italic">
                      "{headmistress.bio || "Welcome to Mahishadal Gayeswari Girls' High School (H.S.). Since 1945, our school has been dedicated to moulding young girls into confident, moral, and educated citizens."}"
                    </p>
                    <p className="text-xs text-slate-400 leading-relaxed pt-2 border-t border-slate-800/80">
                      Through government initiatives like Kanyashree Prakalpa, Sabooj Sathi, ICT Computer Laboratory, and dedicated Sirs and Madams, we nurture scientific curiosity, leadership, and integrity in every female student.
                    </p>
                  </div>
                </div>
              )}

              {activeAdminTab === 'smc' && (
                <div className="space-y-4">
                  <div className="border-b border-slate-800 pb-3">
                    <h3 className="font-serif font-extrabold text-xl text-white">School Managing Committee (SMC)</h3>
                    <p className="text-xs text-amber-400">Government Nominated Executive Body (WBBSE & WBCHSE Regulations)</p>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    The School Managing Committee oversees infrastructural expansion, civil tenders, mid-day meal operations, staff recruitment compliance, and student welfare activities.
                  </p>
                  <div className="grid sm:grid-cols-2 gap-3 text-xs">
                    <div className="bg-slate-900 p-4 rounded-xl border border-slate-800">
                      <p className="font-bold text-white">President, SMC</p>
                      <p className="text-slate-400 text-[11px]">Local Government Educationist Representative</p>
                    </div>
                    <div className="bg-slate-900 p-4 rounded-xl border border-slate-800">
                      <p className="font-bold text-white">Member Secretary</p>
                      <p className="text-slate-400 text-[11px]">Smt. Kalyani Maity (Headmistress)</p>
                    </div>
                  </div>
                </div>
              )}

              {activeAdminTab === 'office' && (
                <div className="space-y-4">
                  <div className="border-b border-slate-800 pb-3">
                    <h3 className="font-serif font-extrabold text-xl text-white">Office Administration & Accounts Wing</h3>
                    <p className="text-xs text-amber-400">Banglar Shiksha Nodal Desk & Clerical Services</p>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Responsible for student registration, Banglar Shiksha e-portal data entry, Kanyashree K1/K2 scholarship application processing, marksheets, and leaving certificate issuance.
                  </p>
                  <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 text-xs space-y-2">
                    <p className="font-bold text-white">Office Helpdesk Timings:</p>
                    <p className="text-slate-400">Monday - Friday: 10:30 AM to 4:30 PM | Saturday: 10:30 AM to 2:00 PM</p>
                    <p className="text-amber-400 font-bold">Contact Email: mgghschool1945@gmail.com</p>
                  </div>
                </div>
              )}

              {activeAdminTab === 'library' && (
                <div className="space-y-4">
                  <div className="border-b border-slate-800 pb-3">
                    <h3 className="font-serif font-extrabold text-xl text-white">Central Library & Learning Resource Center</h3>
                    <p className="text-xs text-amber-400">12,000+ Books, Competitive Guides & Reading Room</p>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Managed by full-time librarian Smt. Sumitra Sasmal (M.Lib.Sc.). Provides lending services, career guidance journals, reference encyclopedias, and quiet study space for students.
                  </p>
                </div>
              )}

              {activeAdminTab === 'support' && (
                <div className="space-y-4">
                  <div className="border-b border-slate-800 pb-3">
                    <h3 className="font-serif font-extrabold text-xl text-white">Support Staff & Campus Security</h3>
                    <p className="text-xs text-amber-400">Laboratory Attendants, Night Guards & Maintenance Team</p>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Ensuring 24/7 campus security, CCTV surveillance, science laboratory safety, mid-day meal hygiene, and clean eco-friendly environment for our female students.
                  </p>
                </div>
              )}

            </div>

          </div>
        </div>

        {/* SECTION 5: GUIDING SPIRIT & INSTITUTIONAL PHILOSOPHY */}
        <div className="bg-slate-950 p-8 md:p-10 rounded-3xl border border-slate-800 shadow-2xl space-y-8">
          
          {/* Motto Badge Strip */}
          <div className="text-center space-y-3">
            <span className="text-xs font-bold text-rose-400 uppercase tracking-widest">
              Institutional Core Values
            </span>
            <h3 className="font-serif font-extrabold text-2xl md:text-3xl text-white">
              "Our Motto" & Guiding Pillars
            </h3>
            
            <div className="flex flex-wrap justify-center gap-3 pt-2">
              {['Sincerity', 'Honesty', 'Punctuality', 'Accountability', 'Integrity', 'Cleanliness'].map((motto) => (
                <span
                  key={motto}
                  className="bg-slate-900 text-amber-300 border border-amber-500/30 px-4 py-1.5 rounded-full font-extrabold text-xs shadow-md uppercase tracking-wider"
                >
                  ⭐ {motto}
                </span>
              ))}
            </div>
          </div>

          {/* CATEGORIZED TEACHERS & STAFF DIRECTORY (SIRS & MADAMS ROSTER) */}
          <div className="pt-8 border-t border-slate-800 space-y-6">
            <div className="flex flex-col gap-6">
              <div className="flex flex-wrap justify-between items-center gap-4">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/20 border border-rose-500/40 text-rose-300 font-bold text-xs uppercase mb-2">
                    <GraduationCap className="w-4 h-4 text-rose-400" />
                    <span>Faculty & Personnel Roster</span>
                  </div>
                  <h3 className="font-serif font-extrabold text-2xl text-white">
                    School Teachers & Staff Directory (Sir & Madam Roster)
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Click on any card to view detailed bio, academic qualifications, subject specializations, and welcome messages.
                  </p>
                </div>

                {/* Main Category Tabs */}
                <div className="flex flex-wrap gap-2 bg-slate-900 p-1.5 rounded-2xl border border-slate-800">
                  {[
                    { id: 'all', label: 'All Staff', count: facultyList.length },
                    { id: 'teaching', label: 'Teaching Faculty (Sirs & Madams)', count: facultyList.filter(f => f.category === 'teaching').length },
                    { id: 'non_teaching', label: 'Non-Teaching Office', count: facultyList.filter(f => f.category === 'non_teaching').length },
                    { id: 'support_group_d', label: 'Support / Group D', count: facultyList.filter(f => f.category === 'support_group_d').length },
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => {
                        setActiveCategory(tab.id as StaffCategory | 'all');
                        setActiveDept('all');
                      }}
                      className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
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
            </div>

            {/* Grid of Faculty Cards */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {filteredFaculty.map((staff) => (
                <div
                  key={staff.id}
                  onClick={() => setSelectedStaff(staff)}
                  className="bg-slate-900 p-5 rounded-2xl border border-slate-800 hover:border-amber-500/60 shadow-md hover:shadow-xl transition-all cursor-pointer group flex flex-col justify-between"
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
                        <h4 className="font-extrabold text-sm text-white group-hover:text-amber-400 transition-colors leading-tight">
                          {staff.name}
                        </h4>
                        <p className="text-[11px] font-bold text-rose-400 mt-0.5">{staff.designation}</p>
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
                      Click details &rarr;
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>

      {/* STAFF DETAIL MODAL POPUP */}
      {selectedStaff && (
        <div className="modal-backdrop-luxury">
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

            <button
              onClick={() => setSelectedStaff(null)}
              className="w-full bg-rose-600 hover:bg-rose-500 text-white font-bold py-2.5 rounded-xl text-xs transition-colors"
            >
              Close Profile Window
            </button>

          </div>
        </div>
      )}
    </section>
  );
};
