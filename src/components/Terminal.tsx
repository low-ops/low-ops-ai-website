export default function Terminal() {
  return (
    <div
      className="rounded-xl overflow-hidden w-full"
      style={{
        background: "var(--color-lo-surface)",
        border: "1px solid var(--color-lo-border2)",
        boxShadow: "0 0 80px rgba(79,158,255,0.12), 0 40px 80px rgba(0,0,0,0.6)",
      }}
    >
      {/* Title bar */}
      <div
        className="flex items-center gap-2 px-4 py-3 shrink-0"
        style={{ background: "var(--color-lo-surface2)", borderBottom: "1px solid var(--color-lo-border)" }}
      >
        <span className="w-3 h-3 rounded-full shrink-0" style={{ background: "#ff5f57" }} />
        <span className="w-3 h-3 rounded-full shrink-0" style={{ background: "#febc2e" }} />
        <span className="w-3 h-3 rounded-full shrink-0" style={{ background: "#28c840" }} />
        <span
          className="ml-2 text-xs truncate"
          style={{ fontFamily: "var(--font-mono)", color: "var(--color-lo-muted)" }}
        >
          low-ops — Claude Plugin · MCP Active
        </span>
      </div>

      {/* Scrollable body */}
      <div className="terminal-scroll">
        <div
          className="px-5 sm:px-8 py-6 text-left leading-loose text-xs sm:text-sm"
          style={{ fontFamily: "var(--font-mono)", minWidth: "480px" }}
        >
          <div>
            <span style={{ color: "var(--color-lo-teal)" }}>claude@low-ops</span>{" "}
            <span style={{ color: "var(--color-lo-muted)" }}>~</span>{" "}
            <span style={{ color: "var(--color-lo-text)" }}>deploy production --env staging --scale auto</span>
          </div>
          <div>
            <span style={{ color: "var(--color-lo-muted)" }}>&nbsp; ✦ Connecting to MCP server... </span>
            <span style={{ color: "var(--color-lo-teal)" }}>connected</span>
          </div>
          <div>
            <span style={{ color: "var(--color-lo-muted)" }}>&nbsp; ✦ Analyzing infrastructure... </span>
            <span style={{ color: "var(--color-lo-accent)" }}>3 services detected</span>
          </div>
          <div>
            <span style={{ color: "var(--color-lo-muted)" }}>&nbsp; ✦ Running pre-flight checks... </span>
            <span style={{ color: "var(--color-lo-teal)" }}>all systems go</span>
          </div>
          <div>
            <span style={{ color: "var(--color-lo-teal)" }}>&nbsp; ✓ api-service</span>
            <span style={{ color: "var(--color-lo-muted)" }}> deployed in </span>
            <span style={{ color: "var(--color-lo-accent)" }}>4.2s</span>
          </div>
          <div>
            <span style={{ color: "var(--color-lo-teal)" }}>&nbsp; ✓ worker-service</span>
            <span style={{ color: "var(--color-lo-muted)" }}> deployed in </span>
            <span style={{ color: "var(--color-lo-accent)" }}>3.8s</span>
          </div>
          <div>
            <span style={{ color: "var(--color-lo-teal)" }}>&nbsp; ✓ scheduler</span>
            <span style={{ color: "var(--color-lo-muted)" }}> deployed in </span>
            <span style={{ color: "var(--color-lo-accent)" }}>2.1s</span>
          </div>
          <div>
            <span style={{ color: "var(--color-lo-purple)" }}>&nbsp; ◈ Claude AI: </span>
            <span style={{ color: "var(--color-lo-muted)" }}>All services healthy. Traffic auto-scaled ×2 based on current load.</span>
          </div>
          <div>&nbsp;</div>
          <div>
            <span style={{ color: "var(--color-lo-teal)" }}>claude@low-ops</span>{" "}
            <span style={{ color: "var(--color-lo-muted)" }}>~</span>{" "}
            <span
              className="cursor-blink inline-block align-middle"
              style={{ width: 8, height: 14, background: "var(--color-lo-accent)" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
