import CtaLink from '@/components/CtaLink';
import PageShell from '@/components/PageShell';
import SectionHero from '@/components/SectionHero';
import Reveal from '@/components/animations/Reveal';
import data from '@/data';
import { pageMetadata } from '@/lib/metadata';
import SplitHead from '@/sections/landing/SplitHead';
import type { Metadata } from 'next';

export const metadata: Metadata = pageMetadata({
  title: 'Request a demo',
  description:
    'Request a 45-minute Low-Ops working session. We will contact you to schedule, usually within one business day. See one app deployed, its access controlled, and its deployment history reviewed.',
  path: '/request-demo',
});

const WHAT_YOU_SEE = [
  'One supported app deployed into a governed environment',
  'End-user access behind SSO / your identity provider',
  'Ownership, audit trail and deployment history in the portal',
  'What a rollback or restore looks like on that stack',
];

const RequestDemoPage = () => {
  return (
    <PageShell>
      <SectionHero
        kicker="Request a demo"
        title="A working session, scheduled after we receive your request."
        description="This is not an instant calendar booking. Submit the form and our team will contact you to schedule a 45-minute session, usually within one business day. Bring one internal app or AI prototype that is blocked on deployment, access or operational ownership."
      >
        <div className="flex flex-wrap gap-3">
          <CtaLink href={data.cta.personalDemoForm}>
            Continue to the request form
          </CtaLink>
          <CtaLink href={data.cta.pilotLink} variant="secondary">
            Prefer a scoped pilot?
          </CtaLink>
        </div>
      </SectionHero>

      <section className="py-16 md:py-24">
        <div className="container">
          <Reveal>
            <SplitHead
              index="01"
              kicker="What the session is"
              title={
                <>
                  See one app deployed, accessed, and{' '}
                  <span className="lo-em">handed to IT.</span>
                </>
              }
              side="The working-session language is the promise. The destination is a request form: we still need to find a slot. We will not pretend this page books a calendar."
            />
          </Reveal>
          <Reveal>
            <div className="lo-ledger grid-cols-1 md:grid-cols-2">
              <div className="lo-cell px-6 py-7 md:px-8">
                <h2 className="lo-display text-[22px] text-[var(--lo-fg)]">
                  Duration and response
                </h2>
                <ul className="mt-5 flex flex-col divide-y divide-[var(--lo-line)] border-t border-[var(--lo-line)] text-[14.5px] leading-relaxed text-[var(--lo-fg-mut)]">
                  <li className="py-3">45-minute working session</li>
                  <li className="py-3">
                    We contact you to schedule, typically within one business
                    day
                  </li>
                  <li className="py-3">
                    Name and work email are enough to start. The form may ask a
                    few extra details so we can prepare.
                  </li>
                </ul>
              </div>
              <div className="lo-cell px-6 py-7 md:px-8">
                <h2 className="lo-display text-[22px] text-[var(--lo-fg)]">
                  You should leave having seen
                </h2>
                <ul className="mt-5 flex flex-col divide-y divide-[var(--lo-line)] border-t border-[var(--lo-line)] text-[14.5px] leading-relaxed text-[var(--lo-fg-mut)]">
                  {WHAT_YOU_SEE.map((item) => (
                    <li key={item} className="py-3">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
          <Reveal>
            <p className="mt-8 max-w-[46em] text-[14px] leading-relaxed text-[var(--lo-fg-mut)]">
              Privacy: we use the details you submit to schedule and prepare the
              session. See the{' '}
              <a
                href="/privacy-policy"
                className="font-medium text-[var(--lo-fg)] underline decoration-[var(--lo-line-strong)] underline-offset-4"
              >
                privacy policy
              </a>
              . If you already have access,{' '}
              <a
                href={data.cta.loginLink}
                className="font-medium text-[var(--lo-fg)] underline decoration-[var(--lo-line-strong)] underline-offset-4"
              >
                log in
              </a>
              . If you want to provision a host yourself,{' '}
              <a
                href={data.cta.communityPageLink}
                className="font-medium text-[var(--lo-fg)] underline decoration-[var(--lo-line-strong)] underline-offset-4"
              >
                install Community
              </a>
              .
            </p>
            <div className="mt-8">
              <CtaLink href={data.cta.personalDemoForm}>
                Continue to the request form
              </CtaLink>
            </div>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
};

export default RequestDemoPage;
