import Footer from '@/components/footer';
import Header from '@/components/header';
import CTASection from '@/sections/cta/CTASection';
import FeaturesSection from '@/sections/features/FeaturesSection';
import RoadmapSection from '@/sections/features/RoadmapSection';
import SectionHero from '../../components/SectionHero';

const FeaturesPage = () => {
  return (
    <>
      <Header />
      <SectionHero
        title="Features"
        description="Low-Ops is a full-featured, self-hosted platform for building and shipping AI agents and web apps. It enforces software-engineering best practices — secure, compliant and easy to operate for humans and AI agents alike — so your team can focus on the product, not the infrastructure."
      />
      <main>
        <FeaturesSection />
        <RoadmapSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
};

export default FeaturesPage;
