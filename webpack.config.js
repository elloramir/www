const webpack = require('webpack');
const path = require('path');

const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'docs'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.svelte$/,
        loader: 'svelte-loader',
        options: {
          preprocess:  require('svelte-preprocess')({})
        }
      }
    ]
  },
  resolve: {
    conditionNames: ['svelte'],
    extensions: [
      '.mjs',
      '.js',
      '.svelte'
    ]
  },
  devServer: {
    static: path.join(__dirname, 'docs'),
  },
};

module.exports = config;