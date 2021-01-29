import axios from 'axios';

export const API = axios.create({
    baseURL: 'http://192.168.0.35:8000',
    headers: {
        'Content-type': 'application/json'
    }
});

export const config = (token) => {
    console.log(token);
    API.defaults.headers.common['Authorization'] = 'Bearer ' + token;
};
