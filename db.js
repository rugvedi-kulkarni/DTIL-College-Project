const mongoose = require("mongoose");

const MONGO_URI = "mongodb://127.0.0.1:27017/hospital_db";

async function connectDB() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("MongoDB connected: hospital_db");
  } catch (error) {
    console.error("MongoDB connection failed. Is MongoDB running?", error.message);
    process.exit(1);
  }
}

module.exports = connectDB;
