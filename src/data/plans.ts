import data from '@/data';
import { PRICING } from '@/data/pricing';

/** Comparison rows, in display order. Keys are the row labels. */
export const PLAN_ROW_KEYS = [
  'Software license',
  'Included apps / agents',
  'Additional apps / agents',
  'Deployment',
  'Creators & users',
  'Governance & UX',
] as const;

export type PlanRowKey = (typeof PLAN_ROW_KEYS)[number];

export type Plan = {
  value: string;
  label: string;
  /** Large headline price. */
  price: string;
  /** Small text next to the headline price. */
  priceNote: string;
  /** "Best for" line. */
  description: string;
  items: Record<PlanRowKey, string>;
  isPopular: boolean;
  link: string;
  ctaLabel: string;
};

export const plans: Plan[] = [
  {
    value: 'community',
    label: 'Community',
    price: 'Free',
    priceNote: '€0 · open source',
    description:
      'Teams wanting to experience an easy to upgrade and maintain private platform.',
    items: {
      'Software license': 'Free / €0 (open source)',
      'Included apps / agents': 'Unlimited',
      'Additional apps / agents': 'Free',
      Deployment: 'Self-hosted',
      'Creators & users': 'Unlimited',
      'Governance & UX': 'Manual config via CLI / Git',
    },
    isPopular: false,
    link: data.cta.communityPageLink,
    ctaLabel: 'See evaluation prerequisites',
  },
  {
    value: 'professional',
    label: 'Professional',
    price: `From ${PRICING.currency}${PRICING.professionalMonthly}`,
    priceNote: 'per month',
    description: 'CIOs rolling out company-wide AI with strict governance.',
    items: {
      'Software license': `Starts at ${PRICING.currency}${PRICING.professionalMonthly} / month`,
      'Included apps / agents': `${PRICING.professionalIncludedApps}`,
      'Additional apps / agents': `${PRICING.currency}${PRICING.additionalAppMonthly} / month`,
      Deployment: 'Self-hosted (managed available)',
      'Creators & users': 'Unlimited',
      'Governance & UX': 'Centralized self-service portal',
    },
    isPopular: true,
    link: data.cta.personalDemoLink,
    ctaLabel: 'Request a demo',
  },
  {
    value: 'enterprise',
    label: 'Enterprise',
    price: 'Custom',
    priceNote: 'pricing',
    description:
      'Large organizations requiring white-glove support and custom scale.',
    items: {
      'Software license': 'Custom pricing',
      'Included apps / agents': 'Unlimited',
      'Additional apps / agents': 'Custom volume rates',
      Deployment: 'Self-hosted or fully managed',
      'Creators & users': 'Unlimited',
      'Governance & UX': 'Professional + advanced audit log',
    },
    isPopular: false,
    link: data.cta.personalDemoLink,
    ctaLabel: 'Talk to sales',
  },
];

export type PlanDetail = {
  id: string;
  label: string;
  title: string;
  tagline: string;
  points: { term: string; body: string }[];
  dark?: boolean;
};

/** Long-form description of each tier (shown under the comparison table). */
export const planDetails: PlanDetail[] = [
  {
    id: 'community',
    label: 'Community',
    title: 'The open-source core',
    tagline:
      'Our barebone, open-source version. Proof that our "no vendor lock-in" promise is real.',
    points: [
      { term: 'License fee', body: 'Free forever.' },
      {
        term: 'Infrastructure',
        body: 'Self-hosted on your own servers or local hardware.',
      },
      {
        term: 'Core capabilities',
        body: 'Access to the foundational open-source engine to run AI apps and agents.',
      },
      {
        term: 'Manual operations',
        body: 'You handle allocation of Git projects, PostgreSQL databases and roles, RabbitMQ, and object storage access.',
      },
      { term: 'Support', body: 'Community forums and documentation.' },
    ],
  },
  {
    id: 'professional',
    label: 'Professional',
    title: 'The AI innovation factory',
    tagline:
      'Designed for organizations executing their AI transformation. Empower domain experts to build at a rapid pace while IT retains complete data privacy and architectural control.',
    dark: true,
    points: [
      {
        term: 'Software license',
        body: `${PRICING.currency}${PRICING.professionalMonthly}/month.`,
      },
      {
        term: 'Deployment',
        body: 'Self-hosted in your own environment. Platform data stores stay there; apps can still call external services you configure.',
      },
      {
        term: `${PRICING.professionalIncludedApps} solutions included`,
        body: 'A baseline portfolio to immediately accelerate employee productivity.',
      },
      {
        term: 'Self-service portal',
        body: 'Domain experts deploy solutions via a governed, automated portal without waiting for IT support.',
      },
      {
        term: 'MCP server included',
        body: 'Your coding agent can access Low-Ops.AI to speed up app troubleshooting.',
      },
      {
        term: 'Day 1 & 2 operations automated',
        body: 'CI/CD pipelines, automated backups, centralized authentication (Keycloak) and advanced monitoring are handled out of the box.',
      },
    ],
  },
  {
    id: 'enterprise',
    label: 'Enterprise',
    title: 'Limitless scale',
    tagline:
      'Recommended when you are scaling beyond roughly 400 employees. That figure is guidance, not an eligibility rule.',
    points: [
      { term: 'Unlimited everything', body: 'Uncapped apps and agents.' },
      {
        term: 'White-glove support',
        body: 'Dedicated account manager and prioritized IT-support SLA.',
      },
      {
        term: 'Roadmap VIP',
        body: 'Your feature requests end up higher in the backlog that shapes our roadmap.',
      },
    ],
  },
];

export const managedServiceAddon = {
  label: 'Add-on',
  title: 'Fully managed service',
  body: "Don't want to operate the platform yourselves? We can deploy, monitor and maintain your Professional or Enterprise environment. Two tenancy models are available: infrastructure that stays under your cloud account name, or a private cloud we operate on your behalf. We agree which model applies before work starts.",
  note: 'Pricing depends on compute, storage and the tenancy model. It is not included in the software licence.',
};

/** "How our pricing scales with your success". */
export const pricingPrinciples = [
  {
    title: 'Customer-controlled hosting',
    body: 'Self-hosting keeps the platform and its data stores in the environment you choose. Applications can still call external models or APIs if you attach them. See the security pack for the boundary.',
  },
  {
    title: 'Zero "creator" taxes',
    body: 'We want all your domain experts experimenting. No charges per user.',
  },
  {
    title: 'The app license',
    body: `When a domain expert builds a tool that saves your team 50 hours a month, that tool becomes a permanent digital employee. At ${PRICING.currency}${PRICING.additionalAppMonthly}/month for an additional app on the Professional tier, the ROI on each deployed solution is massive and immediate.`,
  },
  {
    title: 'Built-in cost governance',
    body: 'An idea that never earned its place does not have to linger as cost. Delete it from the central portal and the bill updates.',
  },
];
