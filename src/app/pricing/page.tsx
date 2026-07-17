import Footer from '@/components/footer';
import Header from '@/components/header';
import SectionHero from '@/components/SectionHero';
import CTASection from '@/sections/cta/CTASection';
import PricingSection from '@/sections/pricing/PricingSection';
import TechWeUseSection from '@/sections/pricing/TechWeUseSection';

const PricingPage = () => {
  return (
    <>
      <Header />
      <SectionHero
        title="Pricing"
        description="Flexible, transparent pricing that fits your needs — whether you're just starting or looking to scale."
      />
      <main>
        <PricingSection />
        <TechWeUseSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
};

export default PricingPage;
