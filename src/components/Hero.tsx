'use client';

import Terminal from './Terminal';

export default function Hero() {
  return (
    <section className="relative z-10 min-h-screen pt-42 pb-16">
      <div className="container flex flex-col items-center justify-center text-center">
        {/* Badge */}
        <div
          className="animate-fade-up inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold tracking-wide mb-8"
          style={{
            fontFamily: 'var(--font-mono)',
            border: '1px solid rgba(0,229,195,0.3)',
            background: 'rgba(0,229,195,0.07)',
            color: 'var(--color-lo-teal)',
          }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full shrink-0"
            style={{ background: 'var(--color-lo-teal)', boxShadow: '0 0 6px var(--color-lo-teal)' }}
          />
          <span>Now with MCP &amp; Claude Plugin — AI-native ops</span>
        </div>

        {/* Headline */}
        <h1
          className="animate-fade-up-1 font-extrabold leading-[1.05] mb-6"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(38px, 7vw, 88px)',
            letterSpacing: 'clamp(-1px, -0.03em, -2px)',
          }}
        >
          Operations,
          <br />
          <em className="not-italic" style={{ color: 'var(--color-lo-accent)' }}>
            automated
          </em>{' '}
          by
          <br />
          <span style={{ color: 'var(--color-lo-teal)' }}>AI.</span>
        </h1>

        {/* Subheading */}
        <p
          className="animate-fade-up-2 max-w-xl text-base sm:text-lg font-light mb-10 leading-relaxed px-2"
          style={{ color: 'var(--color-lo-muted)' }}
        >
          Low-Ops is the AI-powered platform that eliminates operational overhead. Deploy, manage, and scale with
          natural language — no DevOps degree required.
        </p>

        {/* CTAs */}
        <div className="animate-fade-up-3 flex flex-col sm:flex-row gap-3 justify-center w-full max-w-sm sm:max-w-none">
          <a
            href="#"
            className="no-underline px-7 py-3.5 rounded-lg text-base font-bold transition-all duration-200 text-center"
            style={{
              background: 'var(--color-lo-accent)',
              color: 'var(--color-lo-bg)',
              boxShadow: '0 0 20px rgba(79,158,255,0.35)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#6eb3ff';
              e.currentTarget.style.boxShadow = '0 0 40px rgba(79,158,255,0.6)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'var(--color-lo-accent)';
              e.currentTarget.style.boxShadow = '0 0 20px rgba(79,158,255,0.35)';
            }}
          >
            Start for free →
          </a>
          <a
            href="#"
            className="no-underline px-7 py-3.5 rounded-lg text-base font-medium transition-all duration-200 text-center"
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
            View documentation
          </a>
        </div>

        {/* Terminal */}
        <div className="animate-fade-up-4 mt-14 w-full max-w-3xl">
          <Terminal />
        </div>
      </div>
    </section>
  );
}
