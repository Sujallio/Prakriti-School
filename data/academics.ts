import {
  BookOpen,
  Users,
  FlaskConical,
  Palette,
  Trophy,
  ClipboardCheck,
  GraduationCap,
  type LucideIcon,
} from 'lucide-react';

export type GradeCard = {
  stage: string;
  grades: string;
  focus: string;
  icon: LucideIcon;
};

export const academicOverview = {
  heading: 'Academic Overview',
  paragraphs: [
    'At Prakriti School, our academic framework is designed to provide a strong foundation while nurturing curiosity, creativity and critical thinking.',
    'We follow a well-structured curriculum that balances conceptual understanding with practical application, ensuring students are well-prepared for the next stage of their education and life.',
  'Our teaching methodology emphasises active learning, collaboration and real-world connections, making learning meaningful and engaging.',
  ],
};

export const gradeCards: GradeCard[] = [
  {
    stage: 'Pre-Primary',
    grades: 'Nursery – UKG',
    focus:
      'Play-based, sensory and activity-led learning that builds early literacy, numeracy and social skills.',
    icon: Palette,
  },
  {
    stage: 'Primary',
    grades: 'Grade 1 – 5',
    focus:
      'Foundational literacy and numeracy with exploration across subjects and hands-on learning.',
    icon: BookOpen,
  },
  {
    stage: 'Middle School',
    grades: 'Grade 6 – 8',
    focus:
      'Concept-driven learning that deepens subject understanding and develops independent study skills.',
    icon: Users,
  },
  {
    stage: 'Secondary',
    grades: 'Grade 9 – 10',
    focus:
      'Rigorous academic preparation with a focus on analytical thinking and board readiness.',
    icon: GraduationCap,
  },
];

export const curriculum = {
  heading: 'Curriculum',
  text: 'Our curriculum is thoughtfully designed to be broad, balanced and aligned with national educational standards. It integrates core academic subjects with co-curricular activities, life skills and value education to ensure the all-round development of every student.',
  subjects: [
    'Languages',
    'Mathematics',
    'Science & Environmental Studies',
    'Social Studies',
    'Computer Science',
    'Arts & Craft',
    'Physical Education',
    'Music & Dance',
    'Value Education',
  ],
};

export const teachingMethodology = [
  {
    icon: BookOpen,
    title: 'Active Learning',
    description:
      'Students engage through discussions, projects and hands-on activities rather than passive listening.',
  },
  {
    icon: Users,
    title: 'Collaborative Learning',
    description:
      'Group work and peer learning build communication, teamwork and leadership skills.',
  },
  {
    icon: FlaskConical,
    title: 'Experiential Learning',
    description:
      'Practical experiments, field trips and real-world applications bring concepts to life.',
  },
  {
    icon: Palette,
    title: 'Creative Expression',
    description:
      'Art, music, drama and creative writing are woven into learning to spark imagination.',
  },
];

export const coCurricular = [
  { icon: Palette, title: 'Arts & Craft', description: 'Drawing, painting and craft activities.' },
  { icon: Trophy, title: 'Sports', description: 'Athletics, team sports and indoor games.' },
  { icon: BookOpen, title: 'Literary Activities', description: 'Debates, elocution and reading clubs.' },
  { icon: FlaskConical, title: 'Science Club', description: 'Experiments, exhibitions and innovation.' },
  { icon: Users, title: 'Social Service', description: 'Community outreach and awareness drives.' },
  { icon: ClipboardCheck, title: 'Life Skills', description: 'Workshops on health, safety and values.' },
];

export const assessmentApproach = {
  heading: 'Assessment Approach',
  text: 'We follow a continuous and comprehensive evaluation system that focuses on the overall growth of the student rather than rote memorisation. Assessments are designed to be stress-free, varied and meaningful.',
  points: [
    'Regular formative assessments through quizzes, projects and class participation.',
    'Periodic summative assessments to measure conceptual understanding.',
    'Skill-based and activity-based evaluations alongside written tests.',
    'Constructive feedback and individual support for every learner.',
    'No ranking system in early grades to encourage a pressure-free environment.',
  ],
};
