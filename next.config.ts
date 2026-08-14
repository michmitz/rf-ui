import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  output: "export",
  agentRules: false,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
