export type NoticeCategory =
  | 'Admissions'
  | 'Examinations'
  | 'Events'
  | 'Holidays'
  | 'General';

export type Notice = {
  id: string;
  title: string;
  date: string; // ISO format string
  category: NoticeCategory;
  shortDescription: string;
  fullContent: string;
};

// Sample placeholder notices — replace with actual school notices.
export const notices: Notice[] = [
  {
    id: 'n1',
    title: 'Admissions Open for Academic Year 2026–27',
    date: '2026-01-15',
    category: 'Admissions',
    shortDescription:
      'Applications are now being accepted for all grades for the upcoming academic year. Contact the school office for details.',
    fullContent:
      'Admissions for the academic year 2026–27 are now open. Parents may collect the admission form from the school office or submit an enquiry through our website. Limited seats are available across all grades. Please refer to the Admissions page for the complete process, eligibility and required documents.',
  },
  {
    id: 'n2',
    title: 'Mid-Term Examination Schedule Released',
    date: '2026-02-01',
    category: 'Examinations',
    shortDescription:
      'The mid-term examination timetable has been published. Students and parents are requested to review the schedule.',
    fullContent:
      'The mid-term examination schedule for the current academic year has been released. The detailed timetable is available with the class teachers and on the school notice board. Students are advised to prepare thoroughly and reach the examination hall at least 15 minutes before the start of each paper.',
  },
  {
    id: 'n3',
    title: 'Annual Day Celebration — Save the Date',
    date: '2026-02-10',
    category: 'Events',
    shortDescription:
      'Our Annual Day celebration will be held in December. More details regarding timings and performances will follow.',
    fullContent:
      'We are delighted to announce that our Annual Day celebration will be held this December. The event will feature performances by students across all grades. Detailed information regarding timings, venue and participation will be shared closer to the date. We look forward to celebrating with all our students and parents.',
  },
  {
    id: 'n4',
    title: 'Holiday Notice — Spring Break',
    date: '2026-03-01',
    category: 'Holidays',
    shortDescription:
      'The school will remain closed for spring break. Regular classes will resume as per the academic calendar.',
    fullContent:
      'The school will remain closed for the spring break as per the academic calendar. Regular classes will resume on the date mentioned in the school diary. Parents are requested to plan accordingly. We wish all our students and families a restful and enjoyable break.',
  },
  {
    id: 'n5',
    title: 'Parent-Teacher Meeting Schedule',
    date: '2026-03-15',
    category: 'General',
    shortDescription:
      'The next parent-teacher meeting will be held to discuss student progress. Parents are encouraged to attend.',
    fullContent:
      'A parent-teacher meeting is scheduled to discuss the academic progress and overall development of students. Parents are requested to attend the meeting as per the slot communicated by the class teachers. Your involvement plays an important role in your child\'s learning journey.',
  },
  {
    id: 'n6',
    title: 'Inter-House Sports Competition',
    date: '2026-04-01',
    category: 'Events',
    shortDescription:
      'The inter-house sports competition will feature athletics and team events across all houses.',
    fullContent:
      'The annual inter-house sports competition will be held featuring athletics and a range of team events. Students are encouraged to participate and support their respective houses. The detailed event list and schedule will be shared by the sports department.',
  },
];

export const noticeCategories: ('All' | NoticeCategory)[] = [
  'All',
  'Admissions',
  'Examinations',
  'Events',
  'Holidays',
  'General',
];
