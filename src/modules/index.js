import { combineReducers } from "redux";
import bookReducer from "./book/BookReducer";

export default combineReducers({
    bookReducer: bookReducer
})