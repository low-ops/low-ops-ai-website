import { industries } from '@/data/industries';

export const QUICK_LINKS = [
  { label: 'Features', href: '/features' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Partners', href: '/partners' },
  { label: 'FAQ', href: '/faq' },
  { label: 'About Us', href: '/about-us' },
];

export const START_LINKS = [
  { label: 'Ways to start', href: '/start' },
  { label: 'Request a demo', href: '/request-demo' },
  { label: 'One-app pilot', href: '/pilot' },
  { label: 'Install Community', href: '/community' },
  { label: 'Log in', href: 'https://portal.app.low-ops.com' },
];

export const RESOURCE_LINKS = [
  { label: 'Deployment walkthrough', href: '/walkthrough' },
  { label: 'Security pack', href: '/security' },
  { label: 'Licensing', href: '/licensing' },
  { label: 'Efficient Group case study', href: '/case-studies/efficient-group' },
  {
    label: 'What IT needs to approve an app',
    href: '/guides/it-approval-for-internal-ai-apps',
  },
];

export const INDUSTRY_LINKS = [
  ...industries.map((industry) => ({
    label: industry.name,
    href: `/solutions/${industry.slug}`,
  })),
  { label: 'All solutions', href: '/solutions' },
];

export const DECORATIVE_LABELS = [
  { text: 'Automation', classes: 'top-2 left-32', planePosition: 'top-left' },
  {
    text: 'Cost Effective',
    classes: 'bottom-12 left-16',
    planePosition: 'bottom-left',
  },
  { text: 'Security', classes: 'top-8 right-8', planePosition: 'top-right' },
  {
    text: 'Self-Service',
    classes: 'bottom-24 right-32',
    planePosition: 'bottom-right',
  },
] as const;
