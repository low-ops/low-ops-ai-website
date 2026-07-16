import Reveal from '@/components/animations/Reveal';
import data from '@/data';
import { FC } from 'react';
import Console from './Console';
import Stamp from './Stamp';

const Hero: FC = () => {
  return (
    <section className="relative overflow-hidden pt-14 pb-12 md:pt-24 md:pb-20">
      {/* drafting-table atmosphere */}
      <div className="lo-blueprint" aria-hidden="true" />
      <span
        className="lo-mono absolute top-4 left-5 hidden text-[10px] uppercase tracking-[0.14em] text-[var(--lo-fg-dim)] md:block"
        aria-hidden="true"
      >
        51.91°N — 4.47°E
        <br />
        Rotterdam, NL
      </span>
      <span
        className="lo-mono absolute top-4 right-5 hidden text-right text-[10px] uppercase tracking-[0.14em] text-[var(--lo-fg-dim)] md:block"
        aria-hidden="true"
      >
        Drawing № LO-2026
        <br />
        Rev. C — Approved
      </span>

      <div className="container relative z-2">
        <div className="grid items-center gap-10 md:gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <Reveal>
              <span className="lo-mono inline-flex items-center gap-2.5 text-[12px] uppercase tracking-[0.22em] text-[var(--lo-accent)] before:h-px before:w-[22px] before:bg-[var(--lo-accent)] before:opacity-70 before:content-['']">
                The private platform for AI agents &amp; web apps
              </span>
            </Reveal>

            <Reveal delay={0.05}>
              <h1 className="lo-display mt-6 text-[44px] text-balance text-[var(--lo-fg)] md:text-[72px] lg:text-[84px]">
                Ship AI agents &amp; web apps{' '}
                <span className="relative whitespace-nowrap">
                  <span className="lo-em">safely</span>
                  <svg
                    className="lo-squiggle absolute inset-x-0 -bottom-[0.13em] h-[0.2em] w-full overflow-visible"
                    viewBox="0 0 300 24"
                    preserveAspectRatio="none"
                    aria-hidden="true"
                  >
                    <path
                      pathLength="1"
                      d="M4,16 C40,6 70,20 105,12 S180,4 220,14 S280,10 296,13"
                    />
                  </svg>
                </span>
                .
              </h1>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-7 max-w-[33em] text-[16px] leading-relaxed text-[var(--lo-fg-mut)] md:text-[19px]">
                The self-hosted platform that ships AI agents and web apps to a
                private cloud you control — with software-engineering best
                practices enforced automatically, on one interface that&rsquo;s
                as easy for your AI agents to drive as it is for your team.
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="mt-8.5 flex flex-wrap items-center gap-3.5">
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
                  href="#golden-path"
                  className="lo-mono inline-flex items-center gap-2 rounded-[10px] border border-[var(--lo-line)] bg-[var(--lo-surface)] px-5 py-3.5 text-[13.5px] text-[var(--lo-fg)] shadow-[var(--lo-shadow-sm)] transition-all hover:-translate-y-0.5 hover:border-[var(--lo-accent)] hover:text-[var(--lo-accent)]"
                >
                  See how it works
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="lo-mono mt-9 flex flex-wrap items-center gap-x-4.5 gap-y-2 text-[12px] tracking-[0.04em] text-[var(--lo-fg-dim)]">
                <span>
                  <b className="font-medium text-[var(--lo-fg-mut)]">
                    Private cloud
                  </b>{' '}
                  first
                </span>
                <span className="h-1 w-1 rounded-full bg-[var(--lo-cyan)]" />
                <span>
                  <b className="font-medium text-[var(--lo-fg-mut)]">
                    Best practices
                  </b>{' '}
                  enforced
                </span>
                <span className="h-1 w-1 rounded-full bg-[var(--lo-cyan)]" />
                <span>
                  Built for humans{' '}
                  <b className="font-medium text-[var(--lo-fg-mut)]">&amp;</b> AI
                  agents
                </span>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.15} y={20}>
            {/* figure frame with crop marks, stamp and caption */}
            <div>
              <div className="relative p-4">
                <span
                  className="absolute top-0 left-0 h-4 w-4 border-t-[1.5px] border-l-[1.5px] border-[var(--lo-fg-dim)]"
                  aria-hidden="true"
                />
                <span
                  className="absolute top-0 right-0 h-4 w-4 border-t-[1.5px] border-r-[1.5px] border-[var(--lo-fg-dim)]"
                  aria-hidden="true"
                />
                <span
                  className="absolute bottom-0 left-0 h-4 w-4 border-b-[1.5px] border-l-[1.5px] border-[var(--lo-fg-dim)]"
                  aria-hidden="true"
                />
                <span
                  className="absolute right-0 bottom-0 h-4 w-4 border-r-[1.5px] border-b-[1.5px] border-[var(--lo-fg-dim)]"
                  aria-hidden="true"
                />
                <Stamp className="absolute -top-13 right-2 z-3 h-[112px] w-[112px] rotate-[-12deg]" />
                <Console />
              </div>
              <div className="mt-3 text-right">
                <span className="lo-mono inline-flex items-center gap-2 text-[11px] tracking-[0.08em] text-[var(--lo-fg-dim)] before:h-px before:w-7 before:bg-[var(--lo-fg-dim)] before:opacity-60 before:content-['']">
                  fig. 01 — the golden path, live
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Hero;
