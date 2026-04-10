'use client';

import Image from 'next/image';
const links = ['Product', 'Docs', 'Pricing', 'Blog', 'GitHub', 'Status'];

export default function Footer() {
  return (
    <footer className="relative z-10 py-10" style={{ borderTop: '1px solid var(--color-lo-border)' }}>
      <div className="container flex flex-col sm:flex-row items-center sm:items-center justify-between gap-6 text-center sm:text-left">
        {/* Logo */}
        <div
          className="font-extrabold text-lg shrink-0"
          style={{ fontFamily: 'var(--font-display)', color: 'var(--color-lo-text)' }}
        >
          <Image src="/logo-full.svg" alt="Low-Ops logo" width={120} height={30} className="" unoptimized priority />
        </div>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
          {links.map((link) => (
            <a
              key={link}
              href="#"
              className="text-xs sm:text-sm no-underline transition-colors duration-200"
              style={{ color: 'var(--color-lo-dim)' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-lo-muted)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-lo-dim)')}
            >
              {link}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <div className="text-xs shrink-0" style={{ fontFamily: 'var(--font-mono)', color: 'var(--color-lo-dim)' }}>
          © 2026 low-ops.com
        </div>
      </div>
    </footer>
  );
}
