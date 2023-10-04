const express = require("express");
const cookieParser = require("cookie-parser");
const server = express();
// const staticHandler = express.static('public');
const bodyParser = require("body-parser");

const homeRoutes = require("./routes/home.js");
const signUpRoutes = require("./routes/sign-up.js");
const userPageRoutes = require("./routes/bookpage.js");
const logInRoutes = require("./routes/log-in.js");
const logOutRoutes = require("./routes/log-out.js");
// To DO -> store the secret variable in the env variables

const cookies = cookieParser(process.env.COOKIE_SECRET);
const body = express.urlencoded({ extended: false });

server.use(express.static("public"));
server.use(bodyParser.urlencoded({ extended: false }));
server.use(cookies);

server.use("/", homeRoutes);
server.use("/sign-up", signUpRoutes);
server.use("/my-shelf", userPageRoutes);
server.get("/my-shelf/:user_id", userPageRoutes.get);
server.post("/my-shelf/:user_id", body, userPageRoutes.post);
server.use("/log-in", logInRoutes);
server.use("/log-out", logOutRoutes);
server.get("/my-shelf/:user_id", logInRoutes.get);
server.post("/my-shelf/:user_id", body, logInRoutes.post);

module.exports = server;
