import { cn } from '@/lib/utils';
import { FC } from 'react';

type TProps = {
  className?: string;
};

/**
 * Rotating circular "approval stamp" — the brand promise ("apps your
 * security team approves") turned into a graphic object. Decorative only.
 */
const Stamp: FC<TProps> = ({ className }) => {
  return (
    <div className={cn('pointer-events-none', className)} aria-hidden="true">
      <div className="relative h-full w-full">
        <svg viewBox="0 0 132 132" className="lo-stamp-ring h-full w-full">
          <defs>
            <path
              id="lo-stamp-circle"
              d="M66,66 m-52,0 a52,52 0 1,1 104,0 a52,52 0 1,1 -104,0"
            />
          </defs>
          <circle
            cx="66"
            cy="66"
            r="36"
            fill="none"
            stroke="var(--lo-accent)"
            strokeWidth="1.4"
            strokeDasharray="3 4"
          />
          <text className="lo-mono fill-[var(--lo-accent)] text-[10.5px] tracking-[2.6px]">
            <textPath href="#lo-stamp-circle">
              SECURITY APPROVED&#160;&#160;★&#160;&#160;AUDIT
              READY&#160;&#160;★&#160;&#160;
            </textPath>
          </text>
        </svg>
        <span className="absolute inset-0 grid place-items-center text-[28px] font-black text-[var(--lo-accent)]">
          ✓
        </span>
      </div>
    </div>
  );
};

export default Stamp;
