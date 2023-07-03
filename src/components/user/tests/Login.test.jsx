import React from 'react';
import { renderWithRedux } from '../../../helpers/test_helpers/TestSetupProvider';
import Login from '../Login';
import { fireEvent, waitFor } from '@testing-library/react';
import { passwordLabel, passwordMinText, usernameLabel, userNameMinText, userNameRequiredText } from '../../../helpers/Consts';
import { BrowserRouter } from 'react-router-dom';
import { loginAction } from '../../../modules/user/UserAction';

jest.mock('../../../modules/user/UserAction');

describe('Login test', () => {

    it('should show error message for username and password', async () => {
        // given
        const { findByText } = renderWithRedux(<BrowserRouter><Login /></BrowserRouter>, {});
        const submitButton = await findByText('Login');

        // when
        fireEvent.submit(submitButton);

        // then
        expect(await findByText(userNameRequiredText)).toBeInTheDocument();
    });

    it('should show username and password invalid error messages', async () => {
        // given
        const { findByText, getByLabelText } = renderWithRedux(<BrowserRouter><Login /></BrowserRouter>, {});
        const submitButton = await findByText('Login');
        const passwordField = getByLabelText(passwordLabel);
        const usernameField = getByLabelText(usernameLabel);

        // when
        fireEvent.change(passwordField, { target: { value: 'xyz' } } );
        fireEvent.change(usernameField, { target: { value: 'a' } } );
        fireEvent.submit(submitButton);

        // then
        expect(await findByText(userNameMinText)).toBeInTheDocument();
        expect(await findByText(passwordMinText)).toBeInTheDocument();
    });

    it('should call login action when username and password are valid', async () => {
        // given
        const { findByText, getByLabelText } = renderWithRedux(<BrowserRouter><Login /></BrowserRouter>, {});
        const passwordField = getByLabelText(passwordLabel);
        const usernameField = getByLabelText(usernameLabel);
        const submitButton = await findByText('Login');
        loginAction.mockImplementation(() => (dispatch) => {});
        const username = 'kazanik';
        const password = 'haslo1234';

        // when
        fireEvent.change(passwordField, { target: { value: password } } );
        fireEvent.change(usernameField, { target: { value: username } } );
        fireEvent.submit(submitButton);

        // then
        await waitFor(() => {
            expect(loginAction).toHaveBeenCalledWith(username, password);
        });
    });
});