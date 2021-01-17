const db = require("../configs/firebase").database();



module.exports =  {

    list(req, res) {
        // req.user = {uid: "1"};
        db.ref(`events/${req.user.uid}`).orderByKey().once("value", data => {
            if(!data.val()) return res.status(200).send([]);
            let ret = Object.values(data.val());
            if(ret) ret = ret.reverse();
            return res.status(200).send(ret);
        })
    },

    create(req, res) {
        // req.user = {uid: "1", email: "test"}; // testing
        db.ref(`events/${req.user.uid}`).push({
            createdBy: req.user.email,
            sports: req.body.sports,
            date: req.body.date
        }, (e) => {
            if(e) return res.status(400).send(e);
            return res.sendStatus(201);
        });
    }

}