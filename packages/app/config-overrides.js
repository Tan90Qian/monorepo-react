const path = require("path");
const { addWebpackResolve, customBabelLoaderInclude } = require("@mono/cra");

module.exports = {
  webpack(config) {
    customBabelLoaderInclude([path.resolve(__dirname, "../")])(config);
    addWebpackResolve({
      mainFields: ["monoEntry", "browser", "module", "main"],
    })(config);
    return config;
  },
};
