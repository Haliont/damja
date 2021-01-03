module.exports = {
  project: {
      ios: {},
      android: {},
  },
  dependencies: {
    'react-native-fetch-blob': {
      platforms: {
        android: null, // disable Android platform, other platforms will still autolink if provided
        ios: null,
      },
    },
    'react-native-exit-app': {
      platforms: {
        android: null,
        ios: null,
      }
    }
  },
  assets: ['./src/assets/fonts']
};
