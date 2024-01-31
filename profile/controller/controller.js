const db = require("../model/db");
const User = db.user;
const task_details = db.task_details;
require("dotenv").config();
const JWT = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const bcrypt = require("bcrypt");

const profile = async (req, res) => {
  const user_id = parseInt(req.params.id);
  const user = await User.findOne({
    where: {
      id: user_id,
    },
  });
  if (!user) {
    res.status(200).json({
      Message: "User Not Found in DB",
    });
  } else {
    const { count, rows } = await task_details.findAndCountAll({
      where: {
        UserId: user_id,
      },
    });

    let all_task = [];
    for (let i = 0; i < count; i++) {
      all_task.push(rows[i].task);
    }
    res.status(200).json({
      user_id: user_id,
      name: user.name,
      email: user.email,
      position: user.position,
      created_at: user.createdAt,
      updated_at: user.updatedAt,
      last_login: user.lastLogin,
      tasks: all_task,
    });
  }
};

const profileupdate = async (req, res) => {
  const { name, email } = req.body;
  if (JSON.stringify(req.body) === "{}") {
    res.status(200).json({ Message: "Please Enter name and email" });
  } else if (!name || !email) {
    res.status(200).json({ Message: "Please enter all the details" });
  } else {
    const user_id = parseInt(req.params.id);
    const user = await User.update(
      { name: name, email: email },
      {
        where: {
          id: user_id,
        },
      }
    );
    res.status(200).json({
      message: `Profile Updated `,
    });
  }
};

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

const changepassword = async (req, res) => {
  const user_id = parseInt(req.params.id);
  const user = await User.findOne({
    where: {
      id: user_id,
    },
  });

  const JWT_SECRET = process.env.JWT_SECRET;
  const secret = JWT_SECRET + user.password;
  const payload = {
    email: user.email,
    user_id: user_id,
  };
  const token = JWT.sign(payload, secret, { expiresIn: "15m" });
  const link = `http://localhost:3001/profile/${user_id}/${token}`;

  const transporter = nodemailer.createTransport({
    host: process.env.NODEMAILER_HOST,
    port: process.env.NODEMAILER_PORT,
    auth: {
      user: process.env.NODEMAILER_USER,
      pass: process.env.NODEMAILER_PASS,
    },
  });

  const info = await transporter.sendMail({
    from: process.env.ADMIN_EMAIL,
    to: `${user.email}`,
    subject: "Password Reset Link",
    text: `Link is Provided Below and NOTE:- Link will be Vaild only for 15 Min
    
    ${link}`,
    html: `Link is Provided Below and NOTE:- Link will be Vaild only for 15 Min
    
    ${link}`,
  });

  res.status(200).json({
    message: `Password Reset Link is sent to Your Email `,
  });
};

const resetpass = async (req, res) => {
  const { id, token } = req.params;
  const user = await User.findOne({
    where: {
      id: id,
    },
  });

  const JWT_SECRET = process.env.JWT_SECRET;
  const secret = JWT_SECRET + user.password;
  const payload = JWT.verify(token, secret);
  const user_id = parseInt(req.params.id);
  const { password } = req.body;

  let hash = await bcrypt.hash(password, 10);
  const tasks = await User.update(
    { password: hash },
    {
      where: {
        id: user_id,
      },
    }
  );

  res.status(200).json({
    message: `Password Changed Successfully  `,
  });
};

module.exports = {
  profile,
  profileupdate,
  deleteuser,
  changepassword,
  resetpass,
};
