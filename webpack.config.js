const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './client/index.js',
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: 'bundle.js',
    },
    mode: 'development',
    plugins: [
      new HtmlWebpackPlugin({
        title: 'development',
        template: 'index.html',
      }),
    ],
    module: {
      rules: [
        {
          test: /\.jsx?/,
          exclude: /node_modules/,
          use: {
            // Mark did not wrap loader/options/presets in a use object here
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
            },
          },
        },
        {
          test: /\.s[ac]ss$/i,
          use: [
            // Compiles Sass to CSS
            'style-loader',
            'css-loader',
            'sass-loader',
          ],
        },
      ],
    },
    devServer: {
      static: {
        publicPath: '/build',
        directory: path.resolve(__dirname, 'build'),
      },
      proxy: {
        '/api': 'http://localhost:3000',
      },
    },
    performance: {
      hints: false,
    },
  };
  