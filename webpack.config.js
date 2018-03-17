var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './entry.js',
  output: {filename:'dest/bundle.js'},
  plugins: [
    new HtmlWebpackPlugin({
      template: './template.html',
      filename: './dest/index.html'
    })
  ],
  module: {
      rules: [
        {
          test: /\.css$/,
          use: [ 'style-loader', 'css-loader' ]
        }
      ]
    }
};
