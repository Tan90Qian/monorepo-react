const { customEntryConfig, fixBabelImports } = require("@mono/cra");

module.exports = {
  webpack(config) {
    fixBabelImports("antd", {
      libraryName: "antd",
      libraryDirectory: "es",
      style: 'css',
    })(config);
    customEntryConfig()(config);
    return config;
  },
};
