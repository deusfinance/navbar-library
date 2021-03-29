const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const nodeExternals = require('webpack-node-externals');
module.exports = {
  entry: './src/index.js',
  externals: [nodeExternals()],
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'commonjs'
  },
  devServer: {
      inline: false,
      contentBase: "./dist",
  },
  plugins: [new CleanWebpackPlugin()],
  module: {
    rules: [
     {
        test: /\.(js|jsx)$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react',
              {
                plugins: ['@babel/plugin-proposal-class-properties']
              }
            ],
          }
        }
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
        include: path.resolve(__dirname, './src')
      },
      {
        test: /\.(woff2?|eot|ttf|otf|svg)(\?.*)?$/,
        include: /fonts/,
        loader: 'url-loader'
      },
      {
        test: /\.(svg)$/,
        include: /img/,
        loader: 'url-loader'
      }
    ]
  }
}
