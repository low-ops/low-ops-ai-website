import SectionTitle from '@/components/SectionTitle';
import { features } from '@/data/features';
import FeaturesItem from '@/sections/features/FeaturesItem';

const FeaturesSection = () => {
  const renderFeatures = () => {
    return features.map((feature, index) => (
      <FeaturesItem
        key={index}
        icon={feature.icon}
        title={feature.title}
        description={feature.description}
      />
    ));
  };

  return (
    <section id="features" className="py-20 md:py-28">
      <div className="container flex flex-col items-center gap-12 md:gap-20">
        <SectionTitle
          subtitle="Features"
          title="Everything your team needs to ship responsibly"
          description="A complete, self-hosted platform for building, shipping and operating AI agents and web apps — private cloud first, with software-engineering best practices, security and compliance engineered in from the start."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 w-full max-w-6xl mx-auto">
          {renderFeatures()}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
