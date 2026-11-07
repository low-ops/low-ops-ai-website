export const metadata = {
  title: 'Features',
  description:
    'Everything a digital employee needs to live: a self-service portal and MCP server for domain experts, central oversight, SSO, pipelines and backups for IT, and per-app pricing with an open-source core for the business.',
};

export type Feature = {
  title: string;
  description: string;
};

export type FeatureGroup = {
  id: string;
  index: string;
  audience: string;
  title: string;
  titleEm: string;
  side: string;
  features: Feature[];
};

export const featureGroups: FeatureGroup[] = [
  {
    id: 'experts',
    index: '01',
    audience: 'For domain experts',
    title: 'Build your solution.',
    titleEm: 'Click deploy. Done.',
    side: 'The people who know the work should be able to ship the tool — without learning Kubernetes or waiting for a ticket. Everything below happens in the background.',
    features: [
      {
        title: 'Self-service portal',
        description:
          'Create an app from a template, pick an environment, click deploy. Development, staging and production side by side — start, stop and promote with a click.',
      },
      {
        title: 'Works with your AI assistant',
        description:
          'A small, documented app specification that Cursor, Claude Code, Copilot and other assistants understand natively. Describe the tool; the assistant writes it to spec.',
      },
      {
        title: 'MCP server',
        description:
          'The portal is also a Model Context Protocol server. Agents can create apps, build packages and deploy to environments directly — under the same roles and audit trail as humans.',
      },
      {
        title: 'Database, storage & queues included',
        description:
          'PostgreSQL, Redis, RabbitMQ and S3-compatible object storage provisioned per app and injected as configuration. No connection strings to hunt down.',
      },
      {
        title: 'Live on the corporate network, same day',
        description:
          'Deployed apps get a private URL behind company SSO, reachable only from the corporate network. Share the link with colleagues and start using it.',
      },
      {
        title: 'Any app type',
        description:
          'Web apps, AI agents, APIs, background workers and scheduled jobs — anything that can be packaged as a container.',
      },
    ],
  },
  {
    id: 'it',
    index: '02',
    audience: 'For IT and security',
    title: 'Complete oversight,',
    titleEm: 'without being the bottleneck.',
    side: 'Governance is how the platform deploys, not a review step bolted on afterwards. Every app gets the same guardrails on day one — so IT can say yes faster.',
    features: [
      {
        title: 'Central oversight portal',
        description:
          'Every application with its owner, environments, packages, deployments and status in one place. Finally an inventory of what the business is running.',
      },
      {
        title: 'Audit logs on everything',
        description:
          'Who created, built, deployed, started or stopped what — and when. Written automatically for every human and agent action, exportable for your auditors.',
      },
      {
        title: 'SSO, teams & roles',
        description:
          'Plugs into your identity provider via Keycloak. Teams and roles from your directory are enforced on the portal and on every deployed app.',
      },
      {
        title: 'Automated pipelines',
        description:
          'Every build runs through CI/CD with linting, unit tests and vulnerability scanning. Reproducible packages traced back to their commit.',
      },
      {
        title: 'Private by default',
        description:
          'The platform and all apps run in your private cloud or on-premises, not exposed to the public internet. Data residency and sovereignty by construction.',
      },
      {
        title: 'Backups & disaster recovery',
        description:
          'Databases backed up automatically; restore, download or upload with a click. Recovery that works when you need it, not a runbook nobody tested.',
      },
      {
        title: 'Observability out of the box',
        description:
          'Prometheus, Grafana and centralised logs on by default. Health, resource usage and application logs per app with no stack to assemble.',
      },
      {
        title: 'Security updates handled',
        description:
          'We keep the platform and its dependencies patched. With the Managed Service add-on we also operate upgrades, monitoring and recovery for you.',
      },
    ],
  },
  {
    id: 'business',
    index: '03',
    audience: 'For the business',
    title: 'Digital employees,',
    titleEm: 'priced like value.',
    side: 'Software licensing decoupled from headcount, an open-source core so procurement sleeps at night, and infrastructure that stays yours.',
    features: [
      {
        title: 'Unlimited creators, no seat tax',
        description:
          'Every employee can experiment. You pay per app or agent in production — never for the number of people building.',
      },
      {
        title: 'Open-source core, no lock-in',
        description:
          'Kubernetes, PostgreSQL, Keycloak, Tekton and friends under the hood. Run the Community edition yourself, export everything, leave any time.',
      },
      {
        title: 'Runs anywhere Kubernetes runs',
        description:
          'Your own hardware, a private cloud, or a tenancy at AWS, Azure, GCP or a regional provider. Air-gapped on Enterprise.',
      },
      {
        title: 'Cost-efficient by design',
        description:
          'Shared platform services — one database cluster serving many apps — keep infrastructure costs low. Offboarding an app is a few clicks.',
      },
      {
        title: 'Compliance controls built in',
        description:
          'The technical controls behind GDPR, the EU AI Act, NIS2, DORA, ISO 27001 and SOx: private deployment, access management, scanning and audit trails.',
      },
      {
        title: 'Managed Service add-on',
        description:
          'No internal DevOps capacity? We run your Low-Ops.AI environment for you — ideal for lean IT teams and for MSP-delivered client platforms.',
      },
    ],
  },
];
