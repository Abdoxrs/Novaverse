import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable static HTML export (replaces deprecated `next export` behavior)
  // See: https://nextjs.org/docs/app/building-your-application/deploying/static-exports
  output: 'export',
};

export default nextConfig;
