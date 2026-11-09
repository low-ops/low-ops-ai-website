import CtaLink from '@/components/CtaLink';
import PageShell from '@/components/PageShell';
import SectionHero from '@/components/SectionHero';
import Reveal from '@/components/animations/Reveal';
import data from '@/data';
import { pageMetadata } from '@/lib/metadata';
import SplitHead from '@/sections/landing/SplitHead';
import type { Metadata } from 'next';

export const metadata: Metadata = pageMetadata({
  title: 'Install Community',
  description:
    'Self-hosted Low-Ops Community evaluation. Single-node needs 16 GB RAM, an 8-core CPU, 500 GB disk, DNS and install credentials. Not recommended for production. Hosted trial access is a separate, approval-based path.',
  path: '/community',
});

const PREREQS = [
  { term: 'RAM', body: '16 GB minimum' },
  { term: 'CPU', body: '8 cores' },
  { term: 'Disk', body: '500 GB' },
  { term: 'OS', body: 'Linux — Ubuntu 22.04 in the current single-node guide' },
  {
    term: 'Network',
    body: 'Internet access and a DNS record for the platform base domain',
  },
  {
    term: 'Access',
    body: 'SSH with sudo. Docker registry credentials — request temporary credentials from the Low-Ops team if you hit public pull limits',
  },
];

const CommunityPage = () => {
  return (
    <PageShell>
      <SectionHero
        kicker="Community evaluation"
        title="Install Community on your own host — after you can meet the prerequisites."
        description="Community is the self-hosted evaluation path. It is not a sign-up button, and it is not the Professional portal. The single-node guide is for testing. It is explicitly not recommended for production."
      >
        <div className="flex flex-wrap gap-3">
          <CtaLink href={data.cta.communityInstallGuide}>
            Open the single-node guide
          </CtaLink>
          <CtaLink href={data.cta.trialLink} variant="secondary">
            Request hosted trial access instead
          </CtaLink>
        </div>
      </SectionHero>

      <section className="py-16 md:py-24">
        <div className="container">
          <Reveal>
            <SplitHead
              index="01"
              kicker="Before you click install"
              title={
                <>
                  Surface the real requirements,{' '}
                  <span className="lo-em">not a fake quick start.</span>
                </>
              }
              side="These figures come from the public single-node documentation. We are not inventing another guide — only showing the cost of evaluation before you leave this site."
            />
          </Reveal>
          <Reveal>
            <dl className="lo-ledger grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {PREREQS.map((item) => (
                <div key={item.term} className="lo-cell px-6 py-6">
                  <dt className="lo-label text-[var(--lo-fg-dim)]">
                    {item.term}
                  </dt>
                  <dd className="mt-3 text-[15px] leading-relaxed text-[var(--lo-fg)]">
                    {item.body}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      <section className="bg-[var(--lo-ink-2)] py-16 md:py-24">
        <div className="container">
          <Reveal>
            <SplitHead
              index="02"
              kicker="Source, templates and the portal"
              title={
                <>
                  What is public, and what stays{' '}
                  <span className="lo-em">proprietary.</span>
                </>
              }
              side="Open-source templates and install charts are not the same thing as the Professional self-service portal. If a subscription ends, Community and the underlying open components remain usable; the paid portal features do not."
            />
          </Reveal>
          <Reveal>
            <div className="lo-ledger grid-cols-1 md:grid-cols-3">
              <div className="lo-cell px-6 py-7">
                <h2 className="lo-display text-[20px] text-[var(--lo-fg)]">
                  Install charts
                </h2>
                <p className="mt-3 text-[14.5px] leading-relaxed text-[var(--lo-fg-mut)]">
                  The documented install script lives in the published Helm
                  charts. That is the artefact the single-node guide actually
                  runs.
                </p>
                <div className="mt-5">
                  <CtaLink
                    href={data.cta.communityChartsLink}
                    variant="ghost"
                    className="text-[14px]"
                  >
                    github.com/cinaq/helm-charts
                  </CtaLink>
                </div>
              </div>
              <div className="lo-cell px-6 py-7">
                <h2 className="lo-display text-[20px] text-[var(--lo-fg)]">
                  App templates
                </h2>
                <p className="mt-3 text-[14.5px] leading-relaxed text-[var(--lo-fg-mut)]">
                  Supported starting points (including Mendix, Django, .NET and
                  Angular templates) are in the Low-Ops GitHub organisation.
                </p>
                <div className="mt-5">
                  <CtaLink
                    href={data.cta.communityLink}
                    variant="ghost"
                    className="text-[14px]"
                  >
                    github.com/low-ops
                  </CtaLink>
                </div>
              </div>
              <div className="lo-cell px-6 py-7">
                <h2 className="lo-display text-[20px] text-[var(--lo-fg)]">
                  Professional portal
                </h2>
                <p className="mt-3 text-[14.5px] leading-relaxed text-[var(--lo-fg-mut)]">
                  The governed self-service portal, MCP server automation and
                  licence key are proprietary. Reverse-engineering restrictions
                  in the licence apply to that software, not to public
                  Community artefacts.
                </p>
                <div className="mt-5">
                  <CtaLink
                    href={data.cta.licensingLink}
                    variant="ghost"
                    className="text-[14px]"
                  >
                    Commercial terms
                  </CtaLink>
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal>
            <div className="mt-8 flex flex-wrap gap-3">
              <CtaLink href={data.cta.communityInstallGuide}>
                Continue to the official guide
              </CtaLink>
              <CtaLink href={data.cta.loginLink} variant="secondary">
                Log in (existing users)
              </CtaLink>
            </div>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
};

export default CommunityPage;
