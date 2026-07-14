import { FC, Fragment } from 'react';

const ITEMS = [
  'Prompt',
  'Build',
  'Scan',
  'Ship',
  'Audit',
  'Your private cloud',
];

const Run: FC = () => (
  <>
    {ITEMS.map((item, i) => (
      <Fragment key={item}>
        <span className="px-[18px]">{item}</span>
        <span className="px-[18px] text-[var(--lo-accent)]">
          {i === ITEMS.length - 1 ? '✓' : '→'}
        </span>
      </Fragment>
    ))}
  </>
);

/** Scrolling pipeline strip between the hero and the first section. */
const Ticker: FC = () => {
  return (
    <div
      className="relative z-5 overflow-hidden border-y border-[var(--lo-line-soft)] bg-[var(--lo-surface)] py-[13px]"
      aria-hidden="true"
    >
      <div className="lo-ticker-track lo-mono text-[12.5px] uppercase tracking-[0.22em] whitespace-nowrap text-[var(--lo-fg-dim)]">
        <Run />
        <Run />
      </div>
    </div>
  );
};

export default Ticker;
