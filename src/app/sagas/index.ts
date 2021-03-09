import { all } from "redux-saga/effects";
import { getLocationSagas } from "./GetLocation";

export default function* rootSaga() {
    yield all([getLocationSagas()]);
  }