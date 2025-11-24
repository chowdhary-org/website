/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  async redirects() {
    return [
      {
        source: '/gita-book-2025',
        destination: 'https://chowdhary-org.github.io/bhagavadgita-ka-saral-paath/'
      },
    ]
  },
}

module.exports = nextConfig
