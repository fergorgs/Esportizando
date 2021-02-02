const fire = require("./firebase");
const fadm = require("firebase-admin");

const auth = fadm.auth(fire);

module.exports = {
    authenticate(req, res, next) {
        let token = req.headers.authorization;
        if(!token) return res.sendStatus(401);
        token = token.split(" ");
        if(token.length < 2 || token[0] !== "Bearer") return res.sendStatus(401);
        token = token[1].trim();
        auth.verifyIdToken(token)
            .then((user) => {
                req.user = user;
                next();
            })
            .catch(e => {
                console.log(e.message);
                res.status(401).send(e.message);
            });
    }
}
