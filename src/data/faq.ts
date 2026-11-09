export type FaqItem = {
  title: string;
  description: string;
};

export type FaqGroup = {
  id: string;
  label: string;
  title: string;
  titleEm: string;
  side: string;
  items: FaqItem[];
};

export const faqDataStrategic: FaqItem[] = [
  {
    title: 'What is Low-Ops.AI in one sentence?',
    description:
      'Low-Ops.AI is the deployment and operations layer for internal apps and AI agents: it automates deployment, SSO, backups and operational visibility while your IT team controls access and infrastructure.',
  },
  {
    title: 'Who is Low-Ops.AI for?',
    description:
      'The first buyer is an IT director or technical CTO with a useful internal app already blocked by deployment, access or operational ownership. The business or automation lead is usually the champion. Mid-market organisations of roughly 100–400 employees with dedicated IT leadership are the typical fit; 400 employees is a recommendation, not an eligibility rule.',
  },
  {
    title: 'What is the cost of ideas that stay in the queue?',
    description:
      'The cost is the value that never starts. A domain expert can shape an agent or internal app in an afternoon, then wait weeks for a database, a login and somewhere to host it. Those hours stay manual. Low-Ops.AI is the paved road: they deploy from a self-service portal, and IT sees the owner, the audit log and the backup from the moment it exists.',
  },
  {
    title: 'How is this different from a low-code tool or an AI assistant?',
    description:
      'Low-code tools and AI assistants help someone build something. Low-Ops.AI is what that something runs on afterwards: a governed platform that provisions the database, CI/CD pipeline, SSO, backups and private hosting, records every action in an audit log, and gives IT a single place to see all apps and owners. Build with whatever tools you like — including AI coding assistants via our MCP server — then click deploy.',
  },
  {
    title: 'Who actually builds the apps and agents?',
    description:
      'Your domain experts — the people in finance, HR, legal, operations or the clinic who know the work. With modern AI assistants they can turn an idea into a working app in an afternoon. Low-Ops.AI gives them a paved road to production so they never have to wait weeks for IT, and gives IT the guardrails to say yes.',
  },
  {
    title: 'Where does my data live? Do you host the platform?',
    description:
      'Low-Ops.AI is self-hosted by design: it runs in your private cloud, data centre or named cloud tenancy. Apps are private by default and reachable only via the corporate network unless you expose them. Self-hosting does not stop an app from calling an external model or API you configure. The optional Managed Service add-on can run on infrastructure in your tenancy or in a private cloud we operate; we agree the tenancy model in writing.',
  },
  {
    title: 'How does pricing work?',
    description:
      'Community is free. Professional is €499 per month for three production apps or agents, then €39 per additional production app. Unlimited creators and users. Development and staging for a billed production app are included. Ten production apps are €772/month in software licensing (€499 + seven × €39) — a licence example, not a complete quote. Infrastructure, model/API usage, implementation, managed operations and tax are extra.',
  },
  {
    title: 'How do I calculate the return on investment?',
    description:
      'The ROI calculator on the pricing page is illustrative. Every assumption is editable, including claimed IT hours saved per app. Prefer your own baseline data. The calculator covers licence plus the infrastructure figure you enter; it does not include implementation, managed operations, model/API usage or tax.',
  },
  {
    title: 'Am I locked in?',
    description:
      'No. The core engine is open source, built on industry-standard components such as Kubernetes, PostgreSQL and Keycloak, and your apps are ordinary containers. You can run the Community edition yourself, export everything, or leave at any time. The Professional tier buys you the governed portal and automated operations — not a cage.',
  },
  {
    title: 'How does Low-Ops.AI help with compliance?',
    description:
      'It provides technical controls many frameworks ask for: self-hosted deployment, SSO, role-based access, pipeline scanning, backups and audit trails. Teams use these to support GDPR, the EU AI Act, NIS2, DORA, ISO 27001 and SOx. Low-Ops.AI is an enabling platform, not a certificate. A deployment does not automatically establish compliance or eliminate vendor concentration risk. See the security pack for control vs customer responsibilities.',
  },
  {
    title: 'I am an MSP or IT consultancy. How do I work with you?',
    description:
      'You deploy a governed environment per client. The end client holds the Professional licence; you earn on implementation and managed services. Onboarding steps, licence ownership, support escalation and delivery responsibilities are on the Partners page. Apply through the partner intake — not the generic demo form.',
  },
];

export const faqDataTechnical: FaqItem[] = [
  {
    title: 'What are the infrastructure requirements?',
    description:
      'Any Kubernetes-compatible platform with block storage and a load balancer — your own hardware, a private cloud or a tenancy at AWS, Azure, GCP or a regional provider. We can help you set one up if you do not have one yet.',
  },
  {
    title: 'How long does installation take?',
    description:
      'With the documented prerequisites in place, installing the platform itself is typically less than a day. That is not a guarantee for the whole customer rollout. First-app production approval — identity, network boundary, backups, ownership and a tested restore — is a separate checklist. See Community evaluation for single-node sizing and the pilot page for acceptance criteria.',
  },
  {
    title: 'What does a domain expert actually need to know?',
    description:
      'The Low-Ops.AI app specification is intentionally small: which port the app listens on, how it reads its database connection, and how it is packaged. AI assistants understand it natively, and we ship templates for common app types. Everything else — pipelines, SSO, hosting, backups — is handled by the platform.',
  },
  {
    title: 'How does the MCP server work?',
    description:
      'The portal exposes every action as an API and as a Model Context Protocol server. AI coding assistants such as Cursor, Claude Code or Copilot can create apps, trigger builds and deploy to environments directly — under exactly the same roles, guardrails and audit trail as a human clicking in the portal.',
  },
  {
    title: 'What does IT see in the oversight portal?',
    description:
      'Every application with its owner, environments (development, staging, production), packages traced back to their commit, scan results, deployments and a complete audit log of who did what and when. Teams and roles come from your identity provider via SSO.',
  },
  {
    title: 'Which app types are supported?',
    description:
      'Anything that can be packaged as a container: web apps, AI agents, APIs, background workers and scheduled jobs. Apps can share platform services such as PostgreSQL, Redis, RabbitMQ and object storage, which keeps infrastructure costs low.',
  },
  {
    title: 'How are security updates and backups handled?',
    description:
      'Every build runs through automated pipelines with linting and vulnerability scanning. Databases are backed up automatically and can be restored in a click. We keep the platform and its dependencies patched; with the Managed Service add-on we also operate upgrades, monitoring and recovery for you.',
  },
  {
    title: 'Which components are in the platform?',
    description:
      'An evolving set of proven open-source building blocks: Kubernetes, Tekton pipelines, Gitea, Harbor, Keycloak, PostgreSQL, Redis, RabbitMQ, MinIO, Prometheus and Grafana, connected and operated by Low-Ops.AI automation.',
  },
];

export const faqGroups: FaqGroup[] = [
  {
    id: 'strategic',
    label: 'For decision makers',
    title: 'The questions CIOs and CEOs',
    titleEm: 'ask us first.',
    side: 'Positioning, pricing, privacy and risk — the things that come up in the first conversation with IT leadership and the board.',
    items: faqDataStrategic,
  },
  {
    id: 'technical',
    label: 'For builders and operators',
    title: 'The questions IT teams and',
    titleEm: 'domain experts ask next.',
    side: 'Requirements, installation, the app spec, the MCP server and what runs under the hood.',
    items: faqDataTechnical,
  },
];
