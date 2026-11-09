import CtaLink from '@/components/CtaLink';
import PageShell from '@/components/PageShell';
import SectionHero from '@/components/SectionHero';
import Reveal from '@/components/animations/Reveal';
import { COMPANY, companyAddress } from '@/data/company';
import data from '@/data';
import { formatEur, PRICING } from '@/data/pricing';
import { pageMetadata } from '@/lib/metadata';
import SplitHead from '@/sections/landing/SplitHead';
import type { Metadata } from 'next';

export const metadata: Metadata = pageMetadata({
  title: 'Licensing and commercial terms',
  description:
    'How Low-Ops.AI is contracted: CINAQ B.V., paid versus Community components, permitted environments, partner rights, cancellation, support and what remains usable if a subscription ends.',
  path: '/licensing',
});

const TOPICS = [
  {
    title: 'Contracting company',
    body: `${COMPANY.product} is a product of ${COMPANY.legalName} (KvK ${COMPANY.kvk}), ${companyAddress}. Governing law is ${COMPANY.jurisdiction}. Sales and legal contact: ${COMPANY.legalEmail}.`,
  },
  {
    title: 'Paid software',
    body: `Professional and Enterprise licence the proprietary portal, MCP automation, pipelines-as-operated, and related paid features. Professional list price is ${formatEur(PRICING.professionalMonthly)}/month for ${PRICING.professionalIncludedApps} production apps or agents, then ${formatEur(PRICING.additionalAppMonthly)} per additional production app.`,
  },
  {
    title: 'Community and open components',
    body: 'Community evaluation uses published install charts and public app templates. Those artefacts are not the Professional portal. Link the charts and templates — not only the GitHub organisation — from the Community page.',
  },
  {
    title: 'Permitted environments',
    body: 'One Professional licence key is for one customer installation: development, staging and production for that organisation count as one licensed deployment. Additional organisations, white-label client productions, or separate production domains need additional licences. Do not share licence keys.',
  },
  {
    title: 'Partner rights',
    body: 'Partners implement and may operate. The end client holds the Professional licence. Partners cannot reuse one key across clients. Become a partner through the partner intake.',
  },
  {
    title: 'Cancellation and continuity',
    body: 'If a paid subscription ends, proprietary portal features stop. Apps remain ordinary containers; Community and the open-source building blocks (Kubernetes, PostgreSQL, Keycloak and the published charts) remain usable so you can keep running workloads. That is the lock-in answer — export is your operational responsibility.',
  },
  {
    title: 'Support',
    body: 'Community: documentation and public channels. Professional: product support on the licensed software. Enterprise: commercial SLA as contracted. Managed operations are an add-on, not implied by the licence.',
  },
  {
    title: 'Source-code restrictions',
    body: 'Restrictions on modifying or extracting source in the licence agreement apply to the proprietary portal and paid software. They do not rewrite the licences of public Community charts, templates, or third-party open-source dependencies.',
  },
];

const LicensingPage = () => {
  return (
    <PageShell>
      <SectionHero
        kicker="Licensing"
        title="A commercial explanation procurement can actually use."
        description="This page is a buyer-facing summary. The licence agreement is the legal text. If they differ, the signed agreement wins. We would rather be precise here than hide placeholders in the contract."
      >
        <div className="flex flex-wrap gap-3">
          <CtaLink href="/license-agreement">Read the licence agreement</CtaLink>
          <CtaLink href={data.cta.communityPageLink} variant="secondary">
            Community source links
          </CtaLink>
        </div>
      </SectionHero>

      <section className="py-16 md:py-24">
        <div className="container">
          <Reveal>
            <SplitHead
              index="01"
              kicker="What you are buying"
              title={
                <>
                  Company, components, environments,{' '}
                  <span className="lo-em">and what survives cancel.</span>
                </>
              }
              side="IT and regulated-sector buyers should not have to infer how a single-domain key maps to dev, staging, production and client tenants."
            />
          </Reveal>
          <div className="grid grid-cols-1 gap-x-16 md:grid-cols-2">
            {TOPICS.map((item, i) => (
              <Reveal key={item.title} delay={(i % 2) * 0.04}>
                <div className="border-t border-[var(--lo-line-strong)] py-7">
                  <h2 className="lo-display text-[22px] text-[var(--lo-fg)]">
                    {item.title}
                  </h2>
                  <p className="mt-3 max-w-[40em] text-[15px] leading-relaxed text-[var(--lo-fg-mut)]">
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

export default LicensingPage;
