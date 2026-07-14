import { capitalize } from '@/lib/utils';
import Reveal from './animations/Reveal';

type TProps = {
  title: string;
  description: string;
};

const SectionHero = (props: TProps) => {
  const { title, description } = props;

  return (
    <section
      id={title}
      className="relative overflow-hidden border-b border-[var(--lo-line-soft)] bg-[var(--lo-ink-2)] py-20 md:py-28"
    >
      {/* atmosphere */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 bg-[radial-gradient(60%_70%_at_50%_-10%,var(--lo-glow),transparent_60%)]" />
        <div className="lo-grid-mask" />
      </div>

      <div className="container relative z-10 flex flex-col items-center gap-4 text-center">
        <Reveal>
          <span className="lo-mono inline-flex items-center gap-2.5 text-[12px] uppercase tracking-[0.22em] text-[var(--lo-accent)] before:h-px before:w-[22px] before:bg-[var(--lo-accent)] before:opacity-70 before:content-['']">
            Low-Ops
          </span>
        </Reveal>
        <Reveal delay={0.05}>
          <h1 className="max-w-3xl text-[40px] font-extrabold leading-[1.05] tracking-[-0.02em] text-balance text-[var(--lo-fg)] md:text-[56px]">
            {capitalize(title)}
          </h1>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="max-w-2xl text-[16px] font-light leading-relaxed text-[var(--lo-fg-mut)] md:text-[18px]">
            {description}
          </p>
        </Reveal>
      </div>
    </section>
  );
};

export default SectionHero;
