module.exports = (sequelize, DataTypes) => {
  const Task_details = sequelize.define(
    "Task_details",
    {
      // Model attributes are defined here

      UserId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      task: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      tableName: "tasks",
    }
  );

  console.log(Task_details === sequelize.models.Task_details);
  return Task_details;
};
