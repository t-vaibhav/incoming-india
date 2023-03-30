/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "www.google.com",
      "assets.vogue.com",
      "m.media-amazon.com",
      "images.unsplash.com",
    ],
  },
}

module.exports = nextConfig
