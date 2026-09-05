import React, { useState } from 'react';
import {
  Bell,
  Image as ImageIcon,
  MessageSquare,
  HardDrive,
  Plus,
  Trash2,
  Pin,
  Upload,
  Download,
  Phone,
  MessageCircle,
  FileSpreadsheet,
  AlertTriangle,
  X,
  LogOut,
  Sparkles,
} from 'lucide-react';
import { Notice, GalleryItem, AdmissionInquiry, AdminUser } from '../types';

interface AdminDashboardProps {
  user: AdminUser;
  onLogout: () => void;
}

export const AdminDashboard: React.FC<AdminDashboardProps> = ({ user, onLogout }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'notices' | 'gallery' | 'inquiries'>('overview');
  
  // State for Emergency Notice Ticker
  const [emergencyTickerActive, setEmergencyTickerActive] = useState(true);

  // State for Notices
  const [notices, setNotices] = useState<Notice[]>([
    {
      id: '1',
      title: '2nd Summative Evaluation / Unit Test Routine (Classes V to X)',
      category: 'wbbse',
      publishDate: '05 Sep 2026',
      pdfUrl: '/notices/unit-test-routine-2026.pdf',
      isNew: true,
      isPinned: true,
      fileSize: '240 KB',
      description: 'All guardians and students are informed that the 2nd Unit Test examinations will commence from 15th September 2026.',
    },
    {
      id: '2',
      title: 'Class XII H.S. Science Practical Laboratory Exam Schedule',
      category: 'wbchse',
      publishDate: '02 Sep 2026',
      pdfUrl: '/notices/hs-practical-2026.pdf',
      isNew: true,
      isPinned: false,
      fileSize: '310 KB',
      description: 'Physics, Chemistry, Biology, and Geography practical examination timetable for Class XII Science and Arts students.',
    },
  ]);

  // State for Inquiries
  const [inquiries, setInquiries] = useState<AdmissionInquiry[]>([
    {
      id: '1',
      studentName: 'Ananya Das',
      guardianName: 'Swapan Kumar Das',
      targetClass: 'Class V New Admission',
      phoneNumber: '9876543210',
      address: 'Vill- Mahishadal, Purba Medinipur',
      submittedAt: '05 Sep 2026 14:30',
      status: 'pending',
    },
    {
      id: '2',
      studentName: 'Priya Roy',
      guardianName: 'Subrata Roy',
      targetClass: 'Class XI Science Stream',
      phoneNumber: '9434182910',
      address: 'P.O. Mahishadal, Purba Medinipur',
      submittedAt: '04 Sep 2026 11:15',
      status: 'contacted',
    },
  ]);

  // Form State for Adding Notice
  const [newNoticeTitle, setNewNoticeTitle] = useState('');
  const [newNoticeCategory, setNewNoticeCategory] = useState<'wbbse' | 'wbchse' | 'schemes' | 'holiday'>('wbbse');
  const [newNoticeDesc, setNewNoticeDesc] = useState('');

  // Media Manager State
  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>([
    { id: '1', title: 'Saraswati Puja Celebration', category: 'Cultural', imageUrl: '/assets/saraswati_puja.jpg', assignedSection: 'events' },
    { id: '2', title: 'Annual Athletic Meet', category: 'Sports', imageUrl: '/assets/sports_day.jpg', assignedSection: 'events' },
  ]);
  const [newPhotoTitle, setNewPhotoTitle] = useState('');
  const [newPhotoSection, setNewPhotoSection] = useState<'hero' | 'events' | 'facilities'>('events');

  const handleDeleteNotice = (id: string) => {
    setNotices(notices.filter((n) => n.id !== id));
  };

  const handleAddNotice = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newNoticeTitle || !newNoticeDesc) return;
    const item: Notice = {
      id: str(Date.now()),
      title: newNoticeTitle,
      category: newNoticeCategory,
      publishDate: '05 Sep 2026',
      pdfUrl: '/notices/sample.pdf',
      isNew: true,
      isPinned: false,
      fileSize: '210 KB',
      description: newNoticeDesc,
    };
    setNotices([item, ...notices]);
    setNewNoticeTitle('');
    setNewNoticeDesc('');
    alert('New official notice created and published to front page!');
  };

  const handleAddPhoto = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPhotoTitle) return;
    const item: GalleryItem = {
      id: str(Date.now()),
      title: newPhotoTitle,
      category: newPhotoSection.toUpperCase(),
      imageUrl: '/assets/science_exhibition.jpg',
      assignedSection: newPhotoSection,
    };
    setGalleryItems([item, ...galleryItems]);
    setNewPhotoTitle('');
    alert(`Photo "${newPhotoTitle}" uploaded and assigned to ${newPhotoSection.toUpperCase()}!`);
  };

  const str = (val: any) => String(val);

  const exportInquiriesCSV = () => {
    const csvContent =
      'data:text/csv;charset=utf-8,' +
      'Student Name,Guardian Name,Target Class,Phone Number,Address,Submitted At,Status\n' +
      inquiries
        .map(
          (i) =>
            `"${i.studentName}","${i.guardianName}","${i.targetClass}","${i.phoneNumber}","${i.address}","${i.submittedAt}","${i.status}"`
        )
        .join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', 'MGGHS_Admission_Inquiries_2026.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 p-4 md:p-8 font-sans">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Top Admin Header Bar */}
        <div className="flex flex-wrap justify-between items-center bg-slate-900 border border-slate-800 p-6 rounded-2xl shadow-xl gap-4">
          <div className="flex items-center gap-4">
            <img src="/assets/school_logo.jpg" alt="Logo" className="w-12 h-12 rounded-full border-2 border-rose-500" />
            <div>
              <h1 className="font-serif font-extrabold text-2xl text-white">
                Headmistress & Admin Control Center
              </h1>
              <p className="text-xs text-rose-400 font-bold uppercase tracking-wider">
                Authenticated as: {user.username} ({user.role})
              </p>
            </div>
          </div>

          <button
            onClick={onLogout}
            className="bg-rose-600/20 hover:bg-rose-600 text-rose-400 hover:text-white border border-rose-500/40 px-4 py-2 rounded-xl text-sm font-bold flex items-center gap-2 transition-all"
          >
            <LogOut className="w-4 h-4" />
            <span>Logout Dashboard</span>
          </button>
        </div>

        {/* Dashboard Navigation Tabs */}
        <div className="flex flex-wrap gap-2 border-b border-slate-800 pb-3">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-5 py-2.5 rounded-xl font-bold text-sm transition-all ${
              activeTab === 'overview' ? 'bg-rose-600 text-white shadow-lg' : 'bg-slate-900 text-slate-400 hover:bg-slate-800'
            }`}
          >
            Overview HUD
          </button>

          <button
            onClick={() => setActiveTab('notices')}
            className={`px-5 py-2.5 rounded-xl font-bold text-sm transition-all ${
              activeTab === 'notices' ? 'bg-rose-600 text-white shadow-lg' : 'bg-slate-900 text-slate-400 hover:bg-slate-800'
            }`}
          >
            Notices Manager ({notices.length})
          </button>

          <button
            onClick={() => setActiveTab('gallery')}
            className={`px-5 py-2.5 rounded-xl font-bold text-sm transition-all ${
              activeTab === 'gallery' ? 'bg-rose-600 text-white shadow-lg' : 'bg-slate-900 text-slate-400 hover:bg-slate-800'
            }`}
          >
            Media & Gallery ({galleryItems.length})
          </button>

          <button
            onClick={() => setActiveTab('inquiries')}
            className={`px-5 py-2.5 rounded-xl font-bold text-sm transition-all ${
              activeTab === 'inquiries' ? 'bg-rose-600 text-white shadow-lg' : 'bg-slate-900 text-slate-400 hover:bg-slate-800'
            }`}
          >
            Parent Inquiries ({inquiries.length})
          </button>
        </div>

        {/* TAB 1: OVERVIEW HUD */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            
            {/* Quick Metrics Cards Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-2">
                <div className="w-10 h-10 rounded-lg bg-rose-500/20 text-rose-400 flex items-center justify-center">
                  <Bell className="w-5 h-5" />
                </div>
                <h3 className="text-3xl font-extrabold text-white">{notices.length}</h3>
                <p className="text-xs text-slate-400 font-bold uppercase">Active Notices Published</p>
              </div>

              <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-2">
                <div className="w-10 h-10 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center">
                  <ImageIcon className="w-5 h-5" />
                </div>
                <h3 className="text-3xl font-extrabold text-white">{galleryItems.length}</h3>
                <p className="text-xs text-slate-400 font-bold uppercase">Gallery Media Photos</p>
              </div>

              <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-2">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <h3 className="text-3xl font-extrabold text-white">{inquiries.length}</h3>
                <p className="text-xs text-slate-400 font-bold uppercase">Parent Inquiries Logged</p>
              </div>

              <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-2">
                <div className="w-10 h-10 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center">
                  <HardDrive className="w-5 h-5" />
                </div>
                <h3 className="text-3xl font-extrabold text-white">42.8 MB</h3>
                <p className="text-xs text-slate-400 font-bold uppercase">Storage Used (Cloud)</p>
              </div>
            </div>

            {/* Emergency Notice Push Toggle Box */}
            <div className="bg-gradient-to-r from-rose-950/60 via-slate-900 to-indigo-950/60 border border-rose-500/40 p-6 rounded-2xl flex flex-wrap justify-between items-center gap-4">
              <div>
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-rose-400" />
                  Emergency Announcement Ticker Push
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Pushes immediate breaking notifications to the front-page horizontal ticker bar.
                </p>
              </div>

              <button
                onClick={() => setEmergencyTickerActive(!emergencyTickerActive)}
                className={`px-6 py-2.5 rounded-full font-bold text-sm transition-all ${
                  emergencyTickerActive ? 'bg-rose-600 text-white shadow-lg' : 'bg-slate-800 text-slate-400'
                }`}
              >
                {emergencyTickerActive ? 'STATUS: TICKER LIVE ACTIVE' : 'TICKER PAUSED'}
              </button>
            </div>

          </div>
        )}

        {/* TAB 2: NOTICES MANAGER (CRUD) */}
        {activeTab === 'notices' && (
          <div className="grid md:grid-cols-12 gap-8">
            
            {/* Create Notice Form */}
            <div className="md:col-span-5 bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-4">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Plus className="w-5 h-5 text-rose-400" />
                Publish New Official Notice
              </h3>

              <form onSubmit={handleAddNotice} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase mb-1">Notice Title *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Class X Board Test Exam Schedule 2026"
                    value={newNoticeTitle}
                    onChange={(e) => setNewNoticeTitle(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2 text-sm text-white focus:outline-none focus:border-rose-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase mb-1">Target Category *</label>
                  <select
                    value={newNoticeCategory}
                    onChange={(e: any) => setNewNoticeCategory(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2 text-sm text-white focus:outline-none focus:border-rose-500"
                  >
                    <option value="wbbse">WBBSE Secondary (Classes V-X)</option>
                    <option value="wbchse">WBCHSE Higher Secondary (Classes XI-XII)</option>
                    <option value="schemes">Government Schemes / Scholarships</option>
                    <option value="holiday">Holiday Declaration</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase mb-1">PDF Attachment (Drag & Drop)</label>
                  <div className="border-2 border-dashed border-slate-800 rounded-xl p-4 text-center cursor-pointer hover:border-rose-500 transition-colors">
                    <Upload className="w-6 h-6 text-slate-500 mx-auto mb-1" />
                    <span className="text-xs text-slate-400 font-bold block">Drag PDF document here (Max 5MB)</span>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase mb-1">Description / Instructions *</label>
                  <textarea
                    required
                    rows={3}
                    placeholder="Write details for students and guardians..."
                    value={newNoticeDesc}
                    onChange={(e) => setNewNoticeDesc(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2 text-sm text-white focus:outline-none focus:border-rose-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-rose-600 hover:bg-rose-700 text-white font-bold py-2.5 rounded-xl shadow-lg transition-colors text-sm"
                >
                  Publish Notice Immediately
                </button>
              </form>
            </div>

            {/* Existing Notices Data Table */}
            <div className="md:col-span-7 bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-4 overflow-x-auto">
              <h3 className="text-lg font-bold text-white mb-2">Live Notices Directory</h3>
              <table className="w-full text-left text-xs text-slate-300">
                <thead className="bg-slate-950 text-slate-400 uppercase border-b border-slate-800">
                  <tr>
                    <th className="p-3">Title</th>
                    <th className="p-3">Category</th>
                    <th className="p-3">Date</th>
                    <th className="p-3">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800">
                  {notices.map((n) => (
                    <tr key={n.id} className="hover:bg-slate-800/50">
                      <td className="p-3 font-bold text-white max-w-[200px] truncate">{n.title}</td>
                      <td className="p-3 uppercase text-rose-400 font-bold">{n.category}</td>
                      <td className="p-3 text-slate-400">{n.publishDate}</td>
                      <td className="p-3 flex items-center gap-2">
                        <button
                          onClick={() => handleDeleteNotice(n.id)}
                          className="text-rose-400 hover:text-rose-300 p-1"
                          title="Delete Notice"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

          </div>
        )}

        {/* TAB 3: MEDIA & GALLERY MANAGER */}
        {activeTab === 'gallery' && (
          <div className="space-y-6">
            
            {/* Upload Photo Form */}
            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-4">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-amber-400" />
                Upload New Image Asset & Assign Section
              </h3>

              <form onSubmit={handleAddPhoto} className="grid md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase mb-1">Image Caption / Title *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rabindra Jayanti Celebrations"
                    value={newPhotoTitle}
                    onChange={(e) => setNewPhotoTitle(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2 text-sm text-white focus:outline-none focus:border-rose-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase mb-1">Target Portal Section *</label>
                  <select
                    value={newPhotoSection}
                    onChange={(e: any) => setNewPhotoSection(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2 text-sm text-white focus:outline-none focus:border-rose-500"
                  >
                    <option value="events">Events & Cultural Reel</option>
                    <option value="hero">Hero Showcase Slider</option>
                    <option value="facilities">Facilities Bento Grid</option>
                  </select>
                </div>

                <div className="flex items-end">
                  <button
                    type="submit"
                    className="w-full bg-amber-500 hover:bg-amber-600 text-white font-bold py-2.5 rounded-xl transition-colors text-sm"
                  >
                    Upload & Assign Media
                  </button>
                </div>
              </form>
            </div>

            {/* Gallery Media Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {galleryItems.map((g) => (
                <div key={g.id} className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden group relative">
                  <img src={g.imageUrl} alt={g.title} className="w-full h-40 object-cover" />
                  <div className="p-3">
                    <h4 className="font-bold text-white text-xs truncate">{g.title}</h4>
                    <span className="text-[10px] text-amber-400 font-bold uppercase">{g.assignedSection}</span>
                  </div>
                </div>
              ))}
            </div>

          </div>
        )}

        {/* TAB 4: ADMISSION INQUIRIES & WHATSAPP DATA VIEWER */}
        {activeTab === 'inquiries' && (
          <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-6">
            
            <div className="flex flex-wrap justify-between items-center gap-4 border-b border-slate-800 pb-4">
              <div>
                <h3 className="text-lg font-bold text-white">Parent Admission Queries Directory</h3>
                <p className="text-xs text-slate-400">Direct office clerk portal for contacting parents via WhatsApp or exporting data.</p>
              </div>

              <button
                onClick={exportInquiriesCSV}
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-4 py-2 rounded-xl text-xs flex items-center gap-2 transition-colors shadow-md"
              >
                <FileSpreadsheet className="w-4 h-4" />
                <span>Export to CSV / Excel</span>
              </button>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs text-slate-300">
                <thead className="bg-slate-950 text-slate-400 uppercase border-b border-slate-800">
                  <tr>
                    <th className="p-3">Student Name</th>
                    <th className="p-3">Guardian Name</th>
                    <th className="p-3">Target Class</th>
                    <th className="p-3">Parent Contact</th>
                    <th className="p-3">Address</th>
                    <th className="p-3">WhatsApp Chat</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800">
                  {inquiries.map((i) => (
                    <tr key={i.id} className="hover:bg-slate-800/50">
                      <td className="p-3 font-bold text-white">{i.studentName}</td>
                      <td className="p-3">{i.guardianName}</td>
                      <td className="p-3 font-bold text-rose-400">{i.targetClass}</td>
                      <td className="p-3 font-mono">{i.phoneNumber}</td>
                      <td className="p-3 text-slate-400 max-w-[180px] truncate">{i.address}</td>
                      <td className="p-3">
                        <a
                          href={`https://wa.me/91${i.phoneNumber}?text=Hello%20${encodeURIComponent(i.guardianName)},%20regarding%20the%20admission%20inquiry%20for%20${encodeURIComponent(i.studentName)}%20at%20Mahishadal%20Gayeswari%20Girls%20High%20School.`}
                          target="_blank"
                          rel="noreferrer"
                          className="bg-emerald-500/20 hover:bg-emerald-500 text-emerald-400 hover:text-white border border-emerald-500/40 px-3 py-1 rounded-lg text-xs font-bold inline-flex items-center gap-1.5 transition-colors"
                        >
                          <MessageCircle className="w-3.5 h-3.5" />
                          <span>Chat WhatsApp</span>
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

          </div>
        )}

      </div>
    </div>
  );
};
