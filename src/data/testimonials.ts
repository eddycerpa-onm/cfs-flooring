export interface Testimonial {
  id: string;
  author: string;
  role?: string;
  city: string;
  state: 'OR' | 'WA';
  serviceUsed: string;
  rating: number;
  content: string;
  date: string;
  verified: boolean;
}

export const testimonialsData: Testimonial[] = [
  {
    id: 't-1',
    author: 'Jessica M.',
    role: 'Homeowner',
    city: 'Lake Oswego',
    state: 'OR',
    serviceUsed: 'Hardwood, Laminate & LVP',
    rating: 5,
    content:
      'CFS Flooring made the whole process easy from the first consultation to the final walkthrough. Jose took the time to explain the pros and cons of each option, and the finished floors completely changed the look of our home.',
    date: '2026-06-12',
    verified: true,
  },
  {
    id: 't-2',
    author: 'Mark R.',
    role: 'Homeowner',
    city: 'West Linn',
    state: 'OR',
    serviceUsed: 'Carpet & Residential',
    rating: 5,
    content:
      'We appreciated the honest advice and attention to detail. Instead of pushing the most expensive option, CFS Flooring recommended what made the most sense for our timeline and budget. The installation was clean, professional, and right on target.',
    date: '2026-05-28',
    verified: true,
  },
  {
    id: 't-3',
    author: 'Danielle K.',
    role: 'Homeowner',
    city: 'Wilsonville',
    state: 'OR',
    serviceUsed: 'Sand & Finish',
    rating: 5,
    content:
      'The communication, workmanship, and final results were excellent. We needed help updating worn flooring before listing our property, and the CFS Flooring team helped us choose the right solution without overcomplicating the project.',
    date: '2026-07-04',
    verified: true,
  },
];

export const testimonials = testimonialsData.map((t) => ({
  author: t.author,
  text: t.content,
  service: t.serviceUsed,
  location: `${t.city}, ${t.state}`,
  rating: t.rating,
}));
