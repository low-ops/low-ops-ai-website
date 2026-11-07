import Reveal from '@/components/animations/Reveal';
import SplitHead from '@/sections/landing/SplitHead';
import { cn } from '@/lib/utils';

const COLUMNS = [
  { id: 'custom', label: 'Custom build', sub: 'Mix & match open-source tools' },
  {
    id: 'hosted',
    label: 'Hosted control plane',
    sub: 'Qovery, Porter, Flightcontrol',
  },
  {
    id: 'saas',
    label: 'SaaS / cloud PaaS',
    sub: 'Heroku, Render, Vercel, Railway',
  },
  { id: 'offtheshelf', label: 'Low-Ops.AI', sub: 'Off-the-shelf, self-hosted' },
] as const;

type ColumnId = (typeof COLUMNS)[number]['id'];

const COMPARISON_ROWS: Array<{ criteria: string } & Record<ColumnId, string>> =
  [
    {
      criteria: 'DevOps / CI/CD',
      custom: 'Self-managed (e.g. GitLab, Gitea)',
      hosted: 'Bring your own CI/CD',
      saas: 'Bring your own CI/CD',
      offtheshelf: 'Included with automated CI/CD',
    },
    {
      criteria: 'Internal developer portal',
      custom: 'Optional (e.g. Backstage)',
      hosted: 'Included',
      saas: 'Included',
      offtheshelf:
        'Included — self-service for domain experts, oversight for IT',
    },
    {
      criteria: 'AI agent access (MCP)',
      custom: 'Build it yourself',
      hosted: 'Rare',
      saas: 'Rare',
      offtheshelf: 'Built-in MCP server with the same governance as humans',
    },
    {
      criteria: 'Monitoring',
      custom: 'Any tool (self-integrated)',
      hosted: 'Sometimes included',
      saas: 'Bring your own (e.g. Datadog)',
      offtheshelf: 'Built-in (OpenTelemetry, Prometheus, Grafana)',
    },
    {
      criteria: 'Database',
      custom: 'Any',
      hosted: 'Your choice',
      saas: 'Sometimes included',
      offtheshelf: 'PostgreSQL included',
    },
    {
      criteria: 'Object storage',
      custom: 'Any',
      hosted: 'Your choice',
      saas: 'Sometimes included',
      offtheshelf: 'S3-compatible storage included',
    },
    {
      criteria: 'Disaster recovery',
      custom: 'High effort (fully your responsibility)',
      hosted: 'High effort (your responsibility)',
      saas: 'Sometimes included',
      offtheshelf: 'Included (automated backups & restore)',
    },
    {
      criteria: 'Control plane',
      custom: 'Self-managed',
      hosted: 'SaaS',
      saas: 'SaaS',
      offtheshelf: 'Self-hosted',
    },
    {
      criteria: 'Private infrastructure',
      custom: 'Yes',
      hosted: 'Yes',
      saas: 'No',
      offtheshelf: 'Yes (including control plane)',
    },
    {
      criteria: 'Licensing model',
      custom: 'Free software, paid people',
      hosted: 'Per seat / per environment',
      saas: 'Per seat / per resource',
      offtheshelf: 'Per app in production — unlimited creators',
    },
    {
      criteria: 'Total cost of ownership',
      custom: 'Low licence cost, high labour & maintenance',
      hosted: 'High licence cost, high DevOps responsibility',
      saas: 'Very high recurring costs',
      offtheshelf: 'Medium cost, minimal maintenance',
    },
  ];

const ComparisonSection = () => {
  return (
    <section className="w-full py-16 md:py-24">
      <div className="container">
        <Reveal>
          <SplitHead
            index="01"
            kicker="Comparison"
            title={
              <>
                Four ways to run internal apps.{' '}
                <span className="lo-em">One keeps IT in control.</span>
              </>
            }
            side="Building your own platform, renting a hosted control plane, moving to a public PaaS — or installing Low-Ops.AI on infrastructure you already own."
          />
        </Reveal>

        {/* Desktop matrix */}
        <Reveal>
          <div className="hidden overflow-hidden rounded-[8px] border border-[var(--lo-line-strong)] md:block">
            <div className="grid grid-cols-[1fr_1fr_1fr_1fr_1.2fr]">
              <div className="bg-[var(--lo-surface-2)] px-5 py-5">
                <span className="lo-label text-[var(--lo-fg-dim)]">
                  Criteria
                </span>
              </div>
              {COLUMNS.map((col) => {
                const us = col.id === 'offtheshelf';
                return (
                  <div
                    key={col.id}
                    data-tone={us ? 'dark' : undefined}
                    className={cn(
                      'border-l px-5 py-5',
                      us
                        ? 'border-[var(--lo-black-line)] bg-[var(--lo-black)] text-[var(--lo-on-black)]'
                        : 'border-[var(--lo-line)] bg-[var(--lo-surface-2)]',
                    )}
                  >
                    <span
                      className={cn(
                        'block text-[15px] font-semibold',
                        us
                          ? 'text-[var(--lo-on-black)]'
                          : 'text-[var(--lo-fg)]',
                      )}
                    >
                      {col.label}
                    </span>
                    <span
                      className={cn(
                        'mt-0.5 block text-[12.5px]',
                        us
                          ? 'text-[var(--lo-on-black-dim)]'
                          : 'text-[var(--lo-fg-dim)]',
                      )}
                    >
                      {col.sub}
                    </span>
                  </div>
                );
              })}

              {COMPARISON_ROWS.map((row) => (
                <div key={row.criteria} className="contents">
                  <div className="border-t border-[var(--lo-line)] bg-[var(--lo-surface)] px-5 py-3.5 text-[14px] font-medium text-[var(--lo-fg)]">
                    {row.criteria}
                  </div>
                  {COLUMNS.map((col) => {
                    const us = col.id === 'offtheshelf';
                    return (
                      <div
                        key={col.id}
                        className={cn(
                          'border-t border-l px-5 py-3.5 text-[13.5px] leading-snug',
                          us
                            ? 'border-[var(--lo-black-line)] bg-[var(--lo-black)] text-[var(--lo-on-black)]'
                            : 'border-[var(--lo-line)] bg-[var(--lo-surface)] text-[var(--lo-fg-mut)]',
                        )}
                      >
                        {row[col.id]}
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Mobile */}
        <div className="flex flex-col gap-3 md:hidden">
          {COMPARISON_ROWS.map((row) => (
            <Reveal key={row.criteria}>
              <div className="rounded-[8px] border border-[var(--lo-line-strong)] bg-[var(--lo-surface)]">
                <div className="border-b border-[var(--lo-line)] px-5 py-3.5 text-[15px] font-semibold text-[var(--lo-fg)]">
                  {row.criteria}
                </div>
                <dl className="divide-y divide-[var(--lo-line)]">
                  {COLUMNS.map((col) => {
                    const us = col.id === 'offtheshelf';
                    return (
                      <div
                        key={col.id}
                        className={cn(
                          'px-5 py-3',
                          us &&
                            'bg-[var(--lo-black)] text-[var(--lo-on-black)]',
                        )}
                      >
                        <dt
                          className={cn(
                            'lo-label',
                            us
                              ? 'text-[var(--lo-accent)]'
                              : 'text-[var(--lo-fg-dim)]',
                          )}
                        >
                          {col.label}
                        </dt>
                        <dd
                          className={cn(
                            'mt-1 text-[14px]',
                            us
                              ? 'text-[var(--lo-on-black)]'
                              : 'text-[var(--lo-fg-mut)]',
                          )}
                        >
                          {row[col.id]}
                        </dd>
                      </div>
                    );
                  })}
                </dl>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
