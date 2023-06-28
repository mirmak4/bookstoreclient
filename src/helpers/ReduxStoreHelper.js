import reduxThunk from 'redux-thunk';
// import { legacy_createStore as createStore, applyMiddleware } from "redux";
// import { createStore, applyMiddleware } from "redux";
import { configureStore } from '@reduxjs/toolkit';
import reducers from '../modules';

// LEGACY VERSION
/*
const createSoteWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const storeWithMiddleware = createSoteWithMiddleware(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ 
    && window.__REDUX_DEVTOOLS_EXTENSION__());
*/


const createSoteWithMiddleware = (reds = reducers, state = {}) => {
    return configureStore({
        reducer: reds,
        middleware: [reduxThunk],
        devTools: process.env.NODE_ENV !== 'production',
        preloadedState: state
    });
};
const storeWithMiddleware = createSoteWithMiddleware();


export {
    createSoteWithMiddleware,
    storeWithMiddleware
}