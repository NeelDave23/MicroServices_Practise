const db = require("../../model/db");
const User = db.user;
const bcrypt = require("bcrypt");
const sequelize = db.sequelize;
const jwt = require("jsonwebtoken");
require("dotenv").config();

const postsignup = async (req, res) => {
  let { name, email, password, confirm_password } = req.body;
  if (JSON.stringify(req.body) === "{}") {
    res.status(200).json({
      Message: "Please enter name, email, password, and confirm password",
    });
  } else if (!name || !email || !password || !confirm_password) {
    res.status(200).json({ Message: "Please Enter All the details" });
  } else {
    if (password != confirm_password) {
      res
        .status(200)
        .json({ message: "Password and Confirm Password Must Be Same" });
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

        let token = jwt.sign(userData, process.env.TOKEN_PASS);
        res.cookie("userData", token);
        res.status(200).json({
          name: user.name,
          email: user.email,
          tasks: "",
          task_count: 0,
          user_id: user.id,
        });
      }
    }
  }
};

module.exports = { postsignup };
