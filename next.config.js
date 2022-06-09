/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return {
      fallback: [
        {
          source: '/message',
          destination: 'https://mt-sub-domain.vercel.app',
        }
      ]
    }
  }
}

module.exports = nextConfig
