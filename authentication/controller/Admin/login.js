const db = require("../../model/db");
const User = db.user;
const task_details = db.task_details;
const jwt = require("jsonwebtoken");
require("dotenv").config();

const login = async (req, res) => {
  const { email, password } = req.body;

  if (JSON.stringify(req.body) === "{}") {
    res.status(200).json({ Message: "Please Enter email and password" });
  } else if (!email || !password) {
    res.status(200).json({ Message: "Please Enter All the details" });
  } else {
    if (
      email === process.env.ADMIN_EMAIL &&
      password === process.env.ADMIN_PASS
    ) {
      const task = await task_details.findAll({
        attributes: ["task", "UserId"],
      });

      let all_task = [];
      let all_user_id = [];
      for (let i = 0; i < task.length; i++) {
        all_task.push(task[i].task);
        all_user_id.push(task[i].UserId);
      }

      const user = await User.findAll({
        attributes: ["id", "name"],
      });

      let all_user_name = [];
      let all_usersbyid = [];
      for (let i = 0; i < user.length; i++) {
        all_user_name.push(user[i].name);
        all_usersbyid.push(user[i].id);
      }

      let userData = {
        unique_key: process.env.UNIQUE_KEY_ADMIN,
      };
      let token = jwt.sign(userData, process.env.TOKEN_PASS);
      res.cookie("userData", token);

      res.status(200).json({
        name: "Admin",
        task_count: task.length,
        tasks: all_task,
        user: all_user_id,
        user_count: user.length,
        user_name: all_user_name,
        all_usersbyid: all_usersbyid,
      });
    } else {
      res.status(401).json({ Message: "Wrong Email or Password" });
    }
  }
};

module.exports = { login };
