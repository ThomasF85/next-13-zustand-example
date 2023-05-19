/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "example-apis.vercel.app",
      },
    ],
  },
};

module.exports = nextConfig;
