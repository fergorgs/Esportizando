const fire = require("./firebase");
const fadm = require("firebase-admin");

const auth = fadm.auth(fire);

module.exports = {
    authenticate(req, res, next) {
        let token = req.headers["Authorization"];
        if(!token) return res.sendStatus(403);
        token = token.split(" ");
        if(token.length < 2 || token[0] !== "Bearer") return res.sendStatus(403);
        token = token[1].trim();
        auth.verifyIdToken(token)
            .then((user) => {
                req.user = user;
                next();
            })
            .catch(e => {
                console.log(e);
                next();
            });
    }
}