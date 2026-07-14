import Reveal from '@/components/animations/Reveal';
import data from '@/data';
import { FC } from 'react';
import Console from './Console';

const Hero: FC = () => {
  return (
    <section className="relative overflow-hidden pt-14 pb-12 md:pt-[104px] md:pb-24">
      {/* atmosphere */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(60%_55%_at_78%_8%,var(--lo-glow),transparent_60%),radial-gradient(50%_40%_at_10%_30%,rgba(34,211,238,0.10),transparent_65%)]" />
        <div className="lo-grid-mask" />
      </div>

      <div className="container relative z-2">
        <div className="grid items-center gap-8 md:gap-14 lg:grid-cols-[1.02fr_0.98fr]">
          <div>
            <Reveal>
              <span className="lo-mono inline-flex items-center gap-2.5 text-[12px] uppercase tracking-[0.22em] text-[var(--lo-accent)] before:h-px before:w-[22px] before:bg-[var(--lo-accent)] before:opacity-70 before:content-['']">
                The private, AI-native developer platform
              </span>
            </Reveal>

            <Reveal delay={0.05}>
              <h1 className="mt-5.5 text-[38px] leading-[1.04] font-extrabold tracking-[-0.02em] text-balance text-[var(--lo-fg)] md:text-[64px] lg:text-[72px]">
                Build, deploy and manage apps{' '}
                <span className="relative whitespace-nowrap text-[var(--lo-accent)]">
                  responsibly
                  <span className="absolute inset-x-0 bottom-[0.06em] h-[0.1em] rounded bg-[var(--lo-accent)] opacity-35" />
                </span>{' '}
                with AI.
              </h1>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-6 max-w-[34em] text-[16px] leading-relaxed text-[var(--lo-fg-mut)] md:text-[19px]">
                The private, self-hosted platform that gives AI-built apps a
                safe path to production. Go from idea to your own cloud in
                minutes — with security guardrails, audit trails and full data
                sovereignty built in.
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
                  className="lo-mono inline-flex items-center gap-2 rounded-[10px] border border-[var(--lo-line)] px-5 py-3.5 text-[13.5px] text-[var(--lo-fg)] transition-all hover:-translate-y-0.5 hover:border-[var(--lo-accent)] hover:text-[var(--lo-accent)]"
                >
                  See how it works
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="lo-mono mt-9 flex flex-wrap items-center gap-x-4.5 gap-y-2 text-[12px] tracking-[0.04em] text-[var(--lo-fg-dim)]">
                <span>
                  <b className="font-medium text-[var(--lo-fg-mut)]">
                    Self-hosted
                  </b>{' '}
                  · your cloud
                </span>
                <span className="h-1 w-1 rounded-full bg-[var(--lo-cyan)]" />
                <span>
                  <b className="font-medium text-[var(--lo-fg-mut)]">
                    SOC-ready
                  </b>{' '}
                  audit trails
                </span>
                <span className="h-1 w-1 rounded-full bg-[var(--lo-cyan)]" />
                <span>No Kubernetes expertise required</span>
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
