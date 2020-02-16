import {all, takeLatest, call, put, select, delay} from 'redux-saga/effects';

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
      yield put({
        type: types.GET_CINEMAS_LOCATION,
        payload: true,
      });
    }
  } catch (error) {
    yield put(snackbarShowError('Erro ao encontrar sua localização atual'));
  }
}

function* getCinemasLocation(action) {
  try {
    const {latitude, longitude} = action.payload
      ? yield select(state => state.map.location)
      : action.region;

    yield delay(2000);

    const location = `${latitude},${longitude}`;

    const {data} = yield call(service.getCinemasLocation, location);

    yield put({type: types.SET_CINEMAS_LOCATION, payload: data.results});
  } catch (error) {
    yield put(snackbarShowError('Erro ao buscar o cinemas mais próximos'));
  }
}

function* getCinemasDetail(action) {
  try {
    const id = action.payload;

    const {data} = yield call(service.getCinemasDetail, id);

    yield all([
      put({type: types.SET_CINEMA_DETAIL, payload: data.result}),
      put({type: types.SHOW_CINEMA_DETAIL}),
    ]);
  } catch (error) {
    yield put(
      snackbarShowError('Erro ao buscar mais informações sobre o cinema'),
    );
  }
}

export default function* mapSaga() {
  yield all([
    takeLatest(types.GET_INITIAL_LOCATION, getLocation),
    takeLatest(types.GET_CINEMAS_LOCATION, getCinemasLocation),
    takeLatest(types.GET_CINEMA_DETAIL, getCinemasDetail),
  ]);
}
