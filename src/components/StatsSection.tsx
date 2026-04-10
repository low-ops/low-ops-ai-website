"use client";

import { useReveal } from "../hooks/useReveal";

const stats = [
  { prefix: "",  num: "99", suffix: ".9%", label: "Uptime SLA" },
  { prefix: "<", num: "5s", suffix: "",    label: "Average deploy time" },
  { prefix: "",  num: "50", suffix: "k+",  label: "Deployments per day" },
  { prefix: "",  num: "0",  suffix: "",    label: "Config files needed" },
];

export default function StatsSection() {
  const ref = useReveal<HTMLDivElement>(true);

  return (
    <div
      ref={ref}
      className="relative z-10 grid grid-cols-2 lg:grid-cols-4 gap-px"
      style={{
        borderTop: "1px solid var(--color-lo-border)",
        borderBottom: "1px solid var(--color-lo-border)",
        background: "var(--color-lo-border)",
      }}
    >
      {stats.map((s) => (
        <div
          key={s.label}
          className="reveal px-4 sm:px-8 py-8 sm:py-10 text-center"
          style={{ background: "var(--color-lo-bg)" }}
        >
          <div
            className="font-extrabold"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(32px, 6vw, 52px)",
              letterSpacing: "-2px",
              color: "var(--color-lo-text)",
            }}
          >
            {s.prefix && <span style={{ color: "var(--color-lo-accent)" }}>{s.prefix}</span>}
            {s.num}
            {s.suffix && <span style={{ color: "var(--color-lo-accent)" }}>{s.suffix}</span>}
          </div>
          <div className="text-xs sm:text-sm font-medium mt-2" style={{ color: "var(--color-lo-muted)" }}>
            {s.label}
          </div>
        </div>
      ))}
    </div>
  );
}
