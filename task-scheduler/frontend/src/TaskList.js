import axios from "axios";

const TaskList = ({ tasks, refreshTasks }) => {
  // Handle task removal
  const handleRemove = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/tasks/${id}`); // Remove task by ID
      refreshTasks(); // Refresh the task list after task removal
    } catch (error) {
      console.error("Error removing task:", error);
    }
  };

  if (!Array.isArray(tasks)) {
    return <p>Loading tasks...</p>;
  }

  return (
    <div>
      {tasks.length === 0 ? (
        <p>No tasks found!</p>
      ) : (
        tasks.map((task) => (
          <div key={task._id} style={{ marginBottom: "10px" }}>
            <p style={{ textDecoration: task.completed ? "line-through" : "none" }}>
              {task.title} - {new Date(task.scheduledTime).toLocaleString()}
            </p>
            <button onClick={() => handleRemove(task._id)}>Remove</button>
          </div>
        ))
      )}
    </div>
  );
};

export default TaskList;

