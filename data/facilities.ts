import {
  BookOpen,
  Library,
  FlaskConical,
  Trophy,
  Cpu,
  Bus,
  ShieldCheck,
  Palette,
  type LucideIcon,
} from 'lucide-react';

export type Facility = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const facilities: Facility[] = [
  {
    icon: BookOpen,
    title: 'Classrooms',
    description:
      'Spacious, well-lit and ventilated classrooms designed to create a comfortable and focused learning environment.',
  },
  {
    icon: Library,
    title: 'Library',
    description:
      'A well-stocked library with a diverse collection of books, reference material and digital resources to encourage reading and research.',
  },
  {
    icon: FlaskConical,
    title: 'Laboratories',
    description:
      'Dedicated science, computer and language laboratories equipped to support hands-on, experiential learning.',
  },
  {
    icon: Trophy,
    title: 'Sports',
    description:
      'Sports facilities including a playground, courts and indoor game areas to promote physical fitness and teamwork.',
  },
  {
    icon: Cpu,
    title: 'Computer Facilities',
    description:
      'A computer lab with modern systems and internet access to build digital literacy and technical skills.',
  },
  {
    icon: Bus,
    title: 'Transportation',
    description:
      'Safe and reliable bus services with trained staff covering key routes across the surrounding area.',
  },
  {
    icon: ShieldCheck,
    title: 'Safety & Security',
    description:
      'Secure campus with CCTV monitoring, controlled access and trained staff to ensure student safety at all times.',
  },
  {
    icon: Palette,
    title: 'Activity Areas',
    description:
      'Dedicated spaces for arts, crafts, music, dance and other co-curricular activities that nurture creativity.',
  },
];
