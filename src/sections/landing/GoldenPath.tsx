import Reveal from '@/components/animations/Reveal';
import { FC } from 'react';
import Kicker from './Kicker';

const STEPS = [
  {
    n: '01 · IDEA',
    icon: '◆',
    title: 'A high-value idea appears',
    body: "Something worth validating lands on the team's desk. The clock starts.",
  },
  {
    n: '02 · BUILD',
    icon: '⌘',
    title: 'The team builds it with AI in hours',
    body: 'AI assistants, agentic workflows and vibe coding turn the idea into a working app — fast.',
  },
  {
    n: '03 · SHIP',
    icon: '▲',
    title: 'Low-Ops ships it — securely',
    body: 'Onto your private cloud, with scanning, guardrails and audit trails already in place.',
  },
];

const GoldenPath: FC = () => {
  return (
    <section
      id="golden-path"
      className="relative z-10 border-t border-[var(--lo-line-soft)] py-16 md:py-28"
    >
      <div className="container">
        <Reveal className="max-w-[720px]">
          <Kicker>The golden path</Kicker>
          <h2 className="mt-4.5 text-[28px] leading-[1.05] font-extrabold tracking-[-0.02em] text-balance text-[var(--lo-fg)] md:text-[46px]">
            From a spark of an idea to your own cloud — in one guided path.
          </h2>
          <p className="mt-5 text-[18px] leading-relaxed text-[var(--lo-fg-mut)]">
            Every app follows the same paved road. Best practices, security and
            audit are enforced automatically, so shipping fast and shipping
            responsibly stop being a trade-off.
          </p>
        </Reveal>

        <div className="mt-13 grid grid-cols-1 lg:grid-cols-3">
          {STEPS.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.1} className="h-full">
              <div
                className={`h-full border border-[var(--lo-line)] bg-[var(--lo-surface)] p-6.5 md:p-7.5 ${
                  i === 0
                    ? 'rounded-xl lg:rounded-r-none'
                    : i === STEPS.length - 1
                      ? 'rounded-xl lg:rounded-l-none lg:border-l-0'
                      : 'rounded-xl lg:rounded-none lg:border-l-0'
                } mt-3 lg:mt-0`}
              >
                <div className="mb-4 grid h-10 w-10 place-items-center rounded-[10px] border border-[color-mix(in_srgb,var(--lo-accent)_30%,transparent)] bg-[color-mix(in_srgb,var(--lo-accent)_12%,transparent)] text-[var(--lo-accent)]">
                  {step.icon}
                </div>
                <div className="lo-mono text-[12px] tracking-[0.1em] text-[var(--lo-accent)]">
                  {step.n}
                </div>
                <h3 className="mt-4 text-[20px] font-bold tracking-[-0.01em] text-[var(--lo-fg)]">
                  {step.title}
                </h3>
                <p className="mt-2.5 text-[15px] text-[var(--lo-fg-mut)]">
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
