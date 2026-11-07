import Reveal from '@/components/animations/Reveal';
import { featureGroups } from '@/data/features';
import SplitHead from '@/sections/landing/SplitHead';

/** Features grouped by the three GTM personas, each as a hairline ledger. */
const FeaturesSection = () => {
  return (
    <section id="features" className="py-16 md:py-24">
      <div className="container flex flex-col gap-20 md:gap-28">
        {featureGroups.map((group) => (
          <div key={group.id} id={group.id}>
            <Reveal>
              <SplitHead
                index={group.index}
                kicker={group.audience}
                title={
                  <>
                    {group.title} <span className="lo-em">{group.titleEm}</span>
                  </>
                }
                side={group.side}
              />
            </Reveal>
            <Reveal>
              <ul className="lo-ledger grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {group.features.map((f, i) => (
                  <li
                    key={f.title}
                    className="lo-cell flex h-full flex-col gap-5 px-6 py-6"
                  >
                    <span className="lo-label text-[var(--lo-fg-dim)]">
                      {group.index}.{String(i + 1).padStart(2, '0')}
                    </span>
                    <div>
                      <h3 className="lo-display text-[20px] text-[var(--lo-fg)]">
                        {f.title}
                      </h3>
                      <p className="mt-2.5 text-[14.5px] leading-relaxed text-[var(--lo-fg-mut)]">
                        {f.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
