const { recommendSport } = require("../helpers/Recommendation");
const db = require("../configs/firebase").database();

module.exports =  {

    index(req, res) {
        db.ref(`users/${req.user.uid}/questionnaire`).once("value", snap => {
            const data = snap.val();
            if(!data) return res.status(200).send([]);
            recommendSport(req.user, data, sports => res.status(200).send(sports));
        });
    },

    list(req, res) {
        db.ref(`sports`).once("value", snap => {
            const obj = snap.val();
            if(!obj) return res.status(200).send([]);
            const data = Object.values(obj);
            const ids = Object.keys(obj);
            for(let i = 0; i < data.length; ++i) {
                delete data[i].props;
                data[i].id = ids[i];
                data[i].subscribed = Boolean(data[i]?.followers[req.user.uid]);
            }
            return res.status(200).send(data);
        })
    },

    subs(req, res) {
        const { sport } = req.body;
        if(!sport) return res.status(400).send("No sport specified");
        if(!sport.followers) sport.followers = {};
        sport.followers[req.user.uid] = true
        if(sport.subscribed !== undefined)
            delete sport.subscribed;
        const update = {};
        for(let follower in sport.followers) 
            update[`users/${follower}/subscribedSports/${sport.id}`] = sport;
        update[`sports/${sport.id}/followers/${req.user.uid}`] = true;
        db.ref().update(update, e => {
            if(e) return res.status(400).send(e.message);
            return res.sendStatus(200);
        });
    },

    listSubscribed(req, res) {
        db.ref(`users/${req.user.uid}/subscribedSports`).orderByKey().once("value", subscribedSports => {
            if(!subscribedSports.val()) return res.status(200).send([]);
            let ret = Object.values(subscribedSports.val()).map(el => {
                delete el.props;
                el.subscribed = true;
                return el;
            });
            return res.status(200).send(ret);
        });     
    },

    // create(req, res) { // DEV
    //     if(req.body.sports === undefined) return res.status(400).send("No sports specified");
    //     let sports = req.body.sports;
    //     if(!Array.isArray(sports)) sports = [sports];
    //     const updates = {};
    //     const sportsRef = db.ref("sports");
    //     for(let sport of sports) 
    //         updates[`sports/${sportsRef.push().key}`] = {...sport};
    //     console.log(updates);
    //     db.ref().update(updates, e => {
    //         if(e) return res.status(400).send(e.message);
    //         return res.sendStatus(200);
    //     });
    // },

    // update(req, res) { //temp
    //     const mapNameSport = {};
    //     const sports = req.body.sports;
    //     for(let sport of sports) mapNameSport[sport.name] = sport;
    //     db.ref("sports").once("value", snap => {
    //         const obj = snap.val();
    //         const update = {};
    //         for(let el in obj)
    //             update[`sports/${el}`] = mapNameSport[obj[el].name];

    //         db.ref().update(update, e => {
    //             if(e) return res.status(400).send(e.message);
    //             return res.sendStatus(200);
    //         });
    //     });
    // },

}