module.exports = {
  entry: './index.jsx',
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loaders: ["style", "css", "sass"]
      },
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          "presets": ["react"]
        }
      },
      { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192' }
    ]
  }
}
