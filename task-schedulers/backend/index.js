const express = require("express");
const tasksRouter = require("./routes/tasks");

const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");

dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Database Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

app.use("/tasks", tasksRouter);
app.get("/", (req, res) => res.send("API is running"));

app.listen(5000, () => console.log("Server running on port 5000"));
