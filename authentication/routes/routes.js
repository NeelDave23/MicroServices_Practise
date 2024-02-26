const { Router } = require("express");
const router = Router();

const signUpController = require("../controller/Normal_User/signUp");
const loginController = require("../controller/Normal_User/login");

/**
 * @swagger
 * /signup :
 *      post:
 *           summary: SignUp Request
 *           description: Post Signup Request
 *            
 *                          
 *           responses:
 *                201:
 *                   description: Account Created Successfully.
              
 *                   
  */

router.post("/signup", signUpController.postsignup);
router.post("/login", loginController.postlogin);

module.exports = router;
