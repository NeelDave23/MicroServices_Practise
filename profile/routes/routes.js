const { Router } = require("express");
const router = Router();
const controller = require("../controller/controller");
const valid = require("../services/valid");

router.get("/profile/:id", valid.restrict, controller.profile);
router.post("/profile/:id", valid.restrict, controller.profileupdate);
router.get("/profile/:id/deleteuser", valid.restrict, controller.deleteuser);

module.exports = router;
