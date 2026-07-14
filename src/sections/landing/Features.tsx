import Reveal from '@/components/animations/Reveal';
import { FC } from 'react';
import SplitHead from './SplitHead';

const CELL_BASE =
  'relative h-full overflow-hidden rounded-[14px] border border-[var(--lo-line)] bg-[var(--lo-surface)] p-6.5 shadow-[var(--lo-shadow-sm)] transition-all duration-200 hover:-translate-y-1 hover:border-[color-mix(in_srgb,var(--lo-accent)_40%,var(--lo-line))] hover:shadow-[var(--lo-shadow-lg)]';

const Features: FC = () => {
  return (
    <section
      id="features"
      className="relative z-10 border-t border-[var(--lo-line-soft)] py-16 md:py-28"
    >
      <span className="lo-ghost" aria-hidden="true">
        BUILT-IN
      </span>
      <div className="container relative">
        <Reveal>
          <SplitHead
            kicker="What's in the platform"
            title={
              <>
                Everything an AI-built app needs.{' '}
                <span className="lo-serif text-[var(--lo-accent)]">
                  Nothing to wire up.
                </span>
              </>
            }
            side="A complete, self-hosted platform for building, deploying and operating AI-built apps — with security, compliance and cost control engineered in from the start."
          />
        </Reveal>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Reveal className="h-full sm:col-span-2">
            <div
              className={`${CELL_BASE} bg-[linear-gradient(120deg,color-mix(in_srgb,var(--lo-accent)_6%,var(--lo-surface)),var(--lo-surface)_55%)]`}
            >
              <div className="lo-mono text-[12px] tracking-[0.06em] text-[var(--lo-cyan)]">
                {'// paved-road'}
              </div>
              <h3 className="lo-display mt-3 text-[20px] text-[var(--lo-fg)]">
                Golden paths to production
              </h3>
              <p className="mt-2.5 max-w-[46em] text-[14.5px] text-[var(--lo-fg-mut)]">
                A single, opinionated route from repo to running app. Every
                team ships the same reliable way — no snowflake deployments,
                no tribal knowledge, no 2 a.m. surprises.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.06} className="h-full">
            <div className={CELL_BASE}>
              <div className="lo-mono text-[12px] tracking-[0.06em] text-[var(--lo-cyan)]">
                {'// enforced'}
              </div>
              <h3 className="lo-display mt-3 text-[20px] text-[var(--lo-fg)]">
                Security scanning, built in
              </h3>
              <p className="mt-2.5 text-[14.5px] text-[var(--lo-fg-mut)]">
                Deps, secrets and policy checks on every deploy — nothing
                ships unscanned.
              </p>
            </div>
          </Reveal>
          <Reveal className="h-full">
            <div className={CELL_BASE}>
              <div className="lo-mono text-[12px] tracking-[0.06em] text-[var(--lo-cyan)]">
                {'// evidence'}
              </div>
              <h3 className="lo-display mt-3 text-[20px] text-[var(--lo-fg)]">
                Full audit trails
              </h3>
              <p className="mt-2.5 text-[14.5px] text-[var(--lo-fg-mut)]">
                Every change, deploy and access event recorded — compliance
                evidence for free.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.06} className="h-full">
            <div className={CELL_BASE}>
              <div className="lo-mono text-[12px] tracking-[0.06em] text-[var(--lo-cyan)]">
                {'// sovereignty'}
              </div>
              <h3 className="lo-display mt-3 text-[20px] text-[var(--lo-fg)]">
                Your cloud, your data
              </h3>
              <p className="mt-2.5 text-[14.5px] text-[var(--lo-fg-mut)]">
                Self-hosted on infrastructure you control. Sensitive data
                never leaves your boundary.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.12} className="h-full">
            <div className={CELL_BASE}>
              <div className="lo-mono text-[12px] tracking-[0.06em] text-[var(--lo-cyan)]">
                {'// day-one'}
              </div>
              <h3 className="lo-display mt-3 text-[20px] text-[var(--lo-fg)]">
                Observability out of the box
              </h3>
              <p className="mt-2.5 text-[14.5px] text-[var(--lo-fg-mut)]">
                Logging, metrics and dashboards on by default — no stack to
                assemble.
              </p>
            </div>
          </Reveal>
          <Reveal className="h-full sm:col-span-2 lg:col-span-3">
            <div
              className={`${CELL_BASE} grid grid-cols-1 items-center gap-6 bg-[linear-gradient(100deg,var(--lo-surface),color-mix(in_srgb,var(--lo-cyan)_6%,var(--lo-surface)))] md:grid-cols-[auto_1fr]`}
            >
              <span
                className="lo-mono text-[34px] leading-none text-[var(--lo-cyan)]"
                aria-hidden="true"
              >
                ⎈
              </span>
              <div>
                <div className="lo-mono text-[12px] tracking-[0.06em] text-[var(--lo-cyan)]">
                  {'// no-k8s'}
                </div>
                <h3 className="lo-display mt-3 text-[20px] text-[var(--lo-fg)]">
                  Kubernetes, without the PhD
                </h3>
                <p className="mt-2.5 max-w-[60em] text-[14.5px] text-[var(--lo-fg-mut)]">
                  Run apps in a private cloud without being a Kubernetes
                  expert. Low-Ops handles the hard parts — upgrades,
                  certificates, networking, recovery — so your team ships
                  apps, not infrastructure.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Features;
