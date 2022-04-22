import { createStore, combineReducers } from "redux";
import {residentReducer } from "../Resident/reducer";

const rootReducer = combineReducers({
    data: residentReducer,
})

export const store = createStore(
  rootReducer, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

