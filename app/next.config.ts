import type { NextConfig } from "next";

const nextConfig: NextConfig = {
 reactStrictMode: false,
   output: 'export',
    basePath: "/Billing-app",
   trailingSlash: true,
    images: {
      unoptimized: true,
      remotePatterns: [
        {
          protocol: "https",
          hostname: "softthaiapp.com",
          port: "",
          pathname: "**",
        },
      ],
    },
};

export default nextConfig;
