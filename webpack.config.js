const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.tsx',

  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.styl$/,
        use: ['style-loader', 'css-loader', 'stylus-loader'],
      },
    ],
    // loaders: [{ test: /\.styl$/, loader: 'style-loader!css-loader!stylus-loader' }],
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },

  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js',
  },

  devServer: {
    contentBase: './dist',
    historyApiFallback: true,
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
}
