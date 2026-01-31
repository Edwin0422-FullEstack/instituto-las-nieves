// This file represents the MODEL layer of our MVC pattern.
// It defines the shape of our data.

export interface NavItem {
  label: string;
  href: string;
  subItems?: NavItem[];
}

export interface NewsItem {
  id: number;
  title: string;
  summary: string;
  date: string;
  imageUrl: string;
  category: string;
}

export interface QuickLinkItem {
  id: string;
  label: string;
  iconName: 'Users' | 'CreditCard' | 'Monitor' | 'FileText';
  color: string;
}

export interface ProgramItem {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  ageRange: string;
}

export interface ContactInfo {
  address: string;
  phone: string;
  email: string;
  socials: {
    facebook: string;
    instagram: string;
    twitter: string;
  };
}

export interface StaffMember {
  id: number;
  name: string;
  role: string;
  image: string;
  email?: string;
  category?: 'Preschool' | 'Primary' | 'HighSchool' | 'Admin' | 'Leadership';
  bio?: string;
}