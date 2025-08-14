import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Remove output: 'export' for Vercel (use server-side rendering)
  // output: 'export',
  trailingSlash: true,
  images: {
    // Enable optimized images for Vercel
    unoptimized: false
  },
  // Remove basePath and assetPrefix for Vercel
  // basePath: process.env.NODE_ENV === 'production' ? '/loveralokeswara.github.io' : '',
  // assetPrefix: process.env.NODE_ENV === 'production' ? '/loveralokeswara.github.io/' : '',
};

export default nextConfig;
