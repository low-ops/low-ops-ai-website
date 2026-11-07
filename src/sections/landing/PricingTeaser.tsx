import Reveal from '@/components/animations/Reveal';
import CtaLink from '@/components/CtaLink';
import data from '@/data';
import { formatEur, PRICING } from '@/data/pricing';
import { FC } from 'react';
import SplitHead from './SplitHead';

const TIERS = [
  {
    name: 'Community',
    price: 'Free',
    cadence: 'forever',
    tagline:
      'The open-source core. For DIY developers who want to prove there is no lock-in.',
    points: [
      'Open-source engine, self-hosted',
      'Manual configuration',
      'Community support',
    ],
    cta: { label: 'Get the code', href: data.cta.communityLink },
    highlight: false,
  },
  {
    name: 'Professional',
    price: `From ${formatEur(PRICING.professionalMonthly)}`,
    cadence: 'per month',
    tagline:
      'The governed self-service portal for IT. The remedy to Shadow AI.',
    points: [
      'Centralised self-service portal',
      'MCP server & automated pipelines',
      `${PRICING.professionalIncludedApps} apps included · ${formatEur(PRICING.additionalAppMonthly)}/mo per additional app`,
      'Unlimited creators — no seat tax',
      'SSO, backups & Day-2 ops automated',
    ],
    cta: { label: 'Book a demo', href: data.cta.personalDemoLink },
    highlight: true,
  },
  {
    name: 'Managed service',
    price: 'Add-on',
    cadence: 'for Professional & Enterprise',
    tagline:
      'No internal DevOps capacity? We host and operate your environment for you.',
    points: [
      'We run your Low-Ops.AI environment',
      'Upgrades, monitoring & recovery handled',
      'Ideal for MSP-delivered client platforms',
    ],
    cta: { label: 'Talk to us', href: data.cta.personalDemoLink },
    highlight: false,
  },
];

const PricingTeaser: FC = () => {
  return (
    <section
      id="pricing"
      className="relative z-10 bg-[var(--lo-ink-2)] py-16 md:py-24"
    >
      <div className="container">
        <Reveal>
          <SplitHead
            index="08"
            kicker="Pricing"
            title={
              <>
                Pay for value. <span className="lo-em">Never for seats.</span>
              </>
            }
            side="Software licensing decoupled from headcount. Let everyone experiment; pay only for the apps and agents that make it to production. Start free with the Community edition, or go straight to the governed Professional tier."
          />
        </Reveal>

        <Reveal>
          <div className="lo-ledger grid-cols-1 lg:grid-cols-3">
            {TIERS.map((tier) => (
              <article
                key={tier.name}
                data-tone={tier.highlight ? 'dark' : undefined}
                className={`flex h-full flex-col px-6 py-7 md:px-8 ${
                  tier.highlight
                    ? 'bg-[var(--lo-black)] text-[var(--lo-on-black)]'
                    : 'lo-cell'
                }`}
              >
                <div className="flex items-center justify-between gap-3">
                  <h3
                    className={`lo-label ${
                      tier.highlight
                        ? 'text-[var(--lo-accent)]'
                        : 'text-[var(--lo-fg-dim)]'
                    }`}
                  >
                    {tier.name}
                  </h3>
                  {tier.highlight && (
                    <span className="lo-label text-[var(--lo-on-black-dim)]">
                      Most chosen
                    </span>
                  )}
                </div>
                <div className="mt-6 flex items-baseline gap-2">
                  <span
                    className={`lo-display text-[40px] ${
                      tier.highlight
                        ? 'text-[var(--lo-on-black)]'
                        : 'text-[var(--lo-fg)]'
                    }`}
                  >
                    {tier.price}
                  </span>
                  <span
                    className={`text-[13.5px] ${
                      tier.highlight
                        ? 'text-[var(--lo-on-black-dim)]'
                        : 'text-[var(--lo-fg-dim)]'
                    }`}
                  >
                    {tier.cadence}
                  </span>
                </div>
                <p
                  className={`mt-3 text-[14.5px] leading-relaxed ${
                    tier.highlight
                      ? 'text-[var(--lo-on-black-mut)]'
                      : 'text-[var(--lo-fg-mut)]'
                  }`}
                >
                  {tier.tagline}
                </p>
                <ul
                  className={`mt-7 flex flex-col divide-y border-t ${
                    tier.highlight
                      ? 'divide-[var(--lo-black-line)] border-[var(--lo-black-line)]'
                      : 'divide-[var(--lo-line)] border-[var(--lo-line)]'
                  }`}
                >
                  {tier.points.map((point) => (
                    <li
                      key={point}
                      className={`flex items-start gap-3 py-3 text-[14.5px] ${
                        tier.highlight
                          ? 'text-[var(--lo-on-black)]'
                          : 'text-[var(--lo-fg)]'
                      }`}
                    >
                      <span
                        className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--lo-accent)]"
                        aria-hidden="true"
                      />
                      {point}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-8">
                  <CtaLink
                    href={tier.cta.href}
                    variant={tier.highlight ? 'inverse' : 'secondary'}
                    className="w-full"
                  >
                    {tier.cta.label}
                  </CtaLink>
                </div>
              </article>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-6 text-[14px] text-[var(--lo-fg-mut)]">
            Need air-gapped deployment, volume pricing or a dedicated SLA?{' '}
            <CtaLink href="/pricing" variant="ghost" className="text-[14px]">
              Compare all tiers
            </CtaLink>
          </p>
        </Reveal>
      </div>
    </section>
  );
};

export default PricingTeaser;
