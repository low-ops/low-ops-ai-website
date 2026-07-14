import { FC, ReactNode } from 'react';
import Kicker from './Kicker';

type TProps = {
  kicker: string;
  title: ReactNode;
  side?: string;
};

/**
 * Editorial section header: display title on the left, supporting copy
 * bottom-aligned on the right. Breaks the centered-stack monotony.
 */
const SplitHead: FC<TProps> = ({ kicker, title, side }) => {
  return (
    <div className="mb-10 grid grid-cols-1 items-end gap-6 md:mb-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
      <div>
        <Kicker>{kicker}</Kicker>
        <h2 className="lo-display mt-4.5 text-[32px] text-balance text-[var(--lo-fg)] md:text-[52px]">
          {title}
        </h2>
      </div>
      {side && (
        <p className="pb-1.5 text-[16px] leading-relaxed text-[var(--lo-fg-mut)] md:text-[17px]">
          {side}
        </p>
      )}
    </div>
  );
};

export default SplitHead;
