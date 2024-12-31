import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack(config, { dev }) {
    if (dev) {
      config.devtool = "source-map";
    }
    config.resolve.alias = {
      ...config.resolve.alias,
      'react-intersection-observer': 'react-intersection-observer/dist/index.mjs',
    };
    return config;
  },
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'magic-rainbow-app-01.s3.eu-west-1.amazonaws.com',
        pathname: '/**', // Matches all paths under this domain
      },
    ],
  },
};

export default nextConfig;
