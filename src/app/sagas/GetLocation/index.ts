import { isEmpty } from "lodash";
import moment from "moment";
import { call, put, takeLatest } from "redux-saga/effects";
import {
  GET_LOCATION,
  GET_LOCATION_ERROR, GET_LOCATION_SUCCESS,
  GET_WEATHER
} from "../../actions";
import { getLocationAPI } from "../../services/locationServices";

export function* getLocation({
  type,
  payload,
}: {
  type: string;
  payload: any;
}) {
  try {
    const { name } = payload;
    const { data } = yield call(getLocationAPI, name);
    yield put({ type: GET_LOCATION_SUCCESS, data });
    if (!isEmpty(data)) {
      const { woeid } = data[0];
      const date = moment().format("YYYY/MM/DD");
      const payload = { woeid, date };
      yield put({ type: GET_WEATHER, payload });
    }
  } catch (error) {
    yield put({ type: GET_LOCATION_ERROR });
  }
}

export function* getLocationSagas() {
  yield takeLatest(GET_LOCATION, getLocation);
}
