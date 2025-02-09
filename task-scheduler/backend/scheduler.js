const Task = require("./models/Task");

const checkTasks = async () => {
  const now = new Date();
  const tasks = await Task.find({ completed: false, scheduledTime: { $lte: now } });

  tasks.forEach(async (task) => {
    console.log(`Executing Task: ${task.title}`);
    task.completed = true;
    await task.save();
  });
};

setInterval(checkTasks, 30000); // Runs every 30 seconds
