'use client';

import Reveal from '@/components/animations/Reveal';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { faqGroups, type FaqGroup } from '@/data/faq';
import SplitHead from '@/sections/landing/SplitHead';
import { Plus } from 'lucide-react';
import React from 'react';

const Group: React.FC<{ group: FaqGroup; index: number }> = ({
  group,
  index,
}) => (
  <div className="py-16 first:pt-0 md:py-20">
    <Reveal>
      <SplitHead
        index={`0${index + 1}`}
        kicker={group.label}
        title={
          <>
            {group.title} <span className="lo-em">{group.titleEm}</span>
          </>
        }
        side={group.side}
      />
    </Reveal>
    <Reveal>
      <AccordionPrimitive.Root
        type="single"
        collapsible
        className="w-full border-t border-[var(--lo-line-strong)]"
      >
        {group.items.map((item, i) => (
          <AccordionPrimitive.Item
            key={item.title}
            value={item.title}
            className="group border-b border-[var(--lo-line)]"
          >
            <AccordionPrimitive.Header asChild>
              <h3 className="m-0">
                <AccordionPrimitive.Trigger className="grid w-full cursor-pointer grid-cols-[40px_1fr_auto] items-start gap-4 py-5 text-left transition-colors hover:text-[var(--lo-accent)] md:grid-cols-[72px_1fr_auto] md:gap-8 md:py-6">
                  <span className="lo-mono pt-1 text-[13px] text-[var(--lo-fg-dim)]">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="text-[17px] font-medium tracking-[-0.01em] text-[var(--lo-fg)] group-hover:text-inherit md:text-[20px]">
                    {item.title}
                  </span>
                  <Plus
                    size={18}
                    className="mt-1 shrink-0 text-[var(--lo-fg-dim)] transition-transform duration-200 group-data-[state=open]:rotate-45"
                  />
                </AccordionPrimitive.Trigger>
              </h3>
            </AccordionPrimitive.Header>
            <AccordionPrimitive.Content className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
              <div className="grid grid-cols-[40px_1fr] gap-4 pb-6 md:grid-cols-[72px_1fr_80px] md:gap-8">
                <span aria-hidden="true" />
                <p className="m-0 max-w-[62em] text-[15px] leading-relaxed text-[var(--lo-fg-mut)] md:text-[16px]">
                  {item.description}
                </p>
              </div>
            </AccordionPrimitive.Content>
          </AccordionPrimitive.Item>
        ))}
      </AccordionPrimitive.Root>
    </Reveal>
  </div>
);

const FaqSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24" id="faq">
      <div className="container">
        {faqGroups.map((g, i) => (
          <Group key={g.id} group={g} index={i} />
        ))}
      </div>
    </section>
  );
};

export default FaqSection;
