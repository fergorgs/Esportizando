const db = require("../configs/firebase").database();
const fields = ["name", "description", "date", "time", "address", "maxCap", "price", "sport", "covidRules", "createdAt"];

module.exports =  {

    list(req, res) {
        db.ref(`events`).orderByKey().once("value", data => {
            db.ref(`users/${req.user.uid}/joinedEvents`).once("value", snap => {
                const joinedEvents = snap.val();
                if(!data.val()) return res.status(200).send([]);
                const obj = data.val();
                let _data = Object.values(obj);
                let ids = Object.keys(obj);
                if(_data) {
                    _data = _data.reverse();
                    ids = ids.reverse();
                }
                for(let i = 0; i < _data?.length; ++i) {
                    _data[i].id = ids[i];
                    if(_data[i].createdBy === req.user.uid) _data[i].status = "creator";
                    else if(joinedEvents?.[ids[i]]) _data[i].status = "participant";
                }
                return res.status(200).send(_data);
            })
        })
    },

    listCreated(req, res) {
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
        db.ref(`users/${req.user.uid}/joinedEvents`).orderByKey().once("value", joinedEvents => {
            if(!joinedEvents.val()) return res.status(200).send([]);
            let ret = Object.values(joinedEvents.val());
            return res.status(200).send(ret);
        });     
    },

    create(req, res) {
        const miss = [];
        const evnt = {};
        for(let f of fields) {
            if(req.body[f] === undefined) miss.push(f);
            else evnt[f] = req.body[f];
        }
        if(miss.length) return res.status(400).send(`Missing field(s): ${miss}`);

        evnt.createdBy = req.user.uid
        evnt.createdAt = new Date();

        db.ref(`events`).push(evnt, (e) => {
            if(e) return res.status(400).send(e);
            return res.sendStatus(201);
        });
    },

    join(req, res) {
        const { event } = req.body;
        if(!event) return res.status(400).send("No event specified");
        if(!event.participants) event.participants = {};
        event.participants[req.user.uid] = true
        const update = {};
        for(let part in event.participants) 
            update[`users/${part}/joinedEvents/${event.id}`] = event;
        update[`events/${event.id}/participants/${req.user.uid}`] = true;
        db.ref().update(update, e => {
            if(e) return res.status(400).send(e.message);
            return res.sendStatus(200);
        });
    },

    update(req, res) {
        const { eventId } = req.body;
        if(eventId === undefined) return res.status(400).send("No event id specified");
        db.ref(`events/${eventId}`).once("value", data => {
            const obj = data.val();
            if(!obj) return res.status(400).send("No such event");
            if(obj.createdBy !== req.user.id) res.status(400).send("Access denied");
            const nEvent = {};
            for(let f of fields) 
                nEvent = fields[f];
            const update = {};
            const updatedEvent = {...obj, ...nEvent};
            for(let el in obj.participants) update[`users/${el}/joinedEvents/${eventId}`] = updatedEvent;
            update[`/events/${eventId}`] = updatedEvent;
            db.ref().update(update, (e) => e ? res.status(400).send(e) : res.sendStatus(200));
        });
    }

}
