const { Router } = require("express");
const router = Router();
const controller = require("../controller/controller");
const valid = require("../services/valid");

router.get("/profile/:id", valid.restrict, controller.profile);
router.post("/profile/:id", valid.restrict, controller.profileupdate);
router.get("/profile/:id/deleteuser", valid.restrict, controller.deleteuser);
router.get(
  "/profile/:id/changepassword",
  valid.restrict,
  controller.changepassword
);
router.post("/profile/:id/:token", controller.resetpass);

module.exports = router;
