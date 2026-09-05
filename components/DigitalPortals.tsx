import React, { useState } from 'react';
import { Laptop, UserCheck, AlertTriangle, MessageSquare, Users, Star, BookOpen, Compass, X, ExternalLink, Send, CheckCircle2, ShieldCheck, Heart } from 'lucide-react';
import ScrollRevealCard from './ScrollRevealCard';

interface PortalItem {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  ringBg: string;
  ringGlow: string;
  bottomBar: string;
  cardBg: string;
  targetUrl?: string;
  modalType?: string;
}

export const DigitalPortals: React.FC = () => {
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const portals: PortalItem[] = [
    {
      id: 'lms',
      title: 'Learning Management',
      subtitle: 'Courses, notes & assignments online',
      icon: <Laptop className="w-6 h-6 text-white" />,
      ringBg: 'bg-[#0F2E23]',
      ringGlow: 'bg-emerald-100 border border-emerald-300',
      bottomBar: 'bg-[#0F2E23]',
      cardBg: 'from-emerald-50/80 via-[#FDFBF7] to-white',
      modalType: 'lms',
    },
    {
      id: 'student_profile',
      title: 'Student Profile',
      subtitle: 'View & manage your student profile',
      icon: <UserCheck className="w-6 h-6 text-white" />,
      ringBg: 'bg-[#1B4332]',
      ringGlow: 'bg-teal-100 border border-teal-300',
      bottomBar: 'bg-[#1B4332]',
      cardBg: 'from-teal-50/80 via-[#FDFBF7] to-white',
      modalType: 'student_profile',
    },
    {
      id: 'grievance',
      title: 'Grievance Redressal',
      subtitle: 'Report & resolve concerns confidentially',
      icon: <AlertTriangle className="w-6 h-6 text-white" />,
      ringBg: 'bg-[#881337]',
      ringGlow: 'bg-rose-100 border border-rose-300',
      bottomBar: 'bg-[#881337]',
      cardBg: 'from-rose-50/80 via-[#FDFBF7] to-white',
      modalType: 'grievance',
    },
    {
      id: 'feedback',
      title: 'Online Feedback',
      subtitle: 'Share your valuable feedback with us',
      icon: <MessageSquare className="w-6 h-6 text-white" />,
      ringBg: 'bg-indigo-900',
      ringGlow: 'bg-purple-100 border border-purple-300',
      bottomBar: 'bg-indigo-900',
      cardBg: 'from-purple-50/80 via-[#FDFBF7] to-white',
      modalType: 'feedback',
    },
    {
      id: 'alumni',
      title: 'Alumni Portal',
      subtitle: 'Reconnect through Praktani Sabha',
      icon: <Users className="w-6 h-6 text-white" />,
      ringBg: 'bg-amber-800',
      ringGlow: 'bg-amber-100 border border-amber-300',
      bottomBar: 'bg-amber-800',
      cardBg: 'from-amber-50/80 via-[#FDFBF7] to-white',
      modalType: 'alumni',
    },
    {
      id: 'appraisal',
      title: '360° Teacher Appraisal',
      subtitle: 'Faculty performance assessment',
      icon: <Star className="w-6 h-6 text-white" />,
      ringBg: 'bg-[#0F172A]',
      ringGlow: 'bg-blue-100 border border-blue-300',
      bottomBar: 'bg-[#0F172A]',
      cardBg: 'from-blue-50/80 via-[#FDFBF7] to-white',
      modalType: 'appraisal',
    },
    {
      id: 'boards',
      title: 'WBBSE & WBCHSE Portal',
      subtitle: 'Madhyamik & HS syllabus & outcome mapping',
      icon: <BookOpen className="w-6 h-6 text-white" />,
      ringBg: 'bg-[#C58B24]',
      ringGlow: 'bg-yellow-100 border border-yellow-300',
      bottomBar: 'bg-[#C58B24]',
      cardBg: 'from-yellow-50/80 via-[#FDFBF7] to-white',
      modalType: 'boards',
    },
    {
      id: 'virtual_tour',
      title: 'Virtual Campus Tour',
      subtitle: 'Explore our beautiful campus online',
      icon: <Compass className="w-6 h-6 text-white" />,
      ringBg: 'bg-slate-900',
      ringGlow: 'bg-slate-100 border border-slate-300',
      bottomBar: 'bg-slate-900',
      cardBg: 'from-slate-100/80 via-[#FDFBF7] to-white',
      modalType: 'virtual_tour',
    },
  ];

  const handlePortalClick = (portal: PortalItem) => {
    setFormSubmitted(false);
    if (portal.modalType) {
      setActiveModal(portal.modalType);
    } else if (portal.targetUrl) {
      window.open(portal.targetUrl, '_blank');
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setActiveModal(null);
    }, 2200);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-[#FDFBF7] via-[#FAF7F2] to-[#FAF7F0] text-slate-900 relative border-b border-[#DFD7C7]">
      <div className="max-w-7xl mx-auto px-4 space-y-12">
        
        {/* Section Header Matching Screenshot 1:1 */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="flex items-center justify-center gap-2">
            <span className="h-[1px] w-8 bg-amber-500"></span>
            <span className="text-xs font-black text-amber-700 uppercase tracking-widest">
              QUICK ACCESS
            </span>
            <span className="h-[1px] w-8 bg-amber-500"></span>
          </div>

          <h2 className="font-serif font-black text-3xl md:text-4xl lg:text-5xl text-[#0F2E23] tracking-tight">
            Digital Campus Portals
          </h2>

          <p className="text-xs md:text-sm text-slate-600 font-medium leading-relaxed max-w-2xl mx-auto">
            One-tap access to the systems students, staff and faculty use most — from classroom tools to grievance & feedback channels.
          </p>
        </div>

        {/* 8-Card Grid Matching 1:1 Screenshot Design */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {portals.map((portal, idx) => (
            <ScrollRevealCard key={portal.id} delay={(idx % 4) * 90}>
              <div
                onClick={() => handlePortalClick(portal)}
                className={`bg-gradient-to-b ${portal.cardBg} border border-[#DFD7C7] hover:border-amber-500 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col items-center text-center justify-between min-h-[260px] relative overflow-hidden cursor-pointer hover:-translate-y-1`}
              >
                {/* Central Dual-Ring Glow Circle Icon Badge */}
                <div className="space-y-4 flex flex-col items-center w-full">
                  <div className={`w-16 h-16 rounded-full ${portal.ringGlow} flex items-center justify-center p-1 shadow-inner group-hover:scale-110 transition-transform duration-300`}>
                    <div className={`w-full h-full rounded-full ${portal.ringBg} flex items-center justify-center shadow-md`}>
                      {portal.icon}
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <div className="space-y-1.5">
                    <h3 className="font-serif font-black text-lg md:text-xl text-slate-900 group-hover:text-[#881337] transition-colors leading-snug">
                      {portal.title}
                    </h3>
                    <p className="text-xs text-slate-500 font-medium leading-relaxed">
                      {portal.subtitle}
                    </p>
                  </div>
                </div>

                {/* Bottom Color Accent Bar */}
                <div className={`absolute bottom-0 inset-x-0 h-1.5 ${portal.bottomBar} rounded-b-3xl opacity-80 group-hover:opacity-100 transition-opacity`}></div>
              </div>
            </ScrollRevealCard>
          ))}
        </div>

      </div>

      {/* Interactive Modals for Portals */}
      {activeModal && (
        <div className="modal-backdrop-luxury">
          <div className="bg-[#FAF7F0] text-slate-900 rounded-3xl max-w-xl w-full p-6 md:p-8 border border-[#DFD7C7] shadow-2xl relative space-y-6 animate-in fade-in zoom-in duration-200">
            <button
              onClick={() => setActiveModal(null)}
              className="absolute right-5 top-5 w-9 h-9 rounded-full bg-[#F5F1EA] hover:bg-rose-100 text-slate-700 hover:text-rose-700 flex items-center justify-center transition-colors border border-[#DFD7C7]"
            >
              <X className="w-5 h-5" />
            </button>

            {/* LMS Portal Modal */}
            {activeModal === 'lms' && (
              <div className="space-y-5">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-700 text-white flex items-center justify-center">
                    <Laptop className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-emerald-800 uppercase tracking-widest">Digital Learning</span>
                    <h3 className="font-serif font-extrabold text-2xl text-[#0F2E23]">Learning Management System</h3>
                  </div>
                </div>

                <p className="text-xs text-slate-700 leading-relaxed bg-white p-4 rounded-2xl border border-[#DFD7C7]">
                  Access online classroom materials, class V-XII homework assignments, digital textbooks, and video lectures. Integrated with Govt. of West Bengal's Banglar Shiksha e-learning repository.
                </p>

                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="bg-emerald-50 p-3.5 rounded-2xl border border-emerald-200">
                    <p className="font-bold text-[#0F2E23]">Class V - X Study Notes</p>
                    <p className="text-[11px] text-slate-600">WBBSE Madhyamik Syllabus</p>
                  </div>
                  <div className="bg-teal-50 p-3.5 rounded-2xl border border-teal-200">
                    <p className="font-bold text-[#1B4332]">Class XI - XII Streams</p>
                    <p className="text-[11px] text-slate-600">WBCHSE Arts & Science</p>
                  </div>
                </div>

                <div className="pt-2 flex justify-end gap-3">
                  <a
                    href="https://banglarshiksha.gov.in"
                    target="_blank"
                    rel="noreferrer"
                    className="w-full bg-[#0F2E23] hover:bg-[#091D16] text-white font-bold py-3 rounded-xl text-xs flex items-center justify-center gap-2 shadow-md transition-all"
                  >
                    <span>Launch Banglar Shiksha Portal</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            )}

            {/* Student Profile Modal */}
            {activeModal === 'student_profile' && (
              <div className="space-y-5">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-[#1B4332] text-white flex items-center justify-center">
                    <UserCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-teal-800 uppercase tracking-widest">Student Information System</span>
                    <h3 className="font-serif font-extrabold text-2xl text-[#0F2E23]">Student Profile & Kanyashree</h3>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-2xl border border-[#DFD7C7] space-y-3 text-xs">
                  <p className="font-bold text-slate-800">Check Student Profile & Grant Status:</p>
                  <input
                    type="text"
                    placeholder="Enter Student ID / Banglar Shiksha ID (e.g. 19190806002...)"
                    className="w-full bg-[#FAF7F2] border border-[#DFD7C7] rounded-xl px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-[#1B4332]"
                  />
                  <input
                    type="password"
                    placeholder="Date of Birth / Password (DDMMYYYY)"
                    className="w-full bg-[#FAF7F2] border border-[#DFD7C7] rounded-xl px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-[#1B4332]"
                  />
                  <button
                    onClick={() => alert('Accessing Student Dashboard... (Banglar Shiksha ID synchronized)')}
                    className="w-full bg-[#1B4332] hover:bg-[#122E22] text-white font-bold py-3 rounded-xl text-xs transition-colors"
                  >
                    Login to Student Dashboard
                  </button>
                </div>
              </div>
            )}

            {/* Grievance Redressal Modal */}
            {activeModal === 'grievance' && (
              <div className="space-y-5">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-[#881337] text-white flex items-center justify-center">
                    <AlertTriangle className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-rose-800 uppercase tracking-widest">Confidential Helpline</span>
                    <h3 className="font-serif font-extrabold text-2xl text-[#881337]">Grievance & POSH Cell</h3>
                  </div>
                </div>

                {formSubmitted ? (
                  <div className="bg-rose-50 border border-rose-200 text-rose-900 p-6 rounded-2xl text-center space-y-2">
                    <CheckCircle2 className="w-10 h-10 text-rose-600 mx-auto" />
                    <p className="font-extrabold text-base">Grievance Submitted Confidentially</p>
                    <p className="text-xs text-slate-600">Your reference ticket number has been generated. The Headmistress & Internal Complaints Committee will review your report within 24 hours.</p>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-3 text-xs">
                    <p className="text-slate-600">
                      Report any concerns regarding campus safety, harassment, anti-ragging, or infrastructure directly to the Headmistress. Submissions can be completely anonymous.
                    </p>
                    <input
                      required
                      type="text"
                      placeholder="Your Name (Optional)"
                      className="w-full bg-white border border-[#DFD7C7] rounded-xl px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-[#881337]"
                    />
                    <select className="w-full bg-white border border-[#DFD7C7] rounded-xl px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-[#881337]">
                      <option>Academic & Exam Inquiry</option>
                      <option>Safety & Anti-Ragging Cell</option>
                      <option>POSH Internal Complaints Committee</option>
                      <option>Infrastructure & Sanitation</option>
                      <option>Kanyashree / Grant Dispersal</option>
                    </select>
                    <textarea
                      required
                      rows={3}
                      placeholder="Describe your issue or grievance in detail..."
                      className="w-full bg-white border border-[#DFD7C7] rounded-xl px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-[#881337]"
                    ></textarea>
                    <button
                      type="submit"
                      className="w-full bg-[#881337] hover:bg-[#600D27] text-white font-bold py-3 rounded-xl text-xs flex items-center justify-center gap-2 shadow-md transition-colors"
                    >
                      <Send className="w-4 h-4" />
                      <span>Submit Confidential Report</span>
                    </button>
                  </form>
                )}
              </div>
            )}

            {/* Online Feedback Modal */}
            {activeModal === 'feedback' && (
              <div className="space-y-5">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-indigo-900 text-white flex items-center justify-center">
                    <MessageSquare className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-indigo-800 uppercase tracking-widest">Stakeholder Engagement</span>
                    <h3 className="font-serif font-extrabold text-2xl text-slate-900">Guardian & Student Feedback</h3>
                  </div>
                </div>

                {formSubmitted ? (
                  <div className="bg-purple-50 border border-purple-200 text-purple-900 p-6 rounded-2xl text-center space-y-2">
                    <CheckCircle2 className="w-10 h-10 text-purple-600 mx-auto" />
                    <p className="font-extrabold text-base">Thank You for Your Feedback!</p>
                    <p className="text-xs text-slate-600">Your valuable suggestion helps us improve the quality of education and facilities at MGGHS.</p>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-3 text-xs">
                    <p className="text-slate-600">
                      We invite guardians, students, and community members to share suggestions to help us continuously elevate school standards.
                    </p>
                    <input
                      required
                      type="text"
                      placeholder="Full Name (Guardian / Student)"
                      className="w-full bg-white border border-[#DFD7C7] rounded-xl px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-indigo-900"
                    />
                    <div className="grid grid-cols-2 gap-2">
                      <input
                        required
                        type="text"
                        placeholder="Mobile / Phone"
                        className="bg-white border border-[#DFD7C7] rounded-xl px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-indigo-900"
                      />
                      <select className="bg-white border border-[#DFD7C7] rounded-xl px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-indigo-900">
                        <option>Guardian</option>
                        <option>Current Student</option>
                        <option>Alumni</option>
                        <option>Faculty / Staff</option>
                      </select>
                    </div>
                    <textarea
                      required
                      rows={3}
                      placeholder="Your feedback, suggestions, or ideas..."
                      className="w-full bg-white border border-[#DFD7C7] rounded-xl px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-indigo-900"
                    ></textarea>
                    <button
                      type="submit"
                      className="w-full bg-indigo-900 hover:bg-indigo-950 text-white font-bold py-3 rounded-xl text-xs flex items-center justify-center gap-2 shadow-md transition-colors"
                    >
                      <Send className="w-4 h-4" />
                      <span>Submit Feedback</span>
                    </button>
                  </form>
                )}
              </div>
            )}

            {/* Alumni Portal Modal */}
            {activeModal === 'alumni' && (
              <div className="space-y-5">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-amber-800 text-white flex items-center justify-center">
                    <Users className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-amber-800 uppercase tracking-widest">Heritage Network</span>
                    <h3 className="font-serif font-extrabold text-2xl text-[#292524]">Praktani Chhatri Sabha</h3>
                  </div>
                </div>

                <p className="text-xs text-slate-700 leading-relaxed bg-white p-4 rounded-2xl border border-[#DFD7C7]">
                  Connecting generations of former students of Mahishadal Gayeswari Girls' High School since 1945. Join the Praktani Sabha network to mentor current girls, sponsor merit scholarships, and attend annual reunions.
                </p>

                <div className="bg-amber-50 p-4 rounded-2xl border border-amber-200 space-y-2 text-xs text-amber-900">
                  <p className="font-bold flex items-center gap-1.5">
                    <Heart className="w-4 h-4 text-amber-700" />
                    Praktani Scholarship Fund 2026
                  </p>
                  <p className="text-[11px] text-amber-800">
                    Alumni have funded over ₹2.5 Lakhs in cash prizes and Higher Secondary fee waivers for underprivileged toppers.
                  </p>
                </div>

                <button
                  onClick={() => alert('Opening Alumni Registration Form...')}
                  className="w-full bg-amber-800 hover:bg-amber-900 text-white font-bold py-3 rounded-xl text-xs flex items-center justify-center gap-2 shadow-md transition-colors"
                >
                  <Users className="w-4 h-4" />
                  <span>Register as Alumni (Praktani Member)</span>
                </button>
              </div>
            )}

            {/* 360 Teacher Appraisal Modal */}
            {activeModal === 'appraisal' && (
              <div className="space-y-5">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-[#0F172A] text-white flex items-center justify-center">
                    <Star className="w-6 h-6 text-amber-400" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-slate-700 uppercase tracking-widest">Faculty Evaluation</span>
                    <h3 className="font-serif font-extrabold text-2xl text-slate-900">360° Teacher Appraisal</h3>
                  </div>
                </div>

                <p className="text-xs text-slate-700 leading-relaxed bg-white p-4 rounded-2xl border border-[#DFD7C7]">
                  WBBSE & WBCHSE mandated performance evaluation portal for teaching staff. Facilitates peer reviews, student feedback integration, academic publishing records, and Headmistress appraisal.
                </p>

                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="bg-slate-100 p-3.5 rounded-2xl border border-slate-300">
                    <p className="font-bold text-slate-900">Teaching Staff Login</p>
                    <p className="text-[11px] text-slate-600">Enter WB School Code</p>
                  </div>
                  <div className="bg-blue-50 p-3.5 rounded-2xl border border-blue-200">
                    <p className="font-bold text-blue-950">Headmistress Desk</p>
                    <p className="text-[11px] text-slate-600">Annual Confidential Report</p>
                  </div>
                </div>

                <button
                  onClick={() => alert('Faculty Appraisal Portal Login Interface')}
                  className="w-full bg-[#0F172A] hover:bg-black text-white font-bold py-3 rounded-xl text-xs transition-colors"
                >
                  Teacher Log In (Authorized Only)
                </button>
              </div>
            )}

            {/* WBBSE & WBCHSE Portal Modal */}
            {activeModal === 'boards' && (
              <div className="space-y-5">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-[#C58B24] text-white flex items-center justify-center">
                    <BookOpen className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-amber-800 uppercase tracking-widest">State Education Boards</span>
                    <h3 className="font-serif font-extrabold text-2xl text-slate-900">WBBSE & WBCHSE Desk</h3>
                  </div>
                </div>

                <p className="text-xs text-slate-700 leading-relaxed bg-white p-4 rounded-2xl border border-[#DFD7C7]">
                  Complete access to West Bengal Board of Secondary Education (WBBSE - Madhyamik) & West Bengal Council of Higher Secondary Education (WBCHSE) official routines, reduced syllabus PDFs, and model question papers.
                </p>

                <div className="space-y-2 text-xs">
                  <a
                    href="https://wbbse.wb.gov.in"
                    target="_blank"
                    rel="noreferrer"
                    className="w-full bg-amber-50 hover:bg-amber-100 border border-amber-300 text-amber-950 font-bold p-3 rounded-xl flex items-center justify-between transition-colors"
                  >
                    <span>• WBBSE Official Website (wbbse.wb.gov.in)</span>
                    <ExternalLink className="w-4 h-4 text-amber-700" />
                  </a>
                  <a
                    href="https://wbchse.wb.gov.in"
                    target="_blank"
                    rel="noreferrer"
                    className="w-full bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 text-emerald-950 font-bold p-3 rounded-xl flex items-center justify-between transition-colors"
                  >
                    <span>• WBCHSE Official Portal (wbchse.wb.gov.in)</span>
                    <ExternalLink className="w-4 h-4 text-emerald-700" />
                  </a>
                </div>
              </div>
            )}

            {/* Virtual Campus Tour Modal */}
            {activeModal === 'virtual_tour' && (
              <div className="space-y-5">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-slate-900 text-white flex items-center justify-center">
                    <Compass className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-slate-700 uppercase tracking-widest">360° Interactive Campus</span>
                    <h3 className="font-serif font-extrabold text-2xl text-slate-900">Virtual School Tour</h3>
                  </div>
                </div>

                <div className="relative rounded-2xl overflow-hidden border border-slate-300 aspect-video shadow-md">
                  <img
                    src="/assets/hero_campus.jpg"
                    alt="Campus Tour Preview"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-4 text-white">
                    <div>
                      <p className="font-serif font-bold text-sm">Main Academic Block & Central Courtyard</p>
                      <p className="text-[10px] text-amber-300">Garkamalpur, Mahishadal, Purba Medinipur</p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2 text-[11px] text-center font-bold">
                  <a href="#gallery" onClick={() => setActiveModal(null)} className="bg-white border border-[#DFD7C7] p-2.5 rounded-xl hover:border-amber-500 transition-colors">
                    📸 Science Labs
                  </a>
                  <a href="#gallery" onClick={() => setActiveModal(null)} className="bg-white border border-[#DFD7C7] p-2.5 rounded-xl hover:border-amber-500 transition-colors">
                    📚 ICT Smart Class
                  </a>
                  <a href="#gallery" onClick={() => setActiveModal(null)} className="bg-white border border-[#DFD7C7] p-2.5 rounded-xl hover:border-amber-500 transition-colors">
                    🏆 Sports Ground
                  </a>
                </div>
              </div>
            )}

          </div>
        </div>
      )}

    </section>
  );
};

