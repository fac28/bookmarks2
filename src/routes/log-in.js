const bcrypt = require("bcryptjs");
const express = require("express");
const router = express.Router();
const templates = require("../templates.js");
const { getUserByEmail } = require("../model/user");
const { createSession } = require("../model/session");

router.get("/", (req, res) => {
  res.send(templates.logIn());
});

router.post("/", (req, res) => {
  const { email, password } = req.body;
  const user = getUserByEmail(email);
  if (!email || !password || !user) {
    return res.status(400).send("<h1>Login failed</h1>");
  } else {
    const session_id = createSession(user.id);
    res.cookie("sid", session_id, {
      signed: true,
      maxAge: 1000 * 60 * 60 * 24 * 7, // 1 week
      sameSite: "lax",
      httpOnly: true,
    });
    res.redirect(`/my-shelf/${user.id}`)
  }
});

module.exports = router;
