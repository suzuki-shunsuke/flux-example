import path from 'path';
import webpack from 'webpack';

module.exports = {
  entry: {
    'entry': './app/static/entry.jsx',
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['es2015'],
      }
    }, {
      test: /.jsx?$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      query: {
        presets: ['es2015', 'react']
      }
    }]
  },
  devServer: {
    hot: true,
    publicPath: '/static/',
    host: '0.0.0.0',
    port: 3000,
    contentBase: './app',
  }
};
