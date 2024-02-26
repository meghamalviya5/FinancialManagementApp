import { createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import financeReducer from "../reducers/reducers";

const store = createStore(financeReducer, applyMiddleware(thunk));

export default store;
