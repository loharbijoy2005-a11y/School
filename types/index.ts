/**
 * MAHISHADAL GAYESWARI GIRLS' HIGH SCHOOL (H.S.)
 * Complete High-Density TypeScript Type Definitions
 */

export type NoticeCategory = 'all' | 'wbbse' | 'wbchse' | 'schemes' | 'holiday' | 'tender';

export interface Notice {
  id: string;
  title: string;
  category: NoticeCategory;
  publishDate: string;
  pdfUrl: string;
  isNew: boolean;
  isPinned?: boolean;
  fileSize: string;
  description: string;
}

export interface AdmissionInquiry {
  id?: string;
  studentName: string;
  guardianName: string;
  targetClass: string;
  phoneNumber: string;
  address: string;
  remarks?: string;
  submittedAt?: string;
  status?: 'pending' | 'verified' | 'contacted';
}

export interface StudentTopper {
  id: string;
  name: string;
  exam: 'Madhyamik' | 'Higher Secondary';
  percentage: string;
  rank: string;
  stream: string;
  imageUrl: string;
  testimonial: string;
}

export interface GoogleReview {
  id: string;
  authorName: string;
  role: 'Parent' | 'Alumni' | 'Student';
  rating: number;
  date: string;
  comment: string;
  authorAvatar: string;
}

export interface DigitalPortalItem {
  id: string;
  title: string;
  category: string;
  description: string;
  icon: string;
  targetUrl: string;
  badgeText: string;
}

export interface SwachhataItem {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  icon: string;
}

export interface SchemeDetail {
  id: string;
  title: string;
  subTitle: string;
  description: string;
  eligibility: string;
  benefit: string;
  icon: string;
  officialUrl: string;
}

export interface FacilityItem {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  isLarge?: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  assignedSection?: 'hero' | 'events' | 'facilities';
}

export interface AdminUser {
  username: string;
  role: 'headmistress' | 'office_clerk';
  token: string;
}

export interface DashboardStats {
  activeNoticesCount: number;
  galleryPhotosCount: number;
  pendingInquiriesCount: number;
  storageUsedMb: number;
  emergencyTickerActive: boolean;
}
