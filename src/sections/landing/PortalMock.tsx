import { FC } from 'react';

export type PortalRow = {
  name: string;
  owner: string;
  kind: 'Agent' | 'App';
  status: 'running' | 'deploying' | 'review';
  meta: string;
};

type Row = PortalRow;

const DEFAULT_ROWS: Row[] = [
  {
    name: 'Invoice matching agent',
    owner: 'Finance',
    kind: 'Agent',
    status: 'running',
    meta: 'prod · 14 days',
  },
  {
    name: 'Onboarding checklist',
    owner: 'HR',
    kind: 'App',
    status: 'running',
    meta: 'prod · 31 days',
  },
  {
    name: 'Contract clause reviewer',
    owner: 'Legal',
    kind: 'Agent',
    status: 'deploying',
    meta: '78%',
  },
  {
    name: 'Field report assistant',
    owner: 'Operations',
    kind: 'App',
    status: 'review',
    meta: 'staging',
  },
];

const GUARDRAILS = ['SSO', 'Audit log', 'Backups', 'CI/CD', 'Private network'];

const dot = (status: Row['status']) => {
  if (status === 'running') return 'bg-[var(--lo-green)]';
  if (status === 'deploying') return 'bg-[var(--lo-accent)] lo-blink';
  return 'bg-[var(--lo-on-black-dim)]';
};

const label = (status: Row['status']) => {
  if (status === 'running') return 'running';
  if (status === 'deploying') return 'deploying';
  return 'awaiting IT review';
};

/**
 * Illustrative self-service portal, rendered as a dark terminal-like panel.
 * Owners, timings and percentages are placeholder UI — not real telemetry.
 */
type TProps = {
  rows?: Row[];
};

const PortalMock: FC<TProps> = ({ rows }) => {
  const ROWS = rows ?? DEFAULT_ROWS;
  return (
    <div
      data-tone="dark"
      className="lo-mono relative z-2 overflow-hidden rounded-[8px] border border-[var(--lo-black-line)] bg-[var(--lo-black)] text-[13px] text-[var(--lo-on-black)] shadow-[var(--lo-shadow-lg)]"
      role="img"
      aria-label="Self-service portal listing AI agents and web apps built by Finance, HR, Legal and Operations — all private, governed by IT with SSO, audit logs, backups and CI/CD."
    >
      <div className="flex items-center gap-3 border-b border-[var(--lo-black-line)] px-4 py-3 text-[var(--lo-on-black-dim)]">
        <svg viewBox="0 0 10 10" className="h-3 w-3" aria-hidden="true">
          <circle cx="5" cy="1.6" r="1.6" fill="#4a90e2" />
          <circle cx="1.6" cy="5" r="1.6" fill="#4a90e2" />
          <circle cx="8.4" cy="5" r="1.6" fill="#a3a6ab" />
          <circle cx="5" cy="8.4" r="1.6" fill="#a3a6ab" />
        </svg>
        <span className="tracking-[0.02em]">
          <b className="font-medium text-[var(--lo-on-black-mut)]">
            portal.low-ops
          </b>{' '}
          / apps
        </span>
        <span className="ml-auto inline-flex items-center gap-1.5 rounded-[4px] border border-[var(--lo-black-line)] px-2 py-0.5 text-[10.5px] text-[var(--lo-on-black-mut)]">
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--lo-green)]" />
          governed by IT
        </span>
      </div>

      <div className="grid grid-cols-[1fr_auto] items-center gap-3 border-b border-[var(--lo-black-line)] px-4 py-2.5 text-[10.5px] uppercase tracking-[0.12em] text-[var(--lo-on-black-dim)]">
        <span>Digital employees · {ROWS.length}</span>
        <span className="hidden sm:inline">Status</span>
      </div>

      <div className="px-4 pt-1 pb-2">
        {ROWS.map((row) => (
          <div
            key={row.name}
            className="grid grid-cols-[1fr_auto] items-center gap-3 border-b border-[var(--lo-black-line)] py-[11px] last:border-b-0"
          >
            <span className="min-w-0">
              <span className="flex items-center gap-2">
                <span className="truncate text-[var(--lo-on-black)]">
                  {row.name}
                </span>
                <span className="shrink-0 rounded-[3px] border border-[var(--lo-black-line)] px-1.5 py-px text-[10px] text-[var(--lo-on-black-mut)]">
                  {row.kind}
                </span>
              </span>
              <span className="mt-0.5 block text-[11.5px] text-[var(--lo-on-black-dim)]">
                built by {row.owner} · private · corp network only
              </span>
            </span>
            <span className="flex flex-col items-end gap-0.5 text-right">
              <span className="inline-flex items-center gap-1.5 whitespace-nowrap text-[11.5px] text-[var(--lo-on-black-mut)]">
                <span
                  className={`h-1.5 w-1.5 rounded-full ${dot(row.status)}`}
                />
                {label(row.status)}
              </span>
              <span className="text-[11px] text-[var(--lo-on-black-dim)]">
                {row.meta}
              </span>
            </span>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3 border-t border-[var(--lo-black-line)] bg-[var(--lo-black-2)] px-4 py-3 text-[11.5px] text-[var(--lo-on-black-mut)]">
        <span className="flex flex-wrap items-center gap-x-3 gap-y-1">
          {GUARDRAILS.map((g) => (
            <span key={g} className="inline-flex items-center gap-1.5">
              <span className="text-[var(--lo-green)]">✓</span> {g}
            </span>
          ))}
        </span>
        <span className="text-[var(--lo-accent)]">0 shadow AI tools</span>
      </div>
    </div>
  );
};

export default PortalMock;
