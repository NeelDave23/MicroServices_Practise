const { Router } = require("express");
const router = Router();
const authenticate = require("../controller/authentication");
const admin = require("../controller/admin");
const valid = require("../services/valid");

router.post("/signup", authenticate.postsignup);
router.post("/login", authenticate.postlogin);

router.post("/admin", admin.login);
router.post("/admin/:id/deleteuser", valid.restrict, admin.deleteuser);
router.get("/admin/deletealluser", valid.restrict, admin.deletealluser);
router.get("/admin/:id", valid.restrict, admin.viewuser);
router.post("/admin/:id/deletetask", valid.restrict, admin.deletetask);
router.get("/admin/:id/deletealltask", valid.restrict, admin.deletealltask);
router.get("/admin/removealltask", valid.restrict, admin.removealltask);

module.exports = router;
