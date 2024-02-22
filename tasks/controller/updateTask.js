const db = require("../model/db");
const task_details = db.task_details;

const updatetask = async (req, res) => {
  const { old_task, new_task } = req.body;
  if (!old_task || !new_task) {
    res.status(400).json({ Message: "Please Enter all the Details" });
  }
  const user = await task_details.findOne({
    where: {
      task: old_task,
    },
  });
  if (!user) {
    res.status(400).json({ Message: "Task is Not Present" });
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

module.exports = { updatetask };
