/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "localhost",
      },
      {
        hostname: "**.cdninstagram.com",
        protocol: "https",
      },
    ],
  },
};

export default nextConfig;
