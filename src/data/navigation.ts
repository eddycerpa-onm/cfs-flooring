export interface NavItem {
  label: string;
  href: string;
  description?: string;
  badge?: string;
}

export interface ServiceNavItem {
  title: string;
  href: string;
  shortTitle: string;
  description: string;
  slug: string;
}

export interface NavigationConfig {
  mainNav: NavItem[];
  servicesNav: ServiceNavItem[];
  quickLinks: NavItem[];
  legalLinks: NavItem[];
  cta: {
    label: string;
    href: string;
    phoneLabel: string;
  };
}

export const navigationData: NavigationConfig = {
  mainNav: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about-us' },
    { label: 'Services', href: '/our-services' },
    { label: 'Contact Us', href: '/contact-us' },
  ],
  servicesNav: [
    {
      title: 'Hardwood, Laminate & LVP Installation',
      shortTitle: 'Hardwood, Laminate & LVP',
      href: '/services/hardwood-laminate-and-lvp',
      slug: 'hardwood-laminate-and-lvp',
      description: 'Solid & engineered hardwood, laminate, and 100% waterproof luxury vinyl plank.',
    },
    {
      title: 'Carpet Installation',
      shortTitle: 'Carpet Installation',
      href: '/services/carpet-installation',
      slug: 'carpet-installation',
      description: 'Plush residential carpeting, power-stretching, and heavy commercial carpet tiles.',
    },
    {
      title: 'Sand & Finish',
      shortTitle: 'Sand & Finish',
      href: '/services/sand-and-finish',
      slug: 'sand-and-finish',
      description: 'Dust-controlled sanding, custom wood stains, and commercial polyurethane topcoats.',
    },
    {
      title: 'Ceramic Tile',
      shortTitle: 'Ceramic Tile',
      href: '/services/ceramic-tile',
      slug: 'ceramic-tile',
      description: 'Precision tile setting for shower walls, kitchen backsplashes, and floor tiles.',
    },
    {
      title: 'Sheet Vinyl',
      shortTitle: 'Sheet Vinyl',
      href: '/services/sheet-vinyl',
      slug: 'sheet-vinyl',
      description: 'Seamless waterproof vinyl, heat-welded joints, and coved bases for sanitary rooms.',
    },
    {
      title: 'VCT Flooring',
      shortTitle: 'VCT Flooring',
      href: '/services/vct-flooring',
      slug: 'vct-flooring',
      description: 'Heavy-duty Vinyl Composition Tile for high-traffic retail, schools, and offices.',
    },
    {
      title: 'Flooring Removal',
      shortTitle: 'Flooring Removal',
      href: '/services/flooring-removal',
      slug: 'flooring-removal',
      description: 'Fast demolition of old tile/wood/carpet and subfloor diamond grinding & leveling.',
    },
    {
      title: 'Counters & Decks',
      shortTitle: 'Countertops & Decks',
      href: '/services/counters-and-decks',
      slug: 'counters-and-decks',
      description: 'Custom quartz and granite kitchen tops plus outdoor composite and timber decking.',
    },
  ],
  quickLinks: [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about-us' },
    { label: 'Services', href: '/our-services' },
    { label: 'Contact Us', href: '/contact-us' },
    { label: 'Blog', href: '/blog' },
  ],
  legalLinks: [
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Terms & Conditions', href: '/terms-and-conditions' },
  ],
  cta: {
    label: 'Get a Quote',
    href: '/contact-us',
    phoneLabel: 'Call Us Now',
  },
};

export const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about-us' },
  { label: 'Services', href: '/our-services', dropdown: true },
  { label: 'Contact Us', href: '/contact-us' },
];

export const serviceSublinks = navigationData.servicesNav.map((s) => ({
  label: s.shortTitle,
  href: s.href,
}));

export const legalLinks = navigationData.legalLinks;
