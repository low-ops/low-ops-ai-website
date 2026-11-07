import type { Metadata } from 'next';

export const SITE_URL = 'https://low-ops.ai';

const TITLE = 'Low-Ops.AI — The Internal Developer Platform for the AI era';
const DESCRIPTION =
  'Let domain experts build and deploy AI agents and web apps at the speed of thought, while IT keeps complete oversight, governance and data privacy. Self-hosted, private by default, open-source core. Pay per app — never per seat.';

export const nextMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: '%s · Low-Ops.AI',
  },
  description: DESCRIPTION,
  keywords: [
    'internal developer platform',
    'idp',
    'AI internal developer platform',
    'shadow AI',
    'shadow IT',
    'AI governance',
    'AI adoption strategy',
    'self-service portal',
    'digital employees',
    'citizen developers',
    'domain experts',
    'AI agents',
    'vibe coding',
    'agentic workflows',
    'MCP server',
    'AI guardrails',
    'GDPR',
    'EU AI Act',
    'DORA',
    'NIS2',
    'SOx compliance',
    'data sovereignty',
    'private cloud',
    'self-hosted',
    'on-premises',
    'open source',
    'no vendor lock-in',
    'healthcare AI platform',
    'government AI platform',
    'pharma AI platform',
    'financial services AI platform',
    'construction AI platform',
    'MSP deployment platform',
    'fintech',
    'healthtech',
    'insurtech',
    'legaltech',
    'biotech',
    'mendix',
    'kubernetes',
    'docker',
    'devops',
    'devsecops',
    'platform engineering',
    'CI/CD',
    'Mendix private cloud',
    'secure Mendix hosting',
    'Mendix Kubernetes deployment',
  ],
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: 'Low-Ops.AI',
    type: 'website',
    locale: 'en_US',
    images: [{ url: `${SITE_URL}/preview.png` }],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description:
      'Empower domain experts to build AI solutions. Give IT complete oversight. Self-hosted, private by default, no per-seat tax.',
    images: [`${SITE_URL}/preview.png`],
  },
};

export const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Low-Ops.AI',
  applicationCategory: 'DeveloperApplication',
  operatingSystem: 'All',
  offers: [
    {
      '@type': 'Offer',
      name: 'Community',
      price: '0',
      priceCurrency: 'EUR',
      description: 'Open-source core, self-hosted, manual configuration.',
    },
    {
      '@type': 'Offer',
      name: 'Professional',
      price: '499',
      priceCurrency: 'EUR',
      description:
        'Centralized self-service portal, MCP server, automated pipelines and 3 apps. Additional apps €39/mo each. Unlimited creators.',
    },
  ],
  description: DESCRIPTION,
  featureList:
    'Self-service portal, Central IT oversight, Audit logs, SSO, Automated CI/CD, Backups, MCP server, Private-by-default networking, Self-hosted, Open-source core, Observability, Disaster recovery',
  screenshot: `${SITE_URL}/preview.png`,
  softwareVersion: '3.5',
};
