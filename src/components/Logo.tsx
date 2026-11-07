import { cn } from '@/lib/utils';
import { CSSProperties, FC } from 'react';

type MarkProps = {
  className?: string;
  style?: CSSProperties;
  title?: string;
  /** Colour of the four graphite dots. Defaults to brand graphite. */
  graphite?: string;
};

/**
 * The Low-Ops.AI mark: a 3×3 diamond of dots — five brand-blue on the
 * left diagonal, four graphite on the right. Drawn as vectors so it stays
 * crisp at favicon and hero sizes alike (source: logo-low-ops-ai-symbol.png).
 */
export const LogoMark: FC<MarkProps> = ({
  className,
  style,
  title = 'Low-Ops.AI',
  graphite = '#595959',
}) => {
  // Centres on a 7×7 grid (unit = 1), radius 0.53 — matches the PNG ratios.
  const blue = [
    [3.5, 0.5],
    [2.5, 1.5],
    [1.5, 2.5],
    [2.5, 3.5],
    [3.5, 4.5],
  ];
  const grey = [
    [4.5, 1.5],
    [3.5, 2.5],
    [5.5, 2.5],
    [4.5, 3.5],
  ];
  return (
    <svg
      viewBox="0.9 -0.1 5.2 5.2"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label={title}
      className={className}
      style={style}
    >
      {blue.map(([cx, cy]) => (
        <circle key={`b${cx}${cy}`} cx={cx} cy={cy} r="0.53" fill="#4a90e2" />
      ))}
      {grey.map(([cx, cy]) => (
        <circle key={`g${cx}${cy}`} cx={cx} cy={cy} r="0.53" fill={graphite} />
      ))}
    </svg>
  );
};

type LogoProps = {
  className?: string;
  /** Height of the mark in px; the wordmark scales with it. */
  size?: number;
  tone?: 'light' | 'dark';
  withWordmark?: boolean;
};

/** Mark + "Low-Ops.AI" wordmark. `tone="dark"` is for dark surfaces. */
const Logo: FC<LogoProps> = ({
  className,
  size = 26,
  tone = 'light',
  withWordmark = true,
}) => {
  const fg =
    tone === 'dark' ? 'text-[var(--lo-on-black)]' : 'text-[var(--lo-fg)]';
  return (
    <span
      className={cn('inline-flex items-center gap-[0.42em]', fg, className)}
      style={{ fontSize: size }}
    >
      <LogoMark
        className="block shrink-0"
        style={{ height: size, width: size }}
        graphite={tone === 'dark' ? '#a3a6ab' : '#595959'}
      />
      {withWordmark && (
        <span
          className="lo-display whitespace-nowrap font-bold tracking-[-0.03em]"
          style={{ fontSize: size * 0.86, lineHeight: 1 }}
        >
          Low-Ops<span className="text-[var(--lo-accent)]">.AI</span>
        </span>
      )}
    </span>
  );
};

export default Logo;
