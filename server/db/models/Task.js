const Sequelize = require("sequelize");
const db = require("../db");

const Task = db.define("task", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  isComplete: {
    type: Sequelize.ENUM("COMPLETE", "IN PROGRESS", "OPEN"),
    defaultValue: "COMPLETE",
    allowNull: false,
  },
});

module.exports = Task;
