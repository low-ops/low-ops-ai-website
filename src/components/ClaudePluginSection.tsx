"use client";

import { useReveal } from "../hooks/useReveal";

const bullets = [
  'Deploy services with a single message — "deploy the api to staging"',
  "Ask Claude to diagnose incidents from your live logs",
  "Scale, restart, or rollback services instantly",
  "Get AI summaries of deployment health and anomalies",
];

type Message = { role: "user" | "ai"; text: React.ReactNode };

const messages: Message[] = [
  { role: "user", text: "Deploy payment-service to production" },
  {
    role: "ai",
    text: (
      <>
        Deploying{" "}
        <code style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--color-lo-teal)", background: "rgba(0,229,195,0.1)", padding: "1px 5px", borderRadius: 3 }}>
          payment-service@v2.4.1
        </code>{" "}
        to production. Running pre-flight checks…
      </>
    ),
  },
  {
    role: "ai",
    text: (
      <>
        ✓ Zero-downtime deploy in{" "}
        <code style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--color-lo-teal)", background: "rgba(0,229,195,0.1)", padding: "1px 5px", borderRadius: 3 }}>
          5.2s
        </code>
        . 3 replicas healthy, 100% traffic shifted.
      </>
    ),
  },
  { role: "user", text: "Anything look off in the logs?" },
  { role: "ai", text: "Logs look clean. p99 latency up 12ms vs baseline — likely cold-start. Should self-resolve in ~2 min. I'll keep watching." },
];

export default function ClaudePluginSection() {
  const ref = useReveal<HTMLElement>();

  return (
    <section
      ref={ref}
      id="claude-plugin"
      className="relative z-10"
      style={{ borderTop: "1px solid var(--color-lo-border)" }}
    >
      <div className="reveal container py-16 sm:py-24 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
        {/* Text */}
        <div>
          <p className="text-xs tracking-[0.12em] uppercase mb-4" style={{ fontFamily: "var(--font-mono)", color: "var(--color-lo-teal)" }}>
            {"// Claude Plugin"}
          </p>
          <h2
            className="font-extrabold leading-[1.1] mb-5"
            style={{ fontFamily: "var(--font-display)", fontSize: "clamp(26px, 4vw, 44px)", letterSpacing: "-1.5px" }}
          >
            Your ops team,<br />in your AI chat.
          </h2>
          <p className="text-sm leading-[1.75] mb-8" style={{ color: "var(--color-lo-muted)" }}>
            The Low-Ops Claude Plugin lets you manage your entire infrastructure
            through natural conversation. Deploy, debug, and scale without leaving your AI assistant.
          </p>
          <ul className="flex flex-col gap-3">
            {bullets.map((b) => (
              <li key={b} className="flex items-start gap-3 text-sm" style={{ color: "var(--color-lo-muted)" }}>
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "var(--color-lo-teal)", boxShadow: "0 0 8px var(--color-lo-teal)" }} />
                {b}
              </li>
            ))}
          </ul>
        </div>

        {/* Chat UI */}
        <div
          className="rounded-xl p-5 sm:p-7"
          style={{ background: "var(--color-lo-surface)", border: "1px solid var(--color-lo-border2)", boxShadow: "0 0 60px rgba(0,229,195,0.08)" }}
        >
          <div className="flex flex-col gap-3">
            {messages.map((msg, i) => (
              <div key={i} className={`flex gap-2.5 items-start ${msg.role === "user" ? "flex-row-reverse" : ""}`}>
                <div
                  className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold shrink-0"
                  style={{
                    background: msg.role === "ai" ? "rgba(79,158,255,0.2)" : "rgba(167,139,250,0.2)",
                    color: msg.role === "ai" ? "var(--color-lo-accent)" : "var(--color-lo-purple)",
                    border: msg.role === "ai" ? "1px solid rgba(79,158,255,0.3)" : "1px solid rgba(167,139,250,0.3)",
                  }}
                >
                  {msg.role === "ai" ? "AI" : "U"}
                </div>
                <div
                  className="px-3 py-2.5 text-xs sm:text-sm leading-relaxed"
                  style={{
                    maxWidth: "78%",
                    borderRadius: msg.role === "ai" ? "2px 8px 8px 8px" : "8px 2px 8px 8px",
                    background: msg.role === "ai" ? "var(--color-lo-surface2)" : "rgba(79,158,255,0.15)",
                    border: msg.role === "ai" ? "1px solid var(--color-lo-border)" : "1px solid rgba(79,158,255,0.25)",
                    color: "var(--color-lo-text)",
                  }}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
