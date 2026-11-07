import Footer from '@/components/footer';
import Header from '@/components/header';
import SectionHero from '@/components/SectionHero';
import ComparisonSection from '@/sections/comparison/ComparisonSection';
import CTASection from '@/sections/cta/CTASection';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Comparison',
  description:
    'How Low-Ops.AI compares with building your own platform, hosted control planes and public PaaS — on CI/CD, developer portal, MCP access, monitoring, disaster recovery, privacy, licensing and total cost of ownership.',
};

const ComparisonPage = () => {
  return (
    <>
      <Header />
      <main className="bg-[var(--lo-ink)] text-[var(--lo-fg)]">
        <SectionHero
          kicker="Comparison"
          title="How Low‑Ops.AI compares."
          description="Custom build, hosted control plane, public PaaS or Low-Ops.AI — a side-by-side on the things IT leadership actually asks about."
        />
        <ComparisonSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
};

export default ComparisonPage;
