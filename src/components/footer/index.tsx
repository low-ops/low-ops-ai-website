'use client';

import BrandMark from '@/components/BrandMark';
import { INDUSTRY_LINKS, QUICK_LINKS } from '@/data/footer';
import socials from '@/data/socials';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { FC } from 'react';

type TProps = {
  classes?: string;
};

const col = 'flex flex-col gap-3';
const label = 'lo-label text-[var(--lo-on-black-dim)]';
const link =
  'text-[14.5px] text-[var(--lo-on-black-mut)] transition-colors hover:text-[var(--lo-on-black)]';

const Footer: FC<TProps> = ({ classes }) => {
  return (
    <footer
      id="footer"
      data-tone="dark"
      className={cn(
        'relative w-full overflow-hidden bg-[var(--lo-black)] text-[var(--lo-on-black)]',
        classes,
      )}
    >
      <div
        className="lo-dots-dark pointer-events-none absolute inset-x-0 top-0 h-[260px] [mask-image:linear-gradient(to_bottom,rgba(0,0,0,0.9),transparent)]"
        aria-hidden="true"
      />

      <div className="container relative z-10 pt-16 pb-10 md:pt-24">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.2fr_1fr] lg:grid-cols-[1.4fr_0.7fr_0.7fr_0.9fr]">
          <div className="flex flex-col gap-6">
            <BrandMark tone="dark" />
            <p className="max-w-[34em] text-[15px] leading-relaxed text-[var(--lo-on-black-mut)]">
              The Internal Developer Platform for the AI era. Domain experts
              build and deploy AI agents and web apps at rapid pace; IT keeps
              complete oversight, governance and data privacy. Self-hosted,
              private by default, open-source core.
            </p>
            <div className="flex gap-2">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="grid h-10 w-10 place-items-center rounded-[6px] border border-[var(--lo-black-line)] text-[var(--lo-on-black-mut)] transition-colors hover:border-[var(--lo-on-black-mut)] hover:text-[var(--lo-on-black)]"
                >
                  {social.icon(18)}
                </a>
              ))}
            </div>
          </div>

          <div className={col}>
            <h4 className={label}>Solutions</h4>
            <ul className="flex flex-col gap-2">
              {INDUSTRY_LINKS.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className={link}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className={col}>
            <h4 className={label}>Company</h4>
            <ul className="flex flex-col gap-2">
              {QUICK_LINKS.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className={link}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className={col}>
            <h4 className={label}>Contact</h4>
            <a href="mailto:hello@low-ops.ai" className={link}>
              hello@low-ops.ai
            </a>
            <p className="text-[14.5px] leading-relaxed text-[var(--lo-on-black-mut)]">
              Schiedamse Vest 154
              <br />
              3011 BH Rotterdam, The Netherlands
              <br />
              <span className="text-[var(--lo-on-black-dim)]">
                appointment only
              </span>
            </p>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-[var(--lo-black-line)] pt-6 md:flex-row md:items-center md:justify-between">
          <span className="lo-label text-[var(--lo-on-black-dim)]">
            © 2026 Low-Ops.AI · Rotterdam · A product of{' '}
            <a
              href="https://cinaq.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-[var(--lo-on-black)]"
            >
              CINAQ
            </a>
          </span>
          <nav className="flex flex-wrap items-center gap-x-6 gap-y-1">
            <Link href="/privacy-policy" className={cn(link, 'text-[13px]')}>
              Privacy policy
            </Link>
            <Link href="/license-agreement" className={cn(link, 'text-[13px]')}>
              Terms &amp; Conditions
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
