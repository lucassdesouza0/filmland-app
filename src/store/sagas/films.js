import {all, takeLatest, call, put, select} from 'redux-saga/effects';

import {types} from '../ducks/films';
import * as service from '../../services/films';

import {NavigationActions} from 'react-navigation';

import {SnackbarShow, snackbarShowError} from '../ducks/snackbar';

function* get(action) {
  try {
    const page = action.search.page;
    const search = yield select(state => state.films.search);
    const {data} = yield call(service.searchByQuery, search, page);

    yield put({type: types.GET_FILMS_BY_QUERY_SUCCESS, payload: data.results});
  } catch (error) {
    yield put(snackbarShowError('Ocorreu um problema, tente mais tarde'));
  }
}

function* getLocalFilms() {
  const filmsSaved = yield call(service.getFilmsSaved);
  yield put({type: types.GET_FILMS_SAVED, payload: filmsSaved});
}

function* saveFilm(action) {
  const {title, poster_path, release_date, overview} = action.data;

  const film = {title, poster_path, release_date, overview};

  let filmsSaved = yield call(service.getFilmsSaved);

  yield call(service.saveFilme, {...filmsSaved, ...film});

  const teste = yield call(service.getFilmsSaved);
}

export default function* filmsSaga() {
  yield all([
    takeLatest(types.ASYNC_GET_FILMS_BY_QUERY, get),
    takeLatest(types.ASYNC_GET_LOCAL_FILMS, getLocalFilms),
    takeLatest(types.SAVE_FILM, saveFilm),
  ]);
}
