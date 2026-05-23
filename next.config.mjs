/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  // Static export for GitHub Pages.
  output: 'export',
  images: { unoptimized: true },
  // This repo IS the shiun-de user/org Pages site, served at the apex
  // (https://shiun-de.github.io/). No basePath needed. If you later add a
  // custom domain via CNAME, behavior stays identical.
  // NEXT_PUBLIC_BASE_PATH is honored if set (e.g. for a future project-site
  // deployment under a subpath), otherwise empty.
  basePath: process.env.NEXT_PUBLIC_BASE_PATH ?? '',
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH ?? '',
  trailingSlash: true,
};

export default nextConfig;
