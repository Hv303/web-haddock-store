const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

const authRoutes = require("./routes/auth");  // Import routes auth

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect("mongodb+srv://HvCuy:n9Mz9YPAVwy9c2L0@hv303.tcm2vna.mongodb.net/websiteStoreDB?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log("Connected to MongoDB");
}).catch((error) => console.log("MongoDB connection error:", error));

// Use the auth routes
app.use("/auth", authRoutes);

// Start the server
app.listen(5000, () => {
  console.log("Server running on port 5000");
});
