import { all, call, put, takeLatest } from "redux-saga/effects";
import { GET_LOCATION, GET_LOCATION_SUCCESS } from "../../actions";
import { apiUrl } from "../../utils/getUrl";
import axios from "axios";

export function* getLocation({
  type,
  lattLong,
}: {
  type: string;
  lattLong: any;
}) {
  const url = apiUrl("location/search");
  const res = yield axios.get(apiUrl("location/search?lattlong=36.96,-122.02"));
  console.log("url---", url);
  // const endpoint =
  //   "https://gist.githubusercontent.com/brunokrebs/f1cacbacd53be83940e1e85860b6c65b/raw/to-do-items.json";
  // const response = yield call(fetch, endpoint);
  // const data = yield response.json();
  yield put({ type: GET_LOCATION_SUCCESS, toDoList: res.json() });
}

export function* getLocationSagas() {
  yield takeLatest(GET_LOCATION, getLocation);
}
