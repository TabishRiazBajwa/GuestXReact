import { spawn, all } from "redux-saga/effects";
import authSagas from "../sagas/auth.sagas";
import callAnalyticsSagas from "../sagas/callAnalytics.sagas";
import marketeAnalyticsSagas from "../sagas/marketeAnalytics.sagas";

export default function* rootSaga() {
  yield all([spawn(authSagas)]);
  yield all([spawn(callAnalyticsSagas)]);
  yield all([spawn(marketeAnalyticsSagas)]);
}
