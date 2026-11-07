import Footer from '@/components/footer';
import Header from '@/components/header';
import SectionHero from '@/components/SectionHero';
import CTASection from '@/sections/cta/CTASection';
import RoiCalculator from '@/sections/landing/RoiCalculator';
import PricingSection from '@/sections/pricing/PricingSection';
import TechWeUseSection from '@/sections/pricing/TechWeUseSection';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pricing',
  description:
    'Pay for value, never for seats. Community is free and open source; Professional starts at €499 per month with the self-service portal, MCP server, pipelines and 3 apps included, €39 per additional app. Managed-service add-on available.',
};

const PricingPage = () => {
  return (
    <>
      <Header />
      <main className="bg-[var(--lo-ink)] text-[var(--lo-fg)]">
        <SectionHero
          kicker="Pricing"
          title="Transform your organization with AI at the speed of thought."
          description="Low-Ops.AI uses a predictable, value-based software license that scales strictly with the business value you generate. Keep your data completely private by hosting on your own infrastructure, with fully managed services available if your IT team prefers a hands-off approach."
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
