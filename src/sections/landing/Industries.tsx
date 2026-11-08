import Reveal from '@/components/animations/Reveal';
import { industries } from '@/data/industries';
import Link from 'next/link';
import { FC } from 'react';
import SplitHead from './SplitHead';

type TProps = {
  /** Exclude the current industry when embedded on a vertical page. */
  excludeSlug?: string;
  kicker?: string;
  index?: string;
  title?: React.ReactNode;
  side?: string;
};

/** Industries as a numbered index list — each row is a link. */
const Industries: FC<TProps> = ({
  excludeSlug,
  kicker = 'Solutions by industry',
  index = '09',
  title = (
    <>
      Built for organisations where governance{' '}
      <span className="lo-em">isn&rsquo;t optional.</span>
    </>
  ),
  side = 'Mid-market organisations in regulated and data-sensitive sectors feel the queue first: more ideas than IT can ship. See how Low-Ops.AI fits the way your industry works.',
}) => {
  const items = industries.filter((i) => i.slug !== excludeSlug);

  return (
    <section id="industries" className="relative z-10 py-16 md:py-24">
      <div className="container">
        <Reveal>
          <SplitHead kicker={kicker} index={index} title={title} side={side} />
        </Reveal>

        <Reveal>
          <ol className="border-t border-[var(--lo-line-strong)]">
            {items.map((industry, i) => (
              <li key={industry.slug}>
                <Link
                  href={`/solutions/${industry.slug}`}
                  className="group grid grid-cols-[40px_1fr_auto] items-center gap-4 border-b border-[var(--lo-line)] py-5 transition-colors hover:bg-[var(--lo-surface)] md:grid-cols-[72px_minmax(0,0.9fr)_minmax(0,1.3fr)_auto] md:gap-8 md:py-6"
                >
                  <span className="lo-mono text-[13px] text-[var(--lo-fg-dim)]">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="flex items-center gap-3">
                    <industry.icon
                      size={18}
                      className="hidden shrink-0 text-[var(--lo-accent)] md:block"
                    />
                    <h3 className="lo-display text-[22px] text-[var(--lo-fg)] md:text-[26px]">
                      {industry.name}
                    </h3>
                  </span>
                  <p className="col-span-full pl-[56px] text-[14.5px] leading-relaxed text-[var(--lo-fg-mut)] md:col-span-1 md:pl-0">
                    {industry.navDescription}
                  </p>
                  <span className="hidden text-[14px] font-medium text-[var(--lo-fg)] transition-colors group-hover:text-[var(--lo-accent)] md:inline-flex md:items-center md:gap-1.5">
                    Explore
                    <svg
                      viewBox="0 0 16 16"
                      className="h-[14px] w-[14px] transition-transform group-hover:translate-x-0.5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M3 8h10M9 4l4 4-4 4" />
                    </svg>
                  </span>
                </Link>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
};

export default Industries;
