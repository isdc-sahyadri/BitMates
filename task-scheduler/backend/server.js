const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const taskRoutes = require("./routes/taskRoutes");

const app = express();
connectDB();

app.use(cors());
app.use(express.json());
app.use("/tasks", taskRoutes);

require("./scheduler"); // Start the task scheduler

app.listen(5000, () => console.log("Server running on port 5000"));
