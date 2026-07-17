import PricingComparisonTable from '@/components/LicenseComparisonTable';

const PricingSection = () => {
  return (
    <section id="features" className="py-20 md:py-28">
      <div className="container flex flex-col items-center gap-12 lg:gap-20">
        <PricingComparisonTable />
      </div>
    </section>
  );
};

export default PricingSection;
