import Reveal from '@/components/animations/Reveal';
import CtaLink from '@/components/CtaLink';
import { portalRowsFor, type Industry } from '@/data/industries';
import CTA from '@/sections/landing/CTA';
import HowItWorks from '@/sections/landing/HowItWorks';
import Industries from '@/sections/landing/Industries';
import Kicker from '@/sections/landing/Kicker';
import PortalMock from '@/sections/landing/PortalMock';
import SplitHead from '@/sections/landing/SplitHead';
import { FC } from 'react';

type TProps = { industry: Industry };

const IndustryHero: FC<TProps> = ({ industry }) => {
  const { hero, icon: Icon } = industry;
  return (
    <section className="relative overflow-hidden border-b border-[var(--lo-line)] bg-[var(--lo-ink)]">
      <div
        className="lo-dots pointer-events-none absolute inset-x-0 top-0 h-[70%] [mask-image:linear-gradient(to_bottom,rgba(0,0,0,0.7),transparent)]"
        aria-hidden="true"
      />
      <div className="container relative z-2 pt-14 pb-16 md:pt-24 md:pb-24">
        <div className="grid items-end gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div>
            <Reveal>
              <span className="lo-label inline-flex items-center gap-2.5 text-[var(--lo-fg-mut)]">
                <Icon size={15} className="text-[var(--lo-accent)]" />
                {hero.kicker}
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="lo-display mt-7 text-[38px] text-balance text-[var(--lo-fg)] md:text-[52px] lg:text-[56px]">
                {hero.title} <span className="lo-em">{hero.titleEm}</span>
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-7 max-w-[32em] text-[16px] leading-relaxed text-[var(--lo-fg-mut)] md:text-[18px]">
                {hero.subtitle}
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <CtaLink href={hero.primaryHref}>{hero.primaryLabel}</CtaLink>
                <CtaLink href="/pricing" variant="secondary">
                  See pricing
                </CtaLink>
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.15} y={20}>
            <PortalMock rows={portalRowsFor(industry)} />
          </Reveal>
        </div>

        <Reveal delay={0.2}>
          <div className="mt-14 border-t border-[var(--lo-line-strong)] pt-5 md:mt-20">
            <div className="grid grid-cols-1 gap-3 md:grid-cols-[220px_1fr] md:gap-8">
              <span className="lo-label text-[var(--lo-fg-dim)]">
                {hero.chipsLabel}
              </span>
              <ul className="flex flex-wrap gap-x-6 gap-y-2">
                {hero.chips.map((chip) => (
                  <li
                    key={chip}
                    className="flex items-center gap-2 text-[14px] font-medium text-[var(--lo-fg)]"
                  >
                    <span
                      className="h-1.5 w-1.5 rounded-full bg-[var(--lo-accent)]"
                      aria-hidden="true"
                    />
                    {chip}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

const IndustryStakes: FC<TProps> = ({ industry }) => {
  const copy = industry.copy?.stakes ?? {
    title: 'What gets left on the table in',
    titleEm: `${industry.shortName.toLowerCase()}.`,
    side: 'Most IT departments are not equipped for the volume of ideas coming from the business. In your sector, every week an idea waits is value you do not get back — and the upside of shipping it safely is larger than most.',
  };
  return (
    <section className="relative z-10 py-16 md:py-24">
      <div className="container">
        <Reveal>
          <SplitHead
            index="01"
            kicker="What's at stake"
            title={
              <>
                {copy.title} <span className="lo-em">{copy.titleEm}</span>
              </>
            }
            side={copy.side}
          />
        </Reveal>
        <Reveal>
          <ol className="lo-ledger grid-cols-1 lg:grid-cols-3">
            {industry.stakes.map((s, i) => (
              <li
                key={s.title}
                className="lo-cell flex h-full flex-col justify-between gap-10 px-6 py-6 md:min-h-[240px] md:px-7"
              >
                <span className="lo-mono text-[13px] text-[var(--lo-accent)]">
                  0{i + 1}
                </span>
                <div>
                  <h3 className="lo-display text-[22px] text-[var(--lo-fg)]">
                    {s.title}
                  </h3>
                  <p className="mt-2.5 text-[14.5px] leading-relaxed text-[var(--lo-fg-mut)]">
                    {s.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
};

const IndustryPains: FC<TProps> = ({ industry }) => {
  const copy = industry.copy?.pains ?? {
    kicker: 'Sound familiar?',
    title: 'Three people, one bottleneck,',
    titleEm: 'one platform.',
    side: 'The CIO needs control, the executive needs results and the people doing the work need a tool this week. Low-Ops.AI is built so each of them gets exactly that.',
  };
  return (
    <section
      data-tone="dark"
      className="relative z-10 bg-[var(--lo-black)] py-16 text-[var(--lo-on-black)] md:py-24"
    >
      <div className="container">
        <Reveal>
          <SplitHead
            tone="dark"
            index="02"
            kicker={copy.kicker ?? 'Sound familiar?'}
            title={
              <>
                {copy.title} <span className="lo-em">{copy.titleEm}</span>
              </>
            }
            side={copy.side}
          />
        </Reveal>
        <Reveal>
          <div className="lo-ledger-dark grid-cols-1 lg:grid-cols-3">
            {industry.pains.map((p) => (
              <article
                key={p.who}
                className="lo-cell-dark flex h-full flex-col px-6 py-7 md:px-8"
              >
                <span className="lo-label text-[var(--lo-accent)]">{p.who}</span>
                <h3 className="lo-display mt-6 text-[24px] text-[var(--lo-on-black)]">
                  {p.pain}
                </h3>
                <p className="mt-3 text-[14.5px] leading-relaxed text-[var(--lo-on-black-mut)]">
                  {p.detail}
                </p>
              </article>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
};

const IndustryUseCases: FC<TProps> = ({ industry }) => (
  <section className="relative z-10 bg-[var(--lo-ink-2)] py-16 md:py-24">
    <div className="container">
      <Reveal>
        <SplitHead
          index="03"
          kicker="Digital employees"
          title={
            <>
              {industry.useCasesTitle}{' '}
              <span className="lo-em">{industry.useCasesTitleEm}</span>
            </>
          }
          side={
            industry.copy?.useCasesSide ??
            'Each of these is a few hours of building for someone who knows the work — and a permanent digital employee once it is deployed through the Low-Ops.AI portal. Private by default, governed by IT.'
          }
        />
      </Reveal>
      <Reveal>
        <div className="lo-ledger grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {industry.useCases.map((u, i) => (
            <div
              key={u.title}
              className="lo-cell flex h-full flex-col px-6 py-6"
            >
              <div className="flex items-center justify-between">
                <span className="lo-label text-[var(--lo-fg-dim)]">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="lo-label text-[var(--lo-fg-dim)]">
                  by {u.owner}
                </span>
              </div>
              <h3 className="lo-display mt-5 text-[20px] text-[var(--lo-fg)]">
                {u.title}
              </h3>
              <p className="mt-2 text-[14.5px] leading-relaxed text-[var(--lo-fg-mut)]">
                {u.body}
              </p>
            </div>
          ))}
        </div>
      </Reveal>
    </div>
  </section>
);

const IndustryGovernance: FC<TProps> = ({ industry }) => (
  <section className="relative z-10 py-16 md:py-24">
    <div className="container">
      <div className="grid grid-cols-1 items-start gap-10 border-t border-[var(--lo-line-strong)] pt-7 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <Reveal>
          <div className="lg:sticky lg:top-24">
            <Kicker index="04">Built for your governance model</Kicker>
            <h2 className="lo-display mt-5 text-[32px] text-balance text-[var(--lo-fg)] md:text-[44px]">
              Speed for the business.{' '}
              <span className="lo-em">Control for IT.</span>
            </h2>
            <p className="mt-5 max-w-[30em] text-[16px] leading-relaxed text-[var(--lo-fg-mut)] md:text-[17px]">
              Governance is not a layer we add afterwards; it is how the
              platform deploys. Every app and agent gets the same guardrails on
              day one — so IT can say yes faster.
            </p>
            <p className="lo-label mt-7 text-[var(--lo-fg-dim)]">
              100% self-hosted · open-source core · no per-seat licences
            </p>
          </div>
        </Reveal>
        <div className="flex flex-col divide-y divide-[var(--lo-line)]">
          {industry.governance.map((g, i) => (
            <Reveal key={g.title} delay={i * 0.05}>
              <div className="grid grid-cols-[40px_1fr] gap-4 py-6 first:pt-0 md:grid-cols-[56px_1fr]">
                <span className="lo-mono pt-1 text-[13px] text-[var(--lo-green)]">
                  ✓
                </span>
                <div>
                  <h3 className="text-[17px] font-semibold tracking-[-0.01em] text-[var(--lo-fg)]">
                    {g.title}
                  </h3>
                  <p className="mt-1.5 text-[14.5px] leading-relaxed text-[var(--lo-fg-mut)]">
                    {g.body}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const IndustryTestimonial: FC<TProps> = ({ industry }) => {
  const t = industry.testimonial;
  if (!t) return null;
  return (
    <section className="relative z-10 border-t border-[var(--lo-line-strong)] py-16 md:py-24">
      <div className="container">
        <Reveal>
          <figure className="m-0 max-w-[900px]">
            <Kicker>Proof from the field</Kicker>
            <blockquote className="lo-display m-0 mt-8 text-[26px] leading-[1.2] font-medium text-[var(--lo-fg)] md:text-[36px]">
              &ldquo;{t.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-7 border-t border-[var(--lo-line-strong)] pt-4">
              <span className="block text-[15px] font-semibold text-[var(--lo-fg)]">
                {t.author}
              </span>
              <span className="block text-[13.5px] text-[var(--lo-fg-mut)]">
                {t.role} · {t.company}
              </span>
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
};

const IndustryPage: FC<TProps> = ({ industry }) => {
  return (
    <main className="relative overflow-hidden bg-[var(--lo-ink)] text-[var(--lo-fg)]">
      <IndustryHero industry={industry} />
      <IndustryStakes industry={industry} />
      <IndustryPains industry={industry} />
      <IndustryUseCases industry={industry} />
      <IndustryGovernance industry={industry} />
      <HowItWorks compact />
      <IndustryTestimonial industry={industry} />
      <Industries
        excludeSlug={industry.slug}
        index="05"
        kicker="Other industries"
        title={
          <>
            Same platform, <span className="lo-em">different front line.</span>
          </>
        }
        side="The ideas waiting on IT look different in each sector. The platform is the same."
      />
      <CTA
        kicker={industry.cta.kicker}
        title={
          <>
            {industry.cta.title}{' '}
            <span className="lo-em">{industry.cta.titleEm}</span>
          </>
        }
        body={industry.cta.body}
        primaryLabel={industry.cta.primaryLabel}
        primaryHref={industry.cta.primaryHref}
      />
    </main>
  );
};

export default IndustryPage;
