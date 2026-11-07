import Footer from '@/components/footer';
import Header from '@/components/header';
import CTA from '@/sections/landing/CTA';
import Features from '@/sections/landing/Features';
import Hero from '@/sections/landing/Hero';
import HowItWorks from '@/sections/landing/HowItWorks';
import Industries from '@/sections/landing/Industries';
import Personas from '@/sections/landing/Personas';
import Pillars from '@/sections/landing/Pillars';
import Portal from '@/sections/landing/Portal';
import PricingTeaser from '@/sections/landing/PricingTeaser';
import Problem from '@/sections/landing/Problem';
import Proof from '@/sections/landing/Proof';

const Home = () => {
  return (
    <>
      <Header />
      <main className="relative overflow-hidden bg-[var(--lo-ink)] text-[var(--lo-fg)]">
        <Hero />
        <Problem />
        <Personas />
        <HowItWorks />
        <Pillars />
        <Features />
        <Portal />
        <PricingTeaser />
        <Industries />
        <Proof />
        <CTA />
      </main>
      <Footer />
    </>
  );
};

export default Home;
