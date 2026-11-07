import CtaLink from '@/components/CtaLink';
import { PLAN_ROW_KEYS, plans } from '@/data/plans';
import { cn } from '@/lib/utils';
import { Fragment } from 'react';

/** Pricing matrix: three plan columns, Professional set on a dark column. */
const PricingComparisonTable = () => {
  return (
    <>
      {/* Desktop */}
      <div className="hidden overflow-hidden rounded-[8px] border border-[var(--lo-line-strong)] lg:block">
        <div className="grid grid-cols-[1fr_1.1fr_1.1fr_1.1fr]">
          <div className="bg-[var(--lo-surface)] p-8">
            <span className="lo-label text-[var(--lo-fg-dim)]">Plans</span>
            <p className="mt-6 max-w-[16em] text-[14.5px] leading-relaxed text-[var(--lo-fg-mut)]">
              Every tier runs on infrastructure you control. The difference is
              how much of the operations we take off your plate.
            </p>
          </div>
          {plans.map((plan) => {
            const dark = plan.isPopular;
            return (
              <div
                key={plan.value}
                data-tone={dark ? 'dark' : undefined}
                className={cn(
                  'flex flex-col border-l border-[var(--lo-line)] p-8',
                  dark
                    ? 'border-[var(--lo-black-line)] bg-[var(--lo-black)] text-[var(--lo-on-black)]'
                    : 'bg-[var(--lo-surface)]',
                )}
              >
                <div className="flex items-center justify-between">
                  <span
                    className={cn(
                      'lo-label',
                      dark
                        ? 'text-[var(--lo-accent)]'
                        : 'text-[var(--lo-fg-dim)]',
                    )}
                  >
                    {plan.label}
                  </span>
                  {dark && (
                    <span className="lo-label text-[var(--lo-on-black-dim)]">
                      Most chosen
                    </span>
                  )}
                </div>
                <div className="mt-5 flex items-baseline gap-2">
                  <span
                    className={cn(
                      'lo-display text-[34px]',
                      dark
                        ? 'text-[var(--lo-on-black)]'
                        : 'text-[var(--lo-fg)]',
                    )}
                  >
                    {plan.price}
                  </span>
                  <span
                    className={cn(
                      'text-[13px]',
                      dark
                        ? 'text-[var(--lo-on-black-dim)]'
                        : 'text-[var(--lo-fg-dim)]',
                    )}
                  >
                    {plan.priceNote}
                  </span>
                </div>
                <p
                  className={cn(
                    'mt-3 text-[14px] leading-relaxed',
                    dark
                      ? 'text-[var(--lo-on-black-mut)]'
                      : 'text-[var(--lo-fg-mut)]',
                  )}
                >
                  <span
                    className={cn(
                      'lo-label mr-2',
                      dark
                        ? 'text-[var(--lo-on-black-dim)]'
                        : 'text-[var(--lo-fg-dim)]',
                    )}
                  >
                    Best for
                  </span>
                  {plan.description}
                </p>
                <div className="mt-auto pt-6">
                  <CtaLink
                    href={plan.link}
                    variant={dark ? 'inverse' : 'secondary'}
                    size="sm"
                    className="w-full"
                  >
                    {plan.ctaLabel}
                  </CtaLink>
                </div>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-[1fr_1.1fr_1.1fr_1.1fr]">
          {PLAN_ROW_KEYS.map((key) => (
            <Fragment key={key}>
              <div className="border-t border-[var(--lo-line)] bg-[var(--lo-surface-2)] px-8 py-3.5 text-[14px] font-medium text-[var(--lo-fg)]">
                {key}
              </div>
              {plans.map((plan) => {
                const dark = plan.isPopular;
                return (
                  <div
                    key={`${plan.value}-${key}`}
                    className={cn(
                      'flex items-center border-t border-l px-8 py-3.5 text-[14px]',
                      dark
                        ? 'border-[var(--lo-black-line)] bg-[var(--lo-black)] font-medium text-[var(--lo-on-black)]'
                        : 'border-[var(--lo-line)] bg-[var(--lo-surface)] text-[var(--lo-fg-mut)]',
                    )}
                  >
                    {plan.items[key]}
                  </div>
                );
              })}
            </Fragment>
          ))}
        </div>
      </div>

      {/* Mobile */}
      <div className="flex w-full flex-col gap-4 lg:hidden">
        {plans.map((plan) => {
          const dark = plan.isPopular;
          return (
            <article
              key={plan.value}
              data-tone={dark ? 'dark' : undefined}
              className={cn(
                'overflow-hidden rounded-[8px] border',
                dark
                  ? 'border-[var(--lo-black-line)] bg-[var(--lo-black)] text-[var(--lo-on-black)]'
                  : 'border-[var(--lo-line-strong)] bg-[var(--lo-surface)]',
              )}
            >
              <div className="p-6">
                <span
                  className={cn(
                    'lo-label',
                    dark
                      ? 'text-[var(--lo-accent)]'
                      : 'text-[var(--lo-fg-dim)]',
                  )}
                >
                  {plan.label}
                </span>
                <div className="mt-4 flex items-baseline gap-2">
                  <span
                    className={cn(
                      'lo-display text-[32px]',
                      dark
                        ? 'text-[var(--lo-on-black)]'
                        : 'text-[var(--lo-fg)]',
                    )}
                  >
                    {plan.price}
                  </span>
                  <span
                    className={cn(
                      'text-[13px]',
                      dark
                        ? 'text-[var(--lo-on-black-dim)]'
                        : 'text-[var(--lo-fg-dim)]',
                    )}
                  >
                    {plan.priceNote}
                  </span>
                </div>
                <p
                  className={cn(
                    'mt-2 text-[14px] leading-relaxed',
                    dark
                      ? 'text-[var(--lo-on-black-mut)]'
                      : 'text-[var(--lo-fg-mut)]',
                  )}
                >
                  {plan.description}
                </p>
                <div className="mt-5">
                  <CtaLink
                    href={plan.link}
                    variant={dark ? 'inverse' : 'secondary'}
                    size="sm"
                    className="w-full"
                  >
                    {plan.ctaLabel}
                  </CtaLink>
                </div>
              </div>
              <dl
                className={cn(
                  'divide-y border-t text-[13.5px]',
                  dark
                    ? 'divide-[var(--lo-black-line)] border-[var(--lo-black-line)]'
                    : 'divide-[var(--lo-line)] border-[var(--lo-line)]',
                )}
              >
                {PLAN_ROW_KEYS.map((key) => (
                  <div
                    key={`${key}-${plan.value}`}
                    className="flex items-start justify-between gap-4 px-6 py-3"
                  >
                    <dt
                      className={
                        dark
                          ? 'text-[var(--lo-on-black-mut)]'
                          : 'text-[var(--lo-fg-mut)]'
                      }
                    >
                      {key}
                    </dt>
                    <dd className="text-right font-medium">
                      {plan.items[key]}
                    </dd>
                  </div>
                ))}
              </dl>
            </article>
          );
        })}
      </div>
    </>
  );
};

export default PricingComparisonTable;
