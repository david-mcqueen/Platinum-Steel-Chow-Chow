const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');

module.exports = {
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jp(e*)g|svg|mp3|ogg|wav)$/,  
        use: [{
            loader: 'file-loader',
            options: { 
                name: 'images/[hash]-[name].[ext]'
            } 
        }]
    }
    ]
  },

  devtool: 'inline-source-map',

  resolve: {
    extensions: [ '.ts', '.tsx', '.js' ]
  },

  mode: 'development',

  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    https: true
  },

  plugins: [
    new CaseSensitivePathsPlugin(),
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, 'index.html'),
        to: path.resolve(__dirname, 'dist')
      },
      {
        from: path.resolve(__dirname, 'assets', '**', '*'),
        to: path.resolve(__dirname, 'dist')
      }
    ]),
    new webpack.DefinePlugin({
      'typeof CANVAS_RENDERER': JSON.stringify(true),
      'typeof WEBGL_RENDERER': JSON.stringify(true)
    }),
  ],

  entry: {
    app: `./src/Snake3k/js/main.ts`,
    vendors: ['phaser']
  },

  output: {
    filename: 'app.bundle.js',
    path: path.resolve(__dirname, 'dist'),
    chunkFilename: '[name].bundle.js',
    publicPath: '/'
  },

  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 4000,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
          enforce: true,
          priority: 10
        },
      }
    }
  }
};