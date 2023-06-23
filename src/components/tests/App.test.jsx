import { render } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';
import { legacy_createStore as createStore, applyMiddleware } from "redux";
import reducers from '../../modules';
import App from '../App';

describe('App component', () => {
    it('should render app with error', () => {
        const createSoteWithMiddleware = applyMiddleware(reduxThunk)(createStore);
        const {asFragment} = render(
            <Provider store={
                createSoteWithMiddleware(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ 
                && window.__REDUX_DEVTOOLS_EXTENSION__())
            }>
                <App />
            </Provider>);
        expect(asFragment()).toMatchSnapshot();
    });
});