import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import axios from "axios";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
import Login from "./Login"; // Import Login Page

const TaskScheduler = () => {
  const [tasks, setTasks] = useState([]);

  // Function to fetch the latest tasks
  const refreshTasks = async () => {
    try {
      const response = await axios.get("http://localhost:5000/tasks");
      setTasks(response.data);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  useEffect(() => {
    refreshTasks();
  }, []);

  return (
    <div>
      <h1>Task Scheduler</h1>
      <TaskForm refreshTasks={refreshTasks} />
      <TaskList tasks={tasks} refreshTasks={refreshTasks} />
    </div>
  );
};

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("auth") === "true" // Persist login state
  );

  const login = () => {
    localStorage.setItem("auth", "true");
    setIsAuthenticated(true);
  };

  const logout = () => {
    localStorage.removeItem("auth");
    setIsAuthenticated(false);
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            isAuthenticated ? (
              <TaskScheduler />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route path="/login" element={<Login login={login} />} />
      </Routes>
    </Router>
  );
};

export default App;
