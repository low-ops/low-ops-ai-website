import data from '@/data';
import Stamp from '@/sections/landing/Stamp';
import { PiAddressBook, PiPaperPlaneTilt, PiUser } from 'react-icons/pi';

const CTASection = () => {
  return (
    <section id="cta" className="py-20 md:py-28 px-4">
      <div className="container">
        <div className="relative overflow-hidden rounded-[18px] border border-[var(--lo-line)] px-6 py-14 text-center shadow-[var(--lo-shadow-sm)] md:px-16 md:py-20 bg-[radial-gradient(80%_130%_at_50%_0%,var(--lo-glow),transparent_60%),linear-gradient(180deg,var(--lo-surface-2),var(--lo-surface))]">
          <div className="lo-blueprint [mask-image:radial-gradient(100%_100%_at_50%_0%,#000_20%,transparent_80%)]" />
          <Stamp className="absolute top-6 right-6 hidden h-[104px] w-[104px] rotate-[9deg] opacity-90 md:block" />
          <span className="lo-mono relative inline-flex items-center justify-center gap-2.5 text-[12px] uppercase tracking-[0.22em] text-[var(--lo-accent)] before:h-px before:w-[22px] before:bg-[var(--lo-accent)] before:opacity-70 before:content-['']">
            Get started today
          </span>
          <h2 className="lo-display relative mx-auto mt-4 max-w-2xl text-[30px] text-balance text-[var(--lo-fg)] md:text-[48px]">
            Give your AI-built apps a{' '}
            <span className="lo-serif text-[var(--lo-accent)]">
              responsible
            </span>{' '}
            path to production
          </h2>
          <p className="mx-auto mt-4.5 max-w-2xl text-[17px] text-[var(--lo-fg-mut)] md:text-[18px]">
            Join high-velocity teams shipping faster with automated pipelines,
            security guardrails and full data sovereignty — on your own private
            cloud.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3.5 lg:flex-row">
            <a
              href={data.cta.freeAccessLink}
              target="_blank"
              rel="noopener noreferrer"
              className="lo-mono group inline-flex items-center gap-2 rounded-[10px] bg-[var(--lo-accent)] px-5 py-3.5 text-[13.5px] font-semibold text-white transition-all hover:-translate-y-0.5 hover:shadow-[0_14px_34px_-12px_var(--lo-accent)]"
            >
              <PiPaperPlaneTilt size={18} />
              Access Free Tier Now
            </a>
            <a
              href={data.cta.vipAccessLink}
              target="_blank"
              rel="noopener noreferrer"
              className="lo-mono inline-flex items-center gap-2 rounded-[10px] border border-[var(--lo-line)] px-5 py-3.5 text-[13.5px] text-[var(--lo-fg)] transition-all hover:-translate-y-0.5 hover:border-[var(--lo-accent)] hover:text-[var(--lo-accent)]"
            >
              <PiAddressBook size={18} />
              Request VIP Access
            </a>
            <a
              href={data.cta.personalDemoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="lo-mono inline-flex items-center gap-2 rounded-[10px] border border-[var(--lo-line)] px-5 py-3.5 text-[13.5px] text-[var(--lo-fg)] transition-all hover:-translate-y-0.5 hover:border-[var(--lo-accent)] hover:text-[var(--lo-accent)]"
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
