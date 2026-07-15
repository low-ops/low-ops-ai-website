import Logo from '@/components/Logo';
import Link from 'next/link';
import { FC } from 'react';

type TProps = {
  className?: string;
};

const BrandMark: FC<TProps> = ({ className }) => {
  return (
    <Link
      href="/"
      className={`flex shrink-0 items-center text-[var(--lo-fg)] ${className ?? ''}`}
      aria-label="Low-Ops home"
    >
      <Logo className="h-[26px] w-auto md:h-[28px]" />
    </Link>
  );
};

export default BrandMark;
