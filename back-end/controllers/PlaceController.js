const db = require("../configs/firebase").database();
const fields = ["name", "address", "lat", "long"];

module.exports =  {

    list(req, res) {
        db.ref(`places`).orderByKey().once("value", data => {
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
        db.ref(`places`).orderByChild("createdBy").equalTo(req.user.uid).once("value", data => {
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

    create(req, res) {
        const miss = [];
        const palce = {};
        for(let f of fields) {
            if(req.body[f] === undefined) miss.push(f);
            else palce[f] = req.body[f];
        }
        if(miss.length) return res.status(400).send(`Missing field(s): ${miss}`);

        palce.createdBy = req.user.uid;

        db.ref(`palces`).push(palce, (e) => {
            if(e) return res.status(400).send(e);
            return res.sendStatus(201);
        });
    },

    update(req, res) {
        const placeId = req.body.placeId;
        if(placeId === undefined) return res.status(400).send("No place id specified");
        db.ref(`places/${placeId}`).once("value", data => {
            const obj = data.val();
            if(!obj) return res.statu(400).send("No such place");
            if(obj.createdBy !== req.user.uid) return res.status(400).send("Access denied")
            const nPlace = {};
            const miss = [];
            for(let f of fields) 
                nPlace[f] = req.body[f];
            if(miss.length) return res.status(400).send(`Missing field(s): ${miss}`);
            db.ref(`places/${placeId}`).set({...obj, ...nPlace}, 
                err => {
                    if(err) return res.status(400).send(err);
                    else res.sendStatus(200);
                });
        })
    }

}