import SectionTitle from '@/components/SectionTitle';
import { FC } from 'react';
import SolutionTabs from './SolutionTabs';

const SolutionsSection: FC = () => {
  return (
    <section className="w-full py-16 md:py-24">
      <div className="container">
        <SectionTitle
          subtitle="The AI adoption bottleneck"
          title="AI made building easy. Deploying it responsibly is the hard part."
          description="Leadership drives for growth, security mandates guardrails, developers want to ship, and operations is buried in manual deployments. So promising apps stall in development — or land in an unmanaged public cloud with sensitive data at risk. Low-Ops resolves the conflict for every stakeholder."
          className="mb-10 md:mb-12"
        />
        <SolutionTabs />
      </div>
    </section>
  );
};

export default SolutionsSection;
