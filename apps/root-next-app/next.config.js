const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  productionBrowserSourceMaps: true,
  webpack: (config, options) => {
    // config.module.rules.forEach(config => {
    //   if (config.oneOf) {
    //     config.oneOf.forEach(config => console.log('config', config));
    //   }
    // });

    config.module.rules.push({
      test: /\.(js|ts|tsx|jsx)$/,
      enforce: 'pre',
      use: ['source-map-loader'],
      exclude: [
        path.resolve(__dirname, '..', '..', 'common', 'temp', 'node_modules'),
      ],
      // include: [path.resolve(__dirname, 'node_modules', '@micro')],
    });

    console.log('config.plugins', config.plugins);

    return config;
  },
};

module.exports = nextConfig;
