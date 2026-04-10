"use client";

import { useReveal } from "../hooks/useReveal";

export default function CtaSection() {
  const ref = useReveal<HTMLElement>();

  return (
    <section
      ref={ref}
      className="relative z-10 overflow-hidden py-24 sm:py-32"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 800px 500px at 50% 50%, rgba(79,158,255,0.07) 0%, transparent 70%)" }}
      />
      <div className="reveal container text-center relative">
        <h2
          className="font-extrabold leading-[1.1] mb-5"
          style={{ fontFamily: "var(--font-display)", fontSize: "clamp(30px, 5vw, 60px)", letterSpacing: "-2px" }}
        >
          Start building.<br />Stop operating.
        </h2>
        <p className="text-base sm:text-lg max-w-md mx-auto mb-10" style={{ color: "var(--color-lo-muted)" }}>
          Join thousands of teams who let Low-Ops handle the infrastructure so
          they can focus on shipping product.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-sm sm:max-w-none mx-auto">
          <a
            href="#"
            className="no-underline px-7 py-3.5 rounded-lg text-base font-bold transition-all duration-200 text-center"
            style={{ background: "var(--color-lo-accent)", color: "var(--color-lo-bg)", boxShadow: "0 0 20px rgba(79,158,255,0.35)" }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "#6eb3ff"; e.currentTarget.style.boxShadow = "0 0 40px rgba(79,158,255,0.6)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "var(--color-lo-accent)"; e.currentTarget.style.boxShadow = "0 0 20px rgba(79,158,255,0.35)"; }}
          >
            Get started free →
          </a>
          <a
            href="#"
            className="no-underline px-7 py-3.5 rounded-lg text-base font-medium transition-all duration-200 text-center"
            style={{ border: "1px solid var(--color-lo-border2)", color: "var(--color-lo-text)" }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--color-lo-accent)"; e.currentTarget.style.color = "var(--color-lo-accent)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--color-lo-border2)"; e.currentTarget.style.color = "var(--color-lo-text)"; }}
          >
            Talk to us
          </a>
        </div>
      </div>
    </section>
  );
}
