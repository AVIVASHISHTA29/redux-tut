import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import dataReducer from "./dataReducer";
import profileReducer from "./profileReducer";

const rootReducer = combineReducers({
    counter: counterReducer,
    profile: profileReducer,
    data: dataReducer,
});

export default rootReducer;