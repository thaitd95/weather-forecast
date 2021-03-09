import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import { getLocationReducer } from "../app/reducers";
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();

export default configureStore({
  reducer: {
    getLocation: getLocationReducer,
  },
  middleware: applyMiddleware(sagaMiddleware)
});
