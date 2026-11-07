import Footer from '@/components/footer';
import Header from '@/components/header';
import SectionHero from '@/components/SectionHero';
import CTASection from '@/sections/cta/CTASection';
import FaqSection from '@/sections/faq/FaqSection';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FAQ',
  description:
    'Answers for CIOs, CEOs, IT teams and domain experts: what Low-Ops.AI is, who it is for, how Shadow AI is solved, how per-app pricing works, where your data lives and what runs under the hood.',
};

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
