import comotionLogo from '@/assets/comotion-logo.png';
import inntelligenceLogo from '@/assets/inntelligence-logo.png';
import lowcodelabsLogo from '@/assets/lowcodelabs-logo.png';
import { formatEur, PRICING } from '@/data/pricing';

export const partnersMetadata = {
  title: 'Partners',
  description:
    'The Low-Ops.AI partner programme for MSPs, IT consultancies and AI studios: deploy a governed environment per client, pass through the Professional licence, keep the margin on implementation and managed services.',
};

/** Why an MSP, consultancy or AI studio partners with us (GTM Play 3). */
export const partnerBenefits = [
  {
    title: 'One governed environment per client',
    body: 'Spin up a private Low-Ops.AI environment for each client in a day. Every client gets the same self-service portal, SSO, pipelines and audit trail — you get a standard you can operate at scale.',
  },
  {
    title: `Pass-through licence, your margin on top`,
    body: `The Professional licence (${formatEur(PRICING.professionalMonthly)}/mo, ${PRICING.professionalIncludedApps} apps included) is passed through transparently. Implementation, the apps you build and the managed service around them are your revenue.`,
  },
  {
    title: 'Recurring managed-service revenue',
    body: 'Operate client environments yourself or resell our Managed Service add-on. Either way, every digital employee you deploy becomes a monthly line on your invoice, not a one-off project.',
  },
  {
    title: 'Enablement, not just a reseller agreement',
    body: 'Technical training for your engineers, co-marketing, and a direct line to the team that builds the platform. The operating details — onboarding, licence ownership, support and delivery — are listed below.',
  },
];

export const partnerOperating = [
  {
    title: 'Onboarding',
    body: '1) Apply through the partner intake. 2) We confirm fit and run technical enablement. 3) You register the first named client opportunity with us in writing before the pitch. 4) You install a Professional environment in the client tenancy and complete a one-app handoff.',
  },
  {
    title: 'Client-licence ownership',
    body: 'The end client is the licensee of the Professional (or Enterprise) software. Partners do not share or reuse a client licence key across customers. Development, staging and production for that client count as one licensed installation.',
  },
  {
    title: 'Delivery responsibilities',
    body: 'You own implementation, first-app configuration and (if contracted) managed operations. We own the product, patches to the platform, and partner engineering support. Application-level security and AI-model controls remain a separately scoped workstream.',
  },
  {
    title: 'Support escalation',
    body: 'The client’s first line is the partner. The partner escalates platform defects to Low-Ops.AI engineering. There is no public deal-registration portal yet — email hello@low-ops.ai to register an opportunity. We will not invent rules we do not operate.',
  },
];

export type PartnerType = 'Implementation partner' | 'Technology partner';

export const partnersData: {
  title: string;
  type: PartnerType;
  region: string;
  description: string;
  imagePath: typeof comotionLogo;
  link: string;
}[] = [
  {
    title: 'Comotion',
    type: 'Implementation partner',
    region: 'South Africa · USA',
    description:
      'Certified in both Mendix app development and Low-Ops.AI implementation. Comotion delivers governed low-code and AI solutions for mid-market clients on their own infrastructure.',
    imagePath: comotionLogo,
    link: 'https://www.comotion.us/',
  },
  {
    title: 'Lowcode Labs',
    type: 'Implementation partner',
    region: 'India',
    description:
      'Experts in Mendix development and Low-Ops.AI implementation, helping organisations move from scattered experiments to one governed platform.',
    imagePath: lowcodelabsLogo,
    link: 'https://lowcodelabs.in/',
  },
  {
    title: 'Inntelligence AI',
    type: 'Technology partner',
    region: 'The Netherlands',
    description:
      'The Inntelligence AI platform lets you build custom AI workflows and agents for your business — fully integrated with Low-Ops.AI for a private, scalable, low-maintenance setup.',
    imagePath: inntelligenceLogo,
    link: 'https://inntelligence.nl/',
  },
];
