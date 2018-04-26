exports.modifyWebpackConfig = ({ config }, pluginOptions) => {
  const root = pluginOptions.root || config._config.context;
  config.merge({ resolve: { root } });
  return config;
};
