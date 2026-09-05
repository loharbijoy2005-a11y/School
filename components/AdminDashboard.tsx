import React, { useState, useEffect } from 'react';
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
  Users,
  UserPlus,
  Edit2,
  CheckCircle,
  Megaphone,
} from 'lucide-react';
import { Notice, GalleryItem, AdmissionInquiry, AdminUser, FacultyMember, StaffCategory } from '../types';

interface AdminDashboardProps {
  user: AdminUser;
  onLogout: () => void;
  facultyList: FacultyMember[];
  onAddFaculty: (staff: FacultyMember) => void;
  onDeleteFaculty: (id: string) => void;
  marqueeText?: string;
  onUpdateMarquee?: (text: string) => void;
}

export const AdminDashboard: React.FC<AdminDashboardProps> = ({
  user,
  onLogout,
  facultyList,
  onAddFaculty,
  onDeleteFaculty,
  marqueeText = '',
  onUpdateMarquee,
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'notices' | 'ticker' | 'gallery' | 'inquiries' | 'staff'>('overview');
  
  // Marquee Ticker State
  const [liveTickerInput, setLiveTickerInput] = useState(
    marqueeText || "🚨 ONLINE ADMISSION OPEN FOR CLASS V TO XI (SESSION 2026-27) | WBBSE & WBCHSE 2ND UNIT TEST ROUTINE PUBLISHED | KANYASHREE K1 & K2 GRANT DESK ACTIVE"
  );

  // Notices State with localStorage Persistence
  const [notices, setNotices] = useState<Notice[]>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('mgghs_notices');
      if (saved) {
        try { return JSON.parse(saved); } catch (e) {}
      }
    }
    return [
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
    ];
  });

  // Save notices to localStorage
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('mgghs_notices', JSON.stringify(notices));
    }
  }, [notices]);

  // Inquiries State
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
  const [newNoticeCategory, setNewNoticeCategory] = useState<'wbbse' | 'wbchse' | 'schemes' | 'holiday' | 'tender'>('wbbse');
  const [newNoticeDesc, setNewNoticeDesc] = useState('');

  // Media Manager State
  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>([
    { id: '1', title: 'Saraswati Puja Celebration', category: 'Cultural', imageUrl: '/assets/saraswati_puja.jpg' },
    { id: '2', title: 'Annual Athletic Meet', category: 'Sports', imageUrl: '/assets/sports_day.jpg' },
  ]);
  const [newPhotoTitle, setNewPhotoTitle] = useState('');
  const [newPhotoCategory, setNewPhotoCategory] = useState('Cultural');
  const [newPhotoUrl, setNewPhotoUrl] = useState('');

  // Staff Roster Form State
  const [staffCategoryFilter, setStaffCategoryFilter] = useState<StaffCategory | 'all'>('all');
  const [newStaffName, setNewStaffName] = useState('');
  const [newStaffDesignation, setNewStaffDesignation] = useState('');
  const [newStaffQualification, setNewStaffQualification] = useState('');
  const [newStaffSubject, setNewStaffSubject] = useState('');
  const [newStaffDepartment, setNewStaffDepartment] = useState<'Languages' | 'Science & Math' | 'Social Sciences' | 'IT & Sports' | 'Office & Library' | 'Support & Security'>('Languages');
  const [newStaffCategory, setNewStaffCategory] = useState<StaffCategory>('teaching');
  const [newStaffGender, setNewStaffGender] = useState<'Sir' | 'Madam'>('Madam');
  const [newStaffImageUrl, setNewStaffImageUrl] = useState('');
  const [newStaffBio, setNewStaffBio] = useState('');

  const handleDeleteNotice = (id: string) => {
    setNotices(notices.filter((n) => n.id !== id));
  };

  const handleAddNotice = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newNoticeTitle) return;
    const newNotice: Notice = {
      id: Date.now().toString(),
      title: newNoticeTitle,
      category: newNoticeCategory,
      publishDate: new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }),
      pdfUrl: '#',
      isNew: true,
      isPinned: false,
      fileSize: '180 KB',
      description: newNoticeDesc || newNoticeTitle,
    };
    setNotices([newNotice, ...notices]);
    setNewNoticeTitle('');
    setNewNoticeDesc('');
    alert('Notice published & saved to localStorage persistence successfully!');
  };

  const handleSaveTicker = (e: React.FormEvent) => {
    e.preventDefault();
    if (onUpdateMarquee) {
      onUpdateMarquee(liveTickerInput);
    }
    if (typeof window !== 'undefined') {
      localStorage.setItem('mgghs_marquee', liveTickerInput);
    }
    alert('Live breaking announcement ticker updated on homepage successfully!');
  };

  const handleAddPhotoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPhotoTitle || !newPhotoUrl) return;
    const item: GalleryItem = {
      id: Date.now().toString(),
      title: newPhotoTitle,
      category: newPhotoCategory,
      imageUrl: newPhotoUrl,
    };
    setGalleryItems([item, ...galleryItems]);
    setNewPhotoTitle('');
    setNewPhotoUrl('');
    alert('Photo published to campus gallery reel!');
  };

  const handleAddStaffSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newStaffName || !newStaffDesignation) {
      alert('Please fill in Staff Name and Designation.');
      return;
    }

    const newStaff: FacultyMember = {
      id: Date.now().toString(),
      name: newStaffName,
      designation: newStaffDesignation,
      qualification: newStaffQualification || 'Graduate / Qualified',
      subject: newStaffSubject || newStaffDesignation,
      department: newStaffDepartment,
      category: newStaffCategory,
      gender: newStaffGender,
      imageUrl: newStaffImageUrl || undefined,
      bio: newStaffBio || `Welcome message from ${newStaffName}, ${newStaffDesignation} at Mahishadal Gayeswari Girls' High School (H.S.).`,
    };

    onAddFaculty(newStaff);
    setNewStaffName('');
    setNewStaffDesignation('');
    setNewStaffQualification('');
    setNewStaffSubject('');
    setNewStaffImageUrl('');
    setNewStaffBio('');
    alert(`Successfully added ${newStaffName} to ${newStaffCategory.toUpperCase()} staff roster!`);
  };

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

  const filteredAdminFaculty = staffCategoryFilter === 'all'
    ? facultyList
    : facultyList.filter(f => f.category === staffCategoryFilter);

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-slate-800 p-4 md:p-8 font-sans">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Top Admin Header Bar */}
        <div className="flex flex-wrap justify-between items-center bg-white border border-[#E8DFD0] p-6 rounded-2xl shadow-sm gap-4">
          <div className="flex items-center gap-4">
            <img src="/assets/school_logo.jpg" alt="Logo" className="w-12 h-12 rounded-full border-2 border-[#9D174D] p-0.5 bg-white" />
            <div>
              <h1 className="font-serif font-extrabold text-2xl text-[#1E293B]">
                Headmistress & Admin Control Console
              </h1>
              <p className="text-xs text-[#9D174D] font-bold uppercase tracking-wider">
                Authenticated as: {user.username} ({user.role}) | localStorage Persisted
              </p>
            </div>
          </div>

          <button
            onClick={onLogout}
            className="bg-rose-50 hover:bg-rose-100 text-[#9D174D] border border-rose-300 px-4 py-2 rounded-xl text-sm font-bold flex items-center gap-2 transition-all shadow-xs"
          >
            <LogOut className="w-4 h-4" />
            <span>Logout Dashboard</span>
          </button>
        </div>

        {/* Dashboard Navigation Tabs */}
        <div className="flex flex-wrap gap-2 border-b border-[#E8DFD0] pb-3">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-5 py-2.5 rounded-xl font-bold text-sm transition-all ${
              activeTab === 'overview' ? 'bg-[#9D174D] text-white shadow-xs' : 'bg-white text-slate-700 hover:bg-slate-100 border border-[#E8DFD0]'
            }`}
          >
            Overview HUD
          </button>

          <button
            onClick={() => setActiveTab('notices')}
            className={`px-5 py-2.5 rounded-xl font-bold text-sm transition-all ${
              activeTab === 'notices' ? 'bg-[#9D174D] text-white shadow-xs' : 'bg-white text-slate-700 hover:bg-slate-100 border border-[#E8DFD0]'
            }`}
          >
            Notice Manager ({notices.length})
          </button>

          <button
            onClick={() => setActiveTab('ticker')}
            className={`px-5 py-2.5 rounded-xl font-bold text-sm transition-all ${
              activeTab === 'ticker' ? 'bg-[#9D174D] text-white shadow-xs' : 'bg-white text-slate-700 hover:bg-slate-100 border border-[#E8DFD0]'
            }`}
          >
            Live Marquee Controller
          </button>

          <button
            onClick={() => setActiveTab('staff')}
            className={`px-5 py-2.5 rounded-xl font-bold text-sm transition-all ${
              activeTab === 'staff' ? 'bg-[#9D174D] text-white shadow-xs' : 'bg-white text-slate-700 hover:bg-slate-100 border border-[#E8DFD0]'
            }`}
          >
            Staff & Faculty Roster ({facultyList.length})
          </button>

          <button
            onClick={() => setActiveTab('gallery')}
            className={`px-5 py-2.5 rounded-xl font-bold text-sm transition-all ${
              activeTab === 'gallery' ? 'bg-[#9D174D] text-white shadow-xs' : 'bg-white text-slate-700 hover:bg-slate-100 border border-[#E8DFD0]'
            }`}
          >
            Photo Gallery Uploader ({galleryItems.length})
          </button>

          <button
            onClick={() => setActiveTab('inquiries')}
            className={`px-5 py-2.5 rounded-xl font-bold text-sm transition-all ${
              activeTab === 'inquiries' ? 'bg-[#9D174D] text-white shadow-xs' : 'bg-white text-slate-700 hover:bg-slate-100 border border-[#E8DFD0]'
            }`}
          >
            Parent Inquiries ({inquiries.length})
          </button>
        </div>

        {/* TAB 1: OVERVIEW HUD */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-white p-6 rounded-2xl border border-[#E8DFD0] space-y-2 shadow-xs">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-500 font-bold uppercase">Staff & Teachers</span>
                  <Users className="w-5 h-5 text-[#9D174D]" />
                </div>
                <div className="text-3xl font-extrabold text-[#1E293B]">{facultyList.length}</div>
                <p className="text-[11px] text-slate-500">Active Sirs, Madams & Office Roster</p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-[#E8DFD0] space-y-2 shadow-xs">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-500 font-bold uppercase">Active Notices</span>
                  <Bell className="w-5 h-5 text-[#B45309]" />
                </div>
                <div className="text-3xl font-extrabold text-[#1E293B]">{notices.length}</div>
                <p className="text-[11px] text-slate-500">Published WBBSE & WBCHSE circulars</p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-[#E8DFD0] space-y-2 shadow-xs">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-500 font-bold uppercase">Admission Leads</span>
                  <MessageSquare className="w-5 h-5 text-[#047857]" />
                </div>
                <div className="text-3xl font-extrabold text-[#1E293B]">{inquiries.length}</div>
                <p className="text-[11px] text-slate-500">Parent admission forms submitted</p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-[#E8DFD0] space-y-2 shadow-xs">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-500 font-bold uppercase">Gallery Media</span>
                  <ImageIcon className="w-5 h-5 text-blue-600" />
                </div>
                <div className="text-3xl font-extrabold text-[#1E293B]">{galleryItems.length}</div>
                <p className="text-[11px] text-slate-500">High-res campus event photos</p>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: MARQUEE TICKER CONTROLLER */}
        {activeTab === 'ticker' && (
          <div className="bg-white p-6 md:p-8 rounded-2xl border border-[#E8DFD0] space-y-6 shadow-xs">
            <div className="flex items-center gap-2 border-b border-[#E8DFD0] pb-4">
              <Megaphone className="w-5 h-5 text-[#B45309]" />
              <h3 className="font-serif font-bold text-lg text-[#1E293B]">
                Live Homepage Breaking Marquee Announcement Controller
              </h3>
            </div>

            <form onSubmit={handleSaveTicker} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                  Marquee Announcement Text (Appears in continuous header ticker)
                </label>
                <textarea
                  rows={3}
                  required
                  value={liveTickerInput}
                  onChange={(e) => setLiveTickerInput(e.target.value)}
                  className="w-full bg-[#FAF7F2] border border-[#E8DFD0] rounded-xl p-3 text-xs text-[#9D174D] font-bold focus:outline-none focus:border-[#9D174D]"
                />
              </div>

              <button
                type="submit"
                className="bg-[#B45309] hover:bg-[#92400E] text-white font-extrabold px-6 py-2.5 rounded-xl text-xs shadow-md transition-all"
              >
                Save & Update Live Marquee Text
              </button>
            </form>
          </div>
        )}

        {/* TAB 3: STAFF & FACULTY ROSTER */}
        {activeTab === 'staff' && (
          <div className="space-y-8">
            <div className="bg-white p-6 md:p-8 rounded-2xl border border-[#E8DFD0] space-y-6 shadow-xs">
              <div className="flex items-center gap-2 border-b border-[#E8DFD0] pb-4">
                <UserPlus className="w-5 h-5 text-[#9D174D]" />
                <h3 className="font-serif font-bold text-lg text-[#1E293B]">
                  Add New Teacher or Staff Member
                </h3>
              </div>

              <form onSubmit={handleAddStaffSubmit} className="grid md:grid-cols-3 gap-4 text-xs">
                <div>
                  <label className="block font-bold text-slate-700 uppercase mb-1">Full Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Smt. Sumita Sen / Sri Bikram Ray"
                    value={newStaffName}
                    onChange={(e) => setNewStaffName(e.target.value)}
                    className="w-full bg-[#FAF7F2] border border-[#E8DFD0] rounded-xl px-3 py-2 text-slate-900 focus:outline-none focus:border-[#9D174D]"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 uppercase mb-1">Designation</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Assistant Teacher / Head Clerk / Peon"
                    value={newStaffDesignation}
                    onChange={(e) => setNewStaffDesignation(e.target.value)}
                    className="w-full bg-[#FAF7F2] border border-[#E8DFD0] rounded-xl px-3 py-2 text-slate-900 focus:outline-none focus:border-[#9D174D]"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 uppercase mb-1">Qualification</label>
                  <input
                    type="text"
                    placeholder="e.g. M.Sc. (Physics), B.Ed. / B.Com"
                    value={newStaffQualification}
                    onChange={(e) => setNewStaffQualification(e.target.value)}
                    className="w-full bg-[#FAF7F2] border border-[#E8DFD0] rounded-xl px-3 py-2 text-slate-900 focus:outline-none focus:border-[#9D174D]"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 uppercase mb-1">Subject / Work Scope</label>
                  <input
                    type="text"
                    placeholder="e.g. Mathematics / Banglar Shiksha / Library"
                    value={newStaffSubject}
                    onChange={(e) => setNewStaffSubject(e.target.value)}
                    className="w-full bg-[#FAF7F2] border border-[#E8DFD0] rounded-xl px-3 py-2 text-slate-900 focus:outline-none focus:border-[#9D174D]"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 uppercase mb-1">Staff Category</label>
                  <select
                    value={newStaffCategory}
                    onChange={(e) => setNewStaffCategory(e.target.value as StaffCategory)}
                    className="w-full bg-[#FAF7F2] border border-[#E8DFD0] rounded-xl px-3 py-2 text-slate-900 focus:outline-none focus:border-[#9D174D]"
                  >
                    <option value="teaching">Teaching Faculty (Sirs & Madams)</option>
                    <option value="non_teaching">Non-Teaching Staff (Office & Clerical)</option>
                    <option value="support_group_d">Support & Group-D Staff</option>
                  </select>
                </div>

                <div>
                  <label className="block font-bold text-slate-700 uppercase mb-1">Department Wing</label>
                  <select
                    value={newStaffDepartment}
                    onChange={(e) => setNewStaffDepartment(e.target.value as any)}
                    className="w-full bg-[#FAF7F2] border border-[#E8DFD0] rounded-xl px-3 py-2 text-slate-900 focus:outline-none focus:border-[#9D174D]"
                  >
                    <option value="Languages">Languages (Bengali/English/Sanskrit)</option>
                    <option value="Science & Math">Science & Math</option>
                    <option value="Social Sciences">Social Sciences (History/Geo/Phil)</option>
                    <option value="IT & Sports">IT & Sports</option>
                    <option value="Office & Library">Office & Library</option>
                    <option value="Support & Security">Support & Security</option>
                  </select>
                </div>

                <div className="md:col-span-3 flex justify-end">
                  <button
                    type="submit"
                    className="bg-[#9D174D] hover:bg-[#881337] text-white font-bold px-6 py-2.5 rounded-xl text-xs flex items-center gap-2 shadow-md transition-all"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Save & Publish Staff Member</span>
                  </button>
                </div>
              </form>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#E8DFD0] space-y-4 shadow-xs">
              <h3 className="font-serif font-bold text-lg text-[#1E293B]">
                Active Staff Roster ({filteredAdminFaculty.length})
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs text-slate-800">
                  <thead className="bg-[#FAF7F2] text-slate-700 font-bold uppercase border-b border-[#E8DFD0]">
                    <tr>
                      <th className="p-3">Staff Name</th>
                      <th className="p-3">Designation</th>
                      <th className="p-3">Qualification</th>
                      <th className="p-3">Subject</th>
                      <th className="p-3 text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#E8DFD0]">
                    {filteredAdminFaculty.map((staff) => (
                      <tr key={staff.id} className="hover:bg-[#FAF7F2]">
                        <td className="p-3 font-bold text-[#1E293B]">{staff.name}</td>
                        <td className="p-3 text-[#B45309] font-medium">{staff.designation}</td>
                        <td className="p-3 text-slate-600">{staff.qualification}</td>
                        <td className="p-3">{staff.subject}</td>
                        <td className="p-3 text-right">
                          <button
                            onClick={() => onDeleteFaculty(staff.id)}
                            className="bg-rose-100 hover:bg-rose-200 text-[#9D174D] p-1.5 rounded-lg transition-colors"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: NOTICES MANAGER */}
        {activeTab === 'notices' && (
          <div className="space-y-6">
            <form onSubmit={handleAddNotice} className="bg-white p-6 rounded-2xl border border-[#E8DFD0] space-y-4 shadow-xs text-xs">
              <h3 className="font-serif font-bold text-base text-[#1E293B]">Publish New Notice (Saved to localStorage)</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  required
                  placeholder="Notice Title"
                  value={newNoticeTitle}
                  onChange={(e) => setNewNoticeTitle(e.target.value)}
                  className="w-full bg-[#FAF7F2] border border-[#E8DFD0] rounded-xl px-3 py-2 text-slate-900"
                />
                <select
                  value={newNoticeCategory}
                  onChange={(e) => setNewNoticeCategory(e.target.value as any)}
                  className="w-full bg-[#FAF7F2] border border-[#E8DFD0] rounded-xl px-3 py-2 text-slate-900"
                >
                  <option value="wbbse">WBBSE Madhyamik</option>
                  <option value="wbchse">WBCHSE Higher Secondary</option>
                  <option value="schemes">Kanyashree / Schemes</option>
                  <option value="holiday">Holiday / Event</option>
                  <option value="tender">Tender / SMC</option>
                </select>
              </div>
              <textarea
                placeholder="Description / Notice Content"
                value={newNoticeDesc}
                onChange={(e) => setNewNoticeDesc(e.target.value)}
                className="w-full bg-[#FAF7F2] border border-[#E8DFD0] rounded-xl px-3 py-2 text-slate-900 h-20"
              />
              <button type="submit" className="bg-[#9D174D] text-white font-bold px-4 py-2 rounded-xl text-xs">
                Publish Notice
              </button>
            </form>

            <div className="bg-white p-6 rounded-2xl border border-[#E8DFD0] space-y-3 shadow-xs">
              <h3 className="font-serif font-bold text-base text-[#1E293B]">Published Notices ({notices.length})</h3>
              {notices.map((notice) => (
                <div key={notice.id} className="flex items-center justify-between bg-[#FAF7F2] p-4 rounded-xl border border-[#E8DFD0] text-xs">
                  <div>
                    <h4 className="font-bold text-[#1E293B]">{notice.title}</h4>
                    <p className="text-slate-600 text-[11px]">{notice.publishDate} | {notice.category.toUpperCase()}</p>
                  </div>
                  <button onClick={() => handleDeleteNotice(notice.id)} className="text-[#9D174D] p-2 hover:bg-rose-100 rounded-lg">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 5: PHOTO GALLERY UPLOADER */}
        {activeTab === 'gallery' && (
          <div className="space-y-6">
            <form onSubmit={handleAddPhotoSubmit} className="bg-white p-6 rounded-2xl border border-[#E8DFD0] space-y-4 shadow-xs text-xs">
              <h3 className="font-serif font-bold text-base text-[#1E293B]">Upload / Add New Photo to Gallery</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <input
                  type="text"
                  required
                  placeholder="Photo Title (e.g. Sports Day 2026)"
                  value={newPhotoTitle}
                  onChange={(e) => setNewPhotoTitle(e.target.value)}
                  className="w-full bg-[#FAF7F2] border border-[#E8DFD0] rounded-xl px-3 py-2 text-slate-900"
                />
                <select
                  value={newPhotoCategory}
                  onChange={(e) => setNewPhotoCategory(e.target.value)}
                  className="w-full bg-[#FAF7F2] border border-[#E8DFD0] rounded-xl px-3 py-2 text-slate-900"
                >
                  <option value="Cultural">Cultural</option>
                  <option value="Sports">Sports</option>
                  <option value="Empowerment">Empowerment</option>
                  <option value="Academics">Academics</option>
                  <option value="Ceremony">Ceremony</option>
                </select>
                <input
                  type="text"
                  required
                  placeholder="Image URL (/assets/... or https://...)"
                  value={newPhotoUrl}
                  onChange={(e) => setNewPhotoUrl(e.target.value)}
                  className="w-full bg-[#FAF7F2] border border-[#E8DFD0] rounded-xl px-3 py-2 text-slate-900"
                />
              </div>
              <button type="submit" className="bg-[#9D174D] text-white font-bold px-4 py-2 rounded-xl text-xs">
                Upload to Gallery Reel
              </button>
            </form>

            <div className="bg-white p-6 rounded-2xl border border-[#E8DFD0] space-y-4 shadow-xs">
              <h3 className="font-serif font-bold text-base text-[#1E293B]">Campus Gallery Media ({galleryItems.length})</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {galleryItems.map((item) => (
                  <div key={item.id} className="bg-[#FAF7F2] p-3 rounded-xl border border-[#E8DFD0] space-y-2">
                    <img src={item.imageUrl} alt={item.title} className="w-full h-32 object-cover rounded-lg" />
                    <h4 className="font-bold text-xs text-[#1E293B]">{item.title}</h4>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 6: INQUIRIES */}
        {activeTab === 'inquiries' && (
          <div className="bg-white p-6 rounded-2xl border border-[#E8DFD0] space-y-4 shadow-xs">
            <div className="flex justify-between items-center">
              <h3 className="font-serif font-bold text-base text-[#1E293B]">Parent Admission Inquiries</h3>
              <button onClick={exportInquiriesCSV} className="bg-[#047857] text-white font-bold px-3 py-1.5 rounded-lg text-xs flex items-center gap-1.5">
                <FileSpreadsheet className="w-3.5 h-3.5" /> Export to CSV
              </button>
            </div>
            <div className="space-y-3">
              {inquiries.map((inq) => (
                <div key={inq.id} className="bg-[#FAF7F2] p-4 rounded-xl border border-[#E8DFD0] text-xs space-y-1">
                  <div className="flex justify-between font-bold text-[#1E293B]">
                    <span>{inq.studentName} (Guardian: {inq.guardianName})</span>
                    <span className="text-[#B45309]">{inq.targetClass}</span>
                  </div>
                  <p className="text-slate-600">Phone: {inq.phoneNumber} | Address: {inq.address}</p>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
