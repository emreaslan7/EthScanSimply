/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  env: {
    INFURA_API_KEY: process.env.INFURA_API_KEY,
  },
  nextConfig
}
