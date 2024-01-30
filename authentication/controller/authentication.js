const db = require("../model/db");
const User = db.user;
const task_details = db.task_details;
const bcrypt = require("bcrypt");
const sequelize = db.sequelize;
const jwt = require("jsonwebtoken");

const postsignup = async (req, res) => {
  let { name, email, password, password1 } = req.body;

  if (password != password1) {
    res
      .status(200)
      .json({ message: "Password and Conform Password Must Be Same" });
    // res.render("message", { msg: msg });
  } else {
    const valid = await User.findOne({
      where: {
        email: email,
      },
    });

    if (valid) {
      res
        .status(200)
        .json({ message: "Email is already Register, Please Login" });
      // res.render("message", { msg: msg });
    } else {
      let hash = await bcrypt.hash(password, 10);

      const user = await User.create({
        name: name,
        email: email,
        password: hash,
      });

      const tasks = await User.update(
        { lastLogin: sequelize.literal("CURRENT_TIMESTAMP") },
        {
          where: {
            id: user.id,
          },
        }
      );
      let userData = {
        user_id: user.id,
        name: user.name,
      };

      let token = jwt.sign(userData, "123_pass");
      res.cookie("userData", token);

      res.status(200).redirect(`/orders/${user.id}`);
    }
  }
};

const postlogin = async (req, res) => {
  const { email, password } = req.body;

  const valid = await User.findOne({
    where: {
      email: email,
    },
  });

  if (!valid) {
    let msg = "Email is not Register, Please Sign Up";
    res.status(200).json({ message: "Email is not Register, Please Sign Up" });
    // res.render("message", { msg: msg });
  } else {
    bcrypt.compare(password, valid.password, async (err, isMatch) => {
      if (err) {
        throw err;
      } else {
        if (!isMatch) {
          let msg = "Wrong Email or Password";
          res.status(200).json({ message: "Wrong Email or Password" });
          // res.render("message", { msg: msg });
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

          let token = jwt.sign(userData, "123_pass");
          res.cookie("userData", token);
          res.status(200).redirect(`/orders/${valid.id}`);
        }
      }
    });
  }
};
module.exports = { postsignup, postlogin };
