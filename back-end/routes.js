  
const router = require("express").Router();
const { authenticate } = require("./configs/authMiddleware");
const { auth } = require("./configs/firebase");
// import Controllers
const { SampleController, EventController, PlaceController } = require("./controllers/controllers");

// router.method(path, Controller.handler);
router.get("/", SampleController.index);
router.get("/restricted", authenticate, SampleController.index);

// Event
router.get("/event", EventController.list);
router.post("/event", authenticate, EventController.create);
router.get("/event/created", authenticate, EventController.listCreated);
router.get("/event/joined", authenticate, EventController.listJoined);
router.post("/event/joined", authenticate, EventController.join);

// Place
router.get("/place", PlaceController.list);
router.post("/place", authenticate, PlaceController.create);
router.put("/place", authenticate, PlaceController.update);
router.get("/event/created", authenticate, PlaceController.listCreated);

module.exports = router;