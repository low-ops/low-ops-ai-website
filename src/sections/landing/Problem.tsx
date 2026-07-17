import Reveal from '@/components/animations/Reveal';
import { cn } from '@/lib/utils';
import { FC } from 'react';
import SplitHead from './SplitHead';

const STAKEHOLDERS = [
  {
    role: 'Leadership',
    want: 'Wants fast validation of high-value ideas.',
    tension: "Can't gamble on compliance or data exposure.",
  },
  {
    role: 'Security',
    want: 'Wants guardrails on everything that ships.',
    tension: "Can't review every AI-built agent by hand.",
  },
  {
    role: 'Developers',
    want: 'Want to ship what they built, today.',
    tension: 'Blocked by tickets, infra and unknowns.',
  },
  {
    role: 'Operations',
    want: 'Wants standardized, repeatable deploys.',
    tension: 'Buried in manual, one-off provisioning.',
  },
];

const Problem: FC = () => {
  return (
    <section
      id="problem"
      className="relative z-10 border-t border-[var(--lo-line-soft)] py-16 md:py-28"
    >
      <span className="lo-ghost" aria-hidden="true">
        FRICTION
      </span>
      <div className="container relative">
        <Reveal>
          <SplitHead
            kicker="The AI adoption bottleneck"
            title={
              <>
                AI made building easy. Shipping it{' '}
                <span className="lo-em">
                  responsibly
                </span>{' '}
                is the hard part.
              </>
            }
            side="Leadership drives for growth, security mandates guardrails, developers want to ship, and operations is buried in manual deployments. Promising agents and apps stall — or land in an unmanaged public cloud with sensitive data at risk. Low-Ops resolves the conflict for every stakeholder."
          />
        </Reveal>

        <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-4">
          {STAKEHOLDERS.map((s, i) => (
            <Reveal key={s.role} delay={i * 0.06}>
              <div
                className={cn(
                  'h-full rounded-xl border border-[var(--lo-line)] bg-[var(--lo-surface)] p-5 pt-5.5 shadow-[var(--lo-shadow-sm)] transition-all duration-200 hover:z-3 hover:-translate-y-1 hover:rotate-0 hover:shadow-[var(--lo-shadow-lg)]',
                  i % 2 === 0
                    ? 'lg:rotate-[-0.6deg]'
                    : 'lg:translate-y-1.5 lg:rotate-[0.5deg]'
                )}
              >
                <div className="lo-mono text-[10.5px] tracking-[0.1em] text-[var(--lo-fg-dim)]">
                  st/{String(i + 1).padStart(2, '0')}
                </div>
                <div className="lo-mono mt-2.5 text-[11px] uppercase tracking-[0.14em] text-[var(--lo-accent)]">
                  {s.role}
                </div>
                <div className="mt-3 text-[16px] font-bold tracking-[-0.01em] text-[var(--lo-fg)]">
                  {s.want}
                </div>
                <div className="mt-2 text-[14px] text-[var(--lo-fg-mut)]">
                  <span className="text-[var(--lo-accent)]">⚠ </span>
                  {s.tension}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problem;
