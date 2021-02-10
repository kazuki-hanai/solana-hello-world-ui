import {combineReducers} from "../../_snowpack/pkg/@reduxjs/toolkit.js";
import {helloWorldReducer} from "./helloWorldState.js";
export const rootReducer = combineReducers({
  helloWorldState: helloWorldReducer
});
