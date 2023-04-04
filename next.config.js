/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "www.google.com",
      "images.unsplash.com",
      "plus.unsplash.com",
      "encrypted-tbn0.gstatic.com",
      "unsplash.com",
      "media.istockphoto.com",
    ],
  },
};

module.exports = nextConfig;
