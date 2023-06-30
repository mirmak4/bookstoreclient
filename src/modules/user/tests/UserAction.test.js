import { mockedStore } from '../../../helpers/test_helpers/TestSetupProvider';
import axios from 'axios';
import { loginAction } from '../UserAction';
import { userLoginActionFinal, userLoginActionResponse } from '../../../helpers/test_helpers/TestDataProvider';

jest.mock('axios');

describe('Login Action', () => {

    beforeEach(() => {
        axios.post.mockImplementation(() => {
            return Promise.resolve(userLoginActionResponse);
        });
    });

    it('should dispatch login action and save jwt token in local storage', async () => {
        // given
        const store = mockedStore({});
        const userName = 'user';
        const password = 'pass';

        // when
        await store.dispatch(loginAction(userName, password));

        // then
        const actions = store.getActions();
        expect(actions.length).toEqual(1);
        expect(actions[0]).toEqual(userLoginActionFinal);
    });
});