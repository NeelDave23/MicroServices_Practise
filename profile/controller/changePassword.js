const db = require("../model/db");
const User = db.user;

require("dotenv").config();
const JWT = require("jsonwebtoken");
const nodemailer = require("nodemailer");

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

module.exports = { changepassword };
