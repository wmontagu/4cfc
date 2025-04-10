import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Vercel deployment settings
  distDir: '.next',
  // The following settings optimize the app for Vercel
  reactStrictMode: true,
  trailingSlash: false,
  // Enable serverless deployment for Vercel
  images: {
    domains: [],
    unoptimized: true
  },
  // Ensure proper webpack configuration
  webpack: (config) => {
    // Custom webpack configurations if needed
    return config;
  }
};

export default nextConfig;
