/**
 * Webpack configuration base class
 */
const fs = require('fs');
const path = require('path');

const npmBase = path.join(__dirname, '../../node_modules');
class WebpackBaseConfig {

  constructor() {
    this._config = {};
  }

  /**
   * Get the list of included packages
   * @return {Array} List of included packages
   */
  static get includedPackages() {
    return [].map(pkg => fs.realpathSync(path.join(npmBase, pkg)));
  }

  /**
   * Set the config data.
   * This will always return a new config
   * @param {Object} data Keys to assign
   * @return {Object}
   */
  set config(data) {
    this._config = Object.assign({}, WebpackBaseConfig.defaultSettings, data);
    return this._config;
  }

  /**
   * Get the global config
   * @return {Object} config Final webpack config
   */
  get config() {
    return this._config;
  }

  /**
   * Get the environment name
   * @return {String} The current environment
   */
  static get env() {
    return 'dev';
  }

  /**
   * Get the absolute path to src directory
   * @return {String}
   */
  static get srcPathAbsolute() {
    return path.resolve('./src');
  }

  /**
   * Get the absolute path to tests directory
   * @return {String}
   */
  static get testPathAbsolute() {
    return path.resolve('./test');
  }

  /**
   * Get the default settings
   * @return {Object}
   */
  static get defaultSettings() {
    const cssModulesQuery = {
      modules: true,
      importLoaders: 1,
      localIdentName: '[name]-[local]-[hash:base64:5]'
    };

    return {
      context: WebpackBaseConfig.srcPathAbsolute,
      devtool: 'eval',
      devServer: {
        contentBase: ['./public/', './src/'],
        publicPath: '/assets/',
        historyApiFallback: true,
        hot: true,
        inline: true,
        port: 3000
      },
      entry: './index.js',
      module: {
        rules: [
          {
            enforce: 'pre',
            test: /\.js?$/,
            include: WebpackBaseConfig.srcPathAbsolute,
            loader: 'babel-loader',
            query: {
              presets: ['es2015', 'react', 'stage-2']
            }
          },
          {
            test: /^.((?!cssmodule).)*\.css$/,
            loaders: [
              { loader: 'style-loader' },
              { loader: 'css-loader' }
            ]
          },
          {
            test: /\.(png|jpg|gif|mp4|ogg|svg|woff|woff2|ttf|eot|ico)$/,
            loader: 'file-loader'
          },
          {
            test: /^.((?!cssmodule).)*\.styl$/,
            loaders: [
              { loader: 'style-loader' },
              { loader: 'css-loader' },
              { loader: 'stylus-loader' }
            ]
          },
          {
            test: /\.json$/,
            loader: 'json-loader'
          },
          {
            test: /\.(js|jsx)$/,
            include: [].concat(
              WebpackBaseConfig.includedPackages,
              [WebpackBaseConfig.srcPathAbsolute]
            ),
            loaders: [
              // Note: Moved this to .babelrc
              { loader: 'babel-loader' }
            ]
          },
          {
            test: /\.cssmodule\.(sass|scss)$/,
            loaders: [
              { loader: 'style-loader' },
              {
                loader: 'css-loader',
                query: cssModulesQuery
              },
              { loader: 'sass-loader' }
            ]
          },
          {
            test: /\.cssmodule\.css$/,
            loaders: [
              { loader: 'style-loader' },
              {
                loader: 'css-loader',
                query: cssModulesQuery
              }
            ]
          },
          {
            test: /\.cssmodule\.less$/,
            loaders: [
              { loader: 'style-loader' },
              {
                loader: 'css-loader',
                query: cssModulesQuery
              },
              { loader: 'less-loader' }
            ]
          },
          {
            test: /\.cssmodule\.styl$/,
            loaders: [
              { loader: 'style-loader' },
              {
                loader: 'css-loader',
                query: cssModulesQuery
              },
              { loader: 'stylus-loader' }
            ]
          }
        ]
      },
      output: {
        path: path.resolve('./dist/assets'),
        filename: 'app.js',
        publicPath: './assets/'
      },
      plugins: [],
      resolve: {
        alias: {
          actions: `${WebpackBaseConfig.srcPathAbsolute}/actions/`,
          components: `${WebpackBaseConfig.srcPathAbsolute}/components/`,
          config: `${WebpackBaseConfig.srcPathAbsolute}/config/${WebpackBaseConfig.env}.js`,
          images: `${WebpackBaseConfig.srcPathAbsolute}/images/`,
          sources: `${WebpackBaseConfig.srcPathAbsolute}/sources/`,
          stores: `${WebpackBaseConfig.srcPathAbsolute}/stores/`,
          styles: `${WebpackBaseConfig.srcPathAbsolute}/styles/`
        },
        extensions: ['.js', '.jsx'],
        modules: [
          'node_modules',
          WebpackBaseConfig.srcPathAbsolute
        ]
      }
    };
  }
}

module.exports = WebpackBaseConfig;
