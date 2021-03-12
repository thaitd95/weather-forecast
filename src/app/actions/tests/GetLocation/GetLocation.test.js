import {
  GET_LOCATION,
  GET_LOCATION_ERROR,
  GET_LOCATION_SUCCESS,
  getLocation,
  getLocationError,
  getLocationSuccess,
} from "../../GetLocation";

test("Get Location", () => {
  const req = {
    name: "abc",
  };
  const expectedAction = {
    type: GET_LOCATION,
    payload: req,
  };
  expect(getLocation(req)).toEqual(expectedAction);
});

test("Get Location success", () => {
  const res = { data: [] };
  const expectedAction = {
    type: GET_LOCATION_SUCCESS,
    payload: res,
  };
  expect(getLocationSuccess(res)).toEqual(expectedAction);
});

test("Get Location error", () => {
  const res = {};
  const expectedAction = {
    type: GET_LOCATION_ERROR,
    payload: res,
  };
  expect(getLocationError(res)).toEqual(expectedAction);
});
