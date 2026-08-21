import Reveal from '@/components/animations/Reveal';
import {
  Activity,
  Route,
  ScrollText,
  ShieldCheck,
  ServerCog,
  Users,
} from 'lucide-react';
import { FC } from 'react';
import SplitHead from './SplitHead';

const CELL_BASE =
  'relative h-full rounded-xl border border-[var(--lo-line)] bg-[var(--lo-surface)] p-7 shadow-[var(--lo-shadow-sm)]';

const ICON_BASE =
  'grid h-10 w-10 place-items-center rounded-lg bg-[color-mix(in_srgb,var(--lo-accent)_10%,var(--lo-surface))] text-[var(--lo-accent)]';

const Features: FC = () => {
  return (
    <section
      id="features"
      className="relative z-10 border-t border-[var(--lo-line-soft)] bg-[var(--lo-surface-2)] py-16 md:py-24"
    >
      <div className="container relative">
        <Reveal>
          <SplitHead
            kicker="What's in the platform"
            title={
              <>
                Everything your agents and apps need.{' '}
                <span className="lo-em">Nothing to wire up.</span>
              </>
            }
            side="A complete, self-hosted platform for building, shipping and operating AI agents and web apps — private cloud first, with software-engineering best practices, security and compliance engineered in from the start."
          />
        </Reveal>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Reveal className="h-full sm:col-span-2">
            <div className={CELL_BASE}>
              <span className={ICON_BASE}>
                <Route size={20} />
              </span>
              <h3 className="lo-display mt-4 text-[19px] text-[var(--lo-fg)]">
                Best practices, paved into the road
              </h3>
              <p className="mt-2.5 max-w-[46em] text-[15px] leading-relaxed text-[var(--lo-fg-mut)]">
                A single, opinionated route from repo to running agent or app,
                with software-engineering best practices built into every step.
                Every team ships the same reliable way — no snowflake
                deployments, no tribal knowledge, no 2 a.m. surprises.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.06} className="h-full">
            <div className={CELL_BASE}>
              <span className={ICON_BASE}>
                <ShieldCheck size={20} />
              </span>
              <h3 className="lo-display mt-4 text-[19px] text-[var(--lo-fg)]">
                Security scanning, built in
              </h3>
              <p className="mt-2.5 text-[15px] leading-relaxed text-[var(--lo-fg-mut)]">
                Deps, secrets and policy checks on every deploy — nothing
                ships unscanned.
              </p>
            </div>
          </Reveal>
          <Reveal className="h-full">
            <div className={CELL_BASE}>
              <span className={ICON_BASE}>
                <ScrollText size={20} />
              </span>
              <h3 className="lo-display mt-4 text-[19px] text-[var(--lo-fg)]">
                Full audit trails
              </h3>
              <p className="mt-2.5 text-[15px] leading-relaxed text-[var(--lo-fg-mut)]">
                Every change, deploy and access event recorded — compliance
                evidence for free.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.06} className="h-full">
            <div className={CELL_BASE}>
              <span className={ICON_BASE}>
                <ServerCog size={20} />
              </span>
              <h3 className="lo-display mt-4 text-[19px] text-[var(--lo-fg)]">
                Your cloud, your data
              </h3>
              <p className="mt-2.5 text-[15px] leading-relaxed text-[var(--lo-fg-mut)]">
                Self-hosted on infrastructure you control. Sensitive data
                never leaves your boundary.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.12} className="h-full">
            <div className={CELL_BASE}>
              <span className={ICON_BASE}>
                <Activity size={20} />
              </span>
              <h3 className="lo-display mt-4 text-[19px] text-[var(--lo-fg)]">
                Observability out of the box
              </h3>
              <p className="mt-2.5 text-[15px] leading-relaxed text-[var(--lo-fg-mut)]">
                Logging, metrics and dashboards on by default — no stack to
                assemble.
              </p>
            </div>
          </Reveal>
          <Reveal className="h-full sm:col-span-2 lg:col-span-3">
            <div
              className={`${CELL_BASE} grid grid-cols-1 items-start gap-5 md:grid-cols-[auto_1fr]`}
            >
              <span className={ICON_BASE}>
                <Users size={20} />
              </span>
              <div>
                <h3 className="lo-display text-[19px] text-[var(--lo-fg)]">
                  One interface, for people and agents
                </h3>
                <p className="mt-2.5 max-w-[60em] text-[15px] leading-relaxed text-[var(--lo-fg-mut)]">
                  The same console, API and MCP endpoints drive every deploy —
                  whether a developer clicks the button or an AI agent calls
                  it. And Low-Ops handles the hard infrastructure — upgrades,
                  certificates, networking, recovery — so nobody needs a
                  Kubernetes PhD to run apps in a private cloud.
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
