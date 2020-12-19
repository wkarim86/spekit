import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import appReducer from "./reducer";
import initialStates from "./initialstates";
import logger from "redux-logger";

let middleWares = [thunk];
if (process.env.NODE_ENV === "development") {
	middleWares.push(logger);
}

const store = createStore(
	appReducer,
	initialStates,
	applyMiddleware(...middleWares)
);

export default store;
