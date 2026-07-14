import Reveal from '@/components/animations/Reveal';
import data from '@/data';
import { FC } from 'react';
import Kicker from './Kicker';

const CTA: FC = () => {
  return (
    <section
      id="cta"
      className="relative z-10 border-t border-[var(--lo-line-soft)] py-16 md:py-28"
    >
      <div className="container">
        <Reveal>
          <div className="relative overflow-hidden rounded-[18px] border border-[var(--lo-line)] px-6 py-12 text-center md:px-16 md:py-[72px] bg-[radial-gradient(80%_130%_at_50%_0%,var(--lo-glow),transparent_60%),linear-gradient(180deg,var(--lo-surface-2),var(--lo-surface))]">
            <Kicker className="justify-center">
              Give your AI-built apps a golden path
            </Kicker>
            <h2 className="mt-4 text-[28px] leading-[1.05] font-extrabold tracking-[-0.02em] text-balance text-[var(--lo-fg)] md:text-[50px]">
              Ship AI-built apps your security team approves.
            </h2>
            <p className="mx-auto mt-4.5 max-w-[44em] text-[18px] text-[var(--lo-fg-mut)]">
              From prompt to production, responsibly — in minutes, not months.
              Book a demo and watch an idea reach your private cloud, guardrails
              and all.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5">
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
                className="lo-mono inline-flex items-center gap-2 rounded-[10px] border border-[var(--lo-line)] px-5 py-3.5 text-[13.5px] text-[var(--lo-fg)] transition-all hover:-translate-y-0.5 hover:border-[var(--lo-accent)] hover:text-[var(--lo-accent)]"
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
