import Reveal from '@/components/animations/Reveal';
import data from '@/data';
import { FC } from 'react';
import Kicker from './Kicker';
import Stamp from './Stamp';

const CTA: FC = () => {
  return (
    <section
      id="cta"
      className="relative z-10 border-t border-[var(--lo-line-soft)] py-16 md:py-28"
    >
      <div className="container">
        <Reveal>
          <div className="relative overflow-hidden rounded-[20px] border border-[var(--lo-line)] px-6 py-14 text-center shadow-[var(--lo-shadow-sm)] md:px-16 md:py-[80px] bg-[radial-gradient(80%_130%_at_50%_0%,var(--lo-glow),transparent_60%),linear-gradient(180deg,var(--lo-surface-2),var(--lo-surface))]">
            <div className="lo-blueprint [mask-image:radial-gradient(100%_100%_at_50%_0%,#000_20%,transparent_80%)]" />
            <Stamp className="absolute top-6 right-6 hidden h-[104px] w-[104px] rotate-[9deg] opacity-90 md:block" />
            <Kicker className="justify-center">
              Give your AI-built apps a golden path
            </Kicker>
            <h2 className="lo-display relative mt-4 text-[32px] text-balance text-[var(--lo-fg)] md:text-[56px]">
              Ship AI-built apps your security team{' '}
              <span className="lo-serif text-[var(--lo-accent)]">
                approves.
              </span>
            </h2>
            <p className="relative mx-auto mt-5 max-w-[42em] text-[18px] text-[var(--lo-fg-mut)]">
              From prompt to production, responsibly — in minutes, not months.
              Book a demo and watch an idea reach your private cloud,
              guardrails and all.
            </p>
            <div className="relative mt-8.5 flex flex-wrap items-center justify-center gap-3.5">
              <a
                href={data.cta.personalDemoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="lo-mono group inline-flex items-center gap-2 rounded-[10px] bg-[var(--lo-accent)] px-5 py-3.5 text-[13.5px] font-semibold text-white transition-all hover:-translate-y-0.5 hover:shadow-[0_14px_34px_-12px_var(--lo-accent)]"
              >
                Book a demo
                <span className="transition-transform group-hover:translate-x-0.5">
                  →
                </span>
              </a>
              <a
                href={data.cta.freeAccessLink}
                target="_blank"
                rel="noopener noreferrer"
                className="lo-mono inline-flex items-center gap-2 rounded-[10px] border border-[var(--lo-line)] bg-[var(--lo-surface)] px-5 py-3.5 text-[13.5px] text-[var(--lo-fg)] shadow-[var(--lo-shadow-sm)] transition-all hover:-translate-y-0.5 hover:border-[var(--lo-accent)] hover:text-[var(--lo-accent)]"
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
