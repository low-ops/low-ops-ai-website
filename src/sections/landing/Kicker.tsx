import { FC } from 'react';

type TProps = {
  children: string;
  className?: string;
};

const Kicker: FC<TProps> = ({ children, className }) => (
  <span
    className={`inline-flex items-center text-[13px] font-semibold uppercase tracking-[0.12em] text-[var(--lo-accent)] ${className ?? ''}`}
  >
    {children}
  </span>
);

export default Kicker;
