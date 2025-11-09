import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  eslint: {
    // ✅ Ignore lint errors like "no-explicit-any" during build
    ignoreDuringBuilds: true,
  },
  typescript: {
    // ✅ Ignore TypeScript errors during production build
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
