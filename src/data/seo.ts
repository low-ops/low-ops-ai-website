import type { Metadata } from 'next';

export const SITE_URL = 'https://low-ops.ai';

const TITLE =
  'Low-Ops.AI — Deploy internal apps on your infrastructure, with IT in control';
const DESCRIPTION =
  'Low-Ops is the deployment and operations layer for internal apps and AI agents. Automate deployment, SSO, backups and operational visibility while your IT team controls access and infrastructure. No per-seat licensing.';

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
    'self-hosted app platform',
    'IT bottleneck',
    'AI governance',
    'self-service portal',
    'AI agents',
    'MCP server',
    'GDPR',
    'EU AI Act',
    'DORA',
    'NIS2',
    'data sovereignty',
    'private cloud',
    'self-hosted',
    'on-premises',
    'open source',
    'healthcare AI platform',
    'government AI platform',
    'pharma AI platform',
    'financial services AI platform',
    'construction AI platform',
    'MSP deployment platform',
    'mendix',
    'kubernetes',
    'docker',
    'devops',
    'platform engineering',
    'CI/CD',
    'Mendix private cloud',
    'secure Mendix hosting',
    'Mendix Kubernetes deployment',
  ],
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    siteName: 'Low-Ops.AI',
    type: 'website',
    locale: 'en_US',
    images: [{ url: `${SITE_URL}/preview.png` }],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description:
      'The deployment and operations layer for internal apps and AI agents. Self-hosted, no per-seat licensing, IT in control.',
    images: [`${SITE_URL}/preview.png`],
  },
};

export const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Low-Ops.AI',
  applicationCategory: 'DeveloperApplication',
  operatingSystem: 'All',
  url: SITE_URL,
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
        'Centralized self-service portal, MCP server, automated pipelines and 3 production apps. Additional apps €39/mo each. Unlimited creators.',
    },
  ],
  description: DESCRIPTION,
  featureList:
    'Self-service portal, Central IT oversight, Audit logs, SSO, Automated CI/CD, Backups, MCP server, Private-by-default networking, Self-hosted, Open-source core, Observability, Disaster recovery',
  screenshot: `${SITE_URL}/preview.png`,
  softwareVersion: '3.5',
};
