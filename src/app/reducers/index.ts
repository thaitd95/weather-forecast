import { combineReducers } from "redux";
import getLocationReducer from "./GetLocation";
import getWeatherReducer from "./GetWeather";

export default combineReducers({
  getLocation: getLocationReducer,
  getWeather: getWeatherReducer,
});
