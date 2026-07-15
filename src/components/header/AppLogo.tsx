import Logo from '@/components/Logo';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { FC } from 'react';

const HEIGHTS = {
  default: 28,
  small: 24,
  medium: 28,
  large: 32,
};

type TProps = {
  size?: 'small' | 'medium' | 'large';
};

const AppLogo: FC<TProps> = ({ size }) => {
  const height = size ? HEIGHTS[size] : HEIGHTS.default;

  return (
    <Link href="/" className={cn('relative block text-[var(--lo-fg)]')}>
      <Logo className="w-auto" style={{ height }} />
    </Link>
  );
};

export default AppLogo;
