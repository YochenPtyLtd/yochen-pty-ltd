import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // The privacy policy is now site-wide at /privacy. Keep the old
      // product-specific URL working for anyone who saved it.
      {
        source: "/pdf-professional-suite/privacy",
        destination: "/privacy",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
