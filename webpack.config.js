const Path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const package = require('./package.json')

module.exports = {
  entry: "./src/client/index.ts",
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      }
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts"],
    alias: {
      common: Path.resolve(__dirname, "src/common"),
      client: Path.resolve(__dirname, "src/client")
    }
  },
  output: {
    filename: "bundle.js",
    path: Path.join(__dirname, "dist")
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Fugu CNC'
    })
  ]
}
