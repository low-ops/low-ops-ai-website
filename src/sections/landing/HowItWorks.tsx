import Reveal from '@/components/animations/Reveal';
import { FC } from 'react';
import SplitHead from './SplitHead';

const STEPS = [
  {
    numeral: '01',
    label: 'Build',
    title: 'A domain expert builds it',
    body: 'Using AI coding assistants or their favourite tools, a domain expert turns an idea into a working agent or web app — following the simple Low-Ops.AI app spec that AI assistants understand natively.',
  },
  {
    numeral: '02',
    label: 'Deploy',
    title: 'They click deploy in the self-service portal',
    body: 'Low-Ops.AI provisions the database, CI/CD pipeline, SSO, backups and private hosting automatically. No tickets, no infrastructure, no waiting.',
  },
  {
    numeral: '03',
    label: 'Govern',
    title: 'IT sees everything, by default',
    body: 'Every app and agent appears in the central oversight portal with its owner, environments and audit log — private by default, reachable only via the corporate network.',
  },
];

type TProps = {
  compact?: boolean;
};

/** Three steps rendered as a numbered ledger with oversized numerals. */
const HowItWorks: FC<TProps> = ({ compact = false }) => {
  return (
    <section
      id="how-it-works"
      className={`relative z-10 bg-[var(--lo-ink-2)] ${
        compact ? 'py-16 md:py-20' : 'py-16 md:py-24'
      }`}
    >
      <div className="container">
        <Reveal>
          <SplitHead
            index="03"
            kicker="How it works"
            title={
              <>
                From idea to governed digital employee in{' '}
                <span className="lo-em">three steps.</span>
              </>
            }
            side="Every app and agent follows the same paved road. Software-engineering best practices, security and audit are enforced automatically — so going fast and staying governed stop being a trade-off."
          />
        </Reveal>

        <Reveal>
          <ol className="lo-ledger grid-cols-1 lg:grid-cols-3">
            {STEPS.map((step) => (
              <li
                key={step.title}
                className="lo-cell relative px-6 py-7 md:px-8 md:pt-8 md:pb-9"
              >
                <div className="flex items-baseline justify-between">
                  <span className="lo-display text-[56px] leading-none text-[var(--lo-line-strong)] md:text-[72px]">
                    {step.numeral}
                  </span>
                  <span className="lo-label text-[var(--lo-accent)]">
                    {step.label}
                  </span>
                </div>
                <h3 className="lo-display mt-7 text-[22px] text-[var(--lo-fg)]">
                  {step.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-[var(--lo-fg-mut)]">
                  {step.body}
                </p>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
};

export default HowItWorks;
