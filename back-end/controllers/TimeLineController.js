const db = require("../configs/firebase").database();
const { recommendSport, recommendEvent }  = require("../helpers/Recommendation");

module.exports =  {

    index(req, res) {
        const ret = [];
        db.ref(`users/${req.user.uid}/questionnaire`).once("value", qsnap => {
            if(!qsnap?.val()) return res.status(400).send("This user has no questionnaire, no recomendations can be made");
            const questionnaire = qsnap.val();
            recommendSport(req.user, questionnaire, (sports, e) => {
                if(e) return res.status(400).send(e.message);
                recommendEvent(req.user, 3, (evnts, e) => {
                    if(e) return res.status(400).send(e.message);
                    const ret = [];
                    ret.concat(evnts.map(el => ({type: "event", data: el})));
                    ret.concat(sports.map(el => ({type: "sport", data: el})));
                    return res.status(200).send(ret);
                });
            });

        })
    }

}
