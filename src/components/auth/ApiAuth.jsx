import React from 'react';
import { useSelector } from 'react-redux';
import { getUserToken } from '../../modules/user/UserSelector';
import { Navigate, Outlet } from 'react-router-dom';

const ApiAuth = () => {

    const token = useSelector(getUserToken);
    const isUserLoggedIn = token != null && token != '';

    return isUserLoggedIn ? <Outlet /> : <Navigate to="/login" />;
};

export default ApiAuth;