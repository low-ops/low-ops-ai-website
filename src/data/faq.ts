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
      'Low-Ops.AI is the Internal Developer Platform for the AI era: it lets domain experts build and deploy custom AI agents and web apps at rapid pace, while IT keeps complete oversight, governance and data privacy — on infrastructure you control.',
  },
  {
    title: 'Who is Low-Ops.AI for?',
    description:
      'Mid-market organisations — typically 100 to 400 employees with dedicated IT leadership — in regulated or data-sensitive sectors such as healthcare, government, pharma, financial services and construction, plus the MSPs and IT consultancies that serve them. That is where the gap between the ideas the business has and the apps IT can ship is widest.',
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
      'Low-Ops.AI is self-hosted by design: it runs in your private cloud, your on-premises data centre or your own tenancy at any cloud provider. Apps and agents are private by default and reachable only via the corporate network. If you have no internal DevOps capacity, our optional Managed Service add-on lets us run and operate your Low-Ops.AI environment for you — still on infrastructure that stays under your name.',
  },
  {
    title: 'How does pricing work?',
    description:
      'Software licensing is decoupled from headcount. The Community edition is free and open source. Professional starts at €499 per month, includes the centralised self-service portal, MCP server, automated pipelines and three apps or agents in production; each additional app is €39 per month. Unlimited creators, unlimited experiments — you only pay for the digital employees that actually make it to production.',
  },
  {
    title: 'How do I calculate the return on investment?',
    description:
      'Think of each app or agent as a permanent digital employee. If three apps each save one person 40 hours a month at a fully loaded cost of €60 per hour, that is €7,200 of value per month against €499 of platform cost — an ROI above 1,000%. Our ROI calculator on the home page lets you plug in your own numbers.',
  },
  {
    title: 'Am I locked in?',
    description:
      'No. The core engine is open source, built on industry-standard components such as Kubernetes, PostgreSQL and Keycloak, and your apps are ordinary containers. You can run the Community edition yourself, export everything, or leave at any time. The Professional tier buys you the governed portal and automated operations — not a cage.',
  },
  {
    title: 'How does Low-Ops.AI help with compliance?',
    description:
      'It provides the technical controls most frameworks ask for: private, self-hosted deployment for data residency and sovereignty, SSO and role-based access, automated security scanning in every pipeline, backups and complete audit trails. Teams use these to support GDPR, the EU AI Act, NIS2, DORA, ISO 27001 and SOx. Low-Ops.AI is an enabling platform, not a certificate — your processes still matter.',
  },
  {
    title: 'I am an MSP or IT consultancy. How do I work with you?',
    description:
      'You deploy a governed Low-Ops.AI environment per client, pass the Professional licence through and keep the margin on implementation and managed services. Partners receive training, co-marketing and a direct line to our engineers. See our MSP & consultancies solution page or the Partners page to get started.',
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
      'With the requirements in place, a Professional environment is installed in less than a day. Domain experts can deploy their first app the same afternoon.',
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
