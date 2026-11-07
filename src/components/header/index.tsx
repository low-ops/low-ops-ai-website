'use client';

import BrandMark from '@/components/BrandMark';
import data from '@/data';
import { menu, type MenuItem } from '@/data/header';
import { cn } from '@/lib/utils';
import { ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { FC, useEffect, useRef, useState } from 'react';
import { PiList, PiX } from 'react-icons/pi';

type TProps = {
  classes?: string;
};

const linkClass =
  'text-[14px] font-medium text-[var(--lo-fg-mut)] transition-colors hover:text-[var(--lo-fg)]';

/** Desktop dropdown for a menu item with children (Solutions). */
const DesktopDropdown: FC<{ item: MenuItem }> = ({ item }) => {
  const [open, setOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const rootRef = useRef<HTMLDivElement>(null);

  const show = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpen(true);
  };
  const hide = () => {
    closeTimer.current = setTimeout(() => setOpen(false), 120);
  };

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    const onClick = (e: MouseEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('mousedown', onClick);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('mousedown', onClick);
    };
  }, [open]);

  return (
    <div
      ref={rootRef}
      className="relative"
      onMouseEnter={show}
      onMouseLeave={hide}
    >
      <button
        type="button"
        className={cn(linkClass, 'inline-flex items-center gap-1')}
        aria-expanded={open}
        aria-haspopup="menu"
        onClick={() => setOpen((v) => !v)}
      >
        {item.name}
        <ChevronDown
          size={14}
          className={cn('transition-transform', open && 'rotate-180')}
        />
      </button>

      <div
        role="menu"
        className={cn(
          'absolute left-1/2 top-full z-70 w-[600px] -translate-x-1/2 pt-3 transition-all duration-150',
          open
            ? 'visible translate-y-0 opacity-100'
            : 'pointer-events-none invisible -translate-y-1 opacity-0',
        )}
      >
        <div className="overflow-hidden rounded-[8px] border border-[var(--lo-line-strong)] bg-[var(--lo-surface)] shadow-[var(--lo-shadow-lg)]">
          <div className="lo-ledger grid-cols-2 border-0">
            {item.children?.map((child, i) => (
              <Link
                key={child.href}
                href={child.href}
                role="menuitem"
                onClick={() => setOpen(false)}
                className="lo-cell group px-5 py-4 transition-colors hover:bg-[var(--lo-ink)]"
              >
                <span className="lo-label block text-[var(--lo-fg-dim)]">
                  0{i + 1}
                </span>
                <span className="mt-1.5 block text-[14.5px] font-semibold text-[var(--lo-fg)] group-hover:text-[var(--lo-accent)]">
                  {child.name}
                </span>
                {child.description && (
                  <span className="mt-0.5 block text-[12.5px] leading-snug text-[var(--lo-fg-mut)]">
                    {child.description}
                  </span>
                )}
              </Link>
            ))}
          </div>
          <Link
            href={item.href}
            role="menuitem"
            onClick={() => setOpen(false)}
            className="block border-t border-[var(--lo-line)] bg-[var(--lo-surface-2)] px-5 py-3.5 text-[13.5px] font-semibold text-[var(--lo-fg)] transition-colors hover:text-[var(--lo-accent)]"
          >
            All solutions →
          </Link>
        </div>
      </div>
    </div>
  );
};

const Header: FC<TProps> = ({ classes }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header
        className={cn(
          'sticky top-0 z-60 w-full border-b border-[var(--lo-line)] bg-[color-mix(in_srgb,var(--lo-ink)_86%,transparent)] backdrop-blur-[12px]',
          classes,
        )}
      >
        <div className="container">
          <div className="flex h-[64px] items-center justify-between">
            <BrandMark />

            <nav
              className="hidden items-center gap-7 lg:flex"
              aria-label="Primary"
            >
              {menu.map((item) =>
                item.children ? (
                  <DesktopDropdown key={item.id} item={item} />
                ) : (
                  <Link key={item.id} href={item.href} className={linkClass}>
                    {item.name}
                  </Link>
                ),
              )}
            </nav>

            <div className="flex items-center gap-2">
              <a
                href={data.cta.freeAccessLink}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden h-10 items-center rounded-[6px] px-4 text-[14px] font-medium text-[var(--lo-fg-mut)] transition-colors hover:text-[var(--lo-fg)] md:inline-flex"
              >
                Start free
              </a>
              <a
                href={data.cta.shadowAiAuditLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 items-center rounded-[6px] bg-[var(--lo-fg)] px-4 text-[14px] font-medium text-white transition-colors hover:bg-[var(--lo-accent)]"
              >
                Book a demo
              </a>
              <button
                type="button"
                onClick={() => setOpen(true)}
                className="ml-1 grid h-10 w-10 place-items-center rounded-[6px] text-[var(--lo-fg)] lg:hidden"
                aria-label="Open menu"
              >
                <PiList size={26} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu — sibling of <header> so the backdrop-filter doesn't clip it. */}
      <div
        className={cn(
          'fixed inset-0 z-70 flex flex-col bg-[var(--lo-ink)] transition-transform duration-400 lg:hidden',
          open ? 'translate-y-0' : 'pointer-events-none -translate-y-full',
        )}
      >
        <div className="container flex h-[64px] shrink-0 items-center justify-between border-b border-[var(--lo-line)]">
          <BrandMark />
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="grid h-10 w-10 place-items-center rounded-[6px] text-[var(--lo-fg)]"
            aria-label="Close menu"
          >
            <PiX size={24} />
          </button>
        </div>
        <nav
          className="container flex flex-col overflow-y-auto py-4"
          aria-label="Mobile"
        >
          {menu.map((item) =>
            item.children ? (
              <div
                key={item.id}
                className="border-b border-[var(--lo-line)] py-5"
              >
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="lo-display text-[26px] text-[var(--lo-fg)]"
                >
                  {item.name}
                </Link>
                <ul className="mt-3 grid grid-cols-1 gap-0.5 sm:grid-cols-2">
                  {item.children.map((child) => (
                    <li key={child.href}>
                      <Link
                        href={child.href}
                        onClick={() => setOpen(false)}
                        className="block py-1.5 text-[15px] text-[var(--lo-fg-mut)] transition-colors hover:text-[var(--lo-fg)]"
                      >
                        {child.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <Link
                key={item.id}
                href={item.href}
                onClick={() => setOpen(false)}
                className="lo-display border-b border-[var(--lo-line)] py-5 text-[26px] text-[var(--lo-fg)]"
              >
                {item.name}
              </Link>
            ),
          )}
          <a
            href={data.cta.shadowAiAuditLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex h-12 items-center justify-center rounded-[6px] bg-[var(--lo-fg)] px-5 text-[15px] font-medium text-white"
          >
            Book a free Shadow AI audit
          </a>
        </nav>
      </div>
    </>
  );
};

export default Header;
