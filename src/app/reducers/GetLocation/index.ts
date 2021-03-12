import {
  GET_LOCATION,
  GET_LOCATION_SUCCESS,
  GET_LOCATION_ERROR,
} from "../../actions";

const initialState = {};

export default function getLocationReducer(state = initialState, action: any) {
  switch (action.type) {
    case GET_LOCATION:
      return { ...state, loading: true };
    case GET_LOCATION_SUCCESS:
      return { ...state, data: action.data, loading: false };
    case GET_LOCATION_ERROR:
      return { ...state, loading: false };
    default:
      return state;
  }
}
