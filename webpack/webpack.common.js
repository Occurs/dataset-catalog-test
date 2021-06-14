const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const rootDir = path.join(__dirname, '../');

module.exports = {
  entry: './src/index.tsx',
  mode: 'development',
  devtool: 'source-map',
  optimization: {
    usedExports: true,
  },
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: [/node_modules/, /__tests__/],
        use: {
          loader: 'ts-loader',
        },
      },
      {
        test: /\.(jpg|png)$/,
        use: {
          loader: 'url-loader',
        },
      },
    ],
  },
  resolve: {
    alias: {
      '@features': path.join(rootDir, '/src/features'),
      '@pages': path.join(rootDir, '/src/pages'),
      '@components': path.join(rootDir, '/src/components'),
      '@hooks': path.join(rootDir, '/src/hooks'),
      '@utils': path.join(rootDir, '/src/utils'),
      '@assets': path.join(rootDir, '/src/assets'),
    },
    extensions: ['.tsx', '.ts', '.js'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};
