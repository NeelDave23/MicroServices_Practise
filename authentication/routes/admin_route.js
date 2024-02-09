const { Router } = require("express");
const router = Router();

const valid = require("../services/valid");
const loginController = require("../controller/Admin/login");
const viewUserController = require("../controller/Admin/viewUser");
const deleteUserController = require("../controller/Admin/deleteUser");
const deleteallUserController = require("../controller/Admin/deleteallUser");
const deleteTaskController = require("../controller/Admin/deleteTask");
const deleteAllTaskOfaUser = require("../controller/Admin/deleteAllTaskOfaUser");
const deletealltasks = require("../controller/Admin/deletealltasks");
router.post("/", loginController.login); //

router.get("/delete", deletealltasks.deleteAllTasks);
router.post("/deleteuser", valid.restrict, deleteUserController.deleteuser); //
router.get(
  "/deletealluser",
  valid.restrict,
  deleteallUserController.deletealluser
); //
router.get("/:id", valid.restrict, viewUserController.viewuser); //
router.post("/:id/deletetask", valid.restrict, deleteTaskController.deletetask); //
router.get(
  "/:id/deletealltask",
  valid.restrict,
  deleteAllTaskOfaUser.deletealltask
);

module.exports = router;
