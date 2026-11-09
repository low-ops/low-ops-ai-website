import Reveal from '@/components/animations/Reveal';
import { FC } from 'react';
import SplitHead from './SplitHead';

const PILLARS = [
  {
    n: '01',
    title: 'Customer-controlled hosting',
    body: 'Web apps and agents are private by default, reachable only via the corporate network. Self-hosting keeps platform data stores in your environment; apps can still call external services you configure.',
  },
  {
    n: '02',
    title: 'Governed speed',
    body: 'Domain experts get a self-service portal for rapid value validation. IT gets a central oversight platform with audit logs and automated Day 1 / Day 2 operations — SSO, CI/CD, backups.',
  },
  {
    n: '03',
    title: 'Value-based ROI',
    body: 'Decoupled software licensing. You pay for the value generated — apps and agents in production — never for the number of employees experimenting.',
  },
  {
    n: '04',
    title: 'No vendor lock-in',
    body: 'The core engine is open source. Portability is guaranteed, eliminating enterprise risk and keeping procurement happy.',
  },
];

/** Four promises as a two-column editorial list with hairline rows. */
const Pillars: FC = () => {
  return (
    <section id="pillars" className="relative z-10 py-16 md:py-24">
      <div className="container">
        <Reveal>
          <SplitHead
            index="04"
            kicker="Why Low-Ops.AI"
            title={
              <>
                Four promises we build{' '}
                <span className="lo-em">the platform around.</span>
              </>
            }
            side="Mid-market organisations with 100–400 employees and dedicated IT leadership are where the friction is highest. These four pillars are how we resolve it — for the business and for IT at the same time."
          />
        </Reveal>

        <div className="grid grid-cols-1 gap-x-16 md:grid-cols-2">
          {PILLARS.map((pillar, i) => (
            <Reveal key={pillar.title} delay={i * 0.05}>
              <div className="grid grid-cols-[48px_1fr] gap-4 border-t border-[var(--lo-line-strong)] py-7 md:grid-cols-[64px_1fr] md:py-8">
                <span className="lo-mono pt-1 text-[13px] text-[var(--lo-accent)]">
                  {pillar.n}
                </span>
                <div>
                  <h3 className="lo-display text-[24px] text-[var(--lo-fg)] md:text-[26px]">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 max-w-[32em] text-[15px] leading-relaxed text-[var(--lo-fg-mut)]">
                    {pillar.body}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pillars;
