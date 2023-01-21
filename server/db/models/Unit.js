const Sequelize = require("sequelize");
const db = require("../db");

const Unit = db.define("unit", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  unitType: {
    type: Sequelize.TEXT,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  leaseStart: {
    type: Sequelize.DATEONLY,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  leaseEnd: {
    type: Sequelize.DATEONLY,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  occupancy: {
    type: Sequelize.ENUM("OCCUPIED", "VACANT"),
    defaultValue: "OCCUPIED",
    allowNull: false,
  },
  floorPlan: {
    type: Sequelize.TEXT,
    defaultValue:
      "https://images.edrawmax.com/examples/apartment-floor-plan/example2.png",
  },
});

module.exports = Unit;
