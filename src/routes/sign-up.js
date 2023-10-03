const bcrypt = require("bcryptjs");
const templates = require("../templates.js");
const express = require("express");
const { createUser } = require("../model/user.js");
const router = express.Router();

router.get("/", (req, res) => {
  res.send(templates.signUpPage());
});

router.post("/", (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400).send("Bad input");
  } else {
    bcrypt.hash(password, 12).then((hash) => {
      const user = createUser(email, hash);
      // Creating the session id
    });
    // Think about which page to redirect the user
    res.redirect("/log-in");
  }
});

module.exports = router;
