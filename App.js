import React from 'react';

import './src/config/ReactotronConfig';

import {Provider} from 'react-redux';
import store from './src/store';

import SnackBarRedux from './src/components/Snackbar';
import {AppWithNavigationState} from './src/redux-navigator';

import Routes from './src/routes/';

console.disableYellowBox = true;

import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#fff',
  },
};

const App = () => (
  <Provider store={store}>
    <PaperProvider theme={theme}>
      <AppWithNavigationState />
      <SnackBarRedux />
    </PaperProvider>
  </Provider>
);

export default App;
