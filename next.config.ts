import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config) => {
    config.resolve.mainFields = ['module', 'main'];
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
