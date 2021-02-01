  
const router = require("express").Router();
const { authenticate } = require("./configs/authMiddleware");
const { auth } = require("./configs/firebase");
// import Controllers
const { SampleController, EventController, PlaceController, QuestionnaireController, SportController } = require("./controllers/controllers");

// router.method(path, Controller.handler);
router.get("/", SampleController.index);
router.get("/restricted", authenticate, SampleController.index);

// Event
router.get("/event/", authenticate, EventController.list);
router.post("/event/", authenticate, EventController.create);
router.get("/event/created/", authenticate, EventController.listCreated);
router.get("/event/joined/", authenticate, EventController.listJoined);
router.post("/event/joined/", authenticate, EventController.join);

// Place
router.get("/place/", PlaceController.list);
router.post("/place/", authenticate, PlaceController.create);
router.put("/place/", authenticate, PlaceController.update);
router.get("/place/created/", authenticate, PlaceController.listCreated);

// Questionnaire
router.get("/questionnaire/", authenticate, QuestionnaireController.index);
router.get("/questionnaire/list/", QuestionnaireController.list);
router.post("/questionnaire/", authenticate, QuestionnaireController.create);

//Sports
router.get("/sport/", authenticate, SportController.index);
router.get("/sport/list/", SportController.list);
router.put("/sport/subscribe/", authenticate, SportController.subs);

module.exports = router;