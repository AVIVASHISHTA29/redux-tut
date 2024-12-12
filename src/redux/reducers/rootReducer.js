import { combineReducers } from "redux";
import bookReducer from "./bookReducer";
import personalReducer from "./personalReducer";

const rootReducer = combineReducers({
    book: bookReducer,
    personal: personalReducer,
});

export default rootReducer;