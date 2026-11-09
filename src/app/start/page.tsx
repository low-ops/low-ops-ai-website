import CtaLink from '@/components/CtaLink';
import PageShell from '@/components/PageShell';
import SectionHero from '@/components/SectionHero';
import data from '@/data';
import { pageMetadata } from '@/lib/metadata';
import SplitHead from '@/sections/landing/SplitHead';
import Reveal from '@/components/animations/Reveal';
import type { Metadata } from 'next';

export const metadata: Metadata = pageMetadata({
  title: 'Ways to start',
  description:
    'Log in if you already have access. Request a 45-minute deployment review. Request hosted trial access. Or install Community for self-hosted evaluation — after you have seen the prerequisites.',
  path: '/start',
});

const PATHS = [
  {
    n: '01',
    title: 'Request a demo',
    body: 'A 45-minute working session. We contact you to schedule, usually within one business day. You should see one app deployed, access controlled, and the deploy history reviewed.',
    cta: 'Request a demo',
    href: data.cta.requestDemoLink,
    primary: true,
  },
  {
    n: '02',
    title: 'Request hosted trial access',
    body: 'Not instant. Submit the trial form and we email instructions if access is approved. Use this when you want to understand the portal before provisioning your own infrastructure.',
    cta: 'Request evaluation access',
    href: data.cta.trialLink,
    primary: false,
  },
  {
    n: '03',
    title: 'Install Community',
    body: 'Self-hosted evaluation on a single node. It needs 16 GB RAM, an 8-core CPU, 500 GB disk, DNS and install credentials. It is not recommended for production.',
    cta: 'See Community prerequisites',
    href: data.cta.communityPageLink,
    primary: false,
  },
  {
    n: '04',
    title: 'Log in',
    body: 'For people who already have a portal account. The login screen is not a sign-up page.',
    cta: 'Log in to the portal',
    href: data.cta.loginLink,
    primary: false,
  },
];

const StartPage = () => {
  return (
    <PageShell>
      <SectionHero
        kicker="Get started"
        title="Four different next steps. Pick the one you actually mean."
        description="“Start free” used to send new visitors to a login screen. These paths are separate on purpose: a scheduled working session, a hosted trial that requires approval, a self-hosted Community install, and login for existing users."
      />
      <section className="py-16 md:py-24">
        <div className="container">
          <Reveal>
            <SplitHead
              index="01"
              kicker="Choose a path"
              title={
                <>
                  Each CTA leads to the step it{' '}
                  <span className="lo-em">promises.</span>
                </>
              }
              side="If you have a useful internal app blocked by IT, start with a deployment review or a one-app pilot. Community is for teams ready to provision a Linux host."
            />
          </Reveal>
          <Reveal>
            <div className="lo-ledger grid-cols-1 md:grid-cols-2">
              {PATHS.map((path) => (
                <article
                  key={path.n}
                  className="lo-cell flex h-full flex-col px-6 py-7 md:px-8"
                >
                  <span className="lo-label text-[var(--lo-accent)]">
                    {path.n}
                  </span>
                  <h2 className="lo-display mt-4 text-[24px] text-[var(--lo-fg)]">
                    {path.title}
                  </h2>
                  <p className="mt-3 flex-1 text-[14.5px] leading-relaxed text-[var(--lo-fg-mut)]">
                    {path.body}
                  </p>
                  <div className="mt-6">
                    <CtaLink
                      href={path.href}
                      variant={path.primary ? 'primary' : 'secondary'}
                      size="sm"
                    >
                      {path.cta}
                    </CtaLink>
                  </div>
                </article>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
};

export default StartPage;
