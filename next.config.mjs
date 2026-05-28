/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  // Static export for GitHub Pages (shiun-de.github.io).
  output: 'export',
  images: { unoptimized: true },
  // Served at the apex in prod; NEXT_PUBLIC_BASE_PATH lets a project-site
  // deployment under a subpath work without code changes.
  basePath: process.env.NEXT_PUBLIC_BASE_PATH ?? '',
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH ?? '',
  trailingSlash: true,
  experimental: {
    optimizePackageImports: ['three', '@react-three/drei', 'framer-motion'],
  },
  transpilePackages: ['three'],
};

export default nextConfig;
