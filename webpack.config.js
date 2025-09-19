const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/, // .js, .jsx, .ts, .tsx
        exclude: /node_modules[/\\](?!(react-native|@react-native|react-native-web|react-native-reanimated|react-native-gesture-handler|@react-navigation|react-native-ratings|react-native-keyboard-aware-scroll-view)[/\\])/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
          },
        },
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: 'asset/resource',
      },
    ],
  },
  resolve: {
    extensions: [
      '.web.js', '.js',
      '.web.ts', '.ts',
      '.web.tsx', '.tsx',
      '.web.jsx', '.jsx',
      '.json',
    ],
    alias: {
      'react-native$': 'react-native-web',
    },
    fullySpecified: false, // allow extensionless imports
    fallback: {
      'react-native-gesture-handler': path.resolve(__dirname, 'web-mocks/gesture-handler.js'),
      'react-native-drawer-layout': path.resolve(__dirname, 'web-mocks/drawer-layout.js'),
      'react-native/Libraries/Components/MaskedView/MaskedView': path.resolve(__dirname, 'web-mocks/MaskedView.js'),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 3000,
  },
};

