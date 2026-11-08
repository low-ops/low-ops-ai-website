import Reveal from '@/components/animations/Reveal';
import CtaLink from '@/components/CtaLink';
import data from '@/data';
import { FC } from 'react';
import Kicker from './Kicker';
import PortalMock from './PortalMock';

const TRUST = [
  ['100%', 'self-hosted'],
  ['0', 'per-seat fees'],
  ['€499', 'per month, 3 apps'],
  ['Open', 'source core'],
];

const Hero: FC = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden border-b border-[var(--lo-line)] bg-[var(--lo-ink)]"
    >
      {/* dot field, fading downward — the logo motif as texture */}
      <div
        className="lo-dots pointer-events-none absolute inset-x-0 top-0 h-[70%] [mask-image:linear-gradient(to_bottom,rgba(0,0,0,0.7),transparent)]"
        aria-hidden="true"
      />

      <div className="container relative z-2 pt-14 pb-16 md:pt-24 md:pb-24">
        <div className="grid items-end gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div>
            <Reveal>
              <Kicker>Private Innovation Factory</Kicker>
            </Reveal>

            <Reveal delay={0.05}>
              <h1 className="lo-display mt-7 text-[44px] text-balance text-[var(--lo-fg)] md:text-[66px] lg:text-[76px]">
                Let your experts build with AI.{' '}
                <span className="lo-em">Keep IT in control.</span>
              </h1>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-7 max-w-[32em] text-[16px] leading-relaxed text-[var(--lo-fg-mut)] md:text-[18px]">
                Low-Ops.AI lets domain experts build and deploy custom AI agents
                and web apps at rapid pace — while IT keeps complete oversight,
                governance and data privacy. On your infrastructure. No per-seat
                creator tax.
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <CtaLink href={data.cta.shadowAiAuditLink}>
                  Book a demo
                </CtaLink>
                <CtaLink href="#how-it-works" variant="secondary">
                  See how it works
                </CtaLink>
              </div>
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
                <dt className="lo-display text-[28px] text-[var(--lo-fg)] md:text-[34px]">
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
