// import models

module.exports = {


    index(req, res) {
        if(req.user) res.status(200).send(req.user);
        res.sendStatus(200);
    }

    // index, list, create, update, delete.
    // method(req, res) { 
    //     req.params -> querystring
    //     req.body -> paylaod
    //     return res.status(200).send("OK");
    // }

}