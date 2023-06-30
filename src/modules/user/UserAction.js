import { tokenKey, userLoginActionName } from '../../helpers/Consts';
import { login } from './UserService';

/**
 * Login action is a function which takes 
 *      username and password 
 * and returns another function which takes
 *      dispatch object
 * 
 * @param {*} userName 
 * @param {*} password 
 * @returns 
 */
export const loginAction = (userName, password) => async (dispatch) => {

    // issue axios request to login api
    const response = await login(userName, password);

    // save received jwt token in local storage
    window.localStorage.setItem(tokenKey, response.data.token);

    // dispatch redux action
    dispatch({
        type: userLoginActionName,
        payload: response.data
    });
};