/** @type {import('next').NextConfig} */

const NextFederationPlugin = require("@module-federation/nextjs-mf");
const routes = require("./src/routes/moduleRoutes.json");

module.exports = {
  webpack(config, options) {
    const { isServer } = options;
    config.plugins.push(
      new NextFederationPlugin({
        name: "bime_financeiro",
        remotes: {
          bime_vendas: `bime_vendas@http://localhost:3001/_next/static/${
            isServer ? "ssr" : "chunks"
          }/remoteEntry.js`,
          host: `host@https://microhost.vercel.app/${
            isServer ? "ssr" : "chunks"
          }/remoteEntry.js`,
        },
        filename: "static/chunks/remoteEntry.js",
        exposes: {},
        shared: {
          "@chakra-ui/": {
            singleton: true,
            requiredVersion: false,
          },
          "@emotion/": {
            singleton: true,
            requiredVersion: false,
          },
        },
        force: true,
      })
    );

    return config;
  },
};
