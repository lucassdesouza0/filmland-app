import {combineReducers} from 'redux';

import {createNavigationReducer} from 'react-navigation-redux-helpers';

import Routes from '../../routes';
import mainReducer from './main';
import snackbarReducer from './snackbar';

const navReducer = createNavigationReducer(Routes);

const reducers = combineReducers({
  nav: navReducer,
  main: mainReducer,
  snackbar: snackbarReducer,
});

export default reducers;
