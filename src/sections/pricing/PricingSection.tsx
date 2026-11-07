import Reveal from '@/components/animations/Reveal';
import CtaLink from '@/components/CtaLink';
import PricingComparisonTable from '@/components/LicenseComparisonTable';
import data from '@/data';
import {
  managedServiceAddon,
  planDetails,
  pricingPrinciples,
} from '@/data/plans';
import SplitHead from '@/sections/landing/SplitHead';
import { cn } from '@/lib/utils';

const PricingSection = () => {
  return (
    <>
      {/* Comparison table */}
      <section id="plans" className="py-16 md:py-24">
        <div className="container">
          <Reveal>
            <SplitHead
              index="01"
              kicker="Pricing plans"
              title={
                <>
                  Three tiers.{' '}
                  <span className="lo-em">
                    One licence that scales with value.
                  </span>
                </>
              }
              side="Start with the open-source Community edition, give IT a governed self-service portal with Professional, or go Enterprise for white-glove support and custom scale."
            />
          </Reveal>
          <Reveal>
            <PricingComparisonTable />
          </Reveal>
        </div>
      </section>

      {/* Tier details */}
      <section id="tiers" className="bg-[var(--lo-ink-2)] py-16 md:py-24">
        <div className="container">
          <Reveal>
            <SplitHead
              index="02"
              kicker="What's in each tier"
              title={
                <>
                  From open-source core to{' '}
                  <span className="lo-em">limitless scale.</span>
                </>
              }
              side="Every tier runs on infrastructure you control. The difference is how much of the operations we take off your plate — and how far you want to scale."
            />
          </Reveal>
          <Reveal>
            <div className="lo-ledger grid-cols-1 lg:grid-cols-3">
              {planDetails.map((tier) => (
                <article
                  key={tier.id}
                  id={`tier-${tier.id}`}
                  data-tone={tier.dark ? 'dark' : undefined}
                  className={cn(
                    'flex h-full flex-col px-6 py-7 md:px-8',
                    tier.dark
                      ? 'bg-[var(--lo-black)] text-[var(--lo-on-black)]'
                      : 'lo-cell',
                  )}
                >
                  <span
                    className={cn(
                      'lo-label',
                      tier.dark
                        ? 'text-[var(--lo-accent)]'
                        : 'text-[var(--lo-fg-dim)]',
                    )}
                  >
                    {tier.label}
                  </span>
                  <h3
                    className={cn(
                      'lo-display mt-5 text-[26px]',
                      tier.dark
                        ? 'text-[var(--lo-on-black)]'
                        : 'text-[var(--lo-fg)]',
                    )}
                  >
                    {tier.title}
                  </h3>
                  <p
                    className={cn(
                      'mt-3 text-[14.5px] leading-relaxed',
                      tier.dark
                        ? 'text-[var(--lo-on-black-mut)]'
                        : 'text-[var(--lo-fg-mut)]',
                    )}
                  >
                    {tier.tagline}
                  </p>
                  <dl
                    className={cn(
                      'mt-7 flex flex-col divide-y border-t',
                      tier.dark
                        ? 'divide-[var(--lo-black-line)] border-[var(--lo-black-line)]'
                        : 'divide-[var(--lo-line)] border-[var(--lo-line)]',
                    )}
                  >
                    {tier.points.map((p) => (
                      <div key={p.term} className="py-3.5">
                        <dt
                          className={cn(
                            'text-[14.5px] font-semibold',
                            tier.dark
                              ? 'text-[var(--lo-on-black)]'
                              : 'text-[var(--lo-fg)]',
                          )}
                        >
                          {p.term}
                        </dt>
                        <dd
                          className={cn(
                            'mt-1 text-[14px] leading-relaxed',
                            tier.dark
                              ? 'text-[var(--lo-on-black-mut)]'
                              : 'text-[var(--lo-fg-mut)]',
                          )}
                        >
                          {p.body}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </article>
              ))}
            </div>
          </Reveal>

          {/* Managed service add-on */}
          <Reveal>
            <div className="mt-6 grid grid-cols-1 gap-8 rounded-[8px] border border-[var(--lo-line-strong)] bg-[var(--lo-surface)] px-6 py-7 md:grid-cols-[auto_1fr_auto] md:items-center md:gap-12 md:px-8">
              <span className="lo-label text-[var(--lo-accent)]">
                {managedServiceAddon.label}
              </span>
              <div>
                <h3 className="lo-display text-[22px] text-[var(--lo-fg)]">
                  {managedServiceAddon.title}
                </h3>
                <p className="mt-2 max-w-[60em] text-[14.5px] leading-relaxed text-[var(--lo-fg-mut)]">
                  {managedServiceAddon.body}{' '}
                  <span className="text-[var(--lo-fg-dim)]">
                    {managedServiceAddon.note}
                  </span>
                </p>
              </div>
              <CtaLink
                href={data.cta.personalDemoLink}
                variant="secondary"
                size="sm"
              >
                Ask about managed hosting
              </CtaLink>
            </div>
          </Reveal>
        </div>
      </section>

      {/* How pricing scales */}
      <section id="how-it-scales" className="py-16 md:py-24">
        <div className="container">
          <Reveal>
            <SplitHead
              index="03"
              kicker="How our pricing scales with your success"
              title={
                <>
                  Software decoupled from infrastructure.{' '}
                  <span className="lo-em">Cost coupled to value.</span>
                </>
              }
              side="By decoupling the software from the infrastructure, our model protects your bottom line while accelerating AI adoption."
            />
          </Reveal>
          <div className="grid grid-cols-1 gap-x-16 md:grid-cols-2">
            {pricingPrinciples.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.05}>
                <div className="grid grid-cols-[48px_1fr] gap-4 border-t border-[var(--lo-line-strong)] py-7 md:grid-cols-[64px_1fr] md:py-8">
                  <span className="lo-mono pt-1 text-[13px] font-medium text-[var(--lo-accent)]">
                    0{i + 1}
                  </span>
                  <div>
                    <h3 className="lo-display text-[22px] text-[var(--lo-fg)] md:text-[24px]">
                      {p.title}
                    </h3>
                    <p className="mt-3 max-w-[34em] text-[15px] leading-relaxed text-[var(--lo-fg-mut)]">
                      {p.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default PricingSection;
