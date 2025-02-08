import React, { useState } from "react";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

function App() {
  const [tasksUpdated, setTasksUpdated] = useState(false);

  const handleTaskAdded = () => {
    setTasksUpdated(!tasksUpdated);
  };

  return (
    <div>
      <h1>Task Scheduler Dashboard</h1>
      <p>Manage and track your tasks efficiently!</p>
      <TaskForm onTaskAdded={handleTaskAdded} />
      <TaskList key={tasksUpdated} />
    </div>
  );
}

export default App;