const { Router } = require("express");
const router = Router();
const authenticate = require("../controller/authentication");

router.post("/signup", authenticate.postsignup);
router.post("/login", authenticate.postlogin);

module.exports = router;
