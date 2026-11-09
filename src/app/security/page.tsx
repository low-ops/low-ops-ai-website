import CtaLink from '@/components/CtaLink';
import PageShell from '@/components/PageShell';
import SectionHero from '@/components/SectionHero';
import Reveal from '@/components/animations/Reveal';
import data from '@/data';
import { pageMetadata } from '@/lib/metadata';
import SplitHead from '@/sections/landing/SplitHead';
import type { Metadata } from 'next';

export const metadata: Metadata = pageMetadata({
  title: 'Security pack',
  description:
    'Buyer-facing Low-Ops security explanation: control-plane and workload boundaries, secrets, operator access, telemetry, identity, audit, patching, backup, recovery, and managed-service tenancy. Not a compliance certificate.',
  path: '/security',
});

const PACK = [
  {
    title: 'Boundaries',
    body: 'The control plane (portal, pipelines, identity adapter) and the workloads (your apps, agents, databases) run in the Kubernetes environment where Low-Ops is installed. They do not run in a multi-tenant public Low-Ops SaaS by default.',
  },
  {
    title: 'What stays inside that environment',
    body: 'Platform configuration, app images you deploy, database contents, secrets stored for those apps, and operational logs retained in the cluster or the sinks you attach.',
  },
  {
    title: 'What may leave',
    body: 'Anything an application is coded or configured to call: an external LLM, a SaaS API, a partner integration, or image pulls from a public registry. Self-hosting does not intercept those calls unless you add network policy.',
  },
  {
    title: 'Secrets',
    body: 'Application secrets are injected as configuration by the platform. You remain responsible for rotation policy and for secrets the apps themselves obtain at runtime.',
  },
  {
    title: 'Operator access',
    body: 'On self-hosted: your administrators. On managed service: named Low-Ops operators, under the tenancy model in the order. We do not require standing production access to your business applications.',
  },
  {
    title: 'Telemetry',
    body: 'Prometheus, Grafana and centralised logs are on by default inside your environment. We do not claim that no metric ever leaves — only that product telemetry is yours to route.',
  },
  {
    title: 'Identity',
    body: 'Keycloak adapts your identity provider. Teams and roles from that directory are enforced on the portal and on deployed apps. Supported IdP details are in the documentation; we do not list every connector as unique to Low-Ops.',
  },
  {
    title: 'Audit coverage',
    body: 'Create, build, deploy, start and stop actions by humans and agents are written to the audit log. Application-level events inside your code are your responsibility.',
  },
  {
    title: 'Patching',
    body: 'We keep platform components patched on the Professional/Enterprise path. You (or the managed-service contract) apply those upgrades. Community operators patch themselves.',
  },
  {
    title: 'Backup and recovery',
    body: 'Databases are backed up automatically. Restore, download and upload are portal actions. A tested restore is a customer (or managed-service) responsibility before production acceptance. Retention is configured per environment.',
  },
  {
    title: 'Managed-service tenancy',
    body: 'Two compatible models: (1) we operate Low-Ops in a cloud account or subscription in your name; (2) we operate it in a private cloud we run on your behalf. “Our secure, private cloud” in pricing refers to model 2. FAQ language about infrastructure under your name refers to model 1. The order states which applies.',
  },
  {
    title: 'Compliance language',
    body: 'Controls can support GDPR, the EU AI Act, NIS2, DORA, ISO 27001 and SOx evidence. Low-Ops is not a certificate, an audit, or a guarantee that a deployment is compliant or free of vendor concentration risk.',
  },
];

const SecurityPage = () => {
  return (
    <PageShell>
      <SectionHero
        kicker="Security pack"
        title="A technical explanation, not an absolute privacy slogan."
        description="SSO, audit logs and “your cloud” are table stakes in this category. The buying question is the boundary: what remains inside the customer environment, what may leave through configured services, and who is responsible for recovery."
      >
        <div className="flex flex-wrap gap-3">
          <CtaLink href={data.cta.requestDemoLink}>
            Ask these questions on a call
          </CtaLink>
          <CtaLink href="/licensing" variant="secondary">
            Commercial and licence terms
          </CtaLink>
        </div>
      </SectionHero>

      <section className="py-16 md:py-24">
        <div className="container">
          <Reveal>
            <SplitHead
              index="01"
              kicker="Control vs customer duty"
              title={
                <>
                  Use this pack in procurement.{' '}
                  <span className="lo-em">Then verify on your stack.</span>
                </>
              }
              side="This page describes the product as designed. It is not a penetration-test report, a SOC attestation, or legal advice."
            />
          </Reveal>
          <div className="grid grid-cols-1 gap-x-16 md:grid-cols-2">
            {PACK.map((item, i) => (
              <Reveal key={item.title} delay={(i % 2) * 0.04}>
                <div className="border-t border-[var(--lo-line-strong)] py-7">
                  <h2 className="lo-display text-[22px] text-[var(--lo-fg)]">
                    {item.title}
                  </h2>
                  <p className="mt-3 max-w-[38em] text-[15px] leading-relaxed text-[var(--lo-fg-mut)]">
                    {item.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
};

export default SecurityPage;
