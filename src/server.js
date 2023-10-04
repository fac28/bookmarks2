const express = require('express');
const cookieParser = require('cookie-parser');
const server = express();
// const staticHandler = express.static('public');
const bodyParser = require('body-parser');

const homeRoutes = require('./routes/home.js');
const signUpRoutes = require('./routes/sign-up.js');
const userPageRoute = require('./routes/bookpage.js');
const logIn = require("./routes/log-in.js")
// To DO -> store the secret variable in the env variables

const cookies = cookieParser(process.env.COOKIE_SECRET);
const body = express.urlencoded({ extended: false });

//Middleware
// server.use((req, res, next) => {
//   const time = new Date().toLocaleTimeString("en-GB");
//   console.log(`${time} ${req.method} ${req.url}`);
//   next();
// });

server.use(bodyParser.urlencoded({ extended: false }));
server.use(cookies);

server.use('/', homeRoutes);
server.use('/sign-up', signUpRoutes);
server.use('/my-shelf', userPageRoute);
server.get('/my-shelf/:user_id', userPageRoute.get);
server.post('/my-shelf/:user_id', body, userPageRoute.post);
server.use('/log-in', logIn)

module.exports = server;
