import { cn } from '@/lib/utils';
import { FC } from 'react';

type TProps = {
  children: string;
  className?: string;
  /** Optional section index, rendered as "01" before the label. */
  index?: string;
  tone?: 'light' | 'dark';
};

/** Mono small-caps section label with the 4-dot glyph from the logo. */
const Kicker: FC<TProps> = ({ children, className, index, tone = 'light' }) => (
  <span
    className={cn(
      'lo-label inline-flex items-center gap-2.5',
      tone === 'dark'
        ? 'text-[var(--lo-on-black-mut)]'
        : 'text-[var(--lo-fg-mut)]',
      className,
    )}
  >
    <svg
      viewBox="0 0 10 10"
      className="h-[9px] w-[9px] shrink-0"
      aria-hidden="true"
    >
      <circle cx="5" cy="1.6" r="1.6" fill="#4a90e2" />
      <circle cx="1.6" cy="5" r="1.6" fill="#4a90e2" />
      <circle cx="8.4" cy="5" r="1.6" fill="currentColor" />
      <circle cx="5" cy="8.4" r="1.6" fill="currentColor" />
    </svg>
    {index && <span className="text-[var(--lo-accent)]">{index}</span>}
    {children}
  </span>
);

export default Kicker;
