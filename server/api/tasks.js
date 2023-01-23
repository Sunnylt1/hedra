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

router.post("/", async (req, res, next) => {
  try {
    const newTask = await Task.create(req.body);
    await newTask.save();
    res.json(newTask);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
