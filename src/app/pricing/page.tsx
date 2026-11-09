import Footer from '@/components/footer';
import Header from '@/components/header';
import SectionHero from '@/components/SectionHero';
import CTASection from '@/sections/cta/CTASection';
import RoiCalculator from '@/sections/landing/RoiCalculator';
import PricingSection from '@/sections/pricing/PricingSection';
import TechWeUseSection from '@/sections/pricing/TechWeUseSection';
import { pageMetadata } from '@/lib/metadata';
import type { Metadata } from 'next';

export const metadata: Metadata = pageMetadata({
  title: 'Pricing',
  description:
    'Professional is €499/month for three production apps or agents, then €39 per additional production app. Unlimited users. Ten production apps cost €772/month in licensing — a licence example, not a quote.',
  path: '/pricing',
});

const PricingPage = () => {
  return (
    <>
      <Header />
      <main className="bg-[var(--lo-ink)] text-[var(--lo-fg)]">
        <SectionHero
          kicker="Pricing"
          title="Pay per production app. Never per seat."
          description="A predictable software licence on infrastructure you control. Staging for a billed app is included. Infrastructure, model/API usage, implementation and optional managed operations are extra. The 400-employee Enterprise note is a recommendation, not an eligibility rule."
        />
        <PricingSection />
        <RoiCalculator
          index="04"
          kicker="ROI calculator"
          title={
            <>
              What three digital employees return{' '}
              <span className="lo-em">against one licence.</span>
            </>
          }
          side="Plug in your own numbers. Value is the hours your domain experts get back plus the IT operations time the platform automates away; cost is the licence plus the infrastructure you already run."
          tone="band"
        />
        <TechWeUseSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
};

export default PricingPage;
