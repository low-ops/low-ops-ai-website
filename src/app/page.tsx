import Footer from '@/components/footer';
import Header from '@/components/header';
import { pageMetadata } from '@/lib/metadata';
import CTA from '@/sections/landing/CTA';
import Evidence from '@/sections/landing/Evidence';
import Hero from '@/sections/landing/Hero';
import Industries from '@/sections/landing/Industries';
import Pilot from '@/sections/landing/Pilot';
import PricingTeaser from '@/sections/landing/PricingTeaser';
import Problem from '@/sections/landing/Problem';
import Security from '@/sections/landing/Security';
import Walkthrough from '@/sections/landing/Walkthrough';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  ...pageMetadata({
    title:
      'Low-Ops.AI — Deploy internal apps on your infrastructure, with IT in control',
    description:
      'Low-Ops is the deployment and operations layer for internal apps and AI agents. Bring one app for a deployment review. Professional starts at €499/month for three production apps. No per-seat licensing.',
    path: '/',
  }),
  title: {
    absolute:
      'Low-Ops.AI — Deploy internal apps on your infrastructure, with IT in control',
  },
};

const Home = () => {
  return (
    <>
      <Header />
      <main className="relative overflow-hidden bg-[var(--lo-ink)] text-[var(--lo-fg)]">
        <Hero />
        <Evidence />
        <Problem />
        <Walkthrough />
        <Pilot />
        <PricingTeaser />
        <Security />
        <Industries
          index="06"
          kicker="Where we have proof — and where we do not yet"
          title={
            <>
              Start with Mendix and implementation partners.{' '}
              <span className="lo-em">Keep the industry pages.</span>
            </>
          }
          side="Named proof today is strongest in private-cloud Mendix operations with Efficient Group, Comotion and Lowcode Labs. Industry pages remain for healthcare, government, pharma, finance, construction and MSPs — they are not equally evidenced acquisition markets yet."
        />
        <CTA />
      </main>
      <Footer />
    </>
  );
};

export default Home;
