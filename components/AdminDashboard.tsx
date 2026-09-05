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
  Users,
  UserPlus,
  Edit2,
  CheckCircle,
} from 'lucide-react';
import { Notice, GalleryItem, AdmissionInquiry, AdminUser, FacultyMember, StaffCategory } from '../types';

interface AdminDashboardProps {
  user: AdminUser;
  onLogout: () => void;
  facultyList: FacultyMember[];
  onAddFaculty: (staff: FacultyMember) => void;
  onDeleteFaculty: (id: string) => void;
}

export const AdminDashboard: React.FC<AdminDashboardProps> = ({
  user,
  onLogout,
  facultyList,
  onAddFaculty,
  onDeleteFaculty,
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'notices' | 'gallery' | 'inquiries' | 'staff'>('overview');
  
  // Emergency Notice Ticker
  const [emergencyTickerActive, setEmergencyTickerActive] = useState(true);

  // Notices State
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
  const [newNoticeCategory, setNewNoticeCategory] = useState<'wbbse' | 'wbchse' | 'schemes' | 'holiday'>('wbbse');
  const [newNoticeDesc, setNewNoticeDesc] = useState('');

  // Media Manager State
  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>([
    { id: '1', title: 'Saraswati Puja Celebration', category: 'Cultural', imageUrl: '/assets/saraswati_puja.jpg', assignedSection: 'events' },
    { id: '2', title: 'Annual Athletic Meet', category: 'Sports', imageUrl: '/assets/sports_day.jpg', assignedSection: 'events' },
  ]);

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
    alert('Notice published successfully!');
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
            onClick={() => setActiveTab('staff')}
            className={`px-5 py-2.5 rounded-xl font-bold text-sm transition-all ${
              activeTab === 'staff' ? 'bg-rose-600 text-white shadow-lg' : 'bg-slate-900 text-slate-400 hover:bg-slate-800'
            }`}
          >
            Staff & Faculty Roster ({facultyList.length})
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
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-400 font-bold uppercase">Staff & Teachers</span>
                  <Users className="w-5 h-5 text-rose-500" />
                </div>
                <div className="text-3xl font-extrabold text-white">{facultyList.length}</div>
                <p className="text-[11px] text-slate-500">Active Teachers & Support Roster</p>
              </div>

              <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-400 font-bold uppercase">Active Notices</span>
                  <Bell className="w-5 h-5 text-amber-400" />
                </div>
                <div className="text-3xl font-extrabold text-white">{notices.length}</div>
                <p className="text-[11px] text-slate-500">Published WBBSE & WBCHSE circulars</p>
              </div>

              <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-400 font-bold uppercase">Admission Leads</span>
                  <MessageSquare className="w-5 h-5 text-emerald-400" />
                </div>
                <div className="text-3xl font-extrabold text-white">{inquiries.length}</div>
                <p className="text-[11px] text-slate-500">Parent admission inquiry forms</p>
              </div>

              <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-400 font-bold uppercase">Gallery Media</span>
                  <ImageIcon className="w-5 h-5 text-blue-400" />
                </div>
                <div className="text-3xl font-extrabold text-white">{galleryItems.length}</div>
                <p className="text-[11px] text-slate-500">High-res event photographs</p>
              </div>
            </div>

            <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 flex items-center justify-between">
              <div>
                <h3 className="font-bold text-white text-base">Emergency Ticker Control</h3>
                <p className="text-xs text-slate-400">Toggle live ticker marquee banner on header navigation.</p>
              </div>
              <button
                onClick={() => setEmergencyTickerActive(!emergencyTickerActive)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  emergencyTickerActive ? 'bg-emerald-600 text-white' : 'bg-slate-800 text-slate-400'
                }`}
              >
                {emergencyTickerActive ? 'LIVE TICKER ACTIVE' : 'TICKER PAUSED'}
              </button>
            </div>
          </div>
        )}

        {/* TAB 2: STAFF & FACULTY ROSTER MANAGEMENT */}
        {activeTab === 'staff' && (
          <div className="space-y-8">
            
            {/* Add New Staff Form */}
            <div className="bg-slate-900 p-6 md:p-8 rounded-2xl border border-slate-800 space-y-6">
              <div className="flex items-center gap-2 border-b border-slate-800 pb-4">
                <UserPlus className="w-5 h-5 text-rose-500" />
                <h3 className="font-serif font-bold text-lg text-white">
                  Add New Teacher or Staff Member
                </h3>
              </div>

              <form onSubmit={handleAddStaffSubmit} className="grid md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase mb-1">Full Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Smt. Sumita Sen / Sri Bikram Ray"
                    value={newStaffName}
                    onChange={(e) => setNewStaffName(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-rose-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase mb-1">Designation</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Assistant Teacher / Head Clerk / Peon"
                    value={newStaffDesignation}
                    onChange={(e) => setNewStaffDesignation(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-rose-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase mb-1">Qualification</label>
                  <input
                    type="text"
                    placeholder="e.g. M.Sc. (Physics), B.Ed. / B.Com"
                    value={newStaffQualification}
                    onChange={(e) => setNewStaffQualification(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-rose-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase mb-1">Subject / Work Scope</label>
                  <input
                    type="text"
                    placeholder="e.g. Mathematics / Banglar Shiksha / Library"
                    value={newStaffSubject}
                    onChange={(e) => setNewStaffSubject(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-rose-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase mb-1">Staff Category</label>
                  <select
                    value={newStaffCategory}
                    onChange={(e) => setNewStaffCategory(e.target.value as StaffCategory)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-rose-500"
                  >
                    <option value="teaching">Teaching Faculty (Sirs & Madams)</option>
                    <option value="non_teaching">Non-Teaching Staff (Office & Clerical)</option>
                    <option value="support_group_d">Support & Group-D Staff</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase mb-1">Department Wing</label>
                  <select
                    value={newStaffDepartment}
                    onChange={(e) => setNewStaffDepartment(e.target.value as any)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-rose-500"
                  >
                    <option value="Languages">Languages (Bengali/English/Sanskrit)</option>
                    <option value="Science & Math">Science & Math</option>
                    <option value="Social Sciences">Social Sciences (History/Geo/Phil)</option>
                    <option value="IT & Sports">IT & Sports</option>
                    <option value="Office & Library">Office & Library</option>
                    <option value="Support & Security">Support & Security</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase mb-1">Honorific / Gender</label>
                  <select
                    value={newStaffGender}
                    onChange={(e) => setNewStaffGender(e.target.value as 'Sir' | 'Madam')}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-rose-500"
                  >
                    <option value="Madam">Madam</option>
                    <option value="Sir">Sir</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase mb-1">Image URL (Optional)</label>
                  <input
                    type="text"
                    placeholder="/assets/teacher.jpg or https://..."
                    value={newStaffImageUrl}
                    onChange={(e) => setNewStaffImageUrl(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-rose-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase mb-1">Welcome Quote / Bio</label>
                  <input
                    type="text"
                    placeholder="Brief intro or welcome message..."
                    value={newStaffBio}
                    onChange={(e) => setNewStaffBio(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-rose-500"
                  />
                </div>

                <div className="md:col-span-3 flex justify-end">
                  <button
                    type="submit"
                    className="bg-rose-600 hover:bg-rose-500 text-white font-bold px-6 py-2.5 rounded-xl text-xs flex items-center gap-2 shadow-lg transition-all"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Save & Publish Staff Member</span>
                  </button>
                </div>
              </form>
            </div>

            {/* Staff List Table */}
            <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 space-y-4">
              <div className="flex flex-wrap justify-between items-center gap-4">
                <h3 className="font-serif font-bold text-lg text-white">
                  Active School Staff Directory ({filteredAdminFaculty.length})
                </h3>

                <div className="flex gap-2">
                  {[
                    { id: 'all', label: 'All Staff' },
                    { id: 'teaching', label: 'Teaching' },
                    { id: 'non_teaching', label: 'Non-Teaching' },
                    { id: 'support_group_d', label: 'Support/Group D' },
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setStaffCategoryFilter(tab.id as StaffCategory | 'all')}
                      className={`px-3 py-1 rounded-lg text-xs font-bold ${
                        staffCategoryFilter === tab.id
                          ? 'bg-rose-600 text-white'
                          : 'bg-slate-950 text-slate-400 border border-slate-800'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs text-slate-300">
                  <thead className="bg-slate-950 text-slate-400 font-bold uppercase border-b border-slate-800">
                    <tr>
                      <th className="p-3">Staff Name</th>
                      <th className="p-3">Designation</th>
                      <th className="p-3">Qualification</th>
                      <th className="p-3">Subject / Work</th>
                      <th className="p-3">Category</th>
                      <th className="p-3 text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800">
                    {filteredAdminFaculty.map((staff) => (
                      <tr key={staff.id} className="hover:bg-slate-950/50">
                        <td className="p-3 font-bold text-white flex items-center gap-2">
                          <span className={`w-2 h-2 rounded-full ${staff.gender === 'Sir' ? 'bg-blue-400' : 'bg-rose-400'}`}></span>
                          <span>{staff.name}</span>
                        </td>
                        <td className="p-3 text-amber-400 font-medium">{staff.designation}</td>
                        <td className="p-3 text-slate-400 italic">{staff.qualification}</td>
                        <td className="p-3">{staff.subject}</td>
                        <td className="p-3">
                          <span className="capitalize px-2 py-0.5 rounded text-[10px] font-bold bg-slate-800 text-slate-300">
                            {staff.category}
                          </span>
                        </td>
                        <td className="p-3 text-right">
                          <button
                            onClick={() => onDeleteFaculty(staff.id)}
                            className="bg-rose-500/20 hover:bg-rose-500 text-rose-400 hover:text-white p-1.5 rounded-lg transition-colors"
                            title="Delete Staff"
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

        {/* TAB 3: NOTICES MANAGER */}
        {activeTab === 'notices' && (
          <div className="space-y-6">
            <form onSubmit={handleAddNotice} className="bg-slate-900 p-6 rounded-2xl border border-slate-800 space-y-4">
              <h3 className="font-serif font-bold text-base text-white">Publish New Notice</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  required
                  placeholder="Notice Title"
                  value={newNoticeTitle}
                  onChange={(e) => setNewNoticeTitle(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white"
                />
                <select
                  value={newNoticeCategory}
                  onChange={(e) => setNewNoticeCategory(e.target.value as any)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white"
                >
                  <option value="wbbse">WBBSE Madhyamik</option>
                  <option value="wbchse">WBCHSE Higher Secondary</option>
                  <option value="schemes">Kanyashree / Schemes</option>
                  <option value="holiday">Holiday / Event</option>
                </select>
              </div>
              <textarea
                placeholder="Description / Notice Content"
                value={newNoticeDesc}
                onChange={(e) => setNewNoticeDesc(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white h-20"
              />
              <button type="submit" className="bg-rose-600 text-white font-bold px-4 py-2 rounded-xl text-xs">
                Publish Notice
              </button>
            </form>

            <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 space-y-3">
              <h3 className="font-serif font-bold text-base text-white">Published Notices ({notices.length})</h3>
              {notices.map((notice) => (
                <div key={notice.id} className="flex items-center justify-between bg-slate-950 p-4 rounded-xl border border-slate-800 text-xs">
                  <div>
                    <h4 className="font-bold text-white">{notice.title}</h4>
                    <p className="text-slate-400 text-[11px]">{notice.publishDate} | {notice.category.toUpperCase()}</p>
                  </div>
                  <button onClick={() => handleDeleteNotice(notice.id)} className="text-rose-400 p-2 hover:bg-rose-950 rounded-lg">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 4: GALLERY */}
        {activeTab === 'gallery' && (
          <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 space-y-4">
            <h3 className="font-serif font-bold text-base text-white">Campus Gallery Media</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {galleryItems.map((item) => (
                <div key={item.id} className="bg-slate-950 p-3 rounded-xl border border-slate-800 space-y-2">
                  <img src={item.imageUrl} alt={item.title} className="w-full h-32 object-cover rounded-lg" />
                  <h4 className="font-bold text-xs text-white">{item.title}</h4>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 5: INQUIRIES */}
        {activeTab === 'inquiries' && (
          <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="font-serif font-bold text-base text-white">Parent Admission Inquiries</h3>
              <button onClick={exportInquiriesCSV} className="bg-emerald-600 text-white font-bold px-3 py-1.5 rounded-lg text-xs flex items-center gap-1.5">
                <FileSpreadsheet className="w-3.5 h-3.5" /> Export CSV
              </button>
            </div>
            <div className="space-y-3">
              {inquiries.map((inq) => (
                <div key={inq.id} className="bg-slate-950 p-4 rounded-xl border border-slate-800 text-xs space-y-1">
                  <div className="flex justify-between font-bold text-white">
                    <span>{inq.studentName} (Guardian: {inq.guardianName})</span>
                    <span className="text-amber-400">{inq.targetClass}</span>
                  </div>
                  <p className="text-slate-400">Phone: {inq.phoneNumber} | Address: {inq.address}</p>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
