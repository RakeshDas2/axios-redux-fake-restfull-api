import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import fetchDataReducer from "./reducers/fetchDataReducer";
import selectDataReducer from "./reducers/selectDataReducer";

 const allReducer = combineReducers({
    fetchDataReducer,
    selectDataReducer
   

})

export const store=createStore(allReducer, applyMiddleware(thunk))
