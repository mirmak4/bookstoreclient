import axios from 'axios';
import baseUrl from '../../config';

export const login = (username, password) => {
    
    return axios.post(`${baseUrl}/bookstore/login`, {
        username,
        password
    });
};