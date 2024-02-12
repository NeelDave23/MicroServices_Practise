const db = require("../model/db");
const task_details = db.task_details;

const deletealltask = async (req, res) => {
  const user_id = parseInt(req.params.id);

  const deletetask = await task_details.destroy({
    where: { UserId: user_id },
  });
  if (!deletetask) {
    res.status(400).json({
      message: `No Tasks of User ID :- ${user_id} are present in DB `,
    });
  } else {
    res.status(200).json({
      message: `All the Tasks of User ID :- ${user_id} are Removed From DB `,
    });
  }
};
module.exports = { deletealltask };
