/** @type {import('next').NextConfig} */

const NextFederationPlugin = require("@module-federation/nextjs-mf");
const routes = require("./src/routes/moduleRoutes.json");

module.exports = {
  webpack(config, options) {
    const { isServer } = options;
    config.plugins.push();

    return config;
  },
};
