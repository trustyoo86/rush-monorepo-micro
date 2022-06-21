const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  productionBrowserSourceMaps: true,
  webpack: (config, options) => {
    config.devtool = 'source-map';
    return config;
  },
};

module.exports = nextConfig;
