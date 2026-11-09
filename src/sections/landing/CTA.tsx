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

/** Default closing CTA site-wide: review one blocked app. */
const CTA: FC<TProps> = ({
  kicker = 'A smaller first decision',
  title = (
    <>
      Bring one app.{' '}
      <span className="lo-em">See it deployed under IT control.</span>
    </>
  ),
  body = 'Request a 45-minute working session. We will contact you to schedule, usually within one business day. You should leave having seen one app deployed, its access controlled, and its deployment history reviewed — or a clear reason the stack is not a fit.',
  primaryLabel = 'Request a demo',
  primaryHref = data.cta.requestDemoLink,
  secondaryLabel = 'Install Community',
  secondaryHref = data.cta.communityPageLink,
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
