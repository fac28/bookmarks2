const express = require("express");
const router = express.Router();

const { deleteBook } = require("../model/bookpage");
const { getSession } = require("../model/session.js");

router.post("/", (req, res) => {
  const book_id = req.body.book_id;
  deleteBook(book_id);

  //   res.redirect(`/my-shelf/${user.id}`);

  const sid = req.signedCookies.sid;
  const session = getSession(sid);

  const current_user = session && session.user_id;

  //   res.redirect(`/`);
  res.redirect(`/my-shelf/${current_user}`);
});

module.exports = router;
