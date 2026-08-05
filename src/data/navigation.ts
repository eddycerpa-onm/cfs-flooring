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
      title: 'Hardwood Flooring Installation & Refinishing',
      shortTitle: 'Hardwood Flooring',
      href: '/services/hardwood-flooring',
      slug: 'hardwood-flooring',
      description: 'Solid & engineered hardwood installation, custom staining, and dustless refinishing.',
    },
    {
      title: 'Laminate Flooring Installation',
      shortTitle: 'Laminate Flooring',
      href: '/services/laminate-flooring',
      slug: 'laminate-flooring',
      description: 'Durable, scratch-resistant laminate flooring with authentic wood textures.',
    },
    {
      title: 'Luxury Vinyl Plank (LVP) Flooring',
      shortTitle: 'LVP Flooring',
      href: '/services/lvp-flooring',
      slug: 'lvp-flooring',
      description: '100% waterproof luxury vinyl plank and tile with rigid core stability.',
    },
    {
      title: 'Custom Tile & Ceramic Installation',
      shortTitle: 'Tile Flooring',
      href: '/services/tile-flooring',
      slug: 'tile-flooring',
      description: 'Precision porcelain, ceramic, and natural stone setting for floors and walls.',
    },
    {
      title: 'Carpet Installation',
      shortTitle: 'Carpet Installation',
      href: '/services/carpet-installation',
      slug: 'carpet-installation',
      description: 'Plush residential carpeting, power-stretching, and commercial carpet tiles.',
    },
    {
      title: 'Commercial Flooring & VCT',
      shortTitle: 'Commercial Flooring',
      href: '/services/commercial-flooring',
      slug: 'commercial-flooring',
      description: 'Heavy-duty VCT, sheet vinyl, rubber tile, and low-downtime installation.',
    },
    {
      title: 'Flooring Repair & Restoration',
      shortTitle: 'Flooring Repair',
      href: '/services/flooring-repair',
      slug: 'flooring-repair',
      description: 'Hardwood board replacement, subfloor leveling, water damage repair, and removal.',
    },
    {
      title: 'Floor Care & Maintenance',
      shortTitle: 'Floor Maintenance',
      href: '/services/maintenance',
      slug: 'maintenance',
      description: 'Dustless screen & recoat, deep tile grout cleaning, and commercial strip & wax.',
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
