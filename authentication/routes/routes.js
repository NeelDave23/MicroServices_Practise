const { Router } = require("express");
const router = Router();
const authenticate = require("../controller/authentication");
const admin = require("../controller/admin");
const valid = require("../services/valid");

router.post("/signup", authenticate.postsignup);
router.post("/login", authenticate.postlogin);

module.exports = router;
