const { Router } = require("express");
const router = Router();

const admin = require("../controller/admin");
const valid = require("../services/valid");

router.post("/", admin.login); //

router.get("/delete", admin.deleteAllTasks);
router.post("/deleteuser", valid.restrict, admin.deleteuser); //
router.get("/deletealluser", valid.restrict, admin.deletealluser); //
router.get("/:id", valid.restrict, admin.viewuser); //
router.post("/:id/deletetask", valid.restrict, admin.deletetask); //
router.get("/:id/deletealltask", valid.restrict, admin.deletealltask);

module.exports = router;
