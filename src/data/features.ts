import {
  PiArrowsOutFill,
  PiBridgeFill,
  PiBuildingApartmentFill,
  PiChartLineFill,
  PiCurrencyCircleDollarFill,
  PiFalloutShelterFill,
  PiFlowArrowFill,
  PiHammerFill,
  PiShieldCheckFill,
  PiGlobeFill,
  PiBrain,
  PiPackage,
} from 'react-icons/pi';

export const metadata = {
  title: 'Features',
  description:
    'A private, self-hosted platform that lets teams build, ship and operate AI agents and web apps responsibly — private cloud first, with software-engineering best practices enforced for humans and AI agents alike.',
};

export const features = [
  {
    title: 'Governance & Compliance',
    description:
      'Centrally manage users, teams, and roles, and enforce best practices across every app. Detailed audit trails capture every administrative action for accountability and transparency — the technical controls that support frameworks like GDPR, the EU AI Act, DORA and SOx.',
    icon: PiBuildingApartmentFill({ size: 32.5 }),
  },
  {
    title: 'Scalability',
    description:
      'Start new apps in minutes, scale up or down as needed, and manage your resources with ease.',
    icon: PiArrowsOutFill({ size: 32.5 }),
  },
  {
    title: 'Automation',
    description:
      'Streamline builds with fully automated pipelines that run unit tests and check for best practices. Identify vulnerabilities early for smoother deployments.',
    icon: PiFlowArrowFill({ size: 32.5 }),
  },
  {
    title: 'Self-Service',
    description:
      'Developers can deploy and manage their applications in your private cloud or on-premises with a few clicks.',
    icon: PiHammerFill({ size: 32.5 }),
  },
  {
    title: 'Monitoring & Logging',
    description:
      'Monitor your application’s health in real-time, tracking hardware metrics, user activity, and system status to proactively address issues. Access and manage applications logs with customizable log levels at ease.',
    icon: PiChartLineFill({ size: 32.5 }),
  },
  {
    title: 'Disaster Recovery',
    description:
      'Easily manage, download, and restore backups, or upload from local storage. Ensure your applications are always available and can be recovered quickly in case of a disaster.',
    icon: PiFalloutShelterFill({ size: 32.5 }),
  },
  {
    title: 'Infrastructure',
    description:
      'Low-Ops is installed on any Kubernetes compatible infrastructure. This includes any cloud provider like AWS, GCP, Azure, or even on-premises.',
    icon: PiBridgeFill({ size: 32.5 }),
  },
  {
    title: 'Security',
    description:
      'Developers are informed about the security of their applications and can take actions to improve the security of their applications. Low-Ops also provides timely security updates and patches to keep your applications, data and platform services secure.',
    icon: PiShieldCheckFill({ size: 32.5 }),
  },
  {
    title: 'Sovereignty',
    description:
      'Low-Ops runs on your own infrastructure, giving you complete control and sovereignty over your data and AI applications. Keep sensitive data in-region and in your control to satisfy strict data-residency and compliance requirements.',
    icon: PiGlobeFill({ size: 32.5 }),
  },
  {
    title: 'Cost effective',
    description:
      'We prioritize resource sharing to keep costs down — for example, a single database cluster serves multiple applications. Onboarding a new app takes minutes, and offboarding one is just a few clicks, so cleaning up irrelevant apps is a breeze.',
    icon: PiCurrencyCircleDollarFill({ size: 32.5 }),
  },
  {
    title: 'AI ready & de-risked',
    description:
      'Our app templates are AI ready, with a Low-Ops app specification that agents and AI assistants use to build compatible apps. MCP support lets agents deploy directly, while built-in guardrails and best-practice scanning protect your IP, compliance and brand reputation.',
    icon: PiBrain({ size: 32.5 }),
  },
  {
    title: 'Any app type',
    description:
      'Low-Ops does not limit you to a specific app type. You can build and deploy web apps, AI agents, APIs and background services — anything that can be packaged with Docker.',
    icon: PiPackage({ size: 32.5 }),
  },
];
