const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");

const config = require("./config");

const usersRouter = require("./routes/users");

const app = express();
const PORT = process.env.PORT || 4001 

// Body parse middleware
app.use(bodyParser.json());
app.use(
  cors({
    origin: '*',
    optionsSuccessStatus:200,
  }));

// Router Path
app.use("/users", usersRouter);
