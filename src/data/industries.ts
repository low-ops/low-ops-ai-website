import data from '@/data';
import {
  Banknote,
  FlaskConical,
  Handshake,
  HardHat,
  HeartPulse,
  Landmark,
  type LucideIcon,
} from 'lucide-react';

export type Industry = {
  slug: string;
  name: string;
  /** Short label for cards and nav. */
  shortName: string;
  navDescription: string;
  icon: LucideIcon;
  seo: { title: string; description: string };
  hero: {
    kicker: string;
    title: string;
    titleEm: string;
    subtitle: string;
    chipsLabel: string;
    chips: string[];
    primaryLabel: string;
    primaryHref: string;
  };
  /** Optional overrides for the section headers rendered by the template. */
  copy?: {
    stakes?: { title: string; titleEm: string; side: string };
    pains?: { kicker?: string; title: string; titleEm: string; side: string };
    useCasesSide?: string;
  };
  /** Rows for the illustrative portal mock in the hero. */
  portalRows?: {
    name: string;
    owner: string;
    kind: 'Agent' | 'App';
    status: 'running' | 'deploying' | 'review';
    meta: string;
  }[];
  stakes: { title: string; body: string }[];
  pains: { who: string; pain: string; detail: string }[];
  useCasesTitle: string;
  useCasesTitleEm: string;
  useCases: { title: string; owner: string; body: string }[];
  governance: { title: string; body: string }[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
    company: string;
  };
  cta: {
    kicker: string;
    title: string;
    titleEm: string;
    body: string;
    primaryLabel: string;
    primaryHref: string;
  };
};

const AUDIT_LABEL = 'Book a free Shadow AI audit';

export const industries: Industry[] = [
  {
    slug: 'healthcare',
    name: 'Healthcare',
    shortName: 'Healthcare',
    navDescription: 'Patient-data-safe AI for hospitals and care providers',
    icon: HeartPulse,
    seo: {
      title:
        'Low-Ops.AI for Healthcare — Governed AI for hospitals & care providers',
      description:
        'Let clinicians and care teams build and deploy their own AI agents and web apps inside your own network. Private by default, full audit trails, 100% self-hosted. End Shadow AI in healthcare.',
    },
    hero: {
      kicker: 'Low-Ops.AI for Healthcare',
      title: 'Let care teams build their own AI tools —',
      titleEm: 'without patient data ever leaving your network.',
      subtitle:
        'Clinicians, planners and administrators have more automation ideas than IT can ever deliver. Low-Ops.AI gives them a governed self-service portal to build and deploy AI agents and web apps inside your own infrastructure — with IT holding the keys.',
      chipsLabel: 'Supports your obligations under',
      chips: ['GDPR', 'EU AI Act', 'NIS2', 'HIPAA', 'ISO 27001', 'NEN 7510'],
      primaryLabel: AUDIT_LABEL,
      primaryHref: data.cta.shadowAiAuditLink,
    },
    stakes: [
      {
        title: 'Patient data is the most sensitive data there is',
        body: 'Every prompt pasted into a public AI tool is a potential breach. Private-by-default deployment keeps patient data inside the hospital boundary.',
      },
      {
        title: 'Clinical staff are already using AI',
        body: 'Summarising notes, drafting letters, triaging inboxes — often in unapproved tools. The question is not whether, but where and how governed.',
      },
      {
        title: 'IT is a bottleneck — not by choice',
        body: 'Small IT teams carry EHR integrations, uptime and security. Deploying one more internal app should not take a quarter.',
      },
    ],
    pains: [
      {
        who: 'CIO / CISO',
        pain: 'Shadow AI across departments',
        detail:
          'Dozens of unsanctioned tools, no audit trail, and no way to prove to regulators where patient data went.',
      },
      {
        who: 'Board & executives',
        pain: 'Transformation that stalls at the pilot',
        detail:
          'AI pilots that never reach production because nobody owns hosting, security and maintenance.',
      },
      {
        who: 'Care teams',
        pain: 'Weeks of waiting for a simple tool',
        detail:
          'A discharge-summary assistant or roster planner is a few hours of building — and months of tickets.',
      },
    ],
    useCasesTitle: 'Digital employees care teams could ship',
    useCasesTitleEm: 'this quarter.',
    useCases: [
      {
        title: 'Clinical documentation assistant',
        owner: 'Nursing & medical staff',
        body: 'Drafts discharge letters and referral summaries from structured notes, reviewed by the clinician before sending.',
      },
      {
        title: 'Shift & roster planner',
        owner: 'Ward management',
        body: 'Balances staffing against forecasted demand and surfaces gaps before they become overtime.',
      },
      {
        title: 'Patient intake triage agent',
        owner: 'Outpatient clinics',
        body: 'Pre-screens intake forms and routes them to the right pathway — entirely inside your network.',
      },
      {
        title: 'Policy & protocol Q&A',
        owner: 'Quality & compliance',
        body: 'A private assistant grounded in your own protocols, so staff stop guessing and stop searching the public web.',
      },
      {
        title: 'Supplier & inventory tracker',
        owner: 'Procurement',
        body: 'Replaces spreadsheet chaos with a small governed web app that everyone can see and audit.',
      },
      {
        title: 'Referral status dashboard',
        owner: 'Care coordination',
        body: 'A live view of referrals across departments, built by the people who chase them today.',
      },
    ],
    governance: [
      {
        title: 'Private by default',
        body: 'Every app and agent is reachable only from the corporate network unless IT explicitly decides otherwise.',
      },
      {
        title: 'Full audit trail',
        body: 'Who deployed what, when and where — evidence for DPOs, auditors and incident response.',
      },
      {
        title: 'SSO and role-based access',
        body: 'Plugs into your identity provider so access follows the same rules as every other hospital system.',
      },
      {
        title: '100% self-hosted, in-region',
        body: 'Runs on your own servers or private cloud. Data residency is a property of the architecture, not a promise in a contract.',
      },
    ],
    cta: {
      kicker: 'The Shadow AI audit',
      title: 'Find out how much Shadow AI is already in your',
      titleEm: 'hospital.',
      body: 'Book a free Shadow AI audit. We help you map which AI tools staff already use, where patient data goes, and how to bring it under one governed roof.',
      primaryLabel: AUDIT_LABEL,
      primaryHref: data.cta.shadowAiAuditLink,
    },
  },
  {
    slug: 'government',
    name: 'Government & public sector',
    shortName: 'Government',
    navDescription:
      'Sovereign, auditable AI for ministries, municipalities and agencies',
    icon: Landmark,
    seo: {
      title:
        'Low-Ops.AI for Government — Sovereign, auditable AI for the public sector',
      description:
        'Let civil servants build and deploy AI agents and web apps on sovereign, self-hosted infrastructure. EU AI Act-ready audit trails, open-source core, pay per app — not per seat.',
    },
    hero: {
      kicker: 'Low-Ops.AI for Government & public sector',
      title: 'Digital sovereignty and speed of delivery —',
      titleEm: 'finally on the same side.',
      subtitle:
        'Public bodies are under pressure to adopt AI and under obligation to keep citizen data sovereign, auditable and explainable. Low-Ops.AI lets civil servants build and deploy AI agents and web apps in your own data centre — with IT governance, procurement-friendly pricing and an open-source core.',
      chipsLabel: 'Supports your obligations under',
      chips: [
        'GDPR',
        'EU AI Act',
        'NIS2',
        'BIO',
        'ISO 27001',
        'Digital sovereignty',
      ],
      primaryLabel: AUDIT_LABEL,
      primaryHref: data.cta.shadowAiAuditLink,
    },
    stakes: [
      {
        title: 'Citizen data cannot leave the jurisdiction',
        body: 'Sovereignty is non-negotiable. Public AI tools that route data through third-country clouds are a compliance problem, not a convenience.',
      },
      {
        title: 'The EU AI Act demands traceability',
        body: 'Public-sector use cases carry heightened obligations: logging, human oversight and documentation. Audit trails must be built in, not bolted on.',
      },
      {
        title: 'Procurement rewards predictability',
        body: 'Per-seat AI licences explode as adoption spreads. Paying per deployed app is easier to budget, tender and defend.',
      },
    ],
    pains: [
      {
        who: 'CIO / CISO',
        pain: 'Shadow AI in every department',
        detail:
          'Policy teams, caseworkers and communications staff already use consumer AI. Nobody can say where the data went.',
      },
      {
        who: 'Executive leadership',
        pain: 'Transformation that never leaves the pilot',
        detail:
          'Innovation labs produce demos; production, hosting and maintenance never get an owner.',
      },
      {
        who: 'Civil servants',
        pain: 'Waiting a budget cycle for a form',
        detail:
          'A simple case-tracking app or document assistant is hours of building and a year of procurement.',
      },
    ],
    useCasesTitle: 'Digital employees your departments could ship',
    useCasesTitleEm: 'this quarter.',
    useCases: [
      {
        title: 'Case intake assistant',
        owner: 'Caseworkers',
        body: 'Classifies and routes incoming requests, with a human in the loop and every decision logged.',
      },
      {
        title: 'Policy document Q&A',
        owner: 'Policy & legal',
        body: 'A private assistant grounded in legislation, regulations and internal guidance.',
      },
      {
        title: 'Subsidy & permit tracker',
        owner: 'Permits & licensing',
        body: 'Replaces email-and-spreadsheet workflows with a small, auditable web app.',
      },
      {
        title: 'Public-records request helper',
        owner: 'Information management',
        body: 'Finds, redacts and compiles records inside the network — no public upload.',
      },
      {
        title: 'Citizen communication drafts',
        owner: 'Communications',
        body: 'Plain-language letter and notice drafting from approved templates and tone of voice.',
      },
      {
        title: 'Procurement intake agent',
        owner: 'Procurement',
        body: 'Collects requirements, checks thresholds and pre-fills tender documents.',
      },
    ],
    governance: [
      {
        title: 'Sovereign by architecture',
        body: 'Self-hosted on infrastructure you own or in a national / EU private cloud. No data path outside your control.',
      },
      {
        title: 'EU AI Act-ready logging',
        body: 'Deployments, access and changes are logged automatically, giving you the documentation trail regulators expect.',
      },
      {
        title: 'Open-source core, no lock-in',
        body: 'The engine is open source. Portability keeps you tender-compliant and vendor-independent.',
      },
      {
        title: 'Budget-friendly packaging',
        body: 'A fixed platform fee plus a small fee per production app. Unlimited creators, no per-seat licences to reconcile.',
      },
    ],
    cta: {
      kicker: 'The Shadow AI audit',
      title: 'Bring Shadow AI in your organisation into the',
      titleEm: 'light.',
      body: 'Book a free Shadow AI audit for your ministry, municipality or agency. We map current AI usage and show how to govern it on sovereign infrastructure.',
      primaryLabel: AUDIT_LABEL,
      primaryHref: data.cta.shadowAiAuditLink,
    },
  },
  {
    slug: 'pharma',
    name: 'Pharma & life sciences',
    shortName: 'Pharma',
    navDescription: 'GxP-aware AI for R&D, QA and regulatory teams',
    icon: FlaskConical,
    seo: {
      title:
        'Low-Ops.AI for Pharma & Life Sciences — Governed AI for R&D, QA and regulatory',
      description:
        'Give scientists, QA and regulatory teams a governed self-service portal to build and deploy AI agents and web apps inside your validated environment. Attributable audit trails, controlled promotion, 100% self-hosted.',
    },
    hero: {
      kicker: 'Low-Ops.AI for Pharma & life sciences',
      title: 'Accelerate science',
      titleEm: 'without compromising data integrity.',
      subtitle:
        'R&D, QA, regulatory and manufacturing teams want AI assistants for literature, deviations and submissions — but IP and GxP data cannot leave a validated environment. Low-Ops.AI gives scientists a governed self-service portal to build and deploy inside your own infrastructure, with IT and QA in control.',
      chipsLabel: 'Supports your obligations under',
      chips: [
        'GxP',
        'GAMP 5',
        'FDA 21 CFR Part 11',
        'EU Annex 11',
        'GDPR',
        'EU AI Act',
      ],
      primaryLabel: AUDIT_LABEL,
      primaryHref: data.cta.shadowAiAuditLink,
    },
    stakes: [
      {
        title: 'Your IP is your company',
        body: 'Molecule data, trial results and process know-how pasted into public AI tools is an irreversible leak. Private by default is the only acceptable default.',
      },
      {
        title: 'Data integrity is audited',
        body: 'ALCOA+ principles need attributable, traceable records. Who built, changed and deployed a tool matters as much as what it does.',
      },
      {
        title: 'Validated change is slow by design',
        body: 'Every new system goes through qualification. A platform that standardises how apps are built and deployed shrinks the surface that needs validating each time.',
      },
    ],
    pains: [
      {
        who: 'CIO / IT & QA leadership',
        pain: 'Ungoverned AI experiments across sites',
        detail:
          'Scientists trial tools faster than QA can assess them, with no central inventory or audit trail.',
      },
      {
        who: 'Executive leadership',
        pain: 'Stuck between pilot and production',
        detail:
          'Promising AI assistants die in the gap between the innovation lab and the validated environment.',
      },
      {
        who: 'Scientists & QA specialists',
        pain: 'Months for a tool that takes an afternoon',
        detail:
          'A deviation-triage assistant or sample tracker is hours of work — and an endless queue of change requests.',
      },
    ],
    useCasesTitle: 'Digital employees your teams could ship',
    useCasesTitleEm: 'this quarter.',
    useCases: [
      {
        title: 'Deviation & CAPA triage assistant',
        owner: 'Quality assurance',
        body: 'Classifies deviations, suggests root-cause categories and drafts CAPA language for QA review.',
      },
      {
        title: 'Literature & patent monitor',
        owner: 'R&D',
        body: 'A private agent that scans and summarises new publications against your research programmes.',
      },
      {
        title: 'Regulatory submission helper',
        owner: 'Regulatory affairs',
        body: 'Assembles sections from approved source documents with full traceability to the originals.',
      },
      {
        title: 'Lab inventory & sample tracker',
        owner: 'Lab operations',
        body: 'Replaces spreadsheets with a small governed web app, scannable from the bench.',
      },
      {
        title: 'SOP Q&A assistant',
        owner: 'Manufacturing & QC',
        body: 'Answers from current, approved SOPs only — nothing from the public web.',
      },
      {
        title: 'Clinical site communication drafts',
        owner: 'Clinical operations',
        body: 'Drafts site letters and status updates from trial-management data, reviewed before sending.',
      },
    ],
    governance: [
      {
        title: 'Separate, repeatable environments',
        body: 'Development, test and production environments per app, deployed the same way every time.',
      },
      {
        title: 'Attributable audit trail',
        body: 'Every build, deploy and access event is recorded — supporting ALCOA+ and Part 11 expectations.',
      },
      {
        title: 'Controlled promotion',
        body: 'Promotion to production is an explicit, logged step. Nothing reaches a validated environment by accident.',
      },
      {
        title: '100% self-hosted, in-region',
        body: 'Runs on your own infrastructure or private cloud. IP and GxP data never leave your boundary.',
      },
    ],
    cta: {
      kicker: 'The Shadow AI audit',
      title: 'Govern AI in R&D before the',
      titleEm: 'audit does.',
      body: 'Book a free Shadow AI audit. We help IT and QA map AI usage across sites and show how to centralise it on one governed, self-hosted platform.',
      primaryLabel: AUDIT_LABEL,
      primaryHref: data.cta.shadowAiAuditLink,
    },
  },
  {
    slug: 'finance',
    name: 'Financial services',
    shortName: 'Finance',
    navDescription: 'Compliance-first AI for banks, insurers and fintechs',
    icon: Banknote,
    seo: {
      title:
        'Low-Ops.AI for Financial Services — DORA-ready, self-hosted AI platform',
      description:
        'Let operations, risk and client teams build and deploy governed AI agents and web apps on your own infrastructure. Audit trails by default, SSO, resilience built in. Pay per app — never per seat.',
    },
    hero: {
      kicker: 'Low-Ops.AI for Financial services',
      title: 'Innovate like a fintech.',
      titleEm: 'Govern like a bank.',
      subtitle:
        'Operations, risk, compliance and client teams have a backlog of AI ideas. Low-Ops.AI gives them a governed self-service portal to build and deploy agents and web apps on your own infrastructure — with full audit trails, SSO and the operational resilience DORA expects.',
      chipsLabel: 'Supports your obligations under',
      chips: ['DORA', 'GDPR', 'EU AI Act', 'SOx', 'ISO 27001', 'PCI DSS'],
      primaryLabel: AUDIT_LABEL,
      primaryHref: data.cta.shadowAiAuditLink,
    },
    stakes: [
      {
        title: 'DORA makes ICT risk a board issue',
        body: 'Operational resilience, third-party risk and incident reporting now apply to every tool in production — including the ones nobody approved.',
      },
      {
        title: 'Client data in public AI is a reportable event',
        body: 'A single pasted statement or KYC file in a consumer AI tool can trigger breach obligations. Private by default removes the risk.',
      },
      {
        title: 'Per-seat AI is a tax on adoption',
        body: 'When every analyst experiments, seat licences explode. Pay for the apps that make it to production, not for curiosity.',
      },
    ],
    pains: [
      {
        who: 'CIO / CISO / CRO',
        pain: 'Shadow AI across front and back office',
        detail:
          "No inventory, no audit trail, and no way to answer the regulator's question: which models touch client data?",
      },
      {
        who: 'CEO / COO',
        pain: 'Innovation stuck behind compliance',
        detail:
          'Competitors ship AI-assisted operations; your pilots wait for hosting, security review and an owner.',
      },
      {
        who: 'Operations & client teams',
        pain: 'Weeks for a tool that saves hours daily',
        detail:
          'A reconciliation checker or onboarding tracker is an afternoon of building — and a quarter in the IT queue.',
      },
    ],
    useCasesTitle: 'Digital employees your teams could ship',
    useCasesTitleEm: 'this quarter.',
    useCases: [
      {
        title: 'KYC / onboarding assistant',
        owner: 'Client onboarding',
        body: 'Pre-checks documents, flags gaps and drafts follow-ups — inside your network, with every step logged.',
      },
      {
        title: 'Reconciliation exception triage',
        owner: 'Finance operations',
        body: 'Classifies breaks and proposes resolutions for human approval.',
      },
      {
        title: 'Policy & regulation Q&A',
        owner: 'Compliance',
        body: 'A private assistant grounded in your policies and current regulation, with sources cited.',
      },
      {
        title: 'Claims first-notice intake agent',
        owner: 'Insurance operations',
        body: 'Structures incoming claims, routes by severity and prepares the file for the handler.',
      },
      {
        title: 'Client reporting generator',
        owner: 'Relationship management',
        body: 'Drafts periodic client reports from approved data sources, reviewed before release.',
      },
      {
        title: 'White-label client portals',
        owner: 'Product teams',
        body: 'Spin up isolated instances per client or brand in minutes — on your own cloud.',
      },
    ],
    governance: [
      {
        title: 'Audit trail by default',
        body: 'Every deploy, change and access event is recorded — evidence for DORA, SOx and internal audit.',
      },
      {
        title: 'Private by default',
        body: 'Apps and agents are reachable only via the corporate network unless IT decides otherwise.',
      },
      {
        title: 'Resilience built in',
        body: 'Automated backups, environment separation and observability out of the box.',
      },
      {
        title: 'Self-hosted, in your jurisdiction',
        body: 'Your private cloud or data centre. Portable thanks to an open-source core — no concentration risk on a single vendor.',
      },
    ],
    testimonial: {
      quote:
        'The magic of Low-Ops.AI is that we — a regulated financial services business — can host our apps effortlessly in our own cloud and spin up unlimited instances for white-label clients in minutes, at the push of a button.',
      author: 'Emile Wegner',
      role: 'Managing Director',
      company: 'Efficient Group',
    },
    cta: {
      kicker: 'The Shadow AI audit',
      title: 'Bring Shadow AI under',
      titleEm: 'control.',
      body: 'Book a free Shadow AI audit. We help you inventory the AI tools your teams use today and show how to centralise them on one governed, DORA-ready platform.',
      primaryLabel: AUDIT_LABEL,
      primaryHref: data.cta.shadowAiAuditLink,
    },
  },
  {
    slug: 'construction',
    name: 'Construction & engineering',
    shortName: 'Construction',
    navDescription: 'Practical AI for projects, sites and the back office',
    icon: HardHat,
    seo: {
      title:
        'Low-Ops.AI for Construction & Engineering — Governed AI for projects and sites',
      description:
        'Let project, estimating and site teams build and deploy their own AI agents and web apps — self-hosted, private by default, with IT in control. Pay per app, not per head.',
    },
    hero: {
      kicker: 'Low-Ops.AI for Construction & engineering',
      title: 'Put AI to work on site and in the office —',
      titleEm: 'without a new IT project every time.',
      subtitle:
        'Project managers, estimators, planners and site teams know exactly which repetitive work to automate. Low-Ops.AI gives them a governed self-service portal to build and deploy small AI agents and web apps — hosted on your own infrastructure, with IT in control and no per-seat licence sprawl.',
      chipsLabel: 'Keeps your most sensitive data private',
      chips: [
        'Tender & bid data',
        'Contract terms',
        'ISO 19650',
        'ISO 27001',
        'GDPR',
        'NIS2',
      ],
      primaryLabel: AUDIT_LABEL,
      primaryHref: data.cta.shadowAiAuditLink,
    },
    stakes: [
      {
        title: 'Tender and contract data is competitive',
        body: 'Bids, margins and subcontractor terms in a public AI tool are a leak to the competition. Private by default protects the deal.',
      },
      {
        title: 'Margins are thin, overhead is high',
        body: 'Hours lost to re-keying, chasing documents and reporting are hours not spent building. Digital employees recover them.',
      },
      {
        title: 'Lean IT teams, many sites',
        body: 'A handful of IT staff supports dozens of projects. Deploying tools must be self-service, standardised and safe.',
      },
    ],
    pains: [
      {
        who: 'CIO / IT manager',
        pain: 'Spreadsheets, macros and rogue AI tools',
        detail:
          'Every project invents its own tooling. Nobody can maintain, secure or audit it.',
      },
      {
        who: 'CEO / COO',
        pain: 'Digitalisation that never scales past one project',
        detail:
          'A pilot works on one site; rolling it out to twenty needs hosting, accounts and an owner.',
      },
      {
        who: 'Project & site teams',
        pain: 'Waiting on IT for a simple tracker',
        detail:
          'A snag list, a daily-report assistant, a subcontractor portal — hours to build, months to get live.',
      },
    ],
    useCasesTitle: 'Digital employees your projects could ship',
    useCasesTitleEm: 'this quarter.',
    useCases: [
      {
        title: 'Tender document analyser',
        owner: 'Estimating & bid teams',
        body: 'Extracts requirements, deadlines and risks from tender packs into a structured checklist.',
      },
      {
        title: 'Daily site report assistant',
        owner: 'Site management',
        body: 'Turns photos and voice notes into structured daily reports, filed automatically.',
      },
      {
        title: 'Snag & defect tracker',
        owner: 'Project delivery',
        body: 'A mobile-friendly web app replacing spreadsheets and chat threads, with a full history.',
      },
      {
        title: 'Subcontractor compliance checker',
        owner: 'Procurement & HSE',
        body: 'Tracks certificates, insurance and expiry dates, nudging before they lapse.',
      },
      {
        title: 'RFI & change-order drafting agent',
        owner: 'Project controls',
        body: 'Drafts RFIs and change orders from meeting notes, in your templates, for review.',
      },
      {
        title: 'Equipment & asset tracker',
        owner: 'Plant & logistics',
        body: 'Where is it, who has it, when is it due back — in one governed app.',
      },
    ],
    governance: [
      {
        title: 'Private by default',
        body: 'Apps and agents are reachable only from your corporate network or VPN — including from site.',
      },
      {
        title: 'One place IT can see everything',
        body: 'Every app, owner, environment and deploy in a single oversight portal with audit logs.',
      },
      {
        title: 'Day-2 operations automated',
        body: 'SSO, CI/CD, backups and upgrades handled by the platform, not by an already-stretched IT team.',
      },
      {
        title: 'Pay per app, not per head',
        body: 'Unlimited creators across projects. Pay only for the tools that reach production.',
      },
    ],
    cta: {
      kicker: 'The Shadow AI audit',
      title: 'Turn spreadsheets and rogue tools into',
      titleEm: 'governed digital employees.',
      body: 'Book a free Shadow AI audit. We map what your projects already use and show how to centralise it — self-hosted, governed, and without a per-seat tax.',
      primaryLabel: AUDIT_LABEL,
      primaryHref: data.cta.shadowAiAuditLink,
    },
  },
  {
    slug: 'msp',
    name: 'MSPs & IT consultancies',
    shortName: 'MSP & consultancies',
    navDescription: 'Your deployment engine for client AI solutions',
    icon: Handshake,
    seo: {
      title:
        'Low-Ops.AI for MSPs & IT Consultancies — The deployment engine for client AI solutions',
      description:
        'Deliver client AI agents and web apps fast on infrastructure you do not have to build. Self-hosted environments per client, CI/CD, SSO and backups out of the box, pass-through licensing and a managed-service line.',
    },
    hero: {
      kicker: 'Low-Ops.AI for MSPs & IT consultancies',
      title: 'Deliver client AI solutions fast —',
      titleEm: "on infrastructure you don't have to build.",
      subtitle:
        'Boutique AI consultancies, digital-transformation agencies and MSPs win on speed to value. Low-Ops.AI is the deployment engine behind your client work: secure, self-hosted environments per client, automated CI/CD, SSO and backups out of the box — with the software licence passed straight through to the end client.',
      chipsLabel: 'Built for partners',
      chips: [
        'Environment per client',
        'White-label ready',
        'Pass-through licensing',
        'Managed-service margin',
        'Open-source core',
      ],
      primaryLabel: 'Talk to the partner team',
      primaryHref: data.cta.partnerLink,
    },
    copy: {
      stakes: {
        title: 'Why clients pick partners who ship —',
        titleEm: 'not partners who set up.',
        side: 'Your clients have the same Shadow AI problem as everyone else, and the same lean IT team. The partner who can deliver a governed solution inside their network in weeks, not quarters, wins the engagement and the relationship after it.',
      },
      pains: {
        title: 'Three roles, one platform,',
        titleEm: 'zero bespoke infrastructure.',
        side: 'The practice lead wants repeatability, the managing partner wants recurring revenue and the consultants want hand-overs that do not stall. Low-Ops.AI is built so each of them gets exactly that.',
      },
      useCasesSide:
        'From a dedicated environment per client to a managed-service line, Low-Ops.AI is the deployment engine behind your delivery — so your team spends its hours on client value, not on plumbing.',
    },
    portalRows: [
      {
        name: 'Client A · intake agent',
        owner: 'Client A delivery',
        kind: 'Agent',
        status: 'running',
        meta: 'prod · 22 days',
      },
      {
        name: 'Client B · ops dashboard',
        owner: 'Client B delivery',
        kind: 'App',
        status: 'running',
        meta: 'prod · 40 days',
      },
      {
        name: 'Client C · contract reviewer',
        owner: 'Client C delivery',
        kind: 'Agent',
        status: 'deploying',
        meta: '81%',
      },
      {
        name: 'White-label portal v2',
        owner: 'Product team',
        kind: 'App',
        status: 'review',
        meta: 'staging',
      },
    ],
    stakes: [
      {
        title: 'Clients want outcomes, not infrastructure projects',
        body: 'Every engagement that starts with "first we set up Kubernetes" burns margin and delays value.',
      },
      {
        title: "Heterogeneous client stacks don't scale",
        body: 'Ten clients, ten bespoke deployment setups, ten runbooks. Standardising is the only way to grow without growing headcount linearly.',
      },
      {
        title: 'Recurring revenue beats one-off builds',
        body: 'A governed platform per client creates a natural managed-service relationship beyond the initial project.',
      },
    ],
    pains: [
      {
        who: 'Practice lead / CTO',
        pain: 'Rebuilding the same infrastructure for every client',
        detail:
          'CI/CD, databases, SSO, backups, monitoring — assembled again and again before any client value ships.',
      },
      {
        who: 'Managing partner',
        pain: 'Projects that end when the invoice is paid',
        detail:
          'No platform to anchor an ongoing relationship, upsells or a managed-service line.',
      },
      {
        who: 'Delivery consultants',
        pain: "Hand-offs that stall at the client's IT department",
        detail:
          "The solution works; getting it hosted, secured and approved inside the client's network takes months.",
      },
    ],
    useCasesTitle: 'How partners put Low-Ops.AI',
    useCasesTitleEm: 'to work.',
    useCases: [
      {
        title: 'Dedicated environment per client',
        owner: 'Delivery',
        body: "Isolated, self-hosted Low-Ops.AI instances in each client's private cloud — or yours — provisioned in minutes.",
      },
      {
        title: 'White-label solution delivery',
        owner: 'Product & delivery',
        body: 'Ship the same agent or app to many clients as separate, governed instances.',
      },
      {
        title: 'Governed hand-over to client IT',
        owner: 'Delivery',
        body: "The client's IT gets a central oversight portal with audit logs and SSO from day one — approvals get easier.",
      },
      {
        title: 'Managed-service line',
        owner: 'Operations',
        body: 'Host and operate Professional or Enterprise environments for clients that lack DevOps capacity.',
      },
      {
        title: 'Agent-driven delivery via MCP',
        owner: 'Engineering',
        body: 'Your AI coding agents build and deploy directly against the client platform through the MCP server.',
      },
      {
        title: 'Pass-through licensing',
        owner: 'Commercial',
        body: 'The Professional licence is billed to the end client; you keep your services and managed-service margin.',
      },
    ],
    governance: [
      {
        title: 'Standardised across clients',
        body: 'One golden path for building, deploying and operating — the same on every engagement.',
      },
      {
        title: 'Private and auditable by default',
        body: "Client data stays in the client's network. Every action is logged, which shortens security reviews.",
      },
      {
        title: 'Open-source core',
        body: "No lock-in for you or your clients — a credible answer to procurement's portability question.",
      },
      {
        title: 'Partner support',
        body: 'Direct access to the Low-Ops.AI team and a listing on our partners page.',
      },
    ],
    testimonial: {
      quote:
        'The magic of Low-Ops.AI is that we — a regulated financial services business — can host our apps effortlessly in our own cloud and spin up unlimited instances for white-label clients in minutes, at the push of a button.',
      author: 'Emile Wegner',
      role: 'Managing Director',
      company: 'Efficient Group',
    },
    cta: {
      kicker: 'Partner programme',
      title: 'Make Low-Ops.AI your',
      titleEm: 'deployment engine.',
      body: "Talk to us about the partner programme. We'll walk through a client scenario end to end — environment, delivery, hand-over and pass-through licensing.",
      primaryLabel: 'Talk to the partner team',
      primaryHref: data.cta.partnerLink,
    },
  },
];

export const getIndustry = (slug: string) =>
  industries.find((industry) => industry.slug === slug);

const PORTAL_STATUSES = ['running', 'running', 'deploying', 'review'] as const;
const PORTAL_META = ['prod · 14 days', 'prod · 31 days', '78%', 'staging'];

/** Portal mock rows for the hero: explicit rows if set, else derived from use cases. */
export const portalRowsFor = (industry: Industry) =>
  industry.portalRows ??
  industry.useCases.slice(0, 4).map((u, i) => ({
    name: u.title,
    owner: u.owner,
    kind: (i % 2 === 0 ? 'Agent' : 'App') as 'Agent' | 'App',
    status: PORTAL_STATUSES[i],
    meta: PORTAL_META[i],
  }));
