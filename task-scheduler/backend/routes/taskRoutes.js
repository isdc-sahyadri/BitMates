const express = require("express");
const router = express.Router();
const Task = require("../models/Task");

// Get all tasks
router.get("/", async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json(tasks);
  } catch (err) {
    console.error("Error fetching tasks:", err);
    res.status(500).send("Server error");
  }
});

// Add a new task
router.post("/", async (req, res) => {
  try {
    const { title, scheduledTime } = req.body;
    const newTask = new Task({ title, scheduledTime });
    await newTask.save();
    res.status(201).json(newTask);
  } catch (err) {
    console.error("Error adding task:", err);
    res.status(500).send("Server error");
  }
});

// Delete a task by ID
router.delete("/:id", async (req, res) => {
  try {
    const taskId = req.params.id;
    const deletedTask = await Task.findByIdAndDelete(taskId);
    if (!deletedTask) {
      return res.status(404).send("Task not found");
    }
    res.status(200).send("Task deleted successfully");
  } catch (err) {
    console.error("Error deleting task:", err);
    res.status(500).send("Server error");
  }
});

module.exports = router;
