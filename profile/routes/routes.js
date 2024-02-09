const { Router } = require("express");
const router = Router();
const valid = require("../services/valid");
const profileController = require("../controller/profile");
const profileUpdateController = require("../controller/profileUpdate");
const deleteUserController = require("../controller/deleteUser");
const changePasswordController = require("../controller/changePassword");
const resetPassController = require("../controller/resetPass");

router.get("/:id", valid.restrict, profileController.profile);
router.post("/:id", valid.restrict, profileUpdateController.profileupdate);
router.get("/:id/deleteuser", valid.restrict, deleteUserController.deleteuser);
router.get(
  "/:id/changepassword",
  valid.restrict,
  changePasswordController.changepassword
);
router.post("/:id/:token", resetPassController.resetpass);

module.exports = router;
