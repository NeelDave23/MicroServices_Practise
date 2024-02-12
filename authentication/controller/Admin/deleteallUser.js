const db = require("../../model/db");
const User = db.user;
const task_details = db.task_details;
const jwt = require("jsonwebtoken");
require("dotenv").config();

const deletealluser = async (req, res) => {
  const deleteuser = await User.destroy({
    where: {},
  });
  if (!deleteuser) {
    res.status(400).json({
      Message: "No Users Present in DB  ",
    });
  } else {
    res.status(200).json({
      Message: "All the Users are Deleted From DB ",
    });
  }
};

module.exports = { deletealluser };
