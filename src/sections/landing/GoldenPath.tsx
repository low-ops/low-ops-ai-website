import Reveal from '@/components/animations/Reveal';
import { FC } from 'react';
import SplitHead from './SplitHead';

const STEPS = [
  {
    numeral: '01',
    label: 'Idea',
    title: 'A high-value idea appears',
    body: "Something worth validating lands on the team's desk. The clock starts.",
  },
  {
    numeral: '02',
    label: 'Build',
    title: 'Humans and AI agents build it in hours',
    body: 'AI assistants, agentic workflows and vibe coding turn the idea into a working agent or web app — fast.',
  },
  {
    numeral: '03',
    label: 'Ship',
    title: 'Low-Ops ships it — responsibly',
    body: 'Onto your private cloud, with best practices, scanning, guardrails and audit trails already enforced.',
  },
];

const GoldenPath: FC = () => {
  return (
    <section
      id="golden-path"
      className="relative z-10 border-t border-[var(--lo-line-soft)] py-16 md:py-24"
    >
      <div className="container">
        <Reveal>
          <SplitHead
            kicker="The golden path"
            title={
              <>
                From a spark of an idea to{' '}
                <span className="lo-em">your own cloud.</span>
              </>
            }
            side="Every agent and app follows the same paved road. Software-engineering best practices, security and audit are enforced automatically, so shipping fast and shipping responsibly stop being a trade-off."
          />
        </Reveal>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          {STEPS.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.08}>
              <div className="h-full rounded-xl border border-[var(--lo-line)] bg-[var(--lo-surface)] p-7 shadow-[var(--lo-shadow-sm)]">
                <div className="flex items-center gap-3">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-[color-mix(in_srgb,var(--lo-accent)_10%,var(--lo-surface))] text-[14px] font-bold text-[var(--lo-accent)]">
                    {step.numeral}
                  </span>
                  <span className="text-[12px] font-semibold uppercase tracking-[0.1em] text-[var(--lo-fg-dim)]">
                    {step.label}
                  </span>
                </div>
                <h3 className="lo-display mt-5 text-[20px] text-[var(--lo-fg)]">
                  {step.title}
                </h3>
                <p className="mt-2.5 text-[15px] leading-relaxed text-[var(--lo-fg-mut)]">
                  {step.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GoldenPath;
