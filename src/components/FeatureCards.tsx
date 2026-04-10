"use client";

import { useReveal } from "../hooks/useReveal";

const features = [
  {
    num: "01", icon: "🚀", title: "One-Click Deploy",
    desc: "Push to production from any environment. Low-Ops handles rollbacks, zero-downtime updates, and environment promotion automatically.",
    tag: "Deploy", tagColor: "rgba(79,158,255,0.3)", tagText: "var(--color-lo-accent)",
  },
  {
    num: "02", icon: "🤖", title: "Claude AI Plugin",
    desc: "Talk to your infrastructure. Ask Claude to deploy a service, analyze logs, scale pods, or diagnose issues — in plain English, right inside Claude.ai.",
    tag: "AI · New", tagColor: "rgba(0,229,195,0.3)", tagText: "var(--color-lo-teal)",
  },
  {
    num: "03", icon: "🔗", title: "MCP Server",
    desc: "Low-Ops exposes a native MCP server so any MCP-compatible AI agent can control your deployments, query logs, and trigger actions securely.",
    tag: "MCP · New", tagColor: "rgba(167,139,250,0.3)", tagText: "var(--color-lo-purple)",
  },
  {
    num: "04", icon: "📈", title: "Intelligent Scaling",
    desc: "Predictive autoscaling driven by AI models that learn your traffic patterns and scale before bottlenecks appear — not after.",
    tag: "Auto-scale", tagColor: "rgba(79,158,255,0.3)", tagText: "var(--color-lo-accent)",
  },
  {
    num: "05", icon: "🔐", title: "Zero-Trust Security",
    desc: "Every action is audited. Role-based access, encrypted secrets, and SOC2-compliant audit logs come out of the box with no configuration needed.",
    tag: "Security", tagColor: "rgba(79,158,255,0.3)", tagText: "var(--color-lo-accent)",
  },
  {
    num: "06", icon: "📡", title: "Real-time Observability",
    desc: "Live metrics, structured logs, distributed traces, and anomaly detection — all in one dashboard with AI-powered root cause analysis.",
    tag: "Observe", tagColor: "rgba(79,158,255,0.3)", tagText: "var(--color-lo-accent)",
  },
];

export default function FeatureCards() {
  const ref = useReveal<HTMLDivElement>(true);

  return (
    <div ref={ref} className="relative z-10">
      {/* Header */}
      <div className="reveal container text-center py-20">
        <span
          className="text-xs tracking-[0.12em] uppercase"
          style={{ fontFamily: "var(--font-mono)", color: "var(--color-lo-accent)" }}
        >
          {"// core platform"}
        </span>
        <h2
          className="font-extrabold leading-[1.1] mt-4 mb-5"
          style={{ fontFamily: "var(--font-display)", fontSize: "clamp(28px, 5vw, 52px)", letterSpacing: "-1.5px" }}
        >
          Everything ops.<br />Nothing extra.
        </h2>
        <p className="text-base sm:text-lg max-w-lg mx-auto" style={{ color: "var(--color-lo-muted)" }}>
          Low-Ops gives your team a single platform to deploy, monitor, and manage
          infrastructure — with AI built into every layer.
        </p>
      </div>

      {/* Grid — full-bleed with gap-px trick */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px"
        style={{
          borderTop: "1px solid var(--color-lo-border)",
          borderBottom: "1px solid var(--color-lo-border)",
          background: "var(--color-lo-border)",
        }}
      >
        {features.map((f) => (
          <div
            key={f.num}
            className="reveal px-6 sm:px-8 lg:px-10 py-8 sm:py-10 cursor-default transition-colors duration-300"
            style={{ background: "var(--color-lo-bg)" }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "var(--color-lo-surface)")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "var(--color-lo-bg)")}
          >
            <div className="text-xs mb-4" style={{ fontFamily: "var(--font-mono)", color: "var(--color-lo-dim)" }}>
              {f.num}
            </div>
            <div
              className="w-11 h-11 rounded-xl flex items-center justify-center text-xl mb-5"
              style={{ border: "1px solid var(--color-lo-border2)", background: "var(--color-lo-surface2)" }}
            >
              {f.icon}
            </div>
            <h3
              className="font-bold text-lg sm:text-xl mb-3"
              style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.5px" }}
            >
              {f.title}
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: "var(--color-lo-muted)" }}>
              {f.desc}
            </p>
            <span
              className="inline-block mt-5 text-xs px-2.5 py-1 rounded"
              style={{ fontFamily: "var(--font-mono)", border: `1px solid ${f.tagColor}`, color: f.tagText }}
            >
              {f.tag}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
