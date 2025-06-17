import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: process.env.SERVER_URL + '/:path*',
      },
    ];
  },
};

export default nextConfig;
