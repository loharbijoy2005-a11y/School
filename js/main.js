/**
 * MAHISHADAL GAYESWARI GIRLS' HIGH SCHOOL (H.S.)
 * Ultra-Modern Animation & JS Controller
 */

// Bilingual Translation Dictionary
const i18n = {
  en: {
    schoolName: "Mahishadal Gayeswari Girls' High School (H.S.)",
    schoolTagline: "Nurturing Knowledge, Discipline, and Girls' Empowerment Since 1945",
    phoneText: "+91 3228 240211",
    emailText: "mgghschool1945@gmail.com",
    schoolId: "Banglar Shiksha ID: WB-1945-MGGHS",
    indexBadge: "WBBSE: E1-042 | WBCHSE: 105084",
    langToggle: "বাংলা",
    navHome: "Home",
    navAbout: "HM Message",
    navAcademics: "Academics",
    navNotices: "Notice Board",
    navSchemes: "Govt Welfare Schemes",
    navFacilities: "Facilities",
    navGallery: "Gallery",
    btnApply: "New Admission Inquiry",
    heroTitle: "Empowering Young Minds, Inspiring Excellence Since 1945",
    heroDesc: "Mahishadal Gayeswari Girls' High School (H.S.) is a premier government-sponsored girls' high school in Mahishadal, Purba Medinipur. Affiliated to WBBSE and WBCHSE, we foster holistic academic brilliance, scientific temper, and leadership skills from Class V to Class XII.",
    btnAdmission: "Online Admission 2026",
    btnExplore: "Explore Campus",
    statClasses: "1000+ Girls Enrolled",
    statClassesSub: "Classes V to XII",
    statPass: "100% Madhyamik Pass",
    statPassSub: "WBBSE & WBCHSE Excellence",
    noticeHeaderTitle: "Live Notice & Examination Board",
    noticeHeaderSub: "Real-time updates regarding school exams, unit test routines, H.S. practicals, and holiday notifications.",
    deskTitle: "Headmistress's Desk",
    deskName: "Smt. Kalyani Maity",
    deskRole: "Headmistress, M.A., B.Ed.",
    deskMsg1: "Welcome to Mahishadal Gayeswari Girls' High School (H.S.). Since 1945, our school has been dedicated to moulding young girls into confident, moral, and educated citizens.",
    deskMsg2: "Through government welfare programs like Kanyashree, Sabooj Sathi, ICT Computer lab, and dedicated faculty, we ensure a safe, supportive, and vibrant learning atmosphere for every girl child.",
    welfareTitle: "West Bengal Govt. Student Welfare Corner",
    welfareSub: "Direct guidance and application desk for state education welfare grants & scholarships.",
    btnSubmitInquiry: "Submit Parent Inquiry"
  },
  bn: {
    schoolName: "মহিষাদল গায়েশ্বরী বালিকা উচ্চ বিদ্যালয় (উঃ মাঃ)",
    schoolTagline: "১৯৪৫ সাল থেকে জ্ঞান চর্চা, শৃঙ্খলা ও নারী শিক্ষার অগ্রদূত",
    phoneText: "+91 ৩২২৮ ২৪০২১১",
    emailText: "mgghschool1945@gmail.com",
    schoolId: "বাংলার শিক্ষা আইডি: WB-1945-MGGHS",
    indexBadge: "মধ্যশিক্ষা পর্ষদ: E1-042 | উচ্চ মাধ্যমিক: 105084",
    langToggle: "English",
    navHome: "মূল পাতা",
    navAbout: "প্রধান শিক্ষিকার বার্তা",
    navAcademics: "পাঠ্যক্রম",
    navNotices: "নোটিশ বোর্ড",
    navSchemes: "সরকারি প্রকল্প",
    navFacilities: "সুযোগ-সুবিধা",
    navGallery: "গ্যালারি",
    btnApply: "অনলাইন ভর্তি তথ্য",
    heroTitle: "১৯৪৫ সাল থেকে জ্ঞান চর্চা ও কন্যাদের সমৃদ্ধির পথপ্রদর্শক",
    heroDesc: "মহিষাদল গায়েশ্বরী বালিকা উচ্চ বিদ্যালয় (উঃ মাঃ) পূর্ব মেদিনীপুরের এক ঐতিহ্যবাহী সরকারি সাহায্যপ্রাপ্ত বালিকা বিদ্যালয়। পঞ্চম থেকে দ্বাদশ শ্রেণী পর্যন্ত বিজ্ঞান, কলা ও বৃত্তিমূলক শিক্ষায় আমরা অঙ্গীকারবদ্ধ।",
    btnAdmission: "অনলাইন ভর্তি ২০২৬",
    btnExplore: "বিদ্যালয় চত্বর দেখুন",
    statClasses: "১০০০+ ছাত্রী নিবন্ধিত",
    statClassesSub: "পঞ্চম থেকে দ্বাদশ শ্রেণী",
    statPass: "১০০% পাস সাফল্য",
    statPassSub: "মাধ্যমিক ও উচ্চ মাধ্যমিক",
    noticeHeaderTitle: "অফিসিয়াল নোটিশ ও পরীক্ষার সময়সূচী",
    noticeHeaderSub: "বিদ্যালয়ের ইউনিট টেস্ট, উচ্চ মাধ্যমিক প্রাক্টিক্যাল ও ছুটির তালিকা সংক্রান্ত আপডেট।",
    deskTitle: "প্রধান শিক্ষিকার বার্তা",
    deskName: "শ্রীমতী কল্যাণী মাইতি",
    deskRole: "প্রধান শিক্ষিকা, এম.এ, বি.এড",
    deskMsg1: "মহিষাদল গায়েশ্বরী বালিকা উচ্চ বিদ্যালয়ে সকলকে স্বাগত জানাচ্ছি। ১৯৪৫ সাল থেকে এই বিদ্যালয় কন্যা শিক্ষার মশাল বহন করে চলেছে।",
    deskMsg2: "কন্যাশ্রী, সবুজ সাথী ও তরুণের স্বপ্ন প্রকল্পের সুবিধা পৌঁছে দিয়ে এবং আধুনিক আইসিটি ক্লাসের মাধ্যমে আমরা প্রতিটি ছাত্রীর ভবিষ্যৎ সুনিশ্চিত করছি।",
    welfareTitle: "পশ্চিমবঙ্গ সরকারের শিক্ষার্থী কল্যাণমূলক প্রকল্পসমূহ",
    welfareSub: "কন্যাশ্রী, সবুজ সাথী, তরুণের স্বপ্ন ও অন্যান্য বৃত্তির নির্দেশিকা।",
    btnSubmitInquiry: "আবেদন জমা দিন"
  }
};

let currentLanguage = 'en';

document.addEventListener('DOMContentLoaded', () => {
  initScrollReveals();
  init3DTiltEffect();
  initNoticeBoard();
  initLanguageToggle();
  initFormHandler();
  initGalleryLightbox();
  initMobileMenu();
  initBackToTop();
});

// 1. Scroll-Triggered Reveal Engine (IntersectionObserver)
function initScrollReveals() {
  const revealElements = document.querySelectorAll('.reveal');
  const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  };

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  revealElements.forEach(el => revealObserver.observe(el));
}

// 2. Interactive 3D Card Parallax Tilt Effect
function init3DTiltEffect() {
  const tiltCard = document.getElementById('tiltCard');
  if (!tiltCard) return;

  const container = tiltCard.parentElement;

  container.addEventListener('mousemove', (e) => {
    const rect = container.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    const tiltX = (y / rect.height) * 16;
    const tiltY = -(x / rect.width) * 16;

    tiltCard.style.transform = `rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale(1.02)`;
  });

  container.addEventListener('mouseleave', () => {
    tiltCard.style.transform = `rotateX(0deg) rotateY(0deg) scale(1)`;
  });
}

// 3. Live Notice Board Filtering & Cross-Fade
function initNoticeBoard() {
  const tabBtns = document.querySelectorAll('.tab-btn');
  const searchInput = document.getElementById('noticeSearchInput');
  const noticeGrid = document.getElementById('noticeGrid');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      if (noticeGrid) noticeGrid.style.opacity = '0';

      setTimeout(() => {
        const filter = btn.dataset.filter;
        filterNotices(filter, searchInput ? searchInput.value : '');
        if (noticeGrid) noticeGrid.style.opacity = '1';
      }, 200);
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const activeTab = document.querySelector('.tab-btn.active');
      const filter = activeTab ? activeTab.dataset.filter : 'all';
      filterNotices(filter, e.target.value);
    });
  }
}

function filterNotices(category, query) {
  const noticeCards = document.querySelectorAll('.notice-card');
  const q = query.toLowerCase().trim();

  noticeCards.forEach(card => {
    const cardCat = card.dataset.category;
    const cardText = card.textContent.toLowerCase();

    const matchesCat = (category === 'all' || cardCat === category);
    const matchesSearch = (!q || cardText.includes(q));

    if (matchesCat && matchesSearch) {
      card.style.display = 'flex';
    } else {
      card.style.display = 'none';
    }
  });
}

// 4. Bilingual Language Switcher
function initLanguageToggle() {
  const langBtn = document.getElementById('langToggleBtn');
  if (!langBtn) return;

  langBtn.addEventListener('click', () => {
    currentLanguage = currentLanguage === 'en' ? 'bn' : 'en';
    document.body.classList.toggle('lang-bn', currentLanguage === 'bn');

    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
      const key = el.dataset.i18n;
      if (i18n[currentLanguage][key]) {
        el.textContent = i18n[currentLanguage][key];
      }
    });

    const langLabel = document.getElementById('currentLangLabel');
    if (langLabel) {
      langLabel.textContent = i18n[currentLanguage].langToggle;
    }
  });
}

// 5. Form Submission & Celebration Modal
function initFormHandler() {
  const form = document.getElementById('admissionForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('studentName').value;
    const guardian = document.getElementById('guardianName').value;
    const applyClass = document.getElementById('applyClass').value;
    const phone = document.getElementById('phoneNum').value;

    if (!name || !guardian || !applyClass || !phone) {
      alert('Please fill out all required fields.');
      return;
    }

    const refId = 'MGGHS-2026-' + Math.floor(1000 + Math.random() * 9000);

    const modalBody = document.getElementById('confirmationModalBody');
    if (modalBody) {
      modalBody.innerHTML = `
        <div style="text-align: center; padding: 1rem;">
          <div style="width: 80px; height: 80px; background: #FFE4E6; color: #F43F5E; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 1.5rem auto; font-size: 2.2rem; box-shadow: 0 0 25px rgba(244,63,94,0.4); animation: pulse-glow 2s infinite;">
            <i class="fa-solid fa-check-double"></i>
          </div>
          <h3 style="color: #0F172A; font-size: 1.45rem; margin-bottom: 0.5rem;">Admission Inquiry Received!</h3>
          <p style="color: #64748B; margin-bottom: 1.5rem;">Thank you, <strong>${guardian}</strong>. Inquiry for student <strong>${name}</strong> for class <strong>${applyClass}</strong> has been logged successfully.</p>
          <div style="background: #F8FAFC; border: 1px dashed #CBD5E1; padding: 1rem; border-radius: 12px; display: inline-block; width: 100%; margin-bottom: 1.5rem;">
            <span style="font-size: 0.85rem; color: #64748B; display: block;">School Helpdesk Tracking Code</span>
            <strong style="font-size: 1.35rem; color: #F43F5E; letter-spacing: 1px;">${refId}</strong>
          </div>
          <p style="font-size: 0.88rem; color: #475569;">Please visit the school office or call <strong>+91 3228 240211</strong> for counseling dates.</p>
        </div>
      `;
      openModal('confirmationModal');
      form.reset();
    }
  });
}

// 6. Government Welfare Scheme Modal Guide
function openWelfareModal(scheme) {
  const modalBody = document.getElementById('noticePdfModalBody');
  const modalTitle = document.getElementById('noticePdfModalTitle');
  if (!modalBody || !modalTitle) return;

  if (scheme === 'kanyashree') {
    modalTitle.textContent = "Kanyashree Prakalpa (K1 & K2 Grants)";
    modalBody.innerHTML = `
      <div style="line-height: 1.7; color: #334155;">
        <h4 style="color: #1E3A8A; font-size: 1.1rem; margin-bottom: 0.5rem;">West Bengal Kanyashree Scheme Details</h4>
        <p><strong>Eligibility:</strong> Unmarried female students aged 13-18 enrolled in Classes VIII to XII.</p>
        <br>
        <ul style="list-style: disc; padding-left: 1.5rem;">
          <li><strong>K1 Annual Stipend:</strong> ₹1,000 per year for students aged 13 to 18 years.</li>
          <li><strong>K2 One-Time Grant:</strong> ₹25,000 upon reaching 18 years of age and continuing studies.</li>
        </ul>
        <br>
        <a href="https://wbkanyashree.gov.in" target="_blank" class="btn btn-rose" style="display: inline-flex; width: 100%;">
          <i class="fa-solid fa-arrow-up-right-from-square"></i> Visit Kanyashree Official Portal
        </a>
      </div>
    `;
  } else if (scheme === 'sabooj_sathi') {
    modalTitle.textContent = "Sabooj Sathi (Free Bicycle Scheme)";
    modalBody.innerHTML = `
      <div style="line-height: 1.7; color: #334155;">
        <h4 style="color: #1E3A8A; font-size: 1.1rem; margin-bottom: 0.5rem;">Bicycle Distribution Scheme for School Students</h4>
        <p>Under Sabooj Sathi scheme, free bicycles are provided to female students studying in Class IX to XII to facilitate easy commuting to school.</p>
      </div>
    `;
  } else if (scheme === 'taruner_swapna') {
    modalTitle.textContent = "Taruner Swapna (Class XII Tab Scheme)";
    modalBody.innerHTML = `
      <div style="line-height: 1.7; color: #334155;">
        <h4 style="color: #1E3A8A; font-size: 1.1rem; margin-bottom: 0.5rem;">₹10,000 Financial Grant for Smartphone / Tablet</h4>
        <p>Class XII Higher Secondary students receive a direct bank transfer of ₹10,000 from the West Bengal Government to purchase digital learning devices.</p>
      </div>
    `;
  }
  openModal('noticePdfModal');
}

// 7. PDF Notice Viewer Simulation Modal
function openNoticePdfModal(title, date, category) {
  const modalBody = document.getElementById('noticePdfModalBody');
  const modalTitle = document.getElementById('noticePdfModalTitle');
  if (!modalBody || !modalTitle) return;

  modalTitle.textContent = title;
  modalBody.innerHTML = `
    <div style="background: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 12px; padding: 2rem;">
      <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 2px solid #F43F5E; padding-bottom: 1rem; margin-bottom: 1.5rem;">
        <div>
          <h4 style="color: #1E3A8A; font-size: 1.1rem; margin-bottom: 0.2rem;">MAHISHADAL GAYESWARI GIRLS' HIGH SCHOOL (H.S.)</h4>
          <span style="font-size: 0.8rem; color: #64748B;">Circular Ref: MGGHS/CIRCULAR/2026/N-${Math.floor(100+Math.random()*900)}</span>
        </div>
        <span style="background: #FFE4E6; color: #F43F5E; font-weight: 700; font-size: 0.8rem; padding: 0.3rem 0.8rem; border-radius: 20px;">${date}</span>
      </div>

      <div style="color: #334155; line-height: 1.7; margin-bottom: 2rem;">
        <p><strong>SUBJECT: ${title.toUpperCase()}</strong></p>
        <br>
        <p>This is an official administrative notice issued by order of Headmistress Smt. Kalyani Maity and the School Managing Committee of Mahishadal Gayeswari Girls' High School (H.S.).</p>
      </div>

      <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid #E2E8F0; padding-top: 1.2rem;">
        <span style="font-size: 0.85rem; color: #64748B;"><i class="fa-solid fa-file-pdf" style="color: #F43F5E;"></i> Format: Verified PDF (180 KB)</span>
        <button class="btn btn-rose" onclick="downloadNoticePdf('${title}')">
          <i class="fa-solid fa-download"></i> Download Notice PDF
        </button>
      </div>
    </div>
  `;
  openModal('noticePdfModal');
}

function downloadNoticePdf(title) {
  alert(`Downloading Notice Document: "${title}.pdf"... File downloaded successfully.`);
}

function downloadRoutine() {
  alert('Downloading Madhyamik & H.S. Exam Routine 2026 (PDF)...');
}

// 8. Gallery Lightbox Modal
function initGalleryLightbox() {
  const items = document.querySelectorAll('.gallery-item, .reel-card');
  items.forEach(item => {
    item.addEventListener('click', () => {
      const img = item.querySelector('img').src;
      const title = item.querySelector('.gallery-item-title, .reel-title').textContent;
      const cat = item.querySelector('.gallery-item-cat, .reel-cat').textContent;

      const modalBody = document.getElementById('lightboxModalBody');
      if (modalBody) {
        modalBody.innerHTML = `
          <div style="text-align: center;">
            <img src="${img}" style="max-height: 70vh; border-radius: 12px; width: 100%; object-fit: cover; margin-bottom: 1rem;">
            <h3 style="color: #FFFFFF; font-size: 1.3rem;">${title}</h3>
            <span style="color: #F59E0B; font-weight: 700; font-size: 0.9rem;">${cat}</span>
          </div>
        `;
        openModal('lightboxModal');
      }
    });
  });
}

// 9. Back To Top Rocket Button
function initBackToTop() {
  const backBtn = document.getElementById('backToTopBtn');
  if (!backBtn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      backBtn.classList.add('visible');
    } else {
      backBtn.classList.remove('visible');
    }
  });

  backBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// Modal Helpers
function openModal(id) {
  const modal = document.getElementById(id);
  if (modal) modal.classList.add('active');
}

function closeModal(id) {
  const modal = document.getElementById(id);
  if (modal) modal.classList.remove('active');
}

// Mobile Menu
function initMobileMenu() {
  const btn = document.getElementById('mobileMenuBtn');
  const links = document.getElementById('navLinks');
  if (btn && links) {
    btn.addEventListener('click', () => links.classList.toggle('active'));
  }
}
