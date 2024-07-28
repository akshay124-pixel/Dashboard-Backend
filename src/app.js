const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const apiRoutes = require("./routes/api");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(
  "mongodb+srv://mrakshaythakur124:Akshay0001@cluster0.mls7h5e.mongodb.net/visual_data",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("Connected to MongoDB");
});

// Routes
app.use("/api", apiRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
