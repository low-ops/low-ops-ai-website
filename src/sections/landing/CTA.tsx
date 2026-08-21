import Reveal from '@/components/animations/Reveal';
import data from '@/data';
import { FC } from 'react';
import Kicker from './Kicker';

const CTA: FC = () => {
  return (
    <section
      id="cta"
      className="relative z-10 border-t border-[var(--lo-line-soft)] py-16 md:py-24"
    >
      <div className="container">
        <Reveal>
          <div className="relative overflow-hidden rounded-2xl border border-[var(--lo-line)] px-6 py-14 text-center shadow-[var(--lo-shadow-sm)] md:px-16 md:py-20 bg-[radial-gradient(80%_130%_at_50%_0%,var(--lo-glow),transparent_60%),linear-gradient(180deg,var(--lo-surface-2),var(--lo-surface))]">
            <Kicker className="justify-center">
              Give your agents and apps a golden path
            </Kicker>
            <h2 className="lo-display relative mx-auto mt-4 max-w-3xl text-[30px] text-balance text-[var(--lo-fg)] md:text-[44px]">
              Ship AI agents &amp; web apps your security team{' '}
              <span className="lo-em">approves.</span>
            </h2>
            <p className="relative mx-auto mt-5 max-w-[42em] text-[16px] leading-relaxed text-[var(--lo-fg-mut)] md:text-[17px]">
              From prompt to production, responsibly — in minutes, not months.
              Book a demo and watch an agent or app reach your private cloud,
              best practices and guardrails all enforced.
            </p>
            <div className="relative mt-8 flex flex-wrap items-center justify-center gap-3">
              <a
                href={data.cta.personalDemoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-[var(--lo-accent)] px-6 py-3 text-[15px] font-semibold text-white transition-colors hover:bg-[var(--lo-accent-deep)]"
              >
                Book a demo
              </a>
              <a
                href={data.cta.freeAccessLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-[var(--lo-line)] bg-[var(--lo-surface)] px-6 py-3 text-[15px] font-medium text-[var(--lo-fg)] shadow-[var(--lo-shadow-sm)] transition-colors hover:border-[var(--lo-accent)] hover:text-[var(--lo-accent)]"
              >
                Start free
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default CTA;
