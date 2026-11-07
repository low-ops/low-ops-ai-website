import CtaLink from '@/components/CtaLink';
import Footer from '@/components/footer';
import Header from '@/components/header';
import SectionHero from '@/components/SectionHero';
import data from '@/data';
import { partnersMetadata } from '@/data/partners';
import CTASection from '@/sections/cta/CTASection';
import PartnersSection from '@/sections/partners/PartnersSection';
import type { Metadata } from 'next';

export const metadata: Metadata = partnersMetadata;

const PartnersPage = () => {
  return (
    <>
      <Header />
      <main className="bg-[var(--lo-ink)] text-[var(--lo-fg)]">
        <SectionHero
          kicker="Partners"
          title="Deliver governed AI to every client you serve."
          description="MSPs, IT consultancies and AI studios use Low-Ops.AI to give each client a private, governed self-service platform — passing the licence through and earning on implementation and managed services."
        >
          <div className="flex flex-wrap gap-3">
            <CtaLink href={data.cta.partnerLink}>Become a partner</CtaLink>
            <CtaLink href="/solutions/msp" variant="secondary">
              Read the MSP playbook
            </CtaLink>
          </div>
        </SectionHero>
        <PartnersSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
};

export default PartnersPage;
