import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  turbopack: {
    root: path.join(__dirname),
  },
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [
      {
        hostname: "assets.aceternity.com",
        protocol: "https",
        pathname: "/**",
      },
      {
        hostname: "www.aceternity.com",
        protocol: "https",
        pathname: "/**",
      },
      {
        hostname: "api.microlink.io",
        protocol: "https",
        pathname: "/**",
      },
      {
        hostname: "res.cloudinary.com",
        protocol: "https",
        pathname: "/**",
      },
      {
        hostname: "images.unsplash.com",
        protocol: "https",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;