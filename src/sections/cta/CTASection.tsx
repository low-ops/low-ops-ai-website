import data from '@/data';
import { PiAddressBook, PiPaperPlaneTilt, PiUser } from 'react-icons/pi';

const CTASection = () => {
  return (
    <section id="cta" className="py-20 md:py-24 px-4">
      <div className="container">
        <div className="relative overflow-hidden rounded-2xl border border-[var(--lo-line)] px-6 py-14 text-center shadow-[var(--lo-shadow-sm)] md:px-16 md:py-20 bg-[radial-gradient(80%_130%_at_50%_0%,var(--lo-glow),transparent_60%),linear-gradient(180deg,var(--lo-surface-2),var(--lo-surface))]">
          <span className="relative inline-flex items-center justify-center text-[13px] font-semibold uppercase tracking-[0.12em] text-[var(--lo-accent)]">
            Get started today
          </span>
          <h2 className="lo-display relative mx-auto mt-4 max-w-2xl text-[28px] text-balance text-[var(--lo-fg)] md:text-[40px]">
            Give your AI agents &amp; web apps a{' '}
            <span className="lo-em">responsible</span> path to production
          </h2>
          <p className="mx-auto mt-4.5 max-w-2xl text-[16px] leading-relaxed text-[var(--lo-fg-mut)] md:text-[17px]">
            Join high-velocity teams shipping AI agents and web apps to their
            own private cloud — software-engineering best practices enforced
            automatically, for humans and AI agents alike.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 lg:flex-row">
            <a
              href={data.cta.freeAccessLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-[var(--lo-accent)] px-6 py-3 text-[15px] font-semibold text-white transition-colors hover:bg-[var(--lo-accent-deep)]"
            >
              <PiPaperPlaneTilt size={18} />
              Start free
            </a>
            <a
              href={data.cta.vipAccessLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-[var(--lo-line)] bg-[var(--lo-surface)] px-6 py-3 text-[15px] font-medium text-[var(--lo-fg)] transition-colors hover:border-[var(--lo-accent)] hover:text-[var(--lo-accent)]"
            >
              <PiAddressBook size={18} />
              Request VIP Access
            </a>
            <a
              href={data.cta.personalDemoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-[var(--lo-line)] bg-[var(--lo-surface)] px-6 py-3 text-[15px] font-medium text-[var(--lo-fg)] transition-colors hover:border-[var(--lo-accent)] hover:text-[var(--lo-accent)]"
            >
              <PiUser size={18} />
              Personal Demo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
