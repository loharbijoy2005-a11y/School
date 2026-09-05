import React, { useState } from 'react';

interface NavbarProps {
  currentLang: 'en' | 'bn';
  onToggleLang: () => void;
  onOpenAdmissionModal: () => void;
  onOpenAdminLoginModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentLang,
  onToggleLang,
  onOpenAdmissionModal,
  onOpenAdminLoginModal,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* 1. Continuous Infinite Marquee Ticker */}
      <div className="ticker-bar">
        <div className="ticker-label">
          <span className="radar-dot"></span> LIVE UPDATES
        </div>
        <div className="ticker-wrapper">
          <div className="ticker-track">
            <span className="ticker-item"><i className="fa-solid fa-bell"></i> Online Admission Open for Class V to XI (Session 2026-27)</span>
            <span className="ticker-item"><i className="fa-solid fa-calendar-check"></i> Madhyamik & Higher Secondary 2nd Unit Test Examination Routine Published</span>
            <span className="ticker-item"><i className="fa-solid fa-graduation-cap"></i> Kanyashree K1 & K2 Grant Verification Helpdesk Active at Office</span>
            <span className="ticker-item"><i className="fa-solid fa-laptop"></i> Taruner Swapna Tab Grant Account Verification Desk Open</span>
            {/* Duplicated track for seamless infinite loop */}
            <span className="ticker-item"><i className="fa-solid fa-bell"></i> Online Admission Open for Class V to XI (Session 2026-27)</span>
            <span className="ticker-item"><i className="fa-solid fa-calendar-check"></i> Madhyamik & Higher Secondary 2nd Unit Test Examination Routine Published</span>
            <span className="ticker-item"><i className="fa-solid fa-graduation-cap"></i> Kanyashree K1 & K2 Grant Verification Helpdesk Active at Office</span>
            <span className="ticker-item"><i className="fa-solid fa-laptop"></i> Taruner Swapna Tab Grant Account Verification Desk Open</span>
          </div>
        </div>
      </div>

      {/* 2. Main Glass Navigation Header */}
      <header className="header-nav">
        <div className="container nav-container">
          <a href="#" className="brand-logo-group">
            <img
              src="/assets/school_logo.jpg"
              alt="MGGHS Crest Emblem Logo"
              className="logo-img"
              style={{ width: '58px', height: '58px', minWidth: '58px', minHeight: '58px', flexShrink: 0, objectFit: 'contain', borderRadius: '50%' }}
            />
            <div className="brand-titles">
              <h1>
                {currentLang === 'bn'
                  ? 'মহিষাদল গায়েশ্বরী বালিকা উচ্চ বিদ্যালয় (উঃ মাঃ)'
                  : "Mahishadal Gayeswari Girls' High School (H.S.)"}
              </h1>
              <p>
                {currentLang === 'bn'
                  ? '১৯৪৫ সাল থেকে জ্ঞান চর্চা, শৃঙ্খলা ও নারী শিক্ষার অগ্রদূত'
                  : "Govt. Sponsored Girls' Institution | Estd. 1945 | WBBSE & WBCHSE"}
              </p>
            </div>
          </a>

          <nav>
            <ul className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
              <li><a href="#home" className="nav-link" onClick={() => setMobileMenuOpen(false)}>{currentLang === 'bn' ? 'মূল পাতা' : 'Home'}</a></li>
              <li><a href="#desk" className="nav-link" onClick={() => setMobileMenuOpen(false)}>{currentLang === 'bn' ? 'শিক্ষকমণ্ডলী' : 'HM & Faculty'}</a></li>
              <li><a href="#academics" className="nav-link" onClick={() => setMobileMenuOpen(false)}>{currentLang === 'bn' ? 'পাঠ্যক্রম' : 'Academics'}</a></li>
              <li><a href="#notices" className="nav-link" onClick={() => setMobileMenuOpen(false)}>{currentLang === 'bn' ? 'নোটিশ বোর্ড' : 'Notice Board'}</a></li>
              <li><a href="#welfare" className="nav-link" onClick={() => setMobileMenuOpen(false)}>{currentLang === 'bn' ? 'সরকারি প্রকল্প' : 'Govt Schemes'}</a></li>
              <li><a href="#facilities" className="nav-link" onClick={() => setMobileMenuOpen(false)}>{currentLang === 'bn' ? 'সুযোগ-সুবিধা' : 'Facilities'}</a></li>
              <li><a href="#gallery" className="nav-link" onClick={() => setMobileMenuOpen(false)}>{currentLang === 'bn' ? 'গ্যালারি' : 'Gallery'}</a></li>
              <li>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenAdmissionModal();
                  }}
                  className="btn btn-rose"
                  style={{ fontSize: '0.85rem', padding: '0.55rem 1.2rem' }}
                >
                  <i className="fa-solid fa-user-plus"></i> {currentLang === 'bn' ? 'অনলাইন ভর্তি ২০২৬' : 'Admission Inquiry'}
                </button>
              </li>
            </ul>
          </nav>

          <button
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation"
          >
            <i className={`fa-solid ${mobileMenuOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
          </button>
        </div>
      </header>
    </>
  );
};
