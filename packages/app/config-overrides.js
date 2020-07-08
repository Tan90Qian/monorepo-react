const { addWebpackResolve } = require("@mono/cra");

module.exports = {
  webpack(config) {
    addWebpackResolve({
      mainFields: ["monoEntry", "browser", "module", "main"],
    })(config);
    return config;
  },
};
