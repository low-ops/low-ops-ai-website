import Reveal from '@/components/animations/Reveal';
import { FC } from 'react';
import SplitHead from './SplitHead';

type Cell = {
  code: string;
  title: string;
  body: string;
  span?: 2;
};

const CELLS: Cell[] = [
  {
    code: 'portal',
    title: 'Centralised self-service portal',
    body: 'Domain experts deploy apps and agents themselves: pick a package, choose an environment, click deploy. Development, staging and production side by side — no tickets, no waiting.',
    span: 2,
  },
  {
    code: 'oversight',
    title: 'Central IT oversight',
    body: 'Every app, owner, environment and deploy in one place — with full audit logs.',
  },
  {
    code: 'sso',
    title: 'SSO & access control',
    body: 'Plugs into your identity provider. Teams and roles enforced on every app and agent.',
  },
  {
    code: 'pipelines',
    title: 'Automated pipelines',
    body: 'CI/CD with linting and security scanning on every build. Reproducible packages traced back to their commit.',
  },
  {
    code: 'data',
    title: 'Databases & backups',
    body: 'PostgreSQL and more provisioned per app, backed up automatically, restorable in a click.',
  },
  {
    code: 'mcp',
    title: 'MCP server for AI agents',
    body: 'The portal is also an API and MCP server. AI coding assistants and agents can build, package and deploy directly against the platform — under exactly the same governance, guardrails and audit trail as humans.',
    span: 2,
  },
  {
    code: 'observe',
    title: 'Observability out of the box',
    body: 'Logging, metrics and dashboards on by default — no stack to assemble.',
  },
];

const Features: FC = () => {
  return (
    <section
      id="features"
      className="relative z-10 bg-[var(--lo-ink-2)] py-16 md:py-24"
    >
      <div className="container relative">
        <Reveal>
          <SplitHead
            index="05"
            kicker="What's in the platform"
            title={
              <>
                Everything a digital employee needs to live.{' '}
                <span className="lo-em">Nothing to wire up.</span>
              </>
            }
            side="The Professional tier bundles the centralised self-service portal, MCP server and automated pipelines with the Day 1 / Day 2 operations IT would otherwise have to build and babysit — self-hosted on infrastructure you control."
          />
        </Reveal>

        <Reveal>
          <div className="lo-ledger grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {CELLS.map((c) => (
              <div
                key={c.code}
                className={`lo-cell flex h-full flex-col justify-between gap-8 px-6 py-6 md:min-h-[220px] ${
                  c.span === 2 ? 'sm:col-span-2' : ''
                }`}
              >
                <span className="lo-label text-[var(--lo-fg-dim)]">
                  /{c.code}
                </span>
                <div>
                  <h3 className="lo-display text-[21px] text-[var(--lo-fg)]">
                    {c.title}
                  </h3>
                  <p className="mt-2.5 max-w-[52em] text-[14.5px] leading-relaxed text-[var(--lo-fg-mut)]">
                    {c.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Features;
