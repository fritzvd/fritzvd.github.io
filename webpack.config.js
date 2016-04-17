module.exports = {
  entry: './cv.js',
  output: {
    path: __dirname,
    filename: 'cv-bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loaders: ["style", "css", "sass"]
      },
      { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192' }
    ]
  }
}
