const path = require('path');
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: [
      './client/index.js'
    ],
    output: {
      path: path.resolve(__dirname, 'build'),
      publicPath: '/',
      filename: 'bundle.js',
    },
    mode: 'development',
    devServer: {
      host: 'localhost',
      port: 8080,
      contentBase: path.resolve(__dirname, 'build'),
      hot: true,
      publicPath: '/',
      historyApiFallback: true,
      inline: true,
      headers: { 'Access-Control-Allow-Origin': '*' },
      proxy: {
        '/api/**': {
          target: 'http://localhost:3000/',
          secure: false,
        },
      },
    },
    module: {
      rules: [
        {
          test: /\.jsx?/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
            },
          },
        },
        {
          test: /\.s[ac]ss$/i,
          exclude: /node_modules/,
          use: ['style-loader', 'css-loader', 'sass-loader'],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './index.html',
      }),
    ],
    resolve: {
      extensions: ['.js', '.jsx'],
    },
    performance: {
      hints: false,
    },
  };
  