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

/** Monthly platform cost for a given number of production apps. */
export const monthlyPlatformCost = (apps: number) =>
  PRICING.professionalMonthly +
  Math.max(0, apps - PRICING.professionalIncludedApps) *
    PRICING.additionalAppMonthly;
