import { call, put, takeLatest } from "redux-saga/effects";
import {
  GET_WEATHER,
  GET_WEATHER_SUCCESS,
  GET_WEATHER_ERROR,
} from "../../actions";
import { getWeatherAPI } from "../../services/weatherServices";

export function* getWeather({ type, payload }: { type: string; payload: any }) {
  try {
    const { woeid, date } = payload;
    const { data } = yield call(getWeatherAPI, woeid, date);
    yield put({ type: GET_WEATHER_SUCCESS, data });
  } catch (error) {
    yield put({ type: GET_WEATHER_ERROR });
  }
}

export function* getWeatherSagas() {
  yield takeLatest(GET_WEATHER, getWeather);
}
