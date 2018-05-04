const webpack = require("webpack");
const path = require("path");

module.exports = {
  entry: path.join(__dirname, "./src/index.js"),
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: { presets: ['es2015', 'react'] }
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      }
    ]
  },
  resolve: { extensions: ['*', '.js', '.jsx'] },
  output: {
    path: path.join(__dirname, "./build"),
    filename: "bundle.js"
  },
  devServer: {
    contentBase: path.join(__dirname, '/public'),
    port: 8000
  },
  plugins: [ new webpack.HotModuleReplacementPlugin() ]
};