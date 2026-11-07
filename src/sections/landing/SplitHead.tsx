import { cn } from '@/lib/utils';
import { FC, ReactNode } from 'react';
import Kicker from './Kicker';

type TProps = {
  kicker: string;
  index?: string;
  title: ReactNode;
  side?: string;
  tone?: 'light' | 'dark';
  className?: string;
};

/**
 * Editorial section header: hairline on top, mono label, then a large display
 * title on the left and the supporting paragraph bottom-aligned on the right.
 */
const SplitHead: FC<TProps> = ({
  kicker,
  index,
  title,
  side,
  tone = 'light',
  className,
}) => {
  const dark = tone === 'dark';
  return (
    <div
      className={cn(
        'mb-10 border-t pt-6 md:mb-14 md:pt-7',
        dark
          ? 'border-[var(--lo-black-line)]'
          : 'border-[var(--lo-line-strong)]',
        className,
      )}
    >
      <div className="grid grid-cols-1 items-end gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <div>
          <Kicker index={index} tone={tone}>
            {kicker}
          </Kicker>
          <h2
            className={cn(
              'lo-display mt-5 text-[32px] text-balance md:text-[46px]',
              dark ? 'text-[var(--lo-on-black)]' : 'text-[var(--lo-fg)]',
            )}
          >
            {title}
          </h2>
        </div>
        {side && (
          <p
            className={cn(
              'max-w-[40em] pb-1 text-[16px] leading-relaxed md:text-[17px]',
              dark
                ? 'text-[var(--lo-on-black-mut)]'
                : 'text-[var(--lo-fg-mut)]',
            )}
          >
            {side}
          </p>
        )}
      </div>
    </div>
  );
};

export default SplitHead;
