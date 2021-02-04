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
const get = () => {
    return API.get(`/timeline`);
};

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
//const subscribe = event => {
//    return API.post(`/event/joined`, event);
//}

const TimelineController = {
    //getAll,
    //getAllCreated,
    //getAllSubscribed,
    get,
    //create,
    //update,
    //remove,
    //subscribe
};

export default TimelineController;
