import Link from 'next/link';
import { FC } from 'react';

type TProps = {
  className?: string;
};

/**
 * Text wordmark for the dark "console" chrome. The shipped SVG logo uses
 * near-black fills that disappear on a dark background, so the dark header
 * and footer use this controllable mark instead.
 */
const BrandMark: FC<TProps> = ({ className }) => {
  return (
    <Link
      href="/"
      className={`lo-display flex items-center gap-[11px] text-[19px] text-[var(--lo-fg)] ${className ?? ''}`}
      aria-label="Low-Ops home"
    >
      <span className="lo-brand-mark relative h-[26px] w-[26px] shrink-0 rounded-[7px] bg-[radial-gradient(circle_at_30%_30%,var(--lo-accent-hi),var(--lo-accent)_55%,var(--lo-accent-deep))] shadow-[0_0_18px_-4px_var(--lo-accent)]" />
      Low-Ops
    </Link>
  );
};

export default BrandMark;
