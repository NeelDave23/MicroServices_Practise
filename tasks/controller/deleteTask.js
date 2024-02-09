const db = require("../model/db");
const task_details = db.task_details;

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

module.exports = { deletetask };
