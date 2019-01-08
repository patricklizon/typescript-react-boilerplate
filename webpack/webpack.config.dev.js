const Dotenv = require('dotenv-webpack');
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
    new Dotenv({
      path: path.resolve(__dirname, '../.env.dev'),
      safe: true, // load '.env.example' to verify the '.env' variables are all set. Can also be a string to a different file.
      systemvars: true, // load all the predefined 'process.env' variables which will trump anything local per dotenv specs.
      silent: false
    }),
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
