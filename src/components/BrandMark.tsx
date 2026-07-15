import logo from '@/assets/logo.svg';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

type TProps = {
  className?: string;
};

const BrandMark: FC<TProps> = ({ className }) => {
  return (
    <Link
      href="/"
      className={`flex shrink-0 items-center ${className ?? ''}`}
      aria-label="Low-Ops home"
    >
      <Image
        src={logo}
        alt="Low-Ops"
        width={140}
        priority
        className="m-0 h-auto w-[126px] object-contain md:w-[140px]"
      />
    </Link>
  );
};

export default BrandMark;
