/** @type {import('next').NextConfig} */
const nextConfig = {
  // Optimize for Vercel deployment
  reactStrictMode: true,
  trailingSlash: false,
  
  // Configure image optimization
  images: {
    unoptimized: true
  }
};

module.exports = nextConfig;
