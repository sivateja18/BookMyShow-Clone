import { configureStore } from "@reduxjs/toolkit";
// import loaderReducer from "./loaderSlice";
// import userReducer from "./userSlice";
import rootReducer from './rootReducer';

const store = configureStore({
//   reducer: {
//     loader: loaderReducer,
//     user: userReducer,
//   }
  
  // we can combine multiple reducers into one by "combineReducers" Redux Toolkit function
  // which implemented in rootReducer file.
  reducer: rootReducer
});

export default store;
