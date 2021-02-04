import axios from 'axios';

export const API = axios.create({
    baseURL: 'http://192.168.0.7:8000',
    //baseURL: 'http://esportizando.herokuapp.com',
    headers: {
        'Content-type': 'application/json'
    }
});

export const setup = (store) => {
    API.interceptors.response.use(
        res => res,
        err => {
            console.log(err);
            if (err.response.status === 401) {
                console.log("entrou");
                store.dispatch({
                    type: "SIGN_OUT"
                });
            }
            return Promise.resolve();
        }
    );
};

export const config = (token) => {
    //console.log(token);
    API.defaults.headers.common['Authorization'] = 'Bearer ' + token;
};
