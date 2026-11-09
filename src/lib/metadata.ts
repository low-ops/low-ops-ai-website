import { SITE_URL } from '@/data/seo';
import type { Metadata } from 'next';

type PageSeo = {
  title: string;
  description: string;
  /** Path beginning with `/`, or `/` for the homepage. */
  path: string;
};

/** Per-route title, description, canonical and Open Graph URL. */
export const pageMetadata = ({
  title,
  description,
  path,
}: PageSeo): Metadata => {
  const url = path === '/' ? SITE_URL : `${SITE_URL}${path}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      type: 'website',
    },
    twitter: {
      title,
      description,
    },
  };
};
