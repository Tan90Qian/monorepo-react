const { customEntryConfig } = require("@mono/cra");

module.exports = {
  webpack(config) {
    customEntryConfig()(config);
    return config;
  },
};
