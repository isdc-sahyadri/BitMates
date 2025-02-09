const express = require("express");
const Task = require("../models/Task");

const router = express.Router();

router.post("/add", async (req, res) => {
  const task = new Task(req.body);
  await task.save();
  res.json(task);
});

router.get("/", async (req, res) => {
  const tasks = await Task.find().populate("assignedTo");
  res.json(tasks);
});

router.put("/update/:id", async (req, res) => {
  const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updatedTask);
});

router.delete("/delete/:id", async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.json({ message: "Task deleted" });
});

module.exports = router;
