'use client';

const logos = ['Acme Corp', 'Starwave', 'NovaSystems', 'Meridian', 'Apex IO', 'Quanta Labs'];

export default function LogosBar() {
  return (
    <section className="relative z-10 py-14" style={{ borderBottom: '1px solid var(--color-lo-border)' }}>
      <div className="container text-center">
        <p
          className="text-xs tracking-wider uppercase mb-8"
          style={{ fontFamily: 'var(--font-mono)', color: 'var(--color-lo-dim)' }}
        >
          Trusted by engineering teams worldwide
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          {logos.map((name) => (
            <div
              key={name}
              className="text-xs sm:text-sm font-medium tracking-[0.06em] px-3 sm:px-4 py-2 rounded-md transition-all duration-200 cursor-default"
              style={{
                fontFamily: 'var(--font-mono)',
                color: 'var(--color-lo-dim)',
                border: '1px solid var(--color-lo-border)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--color-lo-muted)';
                e.currentTarget.style.borderColor = 'var(--color-lo-border2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--color-lo-dim)';
                e.currentTarget.style.borderColor = 'var(--color-lo-border)';
              }}
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
