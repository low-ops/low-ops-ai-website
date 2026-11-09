import CtaLink from '@/components/CtaLink';
import PageShell from '@/components/PageShell';
import SectionHero from '@/components/SectionHero';
import Reveal from '@/components/animations/Reveal';
import data from '@/data';
import { pageMetadata } from '@/lib/metadata';
import SplitHead from '@/sections/landing/SplitHead';
import type { Metadata } from 'next';

export const metadata: Metadata = pageMetadata({
  title: 'What IT needs before accepting an internal AI app',
  description:
    'A practical IT checklist for accepting an internal AI-built app: owner, identity, network boundary, secrets, model egress, backups, deploy history and rollback. Prerequisites and limitations included.',
  path: '/guides/it-approval-for-internal-ai-apps',
});

const CHECKS = [
  {
    title: 'A named technical owner',
    body: 'Someone in IT or the business who will accept incidents, access reviews and the production handoff. A prototype without an owner is not ready.',
  },
  {
    title: 'Identity before the URL',
    body: 'The app should inherit SSO and roles from the corporate directory. A shared password on a VM is not acceptance.',
  },
  {
    title: 'The network boundary, written down',
    body: 'Where it runs, who can reach it, and whether it can call the public internet. AI apps often need an explicit allow-list for model endpoints.',
  },
  {
    title: 'Secrets and data classification',
    body: 'What data the app reads, where it is stored, and whether prompts or files can leave for a third-party model. Self-hosting the platform does not answer this by itself.',
  },
  {
    title: 'A deploy record and a rollback',
    body: 'You should be able to see who shipped the current version and how to restore the previous one. If that requires a hero, it is not operational.',
  },
  {
    title: 'Limitations of the platform',
    body: 'Low-Ops provisions hosting, SSO, pipelines, backups and an audit trail. It does not review the application’s prompt injection surface, train your model, or certify DORA or GDPR for you.',
  },
];

const GuidePage = () => {
  return (
    <PageShell>
      <SectionHero
        kicker="Guide for IT"
        title="What to require before an internal AI app goes to production."
        description="Written for the IT director who is asked to say yes to a working prototype. The champion is usually a domain expert. Your job is to accept an operating environment, not to rebuild the app."
      >
        <div className="flex flex-wrap gap-3">
          <CtaLink href={data.cta.pilotLink}>Scope a one-app pilot</CtaLink>
          <CtaLink href="/security" variant="secondary">
            Security pack
          </CtaLink>
        </div>
      </SectionHero>

      <section className="py-16 md:py-24">
        <div className="container">
          <Reveal>
            <SplitHead
              index="01"
              kicker="Acceptance checklist"
              title={
                <>
                  Prerequisites first.{' '}
                  <span className="lo-em">Then the platform.</span>
                </>
              }
              side="If these items are missing, Low-Ops will not magically make the app supportable. If they are present, the platform is the paved road: deploy, identity, history, recovery."
            />
          </Reveal>
          <div className="grid grid-cols-1 gap-x-16 md:grid-cols-2">
            {CHECKS.map((item, i) => (
              <Reveal key={item.title} delay={(i % 2) * 0.04}>
                <div className="border-t border-[var(--lo-line-strong)] py-7">
                  <span className="lo-label text-[var(--lo-fg-dim)]">
                    0{i + 1}
                  </span>
                  <h2 className="lo-display mt-3 text-[22px] text-[var(--lo-fg)]">
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

export default GuidePage;
