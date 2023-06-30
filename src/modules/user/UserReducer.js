import { userLoginActionName } from "../../helpers/Consts";

export const INITIAL_USER_REDUCER_STATE = {
    token: '',
    promise: {
        isPending: false,
        isFulfilled: false,
        isErrorOccured: false
    }
};

const userReducer = (state = INITIAL_USER_REDUCER_STATE, action) => {

    switch(action.type) {

        // return new state when 'USERLOGIN' action dispatch
        case userLoginActionName: {
            return {
                ...state,
                token: action.payload.token,
            };
        }

        // otherwise just return state
        default: {
            return state;
        }
    }
};

export default userReducer;