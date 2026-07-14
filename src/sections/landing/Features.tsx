import Reveal from '@/components/animations/Reveal';
import { FC } from 'react';
import Kicker from './Kicker';

const FEATURES = [
  {
    tag: '// paved-road',
    title: 'Golden paths to production',
    body: 'A single, opinionated route from repo to running app. Every team ships the same reliable way.',
  },
  {
    tag: '// enforced',
    title: 'Security scanning, built in',
    body: 'Dependencies, secrets and policy checks run automatically on every deploy — nothing ships unscanned.',
  },
  {
    tag: '// evidence',
    title: 'Full audit trails',
    body: 'Every change, deploy and access event recorded — the compliance evidence you need, generated for free.',
  },
  {
    tag: '// sovereignty',
    title: 'Your cloud, your data',
    body: 'Self-hosted on infrastructure you control. Sensitive data never leaves your boundary.',
  },
  {
    tag: '// day-one',
    title: 'Observability out of the box',
    body: 'Logging, metrics and dashboards enabled by default — no stack to assemble, no experts to hire.',
  },
  {
    tag: '// no-k8s',
    title: 'Kubernetes, without the PhD',
    body: 'Run apps in a private cloud without being a Kubernetes expert. Low-Ops handles the hard parts.',
  },
];

const Features: FC = () => {
  return (
    <section
      id="features"
      className="relative z-10 border-t border-[var(--lo-line-soft)] py-16 md:py-28"
    >
      <div className="container">
        <Reveal className="max-w-[760px]">
          <Kicker>What&apos;s in the platform</Kicker>
          <h2 className="mt-4.5 text-[28px] leading-[1.05] font-extrabold tracking-[-0.02em] text-balance text-[var(--lo-fg)] md:text-[46px]">
            Everything an AI-built app needs to run in production. Nothing you
            have to wire up.
          </h2>
        </Reveal>

        <div className="mt-13 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f, i) => (
            <Reveal key={f.title} delay={(i % 3) * 0.06} className="h-full">
              <div className="group relative h-full overflow-hidden rounded-xl border border-[var(--lo-line)] bg-[var(--lo-surface)] p-6.5 shadow-[var(--lo-shadow-sm)] transition-all duration-200 hover:-translate-y-1 hover:border-[color-mix(in_srgb,var(--lo-accent)_45%,var(--lo-line))] hover:shadow-[var(--lo-shadow-lg)]">
                <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-[radial-gradient(120%_80%_at_100%_0%,var(--lo-glow),transparent_55%)]" />
                <div className="lo-mono relative text-[12px] tracking-[0.06em] text-[var(--lo-cyan)]">
                  {f.tag}
                </div>
                <h3 className="relative mt-3.5 text-[19px] font-bold tracking-[-0.01em] text-[var(--lo-fg)]">
                  {f.title}
                </h3>
                <p className="relative mt-2.5 text-[14.5px] text-[var(--lo-fg-mut)]">
                  {f.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
