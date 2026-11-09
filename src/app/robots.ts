import { SITE_URL } from '@/data/seo';
import type { MetadataRoute } from 'next';

/** Required for GitHub Pages (`output: 'export'`). */
export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
