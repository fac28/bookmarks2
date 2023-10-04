const express = require("express");

//Variables
const router = express.Router();
const templates = require("../templates");

router.get("/", (req, res) => {
  //to do
  res.send(templates.homePage());
});

module.exports = router;
