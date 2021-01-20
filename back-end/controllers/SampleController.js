// import models
const db = require("../configs/firebase").database();

module.exports = {


    index(req, res) {
        if(req.user) return res.sendStatus(200);
        res.sendStatus(200);
    },
    
    // index, list, create, update, delete.
    // method(req, res) { 
    //     req.params -> querystring
    //     req.body -> paylaod
    //     return res.status(200).send("OK");
    // }

}