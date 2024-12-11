import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import profileReducer from "./profileReducer";

const rootReducer = combineReducers({
    counter: counterReducer,
    profile: profileReducer,
});

export default rootReducer;