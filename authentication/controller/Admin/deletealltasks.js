const db = require("../../model/db");
const User = db.user;
const task_details = db.task_details;
const jwt = require("jsonwebtoken");
require("dotenv").config();

const deleteAllTasks = async (req, res) => {
  const deletetask = await task_details.destroy({ where: {} });
  if (!deletetask) {
    res.status(400).json({
      message: `No Task Present in DB  `,
    });
  } else {
    res.status(200).json({
      message: `All the tasks are Deleted  `,
    });
  }
};
module.exports = {
  deleteAllTasks,
};
