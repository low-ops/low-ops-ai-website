import appOverviewImage from '@/assets/app-overview-screenshot.png';
import deployImage from '@/assets/deploy-screenshot.png';
import environmentsImage from '@/assets/environments-screenshot.png';
import packagesImage from '@/assets/packages-screenshot.png';
import Reveal from '@/components/animations/Reveal';
import Image from 'next/image';
import { FC } from 'react';
import SplitHead from './SplitHead';

const DETAILS = [
  {
    label: '// environments',
    title: 'Environments',
    caption:
      'Staging, development and production side by side — deploy, start or stop each one with a click.',
    image: environmentsImage,
    alt: 'Low-Ops portal environments view listing staging, development and production with deploy controls',
  },
  {
    label: '// packages',
    title: 'Packages',
    caption:
      'Every build traced back to its commit, with job results and approval state at a glance.',
    image: packagesImage,
    alt: 'Low-Ops portal packages view showing builds linked to commits with job status and approvals',
  },
  {
    label: '// deploy',
    title: 'Deploy',
    caption:
      'Pick a package, confirm, ship. Promoting to production is a two-step form, not a runbook.',
    image: deployImage,
    alt: 'Low-Ops portal deploy drawer selecting a package for the production environment',
  },
] as const;

const Portal: FC = () => {
  return (
    <section
      id="portal"
      className="relative z-10 border-t border-[var(--lo-line-soft)] py-16 md:py-28"
    >
      <span className="lo-ghost" aria-hidden="true">
        HANDS-ON
      </span>
      <div className="container relative">
        <Reveal>
          <SplitHead
            kicker="Inside the portal"
            title={
              <>
                Every agent, app, environment and deploy.{' '}
                <span className="lo-em">One console.</span>
              </>
            }
            side="The Low-Ops portal is where your team lives day to day: application status, alerts, environments, packages and deployments — self-hosted on your cloud, with the audit trail written for you. Every action is an API and MCP call too, so your AI agents can drive the exact same workflows."
          />
        </Reveal>

        {/* featured figure with crop marks and drawing-style caption */}
        <Reveal delay={0.08} y={20}>
          <div>
            <div className="relative p-4">
              <span
                className="absolute top-0 left-0 h-4 w-4 border-t-[1.5px] border-l-[1.5px] border-[var(--lo-fg-dim)]"
                aria-hidden="true"
              />
              <span
                className="absolute top-0 right-0 h-4 w-4 border-t-[1.5px] border-r-[1.5px] border-[var(--lo-fg-dim)]"
                aria-hidden="true"
              />
              <span
                className="absolute bottom-0 left-0 h-4 w-4 border-b-[1.5px] border-l-[1.5px] border-[var(--lo-fg-dim)]"
                aria-hidden="true"
              />
              <span
                className="absolute right-0 bottom-0 h-4 w-4 border-r-[1.5px] border-b-[1.5px] border-[var(--lo-fg-dim)]"
                aria-hidden="true"
              />
              <div className="overflow-hidden rounded-[14px] border border-[var(--lo-line)] bg-[var(--lo-surface)] shadow-[var(--lo-shadow-lg)]">
                <Image
                  src={appOverviewImage}
                  alt="Low-Ops portal application overview showing status, alerts and recent activity"
                  placeholder="blur"
                  className="m-0 h-auto w-full"
                  sizes="(max-width: 1200px) 100vw, 1200px"
                />
              </div>
            </div>
            <div className="mt-3 text-right">
              <span className="lo-mono inline-flex items-center gap-2 text-[11px] tracking-[0.08em] text-[var(--lo-fg-dim)] before:h-px before:w-7 before:bg-[var(--lo-fg-dim)] before:opacity-60 before:content-['']">
                fig. 03 — application overview: status, alerts &amp; activity
              </span>
            </div>
          </div>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-4 md:mt-10 md:grid-cols-3">
          {DETAILS.map((detail, i) => (
            <Reveal key={detail.title} delay={i * 0.08} className="h-full">
              <figure className="m-0 flex h-full flex-col overflow-hidden rounded-[14px] border border-[var(--lo-line)] bg-[var(--lo-surface)] shadow-[var(--lo-shadow-sm)] transition-all duration-200 hover:-translate-y-1 hover:border-[color-mix(in_srgb,var(--lo-accent)_40%,var(--lo-line))] hover:shadow-[var(--lo-shadow-lg)]">
                <div className="relative aspect-[8/5] overflow-hidden border-b border-[var(--lo-line-soft)] bg-[var(--lo-ink)]">
                  <Image
                    src={detail.image}
                    alt={detail.alt}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <figcaption className="flex flex-col gap-2 p-6">
                  <span className="lo-mono text-[12px] tracking-[0.06em] text-[var(--lo-cyan)]">
                    {detail.label}
                  </span>
                  <h3 className="lo-display text-[19px] text-[var(--lo-fg)]">
                    {detail.title}
                  </h3>
                  <p className="m-0 text-[14px] leading-relaxed text-[var(--lo-fg-mut)]">
                    {detail.caption}
                  </p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portal;
