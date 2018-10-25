const webpack = require("webpack");
const path = require('path');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const config = require("./webpack.config");



module.exports = {
  mode: "development",

  devtool: "cheap-module-eval-source-map",

  devServer: {
    hot: true,
    inline: true,
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
    overlay: true,
    open: true,
    historyApiFallback: true,
    clientLogLevel: 'warning',
    stats: 'minimal',
    quiet: true,
  },

  entry: {
      ...config.entry,
  },

  resolve: config.resolve,

  output: config.output,

  plugins: [
    new ForkTsCheckerWebpackPlugin({
      checkSyntacticErrors: true,
    }),
    new FriendlyErrorsWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    ...config.plugins,
  ],

  module: {
    rules: [
      ...config.module.rules,
    ],
  },
};
