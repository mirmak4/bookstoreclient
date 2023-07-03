import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { IsUserLoggedIn } from '../../helpers/UesrHelper';

const ApiAuth = () => {

    return IsUserLoggedIn() ? <Outlet /> : <Navigate to="/login" />;
};

export default ApiAuth;