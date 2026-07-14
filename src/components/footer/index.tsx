'use client';

import BrandMark from '@/components/BrandMark';
import { QUICK_LINKS } from '@/data/footer';
import socials from '@/data/socials';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { FC } from 'react';
import { PiEnvelopeSimpleOpen, PiMapPinLine } from 'react-icons/pi';

type TProps = {
  classes?: string;
};

const Footer: FC<TProps> = ({ classes }) => {
  return (
    <footer
      id="footer"
      className={cn(
        'relative w-full border-t border-[var(--lo-line-soft)] bg-[var(--lo-ink-2)]',
        classes
      )}
    >
      <div className="container relative z-10 grid grid-cols-1 gap-10 py-14 md:grid-cols-2 lg:grid-cols-3 lg:py-20">
        <div className="flex flex-col gap-5">
          <BrandMark />
          <p className="max-w-md text-[15px] leading-relaxed text-[var(--lo-fg-mut)]">
            Low-Ops is the private, AI-native developer platform that gives
            AI-built apps a safe path to production — self-hosted on the cloud
            you control.
          </p>
          <div className="flex gap-3">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="grid h-10 w-10 place-items-center rounded-full border border-[var(--lo-line)] text-[var(--lo-fg-mut)] transition-colors hover:border-[var(--lo-accent)] hover:text-[var(--lo-accent)]"
              >
                {social.icon(20)}
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-3.5 md:justify-self-center">
          <h4 className="lo-mono text-[12px] uppercase tracking-[0.14em] text-[var(--lo-fg-dim)]">
            Quick links
          </h4>
          <ul className="flex flex-col gap-2.5">
            {QUICK_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-[15px] text-[var(--lo-fg-mut)] transition-colors hover:text-[var(--lo-accent)]"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-3.5">
          <h4 className="lo-mono text-[12px] uppercase tracking-[0.14em] text-[var(--lo-fg-dim)]">
            Contact
          </h4>
          <a
            href="mailto:hello@low-ops.ai"
            className="flex items-center gap-3 text-[15px] text-[var(--lo-fg-mut)] transition-colors hover:text-[var(--lo-accent)]"
          >
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-[var(--lo-line)] text-[var(--lo-accent)]">
              <PiEnvelopeSimpleOpen size={20} />
            </span>
            hello@low-ops.ai
          </a>
          <div className="flex items-center gap-3 text-[15px] text-[var(--lo-fg-mut)]">
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-[var(--lo-line)] text-[var(--lo-accent)]">
              <PiMapPinLine size={20} />
            </span>
            Bajonetstraat 50, 3014 ZK, Rotterdam, The Netherlands (appointment
            only)
          </div>
        </div>
      </div>

      <div className="border-t border-[var(--lo-line-soft)] py-7">
        <div className="container flex flex-col items-center justify-between gap-3 lg:flex-row">
          <span className="lo-mono text-[12.5px] text-[var(--lo-fg-dim)]">
            © 2026 Low-Ops · All rights reserved · A product of{' '}
            <a
              href="https://cinaq.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-[var(--lo-accent)]"
            >
              CINAQ
            </a>
          </span>
          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-1">
            <Link
              href="/privacy-policy"
              className="lo-mono text-[12.5px] text-[var(--lo-fg-dim)] transition-colors hover:text-[var(--lo-accent)]"
            >
              Privacy policy
            </Link>
            <Link
              href="/license-agreement"
              className="lo-mono text-[12.5px] text-[var(--lo-fg-dim)] transition-colors hover:text-[var(--lo-accent)]"
            >
              Terms &amp; Conditions
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
