const db = require("../configs/firebase").database();



module.exports =  {

    list(req, res) {
        db.ref(`events`).orderByKey().once("value", data => {
            if(!data.val()) return res.status(200).send([]);
            const obj = data.val();
            let _data = Object.values(obj);
            let ids = Object.keys(obj);
            if(_data) {
                _data = _data.reverse();
                ids = ids.reverse();
            }
            for(let i = 0; i < _data?.length; ++i) _data[i].id = ids[i];
            return res.status(200).send(_data);
        })
    },

    listCreated(req, res) {
        // req.user = {uid: "1"};
        db.ref(`events`).orderByChild("createdBy").equalTo(req.user.uid).once("value", data => {
            if(!data.val()) return res.status(200).send([]);
            const obj = data.val();
            let _data = Object.values(obj);
            let ids = Object.keys(obj);
            if(_data) {
                _data = _data.reverse();
                ids = ids.reverse();
            }
            for(let i = 0; i < _data.length; ++i) _data[i].id = ids[i];
            return res.status(200).send(_data);
        });
    },

    listJoined(req, res) {
        // req.user = {uid: "1"}; // testing
        db.ref(`users/${req.user.uid}/joinedEvents`).orderByKey().once("value", joinedEvents => {
            if(!joinedEvents.val()) return res.status(200).send([]);
            let ret = Object.values(joinedEvents.val());
            return res.status(200).send(ret);
        });     
    },

    create(req, res) {
        // req.user = {uid: "1"}; // testing
        const fields = ["name", "description", "address", "maxCap", "price", "sport"]
        const miss = [];
        const evnt = {};
        for(let f of fields) {
            if(!req.body[f]) miss.push(f);
            else evnt[f] = req.body[f];
        }
        if(miss.length) return res.status(400).send(`Missing field(s): ${miss}`);

        evnt.createdBy = req.user.uid

        db.ref(`events`).push(evnt, (e) => {
            if(e) return res.status(400).send(e);
            return res.sendStatus(201);
        });
    },

    join(req, res) {
        // req.user = { uid: "1" }; // testing
        const { event } = req.body;
        db.ref(`events/${event.id}/participants`).push(req.user);
        db.ref(`users/${req.user.uid}/joinedEvents`).push(event);
        return res.sendStatus(200);
    }

}