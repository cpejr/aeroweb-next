module.exports = {
  webpack(config, { isServer }) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    // Fixes npm packages that depend on `fs` module
    // precisa disso para o SendGrid funcionar sem backend
    if (!isServer) {
      config.node = {
        fs: 'empty'
      }
    }

    return config;
  },
};
