const db = require("../model/db");
const task_details = db.task_details;

const addtask = async (req, res) => {
  const id = parseInt(req.params.id);

  const { task } = req.body;

  if (!task) {
    res.status(400).json({ message: "Task Cant Be Empty" });
  }
  let flag = 0;
  for (let i = 0; i < task.length; i++) {
    const user = await task_details.findOne({
      where: {
        task: task[i],
        UserId: id,
      },
    });
    if (user) {
      flag = 1;
      res
        .status(400)
        .json({ message: `Task :- '${task[i]}' Already Present in DB ` });
      break;
    } else {
      const tasks = await task_details.create({
        UserId: id,
        task: task[i],
      });
    }
  }
  if (flag == 0) {
    res.status(200).json({ message: `Task Added In DB ` });
  }
};

module.exports = { addtask };
