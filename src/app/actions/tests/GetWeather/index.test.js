import {
  GET_WEATHER,
  GET_WEATHER_ERROR,
  GET_WEATHER_SUCCESS,
  getWeather,
  getWeatherError,
  getWeatherSuccess,
} from "../../GetWeather";

test("Get Weather", () => {
  const req = {
    name: "abc",
  };
  const expectedAction = {
    type: GET_WEATHER,
    payload: req,
  };
  expect(getWeather(req)).toEqual(expectedAction);
});

test("Get Weather success", () => {
  const res = { data: [] };
  const expectedAction = {
    type: GET_WEATHER_SUCCESS,
    payload: res,
  };
  expect(getWeatherSuccess(res)).toEqual(expectedAction);
});

test("Get Weather error", () => {
  const res = {};
  const expectedAction = {
    type: GET_WEATHER_ERROR,
    payload: res,
  };
  expect(getWeatherError(res)).toEqual(expectedAction);
});
