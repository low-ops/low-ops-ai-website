import Reveal from '@/components/animations/Reveal';
import CtaLink from '@/components/CtaLink';
import data from '@/data';
import { FC } from 'react';
import SplitHead from './SplitHead';

const OUTCOMES = [
  {
    title: 'One supported app in the agreed environment',
    body: 'Not a company-wide platform programme. One application, with prerequisites and responsibilities written down first.',
  },
  {
    title: 'Access, history and a handoff',
    body: 'Authorised users can open it. Ownership and the deploy record are visible. Rollback or restore is tested as appropriate. The technical owner accepts the handoff.',
  },
  {
    title: 'A paid, fixed-scope next step',
    body: 'Price, stack and operating model are agreed before work starts. Expansion to the next apps comes after the first one is supportable.',
  },
];

const Pilot: FC = () => {
  return (
    <section
      id="pilot"
      data-tone="dark"
      className="relative z-10 bg-[var(--lo-black)] py-16 text-[var(--lo-on-black)] md:py-24"
    >
      <div className="container">
        <Reveal>
          <SplitHead
            tone="dark"
            index="03"
            kicker="First deployment"
            title={
              <>
                Start with a paid one-app pilot,{' '}
                <span className="lo-em">not a factory decision.</span>
              </>
            }
            side="A smaller decision than adopting a company-wide Private Innovation Factory: get one existing app into controlled operation on your infrastructure, then talk about the next two."
          />
        </Reveal>
        <Reveal>
          <div className="lo-ledger-dark grid-cols-1 lg:grid-cols-3">
            {OUTCOMES.map((item) => (
              <article key={item.title} className="lo-cell-dark px-6 py-7 md:px-8">
                <h3 className="lo-display text-[22px] text-[var(--lo-on-black)]">
                  {item.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-[var(--lo-on-black-mut)]">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </Reveal>
        <Reveal>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <CtaLink href={data.cta.pilotLink} variant="inverse">
              See pilot scope and acceptance criteria
            </CtaLink>
            <CtaLink
              href={data.cta.requestDemoLink}
              variant="secondary"
              className="border-[var(--lo-black-line)] text-[var(--lo-on-black)] hover:border-[var(--lo-on-black)]"
            >
              Request a deployment review
            </CtaLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Pilot;
