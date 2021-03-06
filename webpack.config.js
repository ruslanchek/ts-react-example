const path = require('path');

module.exports = {
  entry: "./src/app.tsx",
  output: {
    filename: "bundle.js",
    path: __dirname + "/dist"
  },

  watch: true,

  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    overlay: true,
    overlay: {
      warnings: true,
      errors: true
    },
    port: 9000
  },

  // Enable sourcemaps for debugging webpack's output.
  devtool: "source-map",

  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: [".ts", ".tsx", ".js", ".json"]
  },

  module: {
    rules: [
      // All files with a '.ts' or '.tsx' extension will be handled by
      // 'awesome-typescript-loader'.
      {
        test: /\.tsx?$/,
        loader: "awesome-typescript-loader"
      },

      // All output '.js' files will have any sourcemaps re-processed by
      // 'source-map-loader'.
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader"
      }
    ]
  }
};