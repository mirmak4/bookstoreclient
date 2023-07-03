import { combineReducers } from "redux";
import bookReducer from "./book/BookReducer";
import userReducer from './user/UserReducer';

export default combineReducers({
    bookReducer: bookReducer,
    userReducer: userReducer,
})