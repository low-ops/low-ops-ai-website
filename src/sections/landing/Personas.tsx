import Reveal from '@/components/animations/Reveal';
import { FC } from 'react';
import SplitHead from './SplitHead';

const PERSONAS = [
  {
    role: 'CIO / IT Director',
    headline: 'End Shadow AI with one centralised self-service portal.',
    body: 'Empower your business to build at the speed of thought without giving up architectural control, security or visibility. Every app and agent runs on your infrastructure, behind SSO, with an audit log.',
    points: [
      'Central oversight of every app, agent and owner',
      'Audit logs, policies and private-by-default networking',
      'Day 1 / Day 2 operations automated: SSO, CI/CD, backups',
    ],
  },
  {
    role: 'CEO / COO',
    headline: 'Turn domain experts into software creators.',
    body: 'Automate repetitive workflows and generate ROI by deploying permanent digital employees — without new headcount, infrastructure projects or per-seat licences.',
    points: [
      'Faster value validation: ideas live in days, not quarters',
      'Pay per app in production, never per employee experimenting',
      'An ROI you can calculate before you sign',
    ],
  },
  {
    role: 'Domain expert',
    headline: 'Build your solution. Click deploy. Done.',
    body: 'No waiting for IT. Build with the AI tools you already use, hit deploy, and Low-Ops.AI handles CI/CD, the database and hosting in the background — live on the corporate network the same day.',
    points: [
      'Self-service deployment from one portal',
      'Database, SSO, backups and hosting included',
      'Works with AI coding assistants via the MCP server',
    ],
  },
];

/** Dark band: three personas as columns on a graphite field. */
const Personas: FC = () => {
  return (
    <section
      id="personas"
      data-tone="dark"
      className="relative z-10 bg-[var(--lo-black)] py-16 text-[var(--lo-on-black)] md:py-24"
    >
      <div className="container relative">
        <Reveal>
          <SplitHead
            tone="dark"
            index="02"
            kicker="Built for every side of the table"
            title={
              <>
                One platform.{' '}
                <span className="lo-em">Three winning outcomes.</span>
              </>
            }
            side="The friction between business agility and IT governance is highest in mid-market organisations. Low-Ops.AI is designed so the buyer, the sponsor and the builder each get exactly what they came for."
          />
        </Reveal>

        <Reveal>
          <div className="lo-ledger-dark grid-cols-1 lg:grid-cols-3">
            {PERSONAS.map((p, i) => (
              <article
                key={p.role}
                className="lo-cell-dark flex h-full flex-col px-6 py-7 md:px-8"
              >
                <div className="flex items-center justify-between">
                  <span className="lo-label text-[var(--lo-accent)]">
                    For the {p.role}
                  </span>
                  <span className="lo-label text-[var(--lo-on-black-dim)]">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="lo-display mt-6 text-[26px] text-[var(--lo-on-black)] md:text-[28px]">
                  {p.headline}
                </h3>
                <p className="mt-4 text-[15px] leading-relaxed text-[var(--lo-on-black-mut)]">
                  {p.body}
                </p>
                <ul className="mt-7 flex flex-col divide-y divide-[var(--lo-black-line)] border-t border-[var(--lo-black-line)]">
                  {p.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-3 py-3 text-[14.5px] text-[var(--lo-on-black)]"
                    >
                      <span
                        className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--lo-accent)]"
                        aria-hidden="true"
                      />
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Personas;
