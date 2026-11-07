import Reveal from '@/components/animations/Reveal';
import SplitHead from '@/sections/landing/SplitHead';
import TechWeUse from './TechWeUse';

const TechWeUseSection = () => {
  return (
    <section id="tech-we-use" className="py-16 md:py-24">
      <div className="container">
        <Reveal>
          <SplitHead
            index="05"
            kicker="Open-source core"
            title={
              <>
                Built on the tools your platform team{' '}
                <span className="lo-em">already trusts.</span>
              </>
            }
            side="No proprietary runtime. Low-Ops.AI connects and operates industry-standard open-source components — which is exactly why there is no vendor lock-in."
          />
        </Reveal>
        <Reveal>
          <TechWeUse />
        </Reveal>
      </div>
    </section>
  );
};

export default TechWeUseSection;
