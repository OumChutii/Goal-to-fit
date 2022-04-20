// const express = require('express');
// const bodyParser = require('body-parser')

// const usersRouter = require('./routes/users')
// const actRouter = require('./routes/activities')

// const app = express();

// // Body parse middleware
// app.use(bodyParser.json());
// // app.use(bodyParser.urlencoded({extended:false}));

// app.get('/', (req, res) => {
//     res.send(`Welcome to web server on port ${PORT}`);
// })

// app.use('/users', usersRouter)
// app.use('/activities', actRouter)


// const PORT = process.env.PORT || 4001;
// app.listen(PORT, () => console.log(`server is running  on port ${PORT}`));

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");

const config = require("./config");

const usersRouter = require("./routes/users");

const app = express();

// Body parse middleware
app.use(bodyParser.json());
app.use(
  cors({
    origin: '*',
    optionsSuccessStatus:200,
  }));

// Router Path
app.use("/users", usersRouter);

const boot = async () => {
  // Connect to mongodb

  await mongoose.connect(config.mongoUri, config.mongoOptions);
  // Start express server
  app.listen(4000, () => {
    console.log("Server is running");
  });
};

boot();