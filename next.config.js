/** @type {import('next').NextConfig} */

const NextFederationPlugin = require("@module-federation/nextjs-mf");

const federationConfig = new NextFederationPlugin({
  name: "bime_financeiro",
  remoteType: "module",
  remotes: {
    host: async () =>
      `${process.env.NEXT_PUBLIC_PRODUCTION_HOST}/remoteEntry.js`,
  },
  filename: "remoteEntry.js",
  exposes: {
    "./pages/dashboards/listaFinanceiro":
      "./src/pages/dashboards/listaFinaceiro.tsx",
  },
  shared: {
    "@chakra-ui/react": { singleton: true, requiredVersion: false },
    "@emotion/react": { singleton: true, requiredVersion: false },
  },
});

module.exports = {
  webpack(config, options) {
    config.plugins.push(federationConfig);
    return config;
  },
};
