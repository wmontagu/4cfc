import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',  // Enable static exports for Vercel deployment
  basePath: '',      // This will be automatically set by Vercel
  // The following settings optimize your app for Vercel's environment
  swcMinify: true,   // Minify with SWC instead of Terser for better performance
  reactStrictMode: true,
  // Ensure correct routing for Vercel's serverless functions
  trailingSlash: false,
};

export default nextConfig;
