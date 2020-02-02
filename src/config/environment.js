/*****************************
 * environment.js
 * path: '/environment.js' (root of your project)
 ******************************/

import Constants from 'expo-constants';

const ENV = {
  dev: {
    apiUrl: 'https://api.themoviedb.org/3/search/movie',
    apiKey: '6e09219c6174d28a7f04d7d8467efd6f',
    googleMapsKey: 'aa',
  },
  staging: {
    apiUrl: 'https://api.themoviedb.org/3/search/movie',
    apiKey: '6e09219c6174d28a7f04d7d8467efd6f',
    googleMapsKey: 'aaa',
  },
  prod: {
    apiUrl: 'https://api.themoviedb.org/3/search/movie',
    apiKey: '6e09219c6174d28a7f04d7d8467efd6f',
    googleMapsKey: 'aaa',
  },
};

const getEnvVars = (env = Constants.manifest.releaseChannel) => {
  // What is __DEV__ ?
  // This variable is set to true when react-native is running in Dev mode.
  // __DEV__ is true when run locally, but false when published.
  if (__DEV__) {
    return ENV.dev;
  } else {
    return ENV.prod;
  }
};

export default getEnvVars;
