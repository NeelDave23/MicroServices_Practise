const { Router } = require("express");
const router = Router();
const authenticate = require("../controller/authentication");
const admin = require("../controller/admin");
const valid = require("../services/valid");

router.post("/users/signup", authenticate.postsignup);
router.post("/users/login", authenticate.postlogin);

router.post("/users/admin", admin.login); //

router.get("/users/admin/delete", admin.deleteAllTasks);
router.post("/users/admin/deleteuser", valid.restrict, admin.deleteuser); //
router.get("/users/admin/deletealluser", valid.restrict, admin.deletealluser); //
router.get("/users/admin/:id", valid.restrict, admin.viewuser); //
router.post("/users/admin/:id/deletetask", valid.restrict, admin.deletetask); //
router.get(
  "/users/admin/:id/deletealltask",
  valid.restrict,
  admin.deletealltask
);

module.exports = router;
