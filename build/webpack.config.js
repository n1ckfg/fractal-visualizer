const path = require('path');

module.exports = {
  mode: 'production',
  entry: {
    "mandelbrot-set": path.resolve(__dirname, '../01-mandelbrot-set/js/entry.js'),
    "mandelbulb": path.resolve(__dirname, '../02-mandelbulb/js/entry.js'),
    "diffusion": path.resolve(__dirname, '../03-diffusion/js/entry.js'),
    "gsvideo": path.resolve(__dirname, '../04-gray-scott/js/entry.js'),
    "smooth-gol": path.resolve(__dirname, '../05-smooth-gol/js/entry.js')
  },
  devtool: 'inline-source-map',
  devServer: {
    host: '127.0.0.1',
    port: 9001,
    static: {
      directory: path.resolve(__dirname, '../'),
      watch: true,
    },
    devMiddleware: {
      publicPath: '/dist/',
    },
    compress: true,
    open: true,
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/dist/',
  },
  performance: {
    hints: false
  },
}
