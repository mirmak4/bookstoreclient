import axios from 'axios';
import baseUrl from '../../config';

export const login = (userName, password) => {
    
    return axios.post(`${baseUrl}/login`, {
        userName,
        password
    });
};