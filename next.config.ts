import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // The blog was replaced by Pricing. statusCode 301 (not permanent: true,
      // which Next sends as 308). The :path* also matches a bare /blog.
      { source: "/blog/:path*", destination: "/pricing", statusCode: 301 },
    ];
  },
};

export default nextConfig;
