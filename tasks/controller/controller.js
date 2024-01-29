const db = require("../model/db");
const User = db.user;
const task_details = db.task_details;

const taskbyid = async (req, res) => {
  const id = parseInt(req.params.id);

  const { count, rows } = await task_details.findAndCountAll({
    where: {
      UserId: id,
    },
  });

  let all_task = [];
  for (let i = 0; i < count; i++) {
    all_task.push(rows[i].task);
  }
  if (all_task.length === 0) {
    res.status(200).json({
      message: `No Tasks To Display For ID ${id}, Please Add Some Tasks `,
    });
  } else {
    res.status(200).json(all_task);
  }
};

const addtask = async (req, res) => {
  const id = parseInt(req.params.id);

  const { task } = req.body;
  if (!task) {
    res.status(200).json({ message: "Task Cant Be Empty" });
  }
  const tasks = await task_details.create({
    UserId: id,
    task: task,
  });
  const user = await User.findOne({
    where: {
      id: id,
    },
  });
  const { count, rows } = await task_details.findAndCountAll({
    where: {
      UserId: id,
    },
  });

  let all_task = [];
  for (let i = 0; i < count; i++) {
    all_task.push(rows[i].task);
  }
  res.status(200).json({
    message: `Task Added To DB `,
  });
};
module.exports = { taskbyid, addtask };
