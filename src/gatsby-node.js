const path = require("path");

exports.onCreateWebpackConfig = ({ actions, getConfig }, pluginOptions) => {
  const hasPluginOptions = Object.keys(pluginOptions).filter(
    item => item !== "plugins"
  ).length;
  if (hasPluginOptions) {
    const { plugins, ...aliasOptions } = pluginOptions;
    actions.setWebpackConfig({
      resolve: {
        alias: aliasOptions
      }
    });
  } else {
    const config = getConfig();
    const contextSrc = path.join(config.context, "src");
    actions.setWebpackConfig({
      resolve: {
        alias: { src: contextSrc }
      }
    });
  }
};

exports.modifyWebpackConfig = ({ config }, pluginOptions) => {
  const root = pluginOptions.root || config._config.context;
  config.merge({ resolve: { root } });
  return config;
};
