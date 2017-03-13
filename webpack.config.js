var webpack = require('webpack')
var nodeExternals = require('webpack-node-externals')

module.exports = {
  // entry: provided by serverless
  // output: provided by serverless
  entry: './handler.js',
  target: 'node',
  externals: [
    'aws-sdk',
    nodeExternals()
  ],
  resolve: {
    extensions: ['', '.js']
  },
  devtool: 'source-map',
  plugins: [
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        unused: true,
        dead_code: true,
        warnings: false,
        drop_debugger: true
      }
    })
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel'],
        include: __dirname,
        exclude: /node_modules/
      }
    ]
  }
}
