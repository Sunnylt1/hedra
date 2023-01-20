const router = require("express").Router();
const { Task } = require("../db");

router.get("/", async (req, res, next) => {
  try {
    const allTasks = await Task.findAll();
    res.json(allTasks);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
