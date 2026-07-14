'use client';

import Reveal from '@/components/animations/Reveal';
import GradientBg from '@/components/GradientBg';
import HeroTerminal from '@/components/HeroTerminal';
import { FC } from 'react';
import HeroButtons from './HeroButtons';

const HeroSection: FC = () => {
  return (
    <section className="relative flex w-full min-h-[calc(100vh-176px)] items-center overflow-hidden bg-[#0A0D14] py-10">
      <GradientBg />
      <div className="container relative z-10 w-full">
        <div className="relative z-2 mx-auto box-border flex max-w-[1100px] flex-col items-center pb-[90px] pt-[110px] text-center">
          <Reveal>
            <div className="mb-9 inline-flex items-center gap-2 rounded-full border border-[rgba(99,102,241,0.45)] bg-[rgba(99,102,241,0.1)] px-4 py-1.5 text-xs font-light md:font-medium tracking-wide text-indigo-300">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-400 shadow-[0_0_8px_#818cf8]" />
              The private, AI-native Internal Developer Platform
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="mb-7 max-w-[900px] text-[52px] md:text-[82px] font-extrabold leading-tight md:leading-[1.05] tracking-[0px]">
              <span className="text-slate-100">Build, deploy and manage apps </span>
              <span className="text-blue-500">responsibly </span>
              <span className="text-cyan-400">with AI</span>
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mb-11 max-w-[580px] text-lg font-normal leading-[1.7] text-slate-500">
              A private, self-hosted platform for high-velocity teams in
              regulated industries. Go from idea to production in minutes — with
              security guardrails, audit trails and full data sovereignty built
              in.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <HeroButtons />
          </Reveal>

          <Reveal delay={0.4}>
            <HeroTerminal />
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
