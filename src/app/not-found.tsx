import CtaLink from '@/components/CtaLink';
import Footer from '@/components/footer';
import Header from '@/components/header';
import { LogoMark } from '@/components/Logo';

const NotFound = () => {
  return (
    <>
      <Header />
      <main className="relative overflow-hidden bg-[var(--lo-ink)] py-28 text-[var(--lo-fg)] md:py-40">
        <div
          className="lo-dots pointer-events-none absolute inset-0 [mask-image:radial-gradient(50%_60%_at_50%_40%,rgba(0,0,0,0.8),transparent)]"
          aria-hidden="true"
        />
        <div className="container relative flex flex-col items-start gap-8">
          <LogoMark className="h-14 w-14" />
          <div>
            <span className="lo-label text-[var(--lo-fg-dim)]">Error 404</span>
            <h1 className="lo-display mt-4 text-[44px] text-[var(--lo-fg)] md:text-[72px]">
              This page is <span className="lo-em">not in the portal.</span>
            </h1>
            <p className="mt-5 max-w-[34em] text-[16px] leading-relaxed text-[var(--lo-fg-mut)] md:text-[18px]">
              The page you are looking for does not exist or has been moved.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <CtaLink href="/">Back to home</CtaLink>
            <CtaLink href="/solutions" variant="secondary">
              Browse solutions
            </CtaLink>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default NotFound;
