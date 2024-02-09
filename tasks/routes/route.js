const { Router } = require("express");
const router = Router();
const controller = require("../controller/controller");
const validate = require("../services/validate");

router.get("/:id", validate.restrict, controller.taskbyid);
router.post("/:id", validate.restrict, controller.addtask);
router.post("/:id/deletetask", validate.restrict, controller.deletetask);
router.post("/:id/updatetask", validate.restrict, controller.updatetask);
router.get("/:id/deletealltask", validate.restrict, controller.deletealltask);

module.exports = router;
