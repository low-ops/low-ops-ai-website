import Reveal from '@/components/animations/Reveal';
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
      className="relative z-10 border-t border-[var(--lo-line-soft)] bg-[var(--lo-surface-2)] py-16 md:py-24"
    >
      <div className="container relative">
        <Reveal>
          <SplitHead
            kicker="The AI adoption bottleneck"
            title={
              <>
                AI made building easy. Shipping it{' '}
                <span className="lo-em">responsibly</span> is the hard part.
              </>
            }
            side="Leadership drives for growth, security mandates guardrails, developers want to ship, and operations is buried in manual deployments. Promising agents and apps stall — or land in an unmanaged public cloud with sensitive data at risk. Low-Ops resolves the conflict for every stakeholder."
          />
        </Reveal>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {STAKEHOLDERS.map((s, i) => (
            <Reveal key={s.role} delay={i * 0.06}>
              <div className="h-full rounded-xl border border-[var(--lo-line)] bg-[var(--lo-surface)] p-6 shadow-[var(--lo-shadow-sm)]">
                <div className="text-[12px] font-semibold uppercase tracking-[0.1em] text-[var(--lo-accent)]">
                  {s.role}
                </div>
                <div className="mt-3 text-[16px] font-semibold tracking-[-0.01em] text-[var(--lo-fg)]">
                  {s.want}
                </div>
                <div className="mt-2 text-[14.5px] leading-relaxed text-[var(--lo-fg-mut)]">
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
