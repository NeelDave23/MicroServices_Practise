const db = require("../model/db");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const restrict = async (req, res, next) => {
  const id_in_url = parseInt(req.params.id);

  const token_in_cookies = req.cookies.userData;
  if (!req.cookies.userData) {
    res.status(401).json({ Message: "Please Login or Sign Up First" });
  } else {
    try {
      let token = jwt.verify(token_in_cookies, process.env.TOKEN_PASS);

      if (id_in_url === token.user_id) {
        next();
      } else {
        res.status(401).json({ message: "Not a Authorised User." });
      }
    } catch (err) {
      res.status(401).json({ message: "Not a Authorised User." });
    }
  }
};

module.exports = { restrict };
