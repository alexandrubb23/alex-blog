/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://api.alexandru-barbulescu.com/:path*',
      },
    ];
  },
};

module.exports = nextConfig;
