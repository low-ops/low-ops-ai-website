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
                className="text-[14px] font-medium text-[var(--lo-fg-mut)] transition-colors hover:text-[var(--lo-fg)]"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3.5">
            <a
              href={data.cta.freeAccessLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden rounded-lg border border-[var(--lo-line)] px-4.5 py-2.5 text-[14px] font-medium text-[var(--lo-fg)] transition-colors hover:border-[var(--lo-accent)] hover:text-[var(--lo-accent)] md:inline-flex"
            >
              Start free
            </a>
            <a
              href={data.cta.personalDemoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-lg bg-[var(--lo-accent)] px-4.5 py-2.5 text-[14px] font-semibold text-white transition-colors hover:bg-[var(--lo-accent-deep)]"
            >
              Book a demo
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
              className="border-b border-[var(--lo-line-soft)] py-5 text-lg font-medium text-[var(--lo-fg)]"
            >
              {item.name}
            </Link>
          ))}
          <a
            href={data.cta.personalDemoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center justify-center rounded-lg bg-[var(--lo-accent)] px-5 py-4 text-[15px] font-semibold text-white"
          >
            Book a demo
          </a>
        </nav>
      </div>
    </>
  );
};

export default Header;
