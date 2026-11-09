import CtaLink from '@/components/CtaLink';
import PageShell from '@/components/PageShell';
import SectionHero from '@/components/SectionHero';
import Reveal from '@/components/animations/Reveal';
import data from '@/data';
import { partnerOperating } from '@/data/partners';
import { pageMetadata } from '@/lib/metadata';
import SplitHead from '@/sections/landing/SplitHead';
import type { Metadata } from 'next';

export const metadata: Metadata = pageMetadata({
  title: 'Become a partner',
  description:
    'Apply to the Low-Ops.AI partner programme. End clients hold the Professional licence; partners earn on implementation and managed services. This intake is for MSPs, consultancies and AI studios — not the generic product demo form.',
  path: '/partners/apply',
});

const PartnerApplyPage = () => {
  return (
    <PageShell>
      <SectionHero
        kicker="Partner intake"
        title="Apply to implement and operate Low-Ops for your clients."
        description="Use this path if you are an MSP, IT consultancy or AI studio. Product buyers looking at one internal app should request a demo instead. We will contact you to schedule a partner conversation, usually within two business days."
      >
        <div className="flex flex-wrap gap-3">
          <CtaLink href={`${data.cta.personalDemoForm}?utm_content=partner`}>
            Continue to the partner request form
          </CtaLink>
          <CtaLink href="/partners" variant="secondary">
            Back to the programme
          </CtaLink>
        </div>
      </SectionHero>

      <section className="py-16 md:py-24">
        <div className="container">
          <Reveal>
            <SplitHead
              index="01"
              kicker="Tell us in the form"
              title={
                <>
                  Firm, region, and the first{' '}
                  <span className="lo-em">named client opportunity.</span>
                </>
              }
              side="The public form is the same scheduling form we use for conversations; say you are applying as a partner and name the first client you want to register. There is no self-serve deal-registration portal yet."
            />
          </Reveal>
          <Reveal>
            <div className="lo-ledger grid-cols-1 md:grid-cols-2">
              {partnerOperating.map((item) => (
                <div key={item.title} className="lo-cell px-6 py-7 md:px-8">
                  <h2 className="lo-display text-[20px] text-[var(--lo-fg)]">
                    {item.title}
                  </h2>
                  <p className="mt-3 text-[14.5px] leading-relaxed text-[var(--lo-fg-mut)]">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal>
            <p className="mt-8 max-w-[44em] text-[14px] leading-relaxed text-[var(--lo-fg-mut)]">
              Privacy: we use what you submit to evaluate the partnership and
              contact you. See the{' '}
              <a
                href="/privacy-policy"
                className="font-medium text-[var(--lo-fg)] underline decoration-[var(--lo-line-strong)] underline-offset-4"
              >
                privacy policy
              </a>
              .
            </p>
            <div className="mt-6">
              <CtaLink href={`${data.cta.personalDemoForm}?utm_content=partner`}>
                Continue to the partner request form
              </CtaLink>
            </div>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
};

export default PartnerApplyPage;
