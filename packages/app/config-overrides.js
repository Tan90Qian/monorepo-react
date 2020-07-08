const path = require("path");
const {
  addWebpackResolve,
  customBabelLoaderInclude,
  fixBabelImports,
  addExternalBabelPlugin,
} = require("@mono/cra");

const fixExternalBabelImports = (libraryName, options) =>
  addExternalBabelPlugin([
    "import",
    Object.assign(
      {},
      {
        libraryName,
      },
      options
    ),
    `fix-${libraryName}-imports`,
  ]);

module.exports = {
  webpack(config) {
    fixBabelImports("antd", {
      libraryName: "antd",
      libraryDirectory: "es",
      style: "css",
    })(config);
    fixExternalBabelImports("antd", {
      libraryName: "antd",
      libraryDirectory: "es",
      style: "css",
    })(config);
    customBabelLoaderInclude([path.resolve(__dirname, "../")])(config);
    addWebpackResolve({
      mainFields: ["monoEntry", "browser", "module", "main"],
    })(config);
    return config;
  },
};
