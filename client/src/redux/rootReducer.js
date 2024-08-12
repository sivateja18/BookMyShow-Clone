import { combineReducers } from 'redux';
import loaderReducer from "./loaderSlice";
import userReducer from "./userSlice";

const rootReducer = combineReducers({
    loader: loaderReducer,
    user: userReducer
});

export default rootReducer;