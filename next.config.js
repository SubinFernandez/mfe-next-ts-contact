/** @type {import('next').NextConfig} */
const { withModuleFederation } = require('@module-federation/nextjs-mf')

module.exports = {
  reactStrictMode: true,
  webpack: (config, options) => {
    const { isServer } = options;
    const mfConf = {
      mergeRuntime: true, //experimental
      name: "contactApp",
      library: {
        type: config.output.libraryTarget,
        name: "contactApp",
      },
      filename: "static/runtime/contactRemoteEntry.js",
      remotes: {
      },
      exposes: {
        "./contact": "./src/components/contact",
      },
    };
    config.cache = false;
    withModuleFederation(config, options, mfConf);
    if (!isServer) {
      config.output.publicPath = process.env.PUBLIC_PATH;
    }

    return config;
  },

  webpackDevMiddleware: (config) => {
    // Perform customizations to webpack dev middleware config
    // Important: return the modified config
    return config;
  },
}
