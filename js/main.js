/**
 * MAHISHADAL GAYATRI BALIKA VIDYALAYA
 * Interactive JS Controller
 */

// Bilingual Translation Dictionary
const i18n = {
  en: {
    phoneText: "+91 3228 240211",
    emailText: "contact@mgbvschool.ac.in",
    schoolId: "Banglar Shiksha ID: WB-1954-MGBV",
    langToggle: "বাংলা",
    navHome: "Home",
    navAbout: "About Us",
    navAcademics: "Academics",
    navNotices: "Live Notices",
    navFacilities: "Facilities",
    navGallery: "Gallery",
    navContact: "Contact",
    btnApply: "Apply / Admission Query",
    heroBadge: "Empowering Female Education Since 1956",
    heroTitle: "Empowering Young Women Through Quality Education & Values",
    heroDesc: "Mahishadal Gayatri Balika Vidyalaya is a premier girls' institution in Purba Medinipur dedicated to fostering academic excellence, moral integrity, STEM literacy, and leadership skills in a safe and nurturing environment.",
    btnProspectus: "Download Prospectus 2026",
    btnViewNotices: "View Latest Notices",
    statStudents: "1200+ Female Students",
    statStudentsSub: "Classes V to XII",
    statPassRate: "100% Pass Rate",
    statPassRateSub: "Madhyamik & HS Excellence",
    statLegacy: "70+ Yrs Legacy",
    statLegacySub: "Estd. 1956 Mahishadal",
    noticeHeaderTitle: "Official Notice Board & Circulars",
    noticeHeaderSub: "Real-time updates regarding admissions, examination schedules, and government scholarship notifications.",
    deskTitle: "From the Headmistress's Desk",
    deskName: "Dr. Aditi Banerjee",
    deskRole: "Headmistress, M.Sc., Ph.D., B.Ed.",
    deskMsg1: "Welcome to Mahishadal Gayatri Balika Vidyalaya. Our institution has stood as a beacon of female empowerment, knowledge, and moral discipline for over seven decades.",
    deskMsg2: "We believe that educating a girl transforms an entire generation. Through state-of-the-art smart classrooms, advanced science laboratories, sports, and Kanyashree Prakalpa support, we groom our young women to excel in national competitive fields while staying rooted in our rich cultural values.",
    formTitle: "Interactive Admission Inquiry (Session 2026-27)",
    formSub: "Fill out the form below to submit an inquiry or book an admission counseling appointment.",
    btnSubmitInquiry: "Submit Admission Inquiry"
  },
  bn: {
    phoneText: "+91 ৩২২৮ ২৪০২১১",
    emailText: "contact@mgbvschool.ac.in",
    schoolId: "বাংলার শিক্ষা আইডি: WB-1954-MGBV",
    langToggle: "English",
    navHome: "মূল পাতা",
    navAbout: "আমাদের কথা",
    navAcademics: "শিক্ষা ব্যবস্থা",
    navNotices: "নোটিশ বোর্ড",
    navFacilities: "সুযোগ-সুবিধা",
    navGallery: "গ্যালারি",
    navContact: "যোগাযোগ",
    btnApply: "ভর্তির আবেদন",
    heroBadge: "১৯৫৬ সাল থেকে নারী শিক্ষার অগ্রদূত",
    heroTitle: "গুণগত শিক্ষা ও নৈতিক মূল্যে কন্যাদের ক্ষমতায়ন",
    heroDesc: "মহিষাদল গায়ত্রী বালিকা বিদ্যালয় পূর্ব মেদিনীপুরের এক অনন্য বালিকা শিক্ষাপ্রতিষ্ঠান। নিরাপদ ও অনুকূল পরিবেশে একাডেমিক শ্রেষ্ঠত্ব, কাণ্ডজ্ঞান, বিজ্ঞানচর্চা এবং নেতৃত্ব গঠনের লক্ষ্যে আমরা অঙ্গীকারবদ্ধ।",
    btnProspectus: "প্রোস্পেক্টাস ডাউনলোড ২০২৬",
    btnViewNotices: "সাম্প্রতিক নোটিশ দেখুন",
    statStudents: "১২০০+ ছাত্রী",
    statStudentsSub: "পঞ্চম থেকে দ্বাদশ শ্রেণী",
    statPassRate: "১০০% পাস সাফল্য",
    statPassRateSub: "মাধ্যমিক ও উচ্চ মাধ্যমিক",
    statLegacy: "৭০+ বছরের ঐতিহ্য",
    statLegacySub: "স্থাপিত ১৯৫৬, মহিষাদল",
    noticeHeaderTitle: "অফিসিয়াল নোটিশ ও বিজ্ঞপ্তি বোর্ড",
    noticeHeaderSub: "ভর্তি, পরীক্ষা সূচি এবং সরকারি কন্যাশ্রী বৃত্তির লাইভ আপডেট।",
    deskTitle: "প্রধান শিক্ষিকার বার্তা",
    deskName: "ডঃ অদিতি ব্যানার্জী",
    deskRole: "প্রধান শিক্ষিকা, এম.এসসি, পিএইচ.ডি, বি.এড",
    deskMsg1: "মহিষাদল গায়ত্রী বালিকা বিদ্যালয়ে আপনাদের আন্তরিক স্বাগত জানাই। বিগত সাত দশক ধরে আমাদের বিদ্যালয় নারী শিক্ষার আলো ছড়িয়ে আসছে।",
    deskMsg2: "আমরা বিশ্বাস করি একটি মেয়েকে শিক্ষিত করার অর্থ পুরো সমাজকে উন্নীত করা। আধুনিক স্মার্ট ক্লাসরুম, উন্নত বিজ্ঞান ল্যাব, খেলাধুলা ও কন্যাশ্রী প্রকল্পের সহায়তায় আমাদের ছাত্রীরা দেশ গঠনে অগ্রণী ভূমিকা পালন করছে।",
    formTitle: "অনলাইন ভর্তি অনুসন্ধান (শিক্ষাবর্ষ ২০২৬-২৭)",
    formSub: "ভর্তির তথ্য ও কাউন্সেলিং এর জন্য নিচের ফর্মটি পূরণ করুন।",
    btnSubmitInquiry: "জমা দিন"
  }
};

let currentLanguage = 'en';

document.addEventListener('DOMContentLoaded', () => {
  initNoticeBoard();
  initLanguageToggle();
  initFormHandler();
  initGalleryLightbox();
  initMobileMenu();
});

// Notice Board Filtering & Search
function initNoticeBoard() {
  const tabBtns = document.querySelectorAll('.tab-btn');
  const noticeCards = document.querySelectorAll('.notice-card');
  const searchInput = document.getElementById('noticeSearchInput');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      filterNotices(filter, searchInput ? searchInput.value : '');
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

// Bilingual Language Switcher
function initLanguageToggle() {
  const langBtn = document.getElementById('langToggleBtn');
  if (!langBtn) return;

  langBtn.addEventListener('click', () => {
    currentLanguage = currentLanguage === 'en' ? 'bn' : 'en';
    document.body.classList.toggle('lang-bn', currentLanguage === 'bn');
    
    // Update text elements marked with data-i18n
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

// Form Handler & Toast Modal
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

    const refId = 'MGBV-2026-' + Math.floor(1000 + Math.random() * 9000);
    
    // Show confirmation modal
    const modalBody = document.getElementById('confirmationModalBody');
    if (modalBody) {
      modalBody.innerHTML = `
        <div style="text-align: center; padding: 1rem;">
          <div style="width: 70px; height: 70px; background: #DEF7EC; color: #0E9F6E; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 1.5rem auto; font-size: 2rem;">
            <i class="fa-solid fa-check"></i>
          </div>
          <h3 style="color: #1E293B; font-size: 1.4rem; margin-bottom: 0.5rem;">Admission Inquiry Received!</h3>
          <p style="color: #64748B; margin-bottom: 1.5rem;">Thank you, <strong>${guardian}</strong>. We have received the admission query for student <strong>${name}</strong> for <strong>${applyClass}</strong>.</p>
          <div style="background: #F8FAFC; border: 1px dashed #CBD5E1; padding: 1rem; border-radius: 12px; display: inline-block; width: 100%; margin-bottom: 1.5rem;">
            <span style="font-size: 0.85rem; color: #64748B; display: block;">Reference Inquiry Tracking ID</span>
            <strong style="font-size: 1.3rem; color: #E11D48; letter-spacing: 1px;">${refId}</strong>
          </div>
          <p style="font-size: 0.88rem; color: #475569;">Our admission helpdesk officer will contact you on <strong>${phone}</strong> within 24 working hours.</p>
        </div>
      `;
      openModal('confirmationModal');
      form.reset();
    }
  });
}

// PDF Notice Viewer Simulation Modal
function openNoticePdfModal(title, date, category) {
  const modalBody = document.getElementById('noticePdfModalBody');
  const modalTitle = document.getElementById('noticePdfModalTitle');
  if (!modalBody || !modalTitle) return;

  modalTitle.textContent = title;
  modalBody.innerHTML = `
    <div style="background: #F8FAFC; border: 1fr solid #E2E8F0; border-radius: 12px; padding: 2rem; box-shadow: inset 0 2px 4px rgba(0,0,0,0.02);">
      <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 2px solid #E11D48; padding-bottom: 1rem; margin-bottom: 1.5rem;">
        <div>
          <h4 style="color: #1E293B; font-size: 1.1rem; margin-bottom: 0.2rem;">MAHISHADAL GAYATRI BALIKA VIDYALAYA</h4>
          <span style="font-size: 0.8rem; color: #64748B;">Official Administrative Circular Ref: MGBV/ADMIN/2026/N-${Math.floor(100+Math.random()*900)}</span>
        </div>
        <span style="background: #FFE4E6; color: #E11D48; font-weight: 700; font-size: 0.8rem; padding: 0.3rem 0.8rem; border-radius: 20px;">${date}</span>
      </div>

      <div style="color: #334155; line-height: 1.7; margin-bottom: 2rem;">
        <p><strong>SUBJECT: ${title.toUpperCase()}</strong></p>
        <br>
        <p>This is an official notice issued by order of the Headmistress and Managing Committee of Mahishadal Gayatri Balika Vidyalaya. All students, guardians, and teaching staff are hereby notified regarding the schedule and regulations details below.</p>
        <br>
        <ul style="list-style: disc; padding-left: 1.5rem;">
          <li>All concerned candidates must report to the school office with original documents.</li>
          <li>Kanyashree K1/K2 form validation desk remains open from 10:30 AM to 3:30 PM.</li>
          <li>For online fee receipts or admit card verification, visit Banglar Shiksha portal.</li>
        </ul>
        <br>
        <p><em>Issued in public interest by Administrative Helpdesk, MGBV Mahishadal.</em></p>
      </div>

      <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1fr solid #E2E8F0; padding-top: 1.2rem;">
        <span style="font-size: 0.85rem; color: #64748B;"><i class="fa-solid fa-file-pdf" style="color: #E11D48;"></i> Format: Verified PDF (245 KB)</span>
        <button class="btn btn-primary" onclick="downloadNoticePdf('${title}')">
          <i class="fa-solid fa-download"></i> Download Notice PDF
        </button>
      </div>
    </div>
  `;
  openModal('noticePdfModal');
}

function downloadNoticePdf(title) {
  alert(`Downloading document: "${title}.pdf"... File saved successfully.`);
}

// Prospectus Download Trigger
function downloadProspectus() {
  alert('Downloading Official School Prospectus 2026-27 (PDF, 4.2 MB)... Thank you!');
}

// Gallery Lightbox Modal
function initGalleryLightbox() {
  const items = document.querySelectorAll('.gallery-item');
  items.forEach(item => {
    item.addEventListener('click', () => {
      const img = item.querySelector('img').src;
      const title = item.querySelector('.gallery-item-title').textContent;
      const cat = item.querySelector('.gallery-item-cat').textContent;

      const modalBody = document.getElementById('lightboxModalBody');
      if (modalBody) {
        modalBody.innerHTML = `
          <div style="text-align: center;">
            <img src="${img}" style="max-height: 70vh; border-radius: 12px; width: 100%; object-fit: cover; margin-bottom: 1rem;">
            <h3 style="color: #1E293B; font-size: 1.3rem;">${title}</h3>
            <span style="color: #E11D48; font-weight: 600; font-size: 0.9rem;">${cat}</span>
          </div>
        `;
        openModal('lightboxModal');
      }
    });
  });
}

// Modal Helpers
function openModal(id) {
  const modal = document.getElementById(id);
  if (modal) {
    modal.classList.add('active');
  }
}

function closeModal(id) {
  const modal = document.getElementById(id);
  if (modal) {
    modal.classList.remove('active');
  }
}

// Mobile Navigation Menu Toggle
function initMobileMenu() {
  const btn = document.getElementById('mobileMenuBtn');
  const links = document.getElementById('navLinks');
  if (btn && links) {
    btn.addEventListener('click', () => {
      links.classList.toggle('active');
    });
  }
}
