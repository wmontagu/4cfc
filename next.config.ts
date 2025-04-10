import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // For Vercel deployment, we should not use static export
  // output: 'export',  // Commented out to allow server-side rendering
  basePath: '',      // This will be automatically set by Vercel
  // The following settings optimize your app for Vercel's environment
  reactStrictMode: true,
  // Ensure correct routing for Vercel's serverless functions
  trailingSlash: false,
};

export default nextConfig;
