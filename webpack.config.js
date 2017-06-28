var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './js/app.js',
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html'
    })
  ]
};
