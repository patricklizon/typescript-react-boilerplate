const HTMLWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');



module.exports = {
  entry: [
    '@babel/polyfill',
    './src/index.tsx'
  ],

  output: {
    path: path.resolve('build'),
    filename: '[name].js',
    chunkFilename: '[name].[chunkhash].js',
    publicPath: '/',
  },

  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.tsx'],
    alias: {
      styles: path.resolve(__dirname, '../src/styles')
    },
  },

  plugins: [
    new webpack.EnvironmentPlugin(['NODE_ENV']),
    new HTMLWebpackPlugin({
      hash: true,
      template: path.resolve('src/index.html'),
    }),
  ],

  module: {
    rules: [
      // Load TS files
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: process.env.NODE_ENV === 'development',
              plugins: ['react-hot-loader/babel'],
            }
          },
        ],
      },
      // Enable source maps
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader'
      },
      // Preprocess all of scss files
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: true,
              localIdentName: '[name]__[local]___[hash:base64:5]',
              camelCase: 'dashesOnly',
              sourceMap: true,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              config: {
                path: path.join(__dirname, '../postcss.config.js')
              }
            }
          },
          {
            loader: 'sass-loader',
            options: {
              implementation: require("dart-sass"),
              sourceMap: true,
              data: '@import "~styles/common-imports";'
            }
          },
        ],
      },
      // Preprocess 3rd party .css files located in node_modules
      {
        test: /\.css$/,
        include: /node_modules/,
        use: ['style-loader', 'css-loader'],
      },
      // Assets
      {
        test: /\.(jpg|png|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              // Inline files smaller than 10 kB
              limit: 10 * 1024,
            },
          },
        ],
      },
      {
        test: /\.(mp4|webm)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000,
          },
        },
      }
    ],
  },
};
