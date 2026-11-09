/**
 * Single source of truth for the GTM pricing engine. Used by the pricing
 * teaser, the ROI calculator and the comparison table so numbers never drift.
 */
export const PRICING = {
  currency: '€',
  /** Professional tier — primary commercial entry point. */
  professionalMonthly: 499,
  /** Apps / agents included in the Professional tier. */
  professionalIncludedApps: 3,
  /** Expansion — per additional production app / agent per month. */
  additionalAppMonthly: 39,
} as const;

/** Assumptions behind the ROI calculator (shown next to it as a footnote). */
export const ROI_ASSUMPTIONS = {
  /** Hours of IT operations work saved per app per month thanks to the automations. */
  itHoursSavedPerApp: 10,
  /** Fully loaded hourly cost of IT / DevOps time. */
  itHourlyRate: 80,
  /** Default self-hosted infrastructure cost per month. */
  defaultInfraMonthly: 200,
} as const;

export const formatEur = (value: number) =>
  `${PRICING.currency}${Math.round(value).toLocaleString('en-US')}`;

/** What a "billable app" means on the Professional licence. */
export const BILLABLE_UNIT = {
  counts: [
    'A production web app, API, worker or AI agent that is running for end users.',
    'A production agent and a separate production UI are two billable apps if both are in production.',
    'Each additional client or organisation production environment is a separate licensed installation — see licensing.',
  ],
  included: [
    'Development and staging environments that belong to a billed production app.',
    'Shared platform services such as PostgreSQL, Redis, queues and object storage.',
    'Unlimited creators, operators and end users.',
  ],
  excluded: [
    'Your cloud or data-centre infrastructure.',
    'Model and third-party API usage incurred by the apps themselves.',
    'Implementation, training and the optional managed-operations add-on.',
    'Applicable taxes.',
  ],
} as const;

/** Monthly platform cost for a given number of production apps. */
export const monthlyPlatformCost = (apps: number) =>
  PRICING.professionalMonthly +
  Math.max(0, apps - PRICING.professionalIncludedApps) *
    PRICING.additionalAppMonthly;

export const TEN_APP_EXAMPLE = {
  apps: 10,
  licenceMonthly: monthlyPlatformCost(10),
} as const;
