/** @format */

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config) => {
    config.resolve.mainFields = ["module", "main"];
    return config;
  },
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "magic-rainbow-app-01.s3.eu-west-1.amazonaws.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "demo-websites-resources.s3.eu-west-1.amazonaws.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "another-example-hostname.com",
        pathname: "/images/**",
      },
    ],
  },

  // Add server configuration for dynamic ports
  experimental: {
    serverComponentsExternalPackages: [],
  },
  // Ensure proper port binding
  output: "standalone",
};

export default nextConfig;
