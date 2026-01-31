import React from 'react';
import { 
  Users, CreditCard, Monitor, FileText, ChevronRight, ChevronLeft, 
  Facebook, Instagram, Twitter, MapPin, Phone, Mail, Search, Menu, 
  X, Calendar, Clock, ArrowRight, CheckSquare, Heart, Shield, Star, 
  PlayCircle, Award, FileQuestion, Lock, Download, Briefcase, GraduationCap,
  MessageCircle
} from 'lucide-react';

export type IconName = 
  | 'Users' | 'CreditCard' | 'Monitor' | 'FileText' | 'ChevronRight' 
  | 'ChevronLeft' | 'Facebook' | 'Instagram' | 'Twitter' | 'MapPin' 
  | 'Phone' | 'Mail' | 'Search' | 'Menu' | 'X' | 'Calendar' | 'Clock' 
  | 'ArrowRight' | 'CheckSquare' | 'Heart' | 'Shield' | 'Star' 
  | 'PlayCircle' | 'Award' | 'FileQuestion' | 'Lock' | 'Download'
  | 'Briefcase' | 'GraduationCap' | 'MessageCircle';

interface IconProps {
  name: IconName;
  size?: number;
  className?: string;
}

const Icon: React.FC<IconProps> = ({ name, size = 24, className = '' }) => {
  const icons: Record<IconName, React.FC<any>> = {
    Users,
    CreditCard,
    Monitor,
    FileText,
    ChevronRight,
    ChevronLeft,
    Facebook,
    Instagram,
    Twitter,
    MapPin,
    Phone,
    Mail,
    Search,
    Menu,
    X,
    Calendar,
    Clock,
    ArrowRight,
    CheckSquare,
    Heart,
    Shield,
    Star,
    PlayCircle,
    Award,
    FileQuestion,
    Lock,
    Download,
    Briefcase,
    GraduationCap,
    MessageCircle
  };

  const LucideIcon = icons[name];
  
  if (!LucideIcon) {
    console.warn(`Icon "${name}" not found.`);
    return null;
  }

  return <LucideIcon size={size} className={className} />;
};

export default Icon;