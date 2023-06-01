/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    BASE_URL: process.env.BASE_URL,
  },
  experimental: {
    serverActions: true,
    esmExternals: false,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: [
      "avatars.githubusercontent.com",
      "localhost",
      "res.cloudinary.com",
      "ucarecdn.com"
    ],
  },
};

module.exports = nextConfig;
