const strips = [
  { icon: '⚡', label: 'Instant Deploy', sub: 'One command, any environment', bg: 'rgba(79,158,255,0.12)' },
  { icon: '🤖', label: 'Claude Plugin', sub: 'AI ops in your workflow', bg: 'rgba(0,229,195,0.12)' },
  { icon: '🔗', label: 'MCP Native', sub: 'Model Context Protocol built-in', bg: 'rgba(167,139,250,0.12)' },
  { icon: '📊', label: 'Auto-scale', sub: 'Zero config scaling', bg: 'rgba(251,146,60,0.12)' },
];

export default function FeaturesStrip() {
  return (
    <div
      className="relative z-10 grid grid-cols-2 lg:grid-cols-4 gap-px"
      style={{ background: 'var(--color-lo-border)', borderBottom: '1px solid var(--color-lo-border)' }}
    >
      {strips.map((item) => (
        <div
          key={item.label}
          className="flex items-center gap-3 px-4 sm:px-6 lg:px-8 py-5 sm:py-7"
          style={{ background: 'var(--color-lo-bg)' }}
        >
          <div
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg flex items-center justify-center text-sm sm:text-base shrink-0"
            style={{ background: item.bg }}
          >
            {item.icon}
          </div>
          <div className="min-w-0">
            <div className="text-xs sm:text-sm font-semibold truncate" style={{ color: 'var(--color-lo-text)' }}>
              {item.label}
            </div>
            <div className="text-xs mt-0.5 leading-tight" style={{ color: 'var(--color-lo-muted)' }}>
              {item.sub}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
