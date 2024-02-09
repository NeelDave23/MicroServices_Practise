const db = require("../model/db");
const User = db.user;
require("dotenv").config();
const JWT = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const resetpass = async (req, res) => {
  const { id, token } = req.params;
  const user = await User.findOne({
    where: {
      id: id,
    },
  });

  const JWT_SECRET = process.env.JWT_SECRET;
  const secret = JWT_SECRET + user.password;
  const payload = JWT.verify(token, secret);
  const user_id = parseInt(req.params.id);
  const { password } = req.body;

  let hash = await bcrypt.hash(password, 10);
  const tasks = await User.update(
    { password: hash },
    {
      where: {
        id: user_id,
      },
    }
  );

  res.status(200).json({
    message: `Password Changed Successfully  `,
  });
};

module.exports = { resetpass };
