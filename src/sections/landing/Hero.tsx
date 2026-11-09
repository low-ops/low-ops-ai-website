import Reveal from '@/components/animations/Reveal';
import CtaLink from '@/components/CtaLink';
import data from '@/data';
import { formatEur, PRICING } from '@/data/pricing';
import { FC } from 'react';
import Kicker from './Kicker';
import PortalMock from './PortalMock';

const TRUST = [
  ['Self-hosted', 'your infrastructure'],
  ['0', 'per-seat fees'],
  [formatEur(PRICING.professionalMonthly), 'per month, 3 production apps'],
  ['Open', 'source core'],
];

const Hero: FC = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden border-b border-[var(--lo-line)] bg-[var(--lo-ink)]"
    >
      <div
        className="lo-dots pointer-events-none absolute inset-x-0 top-0 h-[70%] [mask-image:linear-gradient(to_bottom,rgba(0,0,0,0.7),transparent)]"
        aria-hidden="true"
      />

      <div className="container relative z-2 pt-14 pb-16 md:pt-24 md:pb-24">
        <div className="grid items-end gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div>
            <Reveal>
              <Kicker>For IT teams with a blocked internal app</Kicker>
            </Reveal>

            <Reveal delay={0.05}>
              <h1 className="lo-display mt-7 text-[40px] text-balance text-[var(--lo-fg)] md:text-[60px] lg:text-[68px]">
                Deploy AI-built apps on your infrastructure
                <span className="lo-em"> — with IT in control.</span>
              </h1>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-7 max-w-[34em] text-[16px] leading-relaxed text-[var(--lo-fg-mut)] md:text-[18px]">
                Low-Ops gives internal apps and AI agents a governed place to
                run. Automate deployment, SSO, backups and operational
                visibility while your IT team controls access and
                infrastructure. It is the layer apps run on — not an
                app-building tool, and not a service that creates the business
                solution for you.
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <CtaLink href={data.cta.requestDemoLink}>
                  Bring one app for a deployment review
                </CtaLink>
                <CtaLink href={data.cta.walkthroughLink} variant="secondary">
                  Watch a deployment walkthrough
                </CtaLink>
              </div>
              <p className="mt-5 max-w-[36em] text-[13.5px] leading-relaxed text-[var(--lo-fg-dim)]">
                Professional starts at {formatEur(PRICING.professionalMonthly)}
                /month for {PRICING.professionalIncludedApps} production apps
                or agents. Unlimited creators and users. Infrastructure and
                optional managed services are additional.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.15} y={20}>
            <PortalMock />
          </Reveal>
        </div>

        <Reveal delay={0.2}>
          <dl className="lo-ledger mt-14 grid-cols-2 md:mt-20 md:grid-cols-4">
            {TRUST.map(([big, small]) => (
              <div key={small} className="lo-cell px-5 py-5 md:px-6">
                <dt className="lo-display text-[24px] text-[var(--lo-fg)] md:text-[30px]">
                  {big}
                </dt>
                <dd className="lo-label mt-1.5 text-[var(--lo-fg-dim)]">
                  {small}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
};

export default Hero;
