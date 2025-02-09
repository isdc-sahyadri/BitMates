import axios from "axios";
import { useState } from "react";

const TaskForm = ({ refreshTasks }) => {
  const [title, setTitle] = useState("");

  // Handle task form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (title.trim()) {
      try {
        // Make a request to add the task
        await axios.post("http://localhost:5000/tasks", {
          title,
          scheduledTime: new Date(),
        });
        setTitle(""); // Reset the input field after task submission
        refreshTasks(); // Refresh the task list after adding a new task
      } catch (error) {
        console.error("Error adding task:", error);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        placeholder="Enter a new task"
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
