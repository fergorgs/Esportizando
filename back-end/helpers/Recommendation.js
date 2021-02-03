const e = require("express");

const db = require("../configs/firebase").database();
const fields = [
    "alone",
    "team",
    "noContact",
    "contact",
    "noOpponent",
    "physicalCondition",
    "loseWeight",
    "gainMass",
    "relax",
    "socialize",
    "compete",
    "reduceCholesterol",
    "balance",
    "concentration",
    "sleep",
    "immunity",
    "posture",
    "reduceSagging",
    "motorCoordination",
    "bloodCirculation",
    "flexibility",
    "breath",
    "upper",
    "abdomen",
    "lower",
    "lowImpact",
    "nature",
    "competitiveness",
    "water",
    "radical",
    "halfAnHour",
    "oneHour",
    "twoHours",
    "moreThanTwoHours",
    "outdoors",
    "indoors",
    "equip",
    "body",
    "diabetes",
    "highBloodPressure",
    "lowBloodPressure",
    "heartDiseases",
    "osteoporosis",
    "frequentDizziness",
    "boneOrJointProblems"
],

diseaseFields = [
    "diabetes",
    "highBloodPressure",
    "lowBloodPressure",
    "heartDiseases",
    "osteoporosis",
    "frequentDizziness",
    "boneOrJointProblems"
]


module.exports = {

    fields,

    recommendEvent(user, count, cb) {
        db.ref(`events`).orderByValue("createdAt").once("value", eSnap => { // all events
            db.ref(`users/${user.id}/subscribedSports`).once("value", ssSnap => { // users` subscribed sports
                db.ref(`recommended/${user.id}/events`).once("value", rSnap => { // events already recommended to user
                    if(!eSnap.val() || !ssSnap.val()) return cb([]); // no events or no subbed sport, nothing to do here.
                    const recommendedEvents = rSnap.val() ?? {};
                    const events = Object.values(eSnap.val()).reverse(); // reverse to get most recently created events
                    const eIds = Object.keys(eSnap.val()).reverse();
                    for(let i = 0; i < events.length; ++i)  // set event`s key to event.id
                        events[i].id = eIds[i];
                    const subsSports = ssSnap.val();
                    let retEvt = events.filter(e => !recommendedEvents[e.id]) // filter out events that were already recommended
                    if(!retEvt.length) {
                        retEvt = events; // if all events already recommended recommend again ...
                        recommendedEvents = {}; // reset recommendation tracking
                    }
                    retEvt = retEvt.filter(e => subsSports[e.sport.id]).slice(0, count); // filter in events whose sports are being followed by the user
                    for(let evnt of retEvt) recommendedEvents[evnt.id] = true; // mark returned events as already recommended
                    db.ref(`recommended/${user.id}/events`).set(recommendedEvents, e => { // update recommendedEvents
                        if(e) return cb([], e); // throw error
                        return cb(retEvt); // return recommendedEvents
                    });
                    
                });
            });
        });
    },

    recommendSport(user, questionnaire, cb, resetQuestionnaire) {
        db.ref(`sports`).once("value", snap => {
            db.ref(`recommended/${user.id}/sports`).once("value", rSnap => {
                const recommend = rSnap.val() ?? {};
                const obj = snap.val();
                if(!obj) cb([]);
                let sports = Object.values(obj);
                const ids = Object.keys(obj);
                for(let i = 0; i < sports.length; ++i) 
                    sports[i].id = ids[i];

                const retSports = sports.filter(el => !recommend[el.id]); // filter out sports already recommended;
                if(resetQuestionnaire || !retSports.length) { // if reset questionnaire -> whole new recommendation profile -> reset recommendation
                    retSports = sports; // if all recommended recommend again...
                    recommend = {}; // reset recommendation tracking
                }
                retSports = retSports.filter(el => !el?.followers[user.uid]);
                const sim = [];
                for(let i = 0; i < retSports.length; ++i) {
                    let ignore = false;
                    for(let disease of diseaseFields) {
                        if(questionnaire[disease] && retSports[i].props[disease]) {
                            ignore = true;
                            break;
                        }
                    }
                    if(ignore) continue;
                    let score = 0;
                    for(let field of fields)
                        if(questionnaire[field] === retSports[i].props[field]) ++score;
                    
                    sim.push([score, i]);
                }
                sim.sort((a, b) => b[0] - a[0]);
                let mx = sim[0][0];
                const ret = [];
                for(let i = 0; i < sim.length; ++i) {
                    if(sim[i][0] === mx) {
                        const cur = {...retSports[sim[i][1]], subscribed: false};
                        delete cur.props;
                        recommend[cur.id] = true;
                        ret.push(cur);
                    }
                }
                db.ref(`recommended/${user.id}/sports`).set(recommend, e => {
                    if(e) return cb([], e);
                    return cb(ret);
                })
            });
        });
    }
}