const db = require("../../model/db");
const User = db.user;
const task_details = db.task_details;
const jwt = require("jsonwebtoken");
require("dotenv").config();

const deletealltask = async (req, res) => {
  const user_id = parseInt(req.params.id);
  const deletetask = await task_details.destroy({
    where: { UserId: user_id },
  });

  if (!deletetask) {
    res.json({
      Message: `No tasks are there in DB of User ID :- ${user_id}`,
    });
  } else {
    res.status(200).json({
      message: `All the Tasks of User ID :- ${user_id} are Deleted `,
    });
  }
};

module.exports = { deletealltask };
