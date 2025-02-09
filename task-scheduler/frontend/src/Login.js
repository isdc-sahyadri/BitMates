import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = ({ login }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Check if the user is already logged in
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true"
  );

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/"); // Redirect to the main page if already logged in
    }
  }, [isLoggedIn, navigate]);

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === "admin" && password === "password") {
      localStorage.setItem("isLoggedIn", "true"); // Save login state
      setIsLoggedIn(true);
      login();
      navigate("/");
    } else {
      setError("Invalid username or password! Try again.");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Welcome to Task Scheduler</h2>
        <p>Plan your day efficiently, meet deadlines, and stay productive.</p>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Click to Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
