const customizeCra = require("customize-cra");
const path = require("path");
const paths = require("react-scripts/config/paths");

customizeCra.customEntryConfig = () => (config) => {
  const isDev = process.env.NODE_ENV === "development";
  if (!isDev) {
    return config;
  }
  const appIndex = path.join(paths.appSrc, "App");

  // 增加入口文件
  config.entry.push(appIndex);

  return config;
};

customizeCra.customBabelLoaderInclude = (includePathArray=[]) => config => {
  
  if (!Array.isArray(includePathArray) || !includePathArray.length) {
    return config
  }

  // 修改babel-loader的include
  if (!config.module) {
    config.module = {}
  }
  if (!config.module.rules || !config.module.rules.length) {
    config.module.rules = []
  }
  for (const item of (config.module.rules.find(rule => Array.isArray(rule.oneOf)).oneOf || [])) {
    if (item.loader && 
        item.loader.indexOf('babel-loader') !== -1 && 
        item.options &&
        item.options.customize &&
        item.options.customize.indexOf('babel-preset-react-app') !== -1
      ) {
        if (!item.include) {
          item.include = []
        }
        if (!Array.isArray(item.include)) {
          item.include = [item.include]
        }
        for (const babelIncluedPath of includePathArray) {
          // const incluePath = path.resolve(paths.appPath, babelIncluedPath)
          item.include.push(babelIncluedPath)
        }
    }
  }
  
  return config
}

module.exports = customizeCra;
