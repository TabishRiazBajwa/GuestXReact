import { all, spawn } from "redux-saga/effects";
import iresSaga from "./sagas";

export default function* root() {
  yield all([spawn(iresSaga)]);
}
