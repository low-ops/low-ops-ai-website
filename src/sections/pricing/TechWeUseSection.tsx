import SectionTitle from '@/components/SectionTitle';
import TechWeUse from './TechWeUse';

const TechWeUseSection = () => {
  return (
    <section id="tech-we-use" className="pt-20 md:pt-28 bg-primary/5">
      <div className="container flex flex-col items-center gap-12 md:gap-20">
        <SectionTitle
          subtitle="Integrations"
          title="Tools we use"
          description="We build on proven open-source tools to deliver the best results."
        />

        <TechWeUse />
      </div>
    </section>
  );
};

export default TechWeUseSection;
