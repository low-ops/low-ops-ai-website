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
      'Staging, development and production side by side — domain experts deploy, start or stop each one with a click.',
    image: environmentsImage,
    alt: 'Low-Ops.AI portal environments view listing staging, development and production with deploy controls',
  },
  {
    title: 'Packages',
    caption:
      'Every build traced back to its commit, with scan results and approval state at a glance — the audit trail IT needs.',
    image: packagesImage,
    alt: 'Low-Ops.AI portal packages view showing builds linked to commits with job status and approvals',
  },
  {
    title: 'Deploy',
    caption:
      'Pick a package, confirm, ship. Promoting to production is a two-step form, not a runbook.',
    image: deployImage,
    alt: 'Low-Ops.AI portal deploy drawer selecting a package for the production environment',
  },
] as const;

const Portal: FC = () => {
  return (
    <section id="portal" className="relative z-10 py-16 md:py-24">
      <div className="container relative">
        <Reveal>
          <SplitHead
            index="06"
            kicker="Inside the portal"
            title={
              <>
                Self-service for experts.{' '}
                <span className="lo-em">Oversight for IT.</span>
              </>
            }
            side="The Low-Ops.AI portal is where both sides meet. Domain experts deploy and manage their own apps and agents; IT sees every application, owner, environment, package and deployment — self-hosted on your infrastructure, with the audit trail written for you. Every action is an API and MCP call too."
          />
        </Reveal>

        <Reveal delay={0.08} y={20}>
          <div className="overflow-hidden rounded-[8px] border border-[var(--lo-line-strong)] bg-[var(--lo-surface)] shadow-[var(--lo-shadow-lg)]">
            <div className="flex items-center gap-2 border-b border-[var(--lo-line)] bg-[var(--lo-surface-2)] px-4 py-2.5">
              <span className="lo-label text-[var(--lo-fg-dim)]">
                portal.low-ops / apps / invoice-matching-agent
              </span>
            </div>
            <Image
              src={appOverviewImage}
              alt="Low-Ops.AI portal application overview showing status, alerts and recent activity"
              placeholder="blur"
              className="m-0 h-auto w-full"
              sizes="(max-width: 1200px) 100vw, 1200px"
            />
          </div>
        </Reveal>

        <Reveal>
          <div className="lo-ledger mt-6 grid-cols-1 md:grid-cols-3">
            {DETAILS.map((detail, i) => (
              <figure
                key={detail.title}
                className="lo-cell m-0 flex h-full flex-col"
              >
                <div className="relative aspect-[8/5] overflow-hidden border-b border-[var(--lo-line)] bg-[var(--lo-ink)]">
                  <Image
                    src={detail.image}
                    alt={detail.alt}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <figcaption className="flex flex-col gap-2 px-6 py-5">
                  <span className="lo-label text-[var(--lo-fg-dim)]">
                    0{i + 1} · {detail.title}
                  </span>
                  <p className="m-0 text-[14.5px] leading-relaxed text-[var(--lo-fg-mut)]">
                    {detail.caption}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Portal;
