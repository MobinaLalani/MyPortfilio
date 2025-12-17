import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true, // فعال کردن حالت Strict برای React
  images: {
    domains: ["images.unsplash.com"], // اجازه به تصاویر خارجی
  },
};

export default nextConfig;
