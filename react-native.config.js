module.exports = {
  project: {
      ios: {},
      android: {},
  },
  dependencies: {
    'react-native-fetch-blob': {
      platforms: {
        android: null,
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
