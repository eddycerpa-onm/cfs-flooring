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
      title: 'Hardwood, Laminate & LVP',
      shortTitle: 'Hardwood, Laminate & LVP',
      href: '/hardwood-laminate-and-lvp',
      slug: 'hardwood-laminate-and-lvp',
      description: 'Solid & engineered hardwood, high-durability laminate, and 100% waterproof LVP.',
    },
    {
      title: 'Carpet Installation',
      shortTitle: 'Carpet Installation',
      href: '/Carpet-Installation',
      slug: 'Carpet-Installation',
      description: 'Plush residential carpeting, power-stretching, and commercial carpet tiles.',
    },
    {
      title: 'Sand & Finish',
      shortTitle: 'Sand & Finish',
      href: '/Sand-and-Finish',
      slug: 'Sand-and-Finish',
      description: 'Dust-controlled hardwood sanding, custom stain color matching, and refinishing.',
    },
    {
      title: 'Ceramic Tile',
      shortTitle: 'Ceramic Tile',
      href: '/Ceramic-Tile',
      slug: 'Ceramic-Tile',
      description: 'Precision porcelain, ceramic, and natural stone tile setting for floors and walls.',
    },
    {
      title: 'Sheet Vinyl',
      shortTitle: 'Sheet Vinyl',
      href: '/Sheet-Vinyl',
      slug: 'Sheet-Vinyl',
      description: 'Seamless waterproof sheet vinyl flooring with realistic wood and stone patterns.',
    },
    {
      title: 'VCT Flooring',
      shortTitle: 'VCT Flooring',
      href: '/VCT-flooring',
      slug: 'VCT-flooring',
      description: 'Heavy-duty VCT tile installation, concrete slab grinding, and commercial prep.',
    },
    {
      title: 'Flooring Removal',
      shortTitle: 'Flooring Removal',
      href: '/flooring-removal',
      slug: 'flooring-removal',
      description: 'Dust-controlled tear-out of carpet, tile, hardwood, and old glue/mastic.',
    },
    {
      title: 'Countertops & Decks',
      shortTitle: 'Countertops & Decks',
      href: '/counters-and-decks',
      slug: 'counters-and-decks',
      description: 'Custom quartz/granite kitchen countertops and outdoor composite/timber deck building.',
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
