'use client';

import BrandMark from '@/components/BrandMark';
import data from '@/data';
import { menu } from '@/data/header';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { FC, useState } from 'react';
import { PiList, PiX } from 'react-icons/pi';

type TProps = {
  classes?: string;
};

const normalizeHref = (href: string) =>
  href.startsWith('/') || href.startsWith('#') || href.startsWith('http')
    ? href
    : `/${href}`;

const Header: FC<TProps> = ({ classes }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header
        className={cn(
          'sticky top-0 z-60 w-full border-b border-[var(--lo-line-soft)] bg-[color-mix(in_srgb,var(--lo-ink)_78%,transparent)] backdrop-blur-[14px]',
          classes
        )}
      >
      <div className="container">
        <div className="flex h-[66px] items-center justify-between">
          <BrandMark />

          <nav
            className="hidden items-center gap-8 lg:flex"
            aria-label="Primary"
          >
            {menu.map((item) => (
              <Link
                key={item.name}
                href={normalizeHref(item.href)}
                className="lo-mono group relative text-[13px] text-[var(--lo-fg-mut)] transition-colors hover:text-[var(--lo-fg)]"
              >
                {item.name}
                <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-[var(--lo-accent)] transition-all duration-200 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3.5">
            <a
              href={data.cta.freeAccessLink}
              target="_blank"
              rel="noopener noreferrer"
              className="lo-mono hidden rounded-[10px] border border-[var(--lo-line)] px-5 py-3 text-[13.5px] text-[var(--lo-fg)] transition-all hover:-translate-y-0.5 hover:border-[var(--lo-accent)] hover:text-[var(--lo-accent)] md:inline-flex"
            >
              Free Access
            </a>
            <a
              href={data.cta.personalDemoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="lo-mono group inline-flex items-center gap-2 rounded-[10px] bg-[var(--lo-accent)] px-5 py-3 text-[13.5px] font-semibold text-white shadow-[0_0_0_0_var(--lo-glow)] transition-all hover:-translate-y-0.5 hover:shadow-[0_14px_34px_-12px_var(--lo-accent)]"
            >
              Book a demo
              <span className="transition-transform group-hover:translate-x-0.5">
                →
              </span>
            </a>
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="grid h-9 w-9 place-items-center rounded-lg text-[var(--lo-fg-mut)] transition-colors hover:text-[var(--lo-fg)] lg:hidden"
              aria-label="Open menu"
            >
              <PiList size={26} />
            </button>
          </div>
        </div>
      </div>
      </header>

      {/* Mobile menu — kept as a sibling of <header> so the header's
          backdrop-filter doesn't become the containing block for this
          position:fixed overlay (which would clip it to the header height). */}
      <div
        className={cn(
          'fixed inset-0 z-70 flex flex-col bg-[var(--lo-ink)] transition-transform duration-400 lg:hidden',
          open ? 'translate-y-0' : 'pointer-events-none -translate-y-full'
        )}
      >
        <div className="container flex h-[66px] items-center justify-between border-b border-[var(--lo-line-soft)]">
          <BrandMark />
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="grid h-9 w-9 place-items-center rounded-lg text-[var(--lo-fg-mut)] hover:text-[var(--lo-fg)]"
            aria-label="Close menu"
          >
            <PiX size={24} />
          </button>
        </div>
        <nav className="container flex flex-col py-6" aria-label="Mobile">
          {menu.map((item) => (
            <Link
              key={item.name}
              href={normalizeHref(item.href)}
              onClick={() => setOpen(false)}
              className="lo-mono border-b border-[var(--lo-line-soft)] py-5 text-lg text-[var(--lo-fg)]"
            >
              {item.name}
            </Link>
          ))}
          <a
            href={data.cta.personalDemoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="lo-mono mt-8 inline-flex items-center justify-center gap-2 rounded-[10px] bg-[var(--lo-accent)] px-5 py-4 text-sm font-semibold text-white"
          >
            Book a demo →
          </a>
        </nav>
      </div>
    </>
  );
};

export default Header;
