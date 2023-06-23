import reduxThunk from 'redux-thunk';
import { legacy_createStore as createStore, applyMiddleware } from "redux";
import reducers from '../modules';

const createSoteWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const storeWithMiddleware = createSoteWithMiddleware(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ 
    && window.__REDUX_DEVTOOLS_EXTENSION__());

export default storeWithMiddleware;