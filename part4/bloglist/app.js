const express = require("express");
const app = express();
const cors = require("cors");
const blogRouter = require("./controllers/blogs");
const logger = require("./utils/logger");
const config = require("./utils/config");
const mongoose = require("mongoose");

console.log("connecting to", config.MONGODB_URI);

mongoose
  .connect(config.MONGODB_URI)
  .then(() => {
    logger.info("connected to MongoDB");
  })
  .catch((error) => {
    logger.error("error connection to MongoDB:", error.message);
  });

app.use(cors());
app.use(express.json());

app.use("/api/blogs", blogRouter);

module.exports = app;
