import React, { useEffect, useState } from "react";
import { fetchTasks } from "../services/taskService";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks().then(setTasks);
  }, []);

  return (
    <div>
      <h2>Task List</h2>
      {tasks.map(task => (
        <div key={task._id}>
          <h4>{task.title} - {task.status}</h4>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
