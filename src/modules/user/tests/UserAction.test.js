import { mockedStore } from '../../../helpers/test_helpers/TestSetupProvider';
import axios from 'axios';
import { loginAction } from '../UserAction';

jest.mock('axios');

describe('Login Action', () => {

    beforeEach(() => {
        axios.post.mockImplementation(() => {
            return Promise.resolve({
                data: {
                    token: 'jwt token',
                },
            });
        });
    });

    it('should dispatch login action and save jwt token in local storage', async () => {
        // given
        const store = mockedStore({});

        // when
        await store.dispatch(loginAction('user', 'pass'));

        // then
        const actions = store.getActions();
        expect(actions.length).toEqual(1);
        expect(actions[0]).toEqual({
            type: 'USERLOGIN',
            payload: {
                token: 'jwt token',
            },
        });
    });
});