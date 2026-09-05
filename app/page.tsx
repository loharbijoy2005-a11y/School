'use client';

import React, { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { NoticeBoard } from '../components/NoticeBoard';
import { BentoGrid } from '../components/BentoGrid';
import { SchemesCorner } from '../components/SchemesCorner';
import { EventGallery } from '../components/EventGallery';
import { AdmissionModal } from '../components/AdmissionModal';
import { Footer } from '../components/Footer';
import { Notice } from '../types';

export default function HomePage() {
  const [currentLang, setCurrentLang] = useState<'en' | 'bn'>('en');
  const [isAdmissionModalOpen, setIsAdmissionModalOpen] = useState(false);
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

  return (
    <div className={`min-h-screen ${currentLang === 'bn' ? 'lang-bn' : ''}`}>
      
      {/* 1. Glass Navbar & Infinite Ticker */}
      <Navbar
        currentLang={currentLang}
        onToggleLang={toggleLanguage}
        onOpenAdmissionModal={() => setIsAdmissionModalOpen(true)}
      />

      {/* 2. 3D Parallax Hero Showcase */}
      <Hero
        onOpenAdmissionModal={() => setIsAdmissionModalOpen(true)}
        onDownloadRoutine={handleDownloadRoutine}
      />

      {/* 3. Real-Time Filterable Notice Board */}
      <NoticeBoard onOpenPdfModal={handleOpenPdfModal} />

      {/* 4. Headmistress Desk Message */}
      <section id="desk" className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-4 text-center">
            <div className="w-56 h-56 mx-auto rounded-full p-1.5 bg-gradient-to-r from-rose-500 to-amber-500 shadow-2xl">
              <img
                src="assets/headmistress.jpg"
                alt="Headmistress Smt. Kalyani Maity"
                className="w-full h-full object-cover rounded-full border-4 border-slate-900"
              />
            </div>
            <h3 className="font-serif font-extrabold text-xl text-white mt-4">Smt. Kalyani Maity</h3>
            <p className="text-amber-400 text-sm font-bold">Headmistress, M.A., B.Ed.</p>
          </div>

          <div className="md:col-span-8 space-y-4">
            <h2 className="font-serif text-3xl md:text-4xl font-extrabold text-white">
              Headmistress's Desk
            </h2>
            <p className="text-slate-300 text-base leading-relaxed">
              Welcome to Mahishadal Gayeswari Girls' High School (H.S.). Since 1945, our school has been dedicated to moulding young girls into confident, moral, and educated citizens.
            </p>
            <p className="text-slate-300 text-base leading-relaxed">
              Through government welfare programs like Kanyashree, Sabooj Sathi, ICT Computer lab, and dedicated faculty, we ensure a safe, supportive, and vibrant learning atmosphere for every girl child.
            </p>
          </div>
        </div>
      </section>

      {/* 5. West Bengal Govt Welfare Schemes */}
      <SchemesCorner onOpenWelfareModal={handleOpenWelfareModal} />

      {/* 6. Bento Grid Facilities */}
      <BentoGrid />

      {/* 7. Auto-Scrolling Event Reel */}
      <EventGallery />

      {/* 8. Institutional Footer */}
      <Footer />

      {/* 9. Admission Modal Dialog */}
      <AdmissionModal
        isOpen={isAdmissionModalOpen}
        onClose={() => setIsAdmissionModalOpen(false)}
      />

      {/* 10. PDF Viewer Simulation Modal */}
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
