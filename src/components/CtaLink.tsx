import { cn } from '@/lib/utils';
import Link from 'next/link';
import { FC, ReactNode } from 'react';

type TProps = {
  href: string;
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost' | 'inverse';
  size?: 'md' | 'sm';
  className?: string;
};

const BASE =
  'group inline-flex items-center justify-center gap-2 rounded-[6px] font-medium transition-colors duration-200';

const VARIANTS = {
  /** Graphite button; turns brand blue on hover. */
  primary: 'bg-[var(--lo-fg)] text-white hover:bg-[var(--lo-accent)]',
  /** Hairline outline. */
  secondary:
    'border border-[var(--lo-line-strong)] bg-transparent text-[var(--lo-fg)] hover:border-[var(--lo-fg)]',
  /** Text link with arrow. */
  ghost: 'px-0 text-[var(--lo-fg)] hover:text-[var(--lo-accent)]',
  /** For dark surfaces. */
  inverse:
    'bg-[var(--lo-on-black)] text-[var(--lo-black)] hover:bg-[var(--lo-accent)] hover:text-white',
};

const SIZES = {
  md: 'h-12 px-6 text-[15px]',
  sm: 'h-10 px-4 text-[14px]',
};

const isExternal = (href: string) => /^https?:\/\//.test(href);

const Arrow = () => (
  <svg
    viewBox="0 0 16 16"
    className="h-[14px] w-[14px] transition-transform duration-200 group-hover:translate-x-0.5"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M3 8h10M9 4l4 4-4 4" />
  </svg>
);

/** Shared CTA link. External URLs open in a new tab; internal ones use next/link. */
const CtaLink: FC<TProps> = ({
  href,
  children,
  variant = 'primary',
  size = 'md',
  className,
}) => {
  const classes = cn(
    BASE,
    VARIANTS[variant],
    variant === 'ghost' ? 'text-[15px]' : SIZES[size],
    className,
  );
  const content = (
    <>
      {children}
      <Arrow />
    </>
  );

  if (isExternal(href)) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {content}
    </Link>
  );
};

export default CtaLink;
