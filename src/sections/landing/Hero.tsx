import Reveal from '@/components/animations/Reveal';
import data from '@/data';
import { FC } from 'react';
import Console from './Console';

const Hero: FC = () => {
  return (
    <section className="relative overflow-hidden pt-16 pb-16 md:pt-28 md:pb-24">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_60%_at_50%_-10%,var(--lo-glow),transparent_65%)]"
        aria-hidden="true"
      />

      <div className="container relative z-2">
        <div className="grid items-center gap-12 md:gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <Reveal>
              <span className="inline-flex items-center rounded-full border border-[var(--lo-line)] bg-[var(--lo-surface)] px-3.5 py-1.5 text-[13px] font-medium text-[var(--lo-fg-mut)] shadow-[var(--lo-shadow-sm)]">
                The private platform for AI agents &amp; web apps
              </span>
            </Reveal>

            <Reveal delay={0.05}>
              <h1 className="lo-display mt-6 text-[40px] text-balance text-[var(--lo-fg)] md:text-[60px] lg:text-[68px]">
                Ship AI agents &amp; web apps{' '}
                <span className="lo-em">responsibly</span>.
              </h1>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-6 max-w-[33em] text-[16px] leading-relaxed text-[var(--lo-fg-mut)] md:text-[18px]">
                The self-hosted platform that ships AI agents and web apps to a
                private cloud you control — with software-engineering best
                practices enforced automatically, on one interface that&rsquo;s
                as easy for your AI agents to drive as it is for your team.
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href={data.cta.personalDemoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-[var(--lo-accent)] px-6 py-3 text-[15px] font-semibold text-white transition-colors hover:bg-[var(--lo-accent-deep)]"
                >
                  Book a demo
                </a>
                <a
                  href="#golden-path"
                  className="inline-flex items-center gap-2 rounded-lg border border-[var(--lo-line)] bg-[var(--lo-surface)] px-6 py-3 text-[15px] font-medium text-[var(--lo-fg)] shadow-[var(--lo-shadow-sm)] transition-colors hover:border-[var(--lo-accent)] hover:text-[var(--lo-accent)]"
                >
                  See how it works
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-9 flex flex-wrap items-center gap-x-5 gap-y-2 text-[14px] text-[var(--lo-fg-mut)]">
                <span>
                  <b className="font-semibold text-[var(--lo-fg)]">
                    Private cloud
                  </b>{' '}
                  first
                </span>
                <span className="h-1 w-1 rounded-full bg-[var(--lo-line)]" />
                <span>
                  <b className="font-semibold text-[var(--lo-fg)]">
                    Best practices
                  </b>{' '}
                  enforced
                </span>
                <span className="h-1 w-1 rounded-full bg-[var(--lo-line)]" />
                <span>
                  Built for humans{' '}
                  <b className="font-semibold text-[var(--lo-fg)]">&amp;</b> AI
                  agents
                </span>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.15} y={20}>
            <Console />
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Hero;
