const path = require("path");

module.exports = {
  mode: "development",
  devtool: "eval-source-map",
  entry: "./src/index.ts",
  module: {
    rules: [
      {
        test: /\.(ts)$/,
        use: "ts-loader",
        include: [path.resolve(__dirname, "src")],
      },
      {
        test: /\.(js)$/,
        loader: "babel-loader",
        include: [path.resolve(__dirname, "src")],
      },
      // options: {
      //   presets: ["@babel/preset-env"],
      //   ["@babel/typescript"]
      // },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  devServer: {
    contentBase: path.resolve(__dirname, "dist"),
    publicPath: "/assets/",
  },
  output: {
    publicPath: "dist",
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist/assets"),
  },
  watch: true,
};
