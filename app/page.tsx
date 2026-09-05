'use client';

import React, { useState, useEffect } from 'react';
import { AdminLoginModal } from '../components/AdminLoginModal';
import { AdminDashboard } from '../components/AdminDashboard';
import { Notice, AdminUser } from '../types';

export default function HomePage() {
  const [currentLang, setCurrentLang] = useState<'en' | 'bn'>('en');
  const [isAdmissionModalOpen, setIsAdmissionModalOpen] = useState(false);
  const [isAdminLoginModalOpen, setIsAdminLoginModalOpen] = useState(false);
  const [adminUser, setAdminUser] = useState<AdminUser | null>(null);
  const [activePdfNotice, setActivePdfNotice] = useState<{ title: string; date: string; cat: string } | null>(null);
  const [activeWelfareModal, setActiveWelfareModal] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [formStudent, setFormStudent] = useState('');
  const [formGuardian, setFormGuardian] = useState('');
  const [formClass, setFormClass] = useState('');
  const [formPhone, setFormPhone] = useState('');
  const [formAddress, setFormAddress] = useState('');

  const toggleLanguage = () => {
    setCurrentLang((prev) => (prev === 'en' ? 'bn' : 'en'));
  };

  const handleDownloadRoutine = () => {
    alert('Downloading WBBSE Madhyamik & WBCHSE Higher Secondary Exam Routine 2026 (PDF)...');
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formStudent || !formGuardian || !formPhone) return;
    alert(`Thank you ${formGuardian}! Admission inquiry for ${formStudent} (${formClass}) submitted successfully. School office will contact you on ${formPhone}.`);
    setFormStudent('');
    setFormGuardian('');
    setFormPhone('');
    setFormAddress('');
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
      
      {/* 1. TOP UTILITY HEADER */}
      <div className="top-bar">
        <div className="container top-bar-content">
          <div className="top-info">
            <span className="school-badge-pill">
              {currentLang === 'bn' ? 'বাংলার শিক্ষা আইডি: WB-1945-MGGHS' : 'Banglar Shiksha ID: WB-1945-MGGHS'}
            </span>
            <span
              className="school-badge-pill"
              style={{ background: 'rgba(5, 150, 105, 0.2)', color: '#A7F3D0', borderColor: 'rgba(5, 150, 105, 0.4)' }}
            >
              {currentLang === 'bn' ? 'মধ্যশিক্ষা পর্ষদ: E1-042 | উচ্চ মাধ্যমিক: 105084' : 'WBBSE: E1-042 | WBCHSE: 105084'}
            </span>
            <span className="top-info-item">
              <i className="fa-solid fa-phone"></i>
              <span>{currentLang === 'bn' ? '+৯১ ৩২২৮ ২৪০২১১' : '+91 3228 240211'}</span>
            </span>
            <span className="top-info-item">
              <i className="fa-solid fa-envelope"></i>
              <span>mgghschool1945@gmail.com</span>
            </span>
          </div>

          <div className="top-actions" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <button onClick={toggleLanguage} className="lang-toggle-btn" title="Toggle Language (English / Bengali)">
              <i className="fa-solid fa-globe"></i>
              <span>{currentLang === 'en' ? 'বাংলা' : 'English'}</span>
            </button>

            <button
              onClick={() => setIsAdminLoginModalOpen(true)}
              className="lang-toggle-btn"
              style={{ background: 'rgba(245, 158, 11, 0.2)', color: '#FDE68A', borderColor: 'rgba(245, 158, 11, 0.4)', padding: '0.25rem 0.65rem' }}
              title="Admin Portal Login"
            >
              <i className="fa-solid fa-shield-halved" style={{ color: '#F59E0B' }}></i>
              <span style={{ fontSize: '0.8rem', fontWeight: 700 }}>Admin</span>
            </button>
          </div>
        </div>
      </div>

      {/* CONTINUOUS INFINITE MARQUEE TICKER */}
      <div className="ticker-bar">
        <div className="ticker-label">
          <span className="radar-dot"></span> LIVE UPDATES
        </div>
        <div className="ticker-wrapper">
          <div className="ticker-track">
            <span className="ticker-item"><i className="fa-solid fa-bell"></i> {currentLang === 'bn' ? 'পঞ্চম থেকে একাদশ শ্রেণী ভর্তি তথ্য ২০২৬-২৭' : 'Online Admission Open for Class V to XI (Session 2026-27)'}</span>
            <span className="ticker-item"><i className="fa-solid fa-calendar-check"></i> {currentLang === 'bn' ? 'মাধ্যমিক ও উচ্চ মাধ্যমিক ২য় ইউনিট টেস্ট রুটিন প্রকাশিত' : 'Madhyamik & Higher Secondary 2nd Unit Test Examination Routine Published'}</span>
            <span className="ticker-item"><i className="fa-solid fa-graduation-cap"></i> {currentLang === 'bn' ? 'কন্যাশ্রী K1 ও K2 নবায়ন হেল্পডেস্ক সক্রিয়' : 'Kanyashree K1 & K2 Grant Verification Helpdesk Active at Office'}</span>
            <span className="ticker-item"><i className="fa-solid fa-laptop"></i> {currentLang === 'bn' ? 'তরুণের স্বপ্ন ট্যাব অনুদান যাচাইকরণ চালু' : 'Taruner Swapna Tab Grant Account Verification Desk Open'}</span>
            {/* Duplicate track for loop */}
            <span className="ticker-item"><i className="fa-solid fa-bell"></i> {currentLang === 'bn' ? 'পঞ্চম থেকে একাদশ শ্রেণী ভর্তি তথ্য ২০২৬-২৭' : 'Online Admission Open for Class V to XI (Session 2026-27)'}</span>
            <span className="ticker-item"><i className="fa-solid fa-calendar-check"></i> {currentLang === 'bn' ? 'মাধ্যমিক ও উচ্চ মাধ্যমিক ২য় ইউনিট টেস্ট রুটিন প্রকাশিত' : 'Madhyamik & Higher Secondary 2nd Unit Test Examination Routine Published'}</span>
            <span className="ticker-item"><i className="fa-solid fa-graduation-cap"></i> {currentLang === 'bn' ? 'কন্যাশ্রী K1 ও K2 নবায়ন হেল্পডেস্ক সক্রিয়' : 'Kanyashree K1 & K2 Grant Verification Helpdesk Active at Office'}</span>
            <span className="ticker-item"><i className="fa-solid fa-laptop"></i> {currentLang === 'bn' ? 'তরুণের স্বপ্ন ট্যাব অনুদান যাচাইকরণ চালু' : 'Taruner Swapna Tab Grant Account Verification Desk Open'}</span>
          </div>
        </div>
      </div>

      {/* 2. MAIN NAVIGATION HEADER */}
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
              <li><a href="#desk" className="nav-link" onClick={() => setMobileMenuOpen(false)}>{currentLang === 'bn' ? 'প্রধান শিক্ষিকার বার্তা' : 'HM Message'}</a></li>
              <li><a href="#academics" className="nav-link" onClick={() => setMobileMenuOpen(false)}>{currentLang === 'bn' ? 'পাঠ্যক্রম' : 'Academics'}</a></li>
              <li><a href="#notices" className="nav-link" onClick={() => setMobileMenuOpen(false)}>{currentLang === 'bn' ? 'নোটিশ বোর্ড' : 'Notice Board'}</a></li>
              <li><a href="#welfare" className="nav-link" onClick={() => setMobileMenuOpen(false)}>{currentLang === 'bn' ? 'সরকারি প্রকল্প' : 'Govt Schemes'}</a></li>
              <li><a href="#facilities" className="nav-link" onClick={() => setMobileMenuOpen(false)}>{currentLang === 'bn' ? 'সুযোগ-সুবিধা' : 'Facilities'}</a></li>
              <li><a href="#gallery" className="nav-link" onClick={() => setMobileMenuOpen(false)}>{currentLang === 'bn' ? 'গ্যালারি' : 'Gallery'}</a></li>
              <li>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setIsAdmissionModalOpen(true);
                  }}
                  className="btn btn-rose"
                  style={{ fontSize: '0.85rem', padding: '0.55rem 1.2rem' }}
                >
                  <i className="fa-solid fa-user-plus"></i> {currentLang === 'bn' ? 'অনলাইন ভর্তি ২০২৬' : 'Admission Inquiry'}
                </button>
              </li>
            </ul>
          </nav>

          <button className="mobile-menu-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle Navigation">
            <i className={`fa-solid ${mobileMenuOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
          </button>
        </div>
      </header>

      {/* 3. INTERACTIVE 3D HERO SHOWCASE */}
      <section className="hero-section" id="home">
        <div className="container hero-grid">
          <div className="hero-content">
            <div className="badge-tag">
              <i className="fa-solid fa-crown"></i>
              <span>Government Sponsored H.S. School | Estd. 1945</span>
            </div>
            <h1 className="hero-title">
              {currentLang === 'bn' ? '১৯৪৫ সাল থেকে জ্ঞান চর্চা ও কন্যাদের সমৃদ্ধির পথপ্রদর্শক' : 'Empowering Young Minds, Inspiring Excellence Since 1945'}
            </h1>
            <p className="hero-description">
              {currentLang === 'bn'
                ? 'মহিষাদল গায়েশ্বরী বালিকা উচ্চ বিদ্যালয় (উঃ মাঃ) পূর্ব মেদিনীপুরের এক ঐতিহ্যবাহী সরকারি সাহায্যপ্রাপ্ত বালিকা বিদ্যালয়। পঞ্চম থেকে দ্বাদশ শ্রেণী পর্যন্ত বিজ্ঞান, কলা ও বৃত্তিমূলক শিক্ষায় আমরা অঙ্গীকারবদ্ধ।'
                : "Mahishadal Gayeswari Girls' High School (H.S.) is a premier government-sponsored girls' high school in Mahishadal, Purba Medinipur. Affiliated to WBBSE and WBCHSE, we foster holistic academic brilliance, scientific temper, and leadership skills from Class V to Class XII."}
            </p>

            <div className="hero-cta-group">
              <button onClick={() => setIsAdmissionModalOpen(true)} className="btn btn-rose">
                <i className="fa-solid fa-file-signature"></i> {currentLang === 'bn' ? 'অনলাইন ভর্তি ২০২৬' : 'Online Admission 2026'}
              </button>
              <a href="#facilities" className="btn btn-outline">
                <i className="fa-solid fa-compass"></i> {currentLang === 'bn' ? 'বিদ্যালয় চত্বর দেখুন' : 'Explore Campus'}
              </a>
              <button className="btn btn-gold" onClick={handleDownloadRoutine}>
                <i className="fa-solid fa-calendar-check"></i> {currentLang === 'bn' ? 'পরীক্ষার রুটিন' : 'Exam Routine'}
              </button>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-img-wrapper" id="tiltCard">
              <img src="/assets/school_hero.jpg" alt="Mahishadal Gayeswari Girls High School Building & Students" />
            </div>

            <div className="floating-stat-card stat-card-1">
              <div className="stat-icon-box">
                <i className="fa-solid fa-user-graduate"></i>
              </div>
              <div className="stat-info">
                <h4>{currentLang === 'bn' ? '১০০০+ ছাত্রী নিবন্ধিত' : '1,000+ Girls'}</h4>
                <p>{currentLang === 'bn' ? 'পঞ্চম থেকে দ্বাদশ শ্রেণী' : 'Classes V to XII Enrolled'}</p>
              </div>
            </div>

            <div className="floating-stat-card stat-card-2">
              <div className="stat-icon-box" style={{ background: '#D1FAE5', color: '#059669' }}>
                <i className="fa-solid fa-award"></i>
              </div>
              <div className="stat-info">
                <h4>{currentLang === 'bn' ? '১০০% পাস সাফল্য' : '100% Pass Rate'}</h4>
                <p>{currentLang === 'bn' ? 'মাধ্যমিক ও উচ্চ মাধ্যমিক' : 'WBBSE & WBCHSE Excellence'}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. LIVE NOTICE BOARD */}
      <section className="section-padding notice-section" id="notices">
        <div className="container">
          <div className="section-header">
            <span className="badge-tag"><i className="fa-solid fa-bell"></i> Live Notice Board</span>
            <h2 className="section-title">
              {currentLang === 'bn' ? 'অফিসিয়াল নোটিশ ও পরীক্ষার সময়সূচী' : 'Live Notice & Examination Board'}
            </h2>
            <p className="section-subtitle">
              {currentLang === 'bn' ? 'বিদ্যালয়ের ইউনিট টেস্ট, উচ্চ মাধ্যমিক প্রাক্টিক্যাল ও ছুটির তালিকা সংক্রান্ত আপডেট।' : 'Real-time updates regarding school exams, unit test routines, H.S. practicals, and holiday notifications.'}
            </p>
          </div>

          <div className="notice-board-container">
            <div className="notice-grid">
              {/* Notice 1 */}
              <div className="notice-card">
                <div>
                  <div className="notice-card-header">
                    <span className="notice-date"><i className="fa-regular fa-calendar"></i> 05 Sep 2026</span>
                    <span className="pulse-new"><i className="fa-solid fa-bolt"></i> NEW</span>
                  </div>
                  <h3 className="notice-title">2nd Summative Evaluation / Unit Test Routine (Classes V to X)</h3>
                  <p className="notice-desc">All guardians and students are informed that the 2nd Unit Test examinations will commence from 15th September 2026.</p>
                </div>
                <div className="notice-footer">
                  <span className="notice-category">WBBSE Routine</span>
                  <button
                    className="btn-pdf"
                    onClick={() => setActivePdfNotice({ title: '2nd Summative Unit Test Routine 2026', date: '05 Sep 2026', cat: 'WBBSE Routine' })}
                  >
                    <i className="fa-solid fa-download"></i> Download PDF
                  </button>
                </div>
              </div>

              {/* Notice 2 */}
              <div className="notice-card">
                <div>
                  <div className="notice-card-header">
                    <span className="notice-date"><i className="fa-regular fa-calendar"></i> 02 Sep 2026</span>
                    <span className="pulse-new"><i className="fa-solid fa-bolt"></i> NEW</span>
                  </div>
                  <h3 className="notice-title">Class XII H.S. Science Practical Laboratory Exam Schedule</h3>
                  <p className="notice-desc">Physics, Chemistry, Biology, and Geography practical examination timetable for Class XII Science and Arts students.</p>
                </div>
                <div className="notice-footer">
                  <span className="notice-category">WBCHSE Practical</span>
                  <button
                    className="btn-pdf"
                    onClick={() => setActivePdfNotice({ title: 'Class XII H.S. Practical Exam Schedule', date: '02 Sep 2026', cat: 'WBCHSE Practical' })}
                  >
                    <i className="fa-solid fa-download"></i> Download PDF
                  </button>
                </div>
              </div>

              {/* Notice 3 */}
              <div className="notice-card">
                <div>
                  <div className="notice-card-header">
                    <span className="notice-date"><i className="fa-regular fa-calendar"></i> 28 Aug 2026</span>
                  </div>
                  <h3 className="notice-title">Kanyashree K1 & K2 Application Renewal Notice</h3>
                  <p className="notice-desc">Eligible female students born between 01-04-2008 and 31-03-2009 must submit bank passbook & Aadhaar copies to the office desk.</p>
                </div>
                <div className="notice-footer">
                  <span className="notice-category">Scholarship</span>
                  <button
                    className="btn-pdf"
                    onClick={() => setActivePdfNotice({ title: 'Kanyashree K1 & K2 Application Renewal', date: '28 Aug 2026', cat: 'Scholarship' })}
                  >
                    <i className="fa-solid fa-download"></i> Download PDF
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. HEADMISTRESS'S DESK */}
      <section className="section-padding desk-section" id="desk">
        <div className="container desk-grid">
          <div className="desk-image-col">
            <div className="desk-img-frame">
              <img src="/assets/headmistress.jpg" alt="Smt. Kalyani Maity - Headmistress" />
            </div>
            <h3 className="desk-name">{currentLang === 'bn' ? 'শ্রীমতী কল্যাণী মাইতি' : 'Smt. Kalyani Maity'}</h3>
            <p className="desk-role">{currentLang === 'bn' ? 'প্রধান শিক্ষিকা, এম.এ, বি.এড' : 'Headmistress, M.A., B.Ed.'}</p>
          </div>

          <div>
            <i className="fa-solid fa-quote-left quote-icon"></i>
            <h2 className="desk-heading">{currentLang === 'bn' ? 'প্রধান শিক্ষিকার বার্তা' : "Headmistress's Desk"}</h2>
            <p className="desk-text">
              {currentLang === 'bn'
                ? 'মহিষাদল গায়েশ্বরী বালিকা উচ্চ বিদ্যালয়ে সকলকে স্বাগত জানাচ্ছি। ১৯৪৫ সাল থেকে এই বিদ্যালয় কন্যা শিক্ষার মশাল বহন করে চলেছে।'
                : "Welcome to Mahishadal Gayeswari Girls' High School (H.S.). Since 1945, our school has been dedicated to moulding young girls into confident, moral, and educated citizens."}
            </p>
            <p className="desk-text">
              {currentLang === 'bn'
                ? 'কন্যাশ্রী, সবুজ সাথী ও তরুণের স্বপ্ন প্রকল্পের সুবিধা পৌঁছে দিয়ে এবং আধুনিক আইসিটি ক্লাসের মাধ্যমে আমরা প্রতিটি ছাত্রীর ভবিষ্যৎ সুনিশ্চিত করছি।'
                : 'Through government welfare programs like Kanyashree, Sabooj Sathi, ICT Computer lab, and dedicated faculty, we ensure a safe, supportive, and vibrant learning atmosphere for every girl child.'}
            </p>
          </div>
        </div>
      </section>

      {/* 6. GOVT WELFARE SCHEMES */}
      <section className="section-padding welfare-section" id="welfare">
        <div className="container">
          <div className="section-header">
            <span className="badge-tag badge-gold"><i className="fa-solid fa-hand-holding-heart"></i> Student Empowerment</span>
            <h2 className="section-title">
              {currentLang === 'bn' ? 'পশ্চিমবঙ্গ সরকারের শিক্ষার্থী কল্যাণমূলক প্রকল্পসমূহ' : 'West Bengal Govt. Student Welfare Corner'}
            </h2>
            <p className="section-subtitle">
              {currentLang === 'bn' ? 'কন্যাশ্রী, সবুজ সাথী, তরুণের স্বপ্ন ও অন্যান্য বৃত্তির নির্দেশিকা।' : 'Direct guidance and application desk for state education welfare grants & scholarships.'}
            </p>
          </div>

          <div className="welfare-grid">
            {/* Scheme 1 */}
            <div className="welfare-card">
              <div>
                <div className="welfare-icon">
                  <i className="fa-solid fa-person-dress"></i>
                </div>
                <h3 className="welfare-title">Kanyashree Prakalpa (K1 & K2)</h3>
                <p className="welfare-desc">Annual stipend of ₹1,000 (K1) for girls aged 13-18 and one-time grant of ₹25,000 (K2) upon reaching 18 years to prevent child marriage and encourage higher education.</p>
              </div>
              <button className="btn-welfare-modal" onClick={() => setActiveWelfareModal('Kanyashree Prakalpa (K1 & K2)')}>
                <span>Eligibility & Application Rules</span> <i className="fa-solid fa-arrow-right"></i>
              </button>
            </div>

            {/* Scheme 2 */}
            <div className="welfare-card">
              <div>
                <div className="welfare-icon" style={{ background: '#FEF3C7', color: '#D97706' }}>
                  <i className="fa-solid fa-bicycle"></i>
                </div>
                <h3 className="welfare-title">Sabooj Sathi Bicycle Scheme</h3>
                <p className="welfare-desc">Free bicycles distributed to female students studying in Classes IX, X, XI, and XII to facilitate safe and hassle-free daily commute to school.</p>
              </div>
              <button className="btn-welfare-modal" onClick={() => setActiveWelfareModal('Sabooj Sathi Bicycle Scheme')}>
                <span>Bicycle Grant Details</span> <i className="fa-solid fa-arrow-right"></i>
              </button>
            </div>

            {/* Scheme 3 */}
            <div className="welfare-card">
              <div>
                <div className="welfare-icon" style={{ background: '#E0F2FE', color: '#0284C7' }}>
                  <i className="fa-solid fa-tablet-screen-button"></i>
                </div>
                <h3 className="welfare-title">Taruner Swapna (Class XII Tab)</h3>
                <p className="welfare-desc">Direct financial assistance of ₹10,000 transferred to Class XII Higher Secondary students' bank accounts for purchasing mobile tablets / smartphones for e-learning.</p>
              </div>
              <button className="btn-welfare-modal" onClick={() => setActiveWelfareModal('Taruner Swapna (Class XII Tab Grant)')}>
                <span>Tab Grant Details</span> <i className="fa-solid fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 7. BENTO GRID FACILITIES */}
      <section className="section-padding" id="facilities">
        <div className="container">
          <div className="section-header">
            <span className="badge-tag"><i className="fa-solid fa-border-all"></i> Modern Infrastructure</span>
            <h2 className="section-title">Campus Facilities Bento-Grid</h2>
            <p className="section-subtitle">Explore our state-of-the-art facilities designed for safe and comprehensive learning.</p>
          </div>

          <div className="bento-grid">
            <div className="bento-item bento-item-large">
              <img src="/assets/science_lab.jpg" alt="Science Laboratories" />
              <div className="bento-content">
                <h3 className="bento-title">Science Laboratories</h3>
                <p className="bento-desc">Fully equipped Physics, Chemistry, and Life Science practical laboratories for Class IX to XII practical classes.</p>
              </div>
            </div>

            <div className="bento-item">
              <img src="/assets/library.jpg" alt="School Library" />
              <div className="bento-content">
                <h3 className="bento-title">School Library</h3>
                <p className="bento-desc">Rich collection of text reference books, storybooks, and competitive exam guides.</p>
              </div>
            </div>

            <div className="bento-item">
              <img src="/assets/ncc_defense.jpg" alt="Sports & Physical Education" />
              <div className="bento-content">
                <h3 className="bento-title">Sports & Physical Fitness</h3>
                <p className="bento-desc">Annual sports, gymnastics, volleyball court, and physical education classes.</p>
              </div>
            </div>

            <div className="bento-item bento-item-large">
              <img src="/assets/school_hero.jpg" alt="ICT Computer Lab & Smart Classrooms" />
              <div className="bento-content">
                <h3 className="bento-title">ICT Computer Lab & Smart Classrooms</h3>
                <p className="bento-desc">Banglar Shiksha ICT computer center equipping female students with essential computer literacy.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. AUTO-SCROLLING EVENT REEL */}
      <section className="photo-reel-section" id="gallery">
        <div className="container" style={{ marginBottom: '2.5rem', textAlign: 'center' }}>
          <span className="badge-tag" style={{ background: 'rgba(255,255,255,0.1)', color: '#F59E0B', borderColor: 'rgba(245,158,11,0.3)' }}>
            <i className="fa-solid fa-camera"></i> Life at MGGHS
          </span>
          <h2 className="section-title" style={{ color: '#FFFFFF' }}>Auto-Scrolling Campus Event Reel</h2>
        </div>

        <div className="reel-track-wrapper">
          <div className="reel-track">
            <div className="reel-card">
              <img src="/assets/saraswati_puja.jpg" alt="Saraswati Puja Celebration" />
              <div className="reel-overlay">
                <h4 className="reel-title">Saraswati Puja Celebration</h4>
                <span className="reel-cat">Cultural Festival</span>
              </div>
            </div>

            <div className="reel-card">
              <img src="/assets/sports_day.jpg" alt="Annual Sports Meet" />
              <div className="reel-overlay">
                <h4 className="reel-title">Annual Athletic Track Meet</h4>
                <span className="reel-cat">Sports Fitness</span>
              </div>
            </div>

            <div className="reel-card">
              <img src="/assets/science_exhibition.jpg" alt="Science Exhibition" />
              <div className="reel-overlay">
                <h4 className="reel-title">Annual Science Exhibition</h4>
                <span className="reel-cat">STEM Working Models</span>
              </div>
            </div>

            <div className="reel-card">
              <img src="/assets/prize_distribution.jpg" alt="Annual Prize Ceremony" />
              <div className="reel-overlay">
                <h4 className="reel-title">Prize Distribution Ceremony</h4>
                <span className="reel-cat">Academic Excellence</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. ADMISSION INQUIRY FORM */}
      <section className="section-padding" id="admission">
        <div className="container">
          <div className="section-header">
            <span className="badge-tag"><i className="fa-solid fa-pen-to-square"></i> Parent Admission Desk</span>
            <h2 className="section-title">Admission Inquiry & Contact Desk</h2>
            <p className="section-subtitle">Submit your child's details for Class V new admission or Class XI Higher Secondary stream query.</p>
          </div>

          <div className="glass-card" style={{ padding: '2.5rem', maxWidth: '820px', margin: '0 auto' }}>
            <form onSubmit={handleFormSubmit}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.2rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', marginBottom: '0.4rem', color: '#334155' }}>
                    Student's Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ananya Das"
                    value={formStudent}
                    onChange={(e) => setFormStudent(e.target.value)}
                    style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '12px', border: '1px solid #CBD5E1', fontSize: '0.95rem' }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', marginBottom: '0.4rem', color: '#334155' }}>
                    Guardian Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Swapan Kumar Das"
                    value={formGuardian}
                    onChange={(e) => setFormGuardian(e.target.value)}
                    style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '12px', border: '1px solid #CBD5E1', fontSize: '0.95rem' }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', marginBottom: '0.4rem', color: '#334155' }}>
                    Class Seeking Admission For *
                  </label>
                  <select
                    required
                    value={formClass}
                    onChange={(e) => setFormClass(e.target.value)}
                    style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '12px', border: '1px solid #CBD5E1', fontSize: '0.95rem' }}
                  >
                    <option value="" disabled>Select Target Class</option>
                    <option value="Class V New Admission">Class V New Admission</option>
                    <option value="Class VI - IX Transfer Admission">Class VI - IX Transfer Admission</option>
                    <option value="Class XI Arts Stream (WBCHSE)">Class XI Arts Stream (WBCHSE)</option>
                    <option value="Class XI Science Stream (WBCHSE)">Class XI Science Stream (WBCHSE)</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', marginBottom: '0.4rem', color: '#334155' }}>
                    Parent Mobile / WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 9876543210"
                    pattern="[0-9]{10}"
                    value={formPhone}
                    onChange={(e) => setFormPhone(e.target.value)}
                    style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '12px', border: '1px solid #CBD5E1', fontSize: '0.95rem' }}
                  />
                </div>

                <div style={{ gridColumn: '1 / -1' }}>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', marginBottom: '0.4rem', color: '#334155' }}>
                    Residential Address & Village/P.O. *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Vill- Mahishadal, P.O.- Mahishadal, Purba Medinipur, PIN-721628"
                    value={formAddress}
                    onChange={(e) => setFormAddress(e.target.value)}
                    style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '12px', border: '1px solid #CBD5E1', fontSize: '0.95rem' }}
                  />
                </div>
              </div>

              <button type="submit" className="btn btn-rose" style={{ width: '100%', marginTop: '1.5rem' }}>
                <i className="fa-solid fa-paper-plane"></i> {currentLang === 'bn' ? 'আবেদন জমা দিন' : 'Submit Parent Inquiry'}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* 10. OFFICIAL FOOTER */}
      <footer className="site-footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <h3>
                {currentLang === 'bn' ? 'মহিষাদল গায়েশ্বরী বালিকা উচ্চ বিদ্যালয় (উঃ মাঃ)' : "Mahishadal Gayeswari Girls' High School (H.S.)"}
              </h3>
              <p>Government Sponsored Girls High School. Affiliated to West Bengal Board of Secondary Education (WBBSE) & West Bengal Council of Higher Secondary Education (WBCHSE).</p>
            </div>

            <div>
              <h4 className="footer-title">Quick Links</h4>
              <ul className="footer-links">
                <li><a href="#home">Home Page</a></li>
                <li><a href="#desk">HM Message</a></li>
                <li><a href="#notices">Notice Board</a></li>
                <li><a href="#welfare">Govt Welfare Schemes</a></li>
                <li><a href="#facilities">Campus Facilities</a></li>
              </ul>
            </div>

            <div>
              <h4 className="footer-title">Govt. Portals</h4>
              <ul className="footer-links">
                <li><a href="https://banglarshiksha.gov.in" target="_blank" rel="noopener noreferrer">Banglar Shiksha Portal</a></li>
                <li><a href="https://wbbse.wb.gov.in" target="_blank" rel="noopener noreferrer">WBBSE Official (Madhyamik)</a></li>
                <li><a href="https://wbchse.wb.gov.in" target="_blank" rel="noopener noreferrer">WBCHSE Official (H.S.)</a></li>
                <li><a href="https://wbkanyashree.gov.in" target="_blank" rel="noopener noreferrer">Kanyashree Prakalpa Portal</a></li>
              </ul>
            </div>

            <div>
              <h4 className="footer-title">School Contact</h4>
              <ul className="contact-list">
                <li>
                  <i className="fa-solid fa-location-dot"></i>
                  <span>Mahishadal Gayeswari Girls' High School (H.S.)<br />P.O. & P.S.- Mahishadal<br />Purba Medinipur, West Bengal - 721628</span>
                </li>
                <li>
                  <i className="fa-solid fa-phone"></i>
                  <span>+91 3228 240211</span>
                </li>
                <li>
                  <i className="fa-solid fa-envelope"></i>
                  <span>mgghschool1945@gmail.com</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <p>&copy; 2026 Mahishadal Gayeswari Girls' High School (H.S.). All Rights Reserved.</p>
            <p>Banglar Shiksha School ID: WB-1945-MGGHS | WBBSE: E1-042 | WBCHSE: 105084</p>
          </div>
        </div>
      </footer>

      {/* Floating Action Button */}
      <button className="floating-fab-btn" onClick={() => setIsAdmissionModalOpen(true)} title="Instant Admission Inquiry">
        <i className="fa-solid fa-paper-plane"></i>
        <span>Admission Query</span>
      </button>

      {/* Admin Authentication Login Modal */}
      <AdminLoginModal
        isOpen={isAdminLoginModalOpen}
        onClose={() => setIsAdminLoginModalOpen(false)}
        onLoginSuccess={(user) => setAdminUser(user)}
      />

      {/* PDF Modal */}
      {activePdfNotice && (
        <div className="modal-backdrop" style={{ display: 'flex' }}>
          <div className="modal-box" style={{ maxWidth: '640px' }}>
            <div className="modal-header">
              <h3 className="modal-title">{activePdfNotice.title}</h3>
              <button className="modal-close" onClick={() => setActivePdfNotice(null)}><i className="fa-solid fa-xmark"></i></button>
            </div>
            <div className="modal-body">
              <p style={{ fontWeight: 700, marginBottom: '0.5rem', color: '#0F172A' }}>MAHISHADAL GAYESWARI GIRLS' HIGH SCHOOL (H.S.)</p>
              <p style={{ color: '#64748B', fontSize: '0.85rem', marginBottom: '1rem' }}>Category: {activePdfNotice.cat} | Date: {activePdfNotice.date}</p>
              <p style={{ color: '#334155', lineHeight: 1.6 }}>Official circular document for Mahishadal Gayeswari Girls' High School (H.S.) students and guardians.</p>
              <div style={{ marginTop: '1.5rem', display: 'flex', justifyContent: 'flex-end', gap: '0.75rem' }}>
                <button className="btn btn-outline" onClick={() => setActivePdfNotice(null)} style={{ padding: '0.5rem 1.2rem', fontSize: '0.85rem' }}>Close</button>
                <button
                  className="btn btn-rose"
                  onClick={() => {
                    alert(`Downloading ${activePdfNotice.title}.pdf...`);
                    setActivePdfNotice(null);
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

      {/* Welfare Scheme Modal */}
      {activeWelfareModal && (
        <div className="modal-backdrop" style={{ display: 'flex' }}>
          <div className="modal-box" style={{ maxWidth: '640px' }}>
            <div className="modal-header">
              <h3 className="modal-title">{activeWelfareModal}</h3>
              <button className="modal-close" onClick={() => setActiveWelfareModal(null)}><i className="fa-solid fa-xmark"></i></button>
            </div>
            <div className="modal-body">
              <p style={{ fontWeight: 700, marginBottom: '0.5rem', color: '#0F172A' }}>WEST BENGAL GOVERNMENT WELFARE SCHEME GUIDANCE</p>
              <p style={{ color: '#334155', lineHeight: 1.6, marginTop: '1rem' }}>
                Students seeking benefit under {activeWelfareModal} should submit required Aadhaar copy, bank passbook xerox, and Banglar Shiksha ID details at the school office desk during working hours.
              </p>
              <div style={{ marginTop: '1.5rem', display: 'flex', justifyContent: 'flex-end' }}>
                <button className="btn btn-rose" onClick={() => setActiveWelfareModal(null)} style={{ padding: '0.5rem 1.2rem', fontSize: '0.85rem' }}>Understood</button>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
