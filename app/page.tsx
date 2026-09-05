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
import { SchemesCorner } from '../components/SchemesCorner';
import { BentoGrid } from '../components/BentoGrid';
import { SwachhataSection } from '../components/SwachhataSection';
import { EventGallery } from '../components/EventGallery';
import { GoogleReviews } from '../components/GoogleReviews';
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
        <div className="modal-backdrop" style={{ display: 'flex' }}>
          <div className="modal-box" style={{ maxWidth: '640px' }}>
            <div className="modal-header">
              <h3 className="modal-title">{activePdfNotice.title}</h3>
              <button className="modal-close" onClick={handleClosePdfModal}>
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>
            <div className="modal-body">
              <p style={{ fontWeight: 700, marginBottom: '0.5rem', color: '#0F172A' }}>
                MAHISHADAL GAYESWARI GIRLS' HIGH SCHOOL (H.S.)
              </p>
              <p style={{ color: '#64748B', fontSize: '0.85rem', marginBottom: '1rem' }}>
                Category: {activePdfNotice.category.toUpperCase()} | Date: {activePdfNotice.publishDate}
              </p>
              <p style={{ color: '#334155', lineHeight: 1.6 }}>{activePdfNotice.description}</p>
              <div style={{ marginTop: '1.5rem', display: 'flex', justifyContent: 'flex-end', gap: '0.75rem' }}>
                <button className="btn btn-outline" onClick={handleClosePdfModal} style={{ padding: '0.5rem 1.2rem', fontSize: '0.85rem' }}>
                  Close
                </button>
                <button
                  className="btn btn-rose"
                  onClick={() => {
                    alert(`Downloading ${activePdfNotice.title}.pdf...`);
                    handleClosePdfModal();
                  }}
                  style={{ padding: '0.5rem 1.2rem', fontSize: '0.85rem' }}
                >
                  <i className="fa-solid fa-download"></i> Download PDF
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
