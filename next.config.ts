import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static HTML export to ./out, served as static assets by Cloudflare Workers (see wrangler.jsonc) and Vercel.
  output: "export",
  // The default image loader needs a server; serve images as-is instead.
  images: { unoptimized: true },
};

export default nextConfig;
