import React, { useState } from 'react';
import { History, Quote, BookOpen, GraduationCap, UserCheck, ShieldCheck, Award } from 'lucide-react';

interface FacultyMember {
  name: string;
  designation: string;
  qualification: string;
  subject: string;
  department: 'Languages' | 'Science & Math' | 'Social Sciences' | 'IT & Sports' | 'Office & Library';
  gender: 'Sir' | 'Madam';
}

export const AboutDesk: React.FC = () => {
  const [showHistoryModal, setShowHistoryModal] = useState(false);
  const [activeDept, setActiveDept] = useState<string>('all');

  const facultyList: FacultyMember[] = [
    { name: 'Smt. Kalyani Maity', designation: 'Headmistress', qualification: 'M.A. (Bengali), B.Ed.', subject: 'Bengali Literature', department: 'Languages', gender: 'Madam' },
    { name: 'Sri Subrata Kumar Sheet', designation: 'Assistant Headmaster', qualification: 'M.A. (Bengali), B.Ed.', subject: 'Bengali', department: 'Languages', gender: 'Sir' },
    { name: 'Smt. Anindita Chakraborty', designation: 'Assistant Teacher', qualification: 'M.A. (English), B.Ed.', subject: 'English', department: 'Languages', gender: 'Madam' },
    { name: 'Sri Debabrata Mondal', designation: 'Assistant Teacher', qualification: 'M.A. (English), B.Ed.', subject: 'English Language', department: 'Languages', gender: 'Sir' },
    { name: 'Smt. Susmita Das', designation: 'Assistant Teacher', qualification: 'M.A. (Sanskrit), B.Ed.', subject: 'Sanskrit', department: 'Languages', gender: 'Madam' },
    
    { name: 'Sri Swapan Kumar Samanta', designation: 'Senior Faculty', qualification: 'M.Sc. (Physics), B.Ed.', subject: 'Physical Science & Physics', department: 'Science & Math', gender: 'Sir' },
    { name: 'Smt. Priyanka Bhowmik', designation: 'Assistant Teacher', qualification: 'M.Sc. (Chemistry), B.Ed.', subject: 'Chemistry', department: 'Science & Math', gender: 'Madam' },
    { name: 'Sri Soumen Maiti', designation: 'Assistant Teacher', qualification: 'M.Sc. (Mathematics), B.Ed.', subject: 'Mathematics', department: 'Science & Math', gender: 'Sir' },
    { name: 'Smt. Tanushree Jana', designation: 'Assistant Teacher', qualification: 'M.Sc. (Zoology), B.Ed.', subject: 'Life Science & Biology', department: 'Science & Math', gender: 'Madam' },

    { name: 'Smt. Keya Das', designation: 'Assistant Teacher', qualification: 'M.A. (History), B.Ed.', subject: 'History', department: 'Social Sciences', gender: 'Madam' },
    { name: 'Sri Amitava Hazra', designation: 'Assistant Teacher', qualification: 'M.Sc. (Geography), B.Ed.', subject: 'Geography', department: 'Social Sciences', gender: 'Sir' },
    { name: 'Smt. Ratna Banerjee', designation: 'Assistant Teacher', qualification: 'M.A. (Philosophy), B.Ed.', subject: 'Philosophy', department: 'Social Sciences', gender: 'Madam' },
    { name: 'Smt. Madhumita Sen', designation: 'Assistant Teacher', qualification: 'M.Sc. (Nutrition), B.Ed.', subject: 'Nutrition', department: 'Social Sciences', gender: 'Madam' },

    { name: 'Sri Bikash Chandra Ray', designation: 'ICT Coordinator', qualification: 'B.Tech (CSE), MCA', subject: 'Computer Application & IT', department: 'IT & Sports', gender: 'Sir' },
    { name: 'Smt. Sampa Ghorai', designation: 'Physical Education Coach', qualification: 'M.P.Ed.', subject: 'Sports & Karate Self-Defense', department: 'IT & Sports', gender: 'Madam' },

    { name: 'Sri Rabindra Nath Maity', designation: 'Head Clerk', qualification: 'B.Com', subject: 'Banglar Shiksha Nodal Officer', department: 'Office & Library', gender: 'Sir' },
    { name: 'Smt. Sumitra Sasmal', designation: 'School Librarian', qualification: 'M.Lib.Sc.', subject: 'Central Library Management', department: 'Office & Library', gender: 'Madam' },
  ];

  const filteredFaculty = activeDept === 'all' 
    ? facultyList 
    : facultyList.filter(f => f.department === activeDept);

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

          {/* Right Card: HM Welcome Message */}
          <div className="lg:col-span-7 bg-slate-950 p-8 rounded-2xl border border-slate-800 space-y-4 shadow-xl relative">
            <Quote className="w-12 h-12 text-rose-500/20 absolute right-6 top-6" />
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <div className="w-36 h-36 rounded-full p-1 bg-gradient-to-r from-rose-500 to-amber-500 shrink-0 shadow-lg">
                <img
                  src="/assets/headmistress.jpg"
                  alt="Headmistress Smt. Kalyani Maity"
                  className="w-full h-full object-cover rounded-full border-2 border-slate-950"
                />
              </div>
              <div>
                <h3 className="font-serif font-extrabold text-2xl text-white">Smt. Kalyani Maity</h3>
                <p className="text-amber-400 font-bold text-xs uppercase mb-3">Headmistress, M.A. (Bengali), B.Ed.</p>
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

        {/* BOTTOM SECTION: COMPLETE FACULTY & TEACHERS DIRECTORY (Sir & Madam Roster) */}
        <div className="bg-slate-950 p-8 md:p-10 rounded-3xl border border-slate-800 shadow-2xl space-y-8">
          
          <div className="flex flex-wrap justify-between items-center gap-4 border-b border-slate-800 pb-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/20 border border-rose-500/40 text-rose-300 font-bold text-xs uppercase mb-2">
                <GraduationCap className="w-4 h-4 text-rose-400" />
                <span>Teaching Faculty & Administration</span>
              </div>
              <h3 className="font-serif font-extrabold text-2xl md:text-3xl text-white">
                School Teachers & Staff Directory (Sir & Madam Roster)
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Meet our highly qualified and dedicated teaching faculty across all subjects from Class V to Class XII.
              </p>
            </div>

            {/* Department Filter Pills */}
            <div className="flex flex-wrap gap-2">
              {['all', 'Languages', 'Science & Math', 'Social Sciences', 'IT & Sports', 'Office & Library'].map((dept) => (
                <button
                  key={dept}
                  onClick={() => setActiveDept(dept)}
                  className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all ${
                    activeDept === dept
                      ? 'bg-rose-600 text-white shadow-md'
                      : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                  }`}
                >
                  {dept === 'all' ? 'All Staff (17)' : dept}
                </button>
              ))}
            </div>
          </div>

          {/* Grid of Faculty Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredFaculty.map((staff, idx) => (
              <div
                key={idx}
                className="bg-slate-900 p-5 rounded-2xl border border-slate-800 hover:border-rose-500/50 shadow-md transition-all group flex flex-col justify-between"
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

                  <h4 className="font-extrabold text-base text-white group-hover:text-rose-400 transition-colors">
                    {staff.name}
                  </h4>
                  <p className="text-xs font-bold text-slate-300 mt-0.5">{staff.designation}</p>
                  <p className="text-[11px] text-slate-400 mt-1 italic">{staff.qualification}</p>
                </div>

                <div className="pt-3 mt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-500">
                  <span className="flex items-center gap-1">
                    <UserCheck className="w-3 h-3 text-emerald-400" />
                    <span>Active Faculty</span>
                  </span>
                  <span className="font-bold text-slate-400">{staff.department}</span>
                </div>
              </div>
            ))}
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
