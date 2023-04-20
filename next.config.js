/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  output: 'standalone',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
        pathname: '/u/**'
      },
      {
        protocol: 'https',
        hostname: 'sinabyr.storage.iran.liara.space'
      }
    ]
  }
}

module.exports = nextConfig
