// LOGIN START

// user name
export const userNameMinChars = 3;
export const userNameMaxChars = 24;
export const userNameText = 'Enter your user name';
export const userNameRequiredText = 'User name is required';
export const userNameMinText = `User name should have at least ${userNameMinChars} characters`;
export const userNameMaxText = `User name should not have more than ${userNameMaxChars} characters`;

// password
export const passwordMinChars = 8;
export const passwordMaxChars = 16;
export const passwordText = 'Enter your password';
export const passwordMinText = `Password should have at least ${passwordMinChars} characters`;
export const passwordMaxText = `Password should not have more than ${passwordMaxChars} characters`;
export const passwordRequiredText = 'Password is required';

// local storage
export const tokenKey = 'bookstore-token';

// action
export const userLoginActionName = 'USERLOGIN';
export const userPromisePending = 'USERPENDING';
export const userPromiseSuccess = 'USERSUCCESS';
export const userPromiseError = 'USERERROR';

// errors
export const loginErrorSnack = 'Username or password is incorrect!';
export const loginSuccessSnack = 'Login success!';

// LOGIN END