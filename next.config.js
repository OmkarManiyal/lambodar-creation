/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lambodarcreation.com',
      },
      {
        protocol: 'https',
        hostname: '**.lambodarcreation.com',
      },
    ],
  },
}

module.exports = nextConfig