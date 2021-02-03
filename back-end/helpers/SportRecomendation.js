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

    recomend(questionnaire, cb) {
        db.ref(`sports`).once("value", snap => {
            const obj = snap.val();
            if(!obj) cb([]);
            const sports = Object.values(obj);
            const ids = Object.keys(obj);
            for(let i = 0; i < sports.length; ++i) 
                sports[i].id = ids[i];
            const sim = [];
            for(let i = 0; i < sports.length; ++i) {
                let ignore = false;
                for(let disease of diseaseFields) {
                    if(questionnaire[disease] && sports[i].props[disease]) {
                        ignore = true;
                        break;
                    }
                }
                if(ignore) continue;
                let score = 0;
                for(let field of fields)
                    if(questionnaire[field] === sports[i].props[field]) ++score;
                
                sim.push([score, i]);
            }
            sim.sort((a, b) => b[0] - a[0]);
            let mx = sim[0][0];
            const ret = [];
            for(let i = 0; i < sim.length; ++i) {
                if(sim[i][0] === mx) {
                    const cur = {...sports[sim[i][1]]};
                    delete cur.props;
                    ret.push(cur);
                }
            }
            cb(ret);
        });
    }
}