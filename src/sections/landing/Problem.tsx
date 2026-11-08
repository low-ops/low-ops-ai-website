import Reveal from '@/components/animations/Reveal';
import { FC } from 'react';
import SplitHead from './SplitHead';

const SYMPTOMS = [
  {
    title: 'Ideas left in the queue',
    body: 'A database, SSO or a hostname waits on the same small team. The business case was ready. The value has not started.',
  },
  {
    title: 'Hours that stay manual',
    body: 'Whatever the app would have saved is still done by hand, every month the idea sits on a ticket.',
  },
  {
    title: 'The unmaintainable web',
    body: 'Every experiment that does get out becomes an internal app nobody owns, hosts, secures or backs up properly.',
  },
  {
    title: 'The per-seat creator tax',
    body: 'Low-code and AI tools charge per creator — punishing exactly the experimentation you want to encourage.',
  },
];

const Problem: FC = () => {
  return (
    <section id="problem" className="relative z-10 py-16 md:py-24">
      <div className="container relative">
        <Reveal>
          <SplitHead
            index="01"
            kicker="The AI adoption bottleneck"
            title={
              <>
                Your business has more AI ideas than IT can{' '}
                <span className="lo-em">safely ship.</span>
              </>
            }
            side="Domain experts can now build a working agent or app in an afternoon. Most IT departments are not equipped for that volume, so the ideas wait. Every week in the queue is value the business does not get back. Low-Ops.AI is the road that lets them ship, with IT still in control."
          />
        </Reveal>

        <Reveal>
          <ol className="lo-ledger grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {SYMPTOMS.map((s, i) => (
              <li
                key={s.title}
                className="lo-cell flex h-full flex-col justify-between gap-10 px-6 py-6 md:min-h-[260px]"
              >
                <span className="lo-label text-[var(--lo-fg-dim)]">
                  Symptom 0{i + 1}
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
