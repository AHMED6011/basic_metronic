const path = require("path");
const WebpackRTLPlugin = require("webpack-rtl-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const RemovePlugin = require("remove-files-webpack-plugin");

// global variables
// eslint-disable-next-line no-undef
const distPath = `${path.resolve(__dirname)}/src/assets/rtl`;
const entries = { style: "./src/assets/sass/style.scss" };

module.exports = {
  entry: entries,
  output: {
    // main output path in assets folder
    path: distPath,
    // output path based on the entries filename
    filename: "[name].js",
    // clean existing output folder
    clean: true,
  },
  resolve: {
    extensions: [".scss"],
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
    new WebpackRTLPlugin(),
    new RemovePlugin({
      after: {
        root: distPath,
        include: ["style.js", "style.css"],
        trash: true,
      },
    }),
  ],
};
