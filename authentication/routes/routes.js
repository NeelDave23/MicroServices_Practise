const { Router } = require("express");
const router = Router();

const signUpController = require("../controller/Normal_User/signUp");
const loginController = require("../controller/Normal_User/login");

router.post("/signup", signUpController.postsignup);
router.post("/login", loginController.postlogin);

module.exports = router;
