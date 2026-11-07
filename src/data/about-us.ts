import begaImage from '@/assets/bega-lowops.png';
import viktorImage from '@/assets/viktor-lowops.png';
import xiwenImage from '@/assets/xiwen-lowops.png';
import type { StaticImageData } from 'next/image';

export const aboutMetadata = {
  title: 'About us',
  description:
    'Low-Ops.AI is built in Rotterdam by platform engineers who spent two decades building app platforms for regulated organisations. Our mission: let every domain expert build AI, and keep IT in control.',
};

export interface TeamMember {
  id: number;
  name: string;
  position: string;
  bio: string;
  image: StaticImageData;
  social: {
    linkedin?: string;
    github?: string;
  };
}

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: 'Steven (Xiwen) Cheng',
    position: 'CEO & Founder',
    bio: 'Twenty years of building software and cloud infrastructure for regulated organisations. Steven has seen too many good ideas die in an IT queue.',
    image: xiwenImage,
    social: {
      linkedin: 'https://linkedin.com/in/xiwen',
      github: 'https://github.com/xiwenc',
    },
  },
  {
    id: 2,
    name: 'Viktor Berlov',
    position: 'CTO & Co-founder',
    bio: 'Leads engineering with deep expertise in cloud architecture, platform engineering and DevOps. Viktor turns best practices into automation.',
    image: viktorImage,
    social: {
      linkedin: 'https://www.linkedin.com/in/viktor-berlov-728ba9110/',
      github: 'https://github.com/vktrbrlv',
    },
  },
  {
    id: 3,
    name: 'Bega Jumayev',
    position: 'Lead Developer',
    bio: 'Full-stack developer behind the self-service portal and MCP server — the parts of Low-Ops.AI domain experts actually touch.',
    image: begaImage,
    social: {
      linkedin: 'https://www.linkedin.com/in/begmuhommet/',
      github: 'https://github.com/begmuhommet',
    },
  },
];

/** What we believe — the GTM pillars written as principles. */
export const principles = [
  {
    title: 'The people who know the work should build the tool.',
    body: 'Generative AI has made domain experts capable of building software. The missing piece was never talent; it was a safe place to run what they build.',
  },
  {
    title: 'Governance is how you deploy, not a meeting afterwards.',
    body: 'SSO, pipelines, audit logs and backups should come up with the app — automatically. If IT has to bolt them on, speed and safety become a trade-off again.',
  },
  {
    title: 'Your data stays yours.',
    body: 'Self-hosted, private by default, on infrastructure under your name. We would rather lose a deal than ask a hospital or a ministry to ship patient or citizen data to our cloud.',
  },
  {
    title: 'Pay for value, not for curiosity.',
    body: 'Per-seat pricing punishes experimentation. We charge for apps in production and give every employee the freedom to try.',
  },
  {
    title: 'No lock-in, on principle.',
    body: 'The core is open source and built from standard components. If you can leave easily, we have to earn your renewal every month — which is how it should be.',
  },
];

/** The story in chapters (deliberately undated). */
export const milestones = [
  {
    year: 'Chapter 01',
    title: 'Two decades of platforms',
    body: 'Our founders spend their careers building custom app platforms for banks, insurers and public institutions — multi-year projects, teams of six, every time.',
  },
  {
    year: 'Chapter 02',
    title: 'Packaging the knowledge',
    body: 'At CINAQ in Rotterdam we start turning that collective knowledge into a reproducible product: proven open-source components, connected by automation, installable in a day.',
  },
  {
    year: 'Chapter 03',
    title: 'Low-Ops in production',
    body: 'Regulated customers run their internal apps on self-hosted Low-Ops. Financial services firms spin up white-label instances for clients at the push of a button.',
  },
  {
    year: 'Chapter 04',
    title: 'AI reaches the front line',
    body: 'Domain experts start building with AI assistants. The question changes from "who can code?" to "where does this run safely?" We add the MCP server and an app spec agents understand.',
  },
  {
    year: 'Now',
    title: 'Low-Ops.AI',
    body: 'The Internal Developer Platform for the AI era: self-service for domain experts, complete oversight for IT, no per-seat tax. Built for the mid-market and the partners who serve it.',
  },
];
