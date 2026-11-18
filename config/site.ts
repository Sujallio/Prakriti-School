export const siteConfig = {
  name: 'Prakriti School',
  shortName: 'Prakriti',
  tagline: 'Shaping Young Minds for a Brighter Future',
  description:
    'Prakriti School, Manmad is a nurturing, engaging and holistic learning environment where every student is encouraged to learn, grow and achieve their potential.',
  url: 'https://prakritischool.org',
  // Contact details — replace placeholders with actual school information
  contact: {
    address: 'Manmad, Maharashtra — 423104',
    phone: '+91 00000 00000',
    email: 'info@prakritischool.org',
    officeHours: 'Monday – Saturday: 8:00 AM – 3:30 PM',
  },
  // WhatsApp integration — configure the school's WhatsApp number here
  whatsapp: {
    number: '910000000000', // Country code + number, no '+' or spaces
    prefillMessage: 'Hello, I would like to enquire about Prakriti School.',
  },
  social: {
    facebook: '#',
    instagram: '#',
    youtube: '#',
    twitter: '#',
  },
} as const;

export type SiteConfig = typeof siteConfig;
