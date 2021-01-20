  
const router = require("express").Router();
const { authenticate } = require("./configs/authMiddleware");
// import Controllers
const { SampleController, EventController } = require("./controllers/controllers");

// router.method(path, Controller.handler);
router.get("/", SampleController.index);
router.get("/restricted", authenticate, SampleController.index);

router.get("/event", authenticate, EventController.list);
router.post("/event", authenticate, EventController.create);

module.exports = router;