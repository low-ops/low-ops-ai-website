import Footer from '@/components/footer';
import Header from '@/components/header';
import SectionHero from '@/components/SectionHero';
import { pageMetadata } from '@/lib/metadata';
import CTA from '@/sections/landing/CTA';
import HowItWorks from '@/sections/landing/HowItWorks';
import Industries from '@/sections/landing/Industries';
import type { Metadata } from 'next';

export const metadata: Metadata = pageMetadata({
  title: 'Solutions by industry',
  description:
    'How Low-Ops.AI fits healthcare, government, pharma, financial services, construction and MSPs. Named proof is strongest in financial services and Mendix private-cloud operations.',
  path: '/solutions',
});

const SolutionsPage = () => {
  return (
    <>
      <Header />
      <main className="relative overflow-hidden bg-[var(--lo-ink)] text-[var(--lo-fg)]">
        <SectionHero
          title="Solutions by industry"
          description="One platform, six front lines. Low-Ops.AI lets domain experts build and deploy governed AI agents and web apps on your own infrastructure — the ideas waiting on IT look different in every sector."
        />
        <Industries
          kicker="Pick your industry"
          index="01"
          title={
            <>
              Where governance{' '}
              <span className="lo-em">isn&rsquo;t optional.</span>
            </>
          }
          side="Each page covers what is at stake in your sector, the digital employees your teams could ship this quarter and how Low-Ops.AI fits your governance model."
        />
        <HowItWorks compact />
        <CTA />
      </main>
      <Footer />
    </>
  );
};

export default SolutionsPage;
