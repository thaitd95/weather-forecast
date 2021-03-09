import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import { getLocationReducer } from "../app/reducers";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();

export default configureStore({
  reducer: {
    getLocation: getLocationReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);