  
const router = require("express").Router();
const { authenticate } = require("./configs/authMiddleware");
// import Controllers
const { SampleController } = require("./controllers/controllers");

// router.method(path, Controller.handler);
router.get("/", SampleController.index);
router.get("/restricted", authenticate, SampleController.index);

module.exports = router;