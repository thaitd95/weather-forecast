import { GET_LOCATION, GET_LOCATION_SUCCESS, GET_LOCATION_ERROR } from "../../actions";

const initialState = {};

export default function getLocationReducer(state = initialState, action: any) {
  switch (action.type) {
    case GET_LOCATION:
      console.log("get location");
      return state;
    case GET_LOCATION_SUCCESS:
      console.log("get success");
      return state;
    case GET_LOCATION_ERROR:
      console.log("get error");
      return state;
    default:
      return state;
  }
}
