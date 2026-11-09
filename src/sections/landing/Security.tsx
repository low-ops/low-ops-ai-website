import Reveal from '@/components/animations/Reveal';
import CtaLink from '@/components/CtaLink';
import data from '@/data';
import { FC } from 'react';
import SplitHead from './SplitHead';

const POINTS = [
  {
    n: '01',
    title: 'What stays in your environment',
    body: 'The control plane, app workloads, databases, secrets store and logs run where you install Low-Ops — your private cloud, data centre or named cloud tenancy.',
  },
  {
    n: '02',
    title: 'What may leave, if you configure it',
    body: 'An application can still call an external model, SaaS API or integration you attach. Self-hosting does not block those calls by itself. You decide which egress is allowed.',
  },
  {
    n: '03',
    title: 'Controls, not a certificate',
    body: 'SSO, audit logs, scanning, backups and private networking are the technical controls many frameworks ask for. Low-Ops does not make a deployment DORA-, GDPR- or ISO-compliant on its own.',
  },
  {
    n: '04',
    title: 'Managed service, still your name',
    body: 'Optional managed operations can run on infrastructure in your tenancy, or in a private cloud we operate. Either way the tenancy model is written down before you buy — see the security pack.',
  },
];

const Security: FC = () => {
  return (
    <section id="security" className="relative z-10 py-16 md:py-24">
      <div className="container">
        <Reveal>
          <SplitHead
            index="05"
            kicker="Security and data handling"
            title={
              <>
                Privacy is a boundary you control,{' '}
                <span className="lo-em">not an absolute claim.</span>
              </>
            }
            side="Self-hosting keeps the platform and its data stores inside the environment you choose. It does not mean data can never leave the organisation — only that egress happens through services you explicitly configure."
          />
        </Reveal>

        <div className="grid grid-cols-1 gap-x-16 md:grid-cols-2">
          {POINTS.map((point, i) => (
            <Reveal key={point.title} delay={i * 0.05}>
              <div className="grid grid-cols-[48px_1fr] gap-4 border-t border-[var(--lo-line-strong)] py-7 md:grid-cols-[64px_1fr] md:py-8">
                <span className="lo-mono pt-1 text-[13px] text-[var(--lo-accent)]">
                  {point.n}
                </span>
                <div>
                  <h3 className="lo-display text-[22px] text-[var(--lo-fg)] md:text-[24px]">
                    {point.title}
                  </h3>
                  <p className="mt-3 max-w-[34em] text-[15px] leading-relaxed text-[var(--lo-fg-mut)]">
                    {point.body}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-4">
            <CtaLink href={data.cta.securityLink} variant="ghost">
              Read the buyer-facing security pack
            </CtaLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Security;
