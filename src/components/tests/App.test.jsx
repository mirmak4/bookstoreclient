import { render } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import App from '../App';
import storeWithMiddleware from '../../helpers/ReduxStoreHelper';

describe('App component', () => {
    it('should render app with error', () => {
        const {asFragment} = render(
            <Provider store={
                storeWithMiddleware
            }>
                <App />
            </Provider>);
        expect(asFragment()).toMatchSnapshot();
    });
});