var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: './src/index.js',
  output: {path: __dirname, filename: 'bundle.js'},
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader")
      }
    ]
  },

  plugins: [
    new ExtractTextPlugin("style.css")
  ],

  devtool: 'source-map'
};
