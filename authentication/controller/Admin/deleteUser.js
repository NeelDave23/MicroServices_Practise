const db = require("../../model/db");
const User = db.user;
const task_details = db.task_details;
const jwt = require("jsonwebtoken");
require("dotenv").config();

const deleteuser = async (req, res) => {
  const { user_id } = req.body;
  if (!user_id) {
    res.status(400).json({
      Message: `Please Provide the User ID that you want to delete`,
    });
  } else {
    let flag = 0;
    for (let i = 0; i < user_id.length; i++) {
      const deleteuser = await User.destroy({
        where: { id: user_id[i] },
      });
      if (!deleteuser) {
        res.status(400).json({
          Message: `User having ID :- ${user_id[i]} is Not Found in DB`,
        });
        flag = 1;
        break;
      }
    }
    if (flag == 0) {
      res.status(200).json({
        Message: `User having ID :- ${user_id}  Deleted From DB`,
      });
    }
  }
};

module.exports = { deleteuser };
