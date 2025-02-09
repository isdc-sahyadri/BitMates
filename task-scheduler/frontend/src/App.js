import axios from "axios";
import React, { useEffect, useState } from "react";
import TaskForm from "./TaskForm"; // Import TaskForm
import TaskList from "./TaskList";

const App = () => {
  const [tasks, setTasks] = useState([]);

  // Function to fetch the latest tasks
  const refreshTasks = async () => {
    try {
      const response = await axios.get("http://localhost:5000/tasks");
      setTasks(response.data); // Set tasks from response
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  // Fetch tasks when the component mounts
  useEffect(() => {
    refreshTasks();
  }, []);

  return (
    <div>
      <h1>Task Scheduler</h1>
      <TaskForm refreshTasks={refreshTasks} /> {/* Pass refreshTasks to TaskForm */}
      <TaskList tasks={tasks} refreshTasks={refreshTasks} /> {/* Pass refreshTasks to TaskList */}
    </div>
  );
};

export default App;
