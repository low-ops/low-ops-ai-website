import type { NextConfig } from 'next';

/** Low-Ops: stateless container; use standalone output for Docker. */
const nextConfig: NextConfig = {
  output: 'standalone',
};

export default nextConfig;
