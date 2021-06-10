const path = require('path');
const webpack = require('webpack');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

const rules = [
  {
    test:/\.tsx?/,
    exclude: /node_modules/,
    loader:'ts-loader'
  }
]
module.exports = {
  target:'web',
  entry:'./src/index.tsx',
  output: {
    path:path.resolve(".", 'dist'),
    filename:'bundle.js'
  },
  plugins: [
    new webpack.ProvidePlugin({
      Buffer: ['buffer', 'Buffer'],
      TextDecoder: ['text-encoding', 'TextDecoder'],
      TextEncoder: ['text-encoding', 'TextEncoder']
    })],
  module: {rules},
  resolve:{
    extensions:['.ts', '.tsx', '.js'],
    fallback: {
      "crypto": require.resolve("crypto-browserify"),
      "stream": require.resolve("stream-browserify"),
      "buffer": require.resolve("buffer"),
      "TextEncoder": require.resolve("@polkadot/x-textencoder").TextEncoder,
      "TextDecoder": require.resolve("@polkadot/x-textdecoder").TextDecoder,
    },
    plugins: [new TsconfigPathsPlugin()],
  },
}
