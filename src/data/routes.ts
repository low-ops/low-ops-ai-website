import { industries } from '@/data/industries';

/** Public marketing routes included in the sitemap. */
export const MARKETING_PATHS = [
  '/',
  '/start',
  '/request-demo',
  '/community',
  '/pilot',
  '/walkthrough',
  '/security',
  '/licensing',
  '/features',
  '/pricing',
  '/partners',
  '/partners/apply',
  '/faq',
  '/about-us',
  '/comparison',
  '/solutions',
  '/case-studies/efficient-group',
  '/guides/it-approval-for-internal-ai-apps',
  '/guides/private-cloud-mendix',
  '/privacy-policy',
  '/license-agreement',
] as const;

export const industryPaths = industries.map(
  (industry) => `/solutions/${industry.slug}`,
);

export const sitemapPaths = [...MARKETING_PATHS, ...industryPaths];
