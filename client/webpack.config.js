const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');
const { InjectManifest } = require('workbox-webpack-plugin');

// TODO: Add and configure workbox plugins for a service worker and manifest file.
// TODO: Add CSS loaders and babel to webpack.

module.exports = () => {
  return {
    mode: 'development',
    entry: {
      main: './src/js/index.js',
      install: './src/js/install.js'
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: 'Progressive Web App',
        template: './src/index.html',
        filename: 'index.html',
        chunks: ['main'],
      }),
      new WebpackPwaManifest({
        name: 'PWA Text Editor',
        short_name: 'PWA Editor',
        description: 'A text editor that works offline',
        background_color: '#01579b',
        theme_color: '#ffffff',
        icons: [
          {
            src: path.resolve('./src/images/logo.png'),
            sizes: [96, 128, 192, 256, 384, 512],
          },
        ]
      }),
      new InjectManifest({
        swSrc: './src/sw.js',
        importWorkboxFrom: 'local',
      }),
    ],

    module: {          
      rules: [
        
      ],
    },
  };
};