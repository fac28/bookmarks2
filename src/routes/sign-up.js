const bcrypt = require('bcryptjs');
const templates = require('../templates.js');
const express = require('express');
const { createSession } = require('../model/session.js');
const { createUser } = require('../model/user.js');
const router = express.Router();

router.get('/', (req, res) => {
  res.send(templates.signUpPage());
});

router.post('/', (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400).send('Bad input');
  } else {
    bcrypt.hash(password, 12).then((hash) => {
      const user = createUser(email, hash);
      const session_id = createSession(user.id);
      res.cookie('sid', session_id, {
        signed: true,
        maxAge: 1000 * 60 * 60 * 24 * 7, // 1 week
        sameSite: 'lax',
        httpOnly: true,
      });
      console.log(user.id);
      res.redirect(`/my-shelf/${user.id}`);
    });
  }
});

module.exports = router;
