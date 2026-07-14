import Reveal from '@/components/animations/Reveal';
import { testimonials } from '@/data/testimonials';
import { FC } from 'react';
import Kicker from './Kicker';

const initials = (author: string) =>
  author
    .split(',')[0]
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase();

// Feature the two named, regulated-industry quotes.
const featured = [testimonials[0], testimonials[3]];

const Proof: FC = () => {
  return (
    <section
      id="proof"
      className="relative z-10 border-t border-[var(--lo-line-soft)] py-16 md:py-28"
    >
      <div className="container">
        <Reveal className="max-w-[720px]">
          <Kicker>Proof from regulated teams</Kicker>
          <h2 className="mt-4.5 text-[28px] leading-[1.05] font-extrabold tracking-[-0.02em] text-balance text-[var(--lo-fg)] md:text-[46px]">
            Trusted where the stakes — and the compliance bar — are highest.
          </h2>
        </Reveal>

        <div className="mt-13 grid grid-cols-1 gap-4 lg:grid-cols-[1.4fr_1fr]">
          {featured.map((t, i) => (
            <Reveal key={t.author} delay={i * 0.08} className="h-full">
              <figure
                className={`flex h-full flex-col gap-4.5 rounded-[14px] border border-[var(--lo-line)] p-7.5 shadow-[var(--lo-shadow-sm)] ${
                  i === 0
                    ? 'bg-[linear-gradient(160deg,var(--lo-surface-2),var(--lo-surface))]'
                    : 'bg-[var(--lo-surface)]'
                }`}
              >
                <span
                  aria-hidden="true"
                  className="lo-mono text-[34px] leading-[0.6] text-[var(--lo-accent)]"
                >
                  &rdquo;
                </span>
                <blockquote
                  className={`font-medium leading-[1.45] text-[var(--lo-fg)] ${
                    i === 0 ? 'text-[19px] md:text-[24px]' : 'text-[17px] md:text-[20px]'
                  }`}
                >
                  {t.text}
                </blockquote>
                <figcaption className="mt-auto flex items-center gap-3">
                  <span className="grid h-9.5 w-9.5 shrink-0 place-items-center rounded-full bg-[linear-gradient(135deg,var(--lo-accent),var(--lo-accent-deep))] lo-mono text-[14px] font-bold text-white">
                    {initials(t.author)}
                  </span>
                  <span>
                    <span className="block text-[14px] font-semibold text-[var(--lo-fg)]">
                      {t.author.split(',')[0]}
                    </span>
                    <span className="lo-mono block text-[12.5px] text-[var(--lo-fg-mut)]">
                      {t.author.split(',').slice(1).join(',').trim()} ·{' '}
                      {t.company}
                    </span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Proof;
