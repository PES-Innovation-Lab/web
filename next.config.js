const webpack = require('webpack');
// const withCSS = require('@zeit/next-css');
const isProduction = (process.env.NODE_ENV || 'production') === 'production';

const assetPrefix = isProduction ? '' : '';

module.exports = {
  trailingSlash: true,
  // assetPrefix: assetPrefix,
  webpack: (config) => {
    config.plugins.push(
      new webpack.DefinePlugin({
        'process.env.ASSET_PREFIX': JSON.stringify(assetPrefix),
      })
    );
    return config;
  },
  swcMinify: true,
  images: { domains: ['pil-web.web.app'] },
};
