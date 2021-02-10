import {configureStore} from "../_snowpack/pkg/@reduxjs/toolkit.js";
import {rootReducer} from "./reducers/index.js";
const store = configureStore({
  reducer: rootReducer
});
export default store;
