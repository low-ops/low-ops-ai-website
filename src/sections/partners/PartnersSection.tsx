import Reveal from '@/components/animations/Reveal';
import CtaLink from '@/components/CtaLink';
import data from '@/data';
import { partnerBenefits, partnersData } from '@/data/partners';
import SplitHead from '@/sections/landing/SplitHead';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';

const STEPS = [
  {
    n: '01',
    title: 'Run the Shadow AI audit with your client',
    body: 'Use our audit playbook to inventory the ungoverned AI tools and internal apps already in use. The result is a business case your client\u2019s CIO can take to the board.',
  },
  {
    n: '02',
    title: 'Deploy a governed environment',
    body: 'Install Low-Ops.AI Professional in the client\u2019s private cloud or on-premises in under a day. SSO, pipelines, backups and the oversight portal come up together.',
  },
  {
    n: '03',
    title: 'Ship digital employees, bill monthly',
    body: 'Build the first three apps with the client\u2019s domain experts, hand them the self-service portal, and operate the environment as a managed service.',
  },
];

const PartnersSection = () => {
  return (
    <>
      {/* Programme */}
      <section id="programme" className="py-16 md:py-24">
        <div className="container">
          <Reveal>
            <SplitHead
              index="01"
              kicker="Partner programme"
              title={
                <>
                  Sell the platform once.{' '}
                  <span className="lo-em">Bill the value every month.</span>
                </>
              }
              side="MSPs, IT consultancies and AI studios serving mid-market clients are the natural channel for Low-Ops.AI. You know the client; we provide the governed platform their IT department will actually approve."
            />
          </Reveal>
          <Reveal>
            <div className="lo-ledger grid-cols-1 md:grid-cols-2">
              {partnerBenefits.map((b, i) => (
                <div
                  key={b.title}
                  className="lo-cell flex h-full flex-col gap-6 px-6 py-6 md:px-8 md:py-8"
                >
                  <span className="lo-mono text-[13px] text-[var(--lo-accent)]">
                    0{i + 1}
                  </span>
                  <div>
                    <h3 className="lo-display text-[22px] text-[var(--lo-fg)]">
                      {b.title}
                    </h3>
                    <p className="mt-2.5 max-w-[40em] text-[14.5px] leading-relaxed text-[var(--lo-fg-mut)]">
                      {b.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Motion */}
      <section
        id="how-partners-work"
        data-tone="dark"
        className="bg-[var(--lo-black)] py-16 text-[var(--lo-on-black)] md:py-24"
      >
        <div className="container">
          <Reveal>
            <SplitHead
              tone="dark"
              index="02"
              kicker="The partner motion"
              title={
                <>
                  From first conversation to{' '}
                  <span className="lo-em">recurring revenue.</span>
                </>
              }
              side="The same three plays we run ourselves, packaged so your team can run them with every client."
            />
          </Reveal>
          <Reveal>
            <ol className="lo-ledger-dark grid-cols-1 lg:grid-cols-3">
              {STEPS.map((s) => (
                <li
                  key={s.n}
                  className="lo-cell-dark px-6 py-7 md:px-8 md:pt-8 md:pb-9"
                >
                  <span className="lo-display text-[56px] leading-none text-[var(--lo-black-line)] md:text-[72px]">
                    {s.n}
                  </span>
                  <h3 className="lo-display mt-7 text-[22px] text-[var(--lo-on-black)]">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-[var(--lo-on-black-mut)]">
                    {s.body}
                  </p>
                </li>
              ))}
            </ol>
          </Reveal>
          <Reveal>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <CtaLink href={data.cta.partnerLink} variant="inverse">
                Apply to the partner programme
              </CtaLink>
              <CtaLink
                href="/solutions/msp"
                variant="secondary"
                className="border-[var(--lo-black-line)] text-[var(--lo-on-black)] hover:border-[var(--lo-on-black)]"
              >
                The MSP solution page
              </CtaLink>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Current partners */}
      <section id="partners" className="py-16 md:py-24">
        <div className="container">
          <Reveal>
            <SplitHead
              index="03"
              kicker="Our partners"
              title={
                <>
                  The firms already delivering{' '}
                  <span className="lo-em">Low-Ops.AI to clients.</span>
                </>
              }
              side="Implementation partners build and operate governed environments for their clients. Technology partners integrate their products with the platform."
            />
          </Reveal>
          <Reveal>
            <ul className="lo-ledger grid-cols-1 md:grid-cols-3">
              {partnersData.map((partner) => (
                <li key={partner.title} className="lo-cell">
                  <a
                    href={partner.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex h-full flex-col px-6 py-6 transition-colors hover:bg-[var(--lo-surface-2)] md:px-7"
                  >
                    <div className="flex items-center justify-between">
                      <span className="lo-label text-[var(--lo-fg-dim)]">
                        {partner.type}
                      </span>
                      <ArrowUpRight
                        size={16}
                        className="text-[var(--lo-fg-dim)] transition-colors group-hover:text-[var(--lo-accent)]"
                      />
                    </div>
                    <div className="mt-8 flex h-[44px] items-center">
                      <Image
                        src={partner.imagePath}
                        alt={partner.title}
                        className="h-auto max-h-[44px] w-auto max-w-[180px] object-contain object-left"
                      />
                    </div>
                    <h3 className="lo-display mt-6 text-[20px] text-[var(--lo-fg)]">
                      {partner.title}
                    </h3>
                    <span className="lo-label mt-1 text-[var(--lo-fg-dim)]">
                      {partner.region}
                    </span>
                    <p className="mt-3 text-[14.5px] leading-relaxed text-[var(--lo-fg-mut)]">
                      {partner.description}
                    </p>
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>
    </>
  );
};

export default PartnersSection;
