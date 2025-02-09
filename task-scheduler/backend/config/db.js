const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://cbhumi0107:QtMZ5zqw6pssiyde@taskcluster.x7bay.mongodb.net/?retryWrites=true&w=majority&appName=TaskCluster", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB Connected");
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

module.exports = connectDB;
