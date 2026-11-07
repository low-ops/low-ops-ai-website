import Reveal from '@/components/animations/Reveal';
import { testimonials } from '@/data/testimonials';
import { FC } from 'react';
import Kicker from './Kicker';

const name = (author: string) => author.split(',')[0];
const title = (author: string) => author.split(',').slice(1).join(',').trim();

// Featured pull-quote (Emile), then two supporting quotes.
const featured = testimonials[0];
const supporting = [testimonials[3], testimonials[4]];

const Proof: FC = () => {
  return (
    <section
      id="proof"
      className="relative z-10 border-t border-[var(--lo-line-strong)] py-16 md:py-24"
    >
      <div className="container">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <Reveal>
            <figure className="m-0">
              <Kicker index="10">Proof from regulated teams</Kicker>
              <blockquote className="lo-display m-0 mt-8 text-[26px] leading-[1.2] font-medium text-[var(--lo-fg)] md:text-[36px]">
                &ldquo;The magic of Low-Ops is that we — a regulated financial
                services business — can host our apps effortlessly in our own
                cloud and spin up unlimited instances for white-label clients in
                minutes, at the push of a button.&rdquo;
              </blockquote>
              <figcaption className="mt-7 border-t border-[var(--lo-line-strong)] pt-4">
                <span className="block text-[15px] font-semibold text-[var(--lo-fg)]">
                  {name(featured.author)}
                </span>
                <span className="block text-[13.5px] text-[var(--lo-fg-mut)]">
                  {title(featured.author)} · {featured.company}
                </span>
              </figcaption>
            </figure>
          </Reveal>

          <div className="flex flex-col divide-y divide-[var(--lo-line)] border-t border-[var(--lo-line)] lg:border-t-0 lg:pt-12">
            {supporting.map((t, i) => (
              <Reveal key={t.author} delay={i * 0.08}>
                <figure className="m-0 flex flex-col gap-4 py-7 first:lg:pt-0">
                  <blockquote className="m-0 text-[16px] leading-relaxed text-[var(--lo-fg)] md:text-[17px]">
                    &ldquo;{t.text}&rdquo;
                  </blockquote>
                  <figcaption className="flex items-center gap-3">
                    <span
                      className="h-1.5 w-1.5 rounded-full bg-[var(--lo-accent)]"
                      aria-hidden="true"
                    />
                    <span className="text-[14px] font-semibold text-[var(--lo-fg)]">
                      {name(t.author)}
                    </span>
                    <span className="text-[13px] text-[var(--lo-fg-mut)]">
                      {title(t.author) ? `${title(t.author)} · ` : ''}
                      {t.company}
                    </span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Proof;
