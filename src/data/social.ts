export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
  handle: string;
  ariaLabel: string;
}

export const socialLinks: SocialLink[] = [
  {
    platform: 'Facebook',
    url: 'https://facebook.com/cfsflooring',
    icon: 'facebook',
    handle: '@cfsflooring',
    ariaLabel: 'Follow CFS Flooring on Facebook',
  },
  {
    platform: 'Instagram',
    url: 'https://instagram.com/cfsflooring',
    icon: 'instagram',
    handle: '@cfsflooring_pnw',
    ariaLabel: 'Follow CFS Flooring on Instagram',
  },
  {
    platform: 'LinkedIn',
    url: 'https://linkedin.com/company/cfsflooring',
    icon: 'linkedin',
    handle: 'CFS Flooring Commercial',
    ariaLabel: 'Connect with CFS Flooring on LinkedIn',
  },
  {
    platform: 'Google Business Profile',
    url: 'https://g.page/cfsflooring',
    icon: 'google',
    handle: 'CFS Flooring - Lake Oswego',
    ariaLabel: 'View CFS Flooring on Google Maps',
  },
  {
    platform: 'Yelp',
    url: 'https://yelp.com/biz/cfs-flooring-lake-oswego',
    icon: 'yelp',
    handle: 'CFS Flooring',
    ariaLabel: 'Read reviews for CFS Flooring on Yelp',
  },
  {
    platform: 'Houzz',
    url: 'https://houzz.com/pro/cfsflooring',
    icon: 'houzz',
    handle: 'CFS Flooring NW',
    ariaLabel: 'Explore CFS Flooring project photos on Houzz',
  },
];
