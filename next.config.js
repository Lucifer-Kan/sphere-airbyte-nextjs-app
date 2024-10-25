/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/",
        destination: "/content_sources",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
