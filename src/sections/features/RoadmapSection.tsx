import SectionTitle from '@/components/SectionTitle';
import { roadmapSteps } from '@/data/roadmap';

const RoadmapSection = () => {
  return (
    <section id="roadmap" className="py-20 md:py-24 bg-primary/5">
      <div className="container flex flex-col items-center gap-12 md:gap-16">
        <SectionTitle
          subtitle="How it works"
          title="From login to live app in three steps"
          description="A golden path from idea to production. Log in, build in your favorite IDE, and deploy to your private cloud — with best practices and security enforced automatically at every step."
        />

        <div className="grid w-full max-w-5xl grid-cols-1 gap-4 md:grid-cols-3">
          {roadmapSteps.map((step, index) => (
            <div
              key={step.step}
              className="flex h-full flex-col items-start gap-4 rounded-xl border border-[var(--lo-line)] bg-[var(--lo-surface)] p-7 shadow-[var(--lo-shadow-sm)]"
            >
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-lg bg-[color-mix(in_srgb,var(--lo-accent)_10%,var(--lo-surface))] text-[var(--lo-accent)]">
                  <step.Icon size={22} />
                </span>
                <span className="text-[12px] font-semibold uppercase tracking-[0.1em] text-[var(--lo-fg-dim)]">
                  Step {index + 1}
                </span>
              </div>
              <h3 className="lo-display text-[19px] text-[var(--lo-fg)]">
                {step.title}
              </h3>
              <p className="text-[15px] leading-relaxed text-[var(--lo-fg-mut)]">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;
