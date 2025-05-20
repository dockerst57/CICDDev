import type { NextConfig } from "next";

const nextConfig: NextConfig = {
 reactStrictMode: false, // Enable React's Strict Mode
   output: 'export', // Use static export
   basePath: "/Billing-app", // Set the base path for the app
   trailingSlash: true, // Add trailing slashes to URLs
    images: {
       unoptimized: true, // Disable Next.js image optimization
      remotePatterns: [
        {
          protocol: "https", // Use HTTPS protocol
          hostname: "softthaiapp.com", // Allow images from this hostname
          port: "", // No specific port
          pathname: "**", // Allow all paths
        },
      ],
    },
};

export default nextConfig;
