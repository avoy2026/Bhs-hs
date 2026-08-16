import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  turbopack: {
    root: path.join(__dirname),
  },
  images: {
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