import React from 'react';
import { Notice } from '../types';

interface HeroNoticeOverlayProps {
  onOpenAdmissionModal: () => void;
  onDownloadRoutine: () => void;
  onOpenPdfModal: (notice: Notice) => void;
}

export const HeroNoticeOverlay: React.FC<HeroNoticeOverlayProps> = ({
  onOpenAdmissionModal,
  onDownloadRoutine,
  onOpenPdfModal,
}) => {
  const recentNotices: Notice[] = [
    {
      id: '1',
      title: '2nd Summative Evaluation / Unit Test Routine (Classes V to X)',
      category: 'wbbse',
      publishDate: '05 Sep 2026',
      pdfUrl: '/notices/unit-test-routine-2026.pdf',
      isNew: true,
      fileSize: '240 KB',
      description: '2nd Unit Test examinations commence from 15th September 2026.',
    },
    {
      id: '2',
      title: 'Class XII H.S. Science Practical Laboratory Exam Schedule',
      category: 'wbchse',
      publishDate: '02 Sep 2026',
      pdfUrl: '/notices/hs-practical-2026.pdf',
      isNew: true,
      fileSize: '310 KB',
      description: 'Physics, Chemistry, Biology & Geography practical timetable.',
    },
    {
      id: '3',
      title: 'Kanyashree K1 & K2 Application Renewal Desk Notice',
      category: 'schemes',
      publishDate: '28 Aug 2026',
      pdfUrl: '/notices/kanyashree-renewal-2026.pdf',
      isNew: false,
      fileSize: '190 KB',
      description: 'Eligible female students must submit bank passbook & Aadhaar copies.',
    },
    {
      id: '4',
      title: 'Puja Vacation & Festival Holiday Declaration 2026',
      category: 'holiday',
      publishDate: '25 Aug 2026',
      pdfUrl: '/notices/puja-holidays-2026.pdf',
      isNew: false,
      fileSize: '150 KB',
      description: 'Durga Puja & Lakshmi Puja festival holiday list declaration.',
    },
  ];

  return (
    <section className="hero-section" id="home">
      <div className="container hero-grid">
        <div className="hero-content">
          <div className="badge-tag">
            <i className="fa-solid fa-crown"></i>
            <span>Government Sponsored H.S. School | Estd. 1945</span>
          </div>
          
          <h1 className="hero-title">
            Empowering Young Minds, <span>Inspiring Excellence</span> Since 1945
          </h1>
          
          <p className="hero-description">
            Mahishadal Gayeswari Girls' High School (H.S.) is a premier government-sponsored girls' high school in Mahishadal, Purba Medinipur. Affiliated to WBBSE and WBCHSE, we foster holistic academic brilliance, scientific temper, and leadership skills from Class V to Class XII.
          </p>

          <div className="hero-cta-group">
            <button onClick={onOpenAdmissionModal} className="btn btn-rose">
              <i className="fa-solid fa-file-signature"></i> Online Admission 2026
            </button>
            <a href="#facilities" className="btn btn-outline">
              <i className="fa-solid fa-compass"></i> Explore Campus
            </a>
            <button onClick={onDownloadRoutine} className="btn btn-gold">
              <i className="fa-solid fa-calendar-check"></i> Exam Routine
            </button>
          </div>
        </div>

        {/* Hero Visual Collage & Notice Widget */}
        <div className="hero-visual">
          <div className="hero-img-wrapper" id="tiltCard">
            <img src="/assets/school_hero.jpg" alt="Mahishadal Gayeswari Girls High School Building & Students" />
          </div>

          {/* Floating Stat Card 1 */}
          <div className="floating-stat-card stat-card-1">
            <div className="stat-icon-box">
              <i className="fa-solid fa-user-graduate"></i>
            </div>
            <div className="stat-info">
              <h4>1,000+ Girls</h4>
              <p>Classes V to XII Enrolled</p>
            </div>
          </div>

          {/* Floating Stat Card 2 */}
          <div className="floating-stat-card stat-card-2">
            <div className="stat-icon-box" style={{ background: '#D1FAE5', color: '#059669' }}>
              <i className="fa-solid fa-award"></i>
            </div>
            <div className="stat-info">
              <h4>100% Pass Rate</h4>
              <p>WBBSE & WBCHSE Excellence</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
