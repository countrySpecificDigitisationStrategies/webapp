/*eslint-env node*/
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const dotenv = require('dotenv')

module.exports = () => {
  const env = dotenv.config().parsed
  const envVars = Object.keys(env).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(env[next])
    return prev
  }, {})

  return {
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

      new webpack.DefinePlugin(envVars),
    ],
  }
}
