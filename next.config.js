/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false;
    }
    return config;
  },
  env: {
    GOOGLE_API_KEY: process.env.REACT_APP_GOOGLE_API_KEY,
  },
  reactStrictMode: true,
}

module.exports = nextConfig
