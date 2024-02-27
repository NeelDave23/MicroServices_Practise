const db = require("../../model/db");
const User = db.user;
const task_details = db.task_details;
const jwt = require("jsonwebtoken");
require("dotenv").config();

const deletetask = async (req, res) => {
  const user_id = parseInt(req.params.id);
  const user = await User.findOne({
    where: {
      id: user_id,
    },
  });
  if (!user) {
    res.status(404).json({
      Message: "User Not Found in DB",
    });
  } else {
    const { task_id } = req.body;
    if (!task_id) {
      res.status(400).json({ Message: "Please Enter the Task ID" });
    } else {
      const deletetask = await task_details.destroy({
        where: { id: task_id },
      });
      if (!deletetask) {
        res.status(404).json({
          Message: "Task Not Found ",
        });
      } else {
        res.status(200).json({
          message: `Task is Deleted `,
        });
      }
    }
  }
};

module.exports = { deletetask };
