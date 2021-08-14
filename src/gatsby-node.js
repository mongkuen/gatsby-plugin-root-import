const path = require("path");

exports.onCreateWebpackConfig = ({ actions, getConfig }, pluginOptions) => {
  const hasPluginOptions = Object.keys(pluginOptions).filter(
    item => item !== "plugins"
  ).length;
  const config = getConfig();
  const contextSrc = path.join(config.context, "src");
  const defaultModules = [contextSrc, "node_modules"];

  if (hasPluginOptions) {
    const { plugins, resolveModules, ...aliasOptions } = pluginOptions;
    const modules = !resolveModules
      ? defaultModules
      : [...resolveModules, ...defaultModules];

    actions.setWebpackConfig({
      resolve: {
        alias: { src: contextSrc, ...aliasOptions },
        modules
      }
    });
  } else {
    actions.setWebpackConfig({
      resolve: {
        alias: { src: contextSrc },
        modules: defaultModules
      }
    });
  }
};
