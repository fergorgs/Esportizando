import { API } from '../index.js';

//const getAll = () => {
//    return API.get("/event");
//}
//
//const getAllCreated = () => {
//    return API.get("/event/created");
//};
//
//const getAllSubscribed = () => {
//    return API.get("/event/joined");
//};
//
//const get = id => {
//    return API.get(`/event/${id}`);
//};
//
//const create = data => {
//    return API.post("/event", data);
//};
//
//const update = (id, data) => {
//    return API.put(`/event/${id}`, data);
//};
//
//const remove = id => {
//    return API.delete(`/event/${id}`);
//};
//
const getSports = () => {
    return API.get(`/questionnaire`);
};

const submit = data => {
    return API.post(`/questionnaire`, data);
}

const QuestionnaireController = {
    submit,
    getSports
    //getAll,
    //getAllCreated,
    //getAllSubscribed,
    ////get,
    //create,
    ////update,
    ////remove,
    //subscribe
};

export default QuestionnaireController;
