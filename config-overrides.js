const { override, addExternalBabelPlugins } = require("customize-cra");

module.exports = override(
  ...addExternalBabelPlugins(
    "@babel/plugin-proposal-nullish-coalescing-operator"
  )
);
