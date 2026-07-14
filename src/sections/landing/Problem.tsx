import Reveal from '@/components/animations/Reveal';
import { FC } from 'react';
import Kicker from './Kicker';

const STAKEHOLDERS = [
  {
    role: 'Leadership',
    want: 'Wants fast validation of high-value ideas.',
    tension: "Can't gamble on compliance or data exposure.",
  },
  {
    role: 'Security',
    want: 'Wants guardrails on everything that ships.',
    tension: "Can't review every AI-built app by hand.",
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
      <div className="container">
        <Reveal className="max-w-[720px]">
          <Kicker>The AI adoption bottleneck</Kicker>
          <h2 className="mt-4.5 text-[28px] leading-[1.05] font-extrabold tracking-[-0.02em] text-balance text-[var(--lo-fg)] md:text-[46px]">
            AI made building easy. Deploying it responsibly is the hard part.
          </h2>
          <p className="mt-5 text-[18px] leading-relaxed text-[var(--lo-fg-mut)]">
            Leadership drives for growth, security mandates guardrails,
            developers want to ship, and operations is buried in manual
            deployments. So promising apps stall in development — or land in an
            unmanaged public cloud with sensitive data at risk. Low-Ops resolves
            the conflict for every stakeholder.
          </p>
        </Reveal>

        <div className="mt-13 grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-4">
          {STAKEHOLDERS.map((s, i) => (
            <Reveal key={s.role} delay={i * 0.06}>
              <div className="h-full rounded-xl border border-[var(--lo-line)] bg-[var(--lo-surface)] p-5 shadow-[var(--lo-shadow-sm)]">
                <div className="lo-mono text-[11px] uppercase tracking-[0.14em] text-[var(--lo-accent)]">
                  {s.role}
                </div>
                <div className="mt-3 text-[16px] font-semibold text-[var(--lo-fg)]">
                  {s.want}
                </div>
                <div className="mt-2 text-[14px] text-[var(--lo-fg-mut)]">
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
