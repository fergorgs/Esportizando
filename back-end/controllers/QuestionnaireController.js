const { fields, recomend } = require("../helpers/SportRecomendation");
const db = require("../configs/firebase").database();

module.exports =  {

    index(req, res) {
        db.ref(`users/${req.user.uid}/questionnaire`).once("value", snap => {
            const data = snap.val();
            if(data) return res.status(200).send(data);
            return res.status(200).send(null);
        });
    },

    list(req, res) {
        db.ref(`users`).orderByKey().once("value", data => {
            if(!data.val()) return res.status(200).send([]);
            const obj = data.val(); // all users;
            let _data = Object.values(obj); // user values
            let ids = Object.keys(obj); // user ids
            let ret = {};
            for(let i = 0; i < _data?.length; ++i) ret[ids[i]] = _data[i].questionnaire; // ret[UserID] = UserQuestionnaire
            return res.status(200).send(ret);
        })
    },

    create(req, res) {
        const miss = [];
        const quest = {};
        for(let f of fields) {
            if(req.body[f] === undefined) miss.push(f);
            else quest[f] = req.body[f];
        }
        if(miss.length) return res.status(400).send(`Missing field(s): ${miss}`);
        db.ref(`users/${req.user.uid}/questionnaire`).set(quest, (_e) => {
            if(_e) return res.status(400).send(_e.message);
            db.ref(`users/${req.user.uid}/tookTest`).set(true, (e) => {
                if(e) return res.status(400).send(e.message);
                recomend(quest, data => res.status(201).send(data));
            });
        });
    },

}