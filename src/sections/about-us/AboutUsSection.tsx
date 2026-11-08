import Reveal from '@/components/animations/Reveal';
import { milestones, principles, teamMembers } from '@/data/about-us';
import Kicker from '@/sections/landing/Kicker';
import SplitHead from '@/sections/landing/SplitHead';
import TeamMemberCard from './TeamMemberCard';

const AboutUsSection = () => {
  return (
    <>
      {/* Mission */}
      <section id="mission" className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 gap-10 border-t border-[var(--lo-line-strong)] pt-7 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <Reveal>
              <Kicker index="01">Our mission</Kicker>
            </Reveal>
            <Reveal delay={0.05}>
              <p className="lo-display text-[28px] leading-[1.15] text-[var(--lo-fg)] md:text-[40px]">
                Let every domain expert build AI.{' '}
                <span className="lo-em">
                  Keep every IT department in control.
                </span>
              </p>
              <div className="mt-8 grid grid-cols-1 gap-6 text-[16px] leading-relaxed text-[var(--lo-fg-mut)] md:grid-cols-2 md:text-[17px]">
                <p>
                  For twenty years we built custom app platforms for banks,
                  insurers and public institutions. Three-year projects, teams
                  of six, every time — and every time the result was the same: a
                  paved road that let the business ship safely.
                </p>
                <p>
                  Generative AI changed who can build. Domain experts in
                  finance, HR, legal and the clinic now turn ideas into working
                  tools in an afternoon. What they lack is somewhere safe to run
                  them. Low-Ops.AI is that paved road, as a product.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section
        id="principles"
        data-tone="dark"
        className="bg-[var(--lo-black)] py-16 text-[var(--lo-on-black)] md:py-24"
      >
        <div className="container">
          <Reveal>
            <SplitHead
              tone="dark"
              index="02"
              kicker="What we believe"
              title={
                <>
                  Five principles{' '}
                  <span className="lo-em">we do not negotiate on.</span>
                </>
              }
              side="They are the same four pillars we sell — privacy, governed speed, value-based pricing, no lock-in — written as the rules we hold ourselves to."
            />
          </Reveal>
          <ol className="border-t border-[var(--lo-black-line)]">
            {principles.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.04}>
                <li className="grid grid-cols-[40px_1fr] gap-4 border-b border-[var(--lo-black-line)] py-6 md:grid-cols-[72px_1fr_1fr] md:gap-8 md:py-7">
                  <span className="lo-mono pt-1 text-[13px] text-[var(--lo-accent)]">
                    0{i + 1}
                  </span>
                  <h3 className="lo-display text-[22px] text-[var(--lo-on-black)] md:text-[24px]">
                    {p.title}
                  </h3>
                  <p className="col-span-full pl-[56px] text-[15px] leading-relaxed text-[var(--lo-on-black-mut)] md:col-span-1 md:pl-0">
                    {p.body}
                  </p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Timeline */}
      <section id="story" className="bg-[var(--lo-ink-2)] py-16 md:py-24">
        <div className="container">
          <Reveal>
            <SplitHead
              index="03"
              kicker="How we got here"
              title={
                <>
                  Two decades of platforms,{' '}
                  <span className="lo-em">one product.</span>
                </>
              }
              side="Low-Ops.AI is a product of CINAQ, Rotterdam. It is our collective platform-engineering knowledge, packaged so it installs in a day instead of three years."
            />
          </Reveal>
          <Reveal>
            <ol className="lo-ledger grid-cols-1 md:grid-cols-5">
              {milestones.map((m) => (
                <li
                  key={m.title}
                  className="lo-cell flex h-full flex-col gap-6 px-6 py-6"
                >
                  <span className="lo-mono text-[13px] text-[var(--lo-accent)]">
                    {m.year}
                  </span>
                  <div>
                    <h3 className="lo-display text-[19px] text-[var(--lo-fg)]">
                      {m.title}
                    </h3>
                    <p className="mt-2.5 text-[14px] leading-relaxed text-[var(--lo-fg-mut)]">
                      {m.body}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="py-16 md:py-24">
        <div className="container">
          <Reveal>
            <SplitHead
              index="04"
              kicker="The team"
              title={
                <>
                  The people who have{' '}
                  <span className="lo-em">done this before.</span>
                </>
              }
              side="Platform engineering in Rotterdam, and a commercial lead for every deal, partner and licence — with the same impatience for ideas left in a queue."
            />
          </Reveal>
          <Reveal>
            <ul className="lo-ledger grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
              {teamMembers.map((member, i) => (
                <TeamMemberCard key={member.id} member={member} index={i} />
              ))}
            </ul>
          </Reveal>

          <Reveal>
            <figure className="m-0 mt-16 max-w-[900px] md:mt-20">
              <blockquote className="lo-display m-0 text-[24px] leading-[1.25] font-medium text-[var(--lo-fg)] md:text-[32px]">
                &ldquo;Everybody should be able to participate in creating and
                delivering solutions within their organisation. No more silos.
                No more waiting for approvals. No more excuses — and no
                compromises on security.&rdquo;
              </blockquote>
              <figcaption className="mt-6 border-t border-[var(--lo-line-strong)] pt-4">
                <span className="block text-[15px] font-semibold text-[var(--lo-fg)]">
                  Steven (Xiwen) Cheng
                </span>
                <span className="block text-[13.5px] text-[var(--lo-fg-mut)]">
                  CEO &amp; Founder · Low-Ops.AI
                </span>
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>
    </>
  );
};

export default AboutUsSection;
