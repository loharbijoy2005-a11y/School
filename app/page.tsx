'use client';

import React, { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { HeroNoticeOverlay } from '../components/HeroNoticeOverlay';
import { StickyQuickNav } from '../components/StickyQuickNav';
import { AboutDesk } from '../components/AboutDesk';
import { VisionMissionTabs } from '../components/VisionMissionTabs';
import { AcademicSpectrum } from '../components/AcademicSpectrum';
import { SeminarsCarousel } from '../components/SeminarsCarousel';
import { StudentSuccess } from '../components/StudentSuccess';
import { DigitalPortals } from '../components/DigitalPortals';
import { BentoGrid } from '../components/BentoGrid';
import { SwachhataSection } from '../components/SwachhataSection';
import { EventGallery } from '../components/EventGallery';
import { GoogleReviews } from '../components/GoogleReviews';
import { SchemesCorner } from '../components/SchemesCorner';
import { AdmissionModal } from '../components/AdmissionModal';
import { AdminLoginModal } from '../components/AdminLoginModal';
import { AdminDashboard } from '../components/AdminDashboard';
import { Footer } from '../components/Footer';
import { Notice, AdminUser } from '../types';

export default function HomePage() {
  const [currentLang, setCurrentLang] = useState<'en' | 'bn'>('en');
  const [isAdmissionModalOpen, setIsAdmissionModalOpen] = useState(false);
  const [isAdminLoginModalOpen, setIsAdminLoginModalOpen] = useState(false);
  const [adminUser, setAdminUser] = useState<AdminUser | null>(null);
  const [activePdfNotice, setActivePdfNotice] = useState<Notice | null>(null);

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

  // If Admin is logged in, show Admin Dashboard view!
  if (adminUser) {
    return (
      <AdminDashboard
        user={adminUser}
        onLogout={() => setAdminUser(null)}
      />
    );
  }

  return (
    <div className={`min-h-screen ${currentLang === 'bn' ? 'lang-bn' : ''}`}>
      
      {/* 1. Header Nav & Infinite Marquee Ticker */}
      <Navbar
        currentLang={currentLang}
        onToggleLang={toggleLanguage}
        onOpenAdmissionModal={() => setIsAdmissionModalOpen(true)}
        onOpenAdminLoginModal={() => setIsAdminLoginModalOpen(true)}
      />

      {/* 2. Full-Width Hero Slider with Integrated Notice Overlay */}
      <HeroNoticeOverlay
        onOpenAdmissionModal={() => setIsAdmissionModalOpen(true)}
        onDownloadRoutine={handleDownloadRoutine}
        onOpenPdfModal={handleOpenPdfModal}
      />

      {/* 3. Sticky Bottom Quick Navigation Bar */}
      <StickyQuickNav />

      {/* 4. About Desk & HM Welcome Speech */}
      <AboutDesk />

      {/* 5. Vision, Mission & Core Values Tabs */}
      <VisionMissionTabs />

      {/* 6. Academic Spectrum & Stream Explorer */}
      <AcademicSpectrum />

      {/* 7. Seminars, Cultural Wings & Workshops Carousel */}
      <SeminarsCarousel />

      {/* 8. Celebrating Our Students' Success Spotlight */}
      <StudentSuccess />

      {/* 9. Digital Campus Portals 6-Card Action Grid */}
      <DigitalPortals />

      {/* 10. West Bengal Govt Welfare Schemes */}
      <SchemesCorner onOpenWelfareModal={handleOpenWelfareModal} />

      {/* 11. Facilities That Support Every Student (Bento-Grid) */}
      <BentoGrid />

      {/* 12. Swachhata & Eco-Friendly Green Campus */}
      <SwachhataSection />

      {/* 13. Auto-Scrolling Campus Photo Reel */}
      <EventGallery />

      {/* 14. Real Google Reviews Widget */}
      <GoogleReviews />

      {/* 15. Institutional Footer with Dual ADMIN & OFFICE LOG IN Buttons */}
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
        <div className="fixed inset-0 z-50 bg-slate-900/75 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full p-6 md:p-8 shadow-2xl border border-slate-200">
            <div className="flex justify-between items-center pb-4 border-b border-slate-200 mb-4">
              <h3 className="font-bold text-slate-900 text-lg">{activePdfNotice.title}</h3>
              <button
                onClick={handleClosePdfModal}
                className="text-slate-500 hover:text-rose-600 font-bold"
              >
                ✕
              </button>
            </div>
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 mb-6 text-sm text-slate-700 leading-relaxed">
              <p className="font-bold text-slate-900 mb-2">MAHISHADAL GAYESWARI GIRLS' HIGH SCHOOL (H.S.)</p>
              <p className="mb-4">Official Circular Date: {activePdfNotice.publishDate}</p>
              <p>{activePdfNotice.description}</p>
            </div>
            <div className="flex justify-end gap-3">
              <button
                onClick={handleClosePdfModal}
                className="px-4 py-2 rounded-full border border-slate-300 font-bold text-sm text-slate-700"
              >
                Close
              </button>
              <button
                onClick={() => {
                  alert(`Downloading ${activePdfNotice.title}.pdf...`);
                  handleClosePdfModal();
                }}
                className="px-5 py-2 rounded-full bg-rose-600 hover:bg-rose-700 text-white font-bold text-sm shadow-md"
              >
                Download PDF
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
