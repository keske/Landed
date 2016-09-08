const webpack = require('webpack');
const merge = require('webpack-merge');
const development = require('./dev.config.js');
const production = require('./prod.config.js');
const developmentSSR = require('./dev.ssr.config.js');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

const TARGET = process.env.npm_lifecycle_event;
process.env.BABEL_ENV = TARGET;

let devUrl;

if (!global.ssr && process.env.NODE_ENV === 'development') {
  devUrl = 'http://localhost:3000/dist/';
}

if (global.ssr && process.env.NODE_ENV === 'development') {
  devUrl = 'http://localhost:3001/dist/';
}

if (process.env.NODE_ENV === 'production') {
  devUrl = '/dist/';
}

const common = {
  output: {
    path: __dirname + '/../dist/',
    publicPath: devUrl,
    filename: '[name].js',
    chunkFilename: '[name].chunk.js',
  },

  resolve: {
    extensions: ['', '.jsx', '.js', '.json', '.scss'],
    modulesDirectories: ['node_modules'],
    alias: {
      components: path.join(__dirname, '../src/components/'),
      constants: path.join(__dirname, '../src/constants/'),
      decorators: path.join(__dirname, '../src/decorators/'),
      utils: path.join(__dirname, '../src/utils/'),
    },
  },

  module: {
    preLoaders: [{
      test: /\.json$/,
      exclude: /node_modules/,
      loader: 'json',
    }],
    loaders: [{
      test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'url?limit=10000&mimetype=application/font-woff',
    }, {
      test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'url?limit=10000&mimetype=application/font-woff2',
    }, {
      test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'url?limit=10000&mimetype=application/octet-stream',
    }, {
      test: /\.otf(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'url?limit=10000&mimetype=application/font-otf',
    }, {
      test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'file',
    }, {
      test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'url?limit=10000&mimetype=image/svg+xml',
    }, {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
    }, {
      test: /\.png$/,
      loader: 'file?name=[name].[ext]',
    }, {
      test: /\.jpg$/,
      loader: 'file?name=[name].[ext]',
    }, {
      test: /\.gif$/,
      loader: 'file?name=[name].[ext]',
    }],
  },

  plugins: [
    // generate bundle.css for server-side-rendering
    new ExtractTextPlugin('bundle.css'),

    // define global constants
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: process.env.NODE_ENV === 'development' ? '"development"' : '"production"',
      },
      __DEVELOPMENT__: process.env.NODE_ENV === 'development',
      __PRODUCTION__: process.env.NODE_ENV === 'production',
      __CLIENT__: true,
    }),

    // chunks for generate vendor bundle
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: (module) => {
        return module.resource &&
          module.resource.indexOf('node_modules') !== -1 &&
          module.resource.indexOf('.css') === -1;
      },
    }),
  ],

  postcss: () => [
    require('postcss-simple-vars')({
      variables: {
        // Fonts
        janon: 'Jannon10Pro',
        janonItalic: 'Jannon10Pro-Italic',
        janonBold: 'Jannon10Pro-Bold',
        supriaSans: 'SupriaSans Regular',
        supriaSansMedium: 'SupriaSans Medium',
        supriaSansBold: 'SupriaSans Regular Bold',
        supriaSansHeavy: 'SupriaSans Heavy',
        supriaSansBlack: 'SupriaSans Black',
        // Colors
        white: '#FFFFFF',
        black: '#4A4A4A',
        gray: '#9B9B9B',
        green: '#009B69',
        red: '#D0021B',
      },
    }),
    require('postcss-nested'),
    require('postcss-short'),
    require('postcss-mixins'),
    require('autoprefixer')({
      browsers: ['> 5%'],
      remove: false,
    }),
  ],
};

if (process.env.NODE_ENV === 'development' && !global.ssr) {
  module.exports = merge(development, common);
}

if (process.env.NODE_ENV === 'development' && global.ssr) {
  module.exports = merge(developmentSSR, common);
}

if (process.env.NODE_ENV === 'production') {
  module.exports = merge(production, common);
}
