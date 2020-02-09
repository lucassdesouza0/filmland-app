import {all, takeLatest, call, put, select} from 'redux-saga/effects';

import {types} from '../ducks/films';
import * as service from '../../services/films';

import {NavigationActions} from 'react-navigation';

import {SnackbarShow, snackbarShowError} from '../ducks/snackbar';

function* get(action) {
  try {
    const search = yield select(state => state.films.search);
    const {data} = yield call(service.searchByQuery, search, 1);

    yield put({type: types.GET_FILMS_BY_QUERY_SUCCESS, payload: data.results});
  } catch (error) {
    yield put(snackbarShowError(`${error}`));
  }
}

export default function* filmsSaga() {
  yield all([takeLatest(types.ASYNC_GET_FILMS_BY_QUERY, get)]);
}
