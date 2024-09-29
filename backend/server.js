const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const app = express();

// Load environment variables
require("dotenv").config();

// Connect to the database
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Define Routes
app.use("/api/users", require("./routes/users"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
