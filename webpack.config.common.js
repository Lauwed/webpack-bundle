const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const DashboardPlugin = require("webpack-dashboard/plugin");

module.exports = {
  entry: './src/index.js',
  output: {
    filename: '[name].[contenthash].js', // Get an optimiwed cache. The browser will always use the same JS file
                                         // until the content of the file changed thus the contenthash changed.
    path: path.resolve(__dirname, 'dist')
  },
  // A loader helps Webpack to understand and load different kind of files
  // The order fo the loaders is really important !
  // They are read from right to left
  module: {
    rules: [
      // For modern JS
      {
        test: /\.(js|jsx)$/,
        exclude: /[\\/]node_modules[\\/]/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url-loader'
      }
    ]
  },
  plugins: [
    // A webpack plugin to remove/clean your build folder(s).
    // Will delete the Dist directory and rereate a new one.
    new CleanWebpackPlugin(),
    // Will link the html file with the entry point
    new HtmlWebpackPlugin({
        filename: 'index.html', // Name of the output
        inject: true, // The JS will be inject in the body of the HTML
        template: path.resolve(__dirname, 'src', 'index.html'),
    }),
    new DashboardPlugin()
  ]
}