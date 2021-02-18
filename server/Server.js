require("dotenv").config({ path: "./config/config.env" });
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const app = express();

// Morgan set-up
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// cors
app.use(cors());

// Body Parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Database connection
const connectDB = require("./config/db");
connectDB();

// Static files and folder
app.use(express.static("../client/public"));

// Routes
app.get("/", (req, res) => res.send("Server Running....."));
app.use("/skills", require("./routes/skillsRoute"));
app.use("/message", require("./routes/messageRoute"));
app.use("/bio", require("./routes/bioRoute"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
