/*eslint-env node*/
/*eslint-disable @typescript-eslint/no-var-requires*/

const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const Dotenv = require('dotenv-webpack')

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production'

  return {
    entry: './src/index.tsx',

    module: {
      rules: [
        {
          test: /\.(ts|js)x?$/,
          exclude: /node_modules/,
          use: ['babel-loader?cacheDirectory'],
        },
        {
          test: /\.(css|styl)$/,
          use: ['style-loader', 'css-loader', 'stylus-loader'],
        },
        {
          test: /\.(gif|png|jpe?g|svg)$/i,
          use: [
            'file-loader',
            {
              loader: 'image-webpack-loader',
              options: {
                disable: true,
              },
            },
          ],
        },
      ],
    },

    resolve: {
      extensions: ['.ts', '.tsx', '.js'],
      modules: [path.resolve(__dirname, './src'), path.resolve(__dirname, './node_modules')],
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

    devtool: isProduction ? 'source-map' : 'eval-cheap-source-map',

    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html',
        filename: './index.html',
      }),

      new Dotenv({
        systemvars: true,
      }),
    ],
  }
}
