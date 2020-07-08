const customizeCra = require("customize-cra");
const path = require("path");
const paths = require("react-scripts/config/paths");

customizeCra.customEntryConfig = () => (config) => {
  const isDev = process.env.NODE_ENV === "development";
  if (!isDev) {
    return config;
  }
  const appIndex = path.join(paths.appSrc, "app");

  // 增加入口文件
  config.entry.push(appIndex);

  return config;
};

module.exports = customizeCra;
