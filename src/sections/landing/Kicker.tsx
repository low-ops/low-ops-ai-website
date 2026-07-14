import { FC } from 'react';

type TProps = {
  children: string;
  className?: string;
};

const Kicker: FC<TProps> = ({ children, className }) => (
  <span
    className={`lo-mono inline-flex items-center gap-2.5 text-[12px] uppercase tracking-[0.22em] text-[var(--lo-accent)] before:h-px before:w-[22px] before:bg-[var(--lo-accent)] before:opacity-70 before:content-[''] ${className ?? ''}`}
  >
    {children}
  </span>
);

export default Kicker;
