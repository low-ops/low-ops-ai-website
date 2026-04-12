'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const navLinks = [
  { label: 'Product', href: '#' },
  { label: 'MCP', href: '#mcp' },
  { label: 'Claude Plugin', href: '#claude-plugin' },
  { label: 'Docs', href: 'https://docs.low-ops.com/docs/docs/low-ops-ai' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        background: 'rgba(3,6,15,0.85)',
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid var(--color-lo-border)',
      }}
    >
      {/* Main bar */}
      <div className="container flex items-center justify-between h-16">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 no-underline shrink-0"
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 800,
            fontSize: 20,
            letterSpacing: '-0.5px',
            color: 'var(--color-lo-text)',
          }}
        >
          <Image src="/logo-full.svg" alt="Low-Ops logo" width={120} height={30} className="" unoptimized priority />
        </Link>

        {/* Desktop nav links */}
        <ul className="hidden lg:flex gap-8 list-none">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="no-underline text-sm font-medium transition-colors duration-200"
                style={{ color: 'var(--color-lo-muted)' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-lo-text)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-lo-muted)')}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right CTAs */}
        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href="https://portal.app.low-ops.com"
            className="hidden sm:block no-underline px-4 py-2 rounded-md text-sm font-medium transition-all duration-200"
            style={{ border: '1px solid var(--color-lo-border2)', color: 'var(--color-lo-text)' }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--color-lo-accent)';
              e.currentTarget.style.color = 'var(--color-lo-accent)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'var(--color-lo-border2)';
              e.currentTarget.style.color = 'var(--color-lo-text)';
            }}
          >
            Sign in
          </a>
          <a
            href="https://low-ops.com"
            className="no-underline px-4 py-2 rounded-md text-sm font-bold transition-all duration-200 whitespace-nowrap"
            style={{
              background: 'var(--color-lo-accent)',
              color: 'var(--color-lo-bg)',
              boxShadow: '0 0 20px rgba(79,158,255,0.35)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#6eb3ff';
              e.currentTarget.style.boxShadow = '0 0 30px rgba(79,158,255,0.55)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'var(--color-lo-accent)';
              e.currentTarget.style.boxShadow = '0 0 20px rgba(79,158,255,0.35)';
            }}
          >
            Get started →
          </a>

          {/* Hamburger */}
          <button
            className="lg:hidden flex flex-col justify-center items-center w-9 h-9 gap-1.5 rounded-md"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            style={{ border: '1px solid var(--color-lo-border2)' }}
          >
            <span
              className="block w-4 h-0.5 transition-all duration-200"
              style={{ background: 'var(--color-lo-text)', transform: open ? 'translateY(6px) rotate(45deg)' : 'none' }}
            />
            <span
              className="block w-4 h-0.5 transition-all duration-200"
              style={{ background: 'var(--color-lo-text)', opacity: open ? 0 : 1 }}
            />
            <span
              className="block w-4 h-0.5 transition-all duration-200"
              style={{
                background: 'var(--color-lo-text)',
                transform: open ? 'translateY(-6px) rotate(-45deg)' : 'none',
              }}
            />
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      <div
        className="lg:hidden overflow-hidden transition-all duration-300"
        style={{ maxHeight: open ? 400 : 0, borderTop: open ? '1px solid var(--color-lo-border)' : 'none' }}
      >
        <div className="container py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="no-underline px-3 py-3 rounded-lg text-sm font-medium transition-all duration-150"
              style={{ color: 'var(--color-lo-muted)' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--color-lo-text)';
                e.currentTarget.style.background = 'var(--color-lo-surface)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--color-lo-muted)';
                e.currentTarget.style.background = 'transparent';
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#"
            onClick={() => setOpen(false)}
            className="sm:hidden no-underline px-3 py-3 rounded-lg text-sm font-medium text-center mt-2"
            style={{ color: 'var(--color-lo-muted)', border: '1px solid var(--color-lo-border)' }}
          >
            Sign in
          </a>
        </div>
      </div>
    </header>
  );
}
