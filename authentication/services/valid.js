require("dotenv").config();
const jwt = require("jsonwebtoken");
const restrict = async (req, res, next) => {
  let token = jwt.verify(req.cookies.userData, process.env.TOKEN_PASS);

  const unique_key = token.unique_key;

  if (unique_key === process.env.UNIQUE_KEY_ADMIN) {
    next();
  } else {
    res.json({ message: "Not a Authorised User." });
  }
};

module.exports = { restrict };
