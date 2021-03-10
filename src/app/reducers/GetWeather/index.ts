import {
  GET_WEATHER,
  GET_WEATHER_SUCCESS,
  GET_WEATHER_ERROR,
} from "../../actions";

const initialState = {};

export default function getWeatherReducer(state = initialState, action: any) {
  switch (action.type) {
    case GET_WEATHER:
      console.log("get weather");
      return state;
    case GET_WEATHER_SUCCESS:
      console.log("get weather success");
      return { ...state, ...action.data };
    case GET_WEATHER_ERROR:
      console.log("get weather error");
      return state;
    default:
      return state;
  }
}
