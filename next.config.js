/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "www.google.com",
      "assets.vogue.com",
      "m.media-amazon.com",
      "images.unsplash.com",
      "flowbite.s3.amazonaws.com"
    ],
  },
}

module.exports = nextConfig
