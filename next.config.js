/** @type {import('next').NextConfig} */
const nextConfig = {
  "@": "./",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.riotgames.com",
      },
      {
        protocol: "https",
        hostname: "www.dropbox.com",
      },
    ],
  },
};

module.exports = nextConfig;
