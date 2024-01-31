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
  const user = await task_details.findOne({
    where: {
      task: task,
    },
  });
  if (user) {
    res.status(200).json({ message: "Task Already Present in DB " });
  } else {
    const tasks = await task_details.create({
      UserId: id,
      task: task,
    });

    res.status(200).json({
      message: `Task Added To DB `,
    });
  }
};

const deletetask = async (req, res) => {
  const { task } = req.body;
  if (!task) {
    res.status(200).json({ message: "Task Cant Be Empty" });
  } else {
    const id = parseInt(req.params.id);
    for (let i = 0; i < task.length; i++) {
      const deletetask = await task_details.destroy({
        where: { task: task[i], UserId: id },
      });
    }

    res.status(200).json({
      message: `Task Removed To DB `,
    });
  }
};

const updatetask = async (req, res) => {
  const { old_task, new_task } = req.body;
  if (!old_task || !new_task) {
    res.json({ Message: "Please Enter all the Details" });
  }
  const user = await task_details.findOne({
    where: {
      task: old_task,
    },
  });
  if (!user) {
    res.json({ Message: "Task is Not Present" });
  } else {
    const user_id = parseInt(req.params.id);
    const tasks = await task_details.update(
      { task: new_task },
      {
        where: {
          task: old_task,
        },
      }
    );

    res.status(200).json({
      message: `Task Updated `,
    });
  }
};

const deletealltask = async (req, res) => {
  const user_id = parseInt(req.params.id);

  const deletetask = await task_details.destroy({
    where: { UserId: user_id },
  });
  if (!deletetask) {
    res.status(200).json({
      message: `No Tasks of User ID :- ${user_id} are present in DB `,
    });
  } else {
    res.status(200).json({
      message: `All the Tasks of User ID :- ${user_id} are Removed From DB `,
    });
  }
};
module.exports = { taskbyid, addtask, deletetask, updatetask, deletealltask };
