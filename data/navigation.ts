import {
  Home,
  Info,
  BookOpen,
  FileText,
  Users,
  Building2,
  Images,
  Newspaper,
  Phone,
  GraduationCap,
  LayoutGrid,
  Wallet,
  CalendarDays,
  type LucideIcon,
} from 'lucide-react';

export type NavItem = {
  title: string;
  href: string;
  icon: LucideIcon;
};

export const navItems: NavItem[] = [
  { title: 'Home', href: '/', icon: Home },
  { title: 'About', href: '/about', icon: Info },
  { title: 'Academics', href: '/academics', icon: BookOpen },
  { title: 'Admissions', href: '/admissions', icon: FileText },
  { title: 'Faculty', href: '/faculty', icon: Users },
  { title: 'Facilities', href: '/facilities', icon: Building2 },
  { title: 'Gallery', href: '/gallery', icon: Images },
  { title: 'Notice Board', href: '/notice-board', icon: Newspaper },
  { title: 'Contact', href: '/contact', icon: Phone },
];

export const footerLinks = {
  'Quick Links': [
    { title: 'About Us', href: '/about' },
    { title: 'Principal Message', href: '/principal-message' },
    { title: 'Academics', href: '/academics' },
    { title: 'Departments', href: '/departments' },
  ],
  Admissions: [
    { title: 'Admission Process', href: '/admissions' },
    { title: 'Fee Structure', href: '/fee-structure' },
    { title: 'Enquiry Form', href: '/admissions#enquiry' },
    { title: 'Facilities', href: '/facilities' },
  ],
  Explore: [
    { title: 'Faculty', href: '/faculty' },
    { title: 'Activities & Events', href: '/activities' },
    { title: 'Gallery', href: '/gallery' },
    { title: 'Notice Board', href: '/notice-board' },
  ],
};

export const secondaryNav: NavItem[] = [
  { title: 'Principal Message', href: '/principal-message', icon: GraduationCap },
  { title: 'Departments', href: '/departments', icon: LayoutGrid },
  { title: 'Fee Structure', href: '/fee-structure', icon: Wallet },
  { title: 'Activities', href: '/activities', icon: CalendarDays },
];
