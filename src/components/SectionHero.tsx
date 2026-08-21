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
      className="relative overflow-hidden border-b border-[var(--lo-line-soft)] bg-[var(--lo-ink-2)] py-20 md:py-24"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_70%_at_50%_-10%,var(--lo-glow),transparent_60%)]"
        aria-hidden="true"
      />

      <div className="container relative z-10 flex flex-col items-center gap-4 text-center">
        <Reveal>
          <span className="inline-flex items-center text-[13px] font-semibold uppercase tracking-[0.12em] text-[var(--lo-accent)]">
            Low-Ops
          </span>
        </Reveal>
        <Reveal delay={0.05}>
          <h1 className="lo-display max-w-3xl text-[38px] text-balance text-[var(--lo-fg)] md:text-[52px]">
            {capitalize(title)}
          </h1>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="max-w-2xl text-[16px] leading-relaxed text-[var(--lo-fg-mut)] md:text-[18px]">
            {description}
          </p>
        </Reveal>
      </div>
    </section>
  );
};

export default SectionHero;
