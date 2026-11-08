import data from '@/data';
import CTA from '@/sections/landing/CTA';

/** Inner-page closing band — same dark CTA as the landing page, broader copy. */
const CTASection = () => {
  return (
    <CTA
      kicker="Get started"
      title={
        <>
          Let your experts build&nbsp;AI.{' '}
          <span className="lo-em">Keep IT in control.</span>
        </>
      }
      body="Turn AI ideas into governed, permanent digital employees on your own infrastructure — self-service for domain experts, complete oversight for IT, and no per-seat creator tax."
      primaryLabel="Book a working session"
      primaryHref={data.cta.shadowAiAuditLink}
      secondaryLabel="Start free"
      secondaryHref={data.cta.freeAccessLink}
    />
  );
};

export default CTASection;
