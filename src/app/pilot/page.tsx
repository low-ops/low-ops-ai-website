import CtaLink from '@/components/CtaLink';
import PageShell from '@/components/PageShell';
import SectionHero from '@/components/SectionHero';
import Reveal from '@/components/animations/Reveal';
import data from '@/data';
import { pageMetadata } from '@/lib/metadata';
import SplitHead from '@/sections/landing/SplitHead';
import type { Metadata } from 'next';

export const metadata: Metadata = pageMetadata({
  title: 'One-app deployment pilot',
  description:
    'A fixed-scope, paid Low-Ops pilot: one supported app in the agreed environment, authorised access, a deployment record, and an operational handoff accepted by the customer’s technical owner.',
  path: '/pilot',
});

const SCOPE = [
  {
    title: 'Agree before starting',
    items: [
      'Supported stack (containerised app or Mendix, plus identity provider)',
      'Infrastructure prerequisites and who provides them',
      'Price and commercial next step if the pilot is accepted',
      'Named technical owner on the customer side',
    ],
  },
  {
    title: 'In scope',
    items: [
      'Platform available in the agreed environment',
      'One application deployed and reachable by authorised users',
      'Network boundary checked against the intended design',
      'Ownership documented; deployment record visible',
      'Rollback or restore tested as appropriate for that stack',
    ],
  },
  {
    title: 'Out of scope unless priced separately',
    items: [
      'Application-level security review of the customer’s code',
      'AI-model, prompt or training-data controls the platform does not provide',
      'Organisation-wide rollout, extra client tenants, or custom product work',
      'Unconditional go-live deadlines',
    ],
  },
];

const PilotPage = () => {
  return (
    <PageShell>
      <SectionHero
        kicker="One-app pilot"
        title="A paid first outcome, not a platform-wide decision."
        description="We agree the stack, prerequisites, responsibilities and price before work starts. The pilot ends when one app is running in the agreed environment and the customer’s technical owner accepts the handoff. Then we talk about the next two apps and the recurring operating model."
      >
        <div className="flex flex-wrap gap-3">
          <CtaLink href={data.cta.requestDemoLink}>
            Request a deployment review
          </CtaLink>
          <CtaLink href="/pricing#first-deployment" variant="secondary">
            See the adoption checklist
          </CtaLink>
        </div>
      </SectionHero>

      <section className="py-16 md:py-24">
        <div className="container">
          <Reveal>
            <SplitHead
              index="01"
              kicker="Scope and acceptance"
              title={
                <>
                  Written down first.{' '}
                  <span className="lo-em">No free custom builds.</span>
                </>
              }
              side="Avoid an unconditional deadline until delivery experience on that stack supports it. Application-level or AI-specific controls that Low-Ops does not provide are identified and scoped separately."
            />
          </Reveal>
          <Reveal>
            <div className="lo-ledger grid-cols-1 lg:grid-cols-3">
              {SCOPE.map((col) => (
                <article key={col.title} className="lo-cell px-6 py-7 md:px-8">
                  <h2 className="lo-display text-[22px] text-[var(--lo-fg)]">
                    {col.title}
                  </h2>
                  <ul className="mt-5 flex flex-col divide-y divide-[var(--lo-line)] border-t border-[var(--lo-line)] text-[14.5px] leading-relaxed text-[var(--lo-fg-mut)]">
                    {col.items.map((item) => (
                      <li key={item} className="py-3">
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
};

export default PilotPage;
