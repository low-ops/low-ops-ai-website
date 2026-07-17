import Reveal from '@/components/animations/Reveal';
import { cn } from '@/lib/utils';
import { FC } from 'react';
import SplitHead from './SplitHead';

const STEPS = [
  {
    n: '01 · IDEA',
    numeral: '01',
    title: 'A high-value idea appears',
    body: "Something worth validating lands on the team's desk. The clock starts.",
    stagger: '',
  },
  {
    n: '02 · BUILD',
    numeral: '02',
    title: 'Humans and AI agents build it in hours',
    body: 'AI assistants, agentic workflows and vibe coding turn the idea into a working agent or web app — fast.',
    stagger: 'lg:mt-[34px]',
  },
  {
    n: '03 · SHIP',
    numeral: '03',
    title: 'Low-Ops ships it — responsibly',
    body: 'Onto your private cloud, with best practices, scanning, guardrails and audit trails already enforced.',
    stagger: 'lg:mt-[68px]',
  },
];

const GoldenPath: FC = () => {
  return (
    <section
      id="golden-path"
      className="relative z-10 border-t border-[var(--lo-line-soft)] py-16 md:py-28"
    >
      <div className="container">
        <Reveal>
          <SplitHead
            kicker="The golden path"
            title={
              <>
                From a spark of an idea to{' '}
                <span className="lo-em">
                  your own cloud.
                </span>
              </>
            }
            side="Every agent and app follows the same paved road. Software-engineering best practices, security and audit are enforced automatically, so shipping fast and shipping responsibly stop being a trade-off."
          />
        </Reveal>

        <div className="relative">
          {/* surveyed route connecting the three waypoints */}
          <svg
            className="pointer-events-none absolute inset-x-0 -top-9 z-0 hidden h-[120px] w-full lg:block"
            viewBox="0 0 1100 120"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              d="M60,20 C240,90 340,110 545,74 C750,40 860,60 1040,104"
              fill="none"
              stroke="var(--lo-accent)"
              strokeWidth="2"
              strokeDasharray="6 8"
              opacity="0.55"
            />
            <circle cx="60" cy="20" r="5" fill="var(--lo-accent)" />
            <circle cx="545" cy="74" r="5" fill="var(--lo-accent)" />
            <circle cx="1040" cy="104" r="5" fill="var(--lo-accent)" />
          </svg>

          <div className="relative z-2 grid grid-cols-1 gap-4.5 lg:grid-cols-3">
            {STEPS.map((step, i) => (
              <Reveal key={step.title} delay={i * 0.1} className={step.stagger}>
                <div className="relative h-full overflow-hidden rounded-[14px] border border-[var(--lo-line)] bg-[var(--lo-surface)] p-7 pt-8 shadow-[var(--lo-shadow-sm)]">
                  <span
                    className={cn(
                      'lo-display lo-ghost-n absolute top-1.5 right-3 text-[92px]'
                    )}
                    aria-hidden="true"
                  >
                    {step.numeral}
                  </span>
                  <div className="lo-mono relative text-[12px] tracking-[0.1em] text-[var(--lo-accent)]">
                    {step.n}
                  </div>
                  <h3 className="lo-display relative mt-3.5 max-w-[9em] text-[21px] leading-[1.12] text-[var(--lo-fg)]">
                    {step.title}
                  </h3>
                  <p className="relative mt-2.5 text-[15px] text-[var(--lo-fg-mut)]">
                    {step.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={0.3}>
          <div className="mt-6 text-right">
            <span className="lo-mono inline-flex items-center gap-2 text-[11px] tracking-[0.08em] text-[var(--lo-fg-dim)] before:h-px before:w-7 before:bg-[var(--lo-fg-dim)] before:opacity-60 before:content-['']">
              fig. 02 — route survey: idea → production
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default GoldenPath;
