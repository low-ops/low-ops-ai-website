import xiwenImage from '@/assets/xiwen-lowops.png';
import CtaLink from '@/components/CtaLink';
import Footer from '@/components/footer';
import Header from '@/components/header';
import { pageMetadata } from '@/lib/metadata';
import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = pageMetadata({
  title: 'Demo request received',
  description:
    'Thank you. Low-Ops.AI will contact you to schedule the working session.',
  path: '/demo-thank-you',
});

const Page = () => {
  return (
    <>
      <Header />
      <main className="relative overflow-hidden bg-[var(--lo-ink)] py-20 text-[var(--lo-fg)] md:py-32">
        <div
          className="lo-dots pointer-events-none absolute inset-x-0 top-0 h-[60%] [mask-image:linear-gradient(to_bottom,rgba(0,0,0,0.7),transparent)]"
          aria-hidden="true"
        />
        <div className="container relative">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
            <div>
              <span className="lo-label text-[var(--lo-fg-dim)]">
                Demo request received
              </span>
              <h1 className="lo-display mt-5 text-[40px] text-balance text-[var(--lo-fg)] md:text-[60px]">
                Thank you.{' '}
                <span className="lo-em">We will be in touch shortly.</span>
              </h1>
              <p className="mt-6 max-w-[34em] text-[16px] leading-relaxed text-[var(--lo-fg-mut)] md:text-[18px]">
                I will reach out personally to schedule your demo. If you have
                any questions in the meantime, write to me at{' '}
                <a
                  href="mailto:steven@low-ops.ai"
                  className="font-medium text-[var(--lo-fg)] underline decoration-[var(--lo-line-strong)] underline-offset-4 hover:text-[var(--lo-accent)]"
                >
                  steven@low-ops.ai
                </a>
                .
              </p>
              <div className="mt-8 border-t border-[var(--lo-line-strong)] pt-4">
                <span className="block text-[15px] font-semibold">
                  Steven (Xiwen) Cheng
                </span>
                <span className="block text-[13.5px] text-[var(--lo-fg-mut)]">
                  CEO &amp; Founder · Low-Ops.AI
                </span>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <CtaLink href="/solutions" variant="secondary">
                  Browse solutions by industry
                </CtaLink>
                <CtaLink href="/faq" variant="ghost">
                  Read the FAQ
                </CtaLink>
              </div>
            </div>
            <div className="relative mx-auto aspect-[4/5] w-full max-w-[320px] overflow-hidden rounded-[8px] border border-[var(--lo-line-strong)] bg-[var(--lo-ink-2)]">
              <Image
                src={xiwenImage}
                alt="Steven (Xiwen) Cheng, CEO & Founder"
                fill
                className="object-cover object-top grayscale"
                sizes="(max-width: 1024px) 320px, 33vw"
              />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Page;
