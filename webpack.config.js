const { resolve, join } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const srcPath = resolve(__dirname, 'src');

module.exports = {
  entry: {
    index: join(srcPath, 'index.js'),
  },
  output: {
    path: resolve(__dirname, 'dist'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            },
          },
          'postcss-loader',
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: join(srcPath, 'index.html'),
    }),
  ],
  devServer: {
    disableHostCheck: true,
    port: 9000,
  },
};
