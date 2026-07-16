import type { NextConfig } from 'next';
import path from 'path';

/** Low-Ops: stateless container; use standalone output for Docker. */
const nextConfig: NextConfig = {
  output: 'standalone',
  images: {
    qualities: [100, 75],
  },
  turbopack: {
    root: path.resolve(__dirname),
  },
};

export default nextConfig;
