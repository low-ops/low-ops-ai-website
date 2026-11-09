import CtaLink from '@/components/CtaLink';
import PageShell from '@/components/PageShell';
import SectionHero from '@/components/SectionHero';
import Reveal from '@/components/animations/Reveal';
import data from '@/data';
import { pageMetadata } from '@/lib/metadata';
import SplitHead from '@/sections/landing/SplitHead';
import type { Metadata } from 'next';

export const metadata: Metadata = pageMetadata({
  title: 'Private-cloud Mendix operations',
  description:
    'What IT should expect when running Mendix on a private cloud with Low-Ops: supported path, instance isolation, identity, and the limits of what the platform operates versus what Mendix still owns.',
  path: '/guides/private-cloud-mendix',
});

const NOTES = [
  {
    title: 'The supported path',
    body: 'Low-Ops has a public Mendix app template and customers already running Mendix in a private cloud. That is the evidenced starting point — not a claim that every Mendix runtime option is certified here.',
  },
  {
    title: 'Why IT usually blocks it',
    body: 'Public Mendix Cloud is fast until data residency, client isolation or a white-label topology shows up. Rolling your own Kubernetes for each instance is the other extreme. Low-Ops is the operations layer in between.',
  },
  {
    title: 'What the platform takes',
    body: 'Hosting the app, environments, pipelines, backups, SSO at the platform edge, and a portal record of who deployed what. Spinning up another instance is a platform action, not a new cluster project.',
  },
  {
    title: 'What Mendix and the app still own',
    body: 'The model, microflows, app-level security, and Mendix platform licences. Low-Ops does not replace Mendix Cloud content management or your Mendix licensing with Mendix itself.',
  },
  {
    title: 'Working example',
    body: 'Efficient Group hosts Mendix in its own cloud and creates white-label client instances from the portal. Read the case study for the named quotes and the limits of what we claim.',
  },
  {
    title: 'Limitations',
    body: 'Single-node Community is not this path. Production Mendix needs a Kubernetes-compatible environment, identity, and a tested restore. Implementation partners such as Comotion and Lowcode Labs already deliver this motion.',
  },
];

const MendixGuidePage = () => {
  return (
    <PageShell>
      <SectionHero
        kicker="Guide · Mendix"
        title="Private-cloud Mendix operations, without pretending it is automatic."
        description="For IT teams asked to take Mendix off a public host, or to run many client instances, without staffing a Kubernetes practice for each one."
      >
        <div className="flex flex-wrap gap-3">
          <CtaLink href={data.cta.caseStudyLink}>
            Efficient Group case study
          </CtaLink>
          <CtaLink href={data.cta.communityLink} variant="secondary">
            Mendix template on GitHub
          </CtaLink>
        </div>
      </SectionHero>

      <section className="py-16 md:py-24">
        <div className="container">
          <Reveal>
            <SplitHead
              index="01"
              kicker="What to expect"
              title={
                <>
                  A supported operations path.{' '}
                  <span className="lo-em">Not a Mendix replacement.</span>
                </>
              }
              side="Use this with the security pack and the one-app pilot. Do not treat a template repository as a production architecture."
            />
          </Reveal>
          <div className="grid grid-cols-1 gap-x-16 md:grid-cols-2">
            {NOTES.map((item, i) => (
              <Reveal key={item.title} delay={(i % 2) * 0.04}>
                <div className="border-t border-[var(--lo-line-strong)] py-7">
                  <h2 className="lo-display text-[22px] text-[var(--lo-fg)]">
                    {item.title}
                  </h2>
                  <p className="mt-3 max-w-[38em] text-[15px] leading-relaxed text-[var(--lo-fg-mut)]">
                    {item.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
};

export default MendixGuidePage;
