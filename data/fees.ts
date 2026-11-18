// Fee structure placeholder data — replace with actual school fee details.
// No actual fee amounts are invented; all values are intentionally left blank for the school to fill.

export type FeeRow = {
  class: string;
  tuitionFee: string;
  admissionFee: string;
  annualFee: string;
  otherCharges: string;
  notes: string;
};

export const feeRows: FeeRow[] = [
  {
    class: 'Nursery – UKG',
    tuitionFee: '—',
    admissionFee: '—',
    annualFee: '—',
    otherCharges: '—',
    notes: 'As per school policy',
  },
  {
    class: 'Grade 1 – 5',
    tuitionFee: '—',
    admissionFee: '—',
    annualFee: '—',
    otherCharges: '—',
    notes: 'As per school policy',
  },
  {
    class: 'Grade 6 – 8',
    tuitionFee: '—',
    admissionFee: '—',
    annualFee: '—',
    otherCharges: '—',
    notes: 'As per school policy',
  },
  {
    class: 'Grade 9 – 10',
    tuitionFee: '—',
    admissionFee: '—',
    annualFee: '—',
    otherCharges: '—',
    notes: 'As per school policy',
  },
];

export const feeNotes = [
  'Fee structure is subject to change as per school policy.',
  'Fees are payable as per the schedule communicated at the time of admission.',
  'Sibling and merit concessions may be available — please contact the school office for details.',
  'Transport and optional activity fees are charged separately where applicable.',
];
