const { recomend } = require("../helpers/SportRecomendation");
const db = require("../configs/firebase").database();

module.exports =  {

    index(req, res) {
        db.ref(`users/${req.user.uid}/questionnaire`).once("value", snap => {
            const data = snap.val();
            if(!data) return res.status(200).send([]);
            recomend(data, sports => res.status(200).send(sports));
        });
    },

    list(req, res) {
        db.ref(`sports`).once("value", snap => {
            const obj = snap.val();
            if(!obj) return res.status(200).send([]);
            const data = Object.values(obj);
            const ids = Object.keys(obj);
            for(let i = 0; i < data.length; ++i) 
                data[i].id = ids[i];
            return res.status(200).send(data);
        })
    },

    subs(req, res) {
        if(req.body.sport === undefined) return res.status(400).send("No sport specified");
        db.ref(`users/${req.user.uid}/subcribedSports/${sportId}`).set(req.body.sport, e => {
            if(e) return res.status(400).send(e.message);
            return res.sendStatus(200);
        });
    },

    create(req, res) {
        if(req.body.sports === undefined) return res.status(400).send("No sports specified");
        let sports = req.body.sports;
        if(!Array.isArray(sports)) sports = [sports];
        const updates = {};
        const sportsRef = db.ref("sports");
        for(let sport of sports) 
            updates[`sports/${sportsRef.push().key}`] = {...sport};
        console.log(updates);
        db.ref().update(updates, e => {
            if(e) return res.status(400).send(e.message);
            return res.sendStatus(200);
        });
    }

}