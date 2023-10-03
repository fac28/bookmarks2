const express = require("express");
const server = express();
const staticHandler = express.static("public");
const bodyParser = require("body-parser");

const homeRoutes = require(".routes/home.js");
const signUpRoutes = require(".routes/sign-up.js");

//Middleware
server.use((req, res, next) => {
  const time = new Date().toLocaleTimeString("en-GB");
  console.log(`${time} ${req.method} ${req.url}`);
  next();
});

server.use(bodyParser.urlencoded({ extended: false }));
server.use(staticHandler);

server.use("/", homeRoutes);
server.use("/sign-up", signUpRoutes);

module.exports = server;
