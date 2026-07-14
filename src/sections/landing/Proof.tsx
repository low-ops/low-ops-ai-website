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

const name = (author: string) => author.split(',')[0];
const title = (author: string) =>
  author.split(',').slice(1).join(',').trim();

// Featured pull-quote (Emile), then two supporting cards.
const featured = testimonials[0];
const supporting = [testimonials[3], testimonials[4]];

const Proof: FC = () => {
  return (
    <section
      id="proof"
      className="relative z-10 border-t border-[var(--lo-line-soft)] py-16 md:py-28"
    >
      <div className="container">
        <Reveal>
          <div className="mb-12 md:mb-14">
            <Kicker>Proof from regulated teams</Kicker>
          </div>
        </Reveal>

        {/* editorial pull-quote */}
        <Reveal>
          <figure className="relative max-w-[900px]">
            <span
              className="lo-serif pointer-events-none absolute -top-16 -left-4 text-[200px] leading-none text-[color-mix(in_srgb,var(--lo-accent)_16%,transparent)] select-none"
              aria-hidden="true"
            >
              &ldquo;
            </span>
            <blockquote className="lo-serif relative m-0 text-[24px] leading-[1.32] text-[var(--lo-fg)] md:text-[36px]">
              The magic of Low-Ops is that we — a{' '}
              <span className="text-[var(--lo-accent)]">
                regulated financial services business
              </span>{' '}
              — can host our apps effortlessly in our own cloud and spin up
              unlimited instances for white-label clients in minutes, at the
              push of a button.
            </blockquote>
            <figcaption className="mt-7 flex items-center gap-3.5">
              <span className="lo-mono grid h-10.5 w-10.5 shrink-0 place-items-center rounded-full bg-[linear-gradient(135deg,var(--lo-accent),var(--lo-accent-deep))] text-[14px] font-bold text-white">
                {initials(featured.author)}
              </span>
              <span>
                <span className="block text-[15px] font-bold text-[var(--lo-fg)]">
                  {name(featured.author)}
                </span>
                <span className="lo-mono block text-[12.5px] text-[var(--lo-fg-mut)]">
                  {title(featured.author)} · {featured.company}
                </span>
              </span>
            </figcaption>
          </figure>
        </Reveal>

        <div className="mt-11 grid grid-cols-1 gap-4 md:grid-cols-2">
          {supporting.map((t, i) => (
            <Reveal key={t.author} delay={i * 0.08} className="h-full">
              <figure className="m-0 flex h-full flex-col gap-4 rounded-[14px] border border-[var(--lo-line)] bg-[var(--lo-surface)] p-7 shadow-[var(--lo-shadow-sm)]">
                <blockquote className="m-0 text-[16.5px] leading-[1.5] font-medium text-[var(--lo-fg)]">
                  &ldquo;{t.text}&rdquo;
                </blockquote>
                <figcaption className="mt-auto flex items-center gap-3">
                  <span className="lo-mono grid h-9.5 w-9.5 shrink-0 place-items-center rounded-full bg-[linear-gradient(135deg,var(--lo-accent),var(--lo-accent-deep))] text-[13px] font-bold text-white">
                    {initials(t.author)}
                  </span>
                  <span>
                    <span className="block text-[14px] font-bold text-[var(--lo-fg)]">
                      {name(t.author)}
                    </span>
                    <span className="lo-mono block text-[12px] text-[var(--lo-fg-mut)]">
                      {title(t.author) ? `${title(t.author)} · ` : ''}
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
