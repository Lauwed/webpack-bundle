const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
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
      })
  ]
}