const express = require("express");

//Variables
const router = express.Router();
// const templates = require("../templates");

router.get("/", (req, res) => {
  //to do
  res.send("<h1>Hi, are you an existing user?</h1>");
});

module.exports = router;
