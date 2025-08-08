import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // Remove this if your repo name is different
  basePath: process.env.NODE_ENV === 'production' ? '/loveralokeswara.github.io' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/loveralokeswara.github.io/' : '',
};

export default nextConfig;
