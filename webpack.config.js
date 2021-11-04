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
    devServer: {
      static: {
        publicPath: '/build',
        directory: path.resolve(__dirname, 'build'),
      },
      proxy: {
        '/api': 'http://localhost:3000',
      },
    },
    /* just coppied this out of unit 10
    devServer: {
      host: 'localhost',
      port: 8080,
      contentBase: path.resolve(__dirname, 'dist'),
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
        '/assets/**': {
          target: 'http://localhost:3000/',
          secure: false,
        },
      },
    },
    */
    performance: {
      hints: false,
    },
  };
  