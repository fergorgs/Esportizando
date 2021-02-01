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
]


module.exports = {

    fields,

    recomend(questionnaire) {
        console.log(questionnaire);
        const sports = [
            {
                name: 'FutebolA',
                benefits: [
                    'aeróbico',
                    'fortalece o quadril',
                ],
                id: 3694756241542
            },
            {
                name: 'BasquetA',
                benefits: [
                    'aeróbico',
                    'trabalha o superior',
                    'melhora o condicionamento',
                    'baixo impacto'
                ],
                id: 3641556241542
            },
            {
                name: 'CaminhadO',
                benefits: [
                    'aeróbico',
                    'trabalha as pernas',
                    'emagresse',
                    'melhora o condicionamento'
                ],
                id: 3641556246582
            },
            {
                name: 'PilatesA',
                benefits: [
                    'melhora a flexibilidade',
                    'trabalha o corpo todo',
                    'melhora a concentração'
                ],
                id: 3641964541542
            },
        ];
        return sports;
        // db.ref(`sports`).once("value", snap => {
        //     const obj = snap.val();
        //     if(!obj) return [];
        //     const sports = Object.values(obj);
        //     const ids = Object.keys(obj);
        //     for(let i = 0; i < sports.length; ++i) 
        //         sports[i].id = ids[i];
        //     const sim = [];
        //     for(let i = 0; i < sports.length; ++i) {
        //         let score = 0;
        //         for(let field of fields)
        //             if(questionnaire[field] === sports[i][field]) ++score;
                
        //         sim.push([score, i]);
        //     }
        //     sim.sort((a, b) => b[0] - a[0]);
        //     let mx = sim[0][0];
        //     const ret = [];
        //     for(let i = 0; i < sim.length; ++i)
        //         if(sim[i][0] === mx) ret.push(sports[sim[i][1]]);
        //     return ret;
        // });
    }
}