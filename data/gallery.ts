export type GalleryImage = {
  src: string;
  alt: string;
  category: GalleryCategory;
};

export type GalleryCategory =
  | 'Campus'
  | 'Classrooms'
  | 'Events'
  | 'Sports'
  | 'Activities'
  | 'Facilities';

export const galleryCategories: ('All' | GalleryCategory)[] = [
  'All',
  'Campus',
  'Classrooms',
  'Events',
  'Sports',
  'Activities',
  'Facilities',
];

export const galleryImages: GalleryImage[] = [
  {
    src: 'https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    alt: 'School campus building exterior',
    category: 'Campus',
  },
  {
    src: 'https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    alt: 'Bright classroom with desks and chairs',
    category: 'Classrooms',
  },
  {
    src: 'https://images.pexels.com/photos/6147369/pexels-photo-6147369.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    alt: 'Students performing at annual day event',
    category: 'Events',
  },
  {
    src: 'https://images.pexels.com/photos/4775868/pexels-photo-4775868.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    alt: 'Children playing sports on school field',
    category: 'Sports',
  },
  {
    src: 'https://images.pexels.com/photos/8108062/pexels-photo-8108062.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    alt: 'Art and craft activity session',
    category: 'Activities',
  },
  {
    src: 'https://images.pexels.com/photos/256531/pexels-photo-256531.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    alt: 'School library with bookshelves',
    category: 'Facilities',
  },
  {
    src: 'https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    alt: 'School garden and green campus area',
    category: 'Campus',
  },
  {
    src: 'https://images.pexels.com/photos/5212325/pexels-photo-5212325.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    alt: 'Students engaged in classroom learning',
    category: 'Classrooms',
  },
  {
    src: 'https://images.pexels.com/photos/8108062/pexels-photo-8108062.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    alt: 'Cultural day celebration with performances',
    category: 'Events',
  },
  {
    src: 'https://images.pexels.com/photos/4775868/pexels-photo-4775868.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    alt: 'Athletics event on sports day',
    category: 'Sports',
  },
  {
    src: 'https://images.pexels.com/photos/2280570/pexels-photo-2280570.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    alt: 'Science exhibition with student projects',
    category: 'Activities',
  },
  {
    src: 'https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    alt: 'School science laboratory equipment',
    category: 'Facilities',
  },
];
