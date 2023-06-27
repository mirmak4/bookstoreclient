import React from 'react';
import App from '../App';
import { renderWithRedux } from '../../helpers/test_helpers/TestSetupProvider';
import { bookReducerStateWithData } from '../../helpers/test_helpers/TestDataProvider';

describe('App component', () => {
    it('should render app with error', () => {
        const {asFragment} = renderWithRedux(<App />, {initialState: bookReducerStateWithData});
        expect(asFragment()).toMatchSnapshot();
    });
});