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
      className="relative z-10 border-t border-[var(--lo-line-soft)] bg-[var(--lo-surface-2)] py-16 md:py-24"
    >
      <div className="container">
        <Reveal>
          <div className="mb-10 md:mb-12">
            <Kicker>Proof from regulated teams</Kicker>
          </div>
        </Reveal>

        <Reveal>
          <figure className="max-w-[880px]">
            <blockquote className="m-0 text-[22px] leading-[1.45] font-medium tracking-[-0.01em] text-[var(--lo-fg)] md:text-[28px]">
              &ldquo;The magic of Low-Ops is that we — a regulated financial
              services business — can host our apps effortlessly in our own
              cloud and spin up unlimited instances for white-label clients in
              minutes, at the push of a button.&rdquo;
            </blockquote>
            <figcaption className="mt-6 flex items-center gap-3.5">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[var(--lo-accent)] text-[14px] font-semibold text-white">
                {initials(featured.author)}
              </span>
              <span>
                <span className="block text-[15px] font-semibold text-[var(--lo-fg)]">
                  {name(featured.author)}
                </span>
                <span className="block text-[13.5px] text-[var(--lo-fg-mut)]">
                  {title(featured.author)} · {featured.company}
                </span>
              </span>
            </figcaption>
          </figure>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2">
          {supporting.map((t, i) => (
            <Reveal key={t.author} delay={i * 0.08} className="h-full">
              <figure className="m-0 flex h-full flex-col gap-4 rounded-xl border border-[var(--lo-line)] bg-[var(--lo-surface)] p-7 shadow-[var(--lo-shadow-sm)]">
                <blockquote className="m-0 text-[16px] leading-relaxed text-[var(--lo-fg)]">
                  &ldquo;{t.text}&rdquo;
                </blockquote>
                <figcaption className="mt-auto flex items-center gap-3">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[var(--lo-accent)] text-[13px] font-semibold text-white">
                    {initials(t.author)}
                  </span>
                  <span>
                    <span className="block text-[14px] font-semibold text-[var(--lo-fg)]">
                      {name(t.author)}
                    </span>
                    <span className="block text-[13px] text-[var(--lo-fg-mut)]">
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
