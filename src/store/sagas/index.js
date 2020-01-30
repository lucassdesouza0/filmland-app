import { all, fork } from "redux-saga/effects";

import mainSaga from "./main";

export default function* rootSaga() {
  yield all([mainSaga()]);
}
