import Reveal from '@/components/animations/Reveal';
import CtaLink from '@/components/CtaLink';
import data from '@/data';
import { testimonials } from '@/data/testimonials';
import { FC } from 'react';
import Kicker from './Kicker';

const name = (author: string) => author.split(',')[0];
const title = (author: string) => author.split(',').slice(1).join(',').trim();

const featured = testimonials[0];
const cto = testimonials[3];

/** Named customer proof placed directly under the hero. */
const Evidence: FC = () => {
  return (
    <section
      id="proof"
      className="relative z-10 border-b border-[var(--lo-line)] bg-[var(--lo-surface)] py-12 md:py-16"
    >
      <div className="container">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_0.85fr] lg:items-end lg:gap-16">
          <Reveal>
            <figure className="m-0">
              <Kicker>Customer proof</Kicker>
              <blockquote className="lo-display m-0 mt-6 text-[22px] leading-[1.25] font-medium text-[var(--lo-fg)] md:text-[28px]">
                &ldquo;{featured.text}&rdquo;
              </blockquote>
              <figcaption className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2">
                <span className="inline-flex items-center rounded-[6px] border border-[var(--lo-line-strong)] bg-[var(--lo-ink)] px-3 py-1.5 text-[13px] font-semibold tracking-wide text-[var(--lo-fg)]">
                  {featured.company}
                </span>
                <span className="text-[14px] text-[var(--lo-fg-mut)]">
                  {name(featured.author)}, {title(featured.author)}
                </span>
              </figcaption>
            </figure>
          </Reveal>

          <Reveal delay={0.08}>
            <figure className="m-0 border-t border-[var(--lo-line)] pt-6 lg:border-t-0 lg:pt-0">
              <blockquote className="m-0 text-[16px] leading-relaxed text-[var(--lo-fg)]">
                &ldquo;{cto.text}&rdquo;
              </blockquote>
              <figcaption className="mt-4 text-[13.5px] text-[var(--lo-fg-mut)]">
                {name(cto.author)}, {title(cto.author)} · {cto.company}. The
                &ldquo;100% better&rdquo; wording is his attributed opinion, not
                a measured efficiency result.
              </figcaption>
              <div className="mt-5">
                <CtaLink
                  href={data.cta.caseStudyLink}
                  variant="ghost"
                  className="text-[14px]"
                >
                  Read the Efficient Group case study
                </CtaLink>
              </div>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Evidence;
