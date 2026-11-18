import {
  Search,
  FileText,
  MessagesSquare,
  FolderCheck,
  CheckCircle2,
  type LucideIcon,
} from 'lucide-react';

export type AdmissionStep = {
  step: number;
  title: string;
  description: string;
  icon: LucideIcon;
};

export const admissionSteps: AdmissionStep[] = [
  {
    step: 1,
    title: 'Enquiry',
    description:
      'Parents submit an online or offline enquiry to express interest in admission.',
    icon: Search,
  },
  {
    step: 2,
    title: 'Application',
    description:
      'Complete the admission application form and submit it along with the required documents.',
    icon: FileText,
  },
  {
    step: 3,
    title: 'Interaction / Assessment',
    description:
      'An age-appropriate interaction or informal assessment is conducted with the student and parents.',
    icon: MessagesSquare,
  },
  {
    step: 4,
    title: 'Documentation',
    description:
      'Submit and verify all required documents and complete the admission formalities.',
    icon: FolderCheck,
  },
  {
    step: 5,
    title: 'Confirmation',
    description:
      'On successful completion of all steps, admission is confirmed and the student is enrolled.',
    icon: CheckCircle2,
  },
];

export const eligibility = {
  heading: 'Eligibility',
  text: 'Admission is open to students meeting the age criteria for the respective grade. The age guidelines below are indicative and may be revised as per school policy.',
  criteria: [
    { grade: 'Nursery', age: '3+ years as on 31st March' },
    { grade: 'LKG', age: '4+ years as on 31st March' },
    { grade: 'UKG', age: '5+ years as on 31st March' },
    { grade: 'Grade 1', age: '6+ years as on 31st March' },
    { grade: 'Grade 2 onwards', age: 'As appropriate for the grade level' },
  ],
};

export const requiredDocuments = [
  'Completed admission application form',
  'Birth certificate (original and photocopy)',
  'Recent passport-size photographs of the student',
  'Aadhaar card / valid ID proof of student and parents',
  'Transfer Certificate (TC) from previous school (if applicable)',
  'Previous class report card / mark sheet (if applicable)',
  'Address proof of parent / guardian',
  'Medical / immunisation record (if applicable)',
];

export const importantInfo = [
  'Admissions are subject to the availability of seats in the respective grade.',
  'Submission of the enquiry form does not guarantee admission.',
  'All information provided must be accurate and verifiable.',
  'The school reserves the right to accept or decline any application.',
  'Fee must be paid as per the schedule communicated at the time of admission.',
];
