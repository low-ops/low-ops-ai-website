import Reveal from '@/components/animations/Reveal';
import CtaLink from '@/components/CtaLink';
import PricingComparisonTable from '@/components/LicenseComparisonTable';
import data from '@/data';
import {
  managedServiceAddon,
  planDetails,
  pricingPrinciples,
} from '@/data/plans';
import {
  BILLABLE_UNIT,
  formatEur,
  TEN_APP_EXAMPLE,
} from '@/data/pricing';
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
                href={data.cta.requestDemoLink}
                variant="secondary"
                size="sm"
              >
                Ask about managed hosting
              </CtaLink>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Billable unit */}
      <section id="billable-unit" className="py-16 md:py-24">
        <div className="container">
          <Reveal>
            <SplitHead
              index="03"
              kicker="The billable unit"
              title={
                <>
                  Production apps and agents.{' '}
                  <span className="lo-em">Not seats, not every environment.</span>
                </>
              }
              side={`Ten billable production apps cost ${formatEur(TEN_APP_EXAMPLE.licenceMonthly)}/month in software licensing. That is a calculated licence example, not a complete quote.`}
            />
          </Reveal>
          <Reveal>
            <div className="lo-ledger grid-cols-1 md:grid-cols-3">
              {(
                [
                  ['Counts as a billable app', BILLABLE_UNIT.counts],
                  ['Included with a billed app', BILLABLE_UNIT.included],
                  ['Billed separately', BILLABLE_UNIT.excluded],
                ] as const
              ).map(([title, items]) => (
                <div key={title} className="lo-cell px-6 py-7 md:px-8">
                  <h3 className="lo-display text-[22px] text-[var(--lo-fg)]">
                    {title}
                  </h3>
                  <ul className="mt-5 flex flex-col divide-y divide-[var(--lo-line)] border-t border-[var(--lo-line)]">
                    {items.map((item) => (
                      <li
                        key={item}
                        className="py-3 text-[14.5px] leading-relaxed text-[var(--lo-fg-mut)]"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Adoption checklist */}
      <section id="first-deployment" className="bg-[var(--lo-ink-2)] py-16 md:py-24">
        <div className="container">
          <Reveal>
            <SplitHead
              index="04"
              kicker="First deployment effort"
              title={
                <>
                  Platform install is not the same as{' '}
                  <span className="lo-em">production approval.</span>
                </>
              }
              side="Documentation already states single-node sizing. “Less than a day” refers to installing the platform once prerequisites are met — not the entire customer rollout."
            />
          </Reveal>
          <Reveal>
            <div className="lo-ledger grid-cols-1 md:grid-cols-2">
              <div className="lo-cell px-6 py-7 md:px-8">
                <h3 className="lo-display text-[22px] text-[var(--lo-fg)]">
                  Platform installation
                </h3>
                <ul className="mt-5 flex flex-col divide-y divide-[var(--lo-line)] border-t border-[var(--lo-line)] text-[14.5px] leading-relaxed text-[var(--lo-fg-mut)]">
                  <li className="py-3">
                    Kubernetes-compatible platform, or the documented
                    single-node evaluation host (16 GB RAM, 8-core CPU, 500 GB
                    disk — not for production).
                  </li>
                  <li className="py-3">
                    DNS for the platform base domain, SSH with sudo, and
                    registry credentials.
                  </li>
                  <li className="py-3">
                    With those in place, a Professional environment is typically
                    installed in less than a day.
                  </li>
                </ul>
              </div>
              <div className="lo-cell px-6 py-7 md:px-8">
                <h3 className="lo-display text-[22px] text-[var(--lo-fg)]">
                  First-app production approval
                </h3>
                <ul className="mt-5 flex flex-col divide-y divide-[var(--lo-line)] border-t border-[var(--lo-line)] text-[14.5px] leading-relaxed text-[var(--lo-fg-mut)]">
                  <li className="py-3">
                    Identity provider connected; who can deploy vs who can open
                    the app.
                  </li>
                  <li className="py-3">
                    Network boundary checked; backups configured; a restore or
                    rollback tested.
                  </li>
                  <li className="py-3">
                    Named technical owner accepts the handoff. Application-level
                    or AI-model controls that the platform does not provide are
                    scoped separately.
                  </li>
                </ul>
              </div>
            </div>
          </Reveal>
          <Reveal>
            <p className="mt-6 text-[14px] text-[var(--lo-fg-mut)]">
              Division of responsibility for updates, monitoring, incidents and
              tested recovery is in the{' '}
              <CtaLink href="/security" variant="ghost" className="text-[14px]">
                security pack
              </CtaLink>{' '}
              and the{' '}
              <CtaLink href="/pilot" variant="ghost" className="text-[14px]">
                one-app pilot
              </CtaLink>
              .
            </p>
          </Reveal>
        </div>
      </section>

      {/* How pricing scales */}
      <section id="how-it-scales" className="py-16 md:py-24">
        <div className="container">
          <Reveal>
            <SplitHead
              index="05"
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
