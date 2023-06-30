import { userLoginFinalState, userLoginInitialState } from "../../../helpers/test_helpers/TestDataProvider";
import userReducer, { INITIAL_USER_REDUCER_STATE } from "../UserReducer";

describe('User Reducer', () => {

    it('should return new state for login user action', () => {
        // given
        const newState = userReducer(INITIAL_USER_REDUCER_STATE, userLoginInitialState);

        // then
        expect(newState).toEqual(userLoginFinalState);
    });
});