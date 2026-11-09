import Footer from '@/components/footer';
import Header from '@/components/header';
import SectionHero from '@/components/SectionHero';
import { metadata as featuresMetadata } from '@/data/features';
import { pageMetadata } from '@/lib/metadata';
import CTASection from '@/sections/cta/CTASection';
import FeaturesSection from '@/sections/features/FeaturesSection';
import HowItWorks from '@/sections/landing/HowItWorks';
import Portal from '@/sections/landing/Portal';
import type { Metadata } from 'next';

export const metadata: Metadata = pageMetadata({
  title: featuresMetadata.title,
  description: featuresMetadata.description,
  path: '/features',
});

const FeaturesPage = () => {
  return (
    <>
      <Header />
      <main className="bg-[var(--lo-ink)] text-[var(--lo-fg)]">
        <SectionHero
          kicker="Features"
          title="Everything a digital employee needs to live."
          description="Low-Ops.AI is the paved road from a domain expert's idea to a governed app in production. Self-service and an MCP server for the builders; oversight, SSO, pipelines and backups for IT; per-app pricing and an open-source core for the business."
        />
        <FeaturesSection />
        <Portal />
        <HowItWorks compact />
        <CTASection />
      </main>
      <Footer />
    </>
  );
};

export default FeaturesPage;
