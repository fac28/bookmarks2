const express = require("express");
const router = express.Router();

const { deleteSession } = require("../model/session");

router.get("/", (req, res) => {
  const sid = req.signedCookies.sid;
  deleteSession(sid);

  res.clearCookie("sid");

  res.redirect(`/`);
});

module.exports = router;
