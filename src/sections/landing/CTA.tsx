import Reveal from '@/components/animations/Reveal';
import CtaLink from '@/components/CtaLink';
import { LogoMark } from '@/components/Logo';
import data from '@/data';
import { FC, ReactNode } from 'react';
import Kicker from './Kicker';

type TProps = {
  kicker?: string;
  title?: ReactNode;
  body?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

/** Play 1 — the Shadow AI audit is the default closing CTA site-wide. Dark band. */
const CTA: FC<TProps> = ({
  kicker = 'End Shadow AI',
  title = (
    <>
      Find out how much Shadow AI is in your{' '}
      <span className="lo-em">organisation.</span>
    </>
  ),
  body = 'Book a free Shadow AI audit. We help you identify how many ungoverned AI tools your employees already use — and show how the Low-Ops.AI Professional tier brings them under one governed, self-hosted roof.',
  primaryLabel = 'Book a free Shadow AI audit',
  primaryHref = data.cta.shadowAiAuditLink,
  secondaryLabel = 'Start free with Community',
  secondaryHref = data.cta.communityLink,
}) => {
  return (
    <section
      id="cta"
      data-tone="dark"
      className="relative z-10 overflow-hidden border-t border-[var(--lo-black-line)] bg-[var(--lo-black)] py-20 text-[var(--lo-on-black)] md:py-28"
    >
      <div
        className="lo-dots-dark pointer-events-none absolute inset-0 [mask-image:radial-gradient(60%_80%_at_80%_50%,rgba(0,0,0,0.9),transparent)]"
        aria-hidden="true"
      />
      <LogoMark
        className="pointer-events-none absolute -right-[6%] top-1/2 hidden h-[420px] w-[420px] -translate-y-1/2 opacity-[0.12] lg:block"
        graphite="#a3a6ab"
      />
      <div className="container relative">
        <Reveal>
          <div className="max-w-[760px]">
            <Kicker tone="dark">{kicker}</Kicker>
            <h2 className="lo-display mt-6 text-[36px] text-balance text-[var(--lo-on-black)] md:text-[56px]">
              {title}
            </h2>
            <p className="mt-6 max-w-[40em] text-[16px] leading-relaxed text-[var(--lo-on-black-mut)] md:text-[17px]">
              {body}
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <CtaLink href={primaryHref} variant="inverse">
                {primaryLabel}
              </CtaLink>
              <CtaLink
                href={secondaryHref}
                variant="secondary"
                className="border-[var(--lo-black-line)] text-[var(--lo-on-black)] hover:border-[var(--lo-on-black)]"
              >
                {secondaryLabel}
              </CtaLink>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default CTA;
