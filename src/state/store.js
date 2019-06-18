import { combineReducers, createStore } from "redux";
import * as reducers from "./ducks";

const rootReducer = (state, action) => {
    return combineReducers(reducers)(state, action)
};

export default createStore(
    rootReducer
);