import Reveal from '@/components/animations/Reveal';
import { FC } from 'react';
import SplitHead from './SplitHead';

const SYMPTOMS = [
  {
    title: 'The app is ready. Production is not.',
    body: 'A useful internal app or AI prototype exists. Deployment, SSO, hosting or operational ownership is still a ticket.',
  },
  {
    title: 'IT cannot accept the risk',
    body: 'Without an owner, an audit trail and a place that already has backups and access control, saying yes is a project.',
  },
  {
    title: 'Shadow tools fill the gap',
    body: 'Experiments that do get out become apps nobody operates. The hours they were meant to save stay manual.',
  },
  {
    title: 'The first buyer is technical',
    body: 'The business lead is the champion. The IT director or technical CTO authorises the environment and accepts operating responsibility.',
  },
];

const Problem: FC = () => {
  return (
    <section id="problem" className="relative z-10 py-16 md:py-24">
      <div className="container relative">
        <Reveal>
          <SplitHead
            index="01"
            kicker="The buying problem"
            title={
              <>
                Useful apps get stuck between the person who builds them and the
                IT team that must{' '}
                <span className="lo-em">operate them.</span>
              </>
            }
            side="Low-Ops is for an IT director or technical CTO who already has a working internal app blocked by deployment, access or operational ownership — and a real deadline to get it into production."
          />
        </Reveal>

        <Reveal>
          <ol className="lo-ledger grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {SYMPTOMS.map((s, i) => (
              <li
                key={s.title}
                className="lo-cell flex h-full flex-col justify-between gap-10 px-6 py-6 md:min-h-[240px]"
              >
                <span className="lo-label text-[var(--lo-fg-dim)]">
                  0{i + 1}
                </span>
                <div>
                  <h3 className="lo-display text-[22px] text-[var(--lo-fg)]">
                    {s.title}
                  </h3>
                  <p className="mt-2.5 text-[14.5px] leading-relaxed text-[var(--lo-fg-mut)]">
                    {s.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
};

export default Problem;
