"use client";

import { useReveal } from "../hooks/useReveal";

const bullets = [
  'Standards-based: works with any MCP-compatible client',
  'Scoped permissions — agents only see what you allow',
  'Full audit trail of every AI-triggered action',
  'Add to Claude in two lines of config',
];

const nodes = [
  {
    dot: { bg: 'var(--color-lo-purple)', shadow: '0 0 6px var(--color-lo-purple)' },
    label: 'Claude / AI Agent',
    sub: 'MCP Client',
    indent: false,
    connector: false,
  },
  {
    dot: { bg: 'var(--color-lo-accent)', shadow: '0 0 6px var(--color-lo-accent)' },
    label: 'Low-Ops MCP Server',
    sub: 'Tools + Resources',
    indent: false,
    connector: true,
  },
  {
    dot: { bg: 'var(--color-lo-teal)', shadow: '0 0 6px var(--color-lo-teal)' },
    label: 'deploy_service',
    sub: 'Tool',
    indent: false,
    connector: true,
  },
  {
    dot: { bg: 'var(--color-lo-teal)', shadow: '0 0 6px var(--color-lo-teal)' },
    label: 'get_logs',
    sub: 'Tool',
    indent: true,
    connector: false,
  },
  {
    dot: { bg: 'var(--color-lo-teal)', shadow: '0 0 6px var(--color-lo-teal)' },
    label: 'scale_environment',
    sub: 'Tool',
    indent: true,
    connector: false,
  },
  {
    dot: { bg: 'var(--color-lo-teal)', shadow: '0 0 6px var(--color-lo-teal)' },
    label: 'list_deployments',
    sub: 'Tool',
    indent: true,
    connector: false,
  },
];

export default function McpSection() {
  const ref = useReveal<HTMLElement>();

  return (
    <section ref={ref} id="mcp" className="relative z-10" style={{ borderTop: '1px solid var(--color-lo-border)' }}>
      <div className="reveal container py-16 sm:py-24 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
        {/* Diagram */}
        <div
          className="rounded-xl p-6 sm:p-8 order-2 md:order-1"
          style={{
            background: 'var(--color-lo-surface)',
            border: '1px solid var(--color-lo-border2)',
            boxShadow: '0 0 60px rgba(167,139,250,0.08)',
          }}
        >
          <p
            className="text-xs tracking-widest uppercase mb-5"
            style={{ fontFamily: 'var(--font-mono)', color: 'var(--color-lo-dim)' }}
          >
            {"// MCP Architecture"}
          </p>
          {nodes.map((node, i) => (
            <div key={i}>
              {node.connector && (
                <div
                  className="w-0.5 h-4 mb-2.5 opacity-40"
                  style={{
                    marginLeft: 18,
                    background: 'linear-gradient(to bottom, var(--color-lo-accent), var(--color-lo-teal))',
                  }}
                />
              )}
              <div
                className="flex items-center gap-2.5 rounded-lg px-3.5 py-3 text-xs mb-2.5 cursor-default transition-colors duration-200"
                style={{
                  marginLeft: node.indent ? 16 : 0,
                  fontFamily: 'var(--font-mono)',
                  background: 'var(--color-lo-surface2)',
                  border: '1px solid var(--color-lo-border)',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'var(--color-lo-accent)')}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'var(--color-lo-border)')}
              >
                <span
                  className="w-2 h-2 rounded-full shrink-0"
                  style={{ background: node.dot.bg, boxShadow: node.dot.shadow }}
                />
                <span className="truncate" style={{ color: 'var(--color-lo-text)' }}>
                  {node.label}
                </span>
                <span className="ml-auto shrink-0 pl-2" style={{ color: 'var(--color-lo-dim)' }}>
                  {node.sub}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Text */}
        <div className="order-1 md:order-2">
          <p
            className="text-xs tracking-[0.12em] uppercase mb-4"
            style={{ fontFamily: 'var(--font-mono)', color: 'var(--color-lo-purple)' }}
          >
            {"// MCP Protocol"}
          </p>
          <h2
            className="font-extrabold leading-[1.1] mb-5"
            style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(26px, 4vw, 44px)', letterSpacing: '-1.5px' }}
          >
            Any AI agent.
            <br />
            Full control.
          </h2>
          <p className="text-sm leading-[1.75] mb-8" style={{ color: 'var(--color-lo-muted)' }}>
            Low-Ops ships a native MCP server that exposes your entire platform as structured tools. Any MCP-compatible
            agent — Claude, custom agents, or your own — can manage your infrastructure safely.
          </p>
          <ul className="flex flex-col gap-3 mb-8">
            {bullets.map((b) => (
              <li key={b} className="flex items-start gap-3 text-sm" style={{ color: 'var(--color-lo-muted)' }}>
                <span
                  className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0"
                  style={{ background: 'var(--color-lo-purple)', boxShadow: '0 0 8px var(--color-lo-purple)' }}
                />
                {b}
              </li>
            ))}
          </ul>

          {/* Config snippet */}
          <div
            className="rounded-lg px-5 py-4 overflow-x-auto"
            style={{ background: 'var(--color-lo-surface)', border: '1px solid var(--color-lo-border2)' }}
          >
            <p className="text-xs mb-3" style={{ fontFamily: 'var(--font-mono)', color: 'var(--color-lo-muted)' }}>
              # claude_desktop_config.json
            </p>
            <pre
              className="text-xs leading-relaxed"
              style={{ fontFamily: 'var(--font-mono)', color: 'var(--color-lo-text)' }}
            >
              <span>{'{\n'}</span>
              <span>{'  '}</span>
              <span style={{ color: 'var(--color-lo-accent)' }}>{'"low-ops"'}</span>
              <span>{': {\n'}</span>
              <span>{'    '}</span>
              <span style={{ color: 'var(--color-lo-teal)' }}>{'"url"'}</span>
              <span>{': '}</span>
              <span style={{ color: 'var(--color-lo-muted)' }}>{'"https://mcp.low-ops.com/sse"'}</span>
              <span>{'\n  }\n}'}</span>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
