const { Router } = require("express");
const router = Router();
const controller = require("../controller/controller");
const valid = require("../services/valid");

router.get("/:id", valid.restrict, controller.profile);
router.post("/:id", valid.restrict, controller.profileupdate);
router.get("/:id/deleteuser", valid.restrict, controller.deleteuser);
router.get("/:id/changepassword", valid.restrict, controller.changepassword);
router.post("/:id/:token", controller.resetpass);

module.exports = router;
