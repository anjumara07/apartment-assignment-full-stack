import { createStore, combineReducers } from "redux";
import {residentReducer } from "../Resident/reducer";
import {reducer} from "../Login/reducer"

const rootReducer = combineReducers({
    data: residentReducer,
    reducer: reducer
})

export const store = createStore(
  rootReducer, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

