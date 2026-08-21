import Footer from '@/components/footer';
import Header from '@/components/header';
import CTA from '@/sections/landing/CTA';
import Features from '@/sections/landing/Features';
import GoldenPath from '@/sections/landing/GoldenPath';
import Hero from '@/sections/landing/Hero';
import Portal from '@/sections/landing/Portal';
import Problem from '@/sections/landing/Problem';
import Proof from '@/sections/landing/Proof';

const Home = () => {
  return (
    <>
      <Header />
      <main className="relative overflow-hidden bg-[var(--lo-ink)] text-[var(--lo-fg)]">
        <Hero />
        <Problem />
        <GoldenPath />
        <Features />
        <Portal />
        <Proof />
        <CTA />
      </main>
      <Footer />
    </>
  );
};

export default Home;
