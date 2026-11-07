'use client';

import Reveal from '@/components/animations/Reveal';
import CtaLink from '@/components/CtaLink';
import data from '@/data';
import {
  formatEur,
  monthlyPlatformCost,
  PRICING,
  ROI_ASSUMPTIONS,
} from '@/data/pricing';
import { FC, useId, useState } from 'react';
import SplitHead from './SplitHead';

type SliderProps = {
  label: string;
  hint?: string;
  value: number;
  min: number;
  max: number;
  step: number;
  format: (v: number) => string;
  onChange: (v: number) => void;
};

const Slider: FC<SliderProps> = ({
  label,
  hint,
  value,
  min,
  max,
  step,
  format,
  onChange,
}) => {
  const id = useId();
  return (
    <div className="border-t border-[var(--lo-line)] pt-5 first:border-t-0 first:pt-0">
      <div className="flex items-baseline justify-between gap-4">
        <label
          htmlFor={id}
          className="text-[15px] font-medium text-[var(--lo-fg)]"
        >
          {label}
        </label>
        <span className="lo-mono text-[15px] font-medium text-[var(--lo-fg)]">
          {format(value)}
        </span>
      </div>
      <input
        id={id}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="lo-range mt-4 w-full cursor-pointer"
      />
      {hint && (
        <p className="mt-2.5 text-[13px] text-[var(--lo-fg-dim)]">{hint}</p>
      )}
    </div>
  );
};

const Kpi: FC<{ label: string; value: string; accent?: boolean }> = ({
  label,
  value,
  accent,
}) => (
  <div className="lo-cell-dark px-5 py-5">
    <div className="lo-label text-[var(--lo-on-black-dim)]">{label}</div>
    <div
      className={`lo-display mt-2 text-[26px] md:text-[30px] ${
        accent ? 'text-[var(--lo-accent)]' : 'text-[var(--lo-on-black)]'
      }`}
    >
      {value}
    </div>
  </div>
);

type BarProps = {
  label: string;
  value: number;
  max: number;
  color: string;
  note?: string;
};

const Bar: FC<BarProps> = ({ label, value, max, color, note }) => (
  <div>
    <div className="flex items-baseline justify-between gap-4 text-[14px]">
      <span className="text-[var(--lo-on-black-mut)]">{label}</span>
      <span className="lo-mono font-medium text-[var(--lo-on-black)]">
        {formatEur(value)}
      </span>
    </div>
    <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-[var(--lo-black-line)]">
      <div
        className="h-full rounded-full transition-[width] duration-300"
        style={{
          width: `${max > 0 ? Math.max(1.5, (value / max) * 100) : 0}%`,
          background: color,
        }}
      />
    </div>
    {note && (
      <p className="mt-1.5 text-[12.5px] text-[var(--lo-on-black-dim)]">
        {note}
      </p>
    )}
  </div>
);

type TProps = {
  index?: string;
  kicker?: string;
  title?: React.ReactNode;
  side?: string;
  /** Section background: paper (default) or the deeper paper band. */
  tone?: 'paper' | 'band';
};

/**
 * Play 2 — the "digital employee" ROI pitch. Illustrative: the user controls
 * the assumptions, we only do the arithmetic. Value = domain-expert hours
 * returned + IT operations hours saved; cost = licence + own infrastructure.
 */
const RoiCalculator: FC<TProps> = ({
  index = '07',
  kicker = 'The digital employee ROI',
  title = (
    <>
      Three apps. Forty hours a month each.{' '}
      <span className="lo-em">Do the math.</span>
    </>
  ),
  side = 'Stop thinking about software costs and start thinking about operational overhead. Each app or agent a domain expert ships is a permanent digital employee. Adjust the assumptions to match your organisation.',
  tone = 'paper',
}) => {
  const [apps, setApps] = useState<number>(PRICING.professionalIncludedApps);
  const [hours, setHours] = useState(40);
  const [rate, setRate] = useState(60);
  const [infra, setInfra] = useState<number>(
    ROI_ASSUMPTIONS.defaultInfraMonthly,
  );

  const licence = monthlyPlatformCost(apps);
  const totalCost = licence + infra;

  const expertValue = apps * hours * rate;
  const itValue =
    apps * ROI_ASSUMPTIONS.itHoursSavedPerApp * ROI_ASSUMPTIONS.itHourlyRate;
  const totalValue = expertValue + itValue;

  const netMonthly = totalValue - totalCost;
  const netYearly = netMonthly * 12;
  const roi = totalCost > 0 ? (netMonthly / totalCost) * 100 : 0;
  const chartMax = Math.max(totalCost, expertValue, itValue);

  return (
    <section
      id="roi"
      className={`relative z-10 py-16 md:py-24 ${
        tone === 'band' ? 'bg-[var(--lo-ink-2)]' : ''
      }`}
    >
      <div className="container">
        <Reveal>
          <SplitHead index={index} kicker={kicker} title={title} side={side} />
        </Reveal>

        <Reveal delay={0.08} y={20}>
          <div className="grid grid-cols-1 overflow-hidden rounded-[8px] border border-[var(--lo-line-strong)] lg:grid-cols-[0.9fr_1.1fr]">
            {/* Inputs */}
            <div className="flex flex-col gap-5 bg-[var(--lo-surface)] p-6 md:p-9">
              <span className="lo-label mb-1 text-[var(--lo-fg-dim)]">
                Adjust your scenario
              </span>
              <Slider
                label="Active apps / agents"
                hint={`Professional includes ${PRICING.professionalIncludedApps}; each additional app is ${formatEur(PRICING.additionalAppMonthly)}/mo.`}
                value={apps}
                min={1}
                max={20}
                step={1}
                format={(v) => `${v}`}
                onChange={setApps}
              />
              <Slider
                label="Hours saved per app, per month"
                hint="A typical internal automation returns a working week of manual effort per month."
                value={hours}
                min={10}
                max={200}
                step={5}
                format={(v) => `${v} h`}
                onChange={setHours}
              />
              <Slider
                label="Domain expert hourly rate"
                hint="Fully loaded cost of the people doing the work today."
                value={rate}
                min={30}
                max={150}
                step={5}
                format={(v) => `${formatEur(v)}/h`}
                onChange={setRate}
              />
              <Slider
                label="Monthly infrastructure cost"
                hint="Your own servers or cloud tenancy. Set to what you already pay."
                value={infra}
                min={50}
                max={1000}
                step={50}
                format={(v) => formatEur(v)}
                onChange={setInfra}
              />
              <p className="mt-2 text-[12.5px] leading-relaxed text-[var(--lo-fg-dim)]">
                Assumes IT saves {ROI_ASSUMPTIONS.itHoursSavedPerApp} hours per
                app per month at {formatEur(ROI_ASSUMPTIONS.itHourlyRate)}/h
                thanks to the Low-Ops.AI automations (CI/CD, SSO, backups,
                monitoring).
              </p>
            </div>

            {/* Outcome */}
            <div
              data-tone="dark"
              className="flex flex-col bg-[var(--lo-black)] p-6 text-[var(--lo-on-black)] md:p-9"
            >
              <span className="lo-label mb-5 text-[var(--lo-on-black-dim)]">
                Outcome
              </span>
              <div className="lo-ledger-dark grid-cols-1 sm:grid-cols-3">
                <Kpi
                  label="Total monthly value"
                  value={formatEur(totalValue)}
                />
                <Kpi
                  label="Net monthly return"
                  value={`${netMonthly >= 0 ? '+' : '−'}${formatEur(Math.abs(netMonthly))}`}
                />
                <Kpi
                  label="Return on investment"
                  value={`${Math.round(roi).toLocaleString('en-US')}%`}
                  accent
                />
              </div>

              <div className="mt-7 border-t border-[var(--lo-black-line)] pt-6">
                <span className="lo-label text-[var(--lo-on-black-dim)]">
                  Value breakdown · per month
                </span>
                <div className="mt-5 flex flex-col gap-5">
                  <Bar
                    label="Total cost"
                    value={totalCost}
                    max={chartMax}
                    color="var(--lo-on-black-dim)"
                    note={`Licence ${formatEur(licence)} + infrastructure ${formatEur(infra)}`}
                  />
                  <Bar
                    label="Domain expert productivity"
                    value={expertValue}
                    max={chartMax}
                    color="var(--lo-accent)"
                    note={`${apps} × ${hours} h × ${formatEur(rate)}/h`}
                  />
                  <Bar
                    label="IT maintenance savings"
                    value={itValue}
                    max={chartMax}
                    color="var(--lo-green)"
                    note={`${apps} × ${ROI_ASSUMPTIONS.itHoursSavedPerApp} h × ${formatEur(ROI_ASSUMPTIONS.itHourlyRate)}/h`}
                  />
                </div>
              </div>

              <div className="mt-7 border-t border-[var(--lo-black-line)] pt-6">
                <div className="lo-label text-[var(--lo-on-black-dim)]">
                  Net value per year
                </div>
                <div className="lo-display mt-2 text-[36px] text-[var(--lo-on-black)] md:text-[44px]">
                  {formatEur(netYearly)}
                </div>
                <p className="mt-2 text-[13.5px] leading-relaxed text-[var(--lo-on-black-mut)]">
                  Unlimited creators included — the number of employees
                  experimenting never changes the price.
                </p>
              </div>

              <div className="mt-auto flex flex-wrap items-center gap-3 pt-8">
                <CtaLink
                  href={data.cta.personalDemoLink}
                  variant="inverse"
                  size="sm"
                >
                  Walk through this with us
                </CtaLink>
                <CtaLink
                  href="/pricing#plans"
                  variant="secondary"
                  size="sm"
                  className="border-[var(--lo-black-line)] text-[var(--lo-on-black)] hover:border-[var(--lo-on-black)]"
                >
                  See the plans
                </CtaLink>
              </div>
              <p className="mt-5 text-[12px] leading-relaxed text-[var(--lo-on-black-dim)]">
                Illustrative calculation based on your inputs and the
                Professional tier list price. Excludes the optional managed
                service add-on.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default RoiCalculator;
