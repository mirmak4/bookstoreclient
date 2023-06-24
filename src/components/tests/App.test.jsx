import { render } from '@testing-library/react';
import React from 'react';
import App from '../App';
import { renderWithRedux } from '../../modules/book/tests/helpers/TestSetupProvider';

describe('App component', () => {
    it('should render app with error', () => {
        const {asFragment} = renderWithRedux(<App />, {});
        expect(asFragment()).toMatchSnapshot();
    });
});