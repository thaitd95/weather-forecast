import { GetLocationRequest, GetLocationResponse } from "../../models/GetLocation";

export const GET_LOCATION = "GET_LOCATION";
export const GET_LOCATION_SUCCESS = "GET_LOCATION_SUCCESS";
export const GET_LOCATION_ERROR = "GET_LOCATION_ERROR";

export const getLocation = (req: GetLocationRequest) => {
  return {
    type: GET_LOCATION,
    payload: req,
  };
}

export const getLocationSuccess = (res: GetLocationResponse) => {
  return {
    type: GET_LOCATION_SUCCESS,
    payload: res,
  };
}

export const getLocationError = (res: any) => {
  return {
    type: GET_LOCATION_ERROR,
    payload: res,
  };
}