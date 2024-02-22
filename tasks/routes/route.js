const { Router } = require("express");
const router = Router();
const validate = require("../services/validate");
const viewTaskController = require("../controller/viewTask");
const addTaskController = require("../controller/addTask");
const deleteTaskController = require("../controller/deleteTask");
const updateTaskController = require("../controller/updateTask");
const deleteAllTaskController = require("../controller/deleteAllTask");

router.get("/:id", validate.restrict, viewTaskController.taskbyid);
router.post("/:id", validate.restrict, addTaskController.addtask);
router.post(
  "/:id/deletetask",
  validate.restrict,
  deleteTaskController.deletetask
);
router.post(
  "/:id/updatetask",
  validate.restrict,
  updateTaskController.updatetask
);
router.get(
  "/:id/deletealltask",
  validate.restrict,
  deleteAllTaskController.deletealltask
);

module.exports = router;
