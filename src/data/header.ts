import { industries } from '@/data/industries';

export type MenuItem = {
  name: string;
  id: string;
  href: string;
  children?: { name: string; href: string; description?: string }[];
};

export const menu: MenuItem[] = [
  {
    name: 'Solutions',
    id: 'solutions',
    href: '/solutions',
    children: industries.map((industry) => ({
      name: industry.name,
      href: `/solutions/${industry.slug}`,
      description: industry.navDescription,
    })),
  },
  { name: 'Features', id: 'features', href: '/features' },
  { name: 'Pricing', id: 'pricing', href: '/pricing' },
  { name: 'Partners', id: 'partners', href: '/partners' },
  { name: 'FAQ', id: 'faq', href: '/faq' },
  { name: 'About Us', id: 'about-us', href: '/about-us' },
];
