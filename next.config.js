/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["links.papareact.com", "ui-avatars.com"],
  },
};

module.exports = nextConfig;
