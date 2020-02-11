import {all, takeLatest, call, put, select, take} from 'redux-saga/effects';

import {types} from '../ducks/map';

import * as service from '../../services/map';

import {SnackbarShow, snackbarShowError} from '../ducks/snackbar';

function* getLocation() {
  try {
    let {status} = yield call(service.getPermission);
    if (status !== 'granted') {
    } else {
      let location = yield call(service.getLocation);

      const initialLocation = {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      };

      yield put({type: types.SET_INITIAL_LOCATION, payload: initialLocation});
      yield put({type: types.GET_CINEMAS_LOCATION});
    }
  } catch (error) {
    yield put(snackbarShowError(`${error}`));
  }
}

function* getCinemasLocation() {
  try {
    const {latitude, longitude} = yield select(state => state.map.location);

    const location = `${latitude},${longitude}`;

    const {data} = yield call(service.getCinemasLocation, location);

    yield put({type: types.SET_CINEMAS_LOCATION, payload: data.results});
  } catch (error) {}
}

function* getCinemasDetail(action) {
  try {
    const id = action.payload;

    const {data} = yield call(service.getCinemasDetail, id);

    yield all([
      put({type: types.SET_CINEMA_DETAIL, payload: data.result}),
      put({type: types.SHOW_CINEMA_DETAIL}),
    ]);
  } catch (error) {}
}

export default function* mapSaga() {
  yield all([
    takeLatest(types.GET_INITIAL_LOCATION, getLocation),
    takeLatest(types.GET_CINEMAS_LOCATION, getCinemasLocation),
    takeLatest(types.GET_CINEMA_DETAIL, getCinemasDetail),
  ]);
}
