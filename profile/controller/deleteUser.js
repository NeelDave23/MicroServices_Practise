const db = require("../model/db");
const User = db.user;
require("dotenv").config();

const deleteuser = async (req, res) => {
  const user_id = parseInt(req.params.id);
  const deleteuser = await User.destroy({
    where: { id: user_id },
  });
  res.clearCookie("userData");
  res.status(200).json({
    message: `User Deleted from DB `,
  });
};

module.exports = { deleteuser };
