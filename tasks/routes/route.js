const { Router } = require("express");
const router = Router();
const controller = require("../controller/controller");
const validate = require("../services/validate");

router.get("/orders/:id", validate.restrict, controller.taskbyid);
router.post("/orders/:id", validate.restrict, controller.addtask);
router.post("/orders/:id/deletetask", validate.restrict, controller.deletetask);
router.post("/orders/:id/updatetask", validate.restrict, controller.updatetask);
router.get(
  "/orders/:id/deletealltask",
  validate.restrict,
  controller.deletealltask
);

module.exports = router;
