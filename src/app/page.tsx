import Footer from '@/components/footer';
import Header from '@/components/header';
import CTA from '@/sections/landing/CTA';
import Features from '@/sections/landing/Features';
import GoldenPath from '@/sections/landing/GoldenPath';
import Hero from '@/sections/landing/Hero';
import Problem from '@/sections/landing/Problem';
import Proof from '@/sections/landing/Proof';

const Home = () => {
  return (
    <>
      <Header />
      <main className="relative overflow-hidden bg-[var(--lo-ink)] text-[var(--lo-fg)]">
        <div className="lo-thread" aria-hidden="true" />
        <Hero />
        <Problem />
        <GoldenPath />
        <Features />
        <Proof />
        <CTA />
      </main>
      <Footer />
    </>
  );
};

export default Home;
