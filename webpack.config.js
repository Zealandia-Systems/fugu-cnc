const Path = require('path');
const package = require('./package.json')

module.exports = {
  "entry": "./src/client/index.ts",
  "devtool": "inline-source-map",
  "module": {
    "rules": [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      }
    ],
  },
  "resolve": {
    extensions: [".tsx", ".ts", ".js"],
    alias: {
      "common": Path.resolve(__dirname, "src/common"),
      "client": Path.resolve(__dirname, "src/client")
    }
  },
  "output": {
    "filename": "bundle.js",
    "path": Path.join(__dirname, "dist")
  }
}
