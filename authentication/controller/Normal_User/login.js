const db = require("../../model/db");
const User = db.user;
const task_details = db.task_details;
const bcrypt = require("bcrypt");
const sequelize = db.sequelize;
const jwt = require("jsonwebtoken");
require("dotenv").config();

const postlogin = async (req, res) => {
  const { email, password } = req.body;

  if (JSON.stringify(req.body) === "{}") {
    res.status(400).json({ Message: "Please Enter email and password" });
  } else if (!email || !password) {
    res.status(400).json({ Message: "Please Enter All the details" });
  } else {
    const valid = await User.findOne({
      where: {
        email: email,
      },
    });

    if (!valid) {
      res
        .status(401)
        .json({ message: "Email is not Register, Please Sign Up" });
    } else {
      bcrypt.compare(password, valid.password, async (err, isMatch) => {
        if (err) {
          throw err;
        } else {
          if (!isMatch) {
            res.status(401).json({ message: "Wrong Email or Password" });
          } else {
            const task = await task_details.findAll({
              where: { UserId: valid.id },
            });
            let all_task = [];
            for (let i = 0; i < task.length; i++) {
              all_task.push(task[i].task);
            }

            const tasks = await User.update(
              { lastLogin: sequelize.literal("CURRENT_TIMESTAMP") },
              {
                where: {
                  id: valid.id,
                },
                silent: true,
              }
            );
            let userData = {
              user_id: valid.id,
              name: valid.name,
            };

            let token = jwt.sign(userData, process.env.TOKEN_PASS);
            res.cookie("userData", token);
            res.status(200).json({
              name: valid.name,
              email: email,
              tasks: all_task,
              task_count: task.length,
              user_id: valid.id,
            });
          }
        }
      });
    }
  }
};
module.exports = { postlogin };
