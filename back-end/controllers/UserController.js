const db = require("../configs/firebase").database();

module.exports =  {

    index(req, res) {
        db.ref(`users/${req.user.uid}`).once("value", snap => {
            const data = snap.val();
            if(!data) return res.status(400).send("No such user");
            return res.status(200).send(data);
        });
    },

    create(req, res) {
        db.ref(`users/${req.user.uid}`).set({ uid: req.user.uid, email: req.user.email, tookTest: false }, e => {
            if(e) return res.status(400).send(e.message);
            return res.sendStatus(200);
        });
    }

}