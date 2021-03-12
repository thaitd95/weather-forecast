import {
  GET_WEATHER,
  GET_WEATHER_SUCCESS,
  GET_WEATHER_ERROR,
} from "../../actions";

const initialState = {};

export default function getWeatherReducer(state = initialState, action: any) {
  switch (action.type) {
    case GET_WEATHER:
      return { ...state, loading: true };
    case GET_WEATHER_SUCCESS:
      return { ...state, ...action.data, loading: false };
    case GET_WEATHER_ERROR:
      return { ...state, loading: false };
    default:
      return state;
  }
}
