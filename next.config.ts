import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true, // فعال کردن حالت Strict برای React
  images: {
    domains: [
      "images.unsplash.com", // اجازه به تصاویر Unsplash
      "images.pexels.com", // اجازه به تصاویر Pexels
    ],
  },
};

export default nextConfig;
