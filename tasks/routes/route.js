const { Router } = require("express");
const router = Router();
const controller = require("../controller/controller");

router.get("/orders/:id", controller.taskbyid);
router.post("/orders/:id", controller.addtask);
module.exports = router;
