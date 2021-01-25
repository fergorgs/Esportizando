import { API } from '../index.js';

const getAll = () => {
    return API.get("/event");
};

const get = id => {
    return API.get(`/event/${id}`);
};

const create = data => {
    return API.post("/event", data);
};

const update = (id, data) => {
    return API.put(`/event/${id}`, data);
};

const remove = id => {
    return API.delete(`/event/${id}`);
};

const subscribe = id => {
    return API.post(`/event/${id}`);
}

const EventController = {
    getAll,
    get,
    create,
    update,
    remove,
    subscribe
};

export default EventController;
