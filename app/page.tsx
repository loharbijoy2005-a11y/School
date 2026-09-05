'use client';

import React, { useState, useEffect } from 'react';
import { Navbar } from '../components/Navbar';
import { FloatingEdgeFlaps } from '../components/FloatingEdgeFlaps';
import { HeroNoticeOverlay } from '../components/HeroNoticeOverlay';
import { StickyQuickNav } from '../components/StickyQuickNav';
import { AboutDesk } from '../components/AboutDesk';
import { VisionMissionTabs } from '../components/VisionMissionTabs';
import { AcademicSpectrum } from '../components/AcademicSpectrum';
import { SeminarsCarousel } from '../components/SeminarsCarousel';
import { StudentSuccess } from '../components/StudentSuccess';
import { DigitalPortals } from '../components/DigitalPortals';
import { SchemesCorner } from '../components/SchemesCorner';
import { BentoGrid } from '../components/BentoGrid';
import { SwachhataSection } from '../components/SwachhataSection';
import { EventGallery } from '../components/EventGallery';
import { GoogleReviews } from '../components/GoogleReviews';
import { ContactSection } from '../components/ContactSection';
import { AdmissionModal } from '../components/AdmissionModal';
import { AdminLoginModal } from '../components/AdminLoginModal';
import { AdminDashboard } from '../components/AdminDashboard';
import { Footer } from '../components/Footer';
import { Notice, AdminUser, FacultyMember } from '../types';

export default function HomePage() {
  const [currentLang, setCurrentLang] = useState<'en' | 'bn'>('en');
  const [isAdmissionModalOpen, setIsAdmissionModalOpen] = useState(false);
  const [isAdminLoginModalOpen, setIsAdminLoginModalOpen] = useState(false);
  const [adminUser, setAdminUser] = useState<AdminUser | null>(null);
  const [activePdfNotice, setActivePdfNotice] = useState<Notice | null>(null);

  // Marquee Announcement Ticker State (Persisted in localStorage)
  const [marqueeText, setMarqueeText] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('mgghs_marquee');
      if (saved) return saved;
    }
    return "🚨 ONLINE ADMISSION OPEN FOR CLASS V TO XI (SESSION 2026-27) | WBBSE & WBCHSE 2ND UNIT TEST ROUTINE PUBLISHED | KANYASHREE K1 & K2 GRANT DESK ACTIVE";
  });

  // Dynamic Faculty & Staff Roster State
  const [facultyList, setFacultyList] = useState<FacultyMember[]>([
    {
      id: '1',
      name: 'Smt. Kalyani Maity',
      designation: 'Headmistress',
      qualification: 'M.A. (Bengali), B.Ed.',
      subject: 'Bengali Literature & School Admin',
      department: 'Languages',
      category: 'teaching',
      gender: 'Madam',
      imageUrl: '/assets/headmistress.jpg',
      bio: "Welcome to Mahishadal Gayeswari Girls' High School (H.S.). Since 1945, our school has been dedicated to moulding young girls into confident, moral, and educated citizens. Through state welfare programs like Kanyashree, Sabooj Sathi, ICT Computer lab, and dedicated faculty, we ensure a safe, supportive, and vibrant learning atmosphere for every girl child.",
      email: 'headmistress@mgghs.edu.in',
      phone: '+91 3228 240211',
    },
    {
      id: '2',
      name: 'Sri Subrata Kumar Sheet',
      designation: 'Assistant Headmaster',
      qualification: 'M.A. (Bengali), B.Ed.',
      subject: 'Bengali Language',
      department: 'Languages',
      category: 'teaching',
      gender: 'Sir',
      bio: 'Serving the institution for over 18 years, committed to preserving standard Bengali literature and academic excellence in WBBSE examinations.',
    },
    {
      id: '3',
      name: 'Smt. Anindita Chakraborty',
      designation: 'Assistant Teacher',
      qualification: 'M.A. (English), B.Ed.',
      subject: 'English Communication',
      department: 'Languages',
      category: 'teaching',
      gender: 'Madam',
      bio: 'Dedicated to enhancing English spoken skills, grammar foundation, and WBCHSE Higher Secondary literature syllabus.',
    },
    {
      id: '4',
      name: 'Sri Debabrata Mondal',
      designation: 'Assistant Teacher',
      qualification: 'M.A. (English), B.Ed.',
      subject: 'English Language',
      department: 'Languages',
      category: 'teaching',
      gender: 'Sir',
      bio: 'Focused on grammar, creative writing, and preparing students for Madhyamik secondary examination excellence.',
    },
    {
      id: '5',
      name: 'Smt. Susmita Das',
      designation: 'Assistant Teacher',
      qualification: 'M.A. (Sanskrit), B.Ed.',
      subject: 'Sanskrit & Vedic Heritage',
      department: 'Languages',
      category: 'teaching',
      gender: 'Madam',
      bio: 'Promoting ancient Indian literature, Sanskrit grammar, and classical heritage among secondary students.',
    },

    {
      id: '6',
      name: 'Sri Swapan Kumar Samanta',
      designation: 'Senior Faculty (Physical Science)',
      qualification: 'M.Sc. (Physics), B.Ed.',
      subject: 'Physical Science & Physics',
      department: 'Science & Math',
      category: 'teaching',
      gender: 'Sir',
      bio: 'Guiding science stream students in theoretical Physics and hands-on laboratory practical experiments.',
    },
    {
      id: '7',
      name: 'Smt. Priyanka Bhowmik',
      designation: 'Assistant Teacher',
      qualification: 'M.Sc. (Chemistry), B.Ed.',
      subject: 'Chemistry',
      department: 'Science & Math',
      category: 'teaching',
      gender: 'Madam',
      bio: 'Specialized in Organic & Inorganic Chemistry, practical lab demonstrations, and WBCHSE Board preparation.',
    },
    {
      id: '8',
      name: 'Sri Soumen Maiti',
      designation: 'Assistant Teacher',
      qualification: 'M.Sc. (Mathematics), B.Ed.',
      subject: 'Mathematics & Calculus',
      department: 'Science & Math',
      category: 'teaching',
      gender: 'Sir',
      bio: 'Simplifying complex algebra, geometry, and calculus for Madhyamik and Higher Secondary toppers.',
    },
    {
      id: '9',
      name: 'Smt. Tanushree Jana',
      designation: 'Assistant Teacher',
      qualification: 'M.Sc. (Zoology), B.Ed.',
      subject: 'Life Science & Biology',
      department: 'Science & Math',
      category: 'teaching',
      gender: 'Madam',
      bio: 'In-charge of Life Science, environmental studies, and biology lab specimen demonstrations.',
    },

    {
      id: '10',
      name: 'Smt. Keya Das',
      designation: 'Assistant Teacher',
      qualification: 'M.A. (History), B.Ed.',
      subject: 'Indian History & Freedom Struggle',
      department: 'Social Sciences',
      category: 'teaching',
      gender: 'Madam',
      bio: 'Teaching modern history, Bengal renaissance, and guiding students through historical project work.',
    },
    {
      id: '11',
      name: 'Sri Amitava Hazra',
      designation: 'Assistant Teacher',
      qualification: 'M.Sc. (Geography), B.Ed.',
      subject: 'Geography & Map Pointing',
      department: 'Social Sciences',
      category: 'teaching',
      gender: 'Sir',
      bio: 'Specialist in physical geography, GIS basics, weather reporting, and West Bengal regional studies.',
    },
    {
      id: '12',
      name: 'Smt. Ratna Banerjee',
      designation: 'Assistant Teacher',
      qualification: 'M.A. (Philosophy), B.Ed.',
      subject: 'Philosophy & Logic',
      department: 'Social Sciences',
      category: 'teaching',
      gender: 'Madam',
      bio: 'Mentoring Higher Secondary Arts students in Western and Indian philosophical traditions.',
    },
    {
      id: '13',
      name: 'Smt. Madhumita Sen',
      designation: 'Assistant Teacher',
      qualification: 'M.Sc. (Nutrition), B.Ed.',
      subject: 'Nutrition & Home Management',
      department: 'Social Sciences',
      category: 'teaching',
      gender: 'Madam',
      bio: 'Educating female students on health, dietary science, hygiene, and community health.',
    },

    {
      id: '14',
      name: 'Sri Bikash Chandra Ray',
      designation: 'ICT Coordinator & Teacher',
      qualification: 'B.Tech (CSE), MCA',
      subject: 'Computer Application & IT',
      department: 'IT & Sports',
      category: 'teaching',
      gender: 'Sir',
      bio: 'Managing 30+ desktop computer lab, teaching computer applications, and coordinating digital governance.',
    },
    {
      id: '15',
      name: 'Smt. Sampa Ghorai',
      designation: 'Physical Education Coach',
      qualification: 'M.P.Ed.',
      subject: 'Sports & Karate Self-Defense',
      department: 'IT & Sports',
      category: 'teaching',
      gender: 'Madam',
      bio: 'Training girls in karate, athletics, yoga, and inter-school championship competitions.',
    },

    {
      id: '16',
      name: 'Sri Rabindra Nath Maity',
      designation: 'Head Clerk (Grade I)',
      qualification: 'B.Com (Hons)',
      subject: 'Banglar Shiksha & Accounts',
      department: 'Office & Library',
      category: 'non_teaching',
      gender: 'Sir',
      bio: 'Managing official records, Banglar Shiksha portal synchronization, staff salaries, and government grants.',
    },
    {
      id: '17',
      name: 'Smt. Sumitra Sasmal',
      designation: 'School Librarian',
      qualification: 'M.Lib.Sc.',
      subject: 'Central Library & Archives',
      department: 'Office & Library',
      category: 'non_teaching',
      gender: 'Madam',
      bio: 'Custodian of 12,000+ books, reference journals, competitive exam guides, and digital e-catalogues.',
    },
    {
      id: '18',
      name: 'Sri Tarun Kumar Giri',
      designation: 'Laboratory Assistant',
      qualification: 'B.Sc. (Pass)',
      subject: 'Science Labs Setup & Safety',
      department: 'Office & Library',
      category: 'non_teaching',
      gender: 'Sir',
      bio: 'Assisting Physics, Chemistry, and Biology practical classes, chemical storage, and apparatus maintenance.',
    },

    {
      id: '19',
      name: 'Sri Kanai Lal Das',
      designation: 'Group-D Staff / Peon',
      qualification: 'Class X Pass',
      subject: 'Office Maintenance & Despatch',
      department: 'Support & Security',
      category: 'support_group_d',
      gender: 'Sir',
      bio: 'Providing administrative support, bell duty, notice distribution, and general campus upkeep.',
    },
    {
      id: '20',
      name: 'Sri Samar Bhowmik',
      designation: 'Night Guard & Security',
      qualification: 'Class X Pass',
      subject: 'Campus Safety & Night Watchman',
      department: 'Support & Security',
      category: 'support_group_d',
      gender: 'Sir',
      bio: 'Ensuring 24/7 security, CCTV surveillance monitoring, and campus safety for our girls school.',
    },
  ]);

  const toggleLanguage = () => {
    setCurrentLang((prev) => (prev === 'en' ? 'bn' : 'en'));
  };

  const handleDownloadRoutine = () => {
    alert('Downloading WBBSE Madhyamik & WBCHSE Higher Secondary Exam Routine 2026 (PDF)...');
  };

  const handleOpenPdfModal = (notice: Notice) => {
    setActivePdfNotice(notice);
  };

  const handleClosePdfModal = () => {
    setActivePdfNotice(null);
  };

  const handleOpenWelfareModal = (schemeId: string) => {
    alert(`Opening detailed official guide for scheme: "${schemeId.toUpperCase()}".`);
  };

  const handleAddFaculty = (newStaff: FacultyMember) => {
    setFacultyList((prev) => [newStaff, ...prev]);
  };

  const handleDeleteFaculty = (id: string) => {
    setFacultyList((prev) => prev.filter((item) => item.id !== id));
  };

  const handleUpdateMarquee = (newText: string) => {
    setMarqueeText(newText);
  };

  // If Admin is logged in, show Admin Dashboard view!
  if (adminUser) {
    return (
      <AdminDashboard
        user={adminUser}
        onLogout={() => setAdminUser(null)}
        facultyList={facultyList}
        onAddFaculty={handleAddFaculty}
        onDeleteFaculty={handleDeleteFaculty}
        marqueeText={marqueeText}
        onUpdateMarquee={handleUpdateMarquee}
      />
    );
  }

  return (
    <div className={`min-h-screen ${currentLang === 'bn' ? 'lang-bn' : ''}`}>
      
      {/* Dual Edge Flaps (Left Vertical Tabs + Right Bottom Anchor) */}
      <FloatingEdgeFlaps />

      {/* 1. Header Nav & Continuous Running Announcement Ticker */}
      <Navbar
        currentLang={currentLang}
        onToggleLang={toggleLanguage}
        onOpenAdmissionModal={() => setIsAdmissionModalOpen(true)}
        onOpenAdminLoginModal={() => setIsAdminLoginModalOpen(true)}
        marqueeText={marqueeText}
      />

      {/* 2. Full-Width Hero Slider with Integrated Tabbed Notice Board Overlay */}
      <HeroNoticeOverlay
        onOpenAdmissionModal={() => setIsAdmissionModalOpen(true)}
        onDownloadRoutine={handleDownloadRoutine}
        onOpenPdfModal={handleOpenPdfModal}
      />

      {/* 3. Sticky Bottom Quick Navigation Bar */}
      <StickyQuickNav />

      {/* 4. School Administration Split-View & Faculty Roster */}
      <AboutDesk facultyList={facultyList} />

      {/* 5. Vision, Mission & Core Philosophy 3-Column Glass Cards */}
      <VisionMissionTabs />

      {/* 6. Academic Spectrum & Stream Matrix */}
      <AcademicSpectrum />

      {/* 7. Seminars, Cultural Wings & Workshops Carousel */}
      <SeminarsCarousel />

      {/* 8. Celebrating Our Students' Success Spotlight */}
      <StudentSuccess />

      {/* 9. Digital Campus Portals 8-Card Action Grid */}
      <DigitalPortals />

      {/* 10. West Bengal Govt Welfare Schemes */}
      <SchemesCorner onOpenWelfareModal={handleOpenWelfareModal} />

      {/* 11. Campus Facilities Grid (14+ Bento-Cards) */}
      <BentoGrid />

      {/* 12. Swachhata & Green Campus Showcase */}
      <SwachhataSection />

      {/* 13. Auto-Scrolling Campus Photo Reel & Lightbox */}
      <EventGallery />

      {/* 14. Real Google Reviews Widget */}
      <GoogleReviews />

      {/* 15. Dual Query & Geolocation Section */}
      <ContactSection />

      {/* 16. Institutional Footer with Dual ADMIN LOG IN & OFFICE LOG IN Buttons */}
      <Footer onOpenAdminLoginModal={() => setIsAdminLoginModalOpen(true)} />

      {/* Admission Modal Dialog */}
      <AdmissionModal
        isOpen={isAdmissionModalOpen}
        onClose={() => setIsAdmissionModalOpen(false)}
      />

      {/* Admin Authentication Login Modal */}
      <AdminLoginModal
        isOpen={isAdminLoginModalOpen}
        onClose={() => setIsAdminLoginModalOpen(false)}
        onLoginSuccess={(user) => setAdminUser(user)}
      />

      {/* PDF Viewer Simulation Modal */}
      {activePdfNotice && (
        <div className="modal-backdrop-luxury">
          <div className="bg-slate-900 text-white rounded-3xl max-w-xl w-full p-6 md:p-8 border border-slate-700 shadow-2xl relative space-y-4">
            <div className="flex justify-between items-center border-b border-slate-800 pb-3">
              <h3 className="font-serif font-extrabold text-lg text-white">{activePdfNotice.title}</h3>
              <button className="text-slate-400 hover:text-white" onClick={handleClosePdfModal}>
                <i className="fa-solid fa-xmark text-lg"></i>
              </button>
            </div>
            <div className="space-y-3 text-xs">
              <p className="font-bold text-amber-400">MAHISHADAL GAYESWARI GIRLS' HIGH SCHOOL (H.S.)</p>
              <p className="text-slate-400">Category: {activePdfNotice.category.toUpperCase()} | Publish Date: {activePdfNotice.publishDate}</p>
              <p className="text-slate-300 leading-relaxed bg-slate-950 p-4 rounded-xl border border-slate-800">{activePdfNotice.description}</p>
              <div className="flex justify-end gap-3 pt-3">
                <button className="bg-slate-800 text-slate-300 font-bold px-4 py-2 rounded-xl" onClick={handleClosePdfModal}>
                  Close
                </button>
                <button
                  className="bg-rose-600 hover:bg-rose-500 text-white font-bold px-4 py-2 rounded-xl flex items-center gap-1.5"
                  onClick={() => {
                    alert(`Downloading official PDF for ${activePdfNotice.title}...`);
                    handleClosePdfModal();
                  }}
                >
                  <i className="fa-solid fa-download"></i> Download PDF Document
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
