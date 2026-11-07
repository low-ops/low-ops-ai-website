import Kicker from '@/sections/landing/Kicker';
import { ReactNode } from 'react';
import Reveal from './animations/Reveal';

type TProps = {
  title: string;
  description: string;
  kicker?: string;
  /** Optional slot rendered under the description (e.g. CTAs). */
  children?: ReactNode;
};

/** Inner-page hero: left-aligned editorial header on a dot-grid field. */
const SectionHero = (props: TProps) => {
  const { title, description, kicker = 'Low-Ops.AI', children } = props;

  return (
    <section
      id={title}
      className="relative overflow-hidden border-b border-[var(--lo-line)] bg-[var(--lo-ink)] pt-16 pb-14 md:pt-24 md:pb-20"
    >
      <div
        className="lo-dots pointer-events-none absolute inset-0 [mask-image:linear-gradient(to_bottom,rgba(0,0,0,0.6),transparent_85%)]"
        aria-hidden="true"
      />
      <div className="container relative z-10">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
            <Reveal>
              <Kicker>{kicker}</Kicker>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="lo-display mt-5 max-w-[12em] text-[40px] text-balance text-[var(--lo-fg)] md:text-[64px]">
                {title}
              </h1>
            </Reveal>
          </div>
          <div className="flex flex-col justify-end gap-6">
            <Reveal delay={0.1}>
              <p className="max-w-[36em] text-[16px] leading-relaxed text-[var(--lo-fg-mut)] md:text-[18px]">
                {description}
              </p>
            </Reveal>
            {children && <Reveal delay={0.15}>{children}</Reveal>}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionHero;
