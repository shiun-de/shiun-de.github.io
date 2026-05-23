/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  // Static export for GitHub Pages.
  output: 'export',
  images: { unoptimized: true },
  // GitHub Pages serves under https://shiun-de.github.io/homepage/ unless a
  // custom domain is set. basePath/assetPrefix make all asset URLs work
  // under that subpath. When you wire shiun.de as a custom domain (CNAME),
  // set NEXT_PUBLIC_BASE_PATH='' to disable both.
  basePath: process.env.NEXT_PUBLIC_BASE_PATH ?? '/homepage',
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH ?? '/homepage',
  trailingSlash: true,
};

export default nextConfig;
