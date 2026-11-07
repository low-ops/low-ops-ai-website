import Footer from '@/components/footer';
import Header from '@/components/header';
import SectionHero from '@/components/SectionHero';
import { aboutMetadata } from '@/data/about-us';
import AboutUsSection from '@/sections/about-us/AboutUsSection';
import CTASection from '@/sections/cta/CTASection';
import type { Metadata } from 'next';

export const metadata: Metadata = aboutMetadata;

const AboutUsPage = () => {
  return (
    <>
      <Header />
      <main className="bg-[var(--lo-ink)] text-[var(--lo-fg)]">
        <SectionHero
          kicker="About us"
          title="Built by people who spent twenty years in the IT queue."
          description="Low-Ops.AI is made in Rotterdam by platform engineers who built app platforms for banks, insurers and public institutions — and decided the next one should install in a day and let the whole organisation build."
        />
        <AboutUsSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
};

export default AboutUsPage;
