import {
  Palette,
  Trophy,
  Award,
  PartyPopper,
  FlaskConical,
  Lightbulb,
  MapPin,
  type LucideIcon,
} from 'lucide-react';

export type Activity = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const activities: Activity[] = [
  {
    icon: Palette,
    title: 'Cultural Activities',
    description:
      'Music, dance, drama and art events that celebrate creativity and cultural diversity throughout the year.',
  },
  {
    icon: Trophy,
    title: 'Sports',
    description:
      'Annual sports day, inter-house competitions and coaching across athletics and team games.',
  },
  {
    icon: Award,
    title: 'Competitions',
    description:
      'Inter-school and intra-school competitions in academics, arts, debate, quiz and more.',
  },
  {
    icon: PartyPopper,
    title: 'Celebrations',
    description:
      'Festivals, national days and special occasions celebrated together as a school community.',
  },
  {
    icon: FlaskConical,
    title: 'Educational Activities',
    description:
      'Science exhibitions, maths olympiads and subject weeks that make learning come alive.',
  },
  {
    icon: Lightbulb,
    title: 'Workshops',
    description:
      'Skill-building workshops on topics from creative writing to robotics and life skills.',
  },
  {
    icon: MapPin,
    title: 'Field Trips',
    description:
      'Educational excursions and nature trips that connect classroom learning with the real world.',
  },
];

export type EventCard = {
  title: string;
  date: string;
  category: string;
  image: string;
  description: string;
};

export const events: EventCard[] = [
  {
    title: 'Annual Day Celebration',
    date: 'December',
    category: 'Celebrations',
    image: 'https://images.pexels.com/photos/6147369/pexels-photo-6147369.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    description:
      'A grand evening of performances, awards and celebrations showcasing our students\' talents.',
  },
  {
    title: 'Sports Day',
    date: 'November',
    category: 'Sports',
    image: 'https://images.pexels.com/photos/4775868/pexels-photo-4775868.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    description:
      'A day of athletic events, team competitions and spirited participation across all houses.',
  },
  {
    title: 'Science Exhibition',
    date: 'August',
    category: 'Educational Activities',
    image: 'https://images.pexels.com/photos/2280570/pexels-photo-2280570.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    description:
      'Students present innovative models and experiments exploring science and sustainability.',
  },
  {
    title: 'Art & Craft Fair',
    date: 'July',
    category: 'Cultural Activities',
    image: 'https://images.pexels.com/photos/6147369/pexels-photo-6147369.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    description:
      'A vibrant display of student artwork, craft projects and creative installations.',
  },
  {
    title: 'Inter-House Quiz',
    date: 'September',
    category: 'Competitions',
    image: 'https://images.pexels.com/photos/5212325/pexels-photo-5212325.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    description:
      'A lively quiz competition testing knowledge across subjects and current affairs.',
  },
  {
    title: 'Nature Field Trip',
    date: 'October',
    category: 'Field Trips',
    image: 'https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    description:
      'An educational excursion connecting students with nature and environmental learning.',
  },
];
