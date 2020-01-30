import {all, takeLatest, call, put, select} from 'redux-saga/effects';

import {types} from '../ducks/main';
import * as service from '../../services/api';

import {NavigationActions} from 'react-navigation';

import {SnackbarShow, snackbarShowError} from '../ducks/snackbar';

function* get() {
  try {
    yield put({type: types.GET});
  } catch (error) {
    yield put(
      snackbarShowError(
        'Ocorreu um erro buscar os produtos do servidor. Tente novamente.',
      ),
    );
  }
}

export default function* mainSaga() {
  yield all([takeLatest(types.ASYNC_GET, get)]);
}
