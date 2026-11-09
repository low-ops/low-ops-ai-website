import CtaLink from '@/components/CtaLink';
import PageShell from '@/components/PageShell';
import SectionHero from '@/components/SectionHero';
import Reveal from '@/components/animations/Reveal';
import data from '@/data';
import { testimonials } from '@/data/testimonials';
import { pageMetadata } from '@/lib/metadata';
import SplitHead from '@/sections/landing/SplitHead';
import type { Metadata } from 'next';

export const metadata: Metadata = pageMetadata({
  title: 'Efficient Group case study',
  description:
    'How Efficient Group, a regulated financial services business, hosts Mendix in its own cloud with Low-Ops and spins up white-label client instances. Named quotes from Emile Wegner and Andre Grobbelaar.',
  path: '/case-studies/efficient-group',
});

const emile = testimonials[0];
const andre = testimonials[3];

const FACTS = [
  {
    title: 'What was running',
    body: 'Mendix applications for a regulated financial services business, including white-label client instances that had to be spun up repeatedly.',
  },
  {
    title: 'Why private hosting mattered',
    body: 'The workload had to stay in Efficient Group’s own cloud, not on a public low-code host, because of the regulated nature of the business and client isolation.',
  },
  {
    title: 'What changed',
    body: 'Low-Ops became the operations layer for that Mendix private cloud: instances could be created in minutes from the portal, without each one becoming a Kubernetes project.',
  },
  {
    title: 'Who still operates it',
    body: 'Efficient Group’s own technical team. This is a self-hosted customer environment, not a Low-Ops multi-tenant SaaS tenancy.',
  },
  {
    title: 'What was measured',
    body: 'We are not publishing a numerical efficiency or cost-saving result for this customer. The CTO’s “100% better” wording is his attributed opinion of the DevOps experience versus standard Kubernetes, not an audited KPI.',
  },
];

const CaseStudyPage = () => {
  return (
    <PageShell>
      <SectionHero
        kicker="Case study · Efficient Group"
        title="Private-cloud Mendix operations for a regulated financial services business."
        description="Named, existing customer proof. This page restates what Emile Wegner and Andre Grobbelaar have already said on the record. It does not invent metrics we have not been given permission to publish."
      >
        <div className="flex flex-wrap gap-3">
          <CtaLink href={data.cta.requestDemoLink}>
            Review a similar Mendix estate
          </CtaLink>
          <CtaLink href="/guides/private-cloud-mendix" variant="secondary">
            IT notes on private-cloud Mendix
          </CtaLink>
        </div>
      </SectionHero>

      <section className="py-16 md:py-24">
        <div className="container">
          <Reveal>
            <SplitHead
              index="01"
              kicker="On the record"
              title={
                <>
                  Two named voices.{' '}
                  <span className="lo-em">One customer environment.</span>
                </>
              }
              side="Keep these quotes as testimony. Do not promote them as a benchmarked ROI."
            />
          </Reveal>
          <Reveal>
            <div className="lo-ledger grid-cols-1 md:grid-cols-2">
              <figure className="lo-cell m-0 px-6 py-7 md:px-8">
                <blockquote className="m-0 text-[17px] leading-relaxed text-[var(--lo-fg)]">
                  &ldquo;{emile.text}&rdquo;
                </blockquote>
                <figcaption className="mt-5 text-[13.5px] text-[var(--lo-fg-mut)]">
                  Emile Wegner, Managing Director · Efficient Group
                </figcaption>
              </figure>
              <figure className="lo-cell m-0 px-6 py-7 md:px-8">
                <blockquote className="m-0 text-[17px] leading-relaxed text-[var(--lo-fg)]">
                  &ldquo;{andre.text}&rdquo;
                </blockquote>
                <figcaption className="mt-5 text-[13.5px] text-[var(--lo-fg-mut)]">
                  Andre Grobbelaar, CTO · Efficient Group
                </figcaption>
              </figure>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-[var(--lo-ink-2)] py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 gap-x-16 md:grid-cols-2">
            {FACTS.map((item, i) => (
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

export default CaseStudyPage;
