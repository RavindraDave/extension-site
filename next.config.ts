import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    unoptimized: true, // Required for static export
  },
  // Note: Headers are not supported in static export mode. 
  // We rely on meta tags in layout.tsx and platform-specific config (like _headers for Cloudflare, or meta tags for GH Pages).

  // Necessary for GitHub Pages project sites (e.g. username.github.io/repo-name)
  // Ensure you set this env var in your build pipeline if deploying to a subdirectory
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || "",
};

export default nextConfig;
