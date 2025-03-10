// server.js
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");

// Load environment variables from .env file
dotenv.config();

// Connect to MongoDB
connectDB();

// Initialize Express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/creators", require("./routes/creatorRoutes"));
app.use("/api/backers", require("./routes/backerRoutes"));
app.use("/api/projects", require("./routes/projectRoutes"));
app.use("/api/rewards", require("./routes/rewardRoutes"));

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Something went wrong on the server" });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  if (!process.env.JWT_SECRET) {
    console.warn("Warning: JWT_SECRET is not set in environment variables");
  } else {
    console.log("JWT_SECRET is set and loaded successfully");
  }
});