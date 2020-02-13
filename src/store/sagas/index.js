import {all, fork} from 'redux-saga/effects';

import filmsSaga from './films';
import mapSaga from './map';

export default function* rootSaga() {
  yield all([filmsSaga(), mapSaga()]);
}
