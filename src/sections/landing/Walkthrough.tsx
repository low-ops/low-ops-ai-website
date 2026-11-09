import appOverviewImage from '@/assets/app-overview-screenshot.png';
import deployImage from '@/assets/deploy-screenshot.png';
import environmentsImage from '@/assets/environments-screenshot.png';
import packagesImage from '@/assets/packages-screenshot.png';
import Reveal from '@/components/animations/Reveal';
import CtaLink from '@/components/CtaLink';
import data from '@/data';
import Image from 'next/image';
import { FC } from 'react';
import SplitHead from './SplitHead';

const STEPS = [
  {
    n: '01',
    title: 'Start from a supported app repository',
    body: 'Bring a containerised internal app or agent — including a Mendix app or an AI-built prototype that follows the Low-Ops app spec.',
  },
  {
    n: '02',
    title: 'Deploy it in the portal',
    body: 'Pick a package, choose development, staging or production, and deploy. The platform provisions hosting, the pipeline and backing services.',
  },
  {
    n: '03',
    title: 'Show end-user access under SSO',
    body: 'The app is reachable on the corporate network behind your identity provider. IT controls who can open it.',
  },
  {
    n: '04',
    title: 'Inspect ownership, history and recovery',
    body: 'The owner, deploy record and audit trail are visible in one place. Restore or roll back from a previous package when you need to.',
  },
];

const Walkthrough: FC = () => {
  return (
    <section
      id="walkthrough"
      className="relative z-10 bg-[var(--lo-ink-2)] py-16 md:py-24"
    >
      <div className="container">
        <Reveal>
          <SplitHead
            index="02"
            kicker="Deployment walkthrough"
            title={
              <>
                One app. Deployed, accessed, and{' '}
                <span className="lo-em">handed to IT.</span>
              </>
            }
            side="This is the path a technical buyer should be able to see before a platform decision: a supported app, a deploy, SSO, an ownership record, and a recovery step. Deep feature lists live on the features and documentation pages."
          />
        </Reveal>

        <Reveal delay={0.06} y={20}>
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
          <ol className="lo-ledger mt-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((step) => (
              <li key={step.n} className="lo-cell px-6 py-6">
                <span className="lo-label text-[var(--lo-accent)]">
                  {step.n}
                </span>
                <h3 className="lo-display mt-4 text-[20px] text-[var(--lo-fg)]">
                  {step.title}
                </h3>
                <p className="mt-2.5 text-[14.5px] leading-relaxed text-[var(--lo-fg-mut)]">
                  {step.body}
                </p>
              </li>
            ))}
          </ol>
        </Reveal>

        <Reveal>
          <div className="lo-ledger mt-6 grid-cols-1 md:grid-cols-3">
            {[
              {
                title: 'Environments',
                image: environmentsImage,
                alt: 'Low-Ops.AI portal environments view listing staging, development and production',
                caption: 'Development, staging and production side by side.',
              },
              {
                title: 'Packages',
                image: packagesImage,
                alt: 'Low-Ops.AI portal packages view showing builds linked to commits',
                caption: 'Every build traced to a commit, with scan status.',
              },
              {
                title: 'Deploy',
                image: deployImage,
                alt: 'Low-Ops.AI portal deploy drawer selecting a package',
                caption: 'Promote a package without a bespoke runbook.',
              },
            ].map((item, i) => (
              <figure key={item.title} className="lo-cell m-0 flex flex-col">
                <div className="relative aspect-[8/5] overflow-hidden border-b border-[var(--lo-line)] bg-[var(--lo-ink)]">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <figcaption className="px-6 py-5">
                  <span className="lo-label text-[var(--lo-fg-dim)]">
                    0{i + 1} · {item.title}
                  </span>
                  <p className="mt-2 m-0 text-[14.5px] leading-relaxed text-[var(--lo-fg-mut)]">
                    {item.caption}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <CtaLink href={data.cta.walkthroughLink}>
              Open the full walkthrough
            </CtaLink>
            <CtaLink
              href={data.cta.youtubeWalkthrough}
              variant="secondary"
            >
              YouTube playlist
            </CtaLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Walkthrough;
