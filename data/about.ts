import {
  GraduationCap,
  HeartHandshake,
  Building2,
  ShieldCheck,
  Target,
  Eye,
  Sparkles,
  Leaf,
  Users,
  Award,
  BookMarked,
  Lightbulb,
  type LucideIcon,
} from 'lucide-react';

export type ValueItem = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const homeStats: ValueItem[] = [
  {
    icon: GraduationCap,
    title: 'Experienced Faculty',
    description:
      'Dedicated and qualified educators committed to guiding every student.',
  },
  {
    icon: HeartHandshake,
    title: 'Holistic Learning',
    description:
      'A balanced approach nurturing academics, arts, sports and character.',
  },
  {
    icon: Building2,
    title: 'Modern Facilities',
    description:
      'Well-equipped classrooms, laboratories, library and sports spaces.',
  },
  {
    icon: ShieldCheck,
    title: 'Safe & Supportive Environment',
    description:
      'A caring campus where every child feels secure, valued and heard.',
  },
];

export const aboutValues: ValueItem[] = [
  {
    icon: Target,
    title: 'Excellence',
    description:
      'We strive for academic and personal excellence in everything we do.',
  },
  {
    icon: HeartHandshake,
    title: 'Compassion',
    description:
      'We foster empathy, kindness and respect for all members of our community.',
  },
  {
    icon: Sparkles,
    title: 'Creativity',
    description:
      'We encourage curiosity, imagination and innovative thinking.',
  },
  {
    icon: ShieldCheck,
    title: 'Integrity',
    description:
      'We uphold honesty, fairness and strong moral principles.',
  },
  {
    icon: Leaf,
    title: 'Sustainability',
    description:
      'We instil respect for nature and a sense of responsibility towards the environment.',
  },
  {
    icon: Users,
    title: 'Collaboration',
    description:
      'We believe in working together — students, teachers and parents.',
  },
];

export const schoolOverview = {
  heading: 'About Prakriti School',
  paragraphs: [
    'Prakriti School is a nurturing educational institution dedicated to providing a holistic learning environment where every child is encouraged to grow academically, socially and emotionally.',
    'Our philosophy is rooted in the belief that education extends far beyond textbooks. We blend a strong academic foundation with character building, creativity and a deep respect for nature and community.',
    'With a team of caring and experienced educators, modern facilities and a child-centric approach, we aim to shape confident, responsible and compassionate individuals ready to contribute meaningfully to society.',
  ],
};

export const visionMission = {
  vision: {
    icon: Eye,
    title: 'Our Vision',
    text: 'To be a centre of educational excellence that empowers students to become lifelong learners, critical thinkers and responsible global citizens.',
  },
  mission: {
    icon: Target,
    title: 'Our Mission',
    text: 'To provide a nurturing, inclusive and stimulating learning environment that fosters academic achievement, personal growth and strong values, enabling every student to realise their full potential.',
  },
};

export const learningPhilosophy: ValueItem[] = [
  {
    icon: BookMarked,
    title: 'Child-Centred Learning',
    description:
      'Learning experiences designed around the needs, interests and abilities of each child.',
  },
  {
    icon: Lightbulb,
    title: 'Inquiry-Based Approach',
    description:
      'Encouraging questions, exploration and discovery to build deep understanding.',
  },
  {
    icon: Award,
    title: 'Holistic Development',
    description:
      'Balancing academics with arts, sports, values and life skills.',
  },
  {
    icon: Leaf,
    title: 'Nature-Connected',
    description:
      'Learning rooted in an appreciation for the natural world and sustainable living.',
  },
];
