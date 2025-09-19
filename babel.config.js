module.exports = {
  presets: [
    '@babel/preset-env',
    ['@babel/preset-react', { runtime: 'automatic' }],
    '@babel/preset-typescript',
    '@babel/preset-flow', // handles Flow syntax in RN deps
  ],
  plugins: [
    // Module resolver handles aliases
    ['module-resolver', {
      alias: {
        'react-native$': 'react-native-web',

        // your app-level aliases
        'screens': './src/screens',
        'components': './src/components',
        'navigations': './src/navigations',
        'utils': './src/utils',
        'assets': './src/assets',
      },
    }],

    // React Native Reanimated still needs this
    'react-native-reanimated/plugin',
  ],
};

