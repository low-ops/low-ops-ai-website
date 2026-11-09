import appOverviewImage from '@/assets/app-overview-screenshot.png';
import deployImage from '@/assets/deploy-screenshot.png';
import environmentsImage from '@/assets/environments-screenshot.png';
import packagesImage from '@/assets/packages-screenshot.png';
import CtaLink from '@/components/CtaLink';
import PageShell from '@/components/PageShell';
import SectionHero from '@/components/SectionHero';
import Reveal from '@/components/animations/Reveal';
import data from '@/data';
import { pageMetadata } from '@/lib/metadata';
import SplitHead from '@/sections/landing/SplitHead';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = pageMetadata({
  title: 'Deployment walkthrough',
  description:
    'From a supported app repository to deploy, SSO, ownership, audit history and rollback in Low-Ops. Portal screenshots and the public YouTube playlist on one sales page.',
  path: '/walkthrough',
});

const STEPS = [
  {
    n: '01',
    title: 'Start with a supported app repository',
    body: 'Use a containerised internal app, an AI-built prototype that follows the Low-Ops app spec, or a Mendix app from a supported template. This is the operations layer — it does not write the business solution for you.',
    image: environmentsImage,
    alt: 'Environments in the Low-Ops.AI portal',
  },
  {
    n: '02',
    title: 'Deploy it',
    body: 'Create the app in the portal, pick a package, and deploy to development, staging or production. Pipelines, backing services and hosting come up with it.',
    image: deployImage,
    alt: 'Deploying a package in the Low-Ops.AI portal',
  },
  {
    n: '03',
    title: 'Show end-user SSO',
    body: 'The running app is reachable on the corporate network. Access follows teams and roles from your identity provider.',
    image: appOverviewImage,
    alt: 'Application overview in the Low-Ops.AI portal',
  },
  {
    n: '04',
    title: 'Inspect ownership, audit history and recovery',
    body: 'Every app has an owner, environments, packages traced to commits, and an audit log. Restore a database or redeploy a previous package when you need to roll back.',
    image: packagesImage,
    alt: 'Packages and build history in the Low-Ops.AI portal',
  },
];

const WalkthroughPage = () => {
  return (
    <PageShell>
      <SectionHero
        kicker="Walkthrough"
        title="The path a technical buyer should be able to see."
        description="Deploy a supported app, open it under SSO, inspect who owns it, and recover. The screenshots below are from the product portal. The YouTube playlist is the recorded companion — not buried in the footer."
      >
        <div className="flex flex-wrap gap-3">
          <CtaLink href={data.cta.requestDemoLink}>
            Bring one app to a live review
          </CtaLink>
          <CtaLink href={data.cta.youtubeWalkthrough} variant="secondary">
            Open the YouTube playlist
          </CtaLink>
        </div>
      </SectionHero>

      <section className="py-16 md:py-24">
        <div className="container">
          <Reveal>
            <div className="overflow-hidden rounded-[8px] border border-[var(--lo-line-strong)] bg-[var(--lo-black)]">
              <div className="aspect-video w-full">
                <iframe
                  title="Low-Ops.AI deployment walkthrough playlist"
                  src={data.cta.youtubeEmbed}
                  className="h-full w-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-[var(--lo-ink-2)] py-16 md:py-24">
        <div className="container">
          <Reveal>
            <SplitHead
              index="01"
              kicker="On the page, in order"
              title={
                <>
                  Repository, deploy, SSO,{' '}
                  <span className="lo-em">history, recovery.</span>
                </>
              }
              side="This is a sales walkthrough of a real product path, not a feature catalogue. Feature depth lives on the features page and in the documentation."
            />
          </Reveal>
          <div className="flex flex-col gap-10">
            {STEPS.map((step) => (
              <Reveal key={step.n}>
                <article className="grid grid-cols-1 overflow-hidden rounded-[8px] border border-[var(--lo-line-strong)] bg-[var(--lo-surface)] lg:grid-cols-2">
                  <div className="flex flex-col justify-center px-6 py-7 md:px-8">
                    <span className="lo-label text-[var(--lo-accent)]">
                      {step.n}
                    </span>
                    <h2 className="lo-display mt-4 text-[24px] text-[var(--lo-fg)]">
                      {step.title}
                    </h2>
                    <p className="mt-3 text-[15px] leading-relaxed text-[var(--lo-fg-mut)]">
                      {step.body}
                    </p>
                  </div>
                  <div className="relative aspect-[8/5] min-h-[220px] border-t border-[var(--lo-line)] bg-[var(--lo-ink)] lg:border-t-0 lg:border-l">
                    <Image
                      src={step.image}
                      alt={step.alt}
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
};

export default WalkthroughPage;
