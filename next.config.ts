import type { NextConfig } from 'next';
import path from 'path';

/** GitHub Pages workflow sets this; otherwise we emit a Docker standalone server. */
const isGitHubPages = process.env.GITHUB_PAGES === 'true';

const nextConfig: NextConfig = {
  output: isGitHubPages ? 'export' : 'standalone',
  images: {
    qualities: [100, 75],
    ...(isGitHubPages ? { unoptimized: true } : {}),
  },
  turbopack: {
    root: path.resolve(__dirname),
  },
};

export default nextConfig;
