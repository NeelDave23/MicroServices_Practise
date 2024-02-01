const db = require("../model/db");
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
      res.status(200).json({ Message: "Wrong Email or Password" });
    }
  }
};

const viewuser = async (req, res) => {
  const user_id = Number(req.params.id);
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

const deleteuser = async (req, res) => {
  const { user_id } = req.body;
  if (!user_id) {
    res.status(200).json({
      Message: `Please Provide the User ID that you want to delete`,
    });
  } else {
    let flag = 0;
    for (let i = 0; i < user_id.length; i++) {
      const deleteuser = await User.destroy({
        where: { id: user_id[i] },
      });
      if (!deleteuser) {
        res.status(200).json({
          Message: `User having ID :- ${user_id[i]} is Not Found in DB`,
        });
        flag = 1;
        break;
      }
    }
    if (flag == 0) {
      res.status(200).json({
        Message: `User having ID :- ${user_id}  Deleted From DB`,
      });
    }
  }
};
const deletealluser = async (req, res) => {
  const deleteuser = await User.destroy({
    where: {},
  });
  if (!deleteuser) {
    res.status(200).json({
      Message: "No Users Present in DB  ",
    });
  } else {
    res.status(200).json({
      Message: "All the Users are Deleted From DB ",
    });
  }
};

const deletetask = async (req, res) => {
  const { task_id } = req.body;
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
    const deletetask = await task_details.destroy({
      where: { id: task_id },
    });
    if (!deletetask) {
      res.status(200).json({
        Message: "Task Not Found ",
      });
    } else {
      res.status(200).json({
        message: `Task is Deleted `,
      });
    }
  }
};

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

const deleteAllTasks = async (req, res) => {
  const deletetask = await task_details.destroy({ where: {} });
  if (!deletetask) {
    res.status(200).json({
      message: `No Task Present in DB  `,
    });
  } else {
    res.status(200).json({
      message: `All the tasks are Deleted  `,
    });
  }
};
module.exports = {
  login,
  viewuser,
  deleteuser,
  deletealluser,
  deletetask,
  deletealltask,
  deleteAllTasks,
};
