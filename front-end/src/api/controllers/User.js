import { API } from '../index.js';

const create = () => {
    return API.post('/user');
};

const verifyQuestionnaire = () => {
    return API.get('/user');
};


const UserController = {
    create,
    verifyQuestionnaire
};

export default UserController;
