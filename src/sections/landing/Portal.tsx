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
    title: 'Environments',
    caption:
      'Staging, development and production side by side — deploy, start or stop each one with a click.',
    image: environmentsImage,
    alt: 'Low-Ops portal environments view listing staging, development and production with deploy controls',
  },
  {
    title: 'Packages',
    caption:
      'Every build traced back to its commit, with job results and approval state at a glance.',
    image: packagesImage,
    alt: 'Low-Ops portal packages view showing builds linked to commits with job status and approvals',
  },
  {
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
      className="relative z-10 border-t border-[var(--lo-line-soft)] py-16 md:py-24"
    >
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

        <Reveal delay={0.08} y={20}>
          <div className="overflow-hidden rounded-xl border border-[var(--lo-line)] bg-[var(--lo-surface)] shadow-[var(--lo-shadow-lg)]">
            <Image
              src={appOverviewImage}
              alt="Low-Ops portal application overview showing status, alerts and recent activity"
              placeholder="blur"
              className="m-0 h-auto w-full"
              sizes="(max-width: 1200px) 100vw, 1200px"
            />
          </div>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-4 md:mt-10 md:grid-cols-3">
          {DETAILS.map((detail, i) => (
            <Reveal key={detail.title} delay={i * 0.08} className="h-full">
              <figure className="m-0 flex h-full flex-col overflow-hidden rounded-xl border border-[var(--lo-line)] bg-[var(--lo-surface)] shadow-[var(--lo-shadow-sm)]">
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
                  <h3 className="lo-display text-[18px] text-[var(--lo-fg)]">
                    {detail.title}
                  </h3>
                  <p className="m-0 text-[14.5px] leading-relaxed text-[var(--lo-fg-mut)]">
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
