import { GetWeatherRequest } from "../../models/GetWeather";

export const GET_WEATHER = "GET_WEATHER";
export const GET_WEATHER_SUCCESS = "GET_WEATHER_SUCCESS";
export const GET_WEATHER_ERROR = "GET_WEATHER_ERROR";

export const getWeather = (req: GetWeatherRequest) => {
  return {
    type: GET_WEATHER,
    payload: req,
  };
}

export const getWeatherSuccess = (res: any) => {
  return {
    type: GET_WEATHER_SUCCESS,
    payload: res,
  };
}

export const getWeatherError = (res: any) => {
  return {
    type: GET_WEATHER_ERROR,
    payload: res,
  };
}