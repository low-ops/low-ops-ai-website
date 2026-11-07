import Logo from '@/components/Logo';
import Link from 'next/link';
import { FC } from 'react';

type TProps = {
  className?: string;
  tone?: 'light' | 'dark';
};

const BrandMark: FC<TProps> = ({ className, tone = 'light' }) => {
  return (
    <Link
      href="/"
      className={`flex shrink-0 items-center ${className ?? ''}`}
      aria-label="Low-Ops.AI home"
    >
      <Logo size={24} tone={tone} />
    </Link>
  );
};

export default BrandMark;
