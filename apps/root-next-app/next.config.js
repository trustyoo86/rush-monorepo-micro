const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, options) => {
    config.module.rules = config.module.rules.map(rule => {
      // `create-react-app` uses `babel-loader` in oneOf
      if (rule.oneOf) {
        rule.oneOf.map(oneOfRule => {
          if (
            oneOfRule.loader &&
            oneOfRule.loader.indexOf('babel-loader') !== -1
          ) {
            if (oneOfRule.hasOwnProperty('options')) {
              if (oneOfRule.options.hasOwnProperty('sourceMaps')) {
                // eslint-disable-next-line no-param-reassign
                oneOfRule.options.sourceMaps = true;
              }
            }
          }
        });
      }
      return rule;
    });

    return config;
  },
};

module.exports = nextConfig;
