const express = require('express');
const router = express.Router();

const { getSession } = require("../model/session.js");

// const templates = require("../templates");

router.get('/:user_id', (req, res) => {
  // Get the user ID from the URL parameters
  const sid = req.signedCookies.sid;
  const session = getSession(sid)
  const current_user = req.session && req.session.user_id;
  const bookshelf_owner = Number(req.params.user_id);

  // const page_owner = Number(req.params.user_id);
  // if (current_user !== page_owner) {
  //   return res.status(401).send("<h1>You aren't allowed to see that</h1>");
  // }
  res.send(`<h1>Welcome to your bookshelf, User ID: ${bookshelf_owner}</h1>`);
});

module.exports = router;
