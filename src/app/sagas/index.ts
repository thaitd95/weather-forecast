import { all } from "redux-saga/effects";
import { getLocationSagas } from "./GetLocation";
import { getWeatherSagas } from "./GetWeather";

export default function* rootSaga() {
  yield all([getLocationSagas(), getWeatherSagas()]);
}
