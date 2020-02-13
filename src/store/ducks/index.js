import {combineReducers} from 'redux';

import {createNavigationReducer} from 'react-navigation-redux-helpers';

import Routes from '../../routes';
import filmsReducer from './films';
import mapReduxer from './map';
import snackbarReducer from './snackbar';

const navReducer = createNavigationReducer(Routes);

const reducers = combineReducers({
  nav: navReducer,
  films: filmsReducer,
  map: mapReduxer,
  snackbar: snackbarReducer,
});

export default reducers;
