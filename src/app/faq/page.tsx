import Footer from '@/components/footer';
import Header from '@/components/header';
import SectionHero from '@/components/SectionHero';
import CTASection from '@/sections/cta/CTASection';
import FaqSection from '@/sections/faq/FaqSection';
import { pageMetadata } from '@/lib/metadata';
import type { Metadata } from 'next';

export const metadata: Metadata = pageMetadata({
  title: 'FAQ',
  description:
    'Answers for IT directors and technical buyers: what Low-Ops is, who it is for, how production-app pricing works, where data lives, installation versus production approval, and compliance limits.',
  path: '/faq',
});

const FAQPage = () => {
  return (
    <>
      <Header />
      <main className="bg-[var(--lo-ink)] text-[var(--lo-fg)]">
        <SectionHero
          kicker="FAQ"
          title="Straight answers, before the demo."
          description="The questions we hear from IT leadership, executives and the domain experts who end up building. If yours is missing, book a call — we would rather answer it in person than guess."
        />
        <FaqSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
};

export default FAQPage;
