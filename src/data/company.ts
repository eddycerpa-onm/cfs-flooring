export interface ServiceArea {
  city: string;
  state: 'OR' | 'WA';
  popular: boolean;
}

export interface CompanyInfo {
  name: string;
  legalName: string;
  tagline: string;
  description: string;
  phone: string;
  phoneRaw: string;
  email: string;
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
  };
  licenses: {
    oregonCCB: string;
    washingtonLic: string;
  };
  licenseOR?: string;
  licenseWA?: string;
  hours: {
    weekdays: string;
    saturday: string;
    sunday: string;
  };
  serviceAreas: ServiceArea[];
  stats: {
    yearsExperience: number;
    projectsCompleted: number;
    satisfactionRate: number;
    fiveStarReviews: number;
  };
}

export const companyData: CompanyInfo = {
  name: 'CFS Flooring',
  legalName: 'CFS Flooring LLC',
  tagline: 'Quality flooring installation with honest guidance you can trust',
  description:
    'CFS Flooring provides high-end solid hardwood, luxury vinyl plank (LVP), carpet, tile, sheet vinyl, VCT, sand & refinish, and flooring removal services across Lake Oswego, West Linn, Wilsonville, Vancouver WA, and the Portland metro area.',
  phone: '(971) 419-8602',
  phoneRaw: '+19714198602',
  email: 'cfsflooringllc@outlook.com',
  address: {
    street: '15900 SW Upper Boones Ferry Rd',
    city: 'Lake Oswego',
    state: 'OR',
    zip: '97035',
  },
  licenses: {
    oregonCCB: 'OR CCB #234819',
    washingtonLic: 'WA Lic #CFSFL*812K3',
  },
  licenseOR: '234819',
  licenseWA: 'CFSFL*812K3',
  hours: {
    weekdays: 'Monday – Friday: 7:00 AM – 6:00 PM',
    saturday: 'Saturday: 8:00 AM – 2:00 PM',
    sunday: 'Sunday: Closed',
  },
  serviceAreas: [
    { city: 'Lake Oswego', state: 'OR', popular: true },
    { city: 'West Linn', state: 'OR', popular: true },
    { city: 'Wilsonville', state: 'OR', popular: true },
    { city: 'Vancouver', state: 'WA', popular: true },
    { city: 'Portland', state: 'OR', popular: true },
    { city: 'Beaverton', state: 'OR', popular: false },
    { city: 'Tigard', state: 'OR', popular: false },
    { city: 'Tualatin', state: 'OR', popular: false },
    { city: 'Sherwood', state: 'OR', popular: false },
    { city: 'Oregon City', state: 'OR', popular: false },
    { city: 'Camas', state: 'WA', popular: false },
    { city: 'Ridgefield', state: 'WA', popular: false },
  ],
  stats: {
    yearsExperience: 10,
    projectsCompleted: 1500,
    satisfactionRate: 100,
    fiveStarReviews: 250,
  },
};

export const company = companyData;
