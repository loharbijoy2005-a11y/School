/**
 * MAHISHADAL GAYESWARI GIRLS' HIGH SCHOOL (H.S.)
 * Strict TypeScript Type Definitions
 */

export type NoticeCategory = 'all' | 'wbbse' | 'wbchse' | 'schemes' | 'holiday';

export interface Notice {
  id: string;
  title: string;
  category: NoticeCategory;
  publishDate: string;
  pdfUrl: string;
  isNew: boolean;
  fileSize: string;
  description: string;
}

export interface AdmissionInquiry {
  studentName: string;
  guardianName: string;
  targetClass: string;
  phoneNumber: string;
  address: string;
  remarks?: string;
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
}

export interface StaffProfile {
  name: string;
  designation: string;
  qualification: string;
  imageUrl: string;
  message: string;
}
