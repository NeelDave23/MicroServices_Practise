const db = require("../model/db");
const User = db.user;
const task_details = db.task_details;
require("dotenv").config();

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
  if (!name || !email) {
    res.status(200).json({ Message: "Please enter both Name and Email" });
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

module.exports = { profile, profileupdate, deleteuser };
